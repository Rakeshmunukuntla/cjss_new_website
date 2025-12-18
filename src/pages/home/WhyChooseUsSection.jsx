// import { WHY_CHOOSE_US } from "../../Constants";
// import { useState, useEffect, useRef } from "react";

// export const WhyChooseUsSection = () => {
//   const [visibleIndices, setVisibleIndices] = useState(new Set());
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const idx = parseInt(
//               entry.target.getAttribute("data-index") || "0",
//               10
//             );
//             setVisibleIndices((prev) => new Set([...prev, idx]));
//           }
//         });
//       },
//       { threshold: 0.18 }
//     );

//     const cards = sectionRef.current?.querySelectorAll("[data-index]");
//     cards?.forEach((card) => observer.observe(card));

//     return () => observer.disconnect();
//   }, []);

//   // Icon SVGs (clean, modern line icons)
//   const svgs = [
//     // Concept (Lightbulb)
//     `<svg viewBox="0 0 24 24" fill="none" stroke="#0f172a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
//       <path d="M9 18h6"></path>
//       <path d="M10 22h4"></path>
//       <path d="M12 2a7 7 0 0 0-7 7c0 2.6 1.7 4.8 4 6v1h6v-1c2.3-1.2 4-3.4 4-6a7 7 0 0 0-7-7z"></path>
//     </svg>`,

//     // Development (Laptop)
//     `<svg viewBox="0 0 24 24" fill="none" stroke="#0f172a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
//       <rect x="3" y="4" width="18" height="12" rx="2"></rect>
//       <path d="M2 18h20"></path>
//     </svg>`,

//     // Data / Analytics (Bars)
//     `<svg viewBox="0 0 24 24" fill="none" stroke="#0f172a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
//       <path d="M3 3v18h18"></path>
//       <rect x="7" y="13" width="3" height="5" rx="1"></rect>
//       <rect x="12" y="9" width="3" height="9" rx="1"></rect>
//       <rect x="17" y="5" width="3" height="13" rx="1"></rect>
//     </svg>`,

//     // Security (Shield)
//     `<svg viewBox="0 0 24 24" fill="none" stroke="#0f172a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
//       <path d="M12 2l8 4v6c0 6-4 10-8 10s-8-4-8-10V6l8-4z"></path>
//       <circle cx="12" cy="12" r="2"></circle>
//       <path d="M12 14v2"></path>
//     </svg>`,
//   ];

//   return (
//     <section
//       ref={sectionRef}
//       className="relative px-6 py-24 overflow-hidden bg-[#f5f7fb]"
//     >
//       {/* Background accents */}
//       <div className="pointer-events-none absolute inset-0 -z-10">
//         {/* Soft blobs */}
//         <div className="absolute -top-40 -right-32 w-[420px] h-[420px] rounded-full bg-[#dbeafe] blur-3xl" />
//         <div className="absolute -bottom-40 -left-32 w-[460px] h-[460px] rounded-full bg-[#fce7f3] blur-3xl" />
//         {/* Very subtle center glow */}
//         <div className="absolute top-1/2 left-1/2 w-[620px] h-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(148,163,184,0.35),transparent_65%)] blur-3xl" />
//         {/* Light grid */}
//         <div
//           className="absolute inset-0 opacity-[0.10]"
//           style={{
//             backgroundImage:
//               "linear-gradient(transparent 79px, rgba(148,163,184,0.18) 80px), linear-gradient(90deg, transparent 79px, rgba(148,163,184,0.18) 80px)",
//             backgroundSize: "80px 80px",
//           }}
//         />
//       </div>

//       {/* Header */}
//       <div className="max-w-4xl mx-auto mb-14 text-center">
//         <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-slate-200 shadow-sm">
//           <span className="w-2 h-2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500" />
//           <span className="text-[11px] font-semibold tracking-[0.22em] text-slate-500 uppercase">
//             Why CJSS
//           </span>
//         </div>

//         <h2 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
//           A partner that
//           <span className="ml-2 bg-gradient-to-r from-sky-500 via-indigo-500 to-emerald-500 bg-clip-text text-transparent">
//             thinks in outcomes
//           </span>
//         </h2>

//         <p className="mt-4 text-slate-500 text-base md:text-lg">
//           From concept to deployment, we combine engineering depth with a
//           hands-on, collaborative approach so you can move faster with
//           confidence.
//         </p>
//       </div>

//       {/* Cards */}
//       <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4">
//         {WHY_CHOOSE_US.map((item, idx) => (
//           <div
//             key={idx}
//             data-index={idx}
//             className={`
//               group relative overflow-hidden rounded-2xl border
//               bg-white/80 backdrop-blur-[10px]
//               shadow-[0_18px_45px_rgba(15,23,42,0.06)]
//               transition-all duration-500 ease-out
//               hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(15,23,42,0.10)]
//               hover:border-slate-200
//               ${
//                 visibleIndices.has(idx)
//                   ? "opacity-100 translate-y-0 animate-cardReveal"
//                   : "opacity-0 translate-y-4"
//               }
//             `}
//             style={{ animationDelay: `${idx * 0.12}s` }}
//           >
//             {/* Soft gradient halo on hover */}
//             <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//               <div className="absolute inset-[-40%] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.20),transparent_60%)]" />
//             </div>

//             <div className="relative p-6">
//               {/* Icon */}
//               <div className="mb-5">
//                 <div className="relative inline-flex items-center justify-center">
//                   {/* Gradient ring */}
//                   <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-400/60 via-indigo-400/40 to-emerald-400/50 blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
//                   {/* Icon container */}
//                   <div className="relative w-11 h-11 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300">
//                     <span
//                       className="w-6 h-6"
//                       dangerouslySetInnerHTML={{
//                         __html: svgs[idx % svgs.length],
//                       }}
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Title */}
//               <h3 className="text-lg font-semibold text-slate-900">
//                 {item.title}
//               </h3>

