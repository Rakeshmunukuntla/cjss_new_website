// import { useEffect, useState } from "react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Autoplay, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";

// const mentors = [
//   {
//     id: 1,
//     name: "Rohit Sharma",
//     role: "Senior UI/UX Lead",
//     image: "/images/rahul.png",
//     shortStory: "How I transformed my design journey at CJSS.",
//     fullStory: "Rohit's story begins with passion and continuous learning...",
//   },
//   {
//     id: 2,
//     name: "Anjali Rao",
//     role: "Tech Lead – SAP Commerce",
//     image: "/images/priya.png",
//     shortStory: "Growing from developer to tech lead.",
//     fullStory: "Anjali’s growth reflects strong engineering leadership...",
//   },
//   {
//     id: 3,
//     name: "Kiran Kumar",
//     role: "Backend Engineering Lead",
//     image: "/images/raman.png",
//     shortStory: "Built enterprise systems from the ground up.",
//     fullStory: "Kiran focuses on scalable and resilient architectures...",
//   },
// ];

// export default function MentorStoriesSection() {
//   const [openStory, setOpenStory] = useState(null);
//   const [typingText, setTypingText] = useState("");
//   const fullText = "Career Growth & Mentor Stories";

//   /* Typewriter */
//   useEffect(() => {
//     let i = 0;
//     const t = setInterval(() => {
//       if (i <= fullText.length) {
//         setTypingText(fullText.slice(0, i));
//         i++;
//       } else clearInterval(t);
//     }, 40);
//     return () => clearInterval(t);
//   }, []);

//   return (
//     <section className="relative w-full px-4 py-24 sm:px-6 bg-gradient-to-b from-sky-50 via-white to-white">
//       {/* Heading */}
//       <h2 className="mb-14 text-3xl sm:text-5xl font-extrabold text-center">
//         <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
//           {typingText}
//         </span>
//         <span className="ml-1 border-r-2 border-cyan-500 animate-pulse" />
//       </h2>

//       {/* Swiper */}
//       <Swiper
//         modules={[Autoplay, Pagination]}
//         slidesPerView={1}
//         spaceBetween={28}
//         autoplay={{ delay: 3500 }}
//         speed={700}
//         pagination={{ clickable: true, el: ".mentor-pagination" }}
//         breakpoints={{
//           640: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//         }}
//         className="mx-auto max-w-7xl"
//       >
//         {mentors.map((mentor) => (
//           <SwiperSlide key={mentor.id}>
//             <div
//               className="group relative bg-white rounded-3xl p-6 shadow-lg border border-slate-100
//                          transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
//             >
//               {/* Hover glow */}
//               <div
//                 className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100
//                               bg-gradient-to-br from-cyan-200/40 to-blue-200/40 blur-xl transition"
//               />

//               {/* Image */}
//               <div className="relative z-10 w-full overflow-hidden rounded-2xl">
//                 <img
//                   src={mentor.image}
//                   alt={mentor.name}
//                   className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//               </div>

//               {/* Content */}
//               <div className="relative z-10 mt-5 text-center">
//                 <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
//                   {mentor.name}
//                 </h3>
//                 <p className="text-sm text-slate-500">{mentor.role}</p>
//                 <p className="mt-3 text-sm text-slate-600">
//                   {mentor.shortStory}
//                 </p>

//                 <button
//                   onClick={() => setOpenStory(mentor)}
//                   className="mt-5 inline-flex items-center justify-center
//                              px-6 py-2 rounded-full text-sm font-semibold
//                              text-white bg-gradient-to-r from-blue-600 to-cyan-500
//                              hover:opacity-90 transition"
//                 >
//                   Read Story →
//                 </button>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Pagination */}
//       <div className="mt-8 mentor-pagination" />

//       {/* Modal */}
//       {openStory && (
//         <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
//           <div
//             className="absolute inset-0 bg-black/40 backdrop-blur-sm"
//             onClick={() => setOpenStory(null)}
//           />

//           <div className="relative bg-white rounded-3xl max-w-3xl w-full p-8 shadow-2xl">
//             <button
//               onClick={() => setOpenStory(null)}
//               className="absolute right-4 top-4 text-xl text-slate-500 hover:text-black"
//             >
//               ✕
//             </button>

//             <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
//               {openStory.name}
//             </h3>
//             <p className="text-slate-500 mb-6">{openStory.role}</p>
//             <p className="text-slate-700 leading-relaxed">
//               {openStory.fullStory}
//             </p>
//           </div>
//         </div>
//       )}

