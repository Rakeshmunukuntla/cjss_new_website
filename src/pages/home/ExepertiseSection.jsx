// import { EXPERTISE } from "../../Constants";
// import { useState, useEffect, useRef } from "react";
// import Icon from "./Icon";

// export const ExpertiseSection = () => {
//   const [visibleIndices, setVisibleIndices] = useState(new Set());
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const idx = Number(entry.target.dataset.index);
//             setVisibleIndices((prev) => new Set(prev).add(idx));
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     sectionRef.current
//       ?.querySelectorAll("[data-index]")
//       .forEach((el) => observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

//   const columns = 3;
//   const expertiseWithIndex = EXPERTISE.map((item, idx) => ({ ...item, idx }));
//   const columnData = Array.from({ length: columns }, (_, colIdx) =>
//     expertiseWithIndex.filter((item) => item.idx % columns === colIdx)
//   );
//   const columnOffsets = ["", "mt-10", "mt-20"];

//   return (
//     <section
//       ref={sectionRef}
//       className="
//         relative px-6 py-32 overflow-hidden
//         bg-[linear-gradient(135deg,#f8f9ff_0%,#eef2ff_35%,#e0f2fe_70%,#f8fafc_100%)]
//       "
//     >
//       {/* 🌫️ Premium background washes */}
//       <div className="absolute inset-0 -z-10 pointer-events-none">
//         <div className="absolute -top-48 -left-48 w-[800px] h-[800px] rounded-full bg-indigo-300/30 blur-[200px]" />
//         <div className="absolute -bottom-48 -right-48 w-[820px] h-[820px] rounded-full bg-sky-300/30 blur-[220px]" />
//         <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.12),transparent_70%)]" />
//       </div>

//       <div className="relative z-10 max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="mb-24 text-center">
//           <span className="inline-block mb-4 text-xs font-semibold tracking-[0.35em] uppercase text-indigo-600">
//             Our Expertise
//           </span>
//           <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
//             Deep Technical Capabilities
//           </h2>
//           <p className="max-w-2xl mx-auto mt-4 text-lg text-slate-600">
//             Specialized engineering capabilities embedded directly into
//             enterprise product teams.
//           </p>
//         </div>

//         {/* Columns */}
//         <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
//           {columnData.map((column, colIdx) => (
//             <div
//               key={colIdx}
//               className={`space-y-12 ${columnOffsets[colIdx]} pb-16`}
//             >
//               {column.map((item) => (
//                 <div
//                   key={item.name}
//                   data-index={item.idx}
//                   style={{ transitionDelay: `${item.idx * 80}ms` }}
//                   className={`
//                     group relative rounded-3xl
//                     bg-black/85 backdrop-blur-xl
//                     border border-white/10
//                     px-6 py-7 flex flex-col gap-5
//                     shadow-[0_20px_45px_rgba(15,23,42,0.25)]
//                     transition-all duration-700 ease-out
//                     hover:-translate-y-2 hover:scale-[1.01]
//                     hover:shadow-[0_40px_90px_rgba(15,23,42,0.35)]
//                     ${
//                       visibleIndices.has(item.idx)
//                         ? "opacity-100 translate-y-0"
//                         : "opacity-0 translate-y-10"
//                     }
//                   `}
//                 >
//                   {/* Glow */}
//                   <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.18),transparent_70%)]" />

//                   {/* Header */}
//                   <div className="relative z-10 flex items-center justify-between">
//                     <div className="flex items-center gap-3">
//                       <div className="text-indigo-300 transition-transform duration-500 group-hover:scale-110">
//                         <Icon name={item.icon} className="w-8 h-8" />
//                       </div>
//                       <div>
//                         <p className="text-lg font-semibold text-white">
//                           {item.name}
//                         </p>
//                         <p className="text-xs uppercase tracking-[0.22em] text-white/60">
//                           Core Capability
//                         </p>
//                       </div>
//                     </div>
//                     <span className="text-[11px] font-semibold text-white/60 border border-white/10 rounded-full px-3 py-1">
//                       {item.idx + 1 < 10 ? `0${item.idx + 1}` : item.idx + 1}
//                     </span>
//                   </div>

