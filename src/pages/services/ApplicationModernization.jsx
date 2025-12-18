// export default function ApplicationServicesPage() {
//   return (
//     <main className="w-full min-h-screen text-slate-900 bg-gradient-to-b from-white via-sky-50 to-sky-100">
//       {/* =====================================================
//           HERO SECTION
//       ===================================================== */}
//       <section className="relative w-full min-h-[80vh] overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           <img
//             src="/images/bannerApplicationPage.png"
//             className="w-full h-full object-cover"
//             alt="Application Services Banner"
//           />
//           <div className="absolute inset-0 bg-black/70" />
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto px-10 md:px-16 lg:px-28 flex flex-col justify-center min-h-[80vh] text-white">
//           <span className="text-xs tracking-widest text-cyan-300">
//             Application Services
//           </span>

//           <h1 className="mt-3 text-5xl font-semibold leading-tight">
//             BUILD{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-300">
//               MODERN APPLICATIONS
//             </span>{" "}
//             THAT SCALE WITH YOUR BUSINESS
//           </h1>

//           <p className="mt-4 max-w-2xl text-slate-200/90">
//             From legacy modernization to frontend, Node.js, APIs and DevOps, we
//             help you design, build and run high-performing digital experiences.
//           </p>
//         </div>
//       </section>

//       {/* =====================================================
//           SOLUTIONS
//       ===================================================== */}
//       <section className="w-full py-20 bg-transparent border-t border-slate-200">
//         <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28">
//           <h2 className="text-4xl font-light text-slate-900">
//             <span className="font-semibold">Solutions</span> we Offer
//           </h2>

//           <p className="mt-5 max-w-4xl text-lg text-slate-600">
//             Our application services team brings together frontend engineers,
//             Node.js developers, solution architects and DevOps specialists to
//             modernize, scale and operate your business-critical applications.
//           </p>

//           <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
//             {[
//               [
//                 "Application Modernization",
//                 "Transform legacy systems into modular, cloud-ready, API-first applications.",
//                 "#section-app-modernization",
//               ],
//               [
//                 "Microservices & API Engineering",
//                 "Design domain-aligned microservices and robust API platforms.",
//                 "#section-microservices-api",
//               ],
//               [
//                 "Frontend Engineering (React, Next.js)",
//                 "Build fast, accessible, component-driven experiences.",
//                 "#section-frontend-engineering",
//               ],
//               [
//                 "Node.js & Backend Engineering",
//                 "Create scalable backends and APIs using Node.js frameworks.",
//                 "#section-node-backend",
//               ],
//               [
//                 "DevOps for Application Platforms",
//                 "Implement CI/CD, observability and automation.",
//                 "#section-devops-platforms",
//               ],
//               [
//                 "Application Support & Reliability",
//                 "Improve uptime, performance and user experience.",
//                 "#section-app-support",
//               ],
//             ].map(([title, desc, link], i) => (
//               <div key={i}>
//                 <h3 className="text-xl font-semibold text-slate-900">
//                   {title}
//                 </h3>
//                 <p className="mt-3 text-slate-600">{desc}</p>
//                 <a
//                   href={link}
//                   className="mt-3 inline-block text-blue-600 hover:text-cyan-600"
//                 >
//                   Read More →
//                 </a>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           CONTENT SECTIONS
//       ===================================================== */}
//       {[
//         {
//           id: "section-app-modernization",
//           title: "Application Modernization",
//           bg: "bg-blue-50",
//           img: "/images/Appli1.png",
//           text: "Evolve legacy applications into cloud-ready, modular systems without disrupting your business.",
//         },
//         {
//           id: "section-microservices-api",
//           title: "Microservices & API Engineering",
//           bg: "bg-blue-100",
//           img: "/images/Appli2.png",
//           text: "Design domain-aligned services and stable APIs that power web, mobile and partner applications.",
//         },
//         {
//           id: "section-frontend-engineering",
//           title: "Frontend Engineering",
//           bg: "bg-blue-50",
//           img: "/images/Appli3.jpg",
//           text: "Build fast, accessible, component-driven user experiences using React and Next.js.",
//         },
//         {
//           id: "section-node-backend",
//           title: "Node.js & Backend Engineering",
//           bg: "bg-blue-100",
//           img: "/images/Appli4.png",
//           text: "Scalable, observable and secure backend systems designed for real-world traffic.",
//         },
//         {
//           id: "section-devops-platforms",
//           title: "DevOps for Application Platforms",
//           bg: "bg-blue-50",
//           img: null,
//           text: "Enable faster delivery with CI/CD pipelines, automation and release observability.",
//         },
//         {
//           id: "section-app-support",
//           title: "Application Support & Reliability",
//           bg: "bg-blue-100",
//           img: null,
//           text: "Run your applications with confidence using SRE practices and proactive monitoring.",
//         },
//       ].map(({ id, title, bg, img, text }, i) => (
//         <section key={id} id={id} className={`w-full py-24 ${bg}`}>
//           <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
//             {i % 2 === 0 ? (
//               <>
//                 <div>
//                   <h2 className="text-4xl font-semibold text-slate-900">
//                     {title}
//                   </h2>
//                   <p className="mt-4 text-lg text-slate-700">{text}</p>
//                 </div>
//                 {img && (
//                   <img
//                     src={img}
//                     alt={title}
//                     className="w-full rounded-xl shadow-xl"
//                   />
//                 )}
//               </>
//             ) : (
//               <>
//                 {img && (
//                   <img
//                     src={img}
//                     alt={title}
//                     className="w-full rounded-xl shadow-xl"
//                   />
//                 )}
//                 <div>
//                   <h2 className="text-4xl font-semibold text-slate-900">
//                     {title}
//                   </h2>
//                   <p className="mt-4 text-lg text-slate-700">{text}</p>
//                 </div>
//               </>
//             )}
//           </div>
//         </section>
//       ))}

