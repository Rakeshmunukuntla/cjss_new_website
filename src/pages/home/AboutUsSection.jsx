// "use client";

// import { COMPANY_INFO } from "../../Constants";
// import { useState, useEffect, useRef } from "react";

// export const AboutUsSection = () => {
//   const [visibleCards, setVisibleCards] = useState(new Set());
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const cardId = entry.target.getAttribute("data-card");
//             if (cardId) {
//               setVisibleCards((prev) => new Set([...prev, cardId]));
//             }
//           }
//         });
//       },
//       { threshold: 0.15 }
//     );

//     const cards = sectionRef.current?.querySelectorAll("[data-card]");
//     cards?.forEach((card) => observer.observe(card));

//     return () => observer.disconnect();
//   }, []);

//   const cards = [
//     {
//       id: "vision",
//       title: "Our Vision",
//       content: COMPANY_INFO.vision,
//       animation: "revealLeft",
//       bgImage: "/images/NewVision.png",
//     },
//     {
//       id: "mission",
//       title: "Our Mission",
//       content: COMPANY_INFO.mission,
//       animation: "revealUp",
//       bgImage: "/images/NewMission.png",
//     },
//     {
//       id: "values",
//       title: "Our Values",
//       content: null,
//       animation: "revealRight",
//       bgImage: "/images/NewValues.png",
//     },
//   ];

//   const highlightChips = [
//     "Innovation-led delivery",
//     "Global pods & studios",
//     "Experience-first engineering",
//   ];

//   const statHighlights = [
//     { value: "12+", label: "Years Engineering" },
//     { value: "350+", label: "Experts" },
//     { value: "5", label: "Delivery Hubs" },
//     { value: "96%", label: "Client Retention" },
//   ];

//   return (
//     <section
//       ref={sectionRef}
//       className="
//         relative py-24 px-6 overflow-hidden
//         bg-gradient-to-b from-white via-[#f8fafc] to-[#eef2f6]
//       "
//     >
//       {/* Soft Background Elements */}
//       <div className="absolute inset-0 -z-10">
//         {/* Light soft blobs */}
//         <div className="absolute -top-40 -left-32 w-[480px] h-[480px] rounded-full bg-sky-200/40 blur-[130px]" />
//         <div className="absolute -bottom-48 -right-24 w-[500px] h-[500px] rounded-full bg-indigo-200/35 blur-[150px]" />

//         {/* Subtle grid */}
//         <div
//           className="absolute inset-0 opacity-[0.1]"
//           style={{
//             backgroundImage:
//               "linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)",
//             backgroundSize: "70px 70px",
//           }}
//         />
//       </div>

//       {/* MAIN CONTENT */}
//       <div className="relative z-10 max-w-6xl mx-auto space-y-20">
//         {/* TOP SECTION */}
//         <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
//           {/* Left */}
//           <div className="space-y-6">
//             <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-slate-500">
//               <span className="w-12 h-px bg-gradient-to-r from-sky-500/60 to-blue-500/60" />
//               <span>About Us</span>
//             </div>

//             <h2
//               className="text-4xl md:text-5xl font-extrabold text-slate-800 leading-tight"
//               style={{ letterSpacing: "-0.03em" }}
//             >
//               Crafting
//               <span className="ml-2 text-transparent bg-gradient-to-r from-blue-500 to-sky-600 bg-clip-text">
//                 digital experiences
//               </span>
//               <br />
//               with fearless ambition.
//             </h2>

//             <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
//               {COMPANY_INFO.mission}
//             </p>

//             <div className="flex flex-wrap gap-3">
//               {highlightChips.map((chip) => (
//                 <span
//                   key={chip}
//                   className="
//                     px-4 py-2 text-sm rounded-full border
//                     border-slate-300 bg-white shadow-sm
//                     text-slate-700 hover:border-blue-400 hover:bg-blue-50
//                     transition-all
//                   "
//                 >
//                   {chip}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* Right stats card */}
//           <div className="relative">
//             <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl p-10">
//               {/* title */}
//               <p className="mb-2 text-xs uppercase tracking-[0.35em] text-slate-500">
//                 Vision
//               </p>

