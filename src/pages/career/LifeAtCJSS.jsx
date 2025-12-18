"use client";

import CareerNavigationBar from "./CareerNavigationBar";
import {
  Handshake,
  Lightbulb,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const HERO_IMAGES = [
  { src: "/images/Herobanner1.jpeg", alt: "CJSS team collaborating" },
  { src: "/images/Herobanner2.jpeg", alt: "Innovation brainstorming session" },
  { src: "/images/Herobanner3.jpg", alt: "CJSS culture celebration" },
];

// ───────────────── CULTURE CARDS CONFIG ─────────────────

const CULTURE_CARDS = [
  {
    id: "mission",
    title: "Mission & Vision",
    icon: Target,
    shortDescription:
      "A clear direction that connects our work to long-term impact.",
    image: "/images/Mission-vision.jpeg",
    fullDescription:
      "Our mission is to deliver technology and commerce solutions that truly move the needle for our clients and their customers. Our vision is to be the trusted partner that helps businesses move faster, smarter, and more confidently into the future.",
    bullets: [
      "Every project is tied to a clear outcome and purpose.",
      "We think long-term, not just release-to-release.",
      "We balance innovation with stability and responsibility.",
    ],
    gradientClass: "from-blue-600 to-cyan-500",
    bgClass: "bg-gradient-to-br from-blue-50 to-cyan-50",
    borderClass: "border-blue-200",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: "values",
    title: "Values That Guide Us",
    icon: Sparkles,
    shortDescription:
      "Principles that shape how we decide, deliver, and grow together.",
    image: "/images/Values-guide.jpeg",
    fullDescription:
      "We lead with integrity, ownership, and respect. Our values are not slides in a deck—they shape how we collaborate, how we make decisions, and how we show up for each other every day.",
    bullets: [
      "Integrity and transparency in communication and delivery.",
      "Ownership of results, not just tasks.",
      "Curiosity and continuous improvement in everything we do.",
    ],
    gradientClass: "from-purple-600 to-indigo-500",
    bgClass: "bg-gradient-to-br from-purple-50 to-indigo-50",
    borderClass: "border-purple-200",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    id: "teamwork",
    title: "Teamwork & People",
    icon: Handshake,
    shortDescription:
      "Cross-functional teams where every voice is heard and trusted.",
    image: "/images/Teamwork-people.jpeg",
    fullDescription:
      "You will work with people who share knowledge openly, support one another, and care about winning as a team—not just as individuals. We believe strong teams are built on trust, clarity, and shared goals.",
    bullets: [
      "Open, respectful discussions—even when we disagree.",
      "Clear roles, expectations, and shared ownership.",
      "Celebrating wins and learning from challenges together.",
    ],
    gradientClass: "from-emerald-600 to-teal-500",
    bgClass: "bg-gradient-to-br from-emerald-50 to-teal-50",
    borderClass: "border-emerald-200",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    id: "innovation",
    title: "Innovation in Action",
    icon: Lightbulb,
    shortDescription: "Practical, everyday innovation built into how we work.",
    image: "/images/Innovation.jpeg",
    fullDescription:
      "Innovation at CJSS is hands-on and continuous. We experiment with new ideas, run small pilots, gather feedback quickly, and scale what works. There is space to question, propose, and improve.",
    bullets: [
      "Room to prototype and test bold ideas.",
      "Modern stacks, tools, and engineering practices.",
      "Focus on solving real problems, not just adding features.",
    ],
    gradientClass: "from-amber-500 to-orange-500",
    bgClass: "bg-gradient-to-br from-amber-50 to-orange-50",
    borderClass: "border-amber-200",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    id: "growth",
    title: "Learning & Growth",
    icon: TrendingUp,
    shortDescription:
      "A structured, supportive environment for continuous learning.",
    image: "/images/Learning-growth.jpeg",
    fullDescription:
      "Growth is baked into how we work. You will learn by doing, pairing, mentoring, and through structured feedback and learning opportunities. We want your next version of yourself to be built here.",
    bullets: [
      "Regular 1:1s and clear development conversations.",
      "Access to workshops, training, and certifications.",
      "Cross-team collaboration to broaden your experience.",
    ],
    gradientClass: "from-rose-500 to-pink-500",
    bgClass: "bg-gradient-to-br from-rose-50 to-pink-50",
    borderClass: "border-rose-200",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
  },
];

const POD_ITEMS = [
  {
    id: "demos",
    label: "Weekly Demos",
    eyebrow: "Inside Pods",
    title: "Show the work, every week",
    description:
      "Pods run weekly demos where engineers, designers, and product owners walk through what was shipped, what is in progress, and what is coming next. It keeps feedback fast and momentum high.",
    bullets: [
      "Short, focused walkthroughs instead of long presentations.",
      "Stakeholders see real product, not just slides or documents.",
      "Teams celebrate progress and spot improvements early.",
    ],
    image: "/images/weekly-demos.jpg",
    accentColor: "bg-blue-500",
  },
  {
    id: "critiques",
    label: "Design Critiques",
    eyebrow: "Inside Pods",
    title: "Sharpen ideas with honest critique",
    description:
      "Design critiques bring product, design, and engineering together to stress-test flows, copy, and interactions. The aim is to make the experience clearer.",
    bullets: [
      "Open, respectful discussions focused on the work, not the person.",
      "Multiple perspectives that uncover edge cases and UX friction.",
      "Decisions documented so everyone knows what we're shipping and why.",
    ],
    image: "/images/design-critiques.jpg",
    accentColor: "bg-purple-500",
  },
  {
    id: "coinnovation",
    label: "Co-Innovation Sessions",
    eyebrow: "Inside Pods",
    title: "Build with customers, not for them",
    description:
      "In co-innovation sessions, pods work side-by-side with customers to explore ideas, prototype quickly, and validate what truly solves their problems.",
    bullets: [
      "Customers, product, and engineering in the same conversation.",
      "Sketches, prototypes, and experiments instead of long specs.",
      "Shared ownership of the solution from day one.",
    ],
    image: "/images/co-innovation.jpg",
    accentColor: "bg-emerald-500",
  },
];

const CarierLife = ({ navigateTo }) => {
  const links = [
    { label: "Home", page: "CarrierHome" },
    { label: "Life at CJSS", page: "CarrierLife" },
    { label: "Job for Fresher", page: "CarrierFresher" },
    { label: "Job for Experienced", page: "CarrierExperienced" },
    { label: "Problems we solve", page: "CarrierProblems" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCard, setActiveCard] = useState(null);
  const [activePod, setActivePod] = useState("demos");

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  const handleScrollToCulture = () => {
    const section = document.getElementById("culture-section");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const closeModal = () => setActiveCard(null);

  return (
    <>
      <CareerNavigationBar links={links} navigateTo={navigateTo} />

      {/* Push content down to avoid navbar overlap */}
      {/* <div className="h-[80px] md:h-[80px]"></div> */}

      {/* ─────────────── GLOBAL BACKGROUND WRAPPER ─────────────── */}
      <main className="relative w-full min-h-screen overflow-hidden text-slate-800 bg-white">
        {/* Subtle premium background pattern */}
        <div className="absolute inset-0 pointer-events-none -z-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
          <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-slate-50 to-transparent" />
        </div>

        {/* ─────────────── SECTION 1 — HERO BANNER ─────────────── */}

        <section className="relative z-10 w-full min-h-[80vh] overflow-hidden">
          {/* carousel background */}
          <div className="absolute inset-0 -z-10">
            {HERO_IMAGES.map((img, index) => (
              <div
                key={img.src}
                className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          </div>

          <div className="relative z-10 flex min-h-[80vh] max-w-6xl flex-col justify-center px-4 sm:px-6 lg:px-8 lg:mx-auto">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-[1.5px] bg-cyan-400 rounded-full" />
              <span className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-cyan-300 font-medium">
                Life at CJSS
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-2xl font-semibold leading-snug sm:text-3xl md:text-4xl lg:text-5xl text-white">
              Build the{" "}
              <span className="relative">
                <span className="text-transparent bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text">
                  Future
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-60" />
              </span>{" "}
              With Us
            </h1>

            {/* Subheading */}
            <p className="max-w-lg mt-4 text-sm leading-relaxed sm:text-base text-white/80">
              Join a workplace where{" "}
              <span className="text-cyan-300 font-medium">passion</span> meets{" "}
              <span className="text-purple-300 font-medium">purpose</span> and
              people grow together.
            </p>

            {/* Small highlights */}
            <div className="flex flex-wrap items-center gap-4 mt-5 sm:gap-6">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-[11px] sm:text-xs text-white/70">
                  100+ Team Members
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span className="text-[11px] sm:text-xs text-white/70">
                  Global Impact
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                <span className="text-[11px] sm:text-xs text-white/70">
                  Innovation First
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mt-6 sm:mt-8">
              <button
                onClick={handleScrollToCulture}
                className="rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-medium text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-0.5"
              >
                Discover Our Culture
              </button>
            </div>

            {/* Carousel Indicators */}
            <div className="flex items-center gap-2 mt-8 sm:mt-10">
              {HERO_IMAGES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? "w-8 bg-gradient-to-r from-cyan-400 to-purple-400"
                      : "w-1.5 bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
              <span className="ml-2 text-[10px] text-white/40">
                {currentIndex + 1} / {HERO_IMAGES.length}
              </span>
            </div>
          </div>

          {/* Subtle decorative glow */}
          <div className="absolute top-1/3 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
        </section>

        {/* ─────────────── SECTION 2 — CULTURE / VALUES / PEOPLE / GROWTH ─────────────── */}
        <section
          id="culture-section"
          className="relative z-10 w-full overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white"
        >
          <div className="max-w-6xl px-4 py-20 mx-auto sm:px-6 sm:py-28">
            {/* Section Header */}
            <div className="max-w-3xl mx-auto mb-16 text-center">
              <span className="inline-block px-4 py-1.5 mb-6 text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase rounded-full text-blue-600 bg-blue-50 border border-blue-100">
                Our Culture & Values
              </span>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-slate-900">
                What Makes Us{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                  Different
                </span>
              </h2>
              <p className="mt-5 text-base leading-relaxed sm:text-lg text-slate-600">
                Life at CJSS is built around people, purpose, and progress. Our
                culture blends mission, values, teamwork, and innovation into a
                daily experience where you can do meaningful work and keep
                growing.
              </p>
            </div>

            {/* People-first card */}
            <div className="max-w-2xl p-6 mx-auto mb-12 transition-all duration-500 border shadow-sm sm:p-8 rounded-3xl bg-gradient-to-br from-blue-50 via-white to-purple-50 border-slate-200 hover:shadow-xl hover:shadow-blue-100/50">
              <div className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full text-blue-700 bg-blue-100/80">
                <Users className="w-4 h-4" />
                People-First Company Culture
              </div>
              <p className="mt-4 text-sm leading-relaxed sm:text-base text-slate-700">
                You&apos;ll work in an environment where you&apos;re trusted,
                supported, and encouraged to bring your real self, your ideas,
                and your ambition to the table.
              </p>
              <ul className="mt-5 space-y-2.5 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 mt-2 rounded-full bg-blue-500 shrink-0" />
                  Respectful, inclusive, and supportive teams
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 mt-2 rounded-full bg-purple-500 shrink-0" />
                  Clear expectations and shared ownership of outcomes
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 mt-2 rounded-full bg-cyan-500 shrink-0" />
                  Recognition for effort, impact, and improvement
                </li>
              </ul>
            </div>

            {/* Small chips */}
            <div className="grid gap-4 mb-16 md:grid-cols-3">
              {[
                {
                  color: "emerald",
                  text: "Purpose-driven work with real-world business impact.",
                },
                {
                  color: "blue",
                  text: "Values that show up in everyday decisions and teamwork.",
                },
                {
                  color: "purple",
                  text: "A culture where learning, feedback & growth never stop.",
                },
              ].map((chip, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 transition-all duration-300 border bg-white/80 backdrop-blur rounded-2xl border-slate-200 hover:border-slate-300 hover:shadow-lg"
                >
                  <span
                    className={`w-2.5 h-2.5 rounded-full shrink-0 ${
                      chip.color === "emerald"
                        ? "bg-emerald-500"
                        : chip.color === "blue"
                        ? "bg-blue-500"
                        : "bg-purple-500"
                    }`}
                  />
                  <p className="text-sm font-medium text-slate-700">
                    {chip.text}
                  </p>
                </div>
              ))}
            </div>

            {/* MAIN CARDS – CLICK TO OPEN MODAL */}
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
              {CULTURE_CARDS.map((card, index) => {
                const Icon = card.icon;
                return (
                  <button
                    key={card.id}
                    type="button"
                    onClick={() => setActiveCard(card)}
                    className="text-left transition-all duration-500 group focus:outline-none"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div
                      className={`flex h-full flex-col rounded-3xl border ${card.borderClass} ${card.bgClass} p-6 sm:p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`flex items-center justify-center w-12 h-12 rounded-2xl ${card.iconBg} transition-transform duration-300 group-hover:scale-110`}
                        >
                          <Icon className={`w-6 h-6 ${card.iconColor}`} />
                        </div>
                        <h3
                          className={`text-lg sm:text-xl font-bold text-transparent bg-gradient-to-r ${card.gradientClass} bg-clip-text`}
                        >
                          {card.title}
                        </h3>
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-slate-600">
                        {card.shortDescription}
                      </p>
                      <div className="flex items-center gap-2 mt-5 text-xs font-medium text-slate-500 group-hover:text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:bg-slate-600 transition-colors" />
                        Click to learn more
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* MODAL FOR CARD DETAILS */}
          {activeCard && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 bg-slate-900/60 backdrop-blur-sm"
              onClick={closeModal}
            >
              <div
                className="relative w-full max-w-4xl overflow-hidden bg-white shadow-2xl rounded-3xl"
                onClick={(e) => e.stopPropagation()}
                style={{ animation: "modalIn 0.3s ease-out" }}
              >
                {/* Close button */}
                <button
                  onClick={closeModal}
                  className="absolute z-20 p-2 transition-colors rounded-full top-4 right-4 bg-white/90 text-slate-500 hover:text-slate-900 hover:bg-white"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="grid md:grid-cols-2">
                  {/* Image side */}
                  <div className="relative hidden md:block h-[500px]">
                    <img
                      src={activeCard.image}
                      alt={activeCard.title}
                      className="object-cover w-full h-full"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-transparent`}
                    />
                  </div>

                  {/* Content side */}
                  <div className="flex flex-col gap-5 p-6 sm:p-8 md:p-10">
                    <div
                      className={`inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold ${activeCard.iconBg} ${activeCard.iconColor}`}
                    >
                      {(() => {
                        const Icon = activeCard.icon;
                        return <Icon className="w-4 h-4" />;
                      })()}
                      {activeCard.title}
                    </div>

                    <h3
                      className={`text-2xl sm:text-3xl font-bold text-transparent bg-gradient-to-r ${activeCard.gradientClass} bg-clip-text`}
                    >
                      {activeCard.title}
                    </h3>

                    <p className="text-sm leading-relaxed sm:text-base text-slate-600">
                      {activeCard.fullDescription}
                    </p>

                    <ul className="space-y-3 text-sm text-slate-700">
                      {activeCard.bullets.map((bullet, idx) => (
                        <li key={bullet} className="flex gap-3">
                          <span
                            className={`mt-1.5 inline-block h-2 w-2 rounded-full shrink-0 bg-gradient-to-r ${activeCard.gradientClass}`}
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4 mt-auto border-t border-slate-100">
                      <p className="text-xs text-slate-500">
                        This is how this part of our culture shows up in
                        everyday work, decisions, and collaboration at CJSS.
                      </p>
                    </div>
                  </div>

                  {/* Mobile image */}
                  <div className="md:hidden">
                    <img
                      src={activeCard.image}
                      alt={activeCard.title}
                      className="object-cover w-full h-56"
                    />
                  </div>
                </div>
              </div>

              <style>{`
                @keyframes modalIn {
                  0% {
                    opacity: 0;
                    transform: translateY(20px) scale(0.95);
                  }
                  100% {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                  }
                }
              `}</style>
            </div>
          )}
        </section>

        {/* ─────────────── SECTION 3 — LEADERSHIP REVIEWS & ARCHITECTURE JAMS ─────────────── */}
        <section
          id="leadership-section"
          className="relative z-10 w-full overflow-hidden bg-white"
        >
          <div className="max-w-6xl px-4 py-20 mx-auto sm:px-6 sm:py-28">
            {/* Section Header */}
            <div className="max-w-3xl mb-16">
              <span className="inline-block px-4 py-1.5 mb-6 text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase rounded-full text-purple-600 bg-purple-50 border border-purple-100">
                Leadership & Architecture
              </span>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-slate-900">
                How We Review, Design &{" "}
                <span className="text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text">
                  Decide Together
                </span>
              </h2>
              <p className="mt-5 text-base leading-relaxed sm:text-lg text-slate-600">
                Some of our most important work happens in the room together.
                Leadership reviews and architecture jams are where strategy,
                delivery, and engineering thinking stay in sync.
              </p>
            </div>

            <div className="space-y-8">
              {/* BLOCK 1 — LEADERSHIP REVIEWS */}
              <div className="overflow-hidden transition-all duration-700 border group rounded-3xl border-slate-200 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 hover:shadow-2xl hover:shadow-blue-100/50">
                <div className="flex flex-col md:flex-row">
                  <div className="relative w-full h-64 overflow-hidden md:h-auto md:w-80 shrink-0">
                    <img
                      src="/images/Venkat.png"
                      alt="Leadership review session"
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent md:bg-gradient-to-r" />
                  </div>

                  <div className="flex flex-col justify-center flex-1 p-6 sm:p-8 md:p-10">
                    <span className="inline-flex w-fit items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold text-blue-700">
                      Leadership Reviews
                    </span>

                    <h3 className="mt-4 text-xl font-bold sm:text-2xl md:text-3xl text-slate-900">
                      Strategic reviews that stay close to the work
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed sm:text-base text-slate-600">
                      Leaders and teams sit together to align on outcomes,
                      remove blockers, and keep real customer impact at the
                      center of every decision.
                    </p>

                    <div className="mt-6 space-y-3 transition-all duration-500 origin-top text-slate-600">
                      <p className="text-sm">
                        A leadership review at CJSS is a working session, not a
                        slide show. We look at live product metrics, in-flight
                        work, and trade-offs side by side.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex gap-3">
                          <span className="w-2 h-2 mt-1.5 rounded-full bg-blue-500 shrink-0" />
                          <span>
                            Outcome-focused conversations instead of long status
                            updates.
                          </span>
                        </li>
                        <li className="flex gap-3">
                          <span className="w-2 h-2 mt-1.5 rounded-full bg-blue-500 shrink-0" />
                          <span>
                            Clear priorities, trade-offs, and next steps agreed
                            in the room.
                          </span>
                        </li>
                        <li className="flex gap-3">
                          <span className="w-2 h-2 mt-1.5 rounded-full bg-blue-500 shrink-0" />
                          <span>
                            A psychologically safe space where teams can raise
                            risks early.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* BLOCK 2 — ARCHITECTURE JAMS */}
              <div className="overflow-hidden transition-all duration-700 border group rounded-3xl border-slate-200 bg-gradient-to-br from-purple-50/50 via-white to-pink-50/50 hover:shadow-2xl hover:shadow-purple-100/50">
                <div className="flex flex-col md:flex-row-reverse">
                  <div className="relative w-full h-64 overflow-hidden md:h-auto md:w-80 shrink-0">
                    <img
                      src="/images/Srikanth.png"
                      alt="Architecture jam session"
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent md:bg-gradient-to-l" />
                  </div>

                  <div className="flex flex-col justify-center flex-1 p-6 sm:p-8 md:p-10">
                    <span className="inline-flex w-fit items-center gap-2 rounded-full bg-purple-100 px-4 py-1.5 text-xs font-semibold text-purple-700">
                      Architecture Jams
                    </span>

                    <h3 className="mt-4 text-xl font-bold sm:text-2xl md:text-3xl text-slate-900">
                      Deep-dive sessions to shape better systems
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed sm:text-base text-slate-600">
                      Architecture jams bring engineers, architects, and product
                      partners together to design systems we can trust in
                      production.
                    </p>

                    <div className="mt-6 space-y-3 transition-all duration-500 origin-top text-slate-600">
                      <p className="text-sm">
                        We sketch flows, draw diagrams, and challenge
                        assumptions. The goal is a shared, practical design that
                        balances speed, reliability, and maintainability.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex gap-3">
                          <span className="w-2 h-2 mt-1.5 rounded-full bg-purple-500 shrink-0" />
                          <span>
                            Multiple options explored before we commit to a
                            final approach.
                          </span>
                        </li>
                        <li className="flex gap-3">
                          <span className="w-2 h-2 mt-1.5 rounded-full bg-purple-500 shrink-0" />
                          <span>
                            Real constraints considered: scale, latency, cost,
                            and operability.
                          </span>
                        </li>
                        <li className="flex gap-3">
                          <span className="w-2 h-2 mt-1.5 rounded-full bg-purple-500 shrink-0" />
                          <span>
                            Everyone leaves with the same mental model of the
                            system.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────── SECTION 4 — INSIDE PODS ─────────────── */}
        <section
          id="inside-pods"
          className="relative z-10 w-full overflow-hidden bg-gradient-to-b from-slate-50 to-white"
        >
          <div className="max-w-6xl px-4 py-20 mx-auto sm:px-6 sm:py-28">
            {/* Section Header */}
            <div className="max-w-3xl mb-16">
              <span className="inline-block px-4 py-1.5 mb-6 text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase rounded-full text-emerald-600 bg-emerald-50 border border-emerald-100">
                Inside Pods
              </span>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-slate-900">
                Where{" "}
                <span className="text-transparent bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text">
                  Collaboration
                </span>{" "}
                Happens
              </h2>
              <p className="mt-5 text-base leading-relaxed sm:text-lg text-slate-600">
                Pods at CJSS are cross-functional teams that run like small
                studios. Every week they demo, critique, and co-create — keeping
                the work visible, the feedback honest, and the ideas moving.
              </p>
            </div>

            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] items-start">
              {/* LEFT: pod selector pills */}
              <div className="space-y-4">
                <p className="text-xs font-semibold tracking-wider uppercase text-slate-500">
                  Rituals Inside a Pod
                </p>

                <div className="space-y-3">
                  {POD_ITEMS.map((pod) => (
                    <button
                      key={pod.id}
                      type="button"
                      onClick={() => setActivePod(pod.id)}
                      className={`w-full text-left rounded-2xl border p-4 transition-all duration-300 flex items-center justify-between gap-4 ${
                        activePod === pod.id
                          ? "border-slate-300 bg-white shadow-lg ring-1 ring-slate-200"
                          : "border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-md hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`h-10 w-10 rounded-xl flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                            activePod === pod.id
                              ? `${pod.accentColor} text-white shadow-lg`
                              : "bg-slate-200 text-slate-600"
                          }`}
                        >
                          {pod.label
                            .split(" ")
                            .map((w) => w[0])
                            .join("")
                            .slice(0, 2)}
                        </div>
                        <div>
                          <div
                            className={`text-sm font-semibold ${
                              activePod === pod.id
                                ? "text-slate-900"
                                : "text-slate-700"
                            }`}
                          >
                            {pod.label}
                          </div>
                          <div className="text-xs text-slate-500">
                            {pod.id === "demos" &&
                              "Weekly snapshots of real progress."}
                            {pod.id === "critiques" &&
                              "Honest feedback that sharpens the work."}
                            {pod.id === "coinnovation" &&
                              "Customers in the room, not on the sidelines."}
                          </div>
                        </div>
                      </div>
                      <span
                        className={`h-2 w-2 rounded-full transition-colors ${
                          activePod === pod.id
                            ? pod.accentColor
                            : "bg-slate-300"
                        }`}
                      />
                    </button>
                  ))}
                </div>

                <p className="pt-4 text-xs text-slate-500">
                  Switch between pods to see how weekly demos, design critiques,
                  and co-innovation sessions feel from the inside.
                </p>
              </div>

              {/* RIGHT: active pod panel */}
              <div className="relative">
                {(() => {
                  const active =
                    POD_ITEMS.find((p) => p.id === activePod) ?? POD_ITEMS[0];
                  return (
                    <div
                      key={active.id}
                      className="overflow-hidden bg-white border shadow-xl rounded-3xl border-slate-200"
                      style={{ animation: "podFade 0.4s ease-out" }}
                    >
                      <div className="flex flex-col">
                        {/* IMAGE */}
                        <div className="relative w-full h-56 overflow-hidden sm:h-64 md:h-72">
                          <img
                            src={active.image}
                            alt={active.label}
                            className="object-cover w-full h-full"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                          <span
                            className={`absolute bottom-4 left-4 rounded-full ${active.accentColor} px-4 py-1.5 text-xs font-semibold text-white shadow-lg`}
                          >
                            {active.label}
                          </span>
                        </div>

                        {/* CONTENT */}
                        <div className="p-6 space-y-4 sm:p-8">
                          <span className="text-xs font-semibold tracking-wider uppercase text-slate-400">
                            {active.eyebrow}
                          </span>

                          <h3 className="text-xl font-bold sm:text-2xl md:text-3xl text-slate-900">
                            {active.title}
                          </h3>

                          <p className="text-sm leading-relaxed sm:text-base text-slate-600">
                            {active.description}
                          </p>

                          <ul className="pt-2 space-y-3 text-sm text-slate-600">
                            {active.bullets.map((bullet, idx) => (
                              <li
                                key={idx}
                                className="flex gap-3"
                                style={{
                                  animation: `podBullet 0.35s ease-out ${
                                    0.1 + idx * 0.08
                                  }s forwards`,
                                  opacity: 0,
                                  transform: "translateY(8px)",
                                }}
                              >
                                <span
                                  className={`mt-1.5 inline-block h-2 w-2 rounded-full shrink-0 ${active.accentColor}`}
                                />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="pt-4 mt-4 border-t border-slate-100">
                            <p className="text-xs text-slate-500">
                              These rituals keep pods aligned, honest, and
                              always moving forward.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>
          </div>

          <style>{`
            @keyframes podFade {
              0% {
                opacity: 0;
                transform: translateY(20px);
              }
              100% {
                opacity: 1;
                transform: translateY(0);
              }
            }
            @keyframes podBullet {
              0% {
                opacity: 0;
                transform: translateY(8px);
              }
              100% {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
        </section>
      </main>
    </>
  );
};

export default CarierLife;