//       {/* =====================================================
//     TALK WITH US — NEHA
// ===================================================== */}
//       <section className="w-full flex justify-center items-center py-20 px-20">
//         <div
//           className="
//       w-full max-w-5xl
//       rounded-3xl
//       bg-slate-900/70
//       backdrop-blur-2xl
//       border border-white/10
//       shadow-[0_0_60px_rgba(34,211,238,0.20)]
//       p-6 sm:p-10 md:p-14
//     "
//         >
//           <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center md:items-start">
//             {/* LEFT TEXT BLOCK */}
//             <div>
//               <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-300 via-sky-300 to-purple-300 bg-clip-text text-transparent">
//                 Talk with us
//               </h2>

//               <p className="mt-4 text-base text-slate-300/90 leading-relaxed max-w-md">
//                 Interested in quality engineering services? Reach out and we'll
//                 connect you with the right specialist who fits your project
//                 needs.
//               </p>

//               <div className="mt-6 h-[3px] w-24 sm:w-28 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-70" />
//             </div>

//             {/* RIGHT CONTACT CARD */}
//             <div
//               className="
//           rounded-3xl
//           bg-slate-950/80
//           border border-white/10
//           shadow-[0_0_40px_rgba(0,0,0,0.55)]
//           p-6 sm:p-8
//           flex gap-4 sm:gap-5
//           items-start
//           hover:shadow-[0_0_60px_rgba(34,211,238,0.35)]
//           transition-all
//         "
//             >
//               {/* PROFILE IMAGE */}
//               <img
//                 src="/images/priya.png"
//                 alt="Priya"
//                 className="
//             h-16 w-16 sm:h-20 sm:w-20
//             rounded-full
//             object-cover
//             border border-purple-500/40
//             shadow-[0_0_20px_rgba(168,85,247,0.35)]
//           "
//               />

//               {/* DETAILS */}
//               <div>
//                 <h3 className="text-lg sm:text-xl font-semibold text-white">
//                   Priya
//                 </h3>
//                 <p className="text-sm text-slate-400">Head of QA Solutions</p>

//                 <p className="mt-3 sm:mt-4 text-sm text-slate-300">
//                   Email:{" "}
//                   <a
//                     href="mailto:qa@cjss.example"
//                     className="text-cyan-400 hover:underline"
//                   >
//                     qa@cjss.example
//                   </a>
//                 </p>

//                 <p className="text-xs text-slate-500 mt-1">
//                   We typically respond within 1 business day.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
import React from "react";

