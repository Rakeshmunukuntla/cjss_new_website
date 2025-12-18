// import React from "react";

// const AIServicesPage = () => {
//   return (
//     <main className="w-full min-h-screen text-slate-900 bg-gradient-to-b from-white via-sky-50 to-sky-100">
//       {/* =====================================================
//           HERO SECTION
//       ===================================================== */}
//       <section className="relative w-full min-h-[80vh] overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           <img
//             src="/images/aibanner.jpg"
//             className="w-full h-full object-cover"
//             alt="AI Services Banner"
//           />
//           <div className="absolute inset-0 bg-black/50" />
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto px-10 md:px-20 flex flex-col justify-center min-h-[80vh] text-white">
//           <span className="text-xs tracking-widest text-blue-300">
//             AI Services
//           </span>

//           <h1 className="mt-3 text-5xl font-semibold leading-tight animate-fade-up">
//             TRANSFORM YOUR BUSINESS WITH{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
//               AI & INTELLIGENCE
//             </span>
//           </h1>

//           <p className="mt-4 max-w-3xl text-slate-200/90 animate-fade-up [animation-delay:0.12s]">
//             We help enterprises adopt AI/ML, Generative AI, automation and
//             intelligent decision systems to improve accuracy, efficiency and
//             business speed.
//           </p>
//         </div>
//       </section>

//       {/* =====================================================
//           SOLUTIONS
//       ===================================================== */}
//       <section className="w-full py-20 bg-transparent border-t border-slate-200">
//         <div className="max-w-7xl mx-auto px-10 md:px-20">
//           <h2 className="text-4xl font-light animate-fade-up text-slate-900">
//             <span className="font-semibold">Solutions</span> we Offer
//           </h2>

//           <p className="mt-5 max-w-4xl text-lg text-slate-600 animate-fade-up [animation-delay:0.1s]">
//             From AI strategy to Generative AI, MLOps, NLP and Vision systems —
//             we help enterprises build and scale intelligent solutions tailored
//             to their business.
//           </p>

//           <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
//             {[
//               [
//                 "①",
//                 "AI Strategy & Consulting",
//                 "Identify high-value AI use cases and build a roadmap aligned with your business goals.",
//                 "#section-ai-strategy",
//               ],
//               [
//                 "②",
//                 "Machine Learning Engineering",
//                 "Forecasting, recommendation, scoring, anomaly detection and automation.",
//                 "#section-ml-engineering",
//               ],
//               [
//                 "③",
//                 "Generative AI & LLM Solutions",
//                 "Private RAG, AI copilots, intelligent chatbots and content automation.",
//                 "#section-genai",
//               ],
//               [
//                 "④",
//                 "Computer Vision & NLP",
//                 "Image, document and language understanding at production scale.",
//                 "#section-vision-nlp",
//               ],
//               [
//                 "⑤",
//                 "MLOps & Monitoring",
//                 "CI/CD for ML, monitoring, drift detection and retraining.",
//                 "#section-mlops",
//               ],
//               [
//                 "⑥",
//                 "Data Engineering for AI",
//                 "Build analytics-ready, ML-ready data pipelines and feature stores.",
//                 "#section-data-engineering",
//               ],
//             ].map(([num, title, desc, link], i) => (
//               <div key={i} className="animate-fade-up">
//                 <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-600 mb-3">
//                   <span>{num}</span>
//                 </div>
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
//           SECTIONS TEMPLATE
//       ===================================================== */}
//       {[
//         {
//           id: "section-ai-strategy",
//           title: "AI Strategy & Consulting",
//           bg: "bg-blue-50",
//           img: "/images/AI1.jpg",
//           text: "Start with clarity instead of experiments. We help define AI priorities, governance and scalable roadmaps.",
//         },
//         {
//           id: "section-ml-engineering",
//           title: "Machine Learning Engineering",
//           bg: "bg-blue-100",
//           img: "/images/AIPAGE2.png",
//           text: "We design, build and deploy production‑grade ML systems.",
//         },
//         {
//           id: "section-genai",
//           title: "Generative AI & LLM Solutions",
//           bg: "bg-blue-50",
//           img: "/images/AIpage3.jpg",
//           text: "Secure, domain‑aware GenAI solutions using RAG and LLM orchestration.",
//         },
//         {
//           id: "section-vision-nlp",
//           title: "Computer Vision & NLP",
//           bg: "bg-blue-100",
//           img: "/images/aipage4.jpg",
//           text: "Turn unstructured data into actionable intelligence.",
//         },
//         {
//           id: "section-mlops",
//           title: "MLOps & Model Deployment",
//           bg: "bg-blue-50",
//           img: "/images/aipage5.jpg",
//           text: "Automated deployment, monitoring and lifecycle management.",
//         },
//         {
//           id: "section-data-engineering",
//           title: "Data Engineering for AI",
//           bg: "bg-blue-100",
//           img: "/images/aipage6.jpg",
//           text: "Build reliable data foundations for AI systems.",
//         },
//       ].map(({ id, title, bg, img, text }, i) => (
//         <section key={id} id={id} className={`w-full py-24 ${bg}`}>
//           <div className="max-w-7xl mx-auto px-10 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
//             {i % 2 === 0 ? (
//               <>
//                 <div className="animate-slide-left">
//                   <h2 className="text-4xl font-semibold text-slate-900">
//                     {title}
//                   </h2>
//                   <p className="mt-4 text-lg text-slate-700">{text}</p>
//                 </div>
//                 <img
//                   src={img}
//                   alt={title}
//                   className="w-full rounded-xl shadow-xl animate-slide-right"
//                 />
//               </>
//             ) : (
//               <>
//                 <img
//                   src={img}
//                   alt={title}
//                   className="w-full rounded-xl shadow-xl animate-slide-left"
//                 />
//                 <div className="animate-slide-right">
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