//       {/* Pagination styles */}
//       <style>{`
//         .mentor-pagination {
//           display: flex;
//           justify-content: center;
//           gap: 12px;
//         }
//         .mentor-pagination .swiper-pagination-bullet {
//           width: 10px;
//           height: 10px;
//           background: #cbd5e1;
//           opacity: 1;
//           border-radius: 50%;
//         }
//         .mentor-pagination .swiper-pagination-bullet-active {
//           width: 36px;
//           height: 10px;
//           border-radius: 999px;
//           background: linear-gradient(90deg,#2563eb,#06b6d4);
//         }
//       `}</style>
//     </section>
//   );
// }

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const mentors = [
  {
    id: 1,
    name: "Rohit Sharma",
    role: "Senior UI/UX Lead",
    image: "/images/rahul.png",
    shortStory: "How I transformed my design journey at CJSS.",
    fullStory: `When I joined CJSS 5 years ago, I was a junior designer with big dreams but limited experience. The company saw potential in me and invested in my growth through mentorship programs, advanced training, and challenging projects.

My breakthrough came when I was assigned to lead the redesign of a major enterprise application. The project required me to collaborate with stakeholders across three continents, manage a team of 4 designers, and deliver within tight deadlines.

The support I received from leadership was incredible. They encouraged experimentation, celebrated failures as learning opportunities, and always pushed me to think bigger. Today, I lead a team of 12 talented designers and have contributed to products used by millions of users worldwide.

What I love most about CJSS is the culture of continuous learning. Whether it's attending design conferences, participating in hackathons, or simply sharing knowledge with peers, there's always an opportunity to grow.`,
    yearsAtCompany: "5 Years",
    achievements: [
      "Led 15+ enterprise design projects",
      "Mentored 20+ junior designers",
      "Won Best Innovation Award 2023",
      "Speaker at UX Summit 2024",
    ],
    quote:
      "Design is not just what it looks like, it's how it makes people feel.",
  },
  {
    id: 2,
    name: "Anjali Rao",
    role: "Tech Lead – SAP Commerce",
    image: "/images/priya.png",
    shortStory: "Growing from developer to tech lead.",
    fullStory: `My journey at CJSS started as a fresh graduate with a computer science degree and zero industry experience. I remember feeling overwhelmed during my first week, but my mentor took me under his wing and showed me that every expert was once a beginner.

The structured learning path at CJSS was instrumental in my growth. I started with foundational SAP Commerce training, then gradually took on more complex modules. Within 18 months, I was leading small feature developments, and by year 3, I was architecting entire commerce solutions.

One of my proudest moments was leading the migration of a Fortune 500 client's e-commerce platform to SAP Commerce Cloud. The project involved 8 team members, 6 months of development, and resulted in a 40% improvement in site performance.

CJSS believes in growing leaders from within. The leadership development programs, technical certifications, and exposure to global clients have shaped me into the professional I am today. I'm now passionate about giving back by mentoring the next generation of tech leaders.`,
    yearsAtCompany: "6 Years",
    achievements: [
      "Certified SAP Commerce Architect",
      "Delivered 25+ successful implementations",
      "Reduced deployment time by 60%",
      "Built internal training curriculum",
    ],
    quote:
      "The best code is the one that solves real problems for real people.",
  },
  {
    id: 3,
    name: "Kiran Kumar",
    role: "Backend Engineering Lead",
    image: "/images/raman.png",
    shortStory: "Built enterprise systems from the ground up.",
    fullStory: `I've always been fascinated by the invisible infrastructure that powers modern applications. When I joined CJSS as a backend developer, I found the perfect environment to pursue this passion.

My first major project involved building a microservices architecture for a healthcare client. The system needed to handle millions of transactions daily while maintaining strict compliance standards. The challenge was immense, but so was the support from my team.

Over the years, I've had the opportunity to work with cutting-edge technologies – from container orchestration with Kubernetes to event-driven architectures with Apache Kafka. CJSS encourages engineers to stay ahead of the curve and provides resources for continuous learning.

What sets CJSS apart is the emphasis on engineering excellence. We don't just write code; we craft solutions. Code reviews, architectural discussions, and knowledge sharing sessions are integral parts of our culture.

Today, I lead a team of 15 backend engineers, and we've built systems that process over 50 million requests daily. But what gives me the most satisfaction is seeing junior developers grow into confident engineers under my mentorship.`,
    yearsAtCompany: "7 Years",
    achievements: [
      "Architected systems handling 50M+ daily requests",
      "AWS Solutions Architect certified",
      "Published 5 technical papers",
      "Built company's API gateway platform",
    ],
    quote: "Scalability is not an afterthought; it's a mindset.",
  },
  {
    id: 4,
    name: "Priya Menon",
    role: "Data Science Manager",
    image: "/images/rahul.png",
    shortStory: "From analyst to leading AI initiatives.",
    fullStory: `My journey into data science was unconventional. I started as a business analyst at CJSS, crunching numbers in Excel spreadsheets. But I was curious about the patterns hidden in data and how they could drive business decisions.

CJSS recognized my curiosity and supported my transition into data science. They funded my certifications, provided access to learning platforms, and most importantly, gave me opportunities to apply my learning on real projects.

My first ML project was a customer churn prediction model for a telecom client. It was challenging – dealing with imbalanced datasets, feature engineering, and explaining model decisions to non-technical stakeholders. But the thrill of seeing our model improve retention by 25% was unforgettable.

Today, I lead a team of data scientists and ML engineers working on some of the most exciting AI projects – from computer vision applications to natural language processing solutions. We're not just building models; we're transforming how businesses operate.

What I value most about CJSS is the freedom to innovate. We're encouraged to explore new ideas, experiment with emerging technologies, and push the boundaries of what's possible with data.`,
    yearsAtCompany: "4 Years",
    achievements: [
      "Built ML models saving clients $2M+ annually",
      "Led company's AI Center of Excellence",
      "Tensorflow and Azure ML certified",
      "Patent holder for predictive algorithm",
    ],
    quote: "Data tells stories; our job is to listen and translate.",
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "DevOps Architect",
    image: "/images/priya.png",
    shortStory: "Transforming deployment from days to minutes.",
    fullStory: `When I joined CJSS, deployments were manual, error-prone, and took days. I saw an opportunity to transform how we deliver software and pitched my ideas to leadership. To my surprise, they not only listened but gave me the resources to make it happen.

I started by implementing CI/CD pipelines for a single project. The results were immediate – deployment time reduced from 2 days to 30 minutes, and errors dropped by 90%. Word spread, and soon teams across the organization wanted to adopt the new practices.

Over the next few years, I built CJSS's entire DevOps infrastructure – from container platforms to monitoring systems to security scanning tools. We went from deploying once a month to multiple times a day.

The culture at CJSS made this transformation possible. Leadership trusts engineers to make decisions, provides necessary resources, and celebrates innovation. There's no bureaucracy blocking good ideas.

Today, as a DevOps Architect, I design systems that enable hundreds of developers to ship code confidently. I also mentor teams on DevOps best practices and help clients modernize their delivery pipelines.`,
    yearsAtCompany: "5 Years",
    achievements: [
      "Reduced deployment time by 98%",
      "Kubernetes and Docker certified",
      "Built zero-downtime deployment system",
      "Implemented security-first DevSecOps",
    ],
    quote:
      "Automation is not about replacing humans; it's about freeing them to do meaningful work.",
  },
  {
    id: 6,
    name: "Sneha Patel",
    role: "Product Manager",
    image: "/images/raman.png",
    shortStory: "Bridging technology and business outcomes.",
    fullStory: `I never planned to become a product manager. I started as a QA engineer at CJSS, testing features and reporting bugs. But I found myself constantly asking "why" – why are we building this? Why do users need it? What problem does it solve?

My manager noticed my curiosity and encouraged me to explore product management. CJSS has this amazing internal mobility program that allows employees to transition between roles. I shadowed product managers, took courses, and eventually moved into a PM role.

The transition wasn't easy. I had to learn new skills – user research, market analysis, stakeholder management, roadmap planning. But CJSS invested in my development through training programs and assigned me a mentor who guided me through the challenges.

My first product launch was nerve-wracking but exhilarating. Seeing users engage with something we built, hearing their feedback, and iterating to make it better – that's what product management is all about.

Today, I manage products used by millions of users. I work with engineering, design, marketing, and sales teams to deliver value to customers. It's complex, challenging, and incredibly rewarding.`,
    yearsAtCompany: "6 Years",
    achievements: [
      "Launched 8 successful products",
      "Increased user engagement by 150%",
      "CSPO and PMI-ACP certified",
      "Built product analytics framework",
    ],
    quote:
      "Great products are built by understanding people, not just requirements.",
  },
];

