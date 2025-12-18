// export default function CloudTechnologiesPage() {
//   return (
//     <main className="w-full min-h-screen text-slate-900 bg-gradient-to-b from-white via-sky-50 to-sky-100">
//       {/* =====================================================
//           HERO SECTION
//       ===================================================== */}
//       <section className="relative w-full min-h-[80vh] overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           <img
//             src="/images/cloudtechBanner.jpeg"
//             className="w-full h-full object-cover"
//             alt="Cloud Technologies Banner"
//           />
//           <div className="absolute inset-0 bg-black/70" />
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto px-10 md:px-16 lg:px-28 flex flex-col justify-center min-h-[80vh] text-white">
//           <span className="text-xs tracking-widest text-cyan-300">
//             Cloud Technologies
//           </span>

//           <h1 className="mt-3 text-5xl font-semibold leading-tight">
//             ENTERPRISE{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-300">
//               CLOUD TRANSFORMATION
//             </span>{" "}
//             AT SCALE
//           </h1>

//           <p className="mt-4 max-w-2xl text-slate-200/90">
//             Modernize your architecture with cloud-native engineering, automated
//             platforms, and scalable infrastructure designed for global
//             performance.
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
//             We provide a comprehensive suite of cloud engineering services to
//             modernize platforms, scale applications, optimize costs, and
//             engineer world-class reliability.
//           </p>

//           <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
//             {[
//               [
//                 "Cloud Transformation",
//                 "Modernize legacy systems and migrate to scalable cloud-native architectures.",
//                 "#section-cloud-transformation",
//               ],
//               [
//                 "Cloud Automation",
//                 "Use DevOps, CI/CD, IaC, and observability to automate delivery.",
//                 "#section-cloud-automation",
//               ],
//               [
//                 "Cloud Security",
//                 "Strengthen your cloud ecosystem with zero-trust and automated compliance.",
//                 "#section-cloud-security",
//               ],
//               [
//                 "Cloud Cost Optimization",
//                 "Improve cloud efficiency with engineering-led FinOps.",
//                 "#section-cloud-finops",
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
//           id: "section-cloud-transformation",
//           title: "Cloud Transformation",
//           bg: "bg-blue-50",
//           img1: "/images/cloudtech1.png",
//           img2: "/images/cloudtech2.png",
//           text1:
//             "Modernize applications, migrate workloads, and engineer cloud-native systems with high availability and global scalability.",
//           text2:
//             "Zero-downtime migrations, microservice decomposition, and serverless adoption deliver future-ready systems.",
//         },
//         {
//           id: "section-cloud-automation",
//           title: "Cloud Automation",
//           bg: "bg-blue-100",
//           img1: "/images/cloudtech3.png",
//           img2: "/images/cloudtech4.png",
//           text1:
//             "Accelerate delivery using automated pipelines, IaC blueprints, and observability frameworks.",
//           text2:
//             "Provision consistent environments with blueprint-driven IaC and end-to-end monitoring.",
//         },
//         {
//           id: "section-cloud-security",
//           title: "Cloud Security",
//           bg: "bg-blue-50",
//           img1: "/images/cloudtech5.png",
//           img2: null,
//           text1:
//             "Strengthen your cloud posture with automated compliance and zero-trust frameworks.",
//           text2: null,
//         },
//         {
//           id: "section-cloud-finops",
//           title: "Cloud Cost Optimization",
//           bg: "bg-blue-100",
//           img1: "/images/cloudtech6.png",
//           img2: null,
//           text1:
//             "Optimize cloud spend with intelligent scaling, right-sizing, and FinOps governance.",
//           text2: null,
//         },
//       ].map(({ id, title, bg, img1, img2, text1, text2 }, i) => (
//         <section key={id} id={id} className={`w-full py-24 ${bg}`}>
//           <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28 space-y-20">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
//               <div>
//                 <h2 className="text-4xl font-semibold text-slate-900">
//                   {title}
//                 </h2>
//                 <p className="mt-4 text-lg text-slate-700">{text1}</p>
//               </div>
//               {img1 && (
//                 <img
//                   src={img1}
//                   alt={title}
//                   className="w-full rounded-xl shadow-xl"
//                 />
//               )}
//             </div>