//       <style>{`
//         @keyframes fadeUp {
//           from { opacity: 0; transform: translateY(18px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fade-up {
//           animation: fadeUp 0.7s ease-out both;
//         }
//         @keyframes slideLeft {
//           from { opacity: 0; transform: translateX(-24px); }
//           to { opacity: 1; transform: translateX(0); }
//         }
//         .animate-slide-left {
//           animation: slideLeft 0.7s ease-out both;
//         }
//         @keyframes slideRight {
//           from { opacity: 0; transform: translateX(24px); }
//           to { opacity: 1; transform: translateX(0); }
//         }
//         .animate-slide-right {
//           animation: slideRight 0.7s ease-out both;
//         }
//       `}</style>
//     </main>
//   );
// };

// export default AIServicesPage;

import React from "react";

const AIServicesPage = () => {
  return (
    <main className="w-full min-h-screen text-slate-900 bg-gradient-to-b from-white via-sky-50 to-sky-100">
      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/aibanner.jpg"
            className="w-full h-full object-cover object-center"
            alt="AI Services Banner"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 flex flex-col justify-center min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] text-white">
          <span className="text-xs sm:text-sm tracking-widest text-blue-300 uppercase font-medium">
            AI & Machine Learning Services
          </span>

          <h1 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-up">
            Transform Your Business <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              With Artificial Intelligence
            </span>
          </h1>

          <p className="mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base md:text-lg text-slate-200/90 leading-relaxed animate-fade-up [animation-delay:0.12s]">
            We help enterprises adopt AI/ML, Generative AI, intelligent
            automation, and data-driven decision systems to improve accuracy,
            operational efficiency, and accelerate business growth in the
            digital age.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4 animate-fade-up [animation-delay:0.2s]">
            <a
              href="#solutions"
              className="px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm sm:text-base font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all"
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
              { value: "500+", label: "AI Models Deployed" },
              { value: "95%", label: "Accuracy Rate" },
              { value: "40%", label: "Cost Reduction" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-blue-200/80 mt-1">
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
            <span className="inline-block px-3 py-1 text-xs sm:text-sm font-medium text-blue-600 bg-blue-100 rounded-full mb-4">
              Our AI Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 animate-fade-up">
              Solutions <span className="font-light">We Offer</span>
            </h2>

            <p className="mt-4 sm:mt-5 max-w-3xl text-sm sm:text-base md:text-lg text-slate-600 animate-fade-up [animation-delay:0.1s]">
              From AI strategy to Generative AI, MLOps, NLP, and Computer Vision
              systems — we help enterprises build, deploy, and scale intelligent
              solutions tailored to their unique business challenges.
            </p>
          </div>

          <div className="mt-10 sm:mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                num: "01",
                title: "AI Strategy & Consulting",
                desc: "Identify high-value AI use cases and build a comprehensive roadmap aligned with your business goals. We assess AI readiness, define governance frameworks, and create scalable implementation strategies.",
                link: "#section-ai-strategy",
                icon: "🎯",
                gradient: "from-violet-500 to-purple-600",
              },
              {
                num: "02",
                title: "Machine Learning Engineering",
                desc: "Build production-ready ML systems for forecasting, recommendations, anomaly detection, predictive scoring, and intelligent automation. From data to deployment, we engineer complete solutions.",
                link: "#section-ml-engineering",
                icon: "⚙️",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                num: "03",
                title: "Generative AI & LLM Solutions",
                desc: "Deploy secure, enterprise-grade GenAI solutions including private RAG systems, AI copilots, intelligent chatbots, content automation, and custom LLM fine-tuning for your domain.",
                link: "#section-genai",
                icon: "🤖",
                gradient: "from-emerald-500 to-teal-500",
              },
              {
                num: "04",
                title: "Computer Vision & NLP",
                desc: "Transform unstructured data into actionable intelligence. Image classification, object detection, OCR, document understanding, sentiment analysis, and language processing at scale.",
                link: "#section-vision-nlp",
                icon: "👁️",
                gradient: "from-amber-500 to-orange-500",
              },
              {
                num: "05",
                title: "MLOps & Model Monitoring",
                desc: "Implement robust CI/CD pipelines for ML, automated model deployment, real-time monitoring, drift detection, A/B testing, and automated retraining workflows for production systems.",
                link: "#section-mlops",
                icon: "📊",
                gradient: "from-rose-500 to-pink-500",
              },
              {
                num: "06",
                title: "Data Engineering for AI",
                desc: "Build reliable, ML-ready data foundations including data pipelines, feature stores, data lakes, real-time streaming, and data quality frameworks that power AI systems.",
                link: "#section-data-engineering",
                icon: "🗄️",
                gradient: "from-indigo-500 to-blue-500",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border-2 border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 animate-fade-up"
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
          id: "section-ai-strategy",
          title: "AI Strategy & Consulting",
          bg: "bg-white",
          img: "/images/AI1.jpg",
          subtitle: "Start with Clarity, Not Experiments",
          text: "We help organizations define AI priorities, establish governance frameworks, and create scalable roadmaps that align with business objectives.",
          features: [
            "AI Readiness Assessment & Maturity Analysis",
            "Use Case Identification & Prioritization",
            "AI Governance & Ethics Framework",
            "Technology Stack Selection & Architecture",
            "Build vs Buy Decision Support",
            "Change Management & Adoption Strategy",
          ],
        },
        {
          id: "section-ml-engineering",
          title: "Machine Learning Engineering",
          bg: "bg-slate-50",
          img: "/images/AIPAGE2.png",
          subtitle: "Production-Grade ML Systems",
          text: "We design, build, and deploy scalable machine learning systems that deliver measurable business value from day one.",
          features: [
            "Predictive Analytics & Forecasting Models",
            "Recommendation Engines & Personalization",
            "Anomaly Detection & Fraud Prevention",
            "Customer Churn & Lifetime Value Prediction",
            "Demand Forecasting & Inventory Optimization",
            "Automated Decision Systems",
          ],
        },
        {
          id: "section-genai",
          title: "Generative AI & LLM Solutions",
          bg: "bg-white",
          img: "/images/AIpage3.jpg",
          subtitle: "Enterprise-Ready GenAI",
          text: "Secure, domain-aware Generative AI solutions using RAG architecture, LLM orchestration, and custom fine-tuning for your specific use cases.",
          features: [
            "Private RAG (Retrieval Augmented Generation)",
            "Custom AI Copilots & Assistants",
            "Intelligent Chatbots & Virtual Agents",
            "Content Generation & Automation",
            "Document Summarization & Analysis",
            "Code Generation & Developer Tools",
          ],
        },
        {
          id: "section-vision-nlp",
          title: "Computer Vision & NLP",
          bg: "bg-slate-50",
          img: "/images/aipage4.jpg",
          subtitle: "Unlock Unstructured Data",
          text: "Transform images, documents, and text into actionable intelligence with production-scale computer vision and natural language processing.",
          features: [
            "Image Classification & Object Detection",
            "Optical Character Recognition (OCR)",
            "Document Understanding & Extraction",
            "Sentiment Analysis & Text Classification",
            "Named Entity Recognition",
            "Speech-to-Text & Text-to-Speech",
          ],
        },
        {
          id: "section-mlops",
          title: "MLOps & Model Deployment",
          bg: "bg-white",
          img: "/images/aipage5.jpg",
          subtitle: "AI at Scale",
          text: "Automated deployment, monitoring, and lifecycle management for ML models in production with enterprise-grade reliability.",
          features: [
            "CI/CD Pipelines for ML",
            "Model Versioning & Registry",
            "Real-time Performance Monitoring",
            "Data & Model Drift Detection",
            "A/B Testing & Canary Deployments",
            "Automated Retraining Workflows",
          ],
        },
        {
          id: "section-data-engineering",
          title: "Data Engineering for AI",
          bg: "bg-slate-50",
          img: "/images/aipage6.jpg",
          subtitle: "AI-Ready Data Foundations",
          text: "Build reliable data pipelines, feature stores, and data infrastructure that power intelligent AI systems at scale.",
          features: [
            "Data Lake & Warehouse Architecture",
            "Real-time Data Streaming Pipelines",
            "Feature Store Implementation",
            "Data Quality & Governance Frameworks",
            "ETL/ELT Pipeline Development",
            "Data Catalog & Lineage Tracking",
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
                <span className="inline-block px-3 py-1 text-xs sm:text-sm font-medium text-blue-600 bg-blue-100 rounded-full mb-4">
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
                        className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5"
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
          AI TECHNOLOGY STACK
      ===================================================== */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <span className="inline-block px-3 py-1 text-xs sm:text-sm font-medium text-blue-600 bg-blue-100 rounded-full mb-4">
              Our AI Stack
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              AI{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
                Technology Stack
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-600">
              We leverage cutting-edge AI/ML frameworks, cloud platforms, and
              tools to build intelligent solutions
            </p>
          </div>

          {/* AI Frameworks & Libraries */}
          <div className="mb-10 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-4 sm:mb-6 text-center">
              AI/ML Frameworks & Libraries
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
              {[
                {
                  name: "TensorFlow",
                  icon: "🔶",
                  color: "from-orange-500 to-orange-600",
                },
                {
                  name: "PyTorch",
                  icon: "🔥",
                  color: "from-red-500 to-orange-500",
                },
                {
                  name: "Scikit-learn",
                  icon: "🔬",
                  color: "from-blue-500 to-cyan-500",
                },
                { name: "Keras", icon: "🧠", color: "from-red-500 to-red-600" },
                {
                  name: "Hugging Face",
                  icon: "🤗",
                  color: "from-yellow-500 to-orange-500",
                },
                {
                  name: "LangChain",
                  icon: "🔗",
                  color: "from-green-500 to-emerald-500",
                },
              ].map((tech, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col items-center justify-center p-4 sm:p-5 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all"
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

          {/* LLM & GenAI */}
          <div className="mb-10 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-4 sm:mb-6 text-center">
              LLM & Generative AI
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
              {[
                {
                  name: "OpenAI GPT",
                  icon: "💬",
                  color: "from-green-500 to-teal-500",
                },
                {
                  name: "Claude",
                  icon: "🤖",
                  color: "from-orange-500 to-amber-500",
                },
                {
                  name: "Llama",
                  icon: "🦙",
                  color: "from-purple-500 to-violet-500",
                },
                {
                  name: "Gemini",
                  icon: "✨",
                  color: "from-blue-500 to-indigo-500",
                },
                {
                  name: "Mistral",
                  icon: "🌊",
                  color: "from-cyan-500 to-blue-500",
                },
                {
                  name: "Cohere",
                  icon: "◈",
                  color: "from-violet-500 to-purple-500",
                },
              ].map((tech, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col items-center justify-center p-4 sm:p-5 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all"
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

          {/* Cloud AI Platforms */}
          <div className="mb-10 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-4 sm:mb-6 text-center">
              Cloud AI Platforms
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
              {[
                {
                  name: "AWS SageMaker",
                  icon: "☁️",
                  color: "from-orange-500 to-yellow-500",
                },
                {
                  name: "Azure ML",
                  icon: "🔷",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  name: "Google Vertex AI",
                  icon: "🔺",
                  color: "from-red-500 to-yellow-500",
                },
                {
                  name: "Databricks",
                  icon: "🧱",
                  color: "from-red-500 to-orange-500",
                },
                {
                  name: "Snowflake",
                  icon: "❄️",
                  color: "from-cyan-500 to-blue-500",
                },
                {
                  name: "OpenAI API",
                  icon: "🔑",
                  color: "from-green-500 to-emerald-500",
                },
              ].map((tech, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col items-center justify-center p-4 sm:p-5 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all"
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

          {/* MLOps & Data Tools */}
          <div className="mb-10 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-4 sm:mb-6 text-center">
              MLOps & Data Engineering
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
              {[
                {
                  name: "MLflow",
                  icon: "📊",
                  color: "from-blue-500 to-indigo-500",
                },
                {
                  name: "Kubeflow",
                  icon: "☸️",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  name: "Airflow",
                  icon: "🌬️",
                  color: "from-teal-500 to-cyan-500",
                },
                {
                  name: "Docker",
                  icon: "🐳",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  name: "Kubernetes",
                  icon: "⚓",
                  color: "from-blue-500 to-indigo-500",
                },
                {
                  name: "Ray",
                  icon: "☀️",
                  color: "from-yellow-500 to-orange-500",
                },
              ].map((tech, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col items-center justify-center p-4 sm:p-5 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all"
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

          {/* Vector DBs & Data Stores */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-4 sm:mb-6 text-center">
              Vector Databases & Data Stores
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
              {[
                {
                  name: "Pinecone",
                  icon: "🌲",
                  color: "from-green-500 to-emerald-500",
                },
                {
                  name: "Weaviate",
                  icon: "🔮",
                  color: "from-purple-500 to-pink-500",
                },
                {
                  name: "Chroma",
                  icon: "🎨",
                  color: "from-orange-500 to-red-500",
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
                { name: "Redis", icon: "🔴", color: "from-red-500 to-red-600" },
              ].map((tech, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col items-center justify-center p-4 sm:p-5 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all"
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
      <section className="w-full py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                CJSS for AI
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300">
              We combine deep technical expertise with industry experience to
              deliver AI solutions that create real business impact.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: "🎓",
                title: "Expert Team",
                desc: "Data scientists, ML engineers & AI architects with 10+ years experience",
              },
              {
                icon: "🏢",
                title: "Enterprise Focus",
                desc: "Built for scale, security, and compliance from day one",
              },
              {
                icon: "🚀",
                title: "Fast Delivery",
                desc: "MVP in weeks, production systems in months with agile methodology",
              },
              {
                icon: "🔒",
                title: "Secure & Compliant",
                desc: "SOC2, GDPR, HIPAA compliant AI solutions for regulated industries",
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
          INDUSTRIES WE SERVE - NEW SECTION
      ===================================================== */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Industries{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
                We Serve
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-600">
              We deliver AI solutions across diverse industries with deep domain
              expertise
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
            {[
              { name: "Financial Services", icon: "🏦" },
              { name: "Healthcare", icon: "🏥" },
              { name: "Retail & E-Commerce", icon: "🛒" },
              { name: "Manufacturing", icon: "🏭" },
              { name: "Insurance", icon: "🛡️" },
              { name: "Telecommunications", icon: "📡" },
              { name: "Energy & Utilities", icon: "⚡" },
              { name: "Logistics", icon: "🚚" },
              { name: "Media & Entertainment", icon: "🎬" },
              { name: "Real Estate", icon: "🏠" },
              { name: "Education", icon: "📚" },
              { name: "Government", icon: "🏛️" },
            ].map((industry, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-4 sm:p-5 text-center shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all"
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
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                    AI Solution
                  </span>
                </h2>

                <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed max-w-md mx-auto md:mx-0">
                  Ready to transform your business with AI? Our experts will
                  help you identify the right opportunities and build solutions
                  that deliver measurable results.
                </p>

                <div className="mt-6 h-1 w-20 sm:w-24 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mx-auto md:mx-0" />

                {/* Quick Contact Info */}
                <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start text-sm">
                  <div className="flex items-center gap-2 text-slate-400 justify-center md:justify-start">
                    <span>📧</span>
                    <span>ai@cjss.com</span>
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
                      alt="Priya - Head of AI Solutions"
                      className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover border-2 border-cyan-500/50 shadow-lg"
                    />
                    <span className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-500 border-2 border-slate-950 rounded-full"></span>
                  </div>

                  {/* DETAILS */}
                  <div className="text-center sm:text-left flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-white">
                      Priya Sharma
                    </h3>
                    <p className="text-sm text-cyan-400 font-medium">
                      Head of AI Solutions
                    </p>

                    <p className="mt-3 text-sm text-slate-300">
                      <span className="text-slate-500">Email: </span>
                      <a
                        href="mailto:priya@cjss.com"
                        className="text-cyan-400 hover:text-cyan-300 transition-colors"
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
                  href="mailto:priya@cjss.com?subject=AI%20Solutions%20Inquiry"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm sm:text-base font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
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

export default AIServicesPage;
