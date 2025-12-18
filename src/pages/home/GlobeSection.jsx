// "use client";

// import { useEffect, useRef, useState } from "react";

// export default function HeroSection() {
//   const [visible, setVisible] = useState(false);
//   const ref = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => entry.isIntersecting && setVisible(true),
//       { threshold: 0.5 }
//     );
//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="relative isolate min-h-screen flex items-center justify-center overflow-hidden">
//       {/* ================= BACKGROUND ================= */}
//       <div className="absolute inset-0 z-0 pointer-events-none">
//         {/* Base gradient */}
//         <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-blue-100 to-blue-300" />

//         {/* Grid */}
//         <svg
//           className="absolute inset-0 w-full h-full"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <defs>
//             <pattern
//               id="grid"
//               width="64"
//               height="64"
//               patternUnits="userSpaceOnUse"
//             >
//               <path
//                 d="M64 0H0V64"
//                 fill="none"
//                 stroke="rgba(15,23,42,0.08)"
//                 strokeWidth="1"
//               />
//             </pattern>
//           </defs>
//           <rect width="100%" height="100%" fill="url(#grid)" />
//         </svg>

//         {/* ================= BRAIN NETWORK ================= */}
//         <svg
//           className="absolute inset-0 w-full h-full"
//           viewBox="0 0 1200 800"
//           preserveAspectRatio="xMidYMid meet"
//         >
//           <defs>
//             <filter id="glow">
//               <feGaussianBlur stdDeviation="3" />
//             </filter>
//           </defs>

//           {/* Connections */}
//           {[
//             "M280 300 L420 220 L560 300",
//             "M420 220 L560 160 L700 240",
//             "M560 300 L700 240 L840 320",
//             "M520 420 L700 320 L880 420",
//             "M360 460 L520 420 L700 480",
//           ].map((d, i) => (
//             <path
//               key={i}
//               d={d}
//               fill="none"
//               stroke="rgba(99,102,241,0.55)"
//               strokeWidth="3"
//               strokeLinecap="round"
//             />
//           ))}

//           {/* Animated signals */}
//           {["M280 300 L420 220 L560 300", "M520 420 L700 320 L880 420"].map(
//             (d, i) => (
//               <path
//                 key={`pulse-${i}`}
//                 d={d}
//                 fill="none"
//                 stroke="#22d3ee"
//                 strokeWidth="2"
//                 filter="url(#glow)"
//               >
//                 <animate
//                   attributeName="stroke-dasharray"
//                   values="0,300;300,0"
//                   dur="2.5s"
//                   repeatCount="indefinite"
//                 />
//               </path>
//             )
//           )}

//           {/* Neurons */}
//           {[
//             [280, 300, 6],
//             [420, 220, 9],
//             [560, 160, 7],
//             [700, 240, 10],
//             [560, 300, 8],
//             [700, 320, 7],
//             [840, 320, 9],
//             [520, 420, 8],
//             [700, 480, 7],
//             [360, 460, 6],
//             [880, 420, 8],
//           ].map(([x, y, r], i) => (
//             <circle key={i} cx={x} cy={y} r={r} fill="#6366f1">
//               <animate
//                 attributeName="r"
//                 values={`${r};${r + 3};${r}`}
//                 dur={`${2 + i * 0.25}s`}
//                 repeatCount="indefinite"
//               />
//               <animate
//                 attributeName="opacity"
//                 values="0.6;1;0.6"
//                 dur={`${2 + i * 0.25}s`}
//                 repeatCount="indefinite"
//               />
//             </circle>
//           ))}
//         </svg>

//         {/* Noise */}
//         <svg className="absolute inset-0 w-full h-full opacity-[0.035]">
//           <filter id="noise">
//             <feTurbulence
//               type="fractalNoise"
//               baseFrequency="0.9"
//               numOctaves="2"
//             />
//           </filter>
//           <rect width="100%" height="100%" filter="url(#noise)" />
//         </svg>
//       </div>

//       {/* ================= CONTENT FOCUS ================= */}
//       <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//         <div className="w-[110%] max-w-5xl h-[60%] bg-white/80 rounded-full blur-3xl" />
//       </div>

