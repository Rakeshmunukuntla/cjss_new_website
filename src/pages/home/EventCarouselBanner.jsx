// "use client";

// import { useState, useEffect } from "react";

// export default function EventCarouselBanner({ navigateTo }) {
//   const [events, setEvents] = useState([]);
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     async function fetchEvents() {
//       try {
//         const res = await fetch("https://server-node-cjss.onrender.com/events");
//         const data = await res.json();
//         setEvents(data.events || []);
//       } catch (error) {
//         console.error("Failed to load events:", error);
//       }
//     }
//     fetchEvents();
//   }, []);

//   useEffect(() => {
//     if (events.length === 0) return;
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % events.length);
//     }, 2500);

//     return () => clearInterval(timer);
//   }, [events]);

//   if (events.length === 0) return null;

//   return (
//     <section className="relative h-[100vh] w-full overflow-hidden">
//       {events.map((slide, index) => (
//         <div
//           key={slide._id}
//           className={`
//             absolute inset-0 transition-opacity duration-[1200ms] ease-in-out
//             ${
//               index === current
//                 ? "opacity-100 pointer-events-auto"
//                 : "opacity-0 pointer-events-none"
//             }
//           `}
//         >
//           {/* Background Image */}
//           <img
//             src={slide.image}
//             alt={slide.title}
//             className="object-cover w-full h-full"
//           />

//           {/* Dark Overlay */}
//           <div className="absolute inset-0 bg-black/55" />

//           {/* Text Content */}
//           <div className="absolute inset-0 flex flex-col justify-center max-w-3xl px-12 md:px-24 text-white">
//             <h1 className="mb-4 text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-sky-300 via-sky-200 to-purple-300 bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(125,211,252,0.45)] animate-fadeInUp">
//               {slide.title}
//             </h1>

//             <p className="mb-4 text-lg md:text-2xl font-light animate-fadeInUp delay-150">
//               {slide.subtitle}
//             </p>

//             <button
//               onClick={() => navigateTo(`event-${slide._id}`)}
//               className="mt-4 w-fit px-6 py-3 text-lg font-semibold rounded-xl bg-gradient-to-r from-sky-400 to-purple-500 hover:opacity-90 transition-all animate-fadeInUp"
//             >
//               Read More →
//             </button>
//           </div>
//         </div>
//       ))}

//       {/* Indicators */}
//       <div className="absolute flex gap-3 -translate-x-1/2 bottom-8 left-1/2">
//         {events.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setCurrent(i)}
//             className="relative h-3 w-10 flex items-center justify-center"
//           >
//             <span
//               className={`
//                 block rounded-full transition-all duration-300
//                 ${
//                   current === i
//                     ? "w-10 h-3 bg-gradient-to-r from-sky-300 to-purple-300 shadow-[0_0_12px_rgba(64,200,255,0.4)]"
//                     : "w-3 h-3 bg-white/20 rounded-full hover:bg-white/50"
//                 }
//               `}
//             ></span>
//           </button>
//         ))}
//       </div>
//     </section>
//   );
// }

// "use client";

// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// export default function EventCarouselBanner() {
//   const navigate = useNavigate();
//   const [events, setEvents] = useState([]);
//   const [current, setCurrent] = useState(0);
//   const [isLoading, setIsLoading] = useState(true);
//   const [progress, setProgress] = useState(0);

//   // Fetch events
//   useEffect(() => {
//     async function fetchEvents() {
//       try {
//         setIsLoading(true);
//         const res = await fetch("https://server-node-cjss.onrender.com/events");
//         const data = await res.json();
//         setEvents(data.events || []);
//       } catch (error) {
//         console.error("Failed to load events:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     }
//     fetchEvents();
//   }, []);

//   // Auto-slide with progress bar
//   useEffect(() => {
//     if (events.length === 0) return;

//     const duration = 5000; // 5 seconds per slide
//     const interval = 50; // Update progress every 50ms
//     let progressTimer;
//     let slideTimer;