// Modal Component using Portal - Light Theme
const MentorModal = ({ mentor, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const modalContent = (
    <div
      className="fixed inset-0 z-[9999] flex items-start justify-center overflow-y-auto"
      style={{ paddingTop: "100px", paddingBottom: "40px" }}
    >
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />

      {/* Modal Content - Light Theme */}
      <div className="relative z-10 w-full max-w-xl mx-4 mb-10 bg-white shadow-2xl sm:max-w-3xl rounded-3xl animate-modalSlideIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute z-20 flex items-center justify-center w-10 h-10 text-2xl transition-all rounded-full right-4 top-4 text-slate-400 hover:text-slate-700 hover:bg-slate-100"
        >
          ✕
        </button>

        {/* Header Section - Gradient */}
        <div className="relative p-6 overflow-hidden sm:p-8 rounded-t-3xl bg-gradient-to-r from-blue-500 to-cyan-500">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <img
                src={mentor.image}
                alt={mentor.name}
                className="object-cover w-24 h-24 border-4 border-white rounded-full shadow-lg sm:w-32 sm:h-32"
              />
            </div>

            {/* Name & Role */}
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
                {mentor.name}
              </h3>
              <p className="mt-1 text-lg text-white/90">{mentor.role}</p>
              <div className="flex items-center justify-center gap-2 mt-3 sm:justify-start">
                <span className="px-3 py-1 text-sm font-medium text-blue-700 bg-white rounded-full">
                  {mentor.yearsAtCompany}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 sm:p-8">
          {/* Quote */}
          <blockquote className="relative p-4 mb-6 italic border-l-4 border-blue-500 rounded-r-lg bg-gradient-to-r from-blue-50 to-cyan-50">
            <span className="absolute text-4xl -left-1 -top-2 text-blue-300">
              "
            </span>
            <p className="text-slate-600">{mentor.quote}</p>
          </blockquote>

          {/* Full Story */}
          <div className="mb-8">
            <h4 className="mb-4 text-lg font-bold text-slate-800">
              My Journey
            </h4>
            <div className="space-y-4 text-sm leading-relaxed sm:text-base text-slate-600">
              {mentor.fullStory.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h4 className="mb-4 text-lg font-bold text-slate-800">
              Key Achievements
            </h4>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {mentor.achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 border rounded-xl bg-slate-50 border-slate-100"
                >
                  <span className="flex items-center justify-center flex-shrink-0 w-8 h-8 text-sm font-bold text-white rounded-full bg-gradient-to-r from-blue-500 to-cyan-500">
                    {index + 1}
                  </span>
                  <span className="text-sm text-slate-700">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-modalSlideIn {
          animation: modalSlideIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );

  // Use portal to render modal at document body level
  return createPortal(modalContent, document.body);
};

export default function MentorStoriesSection({ onModalOpen }) {
  const [openStory, setOpenStory] = useState(null);
  const [typingText, setTypingText] = useState("");
  const fullText = "Career Growth & Mentor Stories";

  // Notify parent when modal opens/closes
  useEffect(() => {
    if (onModalOpen) {
      onModalOpen(openStory !== null);
    }
  }, [openStory, onModalOpen]);

  /* Typewriter */
  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      if (i <= fullText.length) {
        setTypingText(fullText.slice(0, i));
        i++;
      } else clearInterval(t);
    }, 40);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <section className="relative w-full px-4 py-24 sm:px-6 bg-gradient-to-b from-sky-50 via-white to-white">
        {/* Heading */}
        <h2 className="text-3xl font-extrabold text-center mb-14 sm:text-5xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            {typingText}
          </span>
          <span className="ml-1 border-r-2 border-cyan-500 animate-pulse" />
        </h2>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={28}
          autoplay={{ delay: 3500 }}
          speed={700}
          pagination={{ clickable: true, el: ".mentor-pagination" }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mx-auto max-w-7xl"
        >
          {mentors.map((mentor) => (
            <SwiperSlide key={mentor.id}>
              <div
                className="group relative bg-white rounded-3xl p-6 shadow-lg border border-slate-100
                           transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100
                                bg-gradient-to-br from-cyan-200/40 to-blue-200/40 blur-xl transition"
                />

                {/* Image */}
                <div className="relative z-10 w-full overflow-hidden rounded-2xl">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="object-cover w-full transition-transform duration-500 h-52 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 mt-5 text-center">
                  <h3 className="text-lg font-semibold sm:text-xl text-slate-900">
                    {mentor.name}
                  </h3>
                  <p className="text-sm text-slate-500">{mentor.role}</p>
                  <p className="mt-3 text-sm text-slate-600">
                    {mentor.shortStory}
                  </p>

                  <button
                    onClick={() => setOpenStory(mentor)}
                    className="mt-5 inline-flex items-center justify-center
                               px-6 py-2 rounded-full text-sm font-semibold
                               text-white bg-gradient-to-r from-blue-600 to-cyan-500
                               hover:opacity-90 transition"
                  >
                    Read Story →
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination */}
        <div className="mt-8 mentor-pagination" />

        {/* Pagination styles */}
        <style>{`
          .mentor-pagination {
            display: flex;
            justify-content: center;
            gap: 12px;
          }
          .mentor-pagination .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background: #cbd5e1;
            opacity: 1;
            border-radius: 50%;
          }
          .mentor-pagination .swiper-pagination-bullet-active {
            width: 36px;
            height: 10px;
            border-radius: 999px;
            background: linear-gradient(90deg,#2563eb,#06b6d4);
          }
        `}</style>
      </section>

      {/* Modal rendered via Portal - outside of blur wrapper */}
      {openStory && (
        <MentorModal mentor={openStory} onClose={() => setOpenStory(null)} />
      )}
    </>
  );
}
