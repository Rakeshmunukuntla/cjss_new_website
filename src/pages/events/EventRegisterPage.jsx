"use client";

import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EventRegisterPage() {
  const { id: eventId } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    jobTitle: "",
  });

  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const emailRegex = /^\S+@\S+\.\S+$/;
  const phoneRegex = /^[0-9]{10,15}$/;
  const textOnlyRegex = /^[A-Za-z\s()\/-]*$/;

  const validateForm = () => {
    let newErrors = {};

    if (!form.fullName.trim()) newErrors.fullName = "Full name is required";
    else if (!textOnlyRegex.test(form.fullName))
      newErrors.fullName = "Only alphabets allowed";

    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(form.email))
      newErrors.email = "Invalid email format";

    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!phoneRegex.test(form.phone))
      newErrors.phone = "Phone must be 10–15 digits";

    if (!form.organization.trim())
      newErrors.organization = "Organization is required";
    else if (!textOnlyRegex.test(form.organization))
      newErrors.organization = "Only alphabets allowed";

    if (!form.jobTitle.trim()) newErrors.jobTitle = "Job title is required";
    else if (!textOnlyRegex.test(form.jobTitle))
      newErrors.jobTitle = "Only alphabets allowed";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const res = await fetch(
        "https://server-node-cjss.onrender.com/events/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...form, eventId }),
        }
      );

      const data = await res.json();

      if (data.success) {
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
          navigate("/");
        }, 2500);
      }
    } catch (error) {
      console.error("Registration error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white px-10 py-8 rounded-2xl shadow-2xl text-center border border-gray-200">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-sky-500 to-purple-600 bg-clip-text text-transparent">
              Registration Successful!
            </h2>
            <p className="text-gray-600 mt-3">
              Thank you! We will contact you soon.
            </p>
          </div>
        </div>
      )}

      <section className="min-h-screen bg-gray-50 flex justify-center items-center text-gray-900 px-6 py-12">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl bg-white p-10 rounded-3xl shadow-xl border border-gray-200"
        >
          <h2 className="text-4xl text-center font-extrabold bg-gradient-to-r from-sky-500 to-purple-600 bg-clip-text text-transparent mb-8">
            Event Registration
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label className="text-sm mb-1 block text-gray-700 font-medium">
                Full Name *
              </label>
              <input
                className="rounded-xl w-full py-3 px-4 bg-gray-50 border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition text-gray-900"
                value={form.fullName}
                onChange={(e) => setForm({ ...form, fullName: e.target.value })}
              />
              <div className="h-5 mt-1">
                {errors.fullName && (
                  <p className="text-red-500 text-sm">{errors.fullName}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm mb-1 block text-gray-700 font-medium">
                Email *
              </label>
              <input
                type="email"
                className="rounded-xl w-full py-3 px-4 bg-gray-50 border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition text-gray-900"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <div className="h-5 mt-1">
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm mb-1 block text-gray-700 font-medium">
                Phone Number *
              </label>
              <input
                className="rounded-xl w-full py-3 px-4 bg-gray-50 border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition text-gray-900"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
              <div className="h-5 mt-1">
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* Organization */}
            <div>
              <label className="text-sm mb-1 block text-gray-700 font-medium">
                Organization *
              </label>
              <input
                className="rounded-xl w-full py-3 px-4 bg-gray-50 border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition text-gray-900"
                value={form.organization}
                onChange={(e) =>
                  setForm({ ...form, organization: e.target.value })
                }
              />
              <div className="h-5 mt-1">
                {errors.organization && (
                  <p className="text-red-500 text-sm">{errors.organization}</p>
                )}
              </div>
            </div>

            {/* Job Title */}
            <div className="md:col-span-2">
              <label className="text-sm mb-1 block text-gray-700 font-medium">
                Job Title *
              </label>
              <input
                className="rounded-xl w-full py-3 px-4 bg-gray-50 border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition text-gray-900"
                value={form.jobTitle}
                onChange={(e) => setForm({ ...form, jobTitle: e.target.value })}
              />
              <div className="h-5 mt-1">
                {errors.jobTitle && (
                  <p className="text-red-500 text-sm">{errors.jobTitle}</p>
                )}
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-8 w-full py-4 text-white bg-gradient-to-r from-sky-500 to-purple-600 hover:from-sky-600 hover:to-purple-700 rounded-xl font-semibold text-lg transition shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Submit Registration"}
          </button>
        </form>
      </section>
    </>
  );
}
