// import { TECHNOLOGY_SERVICES } from "../../Constants";
// import { useEffect, useRef, useState, memo } from "react";

// /* ---------------- Premium Service Card ---------------- */
// const ServiceCard = memo(function ServiceCard({
//   service,
//   index,
//   visible,
//   onNavigate,
// }) {
//   return (
//     <div
//       data-index={index}
//       className={`
//         group relative overflow-hidden rounded-[30px]
//         transition-all duration-700 ease-out
//         ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
//       `}
//       style={{ transitionDelay: `${index * 90}ms` }}
//     >
//       {/* === OUTER DEPTH SHADOW === */}
//       <div className="absolute inset-0 rounded-[30px] shadow-[0_30px_80px_rgba(15,23,42,0.12)]" />

//       {/* === PREMIUM GRADIENT BASE === */}
//       <div className="absolute inset-0 rounded-[30px] bg-gradient-to-br from-white via-slate-50 to-slate-100" />

//       {/* === INNER GLASS SHEEN === */}
//       <div className="absolute inset-0 rounded-[30px] bg-[linear-gradient(180deg,rgba(255,255,255,0.75),rgba(255,255,255,0.35)_40%,transparent)]" />

//       {/* === BORDER GLOW (VERY SUBTLE) === */}
//       <div className="absolute inset-0 rounded-[30px] border border-slate-200/70" />
//       <div className="absolute inset-0 rounded-[30px] opacity-0 group-hover:opacity-100 transition duration-500 border border-indigo-300/40" />

//       {/* === HOVER GRADIENT DRIFT === */}
//       <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_20%_0%,rgba(99,102,241,0.12),transparent_60%)]" />

//       {/* === CONTENT === */}
//       <div className="relative z-10 p-10 grid gap-10 lg:grid-cols-[auto_1fr]">
//         {/* Index */}
//         <div className="select-none">
//           <div className="text-7xl font-bold text-slate-300 leading-none">
//             {String(index + 1).padStart(2, "0")}
//           </div>
//           <div className="mt-3 h-1 w-12 bg-gradient-to-r from-indigo-500 to-sky-400 rounded-full" />
//         </div>

//         {/* Text */}
//         <div>
//           <h3 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900">
//             {service.title}
//           </h3>

//           <p className="mb-8 max-w-3xl text-lg leading-relaxed text-slate-600">
//             {service.banner}
//           </p>

//           <div className="grid gap-8 md:grid-cols-2">
//             {/* Approach */}
//             <div className="rounded-2xl bg-white/80 backdrop-blur border border-slate-200 p-6 shadow-sm">
//               <p className="text-sm leading-relaxed text-slate-600">
//                 {service.approach}
//               </p>
//             </div>

//             {/* Solutions */}
//             <ul className="space-y-3">
//               {service.solutions.map((s) => (
//                 <li
//                   key={s.id}
//                   className="flex items-center gap-3 text-sm text-slate-700"
//                 >
//                   <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-sky-400" />
//                   {s.title}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* CTA */}
//           <button
//             onClick={() => onNavigate && onNavigate(`service-${service.id}`)}
//             className="
//               mt-10 inline-flex items-center gap-3
//               rounded-full px-7 py-3
//               text-sm font-semibold
//               text-indigo-600
//               border border-indigo-200 bg-white
//               transition-all duration-300
//               hover:bg-indigo-600 hover:text-white
//               hover:shadow-xl
//             "
//           >
//             Explore Service →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// });