//                   {/* Description */}
//                   <p className="relative z-10 text-sm leading-relaxed text-white/70">
//                     {item.description}
//                   </p>

//                   {/* Expand */}
//                   <div className="relative z-10 pt-4 overflow-hidden text-sm transition-all duration-700 ease-out border-t border-white/10 opacity-0 max-h-0 group-hover:max-h-40 group-hover:opacity-100">
//                     <p className="mb-1 font-semibold text-white">
//                       How we apply it
//                     </p>
//                     <p className="text-white/70">
//                       Embedded squads deliver strategy, build, and continuous
//                       optimization inside client ecosystems.
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ExpertiseSection;
"use client";

import { EXPERTISE } from "../../Constants";
import { useState, useEffect, useRef } from "react";
import Icon from "./Icon";

export const ExpertiseSection = () => {
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
            const idx = entry.target.dataset.index;
            if (idx !== undefined) {
              setVisibleIndices((prev) => new Set(prev).add(Number(idx)));
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(
      "[data-index], [data-header]"
    );
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Gradient configs for cards
  const gradientConfigs = [
    {
      gradient: "from-violet-500 to-purple-600",
      lightBg: "from-violet-50 to-purple-50",
      borderColor: "hover:border-violet-300",
      iconBg: "bg-violet-100",
      iconColor: "text-violet-600",
    },
    {
      gradient: "from-blue-500 to-cyan-500",
      lightBg: "from-blue-50 to-cyan-50",
      borderColor: "hover:border-blue-300",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      gradient: "from-amber-500 to-orange-500",
      lightBg: "from-amber-50 to-orange-50",
      borderColor: "hover:border-amber-300",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
    },
    {
      gradient: "from-emerald-500 to-teal-500",
      lightBg: "from-emerald-50 to-teal-50",
      borderColor: "hover:border-emerald-300",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
    },
    {
      gradient: "from-rose-500 to-pink-500",
      lightBg: "from-rose-50 to-pink-50",
      borderColor: "hover:border-rose-300",
      iconBg: "bg-rose-100",
      iconColor: "text-rose-600",
    },
    {
      gradient: "from-indigo-500 to-blue-500",
      lightBg: "from-indigo-50 to-blue-50",
      borderColor: "hover:border-indigo-300",
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
    },
  ];

  const columns = 3;
  const expertiseWithIndex = EXPERTISE.map((item, idx) => ({
    ...item,
    idx,
    config: gradientConfigs[idx % gradientConfigs.length],
  }));
  const columnData = Array.from({ length: columns }, (_, colIdx) =>
    expertiseWithIndex.filter((item) => item.idx % columns === colIdx)
  );
  const columnOffsets = ["", "mt-8 lg:mt-12", "mt-16 lg:mt-24"];

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
        <div className="absolute top-0 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gradient-to-r from-violet-200/25 to-fuchsia-200/25 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gradient-to-r from-cyan-200/25 to-blue-200/25 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
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
          <div className="absolute top-1/4 left-[10%] w-2 h-2 bg-violet-400/40 rounded-full animate-float" />
          <div className="absolute top-1/3 right-[15%] w-3 h-3 bg-blue-400/40 rounded-full animate-float animation-delay-2000" />
          <div className="absolute bottom-1/4 left-[20%] w-2 h-2 bg-cyan-400/40 rounded-full animate-float animation-delay-4000" />
          <div className="absolute top-2/3 right-[10%] w-1.5 h-1.5 bg-amber-400/40 rounded-full animate-float" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* ✨ Premium Header */}
        <div
          data-header="true"
          className="mb-12 sm:mb-16 md:mb-20 lg:mb-24 text-center"
          style={{
            opacity: isHeaderVisible ? 1 : 0,
            transform: isHeaderVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.23, 1, 0.32, 1)",
          }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 mb-6 sm:mb-8 rounded-full bg-white/80 backdrop-blur-xl border border-gray-200/50 shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
            <span className="relative flex w-2 h-2 sm:w-2.5 sm:h-2.5">
              <span className="absolute inline-flex w-full h-full rounded-full bg-violet-400 animate-ping opacity-75"></span>
              <span className="relative inline-flex w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-gradient-to-r from-violet-500 to-blue-500"></span>
            </span>
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-gray-600">
              Our Expertise
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Deep Technical
            </span>
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {" "}
              Capabilities
            </span>
          </h2>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed font-light px-4">
            Specialized engineering capabilities embedded directly into
            enterprise product teams.
          </p>

          {/* Stats Row */}
          <div className="flex justify-center items-center gap-6 sm:gap-8 md:gap-12 mt-8 sm:mt-10">
            {[
              { value: `${EXPERTISE.length}+`, label: "Capabilities" },
              { value: "100%", label: "Expertise" },
              { value: "24/7", label: "Support" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ✨ Masonry Columns */}
        <div className="grid gap-4 sm:gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {columnData.map((column, colIdx) => (
            <div
              key={colIdx}
              className={`space-y-4 sm:space-y-6 md:space-y-8 ${columnOffsets[colIdx]} pb-8`}
            >
              {column.map((item) => (
                <div
                  key={item.name}
                  data-index={item.idx}
                  style={{ transitionDelay: `${item.idx * 80}ms` }}
                  className={`
                    group relative overflow-hidden
                    rounded-2xl sm:rounded-3xl
                    bg-white
                    border-2 border-gray-100
                    px-5 sm:px-6 py-5 sm:py-6
                    shadow-[0_10px_40px_rgba(0,0,0,0.04)]
                    transition-all duration-500 ease-out
                    hover:-translate-y-2
                    hover:shadow-[0_25px_60px_rgba(0,0,0,0.1)]
                    ${item.config.borderColor}
                    ${
                      visibleIndices.has(item.idx)
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }
                  `}
                >
                  {/* Gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.config.lightBg} opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                  />

                  {/* Corner Decoration */}
                  <div
                    className={`absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br ${item.config.gradient} opacity-[0.03] group-hover:opacity-[0.08] rounded-full transition-opacity duration-500`}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        {/* Icon */}
                        <div
                          className={`
                          w-10 h-10 sm:w-12 sm:h-12 
                          rounded-xl sm:rounded-2xl 
                          ${item.config.iconBg}
                          flex items-center justify-center
                          transition-all duration-300
                          group-hover:scale-110 group-hover:rotate-3
                        `}
                        >
                          <Icon
                            name={item.icon}
                            className={`w-5 h-5 sm:w-6 sm:h-6 ${item.config.iconColor}`}
                          />
                        </div>

                        <div>
                          <p className="text-base sm:text-lg font-bold text-gray-900">
                            {item.name}
                          </p>
                          <p className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-400">
                            Core Capability
                          </p>
                        </div>
                      </div>

                      {/* Index Badge */}
                      <span
                        className={`
                        text-[10px] sm:text-xs font-bold 
                        bg-gradient-to-r ${item.config.gradient} 
                        bg-clip-text text-transparent
                        px-2 py-1 
                        border border-gray-100 
                        rounded-full
                      `}
                      >
                        {String(item.idx + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Animated Underline */}
                    <div
                      className={`h-1 w-10 rounded-full bg-gradient-to-r ${item.config.gradient} mb-4 transition-all duration-300 group-hover:w-16`}
                    />

                    {/* Description */}
                    <p className="text-sm leading-relaxed text-gray-600 mb-4">
                      {item.description}
                    </p>

                    {/* Expandable Content */}
                    <div
                      className="
                      relative overflow-hidden
                      pt-4 border-t border-gray-100
                      max-h-0 opacity-0
                      group-hover:max-h-40 group-hover:opacity-100
                      transition-all duration-500 ease-out
                    "
                    >
                      <p className="text-xs sm:text-sm font-semibold text-gray-900 mb-1">
                        How we apply it
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                        Embedded squads deliver strategy, build, and continuous
                        optimization inside client ecosystems.
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-xs text-gray-400">
                        Expertise Area
                      </span>
                      <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors duration-300">
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
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
