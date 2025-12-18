"use client";

import { BadgeCheck, KeyRound, Lock, ShieldCheck } from "lucide-react";
import { useEffect, useRef } from "react";

export default function ISOSection() {
  const ref = useRef(null);

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.classList.add("iso-visible");
        }
      },
      { threshold: 0.25 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full px-4 py-24 sm:px-6 bg-gradient-to-b from-sky-50 via-white to-white overflow-hidden">
      {/* Soft background accents */}
      <div className="absolute -top-32 -left-32 w-[380px] h-[380px] bg-cyan-200/40 blur-[160px] rounded-full" />
      <div className="absolute -bottom-32 -right-32 w-[420px] h-[420px] bg-blue-200/40 blur-[180px] rounded-full" />

      <div
        ref={ref}
        className="relative max-w-6xl mx-auto text-center opacity-0 translate-y-10 iso-transition"
      >
        {/* ISO Badge */}
        <div className="relative inline-flex items-center justify-center mb-10">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/30 to-blue-400/20 blur-2xl" />
          <div className="relative flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white border border-slate-200 shadow-xl">
            <BadgeCheck className="w-14 h-14 sm:w-16 sm:h-16 text-cyan-600 animate-float" />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900">
          Certified & Compliant
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            ISO 27001:2022
          </span>
        </h2>

        <p className="max-w-3xl mx-auto mt-6 text-sm sm:text-base md:text-lg text-slate-600">
          CJSS Technologies follows the highest international standards for
          information security. Our systems ensure enterprise-grade protection,
          continuous compliance, and robust governance—keeping your data safe at
          all times.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: ShieldCheck,
              title: "Security Compliance",
              desc: "Audited & certified as per ISO 27001:2022 standards",
            },
            {
              icon: Lock,
              title: "Password Policies",
              desc: "MFA, rotation policies, and encrypted credentials",
            },
            {
              icon: KeyRound,
              title: "Access Control",
              desc: "Role-based access with zero-trust enforcement",
            },
            {
              icon: BadgeCheck,
              title: "Data Governance",
              desc: "Continuous monitoring & audit readiness",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group relative p-7 sm:p-8 rounded-3xl
                           bg-white border border-slate-200 shadow-md
                           transition-all duration-300
                           hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition
                                bg-gradient-to-br from-blue-400/10 to-cyan-400/10 blur-xl rounded-3xl"
                />

                <div className="relative z-10">
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-xl
                                  bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg"
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="mt-5 text-lg sm:text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Animations */}
      <style>{`
        .iso-transition {
          transition: opacity 0.8s ease, transform 0.8s cubic-bezier(.21,1.02,.73,1);
        }
        .iso-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes float {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
