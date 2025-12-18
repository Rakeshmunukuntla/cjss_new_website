// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// export default function ResourceDetailPage() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [resource, setResource] = useState(null);
//   const [related, setRelated] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const load = async () => {
//       try {
//         const res = await fetch(
//           `https://server-node-cjss.onrender.com/blogs/${id}`
//         );
//         const data = await res.json();
//         setResource(data);

//         const listRes = await fetch(
//           "https://server-node-cjss.onrender.com/blogs"
//         );
//         const all = await listRes.json();

//         setRelated(
//           all
//             .filter((r) => r.category === data.category && r._id !== data._id)
//             .slice(0, 3)
//         );
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     load();
//   }, [id]);

//   if (loading) {
//     return (
//       <section className="py-32 text-center text-slate-500">
//         Loading resource…
//       </section>
//     );
//   }

//   if (!resource) {
//     return (
//       <section className="py-32 text-center">
//         <h2 className="text-3xl font-bold text-slate-900 mb-4">
//           Resource not found
//         </h2>
//         <button
//           onClick={() => navigate("/resources")}
//           className="text-indigo-600 font-semibold"
//         >
//           ← Back to Resources
//         </button>
//       </section>
//     );
//   }

//   return (
//     <section className="relative px-4 py-24 bg-gradient-to-br from-white via-sky-50 to-indigo-50">
//       {/* soft background blobs */}
//       <div className="absolute inset-0 -z-10 overflow-hidden">
//         <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-indigo-200/30 rounded-full blur-3xl" />
//         <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-sky-200/30 rounded-full blur-3xl" />
//       </div>

//       <article className="mx-auto max-w-5xl space-y-16">
//         {/* Back */}
//         <button
//           onClick={() => navigate("/resources")}
//           className="text-sm font-semibold text-indigo-600 hover:underline"
//         >
//           ← Back to resources
//         </button>

//         {/* Hero */}
//         <header className="space-y-6">
//           <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-indigo-600">
//             {resource.category}
//           </span>

//           <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
//             {resource.title}
//           </h1>

//           <p className="max-w-3xl text-lg text-slate-600">{resource.summary}</p>

//           <div className="flex flex-wrap gap-4 text-sm text-slate-500">
//             <span className="font-semibold text-slate-700">
//               {resource.author}
//             </span>
//             <span>•</span>
//             <span>{resource.designation}</span>
//             <span>•</span>
//             <span>{resource.readTime}</span>
//             <span>•</span>
//             <span>{resource.publishedDate}</span>
//           </div>
//         </header>

//         {/* Banner */}
//         <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-xl bg-white">
//           <img
//             src={resource.banner}
//             alt={resource.title}
//             className="w-full h-[420px] object-cover"
//           />
//         </div>

//         {/* Content */}
//         <section className="prose prose-slate max-w-none prose-lg">
//           <h2>Overview</h2>
//           <p>{resource.content}</p>
//         </section>

//         {/* Info Cards */}
//         <section className="grid gap-6 md:grid-cols-4">
//           {[
//             ["Author", resource.author],
//             ["Role", resource.designation],
//             ["Published", resource.publishedDate],
//             ["Read time", resource.readTime],
//           ].map(([label, value]) => (
//             <div
//               key={label}
//               className="rounded-2xl bg-white/80 backdrop-blur border border-slate-200 p-5"
//             >
//               <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
//                 {label}
//               </p>
//               <p className="mt-2 font-semibold text-slate-900">{value}</p>
//             </div>
//           ))}
//         </section>

//         {/* Related */}
//         {related.length > 0 && (
//           <section className="space-y-8">
//             <div className="flex items-center justify-between">
//               <h3 className="text-2xl font-bold text-slate-900">
//                 Related resources
//               </h3>
//               <button
//                 onClick={() => navigate("/resources")}
//                 className="text-sm font-semibold text-indigo-600"
//               >
//                 View all
//               </button>
//             </div>

