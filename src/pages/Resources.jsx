// import { useEffect, useMemo, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { RESOURCE_CATEGORIES } from "../Constants";

// export const ResourcesPage = () => {
//   const navigate = useNavigate(); // ✅ correct navigation hook
//   const [selectedCategory, setSelectedCategory] = useState("blogs");
//   const [resources, setResources] = useState([]);

//   useEffect(() => {
//     fetch("https://server-node-cjss.onrender.com/blogs")
//       .then((res) => res.json())
//       .then(setResources)
//       .catch(console.error);
//   }, []);

//   const filteredResources = useMemo(
//     () => resources.filter((r) => r.category === selectedCategory),
//     [resources, selectedCategory]
//   );

//   return (
//     <section className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-indigo-50 px-4 py-20 md:px-8">
//       <div className="mx-auto max-w-7xl grid gap-14 lg:grid-cols-[280px_1fr]">
//         {/* ---------- Sidebar ---------- */}
//         <aside className="lg:sticky lg:top-28 space-y-10">
//           <div>
//             <p className="text-xs font-semibold tracking-[0.35em] uppercase text-indigo-600 mb-4">
//               Categories
//             </p>

//             <div className="space-y-3">
//               {RESOURCE_CATEGORIES.map((cat) => (
//                 <button
//                   key={cat.id}
//                   onClick={() => setSelectedCategory(cat.id)}
//                   className={`
//                     w-full px-5 py-4 rounded-2xl text-left
//                     transition-all duration-300 border
//                     ${
//                       selectedCategory === cat.id
//                         ? "bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-500/20"
//                         : "bg-white/80 border-slate-200 text-slate-700 hover:border-indigo-300"
//                     }
//                   `}
//                 >
//                   <div className="flex items-center gap-3 font-semibold">
//                     <span className="text-xl">{cat.icon}</span>
//                     {cat.label}
//                   </div>
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="rounded-3xl bg-white/80 backdrop-blur border border-slate-200 p-6">
//             <p className="text-sm text-slate-500">Resources available</p>
//             <p className="mt-2 text-4xl font-bold text-slate-900">
//               {filteredResources.length}
//             </p>
//             <p className="text-xs tracking-widest text-slate-400 uppercase">
//               {selectedCategory}
//             </p>
//           </div>
//         </aside>

//         {/* ---------- Content ---------- */}
//         <main className="space-y-10">
//           <header>
//             <p className="text-xs tracking-[0.4em] uppercase text-indigo-600">
//               Library
//             </p>
//             <h1 className="mt-3 text-4xl md:text-5xl font-bold text-slate-900">
//               {selectedCategory === "whitepapers"
//                 ? "Whitepapers"
//                 : selectedCategory === "publications"
//                 ? "Publications"
//                 : "Blogs"}
//             </h1>
//             <p className="mt-3 max-w-2xl text-slate-600">
//               Deep insights, practical guidance, and expert perspectives from
//               our engineering teams.
//             </p>
//           </header>

//           {/* ---------- Cards ---------- */}
//           <div className="grid gap-8 sm:grid-cols-2">
//             {filteredResources.map((r) => (
//               <article
//                 key={r._id}
//                 onClick={() => navigate(`/resources/${r._id}`)} // ✅ FIXED URL
//                 className="
//                   cursor-pointer group
//                   rounded-3xl bg-white/85 backdrop-blur
//                   border border-slate-200
//                   shadow-[0_20px_50px_rgba(15,23,42,0.08)]
//                   transition-all duration-500
//                   hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(15,23,42,0.15)]
//                 "
//               >
//                 {/* Banner */}
//                 <div className="relative h-44 rounded-t-3xl overflow-hidden">
//                   <img
//                     src={r.banner}
//                     alt={r.title}
//                     className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent" />
//                 </div>

//                 {/* Content */}
//                 <div className="p-6 space-y-4">
//                   <span className="inline-block text-xs font-semibold tracking-widest uppercase text-indigo-600">
//                     {r.category}
//                   </span>