//               <p className="text-2xl font-semibold leading-relaxed text-slate-700">
//                 {COMPANY_INFO.vision}
//               </p>

//               {/* Stats */}
//               <div className="grid grid-cols-2 gap-6 mt-10">
//                 {statHighlights.map((stat) => (
//                   <div key={stat.label}>
//                     <p className="text-3xl font-bold text-slate-800">
//                       {stat.value}
//                     </p>
//                     <p className="mt-1 text-xs uppercase tracking-[0.15em] text-slate-500">
//                       {stat.label}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* BOTTOM CARD GRID */}
//         <div className="grid gap-8 md:grid-cols-3">
//           {cards.map((card, idx) => (
//             <div
//               key={card.id}
//               data-card={card.id}
//               className="
//                 group relative overflow-hidden rounded-3xl
//                 border border-slate-200 bg-white
//                 shadow-[0_20px_40px_rgba(0,0,0,0.06)]
//                 transition-all duration-700 hover:-translate-y-2
//                 hover:shadow-[0_28px_60px_rgba(0,0,0,0.10)]
//               "
//               style={{
//                 opacity: visibleCards.has(card.id) ? 1 : 0,
//                 animation: visibleCards.has(card.id)
//                   ? `${card.animation} 0.9s cubic-bezier(0.23,1,0.32,1)`
//                   : "none",
//                 animationDelay: `${idx * 0.15}s`,
//               }}
//             >
//               {/* BG image soft */}
//               <div
//                 className="absolute inset-0 opacity-35"
//                 style={{
//                   backgroundImage: `url('${card.bgImage}')`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                 }}
//               />

//               {/* White overlay */}
//               <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />

//               {/* Content */}
//               <div className="relative z-10 p-8 space-y-6">
//                 <div className="flex items-center gap-3">
//                   <span className="flex items-center justify-center w-12 h-12 text-xl rounded-2xl bg-blue-100 text-blue-600">
//                     {idx + 1}
//                   </span>

//                   <div>
//                     <h3 className="text-2xl font-bold text-slate-800">
//                       {card.title}
//                     </h3>
//                     <div className="mt-1 h-0.5 w-10 bg-gradient-to-r from-blue-500 to-sky-400" />
//                   </div>
//                 </div>

//                 {card.id === "values" ? (
//                   <ul className="space-y-2 text-slate-700">
//                     {COMPANY_INFO.values.map((value, vidx) => (
//                       <li key={vidx} className="flex items-start gap-2">
//                         <span className="mt-1 text-blue-500">◆</span>
//                         {value}
//                       </li>
//                     ))}
//                   </ul>
//                 ) : (
//                   <p className="leading-relaxed text-slate-600">
//                     {card.content}
//                   </p>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ANIMATIONS */}
//       <style>{`
//         @keyframes revealLeft {
//           0% { opacity: 0; transform: translateX(-40px); }
//           100% { opacity: 1; transform: translateX(0); }
//         }
//         @keyframes revealRight {
//           0% { opacity: 0; transform: translateX(40px); }
//           100% { opacity: 1; transform: translateX(0); }
//         }
//         @keyframes revealUp {
//           0% { opacity: 0; transform: translateY(40px); }
//           100% { opacity: 1; transform: translateY(0); }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default AboutUsSection;
"use client";

import { COMPANY_INFO } from "../../Constants";
import { useState, useEffect, useRef } from "react";