export default function ApplicationServicesPage() {
  return (
    <main className="w-full min-h-screen text-slate-900 bg-gradient-to-b from-white via-sky-50 to-sky-100">
      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/bannerApplicationPage.png"
            className="w-full h-full object-cover object-center"
            alt="Application Services Banner"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 flex flex-col justify-center min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] text-white">
          <span className="text-xs sm:text-sm tracking-widest text-cyan-300 uppercase font-medium">
            Application Services & Modernization
          </span>

          <h1 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-up">
            Build{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">
              Modern Applications
            </span>
            <br className="hidden sm:block" />
            That Scale With Your Business
          </h1>

          <p className="mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base md:text-lg text-slate-200/90 leading-relaxed animate-fade-up [animation-delay:0.12s]">
            From legacy modernization to frontend engineering, Node.js backends,
            robust APIs, and DevOps automation — we help you design, build, and
            operate high-performing digital experiences.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4 animate-fade-up [animation-delay:0.2s]">
            <a
              href="#solutions"
              className="px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-cyan-500 to-sky-500 text-white text-sm sm:text-base font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
            >
              Explore Solutions
            </a>
            <a
              href="#contact"
              className="px-5 sm:px-6 py-2.5 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white text-sm sm:text-base font-semibold rounded-xl hover:bg-white/20 transition-all"
            >
              Talk to Expert
            </a>
          </div>

          {/* Stats */}
          <div className="mt-8 sm:mt-12 flex flex-wrap gap-6 sm:gap-8 md:gap-12 animate-fade-up [animation-delay:0.3s]">
            {[
              { value: "200+", label: "Apps Modernized" },
              { value: "99.9%", label: "Uptime SLA" },
              { value: "60%", label: "Faster Delivery" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-cyan-200/80 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SOLUTIONS
      ===================================================== */}
      <section
        id="solutions"
        className="w-full py-12 sm:py-16 md:py-20 bg-transparent border-t border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
          <div className="text-center sm:text-left">
            <span className="inline-block px-3 py-1 text-xs sm:text-sm font-medium text-cyan-600 bg-cyan-100 rounded-full mb-4">
              Our Application Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 animate-fade-up">
              Solutions <span className="font-light">We Offer</span>
            </h2>

            <p className="mt-4 sm:mt-5 max-w-3xl text-sm sm:text-base md:text-lg text-slate-600 animate-fade-up [animation-delay:0.1s]">
              Our application services team brings together frontend engineers,
              Node.js developers, solution architects, and DevOps specialists to
              modernize, scale, and operate your business-critical applications.
            </p>
          </div>

          <div className="mt-10 sm:mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                num: "01",
                title: "Application Modernization",
                desc: "Transform legacy monolithic systems into modular, cloud-ready, API-first applications using proven migration strategies like strangler fig pattern and incremental refactoring.",
                link: "#section-app-modernization",
                icon: "🔄",
                gradient: "from-violet-500 to-purple-600",
              },
              {
                num: "02",
                title: "Microservices & API Engineering",
                desc: "Design domain-aligned microservices architecture and robust API platforms with proper versioning, documentation, rate limiting, and security best practices.",
                link: "#section-microservices-api",
                icon: "🔌",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                num: "03",
                title: "Frontend Engineering",
                desc: "Build fast, accessible, component-driven user experiences using React, Next.js, and modern frontend tooling with a focus on performance and user experience.",
                link: "#section-frontend-engineering",
                icon: "🎨",
                gradient: "from-emerald-500 to-teal-500",
              },
              {
                num: "04",
                title: "Node.js & Backend Engineering",
                desc: "Create scalable, event-driven backends and APIs using Node.js, Express, NestJS, and GraphQL with proper error handling, logging, and monitoring.",
                link: "#section-node-backend",
                icon: "⚙️",
                gradient: "from-amber-500 to-orange-500",
              },
              {
                num: "05",
                title: "DevOps for Application Platforms",
                desc: "Implement CI/CD pipelines, infrastructure as code, containerization with Docker/Kubernetes, and comprehensive observability for faster, safer deployments.",
                link: "#section-devops-platforms",
                icon: "🚀",
                gradient: "from-rose-500 to-pink-500",
              },
              {
                num: "06",
                title: "Application Support & Reliability",
                desc: "Improve uptime, performance, and user experience with SRE practices, proactive monitoring, incident management, and continuous optimization.",
                link: "#section-app-support",
                icon: "🛡️",
                gradient: "from-indigo-500 to-blue-500",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border-2 border-gray-100 shadow-sm hover:shadow-xl hover:border-cyan-200 transition-all duration-300 hover:-translate-y-1 animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Icon & Number */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-xl sm:text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {item.icon}
                  </div>
                  <span
                    className={`text-sm sm:text-base font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}
                  >
                    {item.num}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
                  {item.desc}
                </p>

                {/* Link */}
                <a
                  href={item.link}
                  className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent hover:gap-3 transition-all`}
                >
                  Learn More
                  <svg
                    className="w-4 h-4"
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
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          DETAILED CONTENT SECTIONS
      ===================================================== */}
      {[
        {
          id: "section-app-modernization",
          title: "Application Modernization",
          subtitle: "Transform Legacy to Cloud-Native",
          bg: "bg-white",
          img: "/images/Appli1.png",
          text: "Evolve legacy applications into cloud-ready, modular systems without disrupting your business. We use proven migration strategies to minimize risk while maximizing business value.",
          features: [
            "Legacy System Assessment & Roadmap",
            "Strangler Fig Pattern Migration",
            "Monolith to Microservices Transformation",
            "Database Modernization & Migration",
            "API-First Architecture Design",
            "Containerization with Docker & Kubernetes",
          ],
        },
        {
          id: "section-microservices-api",
          title: "Microservices & API Engineering",
          subtitle: "Scalable Service Architecture",
          bg: "bg-slate-50",
          img: "/images/Appli2.png",
          text: "Design domain-aligned microservices and stable APIs that power web, mobile, and partner applications with proper governance and security.",
          features: [
            "Domain-Driven Design (DDD)",
            "Event-Driven Architecture",
            "API Gateway & Management",
            "Service Mesh Implementation",
            "API Versioning & Documentation",
            "Rate Limiting & Security",
          ],
        },
        {
          id: "section-frontend-engineering",
          title: "Frontend Engineering",
          subtitle: "Modern User Experiences",
          bg: "bg-white",
          img: "/images/Appli3.jpg",
          text: "Build fast, accessible, component-driven user experiences using React, Next.js, and modern frontend tooling with a focus on performance and accessibility.",
          features: [
            "React & Next.js Development",
            "Component Library & Design Systems",
            "Performance Optimization",
            "Progressive Web Apps (PWA)",
            "Accessibility (WCAG) Compliance",
            "State Management & Testing",
          ],
        },
        {
          id: "section-node-backend",
          title: "Node.js & Backend Engineering",
          subtitle: "Scalable Server Solutions",
          bg: "bg-slate-50",
          img: "/images/Appli4.png",
          text: "Create scalable, observable, and secure backend systems designed for real-world traffic using Node.js, Express, NestJS, and modern backend patterns.",
          features: [
            "Express.js & NestJS Development",
            "GraphQL & REST API Design",
            "Real-time with WebSockets",
            "Message Queues & Event Streaming",
            "Database Design & Optimization",
            "Caching Strategies (Redis)",
          ],
        },
        {
          id: "section-devops-platforms",
          title: "DevOps for Application Platforms",
          subtitle: "Automated Delivery Pipelines",
          bg: "bg-white",
          img: "/images/devops-platform.jpg",
          text: "Enable faster delivery with CI/CD pipelines, infrastructure as code, and release observability. We implement GitOps practices for reliable, repeatable deployments.",
          features: [
            "CI/CD Pipeline Design (GitHub Actions, GitLab)",
            "Infrastructure as Code (Terraform, Pulumi)",
            "Container Orchestration (Kubernetes)",
            "GitOps & ArgoCD Implementation",
            "Environment Management",
            "Release Automation & Rollbacks",
          ],
        },
        {
          id: "section-app-support",
          title: "Application Support & Reliability",
          subtitle: "24/7 Operational Excellence",
          bg: "bg-slate-50",
          img: "/images/app-support.jpg",
          text: "Run your applications with confidence using SRE practices, proactive monitoring, incident management, and continuous optimization for peak performance.",
          features: [
            "24/7 Application Monitoring",
            "Incident Management & Response",
            "Performance Optimization",
            "SLA Management & Reporting",
            "Proactive Issue Detection",
            "Capacity Planning & Scaling",
          ],
        },
      ].map(({ id, title, subtitle, bg, img, text, features }, i) => (
        <section
          key={id}
          id={id}
          className={`w-full py-12 sm:py-16 md:py-20 lg:py-24 ${bg}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center ${
                i % 2 !== 0 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Text Content */}
              <div
                className={`${
                  i % 2 !== 0 ? "lg:col-start-2" : ""
                } animate-fade-up`}
              >
                <span className="inline-block px-3 py-1 text-xs sm:text-sm font-medium text-cyan-600 bg-cyan-100 rounded-full mb-4">
                  {subtitle}
                </span>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  {title}
                </h2>

                <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed mb-6">
                  {text}
                </p>

                {/* Features List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div
                className={`${
                  i % 2 !== 0 ? "lg:col-start-1 lg:row-start-1" : ""
                } animate-fade-up [animation-delay:0.2s]`}
              >
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* =====================================================
          TECHNOLOGY STACK - EXPANDED
      ===================================================== */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <span className="inline-block px-3 py-1 text-xs sm:text-sm font-medium text-cyan-600 bg-cyan-100 rounded-full mb-4">
              Our Tech Stack
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Application{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-sky-500">
                Technology Stack
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-600">
              We use industry-leading technologies to build robust, scalable
              applications
            </p>
          </div>

          {/* Frontend Technologies */}
          <div className="mb-10 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-4 sm:mb-6 text-center">
              Frontend & UI
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
              {[
                {
                  name: "React",
                  icon: "⚛️",
                  color: "from-cyan-500 to-blue-500",
                },
                {
                  name: "Next.js",
                  icon: "▲",
                  color: "from-gray-700 to-gray-900",
                },
                {
                  name: "Vue.js",
                  icon: "💚",
                  color: "from-green-500 to-emerald-500",
                },
                {
                  name: "Angular",
                  icon: "🅰️",
                  color: "from-red-500 to-red-600",
                },
                {
                  name: "TypeScript",
                  icon: "📘",
                  color: "from-blue-500 to-indigo-500",
                },
                {
                  name: "Tailwind CSS",
                  icon: "🎨",
                  color: "from-cyan-500 to-teal-500",
                },
              ].map((tech, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col items-center justify-center p-4 sm:p-5 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-100 hover:border-cyan-200 hover:shadow-lg transition-all"
                >
                  <span className="text-2xl sm:text-3xl mb-2 group-hover:scale-110 transition-transform">
                    {tech.icon}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-slate-700 text-center">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Technologies */}
          <div className="mb-10 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-4 sm:mb-6 text-center">
              Backend & APIs
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
              {[
                {
                  name: "Node.js",
                  icon: "💚",
                  color: "from-green-500 to-emerald-500",
                },
                {
                  name: "Express.js",
                  icon: "🚂",
                  color: "from-gray-700 to-gray-900",
                },
                {
                  name: "NestJS",
                  icon: "🐱",
                  color: "from-red-500 to-pink-500",
                },
                {
                  name: "GraphQL",
                  icon: "◈",
                  color: "from-pink-500 to-rose-500",
                },
                {
                  name: "REST APIs",
                  icon: "🔌",
                  color: "from-blue-500 to-indigo-500",
                },
                {
                  name: "Python/FastAPI",
                  icon: "🐍",
                  color: "from-yellow-500 to-green-500",
                },
              ].map((tech, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col items-center justify-center p-4 sm:p-5 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-100 hover:border-cyan-200 hover:shadow-lg transition-all"
                >
                  <span className="text-2xl sm:text-3xl mb-2 group-hover:scale-110 transition-transform">
                    {tech.icon}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-slate-700 text-center">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Databases */}
          <div className="mb-10 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-4 sm:mb-6 text-center">
              Databases & Storage
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
              {[
                {
                  name: "PostgreSQL",
                  icon: "🐘",
                  color: "from-blue-500 to-indigo-500",
                },
                {
                  name: "MongoDB",
                  icon: "🍃",
                  color: "from-green-500 to-emerald-500",
                },
                {
                  name: "Redis",
                  icon: "🔴",
                  color: "from-red-500 to-red-600",
                },
                {
                  name: "MySQL",
                  icon: "🐬",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  name: "Elasticsearch",
                  icon: "🔍",
                  color: "from-yellow-500 to-orange-500",
                },
                {
                  name: "DynamoDB",
                  icon: "⚡",
                  color: "from-orange-500 to-yellow-500",
                },
              ].map((tech, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col items-center justify-center p-4 sm:p-5 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-100 hover:border-cyan-200 hover:shadow-lg transition-all"
                >
                  <span className="text-2xl sm:text-3xl mb-2 group-hover:scale-110 transition-transform">
                    {tech.icon}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-slate-700 text-center">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Cloud & DevOps */}
          <div className="mb-10 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-4 sm:mb-6 text-center">
              Cloud & DevOps
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
              {[
                {
                  name: "AWS",
                  icon: "☁️",
                  color: "from-orange-500 to-yellow-500",
                },
                {
                  name: "Azure",
                  icon: "🔷",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  name: "Docker",
                  icon: "🐳",
                  color: "from-blue-400 to-cyan-500",
                },
                {
                  name: "Kubernetes",
                  icon: "⚓",
                  color: "from-blue-500 to-indigo-500",
                },
                {
                  name: "GitHub Actions",
                  icon: "🐙",
                  color: "from-gray-700 to-gray-900",
                },
                {
                  name: "Terraform",
                  icon: "🏗️",
                  color: "from-purple-500 to-violet-500",
                },
              ].map((tech, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col items-center justify-center p-4 sm:p-5 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-100 hover:border-cyan-200 hover:shadow-lg transition-all"
                >
                  <span className="text-2xl sm:text-3xl mb-2 group-hover:scale-110 transition-transform">
                    {tech.icon}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-slate-700 text-center">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Messaging & Streaming */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-4 sm:mb-6 text-center">
              Messaging & Monitoring
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
              {[
                {
                  name: "Apache Kafka",
                  icon: "📨",
                  color: "from-gray-700 to-gray-900",
                },
                {
                  name: "RabbitMQ",
                  icon: "🐰",
                  color: "from-orange-500 to-red-500",
                },
                {
                  name: "Prometheus",
                  icon: "🔥",
                  color: "from-orange-500 to-red-500",
                },
                {
                  name: "Grafana",
                  icon: "📊",
                  color: "from-orange-500 to-yellow-500",
                },
                {
                  name: "Datadog",
                  icon: "🐕",
                  color: "from-purple-500 to-violet-500",
                },
                {
                  name: "Sentry",
                  icon: "🔍",
                  color: "from-purple-500 to-pink-500",
                },
              ].map((tech, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col items-center justify-center p-4 sm:p-5 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-100 hover:border-cyan-200 hover:shadow-lg transition-all"
                >
                  <span className="text-2xl sm:text-3xl mb-2 group-hover:scale-110 transition-transform">
                    {tech.icon}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-slate-700 text-center">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY CHOOSE US
      ===================================================== */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">
                CJSS for Applications
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300">
              We combine deep technical expertise with agile delivery to build
              applications that drive business value
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: "👨‍💻",
                title: "Expert Engineers",
                desc: "Full-stack developers with 8+ years average experience in enterprise applications",
              },
              {
                icon: "⚡",
                title: "Agile Delivery",
                desc: "2-week sprint cycles with continuous integration and deployment",
              },
              {
                icon: "🔒",
                title: "Security First",
                desc: "OWASP standards, security audits, and compliance built into every project",
              },
              {
                icon: "📈",
                title: "Scalable Solutions",
                desc: "Applications designed to handle 10x growth without architectural changes",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-6 text-center hover:bg-white/10 transition-all"
              >
                <div className="text-3xl sm:text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          INDUSTRIES WE SERVE
      ===================================================== */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Industries{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-sky-500">
                We Serve
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-600">
              We build applications across diverse industries with domain
              expertise
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
            {[
              { name: "E-Commerce", icon: "🛒" },
              { name: "FinTech", icon: "💳" },
              { name: "Healthcare", icon: "🏥" },
              { name: "Education", icon: "📚" },
              { name: "Logistics", icon: "🚚" },
              { name: "SaaS", icon: "☁️" },
              { name: "Media", icon: "📺" },
              { name: "Travel", icon: "✈️" },
              { name: "Real Estate", icon: "🏠" },
              { name: "Manufacturing", icon: "🏭" },
              { name: "Retail", icon: "🏪" },
              { name: "Energy", icon: "⚡" },
            ].map((industry, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-4 sm:p-5 text-center shadow-sm border border-slate-100 hover:shadow-md hover:border-cyan-200 transition-all"
              >
                <div className="text-2xl sm:text-3xl mb-2">{industry.icon}</div>
                <span className="text-xs sm:text-sm font-medium text-slate-700">
                  {industry.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          TALK WITH US - MOBILE OPTIMIZED
      ===================================================== */}
      <section
        id="contact"
        className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-20"
      >
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 backdrop-blur-2xl border border-white/10 shadow-2xl p-5 sm:p-8 md:p-10 lg:p-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
              {/* LEFT TEXT BLOCK */}
              <div className="text-center md:text-left">
                <span className="inline-block px-3 py-1 text-xs sm:text-sm font-medium text-cyan-400 bg-cyan-500/10 rounded-full mb-4">
                  Get in Touch
                </span>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  Let's Build Your{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">
                    Modern Application
                  </span>
                </h2>

                <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed max-w-md mx-auto md:mx-0">
                  Ready to modernize your applications? Our experts will help
                  you design and build solutions that scale with your business
                  needs.
                </p>

                <div className="mt-6 h-1 w-20 sm:w-24 bg-gradient-to-r from-cyan-400 to-sky-400 rounded-full mx-auto md:mx-0" />

                {/* Quick Contact Info */}
                <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start text-sm">
                  <div className="flex items-center gap-2 text-slate-400 justify-center md:justify-start">
                    <span>📧</span>
                    <span>apps@cjss.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 justify-center md:justify-start">
                    <span>📞</span>
                    <span>+91 98765 43210</span>
                  </div>
                </div>
              </div>

              {/* RIGHT CONTACT CARD */}
              <div className="rounded-2xl sm:rounded-3xl bg-slate-950/60 border border-white/10 shadow-xl p-4 sm:p-6 md:p-8">
                {/* Profile Section */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5">
                  {/* PROFILE IMAGE */}
                  <div className="relative flex-shrink-0">
                    <img
                      src="/images/rahul.png"
                      alt="Rahul - Head of Application Services"
                      className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover border-2 border-cyan-500/50 shadow-lg"
                    />
                    <span className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-500 border-2 border-slate-950 rounded-full"></span>
                  </div>

                  {/* DETAILS */}
                  <div className="text-center sm:text-left flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-white">
                      Rahul Kumar
                    </h3>
                    <p className="text-sm text-cyan-400 font-medium">
                      Head of Application Services
                    </p>

                    <p className="mt-3 text-sm text-slate-300">
                      <span className="text-slate-500">Email: </span>
                      <a
                        href="mailto:rahul@cjss.com"
                        className="text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        rahul@cjss.com
                      </a>
                    </p>

                    <p className="text-xs text-slate-500 mt-2">
                      ⚡ Usually responds within 24 hours
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/10 my-5 sm:my-6" />

                {/* CTA Button */}
                <a
                  href="mailto:rahul@cjss.com?subject=Application%20Services%20Inquiry"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-cyan-500 to-sky-500 text-white text-sm sm:text-base font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Schedule a Consultation
                </a>

                {/* Alternative Contact */}
                <p className="text-center text-xs text-slate-500 mt-4">
                  Or call us directly at{" "}
                  <a
                    href="tel:+919876543210"
                    className="text-cyan-400 hover:text-cyan-300"
                  >
                    +91 98765 43210
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ANIMATIONS
      ===================================================== */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fadeUp 0.7s ease-out both;
        }
      `}</style>
    </main>
  );
}