//       {/* ================= CONTENT ================= */}
//       <div
//         ref={ref}
//         className={`relative z-10 max-w-4xl px-6 text-center transition-all duration-1000 ${
//           visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//         }`}
//       >
//         <span className="block text-xs font-semibold tracking-[0.3em] text-blue-600 uppercase">
//           GLOBAL REACH
//         </span>

//         <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight text-slate-900">
//           Customer
//           <br />
//           Journey
//           <br />
//           <span className="shimmer-text inline-block">Smart Solutions</span>
//         </h1>

//         <p className="mt-8 text-lg md:text-xl leading-relaxed text-slate-600 max-w-3xl mx-auto">
//           We design and engineer scalable digital platforms using cloud, AI, and
//           modern architectures — delivering seamless experiences worldwide.
//         </p>
//       </div>

//       {/* ================= STYLES ================= */}
//       <style>{`
//         .shimmer-text {
//           background: linear-gradient(
//             110deg,
//             #2563eb 40%,
//             #22d3ee 50%,
//             #2563eb 60%
//           );
//           background-size: 200% auto;
//           background-clip: text;
//           -webkit-background-clip: text;
//           color: transparent;
//           animation: shimmer 2.5s ease-out 1;
//         }

//         @keyframes shimmer {
//           0% { background-position: -100% center; }
//           100% { background-position: 200% center; }
//         }
//       `}</style>
//     </section>
//   );
// }
"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const ref = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Advanced Particle System
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationId;
    let particles = [];
    let glowParticles = [];
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Create main particles
    const createParticles = () => {
      particles = [];
      const count = Math.floor((canvas.width * canvas.height) / 12000);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 2.5 + 0.5,
          baseSize: Math.random() * 2.5 + 0.5,
          hue: 220 + Math.random() * 60,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.02 + Math.random() * 0.02,
        });
      }
    };

    // Create glowing orbs
    const createGlowParticles = () => {
      glowParticles = [];
      for (let i = 0; i < 8; i++) {
        glowParticles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          size: 100 + Math.random() * 150,
          hue: 200 + Math.random() * 80,
          alpha: 0.03 + Math.random() * 0.04,
        });
      }
    };

    createParticles();
    createGlowParticles();

    const animate = () => {
      time += 0.01;

      // Clear with slight trail effect
      ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw glowing orbs
      glowParticles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce
        if (p.x < -p.size || p.x > canvas.width + p.size) p.vx *= -1;
        if (p.y < -p.size || p.y > canvas.height + p.size) p.vy *= -1;

        // Mouse influence
        const dx = mousePos.x * canvas.width - p.x;
        const dy = mousePos.y * canvas.height - p.y;
        p.x += dx * 0.001;
        p.y += dy * 0.001;

        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.size
        );
        gradient.addColorStop(0, `hsla(${p.hue}, 80%, 60%, ${p.alpha})`);
        gradient.addColorStop(
          0.5,
          `hsla(${p.hue}, 70%, 50%, ${p.alpha * 0.5})`
        );
        gradient.addColorStop(1, `hsla(${p.hue}, 60%, 40%, 0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      // Draw connections first (behind particles)
      particles.forEach((p, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const distance = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (distance < 120) {
            const alpha = 0.15 * (1 - distance / 120);
            const gradient = ctx.createLinearGradient(p.x, p.y, p2.x, p2.y);
            gradient.addColorStop(0, `hsla(${p.hue}, 70%, 55%, ${alpha})`);
            gradient.addColorStop(1, `hsla(${p2.hue}, 70%, 55%, ${alpha})`);

            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      // Update and draw particles
      particles.forEach((p) => {
        // Pulse animation
        p.pulse += p.pulseSpeed;
        p.size = p.baseSize + Math.sin(p.pulse) * 0.5;

        // Mouse attraction
        const dx = mousePos.x * canvas.width - p.x;
        const dy = mousePos.y * canvas.height - p.y;
        const dist = Math.hypot(dx, dy);

        if (dist < 200) {
          p.vx += dx * 0.00008;
          p.vy += dy * 0.00008;
        }

        p.x += p.vx;
        p.y += p.vy;

        // Damping
        p.vx *= 0.99;
        p.vy *= 0.99;

        // Wrap around edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Draw particle with glow
        const particleGradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.size * 3
        );
        particleGradient.addColorStop(0, `hsla(${p.hue}, 80%, 60%, 0.8)`);
        particleGradient.addColorStop(0.5, `hsla(${p.hue}, 70%, 50%, 0.3)`);
        particleGradient.addColorStop(1, `hsla(${p.hue}, 60%, 40%, 0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = particleGradient;
        ctx.fill();

        // Core of particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 90%, 70%, 0.9)`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, [mousePos]);

  return (
    <section className="relative isolate min-h-screen flex items-center justify-center overflow-hidden">
      {/* ================= LAYERED BACKGROUND ================= */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient with aurora effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/80 to-indigo-100" />

        {/* Aurora waves */}
        <div className="absolute inset-0 aurora-container overflow-hidden">
          <div className="aurora aurora-1" />
          <div className="aurora aurora-2" />
          <div className="aurora aurora-3" />
        </div>

        {/* Interactive gradient orbs */}
        <div
          className="absolute w-[1000px] h-[1000px] rounded-full blur-[120px] transition-all duration-700 ease-out pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(99,102,241,0.2) 0%, rgba(139,92,246,0.1) 50%, transparent 70%)",
            left: `calc(${mousePos.x * 100}% - 500px)`,
            top: `calc(${mousePos.y * 100}% - 500px)`,
          }}
        />
        <div
          className="absolute w-[800px] h-[800px] rounded-full blur-[100px] transition-all duration-1000 ease-out pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(34,211,238,0.15) 0%, rgba(6,182,212,0.08) 50%, transparent 70%)",
            right: `calc(${(1 - mousePos.x) * 80}% - 400px)`,
            bottom: `calc(${(1 - mousePos.y) * 80}% - 400px)`,
          }}
        />

        {/* Particle canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full z-10"
        />

        {/* Light rays */}
        <div className="absolute inset-0 light-rays pointer-events-none" />

        {/* Center spotlight */}
        <div
          className="absolute inset-0 z-20 pointer-events-none transition-all duration-500"
          style={{
            background: `radial-gradient(ellipse 60% 50% at ${
              50 + (mousePos.x - 0.5) * 10
            }% ${
              50 + (mousePos.y - 0.5) * 10
            }%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 30%, rgba(255,255,255,0.3) 60%, transparent 80%)`,
          }}
        />
      </div>

      {/* ================= FLOATING 3D ELEMENTS ================= */}
      {/* Floating rings */}
      <div
        className="absolute top-[8%] left-[8%] floating-ring ring-1"
        style={{
          transform: `translate(${(mousePos.x - 0.5) * 30}px, ${
            (mousePos.y - 0.5) * 30
          }px)`,
        }}
      >
        <div className="ring-inner" />
      </div>
      <div
        className="absolute top-[15%] right-[12%] floating-ring ring-2"
        style={{
          transform: `translate(${(mousePos.x - 0.5) * -25}px, ${
            (mousePos.y - 0.5) * 25
          }px)`,
        }}
      >
        <div className="ring-inner" />
      </div>
      <div
        className="absolute bottom-[20%] left-[10%] floating-ring ring-3"
        style={{
          transform: `translate(${(mousePos.x - 0.5) * 20}px, ${
            (mousePos.y - 0.5) * -20
          }px)`,
        }}
      >
        <div className="ring-inner" />
      </div>
      <div
        className="absolute bottom-[15%] right-[8%] floating-ring ring-4"
        style={{
          transform: `translate(${(mousePos.x - 0.5) * -35}px, ${
            (mousePos.y - 0.5) * -30
          }px)`,
        }}
      >
        <div className="ring-inner" />
      </div>

      {/* Glowing orbs */}
      <div
        className="absolute top-[25%] left-[20%] glow-orb orb-1"
        style={{
          transform: `translate(${(mousePos.x - 0.5) * 40}px, ${
            (mousePos.y - 0.5) * 40
          }px)`,
        }}
      />
      <div
        className="absolute top-[30%] right-[25%] glow-orb orb-2"
        style={{
          transform: `translate(${(mousePos.x - 0.5) * -30}px, ${
            (mousePos.y - 0.5) * 30
          }px)`,
        }}
      />
      <div
        className="absolute bottom-[30%] left-[30%] glow-orb orb-3"
        style={{
          transform: `translate(${(mousePos.x - 0.5) * 35}px, ${
            (mousePos.y - 0.5) * -35
          }px)`,
        }}
      />
      <div
        className="absolute bottom-[25%] right-[20%] glow-orb orb-4"
        style={{
          transform: `translate(${(mousePos.x - 0.5) * -25}px, ${
            (mousePos.y - 0.5) * -25
          }px)`,
        }}
      />

      {/* Hexagon decorations */}
      <svg
        className="absolute top-[5%] right-[5%] w-40 h-40 hexagon-float opacity-20"
        viewBox="0 0 100 100"
      >
        <polygon
          points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
          fill="none"
          stroke="url(#hex-gradient)"
          strokeWidth="1"
        />
        <defs>
          <linearGradient id="hex-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        className="absolute bottom-[10%] left-[5%] w-32 h-32 hexagon-float-reverse opacity-15"
        viewBox="0 0 100 100"
      >
        <polygon
          points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
          fill="none"
          stroke="url(#hex-gradient)"
          strokeWidth="1"
        />
      </svg>

      {/* ================= CONTENT ================= */}
      <div
        ref={ref}
        className={`relative z-30 max-w-4xl px-6 text-center transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Animated badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/70 backdrop-blur-md border border-white/50 shadow-lg shadow-indigo-500/10 mb-6 badge-glow">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gradient-to-r from-blue-500 to-cyan-500"></span>
          </span>
          <span className="text-xs font-semibold tracking-[0.25em] text-slate-700 uppercase">
            GLOBAL REACH
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
          <span className="text-slate-900 drop-shadow-sm">Customer</span>
          <br />
          <span className="text-slate-900 drop-shadow-sm">Journey</span>
          <br />
          <span className="shimmer-text inline-block">Smart Solutions</span>
        </h1>

        <p className="mt-8 text-lg md:text-xl leading-relaxed text-slate-600 max-w-3xl mx-auto">
          We design and engineer scalable digital platforms using cloud, AI, and
          modern architectures — delivering seamless experiences worldwide.
        </p>

        {/* Animated underline */}
        <div className="mt-10 flex justify-center">
          <div className="animated-line" />
        </div>
      </div>

      {/* ================= MOUSE FOLLOWER ================= */}
      <div
        className="fixed w-6 h-6 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100 ease-out hidden md:block"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.8) 0%, transparent 70%)",
          left: mousePos.x * window.innerWidth - 12,
          top: mousePos.y * window.innerHeight - 12,
          transform: "scale(1)",
        }}
      />

      {/* ================= STYLES ================= */}
      <style>{`
        /* Shimmer text effect */
        .shimmer-text {
          background: linear-gradient(
            120deg,
            #2563eb 0%,
            #7c3aed 25%,
            #22d3ee 50%,
            #7c3aed 75%,
            #2563eb 100%
          );
          background-size: 300% auto;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          animation: shimmer 4s ease-in-out infinite;
        }

        @keyframes shimmer {
          0%, 100% { background-position: 0% center; }
          50% { background-position: 100% center; }
        }

        /* Aurora effect */
        .aurora-container {
          filter: blur(60px);
          opacity: 0.5;
        }

        .aurora {
          position: absolute;
          width: 150%;
          height: 50%;
          background: linear-gradient(
            180deg,
            transparent,
            rgba(99, 102, 241, 0.15),
            rgba(139, 92, 246, 0.1),
            rgba(34, 211, 238, 0.15),
            transparent
          );
          animation: aurora-wave 15s ease-in-out infinite;
        }

        .aurora-1 {
          top: 0;
          left: -25%;
          animation-delay: 0s;
        }
        .aurora-2 {
          top: 20%;
          left: -25%;
          animation-delay: -5s;
          opacity: 0.7;
        }
        .aurora-3 {
          top: 40%;
          left: -25%;
          animation-delay: -10s;
          opacity: 0.5;
        }

        @keyframes aurora-wave {
          0%, 100% { 
            transform: translateX(0) rotate(-5deg) scaleY(1);
          }
          50% { 
            transform: translateX(25%) rotate(5deg) scaleY(1.2);
          }
        }

        /* Light rays */
        .light-rays {
          background: 
            linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.1) 45%, transparent 50%),
            linear-gradient(225deg, transparent 40%, rgba(255,255,255,0.08) 45%, transparent 50%),
            linear-gradient(315deg, transparent 40%, rgba(255,255,255,0.06) 45%, transparent 50%);
          animation: light-shift 20s ease-in-out infinite;
        }

        @keyframes light-shift {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }

        /* Floating rings */
        .floating-ring {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          border: 2px solid transparent;
          background: linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.05)) padding-box,
                      linear-gradient(135deg, rgba(99,102,241,0.4), rgba(34,211,238,0.2)) border-box;
          transition: transform 0.3s ease-out;
          animation: float-ring 8s ease-in-out infinite;
        }

        .ring-inner {
          position: absolute;
          inset: 8px;
          border-radius: 50%;
          border: 1px solid rgba(99,102,241,0.2);
        }

        .ring-1 { animation-delay: 0s; }
        .ring-2 { 
          width: 60px; 
          height: 60px; 
          animation-delay: -2s;
          animation-duration: 10s;
        }
        .ring-3 { 
          width: 70px; 
          height: 70px; 
          animation-delay: -4s;
          animation-duration: 9s;
        }
        .ring-4 { 
          width: 90px; 
          height: 90px; 
          animation-delay: -6s;
          animation-duration: 11s;
        }

        @keyframes float-ring {
          0%, 100% { 
            transform: translateY(0) rotate(0deg);
            opacity: 0.4;
          }
          50% { 
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.7;
          }
        }

        /* Glowing orbs */
        .glow-orb {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          transition: transform 0.2s ease-out;
          animation: glow-pulse 4s ease-in-out infinite;
        }

        .orb-1 {
          background: radial-gradient(circle, #6366f1 0%, transparent 70%);
          box-shadow: 0 0 30px 15px rgba(99,102,241,0.3);
        }
        .orb-2 {
          background: radial-gradient(circle, #22d3ee 0%, transparent 70%);
          box-shadow: 0 0 30px 15px rgba(34,211,238,0.3);
          animation-delay: -1s;
        }
        .orb-3 {
          background: radial-gradient(circle, #a855f7 0%, transparent 70%);
          box-shadow: 0 0 30px 15px rgba(168,85,247,0.3);
          animation-delay: -2s;
        }
        .orb-4 {
          background: radial-gradient(circle, #3b82f6 0%, transparent 70%);
          box-shadow: 0 0 30px 15px rgba(59,130,246,0.3);
          animation-delay: -3s;
        }

        @keyframes glow-pulse {
          0%, 100% { 
            transform: scale(1);
            opacity: 0.6;
          }
          50% { 
            transform: scale(1.5);
            opacity: 1;
          }
        }

        /* Hexagon float */
        .hexagon-float {
          animation: hex-float 12s ease-in-out infinite;
        }
        .hexagon-float-reverse {
          animation: hex-float 15s ease-in-out infinite reverse;
        }

        @keyframes hex-float {
          0%, 100% { 
            transform: translateY(0) rotate(0deg);
          }
          50% { 
            transform: translateY(-15px) rotate(30deg);
          }
        }

        /* Badge glow */
        .badge-glow {
          animation: badge-glow 3s ease-in-out infinite;
        }

        @keyframes badge-glow {
          0%, 100% { 
            box-shadow: 0 4px 20px rgba(99,102,241,0.1);
          }
          50% { 
            box-shadow: 0 4px 30px rgba(99,102,241,0.25);
          }
        }

        /* Animated underline */
        .animated-line {
          width: 100px;
          height: 4px;
          background: linear-gradient(90deg, #6366f1, #22d3ee, #6366f1);
          background-size: 200% 100%;
          border-radius: 2px;
          animation: line-flow 3s ease-in-out infinite;
        }

        @keyframes line-flow {
          0%, 100% { 
            background-position: 0% center;
            width: 80px;
          }
          50% { 
            background-position: 100% center;
            width: 120px;
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .floating-ring,
          .glow-orb,
          .hexagon-float,
          .hexagon-float-reverse {
            display: none;
          }
          
          .aurora-container {
            opacity: 0.3;
          }
        }
      `}</style>
    </section>
  );
}
