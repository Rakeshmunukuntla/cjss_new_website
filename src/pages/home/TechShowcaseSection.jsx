// "use client";

// import { useEffect, useRef, useState } from "react";

// const CARDS = [
//   {
//     id: "1",
//     text: "SAP Hybris powers scalable, multi-channel commerce platforms.",
//     author: "Tech Lead",
//     role: "E-commerce",
//     tech: "SAP Hybris",
//   },
//   {
//     id: "2",
//     text: "Adobe AEM reduced content publishing cycles by 60%.",
//     author: "Content Director",
//     role: "Marketing",
//     tech: "Adobe AEM",
//   },
//   {
//     id: "3",
//     text: "React delivers exceptional UI performance at scale.",
//     author: "Frontend Architect",
//     role: "Engineering",
//     tech: "React",
//   },
//   {
//     id: "4",
//     text: "TypeScript improved reliability in large codebases.",
//     author: "Platform Lead",
//     role: "Architecture",
//     tech: "TypeScript",
//   },
//   {
//     id: "5",
//     text: "Next.js accelerated delivery with SSR & SSG.",
//     author: "Full-Stack Dev",
//     role: "Web",
//     tech: "Next.js",
//   },
//   {
//     id: "6",
//     text: "Kubernetes simplified deployments & scaling.",
//     author: "Platform Engineer",
//     role: "DevOps",
//     tech: "Kubernetes",
//   },
// ];

// export default function TechShowcaseSection() {
//   const ref = useRef(null);
//   const [start, setStart] = useState(false);

//   useEffect(() => {
//     const io = new IntersectionObserver(
//       ([e]) => e.isIntersecting && setStart(true),
//       { threshold: 0.15 }
//     );
//     if (ref.current) io.observe(ref.current);
//     return () => io.disconnect();
//   }, []);

//   return (
//     <section
//       ref={ref}
//       className="
//         relative py-24 overflow-hidden
//         bg-[linear-gradient(135deg,#f6f8ff_0%,#eef2ff_45%,#e8f1ff_70%,#f8fafc_100%)]
//       "
//     >
//       {/* Background glow */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute -top-40 -left-40 w-[700px] h-[700px] bg-indigo-300/25 blur-[220px]" />
//         <div className="absolute -bottom-40 -right-40 w-[700px] h-[700px] bg-sky-300/25 blur-[240px]" />
//       </div>

//       {/* Header */}
//       <div className="max-w-6xl mx-auto text-center mb-14 px-6">
//         <span className="text-xs font-semibold tracking-[0.35em] uppercase text-indigo-600">
//           Trusted Stack
//         </span>
//         <h2 className="mt-4 text-3xl md:text-5xl font-bold text-slate-900">
//           Technologies teams trust
//         </h2>
//         <p className="mt-4 text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
//           Proven platforms powering enterprise-grade digital products.
//         </p>
//       </div>

//       {/* Continuous Row */}
//       <div className="relative overflow-hidden">
//         <div
//           className={`
//             flex gap-6 md:gap-8 px-6
//             ${start ? "animate-techScrollFast" : ""}
//           `}
//         >
//           {[...CARDS, ...CARDS].map((card, idx) => (
//             <PremiumCard key={idx} card={card} />
//           ))}
//         </div>
//       </div>

//       <style>
//         {`
//           @keyframes techScrollFast {
//             0% { transform: translateX(0); }
//             100% { transform: translateX(-50%); }
//           }

//           /* Faster desktop, even faster mobile */
//           .animate-techScrollFast {
//             animation: techScrollFast 22s linear infinite;
//           }

//           @media (max-width: 768px) {
//             .animate-techScrollFast {
//               animation-duration: 16s;
//             }
//           }
//         `}
//       </style>
//     </section>
//   );
// }

// /* ---------------- Premium Card ---------------- */

// function PremiumCard({ card }) {
//   return (
//     <div
//       className="
//         group relative shrink-0
//         w-[260px] sm:w-[280px] md:w-[320px]
//         rounded-3xl p-5 md:p-6
//         bg-[#0b0f1a]/90 backdrop-blur-xl
//         border border-white/10
//         shadow-[0_30px_70px_rgba(15,23,42,0.55)]
//         transition-all duration-500
//         hover:-translate-y-2
//         hover:shadow-[0_50px_120px_rgba(15,23,42,0.75)]
//       "
//     >
//       {/* Inner premium gradient */}
//       <div className="absolute inset-0 rounded-3xl opacity-100 bg-gradient-to-br from-white/5 via-transparent to-indigo-500/10 pointer-events-none" />

//       {/* Edge glow on hover */}
//       <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.35),transparent_70%)]" />

