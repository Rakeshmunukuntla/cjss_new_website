// export default function QualityEngineeringPage() {
//   return (
//     <main className="w-full min-h-screen text-slate-900 bg-gradient-to-b from-white via-sky-50 to-sky-100">
//       {/* =====================================================
//           HERO SECTION (DARK — SAME PATTERN)
//       ===================================================== */}
//       <section className="relative w-full min-h-[80vh] overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           <img
//             src="/images/testingBanner.png"
//             className="w-full h-full object-cover"
//             alt="Quality Engineering Banner"
//           />
//           <div className="absolute inset-0 bg-black/70" />
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto px-10 md:px-16 lg:px-28 flex flex-col justify-center min-h-[80vh] text-white">
//           <span className="text-xs tracking-widest text-cyan-300">
//             Quality Engineering
//           </span>

//           <h1 className="mt-3 text-5xl font-semibold leading-tight">
//             BUILD{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-300">
//               QUALITY
//             </span>{" "}
//             INTO EVERY RELEASE
//           </h1>

//           <p className="mt-4 max-w-2xl text-slate-200/90">
//             We help you move from traditional QA to engineering-driven quality
//             with automation and observability built across the SDLC.
//           </p>
//         </div>
//       </section>

//       {/* =====================================================
//           SOLUTIONS (LIGHT)
//       ===================================================== */}
//       <section className="w-full py-20 bg-transparent border-t border-slate-200">
//         <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28">
//           <h2 className="text-4xl font-light">
//             <span className="font-semibold">Solutions</span> we Offer
//           </h2>

//           <p className="mt-5 max-w-4xl text-lg text-slate-600">
//             We provide a comprehensive suite of QE services designed to enhance
//             reliability, reduce defects, and accelerate delivery.
//           </p>

//           <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
//             {[
//               [
//                 "QA to QE Transformation",
//                 "Move from traditional QA to engineering-first quality culture.",
//                 "#section-qa-qe",
//               ],
//               [
//                 "Test Automation",
//                 "Automate UI, API and mobile testing at scale.",
//                 "#section-test-automation",
//               ],
//               [
//                 "Test Domains",
//                 "Build scalable domain-driven testing frameworks.",
//                 "#section-test-domain",
//               ],
//               [
//                 "Data Quality",
//                 "Build enterprise-grade test data pipelines.",
//                 "#section-data-quality",
//               ],
//             ].map(([title, desc, link], i) => (
//               <div key={i}>
//                 <h3 className="text-xl font-semibold">{title}</h3>
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
//           SECTION 1 — QA TO QE
//       ===================================================== */}
//       <section id="section-qa-qe" className="w-full py-24 bg-blue-50">
//         <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28 space-y-20">
//           <div className="grid md:grid-cols-2 gap-14 items-center">
//             <div>
//               <h2 className="text-4xl font-semibold">
//                 QA to QE Transformation
//               </h2>
//               <p className="mt-4 text-lg text-slate-700">
//                 Transition to an engineering-led quality model with
//                 automation-first practices and observability.
//               </p>
//             </div>
//             <img src="/images/cloud1.jpg" className="rounded-xl shadow-xl" />
//           </div>

//           <div className="grid md:grid-cols-2 gap-14 items-center">
//             <img src="/images/cloud2.jpg" className="rounded-xl shadow-xl" />
//             <p className="text-lg text-slate-700">
//               Build reusable frameworks, KPIs and predictive quality systems
//               that scale across teams.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           SECTION 2 — TEST AUTOMATION
//       ===================================================== */}
//       <section
//         id="section-test-automation"
//         className="w-full py-24 bg-blue-100"
//       >
//         <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28 space-y-20">
//           <div className="grid md:grid-cols-2 gap-14 items-center">
//             <div>
//               <h2 className="text-4xl font-semibold">Test Automation</h2>
//               <p className="mt-4 text-lg text-slate-700">
//                 Unified automation frameworks for UI, API, Mobile and
//                 Microservices.
//               </p>
//             </div>
//             <img src="/images/cloud3.png" className="rounded-xl shadow-xl" />
//           </div>