//             {img2 && (
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
//                 <img
//                   src={img2}
//                   alt={title}
//                   className="w-full rounded-xl shadow-xl"
//                 />
//                 <p className="text-lg text-slate-700">{text2}</p>
//               </div>
//             )}
//           </div>
//         </section>
//       ))}

//       {/* =====================================================
//           TALK WITH US — EXACT (UNCHANGED)
//       ===================================================== */}
//       <section className="w-full flex justify-center items-center py-20 px-20">
//         <div className="w-full max-w-5xl rounded-3xl bg-slate-900/70 backdrop-blur-2xl border border-white/10 shadow-[0_0_60px_rgba(34,211,238,0.20)] p-6 sm:p-10 md:p-14">
//           <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center md:items-start">
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

//             <div className="rounded-3xl bg-slate-950/80 border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.55)] p-6 sm:p-8 flex gap-4 sm:gap-5 items-start hover:shadow-[0_0_60px_rgba(34,211,238,0.35)] transition-all">
//               <img
//                 src="/images/priya.png"
//                 alt="Priya"
//                 className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover border border-purple-500/40 shadow-[0_0_20px_rgba(168,85,247,0.35)]"
//               />

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

const CloudTechnologiesPage = () => {
  return (
    <main className="w-full min-h-screen text-slate-900 bg-gradient-to-b from-white via-sky-50 to-sky-100">
      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/cloudtechBanner.jpeg"
            className="w-full h-full object-cover object-center"
            alt="Cloud Technologies Banner"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 flex flex-col justify-center min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] text-white">
          <span className="text-xs sm:text-sm tracking-widest text-cyan-300 uppercase font-medium">
            Cloud & Infrastructure Services
          </span>

          <h1 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-up">
            Enterprise Cloud <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">
              Transformation at Scale
            </span>
          </h1>

          <p className="mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base md:text-lg text-slate-200/90 leading-relaxed animate-fade-up [animation-delay:0.12s]">
            Modernize your architecture with cloud-native engineering, automated
            platforms, and scalable infrastructure designed for global
            performance, security, and operational excellence.
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
              { value: "200+", label: "Cloud Migrations" },
              { value: "99.99%", label: "Uptime SLA" },
              { value: "45%", label: "Cost Savings" },
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
              Our Cloud Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 animate-fade-up">
              Solutions <span className="font-light">We Offer</span>
            </h2>

            <p className="mt-4 sm:mt-5 max-w-3xl text-sm sm:text-base md:text-lg text-slate-600 animate-fade-up [animation-delay:0.1s]">
              From cloud strategy to DevOps automation, security hardening, and
              cost optimization — we help enterprises build, migrate, and manage
              cloud infrastructure that scales with their business.
            </p>
          </div>

          <div className="mt-10 sm:mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                num: "01",
                title: "Cloud Strategy & Consulting",
                desc: "Define your cloud roadmap with expert guidance. We assess your current infrastructure, identify migration opportunities, and create a comprehensive strategy aligned with your business goals.",
                link: "#section-cloud-strategy",
                icon: "🎯",
                gradient: "from-cyan-500 to-sky-600",
              },
              {
                num: "02",
                title: "Cloud Migration & Modernization",
                desc: "Seamlessly migrate workloads to the cloud with zero-downtime strategies. Modernize legacy applications into cloud-native architectures using containers, microservices, and serverless.",
                link: "#section-cloud-migration",
                icon: "🚀",
                gradient: "from-blue-500 to-indigo-500",
              },
              {
                num: "03",
                title: "DevOps & Cloud Automation",
                desc: "Accelerate delivery with CI/CD pipelines, Infrastructure as Code, GitOps workflows, and automated provisioning. Build self-service platforms that empower development teams.",
                link: "#section-devops",
                icon: "⚙️",
                gradient: "from-violet-500 to-purple-500",
              },
              {
                num: "04",
                title: "Cloud Security & Compliance",
                desc: "Protect your cloud environment with zero-trust architecture, automated compliance, identity management, and continuous security monitoring across all cloud platforms.",
                link: "#section-cloud-security",
                icon: "🔒",
                gradient: "from-emerald-500 to-teal-500",
              },
              {
                num: "05",
                title: "Cloud Cost Optimization",
                desc: "Maximize cloud ROI with FinOps practices, right-sizing recommendations, reserved instance management, and intelligent scaling strategies that reduce waste.",
                link: "#section-finops",
                icon: "💰",
                gradient: "from-amber-500 to-orange-500",
              },
              {
                num: "06",
                title: "Platform Engineering & SRE",
                desc: "Build internal developer platforms, implement SRE practices, establish SLOs/SLIs, and create self-healing infrastructure for maximum reliability and developer productivity.",
                link: "#section-platform-engineering",
                icon: "🏗️",
                gradient: "from-rose-500 to-pink-500",
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
          DETAILED SECTIONS
      ===================================================== */}
      {[
        {
          id: "section-cloud-strategy",
          title: "Cloud Strategy & Consulting",
          bg: "bg-white",
          img: "/images/cloudtech1.png",
          subtitle: "Strategic Cloud Roadmap",
          text: "We help organizations define their cloud vision, assess readiness, and create actionable strategies that align technology investments with business objectives.",
          features: [
            "Cloud Readiness Assessment & Gap Analysis",
            "Multi-Cloud & Hybrid Cloud Strategy",
            "Total Cost of Ownership (TCO) Analysis",
            "Cloud Governance Framework Design",
            "Vendor Selection & Negotiation Support",
            "Migration Roadmap & Prioritization",
          ],
        },
        {
          id: "section-cloud-migration",
          title: "Cloud Migration & Modernization",
          bg: "bg-slate-50",
          img: "/images/cloudtech2.png",
          subtitle: "Zero-Downtime Transformation",
          text: "Migrate workloads seamlessly and modernize legacy applications into cloud-native architectures that scale globally with enterprise-grade reliability.",
          features: [
            "Lift & Shift, Re-platform, Re-architect",
            "Container Migration (Docker, Kubernetes)",
            "Database Migration & Modernization",
            "Microservices Decomposition",
            "Serverless Architecture Adoption",
            "Legacy Application Modernization",
          ],
        },
        {
          id: "section-devops",
          title: "DevOps & Cloud Automation",
          bg: "bg-white",
          img: "/images/cloudtech3.png",
          subtitle: "Accelerate Delivery",
          text: "Implement end-to-end automation with CI/CD pipelines, Infrastructure as Code, and GitOps practices that enable rapid, reliable software delivery.",
          features: [
            "CI/CD Pipeline Design & Implementation",
            "Infrastructure as Code (Terraform, Pulumi)",
            "GitOps Workflows (ArgoCD, Flux)",
            "Container Orchestration (Kubernetes, EKS, AKS)",
            "Configuration Management (Ansible, Chef)",
            "Automated Testing & Quality Gates",
          ],
        },
        {
          id: "section-cloud-security",
          title: "Cloud Security & Compliance",
          bg: "bg-slate-50",
          img: "/images/cloudtech4.png",
          subtitle: "Zero-Trust Security",
          text: "Protect your cloud environment with comprehensive security strategies, automated compliance, and continuous monitoring across all platforms.",
          features: [
            "Zero-Trust Architecture Implementation",
            "Cloud Security Posture Management (CSPM)",
            "Identity & Access Management (IAM)",
            "Secrets Management & Encryption",
            "Compliance Automation (SOC2, HIPAA, PCI)",
            "Security Monitoring & Incident Response",
          ],
        },
        {
          id: "section-finops",
          title: "Cloud Cost Optimization",
          bg: "bg-white",
          img: "/images/cloudtech5.png",
          subtitle: "Maximize Cloud ROI",
          text: "Optimize cloud spending with engineering-led FinOps practices, intelligent resource management, and governance frameworks that eliminate waste.",
          features: [
            "Cloud Cost Analysis & Visibility",
            "Right-Sizing & Resource Optimization",
            "Reserved Instance & Savings Plans",
            "Spot Instance Strategies",
            "Cost Allocation & Chargeback Models",
            "FinOps Culture & Governance",
          ],
        },
        {
          id: "section-platform-engineering",
          title: "Platform Engineering & SRE",
          bg: "bg-slate-50",
          img: "/images/cloudtech6.png",
          subtitle: "Reliability at Scale",
          text: "Build internal developer platforms and implement Site Reliability Engineering practices that maximize uptime, developer productivity, and operational excellence.",
          features: [
            "Internal Developer Platform (IDP) Design",
            "SRE Practices & Toil Reduction",
            "SLO/SLI/SLA Framework Implementation",
            "Observability Stack (Metrics, Logs, Traces)",
            "Incident Management & On-Call",
            "Chaos Engineering & Resilience Testing",
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
          CLOUD TECHNOLOGY STACK
      ===================================================== */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <span className="inline-block px-3 py-1 text-xs sm:text-sm font-medium text-cyan-600 bg-cyan-100 rounded-full mb-4">
              Our Tech Stack
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Cloud{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-sky-500">
                Technology Stack
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-600">
              We leverage industry-leading cloud platforms, DevOps tools, and
              infrastructure technologies to build scalable solutions
            </p>
          </div>

          {/* Cloud Platforms */}
          <div className="mb-10 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-4 sm:mb-6 text-center">
              Cloud Platforms
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
              {[
                {
                  name: "AWS",
                  icon: "☁️",
                  color: "from-orange-500 to-orange-600",
                },
                {
                  name: "Microsoft Azure",
                  icon: "🔷",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  name: "Google Cloud",
                  icon: "🌐",
                  color: "from-red-500 to-yellow-500",
                },
                {
                  name: "Oracle Cloud",
                  icon: "🔴",
                  color: "from-red-500 to-red-600",
                },
                {
                  name: "IBM Cloud",
                  icon: "💠",
                  color: "from-blue-500 to-indigo-500",
                },
                {
                  name: "DigitalOcean",
                  icon: "🌊",
                  color: "from-blue-400 to-blue-500",
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

          {/* Container & Orchestration */}
          <div className="mb-10 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-4 sm:mb-6 text-center">
              Containers & Orchestration
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
              {[
                {
                  name: "Kubernetes",
                  icon: "⚓",
                  color: "from-blue-500 to-indigo-500",
                },
                {
                  name: "Docker",
                  icon: "🐳",
                  color: "from-blue-400 to-cyan-500",
                },
                {
                  name: "Amazon EKS",
                  icon: "🔶",
                  color: "from-orange-500 to-yellow-500",
                },
                {
                  name: "Azure AKS",
                  icon: "🔷",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  name: "Google GKE",
                  icon: "🔺",
                  color: "from-red-500 to-yellow-500",
                },
                {
                  name: "OpenShift",
                  icon: "🎯",
                  color: "from-red-500 to-red-600",
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

          {/* Infrastructure as Code */}
          <div className="mb-10 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-4 sm:mb-6 text-center">
              Infrastructure as Code
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
              {[
                {
                  name: "Terraform",
                  icon: "🏗️",
                  color: "from-purple-500 to-violet-500",
                },
                {
                  name: "Pulumi",
                  icon: "🔧",
                  color: "from-violet-500 to-purple-500",
                },
                {
                  name: "CloudFormation",
                  icon: "📋",
                  color: "from-orange-500 to-yellow-500",
                },
                {
                  name: "Ansible",
                  icon: "⚡",
                  color: "from-red-500 to-red-600",
                },
                {
                  name: "Chef",
                  icon: "👨‍🍳",
                  color: "from-orange-500 to-red-500",
                },
                {
                  name: "Puppet",
                  icon: "🎭",
                  color: "from-yellow-500 to-orange-500",
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

          {/* CI/CD & DevOps */}
          <div className="mb-10 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-4 sm:mb-6 text-center">
              CI/CD & DevOps Tools
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
              {[
                {
                  name: "Jenkins",
                  icon: "🔨",
                  color: "from-red-500 to-orange-500",
                },
                {
                  name: "GitHub Actions",
                  icon: "🐙",
                  color: "from-gray-700 to-gray-900",
                },
                {
                  name: "GitLab CI",
                  icon: "🦊",
                  color: "from-orange-500 to-red-500",
                },
                {
                  name: "ArgoCD",
                  icon: "🔄",
                  color: "from-orange-500 to-red-500",
                },
                {
                  name: "Flux",
                  icon: "🌀",
                  color: "from-blue-500 to-indigo-500",
                },
                {
                  name: "CircleCI",
                  icon: "⭕",
                  color: "from-green-500 to-emerald-500",
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

          {/* Observability & Monitoring */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-4 sm:mb-6 text-center">
              Observability & Monitoring
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
              {[
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
                  name: "New Relic",
                  icon: "📈",
                  color: "from-green-500 to-teal-500",
                },
                {
                  name: "Splunk",
                  icon: "🔍",
                  color: "from-green-500 to-emerald-500",
                },
                {
                  name: "ELK Stack",
                  icon: "🦌",
                  color: "from-yellow-500 to-orange-500",
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
                CJSS for Cloud
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300">
              We combine deep cloud expertise with proven methodologies to
              deliver infrastructure solutions that scale, secure, and optimize
              your business.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: "🏆",
                title: "Certified Experts",
                desc: "AWS, Azure, GCP certified architects with 10+ years of enterprise cloud experience",
              },
              {
                icon: "🔄",
                title: "24/7 Operations",
                desc: "Round-the-clock monitoring, support, and incident response for mission-critical workloads",
              },
              {
                icon: "📉",
                title: "Cost Efficiency",
                desc: "Average 45% cost reduction through optimization, right-sizing, and FinOps practices",
              },
              {
                icon: "🛡️",
                title: "Security First",
                desc: "SOC2, ISO27001, HIPAA compliant infrastructure with zero-trust architecture",
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
          CLOUD CERTIFICATIONS
      ===================================================== */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-sky-500">
                Certifications
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-600">
              Our team holds the industry's most respected cloud certifications
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
            {[
              "AWS Solutions Architect",
              "AWS DevOps Professional",
              "Azure Solutions Architect",
              "Azure DevOps Expert",
              "GCP Professional Architect",
              "Kubernetes CKA/CKAD",
              "HashiCorp Terraform",
              "CISSP Security",
            ].map((cert, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-4 sm:p-5 text-center shadow-sm border border-slate-100 hover:shadow-md hover:border-cyan-200 transition-all"
              >
                <div className="text-2xl sm:text-3xl mb-2">🏅</div>
                <span className="text-xs sm:text-sm font-medium text-slate-700">
                  {cert}
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
                    Cloud Infrastructure
                  </span>
                </h2>

                <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed max-w-md mx-auto md:mx-0">
                  Ready to modernize your infrastructure? Our cloud experts will
                  help you design, migrate, and optimize your cloud environment
                  for maximum performance and cost efficiency.
                </p>

                <div className="mt-6 h-1 w-20 sm:w-24 bg-gradient-to-r from-cyan-400 to-sky-400 rounded-full mx-auto md:mx-0" />

                {/* Quick Contact Info */}
                <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start text-sm">
                  <div className="flex items-center gap-2 text-slate-400 justify-center md:justify-start">
                    <span>📧</span>
                    <span>cloud@cjss.com</span>
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
                      src="/images/rajesh.png"
                      alt="Rajesh - Head of Cloud Solutions"
                      className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover border-2 border-cyan-500/50 shadow-lg"
                    />
                    <span className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-500 border-2 border-slate-950 rounded-full"></span>
                  </div>

                  {/* DETAILS */}
                  <div className="text-center sm:text-left flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-white">
                      Rajesh Kumar
                    </h3>
                    <p className="text-sm text-cyan-400 font-medium">
                      Head of Cloud Solutions
                    </p>

                    <p className="mt-3 text-sm text-slate-300">
                      <span className="text-slate-500">Email: </span>
                      <a
                        href="mailto:rajesh@cjss.com"
                        className="text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        rajesh@cjss.com
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
                  href="mailto:rajesh@cjss.com?subject=Cloud%20Solutions%20Inquiry"
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
};

export default CloudTechnologiesPage;