//     const startProgress = () => {
//       setProgress(0);
//       let currentProgress = 0;

//       progressTimer = setInterval(() => {
//         currentProgress += (interval / duration) * 100;
//         setProgress(currentProgress);

//         if (currentProgress >= 100) {
//           clearInterval(progressTimer);
//         }
//       }, interval);

//       slideTimer = setTimeout(() => {
//         setCurrent((prev) => (prev + 1) % events.length);
//       }, duration);
//     };

//     startProgress();

//     return () => {
//       clearInterval(progressTimer);
//       clearTimeout(slideTimer);
//     };
//   }, [current, events.length]);

//   // Handle manual navigation
//   const goToSlide = (index) => {
//     setCurrent(index);
//     setProgress(0);
//   };

//   const goToPrev = () => {
//     setCurrent((prev) => (prev - 1 + events.length) % events.length);
//     setProgress(0);
//   };

//   const goToNext = () => {
//     setCurrent((prev) => (prev + 1) % events.length);
//     setProgress(0);
//   };

//   // Loading state
//   if (isLoading) {
//     return (
//       <section className="relative h-[100vh] w-full overflow-hidden bg-slate-900 flex items-center justify-center">
//         <div className="flex flex-col items-center gap-4">
//           <div className="w-16 h-16 border-4 border-sky-500/30 border-t-sky-500 rounded-full animate-spin" />
//           <p className="text-white/60 text-sm">Loading events...</p>
//         </div>
//       </section>
//     );
//   }

//   // No events
//   if (events.length === 0) return null;

//   return (
//     <section className="relative h-[100vh] w-full overflow-hidden bg-slate-900">
//       {/* Slides */}
//       {events.map((slide, index) => (
//         <div
//           key={slide._id}
//           className={`
//             absolute inset-0 transition-all duration-1000 ease-out
//             ${
//               index === current
//                 ? "opacity-100 scale-100 pointer-events-auto"
//                 : "opacity-0 scale-105 pointer-events-none"
//             }
//           `}
//         >
//           {/* Background Image with Ken Burns effect */}
//           <div className="absolute inset-0 overflow-hidden">
//             <img
//               src={slide.image}
//               alt={slide.title}
//               className={`
//                 object-cover w-full h-full transition-transform duration-[8000ms] ease-out
//                 ${index === current ? "scale-110" : "scale-100"}
//               `}
//             />
//           </div>

//           {/* Gradient Overlays */}
//           <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

//           {/* Decorative elements */}
//           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-500 via-purple-500 to-transparent opacity-50" />
//           <div className="absolute bottom-0 left-0 w-1/3 h-1 bg-gradient-to-r from-sky-400 to-transparent opacity-30" />

//           {/* Text Content */}
//           <div className="absolute inset-0 flex flex-col justify-center max-w-4xl px-8 md:px-16 lg:px-24">
//             {/* Event badge */}
//             <div
//               className={`
//                 inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full
//                 bg-white/10 backdrop-blur-md border border-white/20 w-fit
//                 transition-all duration-700 delay-100
//                 ${
//                   index === current
//                     ? "opacity-100 translate-y-0"
//                     : "opacity-0 translate-y-4"
//                 }
//               `}
//             >
//               <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
//               <span className="text-xs font-semibold tracking-widest text-white/90 uppercase">
//                 Featured Event
//               </span>
//             </div>

//             {/* Title */}
//             <h1
//               className={`
//                 mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold
//                 leading-tight transition-all duration-700 delay-200
//                 ${
//                   index === current
//                     ? "opacity-100 translate-y-0"
//                     : "opacity-0 translate-y-6"
//                 }
//               `}
//             >
//               <span className="bg-gradient-to-r from-white via-sky-100 to-purple-200 bg-clip-text text-transparent drop-shadow-2xl">
//                 {slide.title}
//               </span>
//             </h1>