//           <div className="grid md:grid-cols-2 gap-14 items-center">
//             <img src="/images/cloud5.png" className="rounded-xl shadow-xl" />
//             <p className="text-lg text-slate-700">
//               Enterprise-grade tooling with Selenium, Cypress, Playwright,
//               Appium and more.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           SECTION 3 — TEST DOMAINS
//       ===================================================== */}
//       <section id="section-test-domain" className="w-full py-24 bg-blue-50">
//         <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28 space-y-20">
//           <div className="grid md:grid-cols-2 gap-14 items-center">
//             <div>
//               <h2 className="text-4xl font-semibold">Test Domains</h2>
//               <p className="mt-4 text-lg text-slate-700">
//                 Domain-driven test packs for checkout, payments, onboarding and
//                 logistics.
//               </p>
//             </div>
//             <img src="/images/cloud6.png" className="rounded-xl shadow-xl" />
//           </div>

//           <div className="grid md:grid-cols-2 gap-14 items-center">
//             <img src="/images/cloud7.png" className="rounded-xl shadow-xl" />
//             <p className="text-lg text-slate-700">
//               Governance, compliance and reusable validation layers across
//               teams.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           SECTION 4 — DATA QUALITY
//       ===================================================== */}
//       <section id="section-data-quality" className="w-full py-24 bg-blue-100">
//         <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28 space-y-20">
//           <div className="grid md:grid-cols-2 gap-14 items-center">
//             <div>
//               <h2 className="text-4xl font-semibold">Data Quality</h2>
//               <p className="mt-4 text-lg text-slate-700">
//                 Synthetic, masked and compliant test data pipelines.
//               </p>
//             </div>
//             <img src="/images/cloud8.png" className="rounded-xl shadow-xl" />
//           </div>

//           <div className="grid md:grid-cols-2 gap-14 items-center">
//             <img src="/images/cloud9.png" className="rounded-xl shadow-xl" />
//             <p className="text-lg text-slate-700">
//               On-demand datasets with full governance and privacy compliance.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           TALK WITH US — SAME AS CLOUD (UNCHANGED)
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