// /* ---------------- Section ---------------- */
// export const OurServicesSection = ({ navigateTo }) => {
//   const sectionRef = useRef(null);
//   const [visible, setVisible] = useState(new Set());

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((e) => {
//           if (e.isIntersecting) {
//             const i = Number(e.target.dataset.index);
//             setVisible((prev) => new Set(prev).add(i));
//           }
//         });
//       },
//       { threshold: 0.15 }
//     );

//     sectionRef.current
//       ?.querySelectorAll("[data-index]")
//       .forEach((el) => observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative px-6 py-32 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden"
//     >
//       {/* Soft background */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-indigo-200/40 rounded-full blur-3xl" />
//         <div className="absolute -bottom-40 -right-40 w-[560px] h-[560px] bg-sky-200/40 rounded-full blur-3xl" />
//       </div>

//       {/* Header */}
//       <div className="relative z-10 max-w-6xl mx-auto mb-24">
//         <span className="inline-block mb-4 text-xs font-semibold tracking-[0.3em] uppercase text-indigo-600">
//           Our Services
//         </span>

//         <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
//           Enterprise-grade
//           <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-500">
//             Digital Capabilities
//           </span>
//         </h2>

//         <p className="max-w-2xl text-lg text-slate-600">
//           We design, engineer, and operate scalable digital platforms that power
//           modern enterprises.
//         </p>
//       </div>

//       {/* Cards */}
//       <div className="relative z-10 max-w-7xl mx-auto space-y-12">
//         {TECHNOLOGY_SERVICES.map((service, i) => (
//           <ServiceCard
//             key={service.id}
//             service={service}
//             index={i}
//             visible={visible.has(i)}
//             onNavigate={navigateTo}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default OurServicesSection;
"use client";

import { TECHNOLOGY_SERVICES } from "../../Constants";
import { useEffect, useRef, useState, memo } from "react";
import { useNavigate } from "react-router-dom";

// ✅ Direct route links matching App.jsx
const SERVICE_ROUTES = [
  "/services/quality-engineering",
  "/services/cloud-technologies",
  "/services/application-modernization",
  "/services/digital-commerce",
  "/services/ai",
];

/* ---------------- Premium Service Card ---------------- */
const ServiceCard = memo(function ServiceCard({ service, index, visible }) {
  const navigate = useNavigate();

  // ✅ Direct navigation using index
  const handleNavigate = () => {
    const route = SERVICE_ROUTES[index];
    if (route) {
      navigate(route);
    }
  };

  const gradientConfigs = [
    {
      gradient: "from-violet-500 to-purple-600",
      lightBg: "from-violet-50 to-purple-50",
      borderColor: "hover:border-violet-300",
      dotColor: "from-violet-500 to-purple-500",
    },
    {
      gradient: "from-blue-500 to-cyan-500",
      lightBg: "from-blue-50 to-cyan-50",
      borderColor: "hover:border-blue-300",
      dotColor: "from-blue-500 to-cyan-500",
    },
    {
      gradient: "from-amber-500 to-orange-500",
      lightBg: "from-amber-50 to-orange-50",
      borderColor: "hover:border-amber-300",
      dotColor: "from-amber-500 to-orange-500",
    },
    {
      gradient: "from-emerald-500 to-teal-500",
      lightBg: "from-emerald-50 to-teal-50",
      borderColor: "hover:border-emerald-300",
      dotColor: "from-emerald-500 to-teal-500",
    },
    {
      gradient: "from-rose-500 to-pink-500",
      lightBg: "from-rose-50 to-pink-50",
      borderColor: "hover:border-rose-300",
      dotColor: "from-rose-500 to-pink-500",
    },
  ];

  const config = gradientConfigs[index % gradientConfigs.length];

  return (
    <div
      data-index={index}
      className={`
        group relative overflow-hidden 
        rounded-2xl sm:rounded-3xl
        border-2 border-gray-100
        bg-white
        shadow-[0_10px_40px_rgba(0,0,0,0.04)]
        transition-all duration-700 ease-out
        hover:shadow-[0_30px_80px_rgba(0,0,0,0.1)]
        ${config.borderColor}
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
      `}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${config.lightBg} opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
      />

      <div
        className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${config.gradient} opacity-[0.03] group-hover:opacity-[0.08] rounded-full transition-opacity duration-500`}
      />
      <div
        className={`absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br ${config.gradient} opacity-[0.03] group-hover:opacity-[0.08] rounded-full transition-opacity duration-500`}
      />

      <div className="relative z-10 p-5 sm:p-8 md:p-10 lg:p-12">
        <div className="grid gap-6 sm:gap-8 lg:gap-10 lg:grid-cols-[auto_1fr]">
          <div className="select-none">
            <div
              className={`text-5xl sm:text-6xl md:text-7xl font-black bg-gradient-to-br ${config.gradient} bg-clip-text text-transparent leading-none opacity-30 group-hover:opacity-50 transition-opacity duration-300`}
            >
              {String(index + 1).padStart(2, "0")}
            </div>
            <div
              className={`mt-3 h-1 w-10 sm:w-12 rounded-full bg-gradient-to-r ${config.gradient} transition-all duration-300 group-hover:w-16`}
            />
          </div>

          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-500 max-w-3xl">
                {service.banner}
              </p>
            </div>

            <div className="grid gap-4 sm:gap-6 md:gap-8 md:grid-cols-2">
              <div className="rounded-xl sm:rounded-2xl bg-gray-50/80 backdrop-blur border border-gray-100 p-4 sm:p-5 md:p-6 hover:border-gray-200 hover:shadow-sm transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className={`w-8 h-8 rounded-lg bg-gradient-to-br ${config.gradient} flex items-center justify-center`}
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    Approach
                  </span>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-gray-600">
                  {service.approach}
                </p>
              </div>

              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className={`w-8 h-8 rounded-lg bg-gradient-to-br ${config.gradient} flex items-center justify-center`}
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                      />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    Solutions
                  </span>
                </div>
                <ul className="space-y-2">
                  {service.solutions.map((s) => (
                    <li
                      key={s.id}
                      className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                      <span
                        className={`flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r ${config.dotColor}`}
                      />
                      <span>{s.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-2 sm:pt-4 flex items-center justify-between">
              <button
                onClick={handleNavigate}
                className={`
                  inline-flex items-center gap-2 sm:gap-3
                  rounded-xl sm:rounded-2xl 
                  px-5 sm:px-7 py-2.5 sm:py-3
                  text-xs sm:text-sm font-semibold
                  text-white
                  bg-gradient-to-r ${config.gradient}
                  transition-all duration-300
                  hover:shadow-lg hover:-translate-y-0.5
                  active:scale-[0.98]
                  cursor-pointer
                `}
              >
                <span>Explore Service</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>

              <div className="hidden sm:flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs text-gray-400">Service</span>
                <span
                  className={`text-sm font-bold bg-gradient-to-r ${config.gradient} bg-clip-text text-transparent`}
                >
                  #{String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

/* ---------------- Section ---------------- */
export const OurServicesSection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(new Set());
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            if (e.target.getAttribute("data-header")) {
              setIsHeaderVisible(true);
            }
            const i = e.target.dataset.index;
            if (i !== undefined) {
              setVisible((prev) => new Set(prev).add(Number(i)));
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

  return (
    <section
      ref={sectionRef}
      className="relative px-4 sm:px-6 py-16 sm:py-20 md:py-28 lg:py-32 overflow-hidden bg-[#fafbfc]"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.1),transparent)]" />
        <div className="absolute top-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gradient-to-r from-violet-200/25 to-fuchsia-200/25 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gradient-to-r from-cyan-200/25 to-blue-200/25 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-gradient-to-r from-amber-200/20 to-orange-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div
        data-header="true"
        className="relative z-10 max-w-6xl mx-auto mb-12 sm:mb-16 md:mb-20 lg:mb-24"
        style={{
          opacity: isHeaderVisible ? 1 : 0,
          transform: isHeaderVisible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s cubic-bezier(0.23, 1, 0.32, 1)",
        }}
      >
        <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 mb-6 sm:mb-8 rounded-full bg-white/80 backdrop-blur-xl border border-gray-200/50 shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
          <span className="relative flex w-2 h-2 sm:w-2.5 sm:h-2.5">
            <span className="absolute inline-flex w-full h-full rounded-full bg-violet-400 animate-ping opacity-75"></span>
            <span className="relative inline-flex w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-gradient-to-r from-violet-500 to-blue-500"></span>
          </span>
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-gray-600">
            Our Services
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-4 sm:mb-6">
          <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Enterprise-grade
          </span>
          <br />
          <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Digital Capabilities
          </span>
        </h2>

        <p className="max-w-2xl text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed font-light">
          We design, engineer, and operate scalable digital platforms that power
          modern enterprises.
        </p>

        <div className="flex flex-wrap items-center gap-6 sm:gap-8 md:gap-12 mt-8 sm:mt-10">
          {[
            { value: "50+", label: "Projects" },
            { value: "99%", label: "Success Rate" },
            { value: "24/7", label: "Support" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center sm:text-left">
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

      <div className="relative z-10 max-w-7xl mx-auto space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
        {TECHNOLOGY_SERVICES.map((service, i) => (
          <ServiceCard
            key={service.id}
            service={service}
            index={i}
            visible={visible.has(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default OurServicesSection;
