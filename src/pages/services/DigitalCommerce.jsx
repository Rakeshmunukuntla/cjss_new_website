// import React from "react";

// const DigitalPlatformsPage = () => {
//   return (
//     <main className="w-full min-h-screen text-slate-900 bg-gradient-to-b from-white via-sky-50 to-sky-100">
//       {/* =====================================================
//           HERO SECTION (DARK — UNCHANGED)
//       ===================================================== */}
//       <section className="relative w-full min-h-[80vh] overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           <img
//             src="/images/hybrisBanner.jpg"
//             className="w-full h-full object-cover"
//             alt="Digital Platforms Banner"
//           />
//           <div className="absolute inset-0 bg-black/70" />
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto px-10 md:px-16 lg:px-28 flex flex-col justify-center min-h-[80vh] text-white">
//           <span className="text-xs tracking-widest text-cyan-300">
//             Digital Platforms
//           </span>

//           <h1 className="mt-3 text-5xl font-semibold leading-tight">
//             BUILD{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-300">
//               COMPOSABLE COMMERCE
//             </span>{" "}
//             ON SAP HYBRIS / SAP COMMERCE CLOUD
//           </h1>

//           <p className="mt-4 max-w-3xl text-slate-200/90">
//             We design, implement and evolve digital commerce platforms on SAP
//             Hybris / SAP Commerce Cloud—integrated with your ecosystem and ready
//             for global scale.
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
//             Our digital platforms team builds scalable SAP Hybris commerce
//             solutions for B2C, B2B and marketplaces.
//           </p>

//           <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
//             {[
//               [
//                 "SAP Commerce Cloud Implementation",
//                 "Greenfield builds, upgrades and re-platforming.",
//                 "#section-sap-commerce",
//               ],
//               [
//                 "Headless & Composable Commerce",
//                 "Decoupled experience layers for agility.",
//                 "#section-headless-composable",
//               ],
//               [
//                 "Product & Catalog Management",
//                 "Clean, structured product data at scale.",
//                 "#section-pim-catalog",
//               ],
//               [
//                 "Order Management & Fulfillment",
//                 "Unified orchestration across channels.",
//                 "#section-oms-fulfillment",
//               ],
//               [
//                 "Pricing & Promotions",
//                 "Advanced rules and personalization.",
//                 "#section-pricing-promotions",
//               ],
//               [
//                 "Integrations & Microservices",
//                 "ERP, CRM, payments and event-driven systems.",
//                 "#section-integrations-microservices",
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
//           SECTION 1 — SAP COMMERCE CLOUD
//       ===================================================== */}
//       <section id="section-sap-commerce" className="w-full py-24 bg-blue-50">
//         <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28 space-y-20">
//           <div className="grid md:grid-cols-2 gap-14 items-center">
//             <div>
//               <h2 className="text-4xl font-semibold">SAP Commerce Cloud</h2>
//               <p className="mt-4 text-lg text-slate-700">
//                 Multi-site, multi-region SAP Hybris implementations aligned with
//                 SAP best practices.
//               </p>
//             </div>
//             <img
//               src="/images/hybris1.png"
//               alt="SAP Commerce"
//               className="rounded-xl shadow-xl"
//             />
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           SECTION 2 — HEADLESS & COMPOSABLE
//       ===================================================== */}
//       <section
//         id="section-headless-composable"
//         className="w-full py-24 bg-blue-100"
//       >
//         <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28 space-y-20">
//           <div className="grid md:grid-cols-2 gap-14 items-center">
//             <img
//               src="/images/hybris2.png"
//               alt="Headless Commerce"
//               className="rounded-xl shadow-xl"
//             />
//             <p className="text-lg text-slate-700">
//               Decouple frontend innovation from transactional backend systems.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           SECTION 3 — PRODUCT & CATALOG
//       ===================================================== */}
//       <section id="section-pim-catalog" className="w-full py-24 bg-blue-50">
//         <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28">
//           <h2 className="text-4xl font-semibold">
//             Product & Catalog Management
//           </h2>
//           <p className="mt-4 text-lg text-slate-700">
//             Variants, bundles, governance and multi-region catalogs.
//           </p>
//         </div>
//       </section>