const QualityEngineeringPage = () => {
  return (
    <main className="w-full min-h-screen text-slate-900 bg-gradient-to-b from-white via-sky-50 to-sky-100">
      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/testingBanner.png"
            className="w-full h-full object-cover object-center"
            alt="Quality Engineering Banner"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 flex flex-col justify-center min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] text-white">
          <span className="text-xs sm:text-sm tracking-widest text-emerald-300 uppercase font-medium">
            Quality Engineering Services
          </span>

          <h1 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-up">
            Build Quality Into <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
              Every Release
            </span>
          </h1>

          <p className="mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base md:text-lg text-slate-200/90 leading-relaxed animate-fade-up [animation-delay:0.12s]">
            We help you move from traditional QA to engineering-driven quality
            with automation, observability, and continuous testing built across
            the entire software development lifecycle.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4 animate-fade-up [animation-delay:0.2s]">
            <a
              href="#solutions"
              className="px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm sm:text-base font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald-500/30 transition-all"
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
              { value: "85%", label: "Test Automation Coverage" },
              { value: "60%", label: "Faster Release Cycles" },
              { value: "90%", label: "Defect Detection Rate" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-emerald-200/80 mt-1">
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
            <span className="inline-block px-3 py-1 text-xs sm:text-sm font-medium text-emerald-600 bg-emerald-100 rounded-full mb-4">
              Our QE Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 animate-fade-up">
              Solutions <span className="font-light">We Offer</span>
            </h2>

            <p className="mt-4 sm:mt-5 max-w-3xl text-sm sm:text-base md:text-lg text-slate-600 animate-fade-up [animation-delay:0.1s]">
              We provide a comprehensive suite of quality engineering services
              designed to enhance reliability, reduce defects, accelerate
              delivery, and build quality into every stage of development.
            </p>
          </div>

          <div className="mt-10 sm:mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                num: "01",
                title: "QA to QE Transformation",
                desc: "Move from traditional QA to an engineering-first quality culture. Build automation-first practices, implement shift-left testing, and establish quality metrics that drive continuous improvement.",
                link: "#section-qa-qe",
                icon: "🔄",
                gradient: "from-emerald-500 to-teal-600",
              },
              {
                num: "02",
                title: "Test Automation",
                desc: "Automate UI, API, and mobile testing at scale with enterprise-grade frameworks. Build maintainable, scalable test suites that integrate seamlessly with CI/CD pipelines.",
                link: "#section-test-automation",
                icon: "🤖",
                gradient: "from-blue-500 to-indigo-500",
              },
              {
                num: "03",
                title: "Performance Engineering",
                desc: "Ensure your applications perform under load with comprehensive performance testing. Load testing, stress testing, and scalability analysis for mission-critical systems.",
                link: "#section-performance",
                icon: "⚡",
                gradient: "from-orange-500 to-amber-500",
              },
              {
                num: "04",
                title: "Test Domain Frameworks",
                desc: "Build scalable domain-driven testing frameworks for checkout, payments, onboarding, and logistics. Reusable validation layers with governance and compliance built-in.",
                link: "#section-test-domain",
                icon: "🎯",
                gradient: "from-violet-500 to-purple-500",
              },
              {
                num: "05",
                title: "Data Quality & Test Data",
                desc: "Build enterprise-grade test data pipelines with synthetic, masked, and compliant datasets. On-demand test data provisioning with full governance and privacy compliance.",
                link: "#section-data-quality",
                icon: "📊",
                gradient: "from-rose-500 to-pink-500",
              },
              {
                num: "06",
                title: "Security Testing",
                desc: "Identify vulnerabilities early with comprehensive security testing. SAST, DAST, penetration testing, and security automation integrated into your development workflow.",
                link: "#section-security-testing",
                icon: "🔒",
                gradient: "from-cyan-500 to-blue-500",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border-2 border-gray-100 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all duration-300 hover:-translate-y-1 animate-fade-up"
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
          id: "section-qa-qe",
          title: "QA to QE Transformation",
          bg: "bg-white",
          img: "/images/cloud1.jpg",
          subtitle: "Engineering-First Quality",
          text: "Transition to an engineering-led quality model with automation-first practices, continuous testing, and observability built into every stage of development.",
          features: [
            "Quality Culture Assessment & Roadmap",
            "Shift-Left Testing Strategy",
            "Continuous Testing Implementation",
            "Quality Metrics & KPI Dashboards",
            "Test Environment Management",
            "Quality Gates in CI/CD Pipelines",
          ],
        },
        {
          id: "section-test-automation",
          title: "Test Automation",
          bg: "bg-slate-50",
          img: "/images/cloud3.png",
          subtitle: "Automation at Scale",
          text: "Unified automation frameworks for UI, API, Mobile, and Microservices. Enterprise-grade tooling with industry-leading frameworks and best practices.",
          features: [
            "UI Automation (Selenium, Cypress, Playwright)",
            "API Testing (REST Assured, Postman, Karate)",
            "Mobile Testing (Appium, Detox, XCUITest)",
            "BDD Frameworks (Cucumber, SpecFlow)",
            "Visual Regression Testing",
            "Cross-Browser & Cross-Device Testing",
          ],
        },
        {
          id: "section-performance",
          title: "Performance Engineering",
          bg: "bg-white",
          img: "/images/cloud5.png",
          subtitle: "Performance at Scale",
          text: "Comprehensive performance testing to ensure your applications handle real-world load. Identify bottlenecks, optimize performance, and ensure scalability.",
          features: [
            "Load & Stress Testing (JMeter, Gatling, k6)",
            "Scalability & Capacity Planning",
            "Performance Profiling & APM",
            "Database Performance Optimization",
            "CDN & Caching Analysis",
            "Real User Monitoring (RUM)",
          ],
        },
        {
          id: "section-test-domain",
          title: "Test Domain Frameworks",
          bg: "bg-slate-50",
          img: "/images/cloud6.png",
          subtitle: "Domain-Driven Testing",
          text: "Domain-driven test packs for checkout, payments, onboarding, and logistics. Governance, compliance, and reusable validation layers across teams.",
          features: [
            "E-Commerce Test Frameworks",
            "Payment Gateway Testing",
            "User Onboarding Validation",
            "Logistics & Fulfillment Testing",
            "Regulatory Compliance Testing",
            "Contract Testing (Pact, Spring Cloud Contract)",
          ],
        },
        {
          id: "section-data-quality",
          title: "Data Quality & Test Data",
          bg: "bg-white",
          img: "/images/cloud8.png",
          subtitle: "Test Data Management",
          text: "Synthetic, masked, and compliant test data pipelines. On-demand datasets with full governance and privacy compliance for realistic testing scenarios.",
          features: [
            "Synthetic Data Generation",
            "Data Masking & Anonymization",
            "Test Data Provisioning APIs",
            "GDPR & Privacy Compliance",
            "Data Subsetting & Cloning",
            "Test Data Version Control",
          ],
        },
        {
          id: "section-security-testing",
          title: "Security Testing",
          bg: "bg-slate-50",
          img: "/images/cloud9.png",
          subtitle: "Secure by Design",
          text: "Identify vulnerabilities early with comprehensive security testing integrated into your development workflow. Shift-left security for modern applications.",
          features: [
            "Static Application Security Testing (SAST)",
            "Dynamic Application Security Testing (DAST)",
            "Penetration Testing & Ethical Hacking",
            "OWASP Top 10 Vulnerability Scanning",
            "Security Automation in CI/CD",
            "Compliance & Audit Reporting",
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
                <span className="inline-block px-3 py-1 text-xs sm:text-sm font-medium text-emerald-600 bg-emerald-100 rounded-full mb-4">
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
                        className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5"
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
          TECHNOLOGY STACK
      ===================================================== */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <span className="inline-block px-3 py-1 text-xs sm:text-sm font-medium text-emerald-600 bg-emerald-100 rounded-full mb-4">
              Our Tech Stack
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Quality Engineering{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">
                Technology Stack
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-600">
              We leverage industry-leading testing tools and frameworks to
              deliver comprehensive quality engineering solutions
            </p>
          </div>

          {/* UI & E2E Testing */}
          <div className="mb-10 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-4 sm:mb-6 text-center">
              UI & E2E Testing
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
              {[
                {
                  name: "Selenium",
                  icon: "🌐",
                  color: "from-green-500 to-emerald-500",
                },
                {
                  name: "Cypress",
                  icon: "🌲",
                  color: "from-teal-500 to-cyan-500",
                },
                {
                  name: "Playwright",
                  icon: "🎭",
                  color: "from-green-500 to-teal-500",
                },
                {
                  name: "TestCafe",
                  icon: "☕",
                  color: "from-blue-500 to-indigo-500",
                },
                {
                  name: "Puppeteer",
                  icon: "🎪",
                  color: "from-cyan-500 to-blue-500",
                },
                {
                  name: "WebdriverIO",
                  icon: "🔧",
                  color: "from-orange-500 to-red-500",
                },
              ].map((tech, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col items-center justify-center p-4 sm:p-5 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-100 hover:border-emerald-200 hover:shadow-lg transition-all"
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

          {/* API Testing */}
          <div className="mb-10 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-4 sm:mb-6 text-center">
              API & Service Testing
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
              {[
                {
                  name: "Postman",
                  icon: "📮",
                  color: "from-orange-500 to-red-500",
                },
                {
                  name: "REST Assured",
                  icon: "☕",
                  color: "from-green-500 to-emerald-500",
                },
                {
                  name: "Karate DSL",
                  icon: "🥋",
                  color: "from-red-500 to-pink-500",
                },
                {
                  name: "SoapUI",
                  icon: "🧼",
                  color: "from-green-500 to-teal-500",
                },
                {
                  name: "Insomnia",
                  icon: "🌙",
                  color: "from-purple-500 to-violet-500",
                },
                {
                  name: "GraphQL Testing",
                  icon: "◈",
                  color: "from-pink-500 to-rose-500",
                },
              ].map((tech, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col items-center justify-center p-4 sm:p-5 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-100 hover:border-emerald-200 hover:shadow-lg transition-all"
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

          {/* Mobile Testing */}
          <div className="mb-10 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-4 sm:mb-6 text-center">
              Mobile Testing
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
              {[
                {
                  name: "Appium",
                  icon: "📱",
                  color: "from-purple-500 to-violet-500",
                },
                {
                  name: "Detox",
                  icon: "🧪",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  name: "XCUITest",
                  icon: "🍎",
                  color: "from-gray-700 to-gray-900",
                },
                {
                  name: "Espresso",
                  icon: "☕",
                  color: "from-green-500 to-emerald-500",
                },
                {
                  name: "BrowserStack",
                  icon: "📲",
                  color: "from-orange-500 to-red-500",
                },
                {
                  name: "Sauce Labs",
                  icon: "🍝",
                  color: "from-red-500 to-pink-500",
                },
              ].map((tech, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col items-center justify-center p-4 sm:p-5 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-100 hover:border-emerald-200 hover:shadow-lg transition-all"
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

          {/* Performance Testing */}
          <div className="mb-10 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-4 sm:mb-6 text-center">
              Performance Testing
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
              {[
                {
                  name: "JMeter",
                  icon: "📊",
                  color: "from-red-500 to-orange-500",
                },
                {
                  name: "Gatling",
                  icon: "🔫",
                  color: "from-orange-500 to-yellow-500",
                },
                {
                  name: "k6",
                  icon: "⚡",
                  color: "from-purple-500 to-violet-500",
                },
                {
                  name: "Locust",
                  icon: "🦗",
                  color: "from-green-500 to-emerald-500",
                },
                {
                  name: "Artillery",
                  icon: "💣",
                  color: "from-gray-700 to-gray-900",
                },
                {
                  name: "LoadRunner",
                  icon: "🏃",
                  color: "from-blue-500 to-indigo-500",
                },
              ].map((tech, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col items-center justify-center p-4 sm:p-5 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-100 hover:border-emerald-200 hover:shadow-lg transition-all"
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

          {/* BDD & Test Frameworks */}
          <div className="mb-10 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-4 sm:mb-6 text-center">
              BDD & Test Frameworks
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
              {[
                {
                  name: "Cucumber",
                  icon: "🥒",
                  color: "from-green-500 to-emerald-500",
                },
                {
                  name: "SpecFlow",
                  icon: "📋",
                  color: "from-purple-500 to-violet-500",
                },
                {
                  name: "JUnit",
                  icon: "☕",
                  color: "from-red-500 to-orange-500",
                },
                {
                  name: "TestNG",
                  icon: "🧪",
                  color: "from-orange-500 to-yellow-500",
                },
                {
                  name: "Jest",
                  icon: "🃏",
                  color: "from-green-500 to-teal-500",
                },
                {
                  name: "Mocha",
                  icon: "☕",
                  color: "from-amber-600 to-yellow-600",
                },
              ].map((tech, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col items-center justify-center p-4 sm:p-5 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-100 hover:border-emerald-200 hover:shadow-lg transition-all"
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
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-4 sm:mb-6 text-center">
              CI/CD & Test Management
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
                  name: "Azure DevOps",
                  icon: "🔷",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  name: "Jira/Xray",
                  icon: "📝",
                  color: "from-blue-500 to-indigo-500",
                },
                {
                  name: "TestRail",
                  icon: "🛤️",
                  color: "from-teal-500 to-cyan-500",
                },
                {
                  name: "Allure",
                  icon: "📈",
                  color: "from-yellow-500 to-orange-500",
                },
              ].map((tech, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col items-center justify-center p-4 sm:p-5 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-100 hover:border-emerald-200 hover:shadow-lg transition-all"
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
      <section className="w-full py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                CJSS for Quality Engineering
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300">
              We combine deep testing expertise with modern engineering
              practices to deliver quality solutions that accelerate your
              delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: "🎯",
                title: "85%+ Automation",
                desc: "Achieve high automation coverage with maintainable, scalable test frameworks",
              },
              {
                icon: "⚡",
                title: "Shift-Left Testing",
                desc: "Catch defects early with integrated testing throughout the development lifecycle",
              },
              {
                icon: "📊",
                title: "Quality Metrics",
                desc: "Data-driven quality insights with real-time dashboards and predictive analytics",
              },
              {
                icon: "🔄",
                title: "Continuous Testing",
                desc: "Seamless CI/CD integration for automated testing on every commit",
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
          TESTING TYPES WE COVER
      ===================================================== */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Testing Types{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">
                We Cover
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-600">
              Comprehensive testing coverage across all layers of your
              application
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
            {[
              { name: "Unit Testing", icon: "🧱" },
              { name: "Integration Testing", icon: "🔗" },
              { name: "E2E Testing", icon: "🔄" },
              { name: "Regression Testing", icon: "🔁" },
              { name: "Smoke Testing", icon: "💨" },
              { name: "Sanity Testing", icon: "✅" },
              { name: "UAT Testing", icon: "👤" },
              { name: "A/B Testing", icon: "🅰️" },
              { name: "Accessibility Testing", icon: "♿" },
              { name: "Localization Testing", icon: "🌍" },
              { name: "Compatibility Testing", icon: "📱" },
              { name: "Chaos Testing", icon: "🌪️" },
            ].map((type, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-4 sm:p-5 text-center shadow-sm border border-slate-100 hover:shadow-md hover:border-emerald-200 transition-all"
              >
                <div className="text-2xl sm:text-3xl mb-2">{type.icon}</div>
                <span className="text-xs sm:text-sm font-medium text-slate-700">
                  {type.name}
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
                <span className="inline-block px-3 py-1 text-xs sm:text-sm font-medium text-emerald-400 bg-emerald-500/10 rounded-full mb-4">
                  Get in Touch
                </span>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  Let's Build{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                    Quality Together
                  </span>
                </h2>

                <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed max-w-md mx-auto md:mx-0">
                  Ready to transform your quality engineering? Our experts will
                  help you build automation frameworks, implement continuous
                  testing, and accelerate your release cycles.
                </p>

                <div className="mt-6 h-1 w-20 sm:w-24 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mx-auto md:mx-0" />

                {/* Quick Contact Info */}
                <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start text-sm">
                  <div className="flex items-center gap-2 text-slate-400 justify-center md:justify-start">
                    <span>📧</span>
                    <span>qa@cjss.com</span>
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
                      src="/images/priya.png"
                      alt="Priya - Head of QA Solutions"
                      className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover border-2 border-emerald-500/50 shadow-lg"
                    />
                    <span className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-500 border-2 border-slate-950 rounded-full"></span>
                  </div>

                  {/* DETAILS */}
                  <div className="text-center sm:text-left flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-white">
                      Priya Sharma
                    </h3>
                    <p className="text-sm text-emerald-400 font-medium">
                      Head of QA Solutions
                    </p>

                    <p className="mt-3 text-sm text-slate-300">
                      <span className="text-slate-500">Email: </span>
                      <a
                        href="mailto:priya@cjss.com"
                        className="text-emerald-400 hover:text-emerald-300 transition-colors"
                      >
                        priya@cjss.com
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
                  href="mailto:priya@cjss.com?subject=Quality%20Engineering%20Inquiry"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm sm:text-base font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald-500/30 transition-all"
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
                    className="text-emerald-400 hover:text-emerald-300"
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

export default QualityEngineeringPage;