//       {/* Tech tag */}
//       <span className="relative z-10 inline-block mb-3 text-[11px] font-semibold px-3 py-1 rounded-full bg-white/10 text-indigo-300">
//         {card.tech}
//       </span>

//       {/* Text */}
//       <p className="relative z-10 text-sm md:text-[15px] leading-relaxed text-white/80 min-h-[64px]">
//         “{card.text}”
//       </p>

//       {/* Footer */}
//       <div className="relative z-10 flex items-center gap-3 mt-5 pt-4 border-t border-white/10">
//         <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-400 to-sky-400 flex items-center justify-center text-white font-bold text-sm">
//           {card.author[0]}
//         </div>
//         <div>
//           <p className="text-sm font-semibold text-white leading-none">
//             {card.author}
//           </p>
//           <p className="text-xs text-white/60">{card.role}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";

const CARDS = [
  {
    id: "1",
    text: "SAP Hybris powers scalable, multi-channel commerce platforms with seamless integration.",
    author: "Tech Lead",
    role: "E-commerce",
    tech: "SAP Hybris",
    icon: "🛒",
    gradient: "from-orange-500 to-amber-500",
    borderColor: "hover:border-orange-300",
    shadowColor: "hover:shadow-orange-100",
  },
  {
    id: "2",
    text: "Adobe AEM reduced content publishing cycles by 60% across global teams.",
    author: "Content Director",
    role: "Marketing",
    tech: "Adobe AEM",
    icon: "🎨",
    gradient: "from-red-500 to-pink-500",
    borderColor: "hover:border-red-300",
    shadowColor: "hover:shadow-red-100",
  },
  {
    id: "3",
    text: "React delivers exceptional UI performance and developer experience at scale.",
    author: "Frontend Architect",
    role: "Engineering",
    tech: "React",
    icon: "⚛️",
    gradient: "from-cyan-500 to-blue-500",
    borderColor: "hover:border-cyan-300",
    shadowColor: "hover:shadow-cyan-100",
  },
  {
    id: "4",
    text: "TypeScript improved code reliability and maintainability in large codebases.",
    author: "Platform Lead",
    role: "Architecture",
    tech: "TypeScript",
    icon: "📘",
    gradient: "from-blue-500 to-indigo-500",
    borderColor: "hover:border-blue-300",
    shadowColor: "hover:shadow-blue-100",
  },
  {
    id: "5",
    text: "Next.js accelerated delivery with powerful SSR, SSG & edge functions.",
    author: "Full-Stack Dev",
    role: "Web",
    tech: "Next.js",
    icon: "▲",
    gradient: "from-gray-700 to-gray-900",
    borderColor: "hover:border-gray-400",
    shadowColor: "hover:shadow-gray-200",
  },
  {
    id: "6",
    text: "Kubernetes simplified container orchestration, deployments & auto-scaling.",
    author: "Platform Engineer",
    role: "DevOps",
    tech: "Kubernetes",
    icon: "☸️",
    gradient: "from-blue-600 to-indigo-600",
    borderColor: "hover:border-indigo-300",
    shadowColor: "hover:shadow-indigo-100",
  },
  {
    id: "7",
    text: "AWS Cloud infrastructure enables unlimited scalability and global reach.",
    author: "Cloud Architect",
    role: "Infrastructure",
    tech: "AWS",
    icon: "☁️",
    gradient: "from-amber-500 to-orange-600",
    borderColor: "hover:border-amber-300",
    shadowColor: "hover:shadow-amber-100",
  },
  {
    id: "8",
    text: "Node.js powers high-performance backend services with event-driven architecture.",
    author: "Backend Lead",
    role: "API Development",
    tech: "Node.js",
    icon: "💚",
    gradient: "from-green-500 to-emerald-600",
    borderColor: "hover:border-green-300",
    shadowColor: "hover:shadow-green-100",
  },
];