//             {/* Subtitle */}
//             <p
//               className={`
//                 mb-6 text-base sm:text-lg md:text-xl lg:text-2xl font-light text-white/80
//                 max-w-2xl leading-relaxed transition-all duration-700 delay-300
//                 ${
//                   index === current
//                     ? "opacity-100 translate-y-0"
//                     : "opacity-0 translate-y-6"
//                 }
//               `}
//             >
//               {slide.subtitle}
//             </p>

//             {/* CTA Button */}
//             <div
//               className={`
//                 transition-all duration-700 delay-400
//                 ${
//                   index === current
//                     ? "opacity-100 translate-y-0"
//                     : "opacity-0 translate-y-6"
//                 }
//               `}
//             >
//               <button
//                 onClick={() => navigate(`/events/${slide._id}`)}
//                 className="group relative inline-flex items-center gap-3 px-8 py-4 text-base font-semibold text-white rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02]"
//               >
//                 {/* Button background */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-purple-600 transition-all duration-300" />
//                 <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//                 {/* Shine effect */}
//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                   <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
//                 </div>

//                 {/* Button content */}
//                 <span className="relative z-10">Explore Event</span>
//                 <svg
//                   className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M17 8l4 4m0 0l-4 4m4-4H3"
//                   />
//                 </svg>

//                 {/* Glow effect */}
//                 <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-purple-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300 -z-10" />
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}

//       {/* Navigation Arrows */}
//       <button
//         onClick={goToPrev}
//         className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300 group"
//         aria-label="Previous slide"
//       >
//         <svg
//           className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:-translate-x-1"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M15 19l-7-7 7-7"
//           />
//         </svg>
//       </button>

//       <button
//         onClick={goToNext}
//         className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300 group"
//         aria-label="Next slide"
//       >
//         <svg
//           className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:translate-x-1"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M9 5l7 7-7 7"
//           />
//         </svg>
//       </button>

//       {/* Bottom Controls */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4">
//         {/* Progress indicators */}
//         <div className="flex items-center gap-3">
//           {events.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => goToSlide(i)}
//               className="relative group"
//               aria-label={`Go to slide ${i + 1}`}
//             >
//               <div
//                 className={`
//                 h-1.5 rounded-full transition-all duration-500 overflow-hidden
//                 ${
//                   current === i
//                     ? "w-12 bg-white/30"
//                     : "w-3 bg-white/20 hover:bg-white/40"
//                 }
//               `}
//               >
//                 {/* Progress fill */}
//                 {current === i && (
//                   <div
//                     className="h-full bg-gradient-to-r from-sky-400 to-purple-500 rounded-full transition-all duration-100 ease-linear"
//                     style={{ width: `${progress}%` }}
//                   />
//                 )}
//               </div>

//               {/* Hover tooltip */}
//               <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
//                 {i + 1} / {events.length}
//               </div>
//             </button>
//           ))}
//         </div>

//         {/* Slide counter */}
//         <div className="flex items-center gap-2 text-white/60 text-sm">
//           <span className="text-white font-semibold">
//             {String(current + 1).padStart(2, "0")}
//           </span>
//           <span className="w-8 h-px bg-white/30" />
//           <span>{String(events.length).padStart(2, "0")}</span>
//         </div>
//       </div>

//       {/* Side decoration */}
//       <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 z-10">
//         <div className="w-px h-20 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
//         <div className="writing-vertical text-xs tracking-widest text-white/40 uppercase">
//           Scroll to explore
//         </div>
//         <div className="w-px h-20 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
//       </div>

//       {/* Styles */}
//       <style>{`
//         .writing-vertical {
//           writing-mode: vertical-rl;
//           text-orientation: mixed;
//         }

//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

"use client";