export const AboutUsSection = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = entry.target.getAttribute("data-card");
            if (cardId) {
              setVisibleCards((prev) => new Set([...prev, cardId]));
            }
            if (entry.target.getAttribute("data-header")) {
              setIsHeaderVisible(true);
            }
          }
        });
      },
      { threshold: 0.15 }
    );

    const cards = sectionRef.current?.querySelectorAll(
      "[data-card], [data-header]"
    );
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      id: "vision",
      title: "Our Vision",
      content: COMPANY_INFO.vision,
      animation: "revealLeft",
      bgImage: "/images/NewVision.png",
      gradient: "from-violet-500 to-purple-600",
      lightBg: "from-violet-50 to-purple-50",
      borderColor: "hover:border-violet-300",
    },
    {
      id: "mission",
      title: "Our Mission",
      content: COMPANY_INFO.mission,
      animation: "revealUp",
      bgImage: "/images/NewMission.png",
      gradient: "from-blue-500 to-cyan-500",
      lightBg: "from-blue-50 to-cyan-50",
      borderColor: "hover:border-blue-300",
    },
    {
      id: "values",
      title: "Our Values",
      content: null,
      animation: "revealRight",
      bgImage: "/images/NewValues.png",
      gradient: "from-amber-500 to-orange-500",
      lightBg: "from-amber-50 to-orange-50",
      borderColor: "hover:border-amber-300",
    },
  ];

  const highlightChips = [
    "Innovation-led delivery",
    "Global pods & studios",
    "Experience-first engineering",
  ];

  const statHighlights = [
    {
      value: "12+",
      label: "Years Engineering",
      color: "from-violet-500 to-purple-500",
    },
    { value: "350+", label: "Experts", color: "from-blue-500 to-cyan-500" },
    {
      value: "5",
      label: "Delivery Hubs",
      color: "from-emerald-500 to-teal-500",
    },
    {
      value: "96%",
      label: "Client Retention",
      color: "from-rose-500 to-pink-500",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6 overflow-hidden bg-[#fafbfc]"
    >
      {/* ✨ Premium Background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.1),transparent)]" />

        {/* Animated Gradient Orbs */}
        <div className="absolute top-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gradient-to-r from-violet-200/25 to-fuchsia-200/25 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gradient-to-r from-cyan-200/25 to-blue-200/25 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
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

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto space-y-16 sm:space-y-20 md:space-y-24">
        {/* ✨ TOP SECTION */}
        <div
          data-header="true"
          className="grid items-center gap-10 lg:gap-14 lg:grid-cols-[1fr_1fr]"
          style={{
            opacity: isHeaderVisible ? 1 : 0,
            transform: isHeaderVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.23, 1, 0.32, 1)",
          }}
        >
          {/* Left */}
          <div className="space-y-5 sm:space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/80 backdrop-blur-xl border border-gray-200/50 shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
              <span className="w-8 sm:w-12 h-px bg-gradient-to-r from-violet-500 to-blue-500" />
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-gray-600">
                About Us
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              <span className="text-gray-800">Crafting</span>
              <span className="ml-2 bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                digital experiences
              </span>
              <br />
              <span className="text-gray-800">with fearless ambition.</span>
            </h2>

            {/* Subtitle */}
            <p className="max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-gray-500 font-light">
              {COMPANY_INFO.mission}
            </p>

            {/* Chips */}
            <div className="flex flex-wrap gap-2 sm:gap-3 pt-2">
              {highlightChips.map((chip) => (
                <span
                  key={chip}
                  className="
                    px-3 sm:px-4 py-2 sm:py-2.5 
                    text-xs sm:text-sm rounded-xl sm:rounded-2xl 
                    border-2 border-gray-100 bg-white 
                    shadow-sm text-gray-700 
                    hover:border-violet-300 hover:shadow-md hover:bg-violet-50/50
                    transition-all duration-300 cursor-default
                  "
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Right - Stats Card */}
          <div className="relative">
            {/* Decorative blurs */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 rounded-3xl blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl blur-2xl" />

            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-gray-100 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-6 sm:p-8 md:p-10">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-500/5 to-blue-500/5 rounded-bl-full" />

              {/* Vision Label */}
              <p className="mb-3 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-gray-400 font-semibold">
                Vision
              </p>

              {/* Vision Text */}
              <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-relaxed text-gray-700">
                {COMPANY_INFO.vision}
              </p>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-6 sm:my-8" />

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {statHighlights.map((stat) => (
                  <div
                    key={stat.label}
                    className="group p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gray-50/50 hover:bg-white hover:shadow-lg border border-transparent hover:border-gray-100 transition-all duration-300"
                  >
                    <p
                      className={`text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                    >
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[10px] sm:text-xs uppercase tracking-[0.1em] text-gray-400">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bottom corner */}
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-cyan-500/5 to-blue-500/5 rounded-tr-full" />
            </div>
          </div>
        </div>

        {/* ✨ BOTTOM CARD GRID */}
        <div className="grid gap-4 sm:gap-6 md:gap-8 md:grid-cols-3">
          {cards.map((card, idx) => (
            <div
              key={card.id}
              data-card={card.id}
              className={`
                group relative overflow-hidden 
                rounded-2xl sm:rounded-3xl
                border-2 border-gray-100 bg-white
                shadow-[0_10px_40px_rgba(0,0,0,0.04)]
                transition-all duration-500 ease-out
                hover:-translate-y-2 
                hover:shadow-[0_25px_60px_rgba(0,0,0,0.1)]
                ${card.borderColor}
              `}
              style={{
                opacity: visibleCards.has(card.id) ? 1 : 0,
                animation: visibleCards.has(card.id)
                  ? `${card.animation} 0.9s cubic-bezier(0.23,1,0.32,1) forwards`
                  : "none",
                animationDelay: `${idx * 0.15}s`,
              }}
            >
              {/* BG image */}
              <div
                className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                style={{
                  backgroundImage: `url('${card.bgImage}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              {/* White overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/70 to-white/60 backdrop-blur-[2px]" />

              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.lightBg} opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
              />

              {/* Content */}
              <div className="relative z-10 p-5 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
                {/* Header */}
                <div className="flex items-center gap-3 sm:gap-4">
                  {/* Number Badge */}
                  <span
                    className={`
                    flex items-center justify-center 
                    w-10 h-10 sm:w-12 sm:h-12 
                    text-base sm:text-xl font-bold
                    rounded-xl sm:rounded-2xl 
                    bg-gradient-to-br ${card.gradient}
                    text-white shadow-lg
                    transition-transform duration-300
                    group-hover:scale-110 group-hover:rotate-3
                  `}
                  >
                    {idx + 1}
                  </span>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                      {card.title}
                    </h3>
                    <div
                      className={`mt-2 h-1 w-10 rounded-full bg-gradient-to-r ${card.gradient} transition-all duration-300 group-hover:w-16`}
                    />
                  </div>
                </div>

                {/* Body */}
                {card.id === "values" ? (
                  <ul className="space-y-2 sm:space-y-3">
                    {COMPANY_INFO.values.map((value, vidx) => (
                      <li
                        key={vidx}
                        className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-600"
                      >
                        <span
                          className={`mt-0.5 w-5 h-5 rounded-full bg-gradient-to-br ${card.gradient} flex items-center justify-center flex-shrink-0`}
                        >
                          <svg
                            className="w-3 h-3 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                        <span className="leading-relaxed">{value}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm sm:text-base leading-relaxed text-gray-600">
                    {card.content}
                  </p>
                )}
              </div>

              {/* Corner Decoration */}
              <div
                className={`absolute bottom-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${card.gradient} opacity-[0.05] group-hover:opacity-[0.1] rounded-tl-full transition-opacity duration-500`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes revealLeft {
          0% { opacity: 0; transform: translateX(-50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes revealRight {
          0% { opacity: 0; transform: translateX(50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes revealUp {
          0% { opacity: 0; transform: translateY(50px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default AboutUsSection;