export default function TechShowcaseSection() {
  const ref = useRef(null);
  const [start, setStart] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setStart(true),
      { threshold: 0.1 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative py-16 sm:py-20 md:py-28 lg:py-32 overflow-hidden bg-[#fafbfc]"
    >
      {/* ✨ Premium Background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.12),transparent)]" />

        {/* Animated Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gradient-to-r from-violet-200/30 to-fuchsia-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gradient-to-r from-cyan-200/30 to-blue-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-gradient-to-r from-amber-200/20 to-orange-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />

        {/* Subtle Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Floating Particles */}
        <div className="hidden sm:block">
          <div className="absolute top-1/4 left-[10%] w-2 h-2 bg-violet-400/40 rounded-full animate-float" />
          <div className="absolute top-1/3 right-[15%] w-3 h-3 bg-blue-400/40 rounded-full animate-float animation-delay-2000" />
          <div className="absolute bottom-1/4 left-[20%] w-2 h-2 bg-cyan-400/40 rounded-full animate-float animation-delay-4000" />
          <div className="absolute top-1/2 right-[10%] w-1.5 h-1.5 bg-pink-400/40 rounded-full animate-float" />
        </div>
      </div>

      {/* ✨ Premium Header */}
      <div className="max-w-6xl mx-auto text-center mb-12 sm:mb-16 md:mb-20 px-4 sm:px-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 mb-6 sm:mb-8 rounded-full bg-white/80 backdrop-blur-xl border border-gray-200/50 shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
          <span className="relative flex w-2 h-2 sm:w-2.5 sm:h-2.5">
            <span className="absolute inline-flex w-full h-full rounded-full bg-violet-400 animate-ping opacity-75"></span>
            <span className="relative inline-flex w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-violet-500"></span>
          </span>
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-gray-600">
            Trusted Technology Stack
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
          <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Technologies
          </span>
          <br className="sm:hidden" />
          <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-violet-600 bg-clip-text text-transparent">
            {" "}
            Teams Trust
          </span>
        </h2>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-500 max-w-xl sm:max-w-2xl mx-auto leading-relaxed font-light px-4">
          Proven platforms and frameworks powering enterprise-grade digital
          products across industries worldwide.
        </p>

        {/* Stats Row */}
        <div className="flex justify-center items-center gap-6 sm:gap-8 md:gap-12 mt-8 sm:mt-10">
          {[
            { value: "50+", label: "Technologies" },
            { value: "99.9%", label: "Uptime" },
            { value: "10x", label: "Faster" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✨ Premium Carousel */}
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-gradient-to-r from-[#fafbfc] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-gradient-to-l from-[#fafbfc] to-transparent z-10 pointer-events-none" />

        {/* Scrolling Container */}
        <div
          className={`
            flex gap-4 sm:gap-5 md:gap-6 px-4 sm:px-6 py-4
            ${start ? "animate-techScroll" : ""}
            ${isPaused ? "[animation-play-state:paused]" : ""}
          `}
        >
          {[...CARDS, ...CARDS].map((card, idx) => (
            <PremiumCard key={idx} card={card} />
          ))}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes techScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-techScroll {
          animation: techScroll 35s linear infinite;
        }

        @media (max-width: 768px) {
          .animate-techScroll {
            animation-duration: 25s;
          }
        }

        @media (max-width: 480px) {
          .animate-techScroll {
            animation-duration: 20s;
          }
        }
      `}</style>
    </section>
  );
}

/* ✨ Fixed Premium Card Component */
function PremiumCard({ card }) {
  return (
    <div
      className={`
        group relative shrink-0
        w-[260px] sm:w-[280px] md:w-[320px] lg:w-[340px]
        rounded-2xl sm:rounded-3xl
        p-4 sm:p-5 md:p-6
        bg-white
        border-2 border-gray-100
        shadow-[0_4px_24px_rgba(0,0,0,0.06)]
        transition-all duration-300 ease-out
        hover:-translate-y-2 
        hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]
        ${card.borderColor}
        ${card.shadowColor}
      `}
    >
      {/* Content Container */}
      <div className="relative z-10">
        {/* Header: Icon + Tech Tag */}
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          {/* Icon */}
          <div
            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center text-lg sm:text-xl shadow-lg transition-transform duration-300 group-hover:scale-110`}
          >
            {card.icon}
          </div>

          {/* Tech Badge */}
          <span
            className={`px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-semibold rounded-full bg-gradient-to-r ${card.gradient} text-white shadow-md`}
          >
            {card.tech}
          </span>
        </div>

        {/* Quote */}
        <div className="relative">
          <svg
            className="absolute -top-1 -left-1 w-6 h-6 sm:w-8 sm:h-8 text-gray-100"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-sm sm:text-[15px] leading-relaxed text-gray-600 pl-4 sm:pl-6 min-h-[60px] sm:min-h-[72px]">
            {card.text}
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-4 sm:my-5" />

        {/* Author */}
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div
            className={`relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br ${card.gradient} flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-lg`}
          >
            {card.author[0]}
            {/* Online Status */}
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 border-2 border-white rounded-full"></span>
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-900 truncate">
              {card.author}
            </p>
            <p className="text-xs text-gray-400 truncate">{card.role}</p>
          </div>

          {/* Arrow Icon - appears on hover */}
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
        className={`absolute bottom-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${card.gradient} opacity-[0.03] group-hover:opacity-[0.08] rounded-tl-full transition-opacity duration-300`}
      />
    </div>
  );
}