//                   <h3 className="text-xl font-bold text-slate-900 leading-snug">
//                     {r.title}
//                   </h3>

//                   <p className="text-sm text-slate-600 line-clamp-2">
//                     {r.summary}
//                   </p>

//                   <div className="flex flex-wrap gap-3 text-xs text-slate-500 pt-3 border-t">
//                     <span className="font-semibold text-slate-700">
//                       {r.author}
//                     </span>
//                     <span>•</span>
//                     <span>{r.readTime}</span>
//                     <span>•</span>
//                     <span>{r.publishedDate}</span>
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </div>

//           {filteredResources.length === 0 && (
//             <p className="text-center text-slate-500 py-12">
//               No resources found in this category.
//             </p>
//           )}
//         </main>
//       </div>
//     </section>
//   );
// };

// export default ResourcesPage;
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RESOURCE_CATEGORIES } from "../Constants";

export const ResourcesPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("blogs");
  const [resources, setResources] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch("https://server-node-cjss.onrender.com/blogs")
      .then((res) => res.json())
      .then((data) => {
        setResources(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  const filteredResources = useMemo(() => {
    let filtered = resources.filter((r) => r.category === selectedCategory);
    if (searchQuery.trim()) {
      filtered = filtered.filter(
        (r) =>
          r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          r.summary?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          r.author?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return filtered;
  }, [resources, selectedCategory, searchQuery]);

  const getCategoryStyle = (category) => {
    const styles = {
      blogs: {
        gradient: "from-blue-600 to-cyan-500",
        lightGradient: "from-blue-500/10 to-cyan-500/10",
        bg: "bg-blue-500",
        lightBg: "bg-blue-50",
        border: "border-blue-200",
        text: "text-blue-600",
        icon: "✍️",
        title: "Blogs & Articles",
      },
      whitepapers: {
        gradient: "from-violet-600 to-purple-500",
        lightGradient: "from-violet-500/10 to-purple-500/10",
        bg: "bg-violet-500",
        lightBg: "bg-violet-50",
        border: "border-violet-200",
        text: "text-violet-600",
        icon: "📋",
        title: "Whitepapers",
      },
      publications: {
        gradient: "from-emerald-600 to-teal-500",
        lightGradient: "from-emerald-500/10 to-teal-500/10",
        bg: "bg-emerald-500",
        lightBg: "bg-emerald-50",
        border: "border-emerald-200",
        text: "text-emerald-600",
        icon: "📚",
        title: "Publications",
      },
    };
    return styles[category] || styles.blogs;
  };

  const currentStyle = getCategoryStyle(selectedCategory);

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50/50 to-cyan-50/50">
      {/* =====================================================
          COMPACT HERO
      ===================================================== */}
      <section className="relative pt-8 pb-6 border-b border-slate-200/60">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Left: Title & Search */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${currentStyle.gradient} flex items-center justify-center shadow-lg`}
                >
                  <span className="text-white text-lg">📖</span>
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
                    Resources
                  </h1>
                  <p className="text-sm text-slate-500">
                    Insights & knowledge from our experts
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Search */}
            <div className="w-full lg:w-96">
              <div className="relative">
                <svg
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all shadow-sm"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 mt-5 overflow-x-auto scrollbar-hide pb-1">
            {RESOURCE_CATEGORIES.map((cat) => {
              const catStyle = getCategoryStyle(cat.id);
              const isActive = selectedCategory === cat.id;
              const count = resources.filter(
                (r) => r.category === cat.id
              ).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`
                    flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap
                    transition-all duration-300
                    ${
                      isActive
                        ? `bg-gradient-to-r ${catStyle.gradient} text-white shadow-lg shadow-blue-500/20`
                        : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                    }
                  `}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                  <span
                    className={`px-2 py-0.5 text-xs rounded-full ${
                      isActive ? "bg-white/20" : "bg-slate-100"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          MAIN CONTENT - VISIBLE ON LOAD
      ===================================================== */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Results Info */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <span className={`text-2xl`}>{currentStyle.icon}</span>
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  {currentStyle.title}
                </h2>
                <p className="text-sm text-slate-500">
                  {filteredResources.length}{" "}
                  {filteredResources.length === 1 ? "resource" : "resources"}
                  {searchQuery && ` for "${searchQuery}"`}
                </p>
              </div>
            </div>

            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                Clear search
              </button>
            )}
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white border border-slate-200 overflow-hidden animate-pulse"
                >
                  <div className="h-44 bg-slate-100" />
                  <div className="p-5 space-y-3">
                    <div className="h-3 bg-slate-100 rounded w-1/4" />
                    <div className="h-5 bg-slate-100 rounded w-3/4" />
                    <div className="h-3 bg-slate-100 rounded w-full" />
                    <div className="h-3 bg-slate-100 rounded w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Resources Grid */}
          {!isLoading && filteredResources.length > 0 && (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredResources.map((r, idx) => {
                const style = getCategoryStyle(r.category);
                return (
                  <article
                    key={r._id}
                    onClick={() => navigate(`/resources/${r._id}`)}
                    className="group cursor-pointer rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 hover:-translate-y-1 animate-fade-up"
                    style={{ animationDelay: `${idx * 0.03}s` }}
                  >
                    {/* Image */}
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={r.banner}
                        alt={r.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold text-white bg-gradient-to-r ${style.gradient} shadow-md`}
                        >
                          {style.icon} {r.category}
                        </span>
                      </div>

                      {/* Read Time */}
                      <div className="absolute top-3 right-3">
                        <span className="flex items-center gap-1 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-xs font-medium text-slate-700">
                          <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {r.readTime}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-slate-900 leading-snug mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {r.title}
                      </h3>

                      <p className="text-sm text-slate-500 line-clamp-2 mb-4">
                        {r.summary}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                        <div className="flex items-center gap-2.5">
                          <div
                            className={`w-8 h-8 rounded-lg bg-gradient-to-br ${style.gradient} flex items-center justify-center text-white text-xs font-bold shadow-sm`}
                          >
                            {r.author?.charAt(0)}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-slate-800">
                              {r.author}
                            </p>
                            <p className="text-xs text-slate-400">
                              {r.publishedDate}
                            </p>
                          </div>
                        </div>

                        <div
                          className={`flex items-center gap-1 ${style.text} text-sm font-semibold group-hover:gap-2 transition-all`}
                        >
                          Read
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
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}

          {/* Empty State */}
          {!isLoading && filteredResources.length === 0 && (
            <div className="text-center py-16">
              <div className="w-20 h-20 mx-auto mb-5 rounded-2xl bg-slate-100 flex items-center justify-center">
                <span className="text-4xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                No resources found
              </h3>
              <p className="text-slate-500 max-w-sm mx-auto mb-6">
                {searchQuery
                  ? `No results for "${searchQuery}" in ${currentStyle.title}`
                  : `No ${selectedCategory} available yet`}
              </p>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className={`px-5 py-2.5 bg-gradient-to-r ${currentStyle.gradient} text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all`}
                >
                  Clear Search
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          COMPACT NEWSLETTER CTA
      ===================================================== */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div
            className={`relative rounded-2xl overflow-hidden bg-gradient-to-r ${currentStyle.gradient} p-6 sm:p-8`}
          >
            {/* Pattern */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: "24px 24px",
              }}
            />

            <div className="relative flex flex-col sm:flex-row items-center gap-6">
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                  📬 Stay Updated
                </h3>
                <p className="text-white/80 text-sm">
                  Get the latest insights delivered to your inbox
                </p>
              </div>

              <form className="flex w-full sm:w-auto gap-2">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="flex-1 sm:w-56 px-4 py-2.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/60 text-sm focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-white text-slate-900 font-semibold text-sm rounded-xl hover:bg-slate-50 transition-all shadow-lg"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STYLES
      ===================================================== */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fadeUp 0.4s ease-out both;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </main>
  );
};

export default ResourcesPage;