//               {/* Underline */}
//               <div className="mt-2 mb-4 h-0.5 w-12 rounded-full bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400" />

//               {/* Description */}
//               <p className="text-sm leading-relaxed text-slate-600">
//                 {item.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Local animations */}
//       <style>
//         {`
//           @keyframes cardReveal {
//             0% {
//               opacity: 0;
//               transform: translateY(18px) scale(.97);
//             }
//             100% {
//               opacity: 1;
//               transform: translateY(0) scale(1);
//             }
//           }
//           .animate-cardReveal {
//             animation: cardReveal 0.6s ease-out forwards;
//           }
//         `}
//       </style>
//     </section>
//   );
// };

// export default WhyChooseUsSection;
"use client";

import { WHY_CHOOSE_US } from "../../Constants";
import { useState, useEffect, useRef } from "react";

export const WhyChooseUsSection = () => {
  const [visibleIndices, setVisibleIndices] = useState(new Set());
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.getAttribute("data-header")) {
              setIsHeaderVisible(true);
            }
            const idx = entry.target.getAttribute("data-index");
            if (idx !== null) {
              setVisibleIndices(
                (prev) => new Set([...prev, parseInt(idx, 10)])
              );
            }
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = sectionRef.current?.querySelectorAll(
      "[data-index], [data-header]"
    );
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Icon configs with gradients
  const iconConfigs = [
    {
      gradient: "from-amber-500 to-orange-500",
      lightBg: "from-amber-50 to-orange-50",
      borderColor: "hover:border-amber-300",
      svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M9 18h6"></path>
        <path d="M10 22h4"></path>
        <path d="M12 2a7 7 0 0 0-7 7c0 2.6 1.7 4.8 4 6v1h6v-1c2.3-1.2 4-3.4 4-6a7 7 0 0 0-7-7z"></path>
      </svg>`,
    },
    {
      gradient: "from-blue-500 to-cyan-500",
      lightBg: "from-blue-50 to-cyan-50",
      borderColor: "hover:border-blue-300",
      svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="4" width="18" height="12" rx="2"></rect>
        <path d="M2 18h20"></path>
      </svg>`,
    },
    {
      gradient: "from-violet-500 to-purple-500",
      lightBg: "from-violet-50 to-purple-50",
      borderColor: "hover:border-violet-300",
      svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 3v18h18"></path>
        <rect x="7" y="13" width="3" height="5" rx="1"></rect>
        <rect x="12" y="9" width="3" height="9" rx="1"></rect>
        <rect x="17" y="5" width="3" height="13" rx="1"></rect>
      </svg>`,
    },
    {
      gradient: "from-emerald-500 to-teal-500",
      lightBg: "from-emerald-50 to-teal-50",
      borderColor: "hover:border-emerald-300",
      svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 2l8 4v6c0 6-4 10-8 10s-8-4-8-10V6l8-4z"></path>
        <circle cx="12" cy="12" r="2"></circle>
        <path d="M12 14v2"></path>
      </svg>`,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative px-4 sm:px-6 py-16 sm:py-20 md:py-28 lg:py-32 overflow-hidden bg-[#fafbfc]"
    >
      {/* ✨ Premium Background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.1),transparent)]" />

        {/* Animated Gradient Orbs */}
        <div className="absolute top-0 right-0 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-gradient-to-r from-blue-200/30 to-cyan-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute bottom-0 left-0 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-gradient-to-r from-violet-200/30 to-fuchsia-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-gradient-to-r from-amber-200/20 to-orange-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />

        {/* Subtle Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Floating Particles */}
        <div className="hidden sm:block">
          <div className="absolute top-1/4 left-[15%] w-2 h-2 bg-blue-400/40 rounded-full animate-float" />
          <div className="absolute top-1/3 right-[20%] w-3 h-3 bg-violet-400/40 rounded-full animate-float animation-delay-2000" />
          <div className="absolute bottom-1/4 left-[25%] w-2 h-2 bg-amber-400/40 rounded-full animate-float animation-delay-4000" />
          <div className="absolute top-2/3 right-[15%] w-1.5 h-1.5 bg-emerald-400/40 rounded-full animate-float" />
        </div>
      </div>

      {/* ✨ Premium Header */}
      <div
        data-header="true"
        className="max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20 text-center"
        style={{
          opacity: isHeaderVisible ? 1 : 0,
          transform: isHeaderVisible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s cubic-bezier(0.23, 1, 0.32, 1)",
        }}
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 mb-6 sm:mb-8 rounded-full bg-white/80 backdrop-blur-xl border border-gray-200/50 shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
          <span className="relative flex w-2 h-2 sm:w-2.5 sm:h-2.5">
            <span className="absolute inline-flex w-full h-full rounded-full bg-blue-400 animate-ping opacity-75"></span>
            <span className="relative inline-flex w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-violet-500"></span>
          </span>
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-gray-600">
            Why CJSS
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
          <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            A partner that
          </span>
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-emerald-600 bg-clip-text text-transparent">
            {" "}
            thinks in outcomes
          </span>
        </h2>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed font-light px-4">
          From concept to deployment, we combine engineering depth with a
          hands-on, collaborative approach so you can move faster with
          confidence.
        </p>
      </div>

      {/* ✨ Premium Cards Grid */}
      <div className="max-w-7xl mx-auto grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {WHY_CHOOSE_US.map((item, idx) => {
          const config = iconConfigs[idx % iconConfigs.length];

          return (
            <div
              key={idx}
              data-index={idx}
              className={`
                group relative overflow-hidden 
                rounded-2xl sm:rounded-3xl
                border-2 border-gray-100 
                bg-white
                shadow-[0_10px_40px_rgba(0,0,0,0.04)]
                transition-all duration-500 ease-out
                hover:-translate-y-2 
                hover:shadow-[0_25px_60px_rgba(0,0,0,0.1)]
                ${config.borderColor}
                ${
                  visibleIndices.has(idx)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }
              `}
              style={{
                animation: visibleIndices.has(idx)
                  ? `cardReveal 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards`
                  : "none",
                animationDelay: `${idx * 0.12}s`,
              }}
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${config.lightBg} opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
              />

              {/* Content */}
              <div className="relative z-10 p-5 sm:p-6 md:p-8">
                {/* Icon */}
                <div className="mb-4 sm:mb-5">
                  <div
                    className={`
                    w-12 h-12 sm:w-14 sm:h-14
                    rounded-xl sm:rounded-2xl
                    bg-gradient-to-br ${config.gradient}
                    flex items-center justify-center
                    shadow-lg
                    transition-all duration-300
                    group-hover:scale-110 group-hover:rotate-3
                  `}
                  >
                    <span
                      className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                      dangerouslySetInnerHTML={{ __html: config.svg }}
                      style={{ color: "white" }}
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>

                {/* Animated Underline */}
                <div
                  className={`h-1 w-10 rounded-full bg-gradient-to-r ${config.gradient} mb-3 sm:mb-4 transition-all duration-300 group-hover:w-16`}
                />

                {/* Description */}
                <p className="text-sm sm:text-base leading-relaxed text-gray-600">
                  {item.description}
                </p>

                {/* Card Footer */}
                <div className="mt-4 sm:mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span
                    className={`text-xs sm:text-sm font-bold bg-gradient-to-r ${config.gradient} bg-clip-text text-transparent`}
                  >
                    0{idx + 1}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-gray-100">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Corner Decoration */}
              <div
                className={`absolute bottom-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${config.gradient} opacity-[0.05] group-hover:opacity-[0.1] rounded-tl-full transition-opacity duration-500`}
              />
            </div>
          );
        })}
      </div>

      {/* Animations */}
      <style>{`
        @keyframes cardReveal {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUsSection;
