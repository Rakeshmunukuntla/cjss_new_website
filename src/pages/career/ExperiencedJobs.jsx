"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Search,
  X,
  Clock,
  ChevronLeft,
  ChevronRight,
  Upload,
  CheckCircle,
  User,
  Mail,
  Phone,
  GraduationCap,
  FileText,
} from "lucide-react";

import CareerNavigationBar from "./CareerNavigationBar";

const JobOpeningsBase = ({ filterMode, pageSize = 6, navigateTo }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("relevance");
  const [currentPage, setCurrentPage] = useState(1);

  const [selectedJob, setSelectedJob] = useState(null);
  const [applyJob, setApplyJob] = useState(null);

  // Multi-step apply form state
  const [applyStep, setApplyStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [qualification, setQualification] = useState("");
  const [resumeFile, setResumeFile] = useState(null);
  const [formError, setFormError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const [showSuccess, setShowSuccess] = useState(false);

  // Navigation links
  const links = [
    { label: "Home", page: "CarrierHome" },
    { label: "Life at CJSS", page: "CarrierLife" },
    { label: "Job for Fresher", page: "CarrierFresher" },
    { label: "Job for Experienced", page: "CarrierExperienced" },
    { label: "Problems we solve", page: "CarrierProblems" },
  ];

  // Modal blur state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Update modal state when any modal opens/closes
  useEffect(() => {
    setIsModalOpen(selectedJob !== null || applyJob !== null);
  }, [selectedJob, applyJob]);

  // Reset apply form whenever a new job is opened in Apply modal
  useEffect(() => {
    if (applyJob) {
      setApplyStep(1);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setQualification("");
      setResumeFile(null);
      setFormError("");
      setSubmitting(false);
    }
  }, [applyJob]);

  // Fetch jobs
  useEffect(() => {
    async function loadJobs() {
      try {
        setLoading(true);
        const res = await fetch("https://server-node-cjss.onrender.com/jobs");
        const data = await res.json();
        setJobs(data);
      } catch (e) {
        console.error("Error fetching jobs", e);
      } finally {
        setLoading(false);
      }
    }
    loadJobs();
  }, []);

  // Convert API → UI model
  const openRoles = useMemo(
    () =>
      jobs.map((j) => ({
        id: j._id,
        title: j.title,
        category: j.category,
        experience: j.experience,
        description: j.description,
        skills: j.skills || [],
        location: j.locationType,
        createdAt: j.createdAt,
      })),
    [jobs]
  );

  const isFresher = (exp) => exp.trim().startsWith("0");
  const isExperienced = (exp) => !exp.trim().startsWith("0");

  // Filter by mode
  const rolesByMode = useMemo(() => {
    if (filterMode === "fresher")
      return openRoles.filter((r) => isFresher(r.experience));
    if (filterMode === "experienced")
      return openRoles.filter((r) => isExperienced(r.experience));
    return openRoles;
  }, [filterMode, openRoles]);

  // Categories
  const categories = ["all", ...new Set(rolesByMode.map((r) => r.category))];

  // Category filter
  const rolesByCategory =
    selectedCategory === "all"
      ? rolesByMode
      : rolesByMode.filter((r) => r.category === selectedCategory);

  // Search filter
  const rolesBySearch = rolesByCategory.filter((r) =>
    (r.title + " " + r.description + " " + r.skills.join(" "))
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const expNum = (exp) => Number(exp.match(/\d+/)?.[0] ?? 0);

  // Sort
  const sortedRoles = useMemo(() => {
    let arr = [...rolesBySearch];
    switch (sortBy) {
      case "title-asc":
        return arr.sort((a, b) => a.title.localeCompare(b.title));
      case "title-desc":
        return arr.sort((a, b) => b.title.localeCompare(a.title));
      case "exp-asc":
        return arr.sort((a, b) => expNum(a.experience) - expNum(b.experience));
      case "exp-desc":
        return arr.sort((a, b) => expNum(b.experience) - expNum(a.experience));
      default:
        return arr;
    }
  }, [rolesBySearch, sortBy]);

  // Pagination
  const totalPages = Math.ceil(sortedRoles.length / pageSize) || 1;
  const paginatedRoles = sortedRoles.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  // Submit handler
  const handleSubmitApplication = async () => {
    if (!applyJob) return;

    if (!firstName || !lastName) {
      setFormError("Please enter your full name.");
      return;
    }
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setFormError("Please enter a valid email address.");
      return;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
      setFormError("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (!qualification) {
      setFormError("Please select your highest qualification.");
      return;
    }
    if (!resumeFile) {
      setFormError("Please upload your resume.");
      return;
    }

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(resumeFile.type)) {
      setFormError("Only PDF, DOC, or DOCX files are allowed.");
      return;
    }

    setFormError("");
    setSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("jobId", applyJob.id);
      formData.append("jobTitle", applyJob.title);
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("qualification", qualification);
      formData.append("resume", resumeFile);

      const res = await fetch(
        "https://server-node-cjss.onrender.com/applications/apply",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      if (!res.ok || data.error) {
        setFormError(data.error || "Something went wrong. Please try again.");
        setSubmitting(false);
        return;
      }

      setShowSuccess(true);
      setApplyJob(null);

      setTimeout(() => {
        setShowSuccess(false);
      }, 2500);
    } catch (err) {
      console.error(err);
      setFormError("Server error. Please try again later.");
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* ⭐ FIXED NAVBAR - Always visible, not blurred */}
      <div className={isModalOpen ? "relative z-[9998]" : ""}>
        <CareerNavigationBar links={links} navigateTo={navigateTo} />
      </div>

      {/* Main content wrapper with blur effect when modal is open */}
      <div
        className={`transition-all duration-300 ${
          isModalOpen ? "blur-sm brightness-75" : ""
        }`}
        style={{
          pointerEvents: isModalOpen ? "none" : "auto",
        }}
      >
        {/* Spacer for fixed navbar */}
        <div className="h-[80px]" />

        <section className="px-4 py-20 bg-white sm:px-6 lg:px-8">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
          </div>

          <div className="relative mx-auto max-w-7xl">
            {/* HEADER */}
            <div className="mb-12 text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full text-blue-700 bg-blue-50 border border-blue-100">
                <Briefcase className="w-4 h-4" />
                {filterMode === "fresher"
                  ? "Fresher Opportunities"
                  : filterMode === "experienced"
                  ? "Experienced Roles"
                  : "Career Opportunities"}
              </span>

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">
                {filterMode === "fresher"
                  ? "Start Your Career Journey"
                  : filterMode === "experienced"
                  ? "Elevate Your Career"
                  : "Find Your Perfect Role"}
              </h2>

              <p className="max-w-2xl mx-auto mt-4 text-base text-slate-600">
                Search, filter & apply for your dream role. Join our team of
                innovators.
              </p>
            </div>

            {/* SEARCH + SORT */}
            <div className="flex flex-col items-center justify-center w-full gap-4 mb-10 lg:flex-row">
              {/* SEARCH */}
              <div className="relative w-full lg:w-[55%]">
                <Search className="absolute w-5 h-5 -translate-y-1/2 left-4 top-1/2 text-slate-400" />
                <input
                  placeholder="Search by title, skills, or description…"
                  className="w-full py-3.5 pl-12 pr-4 text-slate-800 bg-white border border-slate-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all shadow-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* SORT */}
              <div className="w-full lg:w-[25%]">
                <select
                  className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-slate-700 shadow-sm cursor-pointer"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="relevance">Sort: Relevance</option>
                  <option value="title-asc">Title A → Z</option>
                  <option value="title-desc">Title Z → A</option>
                  <option value="exp-asc">Experience Low → High</option>
                  <option value="exp-desc">Experience High → Low</option>
                </select>
              </div>
            </div>

            {/* CATEGORY FILTER */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setCurrentPage(1);
                  }}
                  className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 capitalize ${
                    selectedCategory === cat
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* JOB CARDS */}
            {loading ? (
              <div className="flex flex-col items-center justify-center py-20">
                <div className="w-12 h-12 border-4 rounded-full border-slate-200 border-t-blue-600 animate-spin" />
                <p className="mt-4 text-slate-500">Loading jobs…</p>
              </div>
            ) : paginatedRoles.length === 0 ? (
              <div className="py-20 text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-slate-100">
                  <Search className="w-8 h-8 text-slate-400" />
                </div>
                <p className="text-lg font-medium text-slate-700">
                  No jobs found
                </p>
                <p className="mt-2 text-slate-500">
                  Try adjusting your search or filters
                </p>
              </div>
            ) : (
              <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2">
                <AnimatePresence>
                  {paginatedRoles.map((job, index) => (
                    <motion.div
                      key={job.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="group p-6 bg-white border border-slate-200 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 hover:border-blue-200"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {job.title}
                        </h3>
                        <span className="shrink-0 px-3 py-1 text-xs font-medium rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                          {job.category}
                        </span>
                      </div>

                      <p className="mt-3 text-sm leading-relaxed text-slate-600 line-clamp-3">
                        {job.description}
                      </p>

                      <div className="flex items-center gap-4 mt-4 text-sm">
                        <span className="flex items-center gap-1.5 text-slate-500">
                          <Clock className="w-4 h-4 text-purple-500" />
                          {job.experience}
                        </span>
                        <span className="flex items-center gap-1.5 text-slate-500">
                          <MapPin className="w-4 h-4 text-emerald-500" />
                          {job.location}
                        </span>
                      </div>

                      <div className="flex gap-3 mt-5 pt-5 border-t border-slate-100">
                        <button
                          onClick={() => setSelectedJob(job)}
                          className="flex-1 py-2.5 text-sm font-medium border border-slate-200 rounded-xl text-slate-700 bg-slate-50 hover:bg-slate-100 hover:border-slate-300 transition-all"
                        >
                          View Details
                        </button>
                        <button
                          onClick={() => setApplyJob(job)}
                          className="flex-1 py-2.5 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all"
                        >
                          Apply Now
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}

            {/* PAGINATION */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-12">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {Array.from({ length: totalPages }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentPage(idx + 1)}
                    className={`w-10 h-10 flex items-center justify-center rounded-lg text-sm font-medium transition-all ${
                      currentPage === idx + 1
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                        : "border border-slate-200 text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}

                <button
                  onClick={() =>
                    setCurrentPage(Math.min(totalPages, currentPage + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* JOB DETAILS MODAL - Outside blur wrapper */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-start justify-center p-4 overflow-y-auto"
            style={{ paddingTop: "100px", paddingBottom: "40px" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/50"
              onClick={() => setSelectedJob(null)}
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: -20 }}
              className="w-full max-w-2xl relative bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Close */}
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute z-10 p-2 transition-colors rounded-full top-4 right-4 bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="p-6 pb-4 border-b border-slate-100 bg-gradient-to-br from-blue-50 to-purple-50">
                <span className="inline-flex px-3 py-1 mb-3 text-xs font-semibold rounded-full bg-blue-100 text-blue-700">
                  {selectedJob.category}
                </span>
                <h3 className="text-2xl font-bold text-slate-900">
                  {selectedJob.title}
                </h3>

                <div className="flex flex-wrap items-center gap-4 mt-4">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="p-1.5 rounded-lg bg-purple-100">
                      <Clock className="w-4 h-4 text-purple-600" />
                    </div>
                    <span>{selectedJob.experience}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="p-1.5 rounded-lg bg-emerald-100">
                      <MapPin className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span>{selectedJob.location}</span>
                  </div>
                </div>

                {selectedJob.createdAt && (
                  <p className="mt-3 text-xs text-slate-500">
                    Posted on {new Date(selectedJob.createdAt).toDateString()}
                  </p>
                )}
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                <div>
                  <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-slate-500">
                    Job Description
                  </h4>
                  <p className="leading-relaxed text-slate-700">
                    {selectedJob.description}
                  </p>
                </div>

                <div>
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500">
                    Skills Required
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedJob.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 text-sm bg-slate-100 text-slate-700 rounded-lg border border-slate-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => {
                    setApplyJob(selectedJob);
                    setSelectedJob(null);
                  }}
                  className="w-full py-3.5 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all"
                >
                  Apply for this Position
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* APPLY FORM MODAL - Outside blur wrapper */}
      <AnimatePresence>
        {applyJob && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-start justify-center p-4 overflow-y-auto"
            style={{ paddingTop: "100px", paddingBottom: "40px" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/50"
              onClick={() => setApplyJob(null)}
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: -20 }}
              className="w-full max-w-lg relative bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setApplyJob(null)}
                className="absolute z-10 p-2 transition-colors rounded-full top-4 right-4 bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-6 border-b border-slate-100 bg-gradient-to-br from-blue-50 to-purple-50">
                <h3 className="text-xl font-bold text-slate-900">
                  Apply for {applyJob.title}
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Complete the form below to submit your application
                </p>
              </div>

              <div className="p-6">
                {/* Step indicators */}
                <div className="flex justify-center gap-2 mb-6">
                  {[
                    { num: 1, icon: User, label: "Personal" },
                    { num: 2, icon: GraduationCap, label: "Education" },
                    { num: 3, icon: FileText, label: "Resume" },
                    { num: 4, icon: CheckCircle, label: "Review" },
                  ].map((step) => (
                    <div key={step.num} className="flex flex-col items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                          applyStep === step.num
                            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                            : applyStep > step.num
                            ? "bg-emerald-500 text-white"
                            : "bg-slate-100 text-slate-400"
                        }`}
                      >
                        {applyStep > step.num ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : (
                          <step.icon className="w-5 h-5" />
                        )}
                      </div>
                      <span
                        className={`mt-1 text-[10px] font-medium ${
                          applyStep >= step.num
                            ? "text-slate-700"
                            : "text-slate-400"
                        }`}
                      >
                        {step.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Error banner */}
                {formError && (
                  <div className="p-3 mb-4 text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl">
                    {formError}
                  </div>
                )}

                {/* STEP 1 – Personal Info */}
                {applyStep === 1 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block mb-1.5 text-sm font-medium text-slate-700">
                          First Name
                        </label>
                        <input
                          className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-slate-800"
                          placeholder="John"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block mb-1.5 text-sm font-medium text-slate-700">
                          Last Name
                        </label>
                        <input
                          className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-slate-800"
                          placeholder="Doe"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block mb-1.5 text-sm font-medium text-slate-700">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute w-5 h-5 -translate-y-1/2 left-3 top-1/2 text-slate-400" />
                        <input
                          type="email"
                          className="w-full py-2.5 pl-10 pr-4 bg-white border border-slate-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-slate-800"
                          placeholder="you@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block mb-1.5 text-sm font-medium text-slate-700">
                        Mobile Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute w-5 h-5 -translate-y-1/2 left-3 top-1/2 text-slate-400" />
                        <input
                          type="tel"
                          className="w-full py-2.5 pl-10 pr-4 bg-white border border-slate-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-slate-800"
                          placeholder="9876543210"
                          maxLength={10}
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="flex justify-end pt-4">
                      <button
                        onClick={() => {
                          if (!firstName || !lastName) {
                            setFormError("Please enter your full name.");
                            return;
                          }
                          if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                            setFormError("Please enter a valid email address.");
                            return;
                          }
                          if (!phone.match(/^[0-9]{10}$/)) {
                            setFormError(
                              "Please enter a valid 10-digit mobile number."
                            );
                            return;
                          }
                          setFormError("");
                          setApplyStep(2);
                        }}
                        className="px-6 py-2.5 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 shadow-md hover:shadow-lg transition-all"
                      >
                        Next Step →
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2 – Education */}
                {applyStep === 2 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block mb-1.5 text-sm font-medium text-slate-700">
                        Highest Education Qualification
                      </label>
                      <select
                        className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-slate-800 cursor-pointer"
                        value={qualification}
                        onChange={(e) => setQualification(e.target.value)}
                      >
                        <option value="">Select Qualification</option>
                        <option value="B.Tech">B.Tech / B.E</option>
                        <option value="M.Tech">M.Tech / M.E</option>
                        <option value="MCA">MCA</option>
                        <option value="MBA">MBA</option>
                        <option value="Degree">Degree</option>
                      </select>
                    </div>

                    <div className="flex justify-between pt-4">
                      <button
                        onClick={() => setApplyStep(1)}
                        className="px-6 py-2.5 text-sm font-medium border border-slate-200 rounded-xl text-slate-700 hover:bg-slate-50 transition-all"
                      >
                        ← Back
                      </button>
                      <button
                        onClick={() => {
                          if (!qualification) {
                            setFormError(
                              "Please select your highest qualification."
                            );
                            return;
                          }
                          setFormError("");
                          setApplyStep(3);
                        }}
                        className="px-6 py-2.5 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 shadow-md hover:shadow-lg transition-all"
                      >
                        Next Step →
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3 – Resume Upload */}
                {applyStep === 3 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block mb-1.5 text-sm font-medium text-slate-700">
                        Upload Resume
                      </label>
                      <div className="relative">
                        <label className="flex flex-col items-center justify-center w-full p-8 border-2 border-dashed rounded-xl cursor-pointer border-slate-200 hover:border-blue-400 hover:bg-blue-50/50 transition-all">
                          <Upload className="w-10 h-10 mb-3 text-slate-400" />
                          <span className="text-sm font-medium text-slate-700">
                            {resumeFile
                              ? resumeFile.name
                              : "Click to upload or drag & drop"}
                          </span>
                          <span className="mt-1 text-xs text-slate-500">
                            PDF, DOC, or DOCX (Max 5MB)
                          </span>
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            className="hidden"
                            onChange={(e) =>
                              setResumeFile(e.target.files?.[0] ?? null)
                            }
                          />
                        </label>
                      </div>
                    </div>

                    <div className="flex justify-between pt-4">
                      <button
                        onClick={() => setApplyStep(2)}
                        className="px-6 py-2.5 text-sm font-medium border border-slate-200 rounded-xl text-slate-700 hover:bg-slate-50 transition-all"
                      >
                        ← Back
                      </button>
                      <button
                        onClick={() => {
                          if (!resumeFile) {
                            setFormError("Please upload your resume.");
                            return;
                          }
                          setFormError("");
                          setApplyStep(4);
                        }}
                        className="px-6 py-2.5 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 shadow-md hover:shadow-lg transition-all"
                      >
                        Next Step →
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 4 – Review & Submit */}
                {applyStep === 4 && (
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                      Review Your Application
                    </h4>

                    <div className="p-4 space-y-3 bg-slate-50 rounded-xl border border-slate-200">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Name</span>
                        <span className="font-medium text-slate-800">
                          {firstName} {lastName}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Email</span>
                        <span className="font-medium text-slate-800">
                          {email}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Mobile</span>
                        <span className="font-medium text-slate-800">
                          {phone}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Qualification</span>
                        <span className="font-medium text-slate-800">
                          {qualification}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Resume</span>
                        <span className="font-medium text-slate-800 truncate max-w-[200px]">
                          {resumeFile?.name ?? "Not uploaded"}
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-between pt-4">
                      <button
                        onClick={() => setApplyStep(3)}
                        className="px-6 py-2.5 text-sm font-medium border border-slate-200 rounded-xl text-slate-700 hover:bg-slate-50 transition-all"
                      >
                        ← Back
                      </button>

                      <button
                        disabled={submitting}
                        onClick={handleSubmitApplication}
                        className={`px-6 py-2.5 text-sm font-semibold text-white rounded-xl shadow-md transition-all ${
                          submitting
                            ? "bg-slate-400 cursor-not-allowed"
                            : "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:shadow-lg"
                        }`}
                      >
                        {submitting ? "Submitting..." : "Submit Application ✓"}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SUCCESS TOAST */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[99999]"
          >
            <div className="flex items-center gap-3 px-6 py-4 bg-white border border-emerald-200 rounded-2xl shadow-2xl">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100">
                <CheckCircle className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">
                  Application Submitted!
                </p>
                <p className="text-sm text-slate-600">
                  We'll be in touch soon.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Fresher Jobs Page
const JobOpeningsFresher = ({ navigateTo }) => {
  return (
    <JobOpeningsBase
      filterMode="experienced"
      pageSize={6}
      navigateTo={navigateTo}
    />
  );
};

// Experienced Jobs Page
const JobOpeningsExperienced = ({ navigateTo }) => {
  return (
    <JobOpeningsBase
      filterMode="experienced"
      pageSize={6}
      navigateTo={navigateTo}
    />
  );
};

// All Jobs Page
const JobOpeningsAll = ({ navigateTo }) => {
  return (
    <JobOpeningsBase filterMode="all" pageSize={6} navigateTo={navigateTo} />
  );
};

export default JobOpeningsFresher;
export { JobOpeningsExperienced, JobOpeningsAll };
