"use client";

import { useState, useEffect } from "react";

export const HeroSection = () => {
  const textLines = ["Commerce.", "Experience.", "Technology.", "Delivered."];
  const images = [
    "/images/E-Commerce Illustration Kit-01.png",
    "/images/E-Commerce Illustration Kit-02.png",
    "/images/E-Commerce Illustration Kit-03.png",
    "/images/E-Commerce Illustration Kit-04.png",
    "/images/E-Commerce Illustration Kit-05.png",
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [completedLines, setCompletedLines] = useState([]);

  /* Typing Animation */
  useEffect(() => {
    if (currentLineIndex >= textLines.length) return;

    const currentLine = textLines[currentLineIndex];
    let timer;

    if (isTyping) {
      if (displayedText.length < currentLine.length) {
        timer = setTimeout(() => {
          setDisplayedText((prev) => prev + currentLine[prev.length]);
        }, 100);
      } else {
        timer = setTimeout(() => {
          if (currentLineIndex < textLines.length - 1) {
            setCompletedLines((prev) => [...prev, currentLine]);
            setDisplayedText("");
            setCurrentLineIndex((prev) => prev + 1);
          } else {
            setCompletedLines((prev) => [...prev, currentLine]);
            setDisplayedText("");
            setIsTyping(false);
          }
        }, 900);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, currentLineIndex, isTyping]);

  /* Image Carousel Animation */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="
        relative flex items-center justify-center
        min-h-[85vh] md:min-h-screen
        px-4 sm:px-6 lg:px-10
        pt-20 pb-20
        overflow-hidden
        bg-gradient-to-br from-white via-[#f6f8fb] to-[#eef2f6]
      "
    >
      {/* WHITE Background Animations */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {/* Soft blobs */}
        <div className="absolute top-[-20%] right-[-25%] w-[600px] h-[600px] bg-blue-300/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-[-25%] left-[-20%] w-[600px] h-[600px] bg-purple-300/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/3 left-1/2 w-[450px] h-[450px] bg-cyan-300/20 rounded-full blur-3xl -translate-x-1/2 animate-blob animation-delay-4000" />

        {/* Light glow spots */}
        <div
          className="absolute top-1/4 right-10 w-[260px] h-[260px] rounded-full blur-2xl opacity-40 animate-pulse"
          style={{
            background:
              "radial-gradient(circle, rgba(0,180,255,0.4), transparent 70%)",
            animationDuration: "4s",
          }}
        />

        <div
          className="absolute bottom-1/3 left-12 w-[320px] h-[320px] rounded-full blur-2xl opacity-35 animate-pulse"
          style={{
            background:
              "radial-gradient(circle, rgba(140,120,255,0.35), transparent 70%)",
            animationDuration: "5s",
            animationDelay: "1s",
          }}
        />

        {/* Soft grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(0deg, transparent 24%, rgba(0,100,255,0.08) 25%, rgba(0,100,255,0.08) 26%, transparent 27%), linear-gradient(90deg, transparent 24%, rgba(0,180,255,0.08) 25%, rgba(0,180,255,0.08) 26%, transparent 27%)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div className="text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-semibold border rounded-full text-blue-700 bg-blue-50 border-blue-200 backdrop-blur-sm animate-fadeIn">
              <span className="relative flex w-3 h-3">
                <span className="absolute inline-flex w-full h-full rounded-full opacity-75 bg-blue-400 animate-ping"></span>
                <span className="relative inline-flex w-3 h-3 rounded-full bg-blue-500"></span>
              </span>
              <span className="uppercase tracking-[0.18em]">
                Smart Digital Innovation
              </span>
            </div>

            {/* Typing Title */}
            <h1
              className="
                text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                font-extrabold leading-snug
                mb-6 text-gray-900
                min-h-[150px]
              "
            >
              {completedLines.map((line, idx) => (
                <div key={idx} className="text-gray-900">
                  {line}
                </div>
              ))}

              {isTyping && displayedText && (
                <div className="text-gray-900">
                  {displayedText}
                  <span className="animate-blink text-blue-500">|</span>
                </div>
              )}
            </h1>

            {/* Subtitle */}
            <p className="max-w-xl mb-8 text-gray-600 text-base md:text-lg leading-relaxed animate-slideUp">
              Accelerating modern brands with next-gen commerce platforms, cloud
              engineering, AI solutions, and high-performance experience design.
            </p>
          </div>

          {/* IMAGE CAROUSEL */}
          <div
            className="
              relative h-[260px] sm:h-[340px] md:h-[420px] lg:h-[520px]
              flex items-center justify-center animate-fadeIn
            "
            style={{ animationDelay: "0.6s" }}
          >
            <div className="relative w-full h-full rounded-[2rem] bg-white backdrop-blur-xl border border-gray-200 shadow-xl p-6 flex items-center justify-center overflow-hidden">
              {images.map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  className={`absolute w-full h-full object-contain transition-opacity duration-1000 ${
                    idx === currentImageIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}

              {/* Carousel Dots */}
              <div className="absolute z-10 flex gap-2 -translate-x-1/2 bottom-4 left-1/2">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === currentImageIndex
                        ? "bg-blue-500 w-8"
                        : "bg-gray-400/50 hover:bg-gray-600/70 w-3"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