//       {/* =====================================================
//           SECTION 4 — OMS
//       ===================================================== */}
//       <section
//         id="section-oms-fulfillment"
//         className="w-full py-24 bg-blue-100"
//       >
//         <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28">
//           <h2 className="text-4xl font-semibold">Order Management</h2>
//           <p className="mt-4 text-lg text-slate-700">
//             Predictable fulfillment across warehouses and partners.
//           </p>
//         </div>
//       </section>

//       {/* =====================================================
//           SECTION 5 — PRICING & PROMOTIONS
//       ===================================================== */}
//       <section
//         id="section-pricing-promotions"
//         className="w-full py-24 bg-blue-50"
//       >
//         <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28">
//           <h2 className="text-4xl font-semibold">Pricing & Personalization</h2>
//           <p className="mt-4 text-lg text-slate-700">
//             B2B pricing, campaigns and targeted experiences.
//           </p>
//         </div>
//       </section>

//       {/* =====================================================
//           SECTION 6 — INTEGRATIONS
//       ===================================================== */}
//       <section
//         id="section-integrations-microservices"
//         className="w-full py-24 bg-blue-100"
//       >
//         <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28">
//           <h2 className="text-4xl font-semibold">
//             Integrations & Microservices
//           </h2>
//           <p className="mt-4 text-lg text-slate-700">
//             ERP, CRM, payments and event-driven architecture.
//           </p>
//         </div>
//       </section>

//       {/* =====================================================
//           TALK WITH US (UNCHANGED UI)
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
// };

// export default DigitalPlatformsPage;
import React from "react";

