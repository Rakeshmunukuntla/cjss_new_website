"use client";

import GlobalPresenceMerged from "./about/GlobalPresenceMap";
import { useEffect, useRef, useState } from "react";
import { LeadershipSection } from "./about/LeadershipSection";
import ContactForm from "./about/ContactForm";
import Conversation from "./about/Conversation";
import {
  ADVANTAGES,
  CERTIFICATIONS,
  EXPERTISE,
  TECH_USAGE,
} from "../Constants";

// Technology Usage Section Component with Counting Animation
const TechUsageSection = () => {
  const [counts, setCounts] = useState(TECH_USAGE.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          // Start counting animation
          const targets = TECH_USAGE.map((tech) => tech.percentage);
          const duration = 2000;
          const steps = 60;
          const stepDuration = duration / steps;

          let currentStep = 0;

          const interval = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;

            const newCounts = targets.map((target) =>
              Math.floor(target * progress)
            );
            setCounts(newCounts);

            if (currentStep >= steps) {
              clearInterval(interval);
              setCounts(targets);
            }
          }, stepDuration);

          return () => clearInterval(interval);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="px-6 py-32 bg-white relative overflow-hidden"
    >
      {/* Subtle background element */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.05),_transparent_40%)]"></div>

      <div className="mx-auto max-w-7xl relative z-10">
        <h2 className="mb-6 text-5xl font-bold text-center text-slate-900">
          Technology{" "}
          <span className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text">
            Usage
          </span>
        </h2>
        <p className="mb-16 text-lg text-center text-slate-600">
          Best for showing multiple technologies at once
        </p>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {TECH_USAGE.map((tech, idx) => (
            <div key={idx} className="flex flex-col items-center group">
              {/* Circular Progress */}
              <div className="relative w-32 h-32 mb-4">
                {/* Background circle */}
                <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                  <circle
                    cx="60"
                    cy="60"
                    r="54"
                    fill="none"
                    stroke="#e2e8f0"
                    strokeWidth="6"
                  />
                  {/* Animated progress circle */}
                  <circle
                    cx="60"
                    cy="60"
                    r="54"
                    fill="none"
                    stroke="url(#gradientStroke)"
                    strokeWidth="6"
                    strokeDasharray={`${
                      (counts[idx] / 100) * 2 * Math.PI * 54
                    } ${2 * Math.PI * 54}`}
                    strokeLinecap="round"
                    className="transition-all ease-out group-hover:drop-shadow-lg"
                    style={{
                      filter: "drop-shadow(0 0 8px rgba(59, 130, 246, 0.3))",
                    }}
                  />
                  <defs>
                    <linearGradient
                      id="gradientStroke"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        style={{ stopColor: "#2563EB", stopOpacity: 1 }}
                      />
                      <stop
                        offset="100%"
                        style={{ stopColor: "#06B6D4", stopOpacity: 1 }}
                      />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Center text with counting animation */}
                <div className="absolute inset-0 flex flex-col items-center justify-center animate-fadeIn">
                  <span className="text-2xl font-bold text-slate-800">
                    {counts[idx]}%
                  </span>
                </div>

                {/* Pulsing ring on hover */}
                <div className="absolute inset-0 transition-all duration-500 border-2 rounded-full border-blue-400/0 group-hover:border-blue-400/30 group-hover:animate-pulse"></div>
              </div>

              {/* Technology name */}
              <h3 className="text-sm font-semibold text-center text-slate-700">
                {tech.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const AboutPage = () => {
  const heroStats = [
    { label: "Transformation Programs", value: "80+" },
    { label: "Experience Pods", value: "12" },
    { label: "Client NPS", value: "72" },
  ];

  const heroHighlights = [
    "SAP Commerce + AEM accelerators",
    "Design-to-run DevOps",
    "Global delivery hubs",
  ];

  const communitySpotlights = [
    {
      title: "STEM Mentorship",
      description:
        "Weekend SAP Commerce and AEM sandboxes where CJSS architects teach students how enterprise platforms power NGOs and civic portals.",
      metric: "250+ mentees",
    },
    {
      title: "Green Stack Pledge",
      description:
        "Reusable React component libraries donated to climate nonprofits so they can launch progressive web experiences without extra spend.",
      metric: "3 cities",
    },
    {
      title: "Open Source Grants",
      description:
        "Funding internal guilds that build testing harnesses, SAP accelerators, and AEM/React starter kits for social-impact founders.",
      metric: "$40K funded",
    },
  ];

  return (
    <div className="bg-slate-50 text-slate-800">
      {/* Entire page content MUST go inside this */}
      <div className="relative z-10">
        {/* -- your entire About page sections here -- */}
      </div>

      {/* About Section */}
      <section className="relative px-6 pt-32 pb-24 overflow-hidden">
        {/* Image Background */}
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: "url('/images/cjssfam.jpeg')",
            backgroundAttachment: "fixed",
          }}
        ></div>

        {/* Premium White Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/95 to-slate-50/80 backdrop-blur-sm"></div>

        {/* Blue accent blob */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.15), transparent 50%)",
          }}
        ></div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-blue-600 font-bold">
                <span className="w-12 h-px bg-blue-600"></span>
                About CJSS
              </div>
              <h1 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl">
                Building experience-led platforms for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-600">
                  courageous brands.
                </span>
              </h1>
              <p className="text-lg leading-relaxed text-slate-600 font-medium">
                CJSS Tech partners with enterprises and rising scale-ups to
                design, build, and run composable commerce and customer
                experience stacks. We bring pods of strategists, architects,
                engineers, and designers who obsess over measurable outcomes and
                delightful journeys.
              </p>
              <div className="flex flex-wrap gap-3">
                {heroHighlights.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 text-sm font-medium transition-colors border rounded-full text-blue-700 border-blue-200 bg-blue-50/50 hover:bg-blue-100 hover:border-blue-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-4 border rounded-3xl border-slate-200 bg-white shadow-lg shadow-blue-900/5"
                  >
                    <p className="text-3xl font-bold text-slate-900">
                      {stat.value}
                    </p>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mt-1 font-semibold">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              {/* Blur effect behind the card */}
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-400/20 via-transparent to-cyan-400/20 blur-3xl"></div>

              <div className="relative p-8 space-y-6 border rounded-4xl border-slate-100 bg-white/60 backdrop-blur-xl shadow-xl shadow-blue-900/5">
                <p className="text-lg leading-relaxed text-slate-700 italic">
                  "Technology only matters when people feel the difference. We
                  craft platforms with empathy, experimentation, and relentless
                  delivery discipline."
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm text-slate-600">
                  <div>
                    <p className="font-bold text-slate-900">
                      SAP Commerce | AEM | Cloud
                    </p>
                    <p>Strategy, build, run</p>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Studio model</p>
                    <p>Design + data + DevOps pods</p>
                  </div>
                </div>
                <div className="px-5 py-4 text-sm border rounded-3xl border-blue-100 bg-blue-50/50 text-blue-800 font-medium">
                  Hyderabad HQ · Remote-first talent across APAC, EMEA, and
                  North America.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <LeadershipSection />

      {/* Advantages Section */}
      <section className="px-6 py-28 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="mx-auto space-y-12 max-w-7xl">
          <div className="space-y-4 text-center">
            <p className="text-xs uppercase tracking-[0.5em] text-blue-600 font-bold">
              Why CJSS
            </p>
            <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
              Advantages Designed for Velocity
            </h2>
            <p className="max-w-3xl mx-auto text-slate-600 text-lg">
              Every squad works from a shared playbook of engineering excellence
              so you get predictable delivery and creative problem solving.
            </p>
          </div>
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10">
            <div className="grid gap-6 sm:grid-cols-2">
              {ADVANTAGES.map((adv, idx) => (
                <div
                  key={idx}
                  className="relative p-6 overflow-hidden transition-all border group rounded-3xl border-slate-200 bg-white shadow-sm hover:shadow-xl hover:shadow-blue-900/10 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 space-y-3">
                    <div className="text-4xl text-blue-600">{adv.icon}</div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {adv.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {adv.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-8 space-y-6 border rounded-4xl border-slate-200 bg-white shadow-xl shadow-blue-900/5">
              <p className="text-lg leading-relaxed text-slate-700">
                We blend consulting rigor with product sensibilities.
                Engagements kick off with immersion workshops, evolve into
                design sprints, and land with controlled releases plus steady
                runbooks.
              </p>
              <div className="grid gap-4">
                {[
                  "Discovery → blueprint → pilot in 6 weeks",
                  "Shift-left QA and Site Reliability squads",
                  "Experience research plugged into every sprint",
                ].map((line) => (
                  <div
                    key={line}
                    className="flex items-start gap-3 text-slate-600"
                  >
                    <span className="mt-1 text-blue-500 text-lg">◆</span>
                    <span className="font-medium">{line}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Usage Section */}
      <TechUsageSection />

      {/* Expertise Section */}
      <section className="px-6 py-28 bg-slate-50">
        <div className="mx-auto space-y-12 max-w-7xl">
          <div className="space-y-3 text-center">
            <p className="text-xs uppercase tracking-[0.5em] text-blue-600 font-bold">
              What we ship
            </p>
            <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
              Expertise you can plug in
            </h2>
            <p className="max-w-3xl mx-auto text-slate-600 text-lg">
              From composable storefronts to AI copilots for operations, our
              guilds plug into your roadmap as autonomous squads.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {EXPERTISE.map((exp, idx) => (
              <div
                key={idx}
                className="relative p-6 overflow-hidden transition-all border group rounded-3xl border-slate-200 bg-white shadow-sm hover:shadow-xl hover:shadow-blue-900/10 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-transparent opacity-50"></div>
                <div className="relative z-10 space-y-3">
                  <div className="text-4xl text-blue-600">{exp.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {exp.name}
                  </h3>
                  {exp.description && (
                    <p className="text-sm leading-relaxed text-slate-600">
                      {exp.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Conversation></Conversation>

      {/* Certifications Section */}
      <section className="px-6 py-32 bg-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-16 text-5xl font-bold text-center text-slate-900">
            CJSS{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Certifications
            </span>
          </h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {CERTIFICATIONS.map((cert, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="p-8 text-center transition-all duration-300 border bg-white border-slate-100 rounded-2xl group-hover:scale-105 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-100">
                  <div className="mb-4 text-6xl text-blue-600 drop-shadow-sm">
                    {cert.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-slate-900">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-slate-500">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Impact Section */}
      <section className="px-6 py-28 bg-slate-50 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="max-w-6xl mx-auto space-y-10 relative z-10">
          <div className="space-y-3 text-center">
            <p className="text-xs uppercase tracking-[0.5em] text-blue-600 font-bold">
              Community
            </p>
            <h2 className="text-4xl font-bold text-slate-900">
              How CJSS Gives Back
            </h2>
            <p className="text-slate-600 text-lg">
              Impact programs run by CJSS volunteers and partners.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {communitySpotlights.map((item) => (
              <div
                key={item.title}
                className="p-6 space-y-4 border rounded-3xl border-slate-200 bg-white shadow-lg shadow-blue-900/5 hover:border-blue-200 transition-colors"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-blue-500 font-bold">
                  {item.metric}
                </p>
                <h3 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-white overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-100/40 via-white to-white"></div>
        <div className="absolute right-0 bottom-0 w-1/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent"></div>

        <div className="relative z-10 grid grid-cols-1 gap-16 px-6 mx-auto max-w-7xl lg:grid-cols-2">
          {/* LEFT SIDE — CONTACT DETAILS */}
          <div>
            <h4 className="mb-4 font-bold tracking-wider text-blue-600 text-sm">
              CONTACT DETAILS
            </h4>

            <h2 className="mb-4 text-4xl font-bold text-slate-900">
              Contact us
            </h2>

            <p className="max-w-lg mb-10 leading-relaxed text-slate-600 font-medium">
              Give us a call or drop by anytime. We endeavour to answer all
              enquiries within 24 hours on business days. We will be happy to
              answer your questions.
            </p>

            {/* India Office */}
            <div className="p-6 mb-8 transition-all border shadow-lg rounded-2xl bg-white border-slate-100 hover:shadow-xl hover:shadow-blue-200/50 group">
              <div className="flex items-start gap-4">
                <div className="text-4xl text-blue-500 group-hover:scale-110 transition-transform">
                  🌐
                </div>
                <div>
                  <h3 className="mb-2 font-bold text-slate-900">
                    INDIA HEAD OFFICE
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    CJSS Technologies Pvt. Ltd.
                    <br />
                    2nd Floor, Block C&D,
                    <br />
                    Vaishnavi Cynosure, Gachibowli,
                    <br />
                    Hyderabad-500032, Telangana, India.
                  </p>
                </div>
              </div>
            </div>

            {/* Singapore Office */}
            <div className="p-6 transition-all border shadow-lg rounded-2xl bg-white border-slate-100 hover:shadow-xl hover:shadow-blue-200/50 group">
              <div className="flex items-start gap-4">
                <div className="text-4xl text-blue-500 group-hover:scale-110 transition-transform">
                  🌐
                </div>
                <div>
                  <h3 className="mb-2 font-bold text-slate-900">
                    SINGAPORE OFFICE
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    CJSS Technologies Pte. Ltd.
                    <br />
                    #03-92, 65 UBI ROAD 1, OXLEY BIZHUB
                    <br />
                    Singapore 408729
                  </p>
                </div>
              </div>
            </div>

            {/* Mailbox */}
            <div className="flex items-center gap-3 mt-8">
              <span className="text-3xl text-blue-600">📧</span>
              <div>
                <p className="text-sm text-slate-500 font-semibold">
                  Our Mailbox:
                </p>
                <a
                  className="font-bold text-blue-600 hover:text-blue-500 underline underline-offset-4"
                  href="mailto:info@cjsstechnologies.com"
                >
                  info@cjsstechnologies.com
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — FORM */}
          <div className="bg-white p-2 rounded-3xl shadow-2xl shadow-blue-900/10 border border-slate-100">
            <ContactForm></ContactForm>
          </div>
        </div>
      </section>

      {/* Global Presence - Kept Dark Blue for premium contrast and to make stars visible */}
      <section className="relative py-28 overflow-hidden bg-blue-950">
        {/* Shared background for heading + globe */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(30,58,138,0.5),_transparent_70%)] blur-2xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,_rgba(59,130,246,0.3),_transparent_70%)]"></div>

        {/* Stars - These classes usually require dark backgrounds to show up */}
        <div className="absolute inset-0 stars opacity-70"></div>
        <div className="absolute inset-0 stars2 opacity-70"></div>
        <div className="absolute inset-0 stars3 opacity-70"></div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none particles"></div>
        <div className="absolute inset-0 pointer-events-none particles2"></div>
        <div className="absolute inset-0 pointer-events-none particles3"></div>

        {/* Content on top */}
        <div className="relative z-10">
          <h2 className="mb-12 text-4xl font-bold text-center text-white">
            Our Global Presence
          </h2>
          <GlobalPresenceMerged />
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