//             <div className="grid gap-6 md:grid-cols-3">
//               {related.map((item) => (
//                 <article
//                   key={item._id}
//                   onClick={() => navigate(`/resources/${item._id}`)}
//                   className="cursor-pointer group rounded-2xl overflow-hidden bg-white/90 border border-slate-200 shadow-md hover:shadow-xl transition"
//                 >
//                   <div className="h-40 overflow-hidden">
//                     <img
//                       src={item.banner}
//                       alt={item.title}
//                       className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
//                     />
//                   </div>
//                   <div className="p-5 space-y-2">
//                     <p className="text-xs uppercase tracking-widest text-indigo-600">
//                       {item.category}
//                     </p>
//                     <h4 className="font-bold text-slate-900 line-clamp-2">
//                       {item.title}
//                     </h4>
//                     <p className="text-sm text-slate-600 line-clamp-2">
//                       {item.summary}
//                     </p>
//                   </div>
//                 </article>
//               ))}
//             </div>
//           </section>
//         )}
//       </article>
//     </section>
//   );
// }
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ResourceDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [resource, setResource] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setImageLoaded(false);
      try {
        const res = await fetch(
          `https://server-node-cjss.onrender.com/blogs/${id}`
        );
        const data = await res.json();
        setResource(data);

        const listRes = await fetch(
          "https://server-node-cjss.onrender.com/blogs"
        );
        const all = await listRes.json();

        setRelated(
          all
            .filter((r) => r.category === data.category && r._id !== data._id)
            .slice(0, 3)
        );
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [id]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  // Key highlights data - you can make this dynamic from your resource data
  const keyHighlights = [
    "Comprehensive analysis of modern technology trends and best practices",
    "Practical implementation strategies for enterprise environments",
    "Insights from industry experts and real-world case studies",
    "Actionable recommendations for your organization",
  ];

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">
        <div className="text-center space-y-6">
          <div className="relative w-20 h-20 mx-auto">
            <div className="absolute inset-0 rounded-full border-2 border-slate-200"></div>
            <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-indigo-600 animate-spin"></div>
            <div
              className="absolute inset-2 rounded-full border-2 border-transparent border-t-violet-500 animate-spin"
              style={{ animationDelay: "150ms" }}
            ></div>
            <div
              className="absolute inset-4 rounded-full border-2 border-transparent border-t-purple-400 animate-spin"
              style={{ animationDelay: "300ms" }}
            ></div>
          </div>
          <p className="text-slate-500 font-medium tracking-wide">
            Loading resource…
          </p>
        </div>
      </section>
    );
  }

  if (!resource) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">
        <div className="text-center space-y-8 px-4">
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
            <svg
              className="w-12 h-12 text-slate-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="space-y-3">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
              Resource not found
            </h2>
            <p className="text-slate-500 max-w-md mx-auto">
              The resource you're looking for doesn't exist or has been moved.
            </p>
          </div>
          <button
            onClick={() => navigate("/resources")}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold rounded-2xl shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            <svg
              className="w-5 h-5 transition-transform group-hover:-translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Resources
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">
      {/* Premium background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-gradient-to-br from-indigo-100/40 via-violet-100/30 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-sky-100/40 via-cyan-100/30 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "10s", animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-gradient-to-r from-purple-100/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <article className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16 md:space-y-24">
        {/* Back Button */}
        <nav>
          <button
            onClick={() => navigate("/resources")}
            className="group inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/80 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-300"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-indigo-50 to-violet-50 group-hover:from-indigo-100 group-hover:to-violet-100 transition-colors">
              <svg
                className="w-4 h-4 text-indigo-600 transition-transform group-hover:-translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </span>
            <span className="text-sm font-semibold text-slate-700 group-hover:text-indigo-600 transition-colors">
              Back to resources
            </span>
          </button>
        </nav>

        {/* Hero Header */}
        <header className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-purple-500/10 border border-indigo-200/50">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 animate-pulse"></span>
            <span className="text-xs font-bold tracking-[0.2em] uppercase bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              {resource.category}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
            <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
              {resource.title}
            </span>
          </h1>

          <p className="max-w-3xl text-xl text-slate-600 leading-relaxed font-light">
            {resource.summary}
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-indigo-500/25">
                {resource.author?.charAt(0) || "A"}
              </div>
              <div>
                <p className="font-semibold text-slate-900">
                  {resource.author}
                </p>
                <p className="text-sm text-slate-500">{resource.designation}</p>
              </div>
            </div>

            <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>

            <div className="flex items-center gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-indigo-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {resource.publishedDate}
              </span>
              <span className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-violet-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {resource.readTime}
              </span>
            </div>
          </div>
        </header>

        {/* Premium Banner */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 via-violet-500/20 to-purple-500/20 rounded-[2rem] blur-2xl opacity-60"></div>

          <div className="relative overflow-hidden rounded-3xl border border-white/50 shadow-2xl shadow-indigo-500/10 bg-white">
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-pulse"></div>
            )}
            <img
              src={resource.banner}
              alt={resource.title}
              onLoad={() => setImageLoaded(true)}
              className={`w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover transition-all duration-700 ${
                imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          </div>
        </div>

        {/* ============================================ */}
        {/* KEY HIGHLIGHTS SECTION - Dark Premium Cards */}
        {/* ============================================ */}
        <section className="relative">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 text-xs font-bold tracking-[0.2em] uppercase text-indigo-400 bg-indigo-500/10 rounded-full border border-indigo-500/20 mb-4">
              What You'll Gain
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Key Highlights
            </h2>
          </div>

          {/* Dark Cards Grid */}
          <div className="grid gap-4 md:gap-6 md:grid-cols-2">
            {keyHighlights.map((highlight, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-slate-900 p-6 md:p-8 transition-all duration-500 hover:bg-slate-800 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1"
              >
                {/* Subtle gradient border effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/20 via-violet-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Inner border */}
                <div className="absolute inset-[1px] rounded-2xl bg-slate-900 group-hover:bg-slate-800 transition-colors duration-500"></div>

                {/* Content */}
                <div className="relative flex items-start gap-4">
                  {/* Gradient Checkmark */}
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 via-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                      <svg
                        className="w-3.5 h-3.5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Text with gradient effect */}
                  <p className="text-base md:text-lg font-medium bg-gradient-to-r from-slate-200 via-slate-100 to-slate-300 bg-clip-text text-transparent leading-relaxed">
                    {highlight}
                  </p>
                </div>

                {/* Corner glow effect on hover */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Content Section */}
        <section>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-violet-500 to-purple-500 rounded-full"></div>

            <div className="pl-8 md:pl-12 space-y-8">
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 text-xs font-bold tracking-widest uppercase text-indigo-600 bg-indigo-50 rounded-full">
                  Overview
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                  What you'll learn
                </h2>
              </div>

              <div className="prose prose-lg prose-slate max-w-none">
                <p className="text-slate-600 leading-relaxed text-lg">
                  {resource.content}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Info Cards */}
        <section>
          <div className="grid gap-4 sm:gap-6 grid-cols-2 lg:grid-cols-4">
            {[
              {
                label: "Author",
                value: resource.author,
                icon: "👤",
                gradient: "from-indigo-500 to-blue-500",
              },
              {
                label: "Role",
                value: resource.designation,
                icon: "💼",
                gradient: "from-violet-500 to-purple-500",
              },
              {
                label: "Published",
                value: resource.publishedDate,
                icon: "📅",
                gradient: "from-pink-500 to-rose-500",
              },
              {
                label: "Read time",
                value: resource.readTime,
                icon: "⏱️",
                gradient: "from-amber-500 to-orange-500",
              },
            ].map(({ label, value, icon, gradient }) => (
              <div
                key={label}
                className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200/80 p-6 hover:border-transparent hover:shadow-xl transition-all duration-500"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>
                <span className="text-2xl mb-4 block">{icon}</span>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2">
                  {label}
                </p>
                <p className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {value}
                </p>
                <div
                  className={`absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 rounded-full blur-xl transition-opacity duration-500`}
                ></div>
              </div>
            ))}
          </div>
        </section>

        {/* Share Section */}
        <section>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 p-8 md:p-12">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>

            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Found this helpful?
                </h3>
                <p className="text-indigo-100">
                  Share it with your network and help others learn too.
                </p>
              </div>

              <div className="flex items-center gap-3">
                {["twitter", "linkedin", "facebook"].map((platform) => (
                  <button
                    key={platform}
                    className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                  >
                    <span className="sr-only">Share on {platform}</span>
                    {platform === "twitter" && (
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    )}
                    {platform === "linkedin" && (
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    )}
                    {platform === "facebook" && (
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        {related.length > 0 && (
          <section className="space-y-10">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <span className="inline-block px-3 py-1 text-xs font-bold tracking-widest uppercase text-violet-600 bg-violet-50 rounded-full">
                  Keep Reading
                </span>
                <h3 className="text-3xl font-bold text-slate-900">
                  Related resources
                </h3>
              </div>
              <button
                onClick={() => navigate("/resources")}
                className="group hidden sm:inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-300"
              >
                <span className="font-semibold text-slate-700 group-hover:text-indigo-600">
                  View all
                </span>
                <svg
                  className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            <div className="grid gap-6 md:gap-8 md:grid-cols-3">
              {related.map((item) => (
                <article
                  key={item._id}
                  onClick={() => navigate(`/resources/${item._id}`)}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-lg hover:shadow-2xl hover:border-indigo-200 transition-all duration-500 hover:-translate-y-2">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.banner}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 text-xs font-bold tracking-wide uppercase bg-white/90 backdrop-blur-sm text-indigo-600 rounded-full shadow-sm">
                          {item.category}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                        <span className="inline-flex items-center gap-2 text-white font-semibold">
                          Read article
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <h4 className="font-bold text-lg text-slate-900 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
                        {item.summary}
                      </p>
                      <div className="pt-4 flex items-center justify-between border-t border-slate-100">
                        <span className="text-xs font-medium text-slate-500">
                          {item.readTime}
                        </span>
                        <span className="text-xs font-medium text-indigo-600 group-hover:underline">
                          Read more →
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <button
              onClick={() => navigate("/resources")}
              className="sm:hidden w-full py-4 rounded-2xl border-2 border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 font-semibold text-slate-700 hover:text-indigo-600 transition-all duration-300"
            >
              View all resources
            </button>
          </section>
        )}
      </article>
    </section>
  );
}