import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export default function EventCarouselBanner() {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [current, setCurrent] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(null);

  useEffect(() => {
    async function fetchEvents() {
      try {
        setIsLoading(true);
        const res = await fetch("https://server-node-cjss.onrender.com/events");
        const data = await res.json();
        setEvents(data.events || []);
      } catch (error) {
        console.error("Failed to load events:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchEvents();
  }, []);

  // Auto-slide with progress - FIXED: Only runs when NOT paused
  useEffect(() => {
    if (events.length === 0 || isPaused) {
      return; // Don't run timer when paused
    }

    const duration = 6000;
    const interval = 50;
    let progressTimer;
    let slideTimer;

    setProgress(0);
    let currentProgress = 0;

    progressTimer = setInterval(() => {
      currentProgress += (interval / duration) * 100;
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(progressTimer);
      }
    }, interval);

    slideTimer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % events.length);
    }, duration);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(slideTimer);
    };
  }, [current, events.length, isPaused]);

  const goToSlide = useCallback((index) => {
    setCurrent(index);
    setProgress(0);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + events.length) % events.length);
    setProgress(0);
  }, [events.length]);

  const goToNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % events.length);
    setProgress(0);
  }, [events.length]);

  // Toggle play/pause
  const togglePlayPause = () => {
    setIsPaused((prev) => !prev);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) goToNext();
      else goToPrev();
    }
    setTouchStart(null);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "ArrowRight") goToNext();
      if (e.key === " ") {
        e.preventDefault();
        togglePlayPause();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToPrev, goToNext]);

  if (isLoading) {
    return (
      <section className="relative h-[100vh] w-full overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 flex items-center justify-center">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="relative flex flex-col items-center gap-6">
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 rounded-full border-2 border-white/10" />
            <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-sky-500 animate-spin" />
            <div
              className="absolute inset-2 rounded-full border-2 border-transparent border-t-purple-500 animate-spin"
              style={{
                animationDirection: "reverse",
                animationDuration: "1.5s",
              }}
            />
            <div
              className="absolute inset-4 rounded-full border-2 border-transparent border-t-indigo-400 animate-spin"
              style={{ animationDuration: "2s" }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-sky-400 to-purple-500 animate-pulse" />
            </div>
          </div>
          <div className="text-center">
            <p className="text-white/80 font-medium mb-1">Loading Events</p>
            <p className="text-white/40 text-sm">Please wait...</p>
          </div>
        </div>
      </section>
    );
  }

  if (events.length === 0) return null;

  return (
    <section
      className="relative h-[100vh] w-full overflow-hidden bg-slate-950"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      {events.map((slide, index) => {
        const isActive = index === current;

        return (
          <div
            key={slide._id}
            className={`
              absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
              ${isActive ? "opacity-100 z-10" : "opacity-0 z-0"}
            `}
          >
            {/* Background Image with Ken Burns effect */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={slide.image}
                alt={slide.title}
                className={`
                  object-cover w-full h-full transition-all duration-[10000ms] ease-out
                  ${
                    isActive && !isPaused
                      ? "scale-110 translate-x-2"
                      : "scale-100"
                  }
                `}
              />
            </div>

            {/* Multi-layer gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/70 to-slate-950/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30" />
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/30 via-transparent to-purple-950/20" />

            {/* Animated grain texture */}
            <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />
            </div>

            {/* Decorative light beams */}
            <div className="absolute -top-20 left-1/4 w-96 h-[600px] bg-gradient-to-b from-sky-500/10 via-transparent to-transparent rotate-12 blur-3xl" />
            <div className="absolute -top-20 right-1/3 w-64 h-[400px] bg-gradient-to-b from-purple-500/10 via-transparent to-transparent -rotate-12 blur-3xl" />

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24 xl:px-32">
              <div className="max-w-4xl">
                {/* Event badge */}
                <div
                  className={`
                    inline-flex items-center gap-3 px-5 py-2.5 mb-8 rounded-full 
                    bg-white/5 backdrop-blur-xl border border-white/10 
                    shadow-[0_8px_32px_rgba(0,0,0,0.3)] w-fit
                    transition-all duration-700 delay-100
                    ${
                      isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }
                  `}
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span
                      className={`absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75 ${
                        !isPaused ? "animate-ping" : ""
                      }`}
                    />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gradient-to-r from-sky-400 to-cyan-300" />
                  </span>
                  <span className="text-xs font-semibold tracking-[0.2em] text-white/90 uppercase">
                    {isPaused ? "Paused" : "Featured Event"}
                  </span>
                  <span className="w-px h-4 bg-white/20" />
                  <span className="text-xs text-white/60">
                    {current + 1} of {events.length}
                  </span>
                </div>

                {/* Title with gradient and glow */}
                <h1
                  className={`
                    mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black 
                    leading-[1.05] transition-all duration-700 delay-200
                    ${
                      isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }
                  `}
                >
                  <span className="relative">
                    <span className="absolute -inset-1 bg-gradient-to-r from-sky-500/20 to-purple-500/20 blur-2xl" />
                    <span className="relative bg-gradient-to-r from-white via-sky-100 to-indigo-200 bg-clip-text text-transparent">
                      {slide.title}
                    </span>
                  </span>
                </h1>

                {/* Subtitle */}
                <p
                  className={`
                    mb-10 text-lg sm:text-xl md:text-2xl font-light text-white/70 
                    max-w-2xl leading-relaxed transition-all duration-700 delay-300
                    ${
                      isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }
                  `}
                >
                  {slide.subtitle}
                </p>

                {/* CTA Buttons */}
                <div
                  className={`
                    flex flex-wrap items-center gap-4
                    transition-all duration-700 delay-400
                    ${
                      isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }
                  `}
                >
                  {/* Primary CTA */}
                  <button
                    onClick={() => navigate(`/events/${slide._id}`)}
                    className="group relative inline-flex items-center gap-3 px-8 py-4 text-base font-semibold text-white rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
                      <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
                    </div>

                    <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-b from-white/20 to-transparent opacity-50" />

                    <span className="relative z-10 flex items-center gap-3">
                      <span>Explore Event</span>
                      <svg
                        className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
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

                    <div className="absolute -inset-2 bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 -z-10" />
                  </button>

                  {/* Secondary CTA */}
                  <button
                    onClick={() => navigate("/events")}
                    className="group relative inline-flex items-center gap-3 px-8 py-4 text-base font-semibold text-white rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20" />

                    <span className="relative z-10 flex items-center gap-2">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 10h16M4 14h16M4 18h16"
                        />
                      </svg>
                      <span>View All Events</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* ============================================ */}
      {/* PREMIUM ATTRACTIVE SIDE NAVIGATION BUTTONS */}
      {/* ============================================ */}

      {/* Left Navigation Button */}
      <button
        onClick={goToPrev}
        className="group absolute left-4 md:left-8 lg:left-12 top-1/2 -translate-y-1/2 z-30 focus:outline-none"
        aria-label="Previous slide"
      >
        <div className="relative">
          {/* Outer animated ring */}
          <div className="absolute -inset-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-500 animate-spin-slow opacity-70 blur-sm" />
          </div>

          {/* Glow effect */}
          <div className="absolute -inset-4 rounded-full bg-sky-500/20 blur-xl opacity-0 group-hover:opacity-100 group-active:opacity-80 transition-all duration-300" />

          {/* Main button */}
          <div className="relative w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full overflow-hidden transition-all duration-300 group-hover:scale-110 group-active:scale-95">
            {/* Background layers */}
            <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-xl" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5" />

            {/* Animated border */}
            <div className="absolute inset-0 rounded-full p-[2px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-400 via-cyan-400 to-indigo-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-[2px] rounded-full bg-slate-900/90" />
            </div>

            {/* Shine effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden rounded-full">
              <div className="absolute -inset-full top-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:translate-x-full transition-transform duration-1000" />
            </div>

            {/* Arrow icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Arrow glow */}
                <svg
                  className="absolute w-5 h-5 md:w-6 md:h-6 text-sky-400 blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                {/* Arrow */}
                <svg
                  className="relative w-5 h-5 md:w-6 md:h-6 text-white/70 group-hover:text-white transition-all duration-300 group-hover:-translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </div>
            </div>

            {/* Pulse rings on hover */}
            <div className="absolute inset-0 rounded-full border border-sky-400/50 scale-100 opacity-0 group-hover:scale-150 group-hover:opacity-0 transition-all duration-700 group-hover:duration-1000" />
            <div className="absolute inset-0 rounded-full border border-cyan-400/30 scale-100 opacity-0 group-hover:scale-[1.8] group-hover:opacity-0 transition-all duration-700 delay-100 group-hover:duration-1000" />
          </div>

          {/* Floating particles on hover */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div className="w-1 h-1 rounded-full bg-sky-400 absolute opacity-0 group-hover:opacity-100 group-hover:-translate-x-8 group-hover:-translate-y-4 transition-all duration-500" />
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 absolute opacity-0 group-hover:opacity-100 group-hover:-translate-x-6 group-hover:translate-y-5 transition-all duration-700 delay-100" />
            <div className="w-1 h-1 rounded-full bg-indigo-400 absolute opacity-0 group-hover:opacity-100 group-hover:-translate-x-10 group-hover:translate-y-1 transition-all duration-600 delay-200" />
          </div>
        </div>
      </button>

      {/* Right Navigation Button */}
      <button
        onClick={goToNext}
        className="group absolute right-4 md:right-8 lg:right-12 top-1/2 -translate-y-1/2 z-30 focus:outline-none"
        aria-label="Next slide"
      >
        <div className="relative">
          {/* Outer animated ring */}
          <div className="absolute -inset-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-sky-500 animate-spin-slow-reverse opacity-70 blur-sm" />
          </div>

          {/* Glow effect */}
          <div className="absolute -inset-4 rounded-full bg-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 group-active:opacity-80 transition-all duration-300" />

          {/* Main button */}
          <div className="relative w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full overflow-hidden transition-all duration-300 group-hover:scale-110 group-active:scale-95">
            {/* Background layers */}
            <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-xl" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5" />

            {/* Animated border */}
            <div className="absolute inset-0 rounded-full p-[2px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-indigo-400 to-sky-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-[2px] rounded-full bg-slate-900/90" />
            </div>

            {/* Shine effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden rounded-full">
              <div className="absolute -inset-full top-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:translate-x-full transition-transform duration-1000" />
            </div>

            {/* Arrow icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Arrow glow */}
                <svg
                  className="absolute w-5 h-5 md:w-6 md:h-6 text-purple-400 blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                {/* Arrow */}
                <svg
                  className="relative w-5 h-5 md:w-6 md:h-6 text-white/70 group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>

            {/* Pulse rings on hover */}
            <div className="absolute inset-0 rounded-full border border-purple-400/50 scale-100 opacity-0 group-hover:scale-150 group-hover:opacity-0 transition-all duration-700 group-hover:duration-1000" />
            <div className="absolute inset-0 rounded-full border border-indigo-400/30 scale-100 opacity-0 group-hover:scale-[1.8] group-hover:opacity-0 transition-all duration-700 delay-100 group-hover:duration-1000" />
          </div>

          {/* Floating particles on hover */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div className="w-1 h-1 rounded-full bg-purple-400 absolute opacity-0 group-hover:opacity-100 group-hover:translate-x-8 group-hover:-translate-y-4 transition-all duration-500" />
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 absolute opacity-0 group-hover:opacity-100 group-hover:translate-x-6 group-hover:translate-y-5 transition-all duration-700 delay-100" />
            <div className="w-1 h-1 rounded-full bg-sky-400 absolute opacity-0 group-hover:opacity-100 group-hover:translate-x-10 group-hover:translate-y-1 transition-all duration-600 delay-200" />
          </div>
        </div>
      </button>

      {/* ============================================ */}
      {/* BOTTOM CONTROLS */}
      {/* ============================================ */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-6">
          {/* Thumbnail indicators */}
          <div className="flex items-center gap-2 md:gap-3 p-2 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
            {events.map((event, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`
                  group relative overflow-hidden rounded-xl transition-all duration-500
                  ${
                    current === i
                      ? "w-20 md:w-28 h-12 md:h-16"
                      : "w-12 md:w-16 h-12 md:h-16 hover:w-16 md:hover:w-20"
                  }
                `}
                aria-label={`Go to slide ${i + 1}`}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div
                  className={`
                  absolute inset-0 transition-all duration-300
                  ${
                    current === i
                      ? "bg-gradient-to-t from-sky-500/50 via-transparent to-transparent"
                      : "bg-black/50 group-hover:bg-black/30"
                  }
                `}
                />

                {current === i && (
                  <>
                    <div className="absolute inset-0 rounded-xl border-2 border-white/50" />
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 overflow-hidden rounded-b-xl">
                      <div
                        className={`h-full bg-gradient-to-r from-sky-400 to-purple-500 transition-all ease-linear ${
                          isPaused ? "" : "duration-100"
                        }`}
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </>
                )}

                {current !== i && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-white/50 group-hover:bg-white transition-colors" />
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Controls row */}
          <div className="flex items-center gap-4 px-6 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10">
            {/* Play/Pause button */}
            <button
              onClick={togglePlayPause}
              className={`
                group relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300
                ${
                  isPaused
                    ? "bg-gradient-to-r from-sky-500 to-purple-500 shadow-lg shadow-sky-500/25"
                    : "bg-white/5 hover:bg-white/10 border border-white/10"
                }
              `}
              aria-label={isPaused ? "Play" : "Pause"}
            >
              {isPaused ? (
                // Play icon
                <svg
                  className="w-5 h-5 text-white ml-0.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              ) : (
                // Pause icon
                <svg
                  className="w-5 h-5 text-white/70 group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              )}

              {/* Ripple effect when playing */}
              {!isPaused && (
                <div className="absolute inset-0 rounded-full">
                  <div className="absolute inset-0 rounded-full border border-white/20 animate-ping opacity-20" />
                </div>
              )}
            </button>

            <div className="w-px h-6 bg-white/20" />

            {/* Counter */}
            <div className="flex items-center gap-3 text-white/60 text-sm font-medium">
              <span className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">
                {String(current + 1).padStart(2, "0")}
              </span>
              <div className="w-12 h-1 bg-white/20 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r from-sky-400 to-purple-500 rounded-full ${
                    isPaused ? "" : "transition-all duration-100"
                  }`}
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="text-lg text-white/40">
                {String(events.length).padStart(2, "0")}
              </span>
            </div>

            <div className="w-px h-6 bg-white/20" />

            {/* Status indicator */}
            <div className="flex items-center gap-2">
              <div
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  isPaused ? "bg-amber-400" : "bg-emerald-400 animate-pulse"
                }`}
              />
              <span className="text-xs text-white/50 uppercase tracking-wider">
                {isPaused ? "Paused" : "Auto"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Top progress bar */}
      <div className="absolute top-0 left-0 right-0 h-1 z-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-500/30 to-transparent" />
        <div
          className={`absolute top-0 left-0 h-full bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 ${
            isPaused ? "" : "transition-all duration-100"
          }`}
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Keyboard hint */}
      <div className="absolute bottom-4 right-4 hidden lg:flex items-center gap-2 text-white/30 text-xs">
        <kbd className="px-2 py-1 rounded bg-white/5 border border-white/10">
          ←
        </kbd>
        <kbd className="px-2 py-1 rounded bg-white/5 border border-white/10">
          →
        </kbd>
        <span>Navigate</span>
        <kbd className="px-2 py-1 rounded bg-white/5 border border-white/10 ml-2">
          Space
        </kbd>
        <span>Play/Pause</span>
      </div>

      {/* Styles */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
        
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 4s linear infinite;
        }
      `}</style>
    </section>
  );
}