const DigitalPlatformsPage = () => {
  return (
    <main className="w-full min-h-screen text-slate-900 bg-gradient-to-b from-white via-sky-50 to-sky-100">
      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hybrisBanner.jpg"
            className="w-full h-full object-cover object-center"
            alt="Digital Platforms Banner"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 flex flex-col justify-center min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] text-white">
          <span className="text-xs sm:text-sm tracking-widest text-cyan-300 uppercase font-medium">
            Digital Commerce & Platforms
          </span>

          <h1 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-up">
            Build Composable Commerce <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              On SAP Commerce Cloud
            </span>
          </h1>

          <p className="mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base md:text-lg text-slate-200/90 leading-relaxed animate-fade-up [animation-delay:0.12s]">
            We design, implement, and evolve digital commerce platforms on SAP
            Hybris / SAP Commerce Cloud — integrated with your ecosystem and
            ready for global scale, omnichannel experiences, and B2B/B2C
            excellence.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4 animate-fade-up [animation-delay:0.2s]">
            <a
              href="#solutions"
              className="px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm sm:text-base font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
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
              { value: "150+", label: "SAP Commerce Projects" },
              { value: "50M+", label: "Transactions Processed" },
              { value: "30+", label: "Countries Deployed" },
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
            <span className="inline-block px-3 py-1 text-xs sm:text-sm font-medium text-purple-600 bg-purple-100 rounded-full mb-4">
              Our Digital Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 animate-fade-up">
              Solutions <span className="font-light">We Offer</span>
            </h2>

            <p className="mt-4 sm:mt-5 max-w-3xl text-sm sm:text-base md:text-lg text-slate-600 animate-fade-up [animation-delay:0.1s]">
              Our digital platforms team builds scalable SAP Hybris commerce
              solutions for B2C, B2B, and marketplace businesses — from
              greenfield implementations to complex integrations.
            </p>
          </div>

          <div className="mt-10 sm:mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                num: "01",
                title: "SAP Commerce Cloud Implementation",
                desc: "End-to-end SAP Commerce Cloud implementations including greenfield builds, version upgrades, and re-platforming from legacy systems. Multi-site, multi-region deployments aligned with SAP best practices.",
                link: "#section-sap-commerce",
                icon: "🏢",
                gradient: "from-purple-500 to-violet-600",
              },
              {
                num: "02",
                title: "Headless & Composable Commerce",
                desc: "Decouple frontend innovation from backend systems with headless architecture. Build composable commerce experiences using Spartacus, React, Next.js, and API-first design patterns.",
                link: "#section-headless-composable",
                icon: "🧩",
                gradient: "from-cyan-500 to-blue-500",
              },
              {
                num: "03",
                title: "Product & Catalog Management",
                desc: "Master product data with variants, bundles, classifications, and multi-region catalogs. Implement PIM integrations and data governance frameworks for clean, structured product information.",
                link: "#section-pim-catalog",
                icon: "📦",
                gradient: "from-emerald-500 to-teal-500",
              },
              {
                num: "04",
                title: "Order Management & Fulfillment",
                desc: "Unified order orchestration across channels, warehouses, and fulfillment partners. Implement OMS solutions with inventory visibility, split shipments, and returns management.",
                link: "#section-oms-fulfillment",
                icon: "📋",
                gradient: "from-orange-500 to-amber-500",
              },
              {
                num: "05",
                title: "Pricing & Promotions Engine",
                desc: "Advanced pricing rules, B2B contract pricing, dynamic promotions, and personalized offers. Build sophisticated pricing engines that adapt to customer segments and market conditions.",
                link: "#section-pricing-promotions",
                icon: "💰",
                gradient: "from-rose-500 to-pink-500",
              },
              {
                num: "06",
                title: "Integrations & Microservices",
                desc: "Seamless integrations with SAP ERP, CRM, payment gateways, and third-party services. Build event-driven architectures and microservices for scalable, resilient commerce ecosystems.",
                link: "#section-integrations-microservices",
                icon: "🔗",
                gradient: "from-indigo-500 to-purple-500",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border-2 border-gray-100 shadow-sm hover:shadow-xl hover:border-purple-200 transition-all duration-300 hover:-translate-y-1 animate-fade-up"
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
          id: "section-sap-commerce",
          title: "SAP Commerce Cloud Implementation",
          bg: "bg-white",
          img: "/images/hybris1.png",
          subtitle: "Enterprise Commerce Platform",
          text: "Multi-site, multi-region SAP Commerce Cloud implementations aligned with SAP best practices. We deliver scalable solutions for B2B, B2C, and hybrid business models.",
          features: [
            "Greenfield SAP Commerce Cloud Builds",
            "Version Upgrades & Migrations",
            "Multi-Site & Multi-Region Setup",
            "B2B & B2C Storefront Development",
            "SAP Commerce Cloud (CCv2) Deployments",
            "Performance Optimization & Caching",
          ],
        },
        {
          id: "section-headless-composable",
          title: "Headless & Composable Commerce",
          bg: "bg-slate-50",
          img: "/images/hybris2.png",
          subtitle: "Modern Architecture",
          text: "Decouple frontend innovation from transactional backend systems. Build composable commerce experiences with API-first architecture and modern frontend frameworks.",
          features: [
            "Spartacus Angular Storefront",
            "React & Next.js Frontends",
            "API-First & Headless Architecture",
            "Composable Commerce Patterns",
            "CMS Integration (Contentful, Amplience)",
            "Progressive Web Apps (PWA)",
          ],
        },
        {
          id: "section-pim-catalog",
          title: "Product & Catalog Management",
          bg: "bg-white",
          img: "/images/hybris3.png",
          subtitle: "Master Product Data",
          text: "Clean, structured product data at scale. Manage variants, bundles, classifications, and multi-region catalogs with robust governance frameworks.",
          features: [
            "Product Variants & Bundles",
            "Classification & Attributes",
            "Multi-Catalog Management",
            "PIM Integration (Akeneo, Salsify)",
            "Data Quality & Governance",
            "Automated Product Enrichment",
          ],
        },
        {
          id: "section-oms-fulfillment",
          title: "Order Management & Fulfillment",
          bg: "bg-slate-50",
          img: "/images/hybris4.png",
          subtitle: "Unified Order Orchestration",
          text: "Predictable fulfillment across warehouses, stores, and partners. Unified order orchestration for seamless omnichannel customer experiences.",
          features: [
            "Order Orchestration & Routing",
            "Inventory Visibility & ATP",
            "Split Shipment Management",
            "Store Fulfillment & BOPIS",
            "Returns & Refund Processing",
            "3PL & Partner Integrations",
          ],
        },
        {
          id: "section-pricing-promotions",
          title: "Pricing & Promotions Engine",
          bg: "bg-white",
          img: "/images/hybris5.png",
          subtitle: "Dynamic Pricing & Personalization",
          text: "B2B pricing, campaigns, and targeted experiences. Build sophisticated pricing engines that drive conversions and customer loyalty.",
          features: [
            "B2B Contract Pricing",
            "Dynamic Pricing Rules",
            "Promotion Engine Configuration",
            "Customer Segment Pricing",
            "Coupon & Voucher Management",
            "Personalized Offers & Recommendations",
          ],
        },
        {
          id: "section-integrations-microservices",
          title: "Integrations & Microservices",
          bg: "bg-slate-50",
          img: "/images/hybris6.png",
          subtitle: "Connected Commerce Ecosystem",
          text: "ERP, CRM, payments, and event-driven architecture. Build resilient, scalable integrations that connect your commerce platform to the enterprise.",
          features: [
            "SAP S/4HANA & ECC Integration",
            "CRM & Marketing Automation",
            "Payment Gateway Integration",
            "Tax & Shipping Providers",
            "Event-Driven Architecture (Kafka)",
            "Microservices & API Gateway",
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
                <span className="inline-block px-3 py-1 text-xs sm:text-sm font-medium text-purple-600 bg-purple-100 rounded-full mb-4">
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
                        className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5"
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
            <span className="inline-block px-3 py-1 text-xs sm:text-sm font-medium text-purple-600 bg-purple-100 rounded-full mb-4">
              Our Tech Stack
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Digital Commerce{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                Technology Stack
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-600">
              We leverage SAP Commerce Cloud ecosystem and modern technologies
              to build scalable digital commerce solutions
            </p>
          </div>

          {/* SAP Commerce Cloud */}
          <div className="mb-10 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-4 sm:mb-6 text-center">
              SAP Commerce Cloud Ecosystem
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
              {[
                {
                  name: "SAP Commerce Cloud",
                  icon: "🏢",
                  color: "from-blue-500 to-indigo-500",
                },
                {
                  name: "Spartacus",
                  icon: "⚔️",
                  color: "from-purple-500 to-violet-500",
                },
                {
                  name: "SAP CX",
                  icon: "💼",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  name: "SAP CDC",
                  icon: "👤",
                  color: "from-green-500 to-emerald-500",
                },
                {
                  name: "SAP Emarsys",
                  icon: "📧",
                  color: "from-orange-500 to-red-500",
                },
                {
                  name: "SAP CPQ",
                  icon: "📝",
                  color: "from-teal-500 to-cyan-500",
                },
              ].map((tech, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col items-center justify-center p-4 sm:p-5 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-100 hover:border-purple-200 hover:shadow-lg transition-all"
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

          {/* Frontend Technologies */}
          <div className="mb-10 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-4 sm:mb-6 text-center">
              Frontend & Headless
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
              {[
                {
                  name: "Angular",
                  icon: "🅰️",
                  color: "from-red-500 to-red-600",
                },
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
                  className="group flex flex-col items-center justify-center p-4 sm:p-5 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-100 hover:border-purple-200 hover:shadow-lg transition-all"
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

          {/* Backend & Integration */}
          <div className="mb-10 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-4 sm:mb-6 text-center">
              Backend & Integration
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
              {[
                {
                  name: "Java / Spring",
                  icon: "☕",
                  color: "from-orange-500 to-red-500",
                },
                {
                  name: "SAP Integration Suite",
                  icon: "🔄",
                  color: "from-blue-500 to-indigo-500",
                },
                {
                  name: "Apache Kafka",
                  icon: "📨",
                  color: "from-gray-700 to-gray-900",
                },
                {
                  name: "REST APIs",
                  icon: "🔌",
                  color: "from-green-500 to-teal-500",
                },
                {
                  name: "GraphQL",
                  icon: "◈",
                  color: "from-pink-500 to-rose-500",
                },
                {
                  name: "OData",
                  icon: "📊",
                  color: "from-blue-500 to-cyan-500",
                },
              ].map((tech, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col items-center justify-center p-4 sm:p-5 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-100 hover:border-purple-200 hover:shadow-lg transition-all"
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
                  name: "SAP BTP",
                  icon: "☁️",
                  color: "from-blue-500 to-indigo-500",
                },
                {
                  name: "AWS",
                  icon: "🔶",
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
                  name: "Jenkins",
                  icon: "🔨",
                  color: "from-red-500 to-orange-500",
                },
              ].map((tech, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col items-center justify-center p-4 sm:p-5 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-100 hover:border-purple-200 hover:shadow-lg transition-all"
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

          {/* Data & Analytics */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-4 sm:mb-6 text-center">
              Data & Analytics
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
              {[
                {
                  name: "SAP Analytics Cloud",
                  icon: "📈",
                  color: "from-blue-500 to-indigo-500",
                },
                {
                  name: "Elasticsearch",
                  icon: "🔍",
                  color: "from-yellow-500 to-orange-500",
                },
                {
                  name: "Solr",
                  icon: "☀️",
                  color: "from-orange-500 to-red-500",
                },
                {
                  name: "Redis",
                  icon: "🔴",
                  color: "from-red-500 to-red-600",
                },
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
              ].map((tech, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col items-center justify-center p-4 sm:p-5 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-100 hover:border-purple-200 hover:shadow-lg transition-all"
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
      <section className="w-full py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                CJSS for Digital Commerce
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300">
              We combine deep SAP Commerce expertise with modern development
              practices to deliver commerce solutions that drive revenue growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: "🏆",
                title: "SAP Gold Partner",
                desc: "Certified SAP Commerce Cloud experts with 150+ successful implementations globally",
              },
              {
                icon: "🌍",
                title: "Global Delivery",
                desc: "Multi-region deployments across 30+ countries with localization expertise",
              },
              {
                icon: "⚡",
                title: "Rapid Implementation",
                desc: "Accelerators and templates for faster time-to-market with proven methodologies",
              },
              {
                icon: "🔄",
                title: "End-to-End Support",
                desc: "From strategy to implementation to managed services and optimization",
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                We Serve
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-600">
              Deep domain expertise across B2B and B2C commerce verticals
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
            {[
              { name: "Retail & Fashion", icon: "👗" },
              { name: "Manufacturing", icon: "🏭" },
              { name: "Consumer Goods", icon: "🛒" },
              { name: "Automotive", icon: "🚗" },
              { name: "High Tech", icon: "💻" },
              { name: "Healthcare", icon: "🏥" },
              { name: "Life Sciences", icon: "🧬" },
              { name: "Telecom", icon: "📱" },
            ].map((industry, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-4 sm:p-5 text-center shadow-sm border border-slate-100 hover:shadow-md hover:border-purple-200 transition-all"
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
                <span className="inline-block px-3 py-1 text-xs sm:text-sm font-medium text-purple-400 bg-purple-500/10 rounded-full mb-4">
                  Get in Touch
                </span>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  Let's Build Your{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                    Commerce Platform
                  </span>
                </h2>

                <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed max-w-md mx-auto md:mx-0">
                  Ready to transform your digital commerce? Our SAP Commerce
                  experts will help you design, implement, and optimize your
                  platform for maximum business impact.
                </p>

                <div className="mt-6 h-1 w-20 sm:w-24 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mx-auto md:mx-0" />

                {/* Quick Contact Info */}
                <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start text-sm">
                  <div className="flex items-center gap-2 text-slate-400 justify-center md:justify-start">
                    <span>📧</span>
                    <span>commerce@cjss.com</span>
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
                      src="/images/amit.png"
                      alt="Amit - Head of Digital Commerce"
                      className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover border-2 border-purple-500/50 shadow-lg"
                    />
                    <span className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-500 border-2 border-slate-950 rounded-full"></span>
                  </div>

                  {/* DETAILS */}
                  <div className="text-center sm:text-left flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-white">
                      Amit Verma
                    </h3>
                    <p className="text-sm text-purple-400 font-medium">
                      Head of Digital Commerce
                    </p>

                    <p className="mt-3 text-sm text-slate-300">
                      <span className="text-slate-500">Email: </span>
                      <a
                        href="mailto:amit@cjss.com"
                        className="text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        amit@cjss.com
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
                  href="mailto:amit@cjss.com?subject=Digital%20Commerce%20Inquiry"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-sm sm:text-base font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all"
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
                    className="text-purple-400 hover:text-purple-300"
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

export default DigitalPlatformsPage;
