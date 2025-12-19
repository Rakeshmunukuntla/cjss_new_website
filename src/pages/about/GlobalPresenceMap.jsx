// import { useEffect, useRef, useState } from "react";
// import Globe from "react-globe.gl";

// /* ---------------- Helpers ---------------- */
// const countryCodeToEmoji = (code) =>
//   code
//     .toUpperCase()
//     .replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt(0)));

// /* ---------------- Office Data ---------------- */
// const OFFICES = [
//   {
//     id: "hyderabad",
//     name: "CJSS Hyderabad",
//     country: "IN",
//     lat: 17.4366,
//     lng: 78.3644,
//     color: "#06b6d4",
//   },
//   {
//     id: "singapore",
//     name: "CJSS Singapore",
//     country: "SG",
//     lat: 1.3521,
//     lng: 103.8198,
//     color: "#06b6d4",
//   },
// ];

// export default function GlobalPresenceMerged() {
//   const globeRef = useRef();
//   const [mounted, setMounted] = useState(false);

//   const [points, setPoints] = useState(
//     OFFICES.map((o) => ({
//       ...o,
//       altitude: 0.02,
//     }))
//   );

//   // 1. Ensure we only render on the client (fixes window issues)
//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   // 2. Bounce Animation
//   const phaseRef = useRef(0);
//   useEffect(() => {
//     if (!mounted) return;

//     let raf = 0;
//     const animate = () => {
//       phaseRef.current += 0.03;
//       setPoints((prev) =>
//         prev.map((p, i) => ({
//           ...p,
//           altitude:
//             0.015 + 0.015 * Math.abs(Math.sin(phaseRef.current + i * 0.8)),
//         }))
//       );
//       raf = requestAnimationFrame(animate);
//     };
//     raf = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(raf);
//   }, [mounted]);

//   // 3. Auto-Rotate
//   useEffect(() => {
//     if (!mounted) return;

//     // Small timeout to allow canvas to init
//     const timeout = setTimeout(() => {
//       const g = globeRef.current;
//       if (!g) return;

//       const controls = g.controls();
//       if (controls) {
//         controls.autoRotate = true;
//         controls.autoRotateSpeed = 0.5;
//         controls.enableZoom = false;
//         controls.enableDamping = true;
//         controls.dampingFactor = 0.08;
//       }
//     }, 1000);

//     return () => clearTimeout(timeout);
//   }, [mounted]);

//   const arcs = [
//     {
//       startLat: OFFICES[0].lat,
//       startLng: OFFICES[0].lng,
//       endLat: OFFICES[1].lat,
//       endLng: OFFICES[1].lng,
//       color: ["#06b6d4", "#3b82f6"],
//       stroke: 0.8,
//     },
//   ];

//   const focusOn = (lat, lng, altitude = 2.4) => {
//     globeRef.current?.pointOfView({ lat, lng, altitude }, 900);
//   };

//   // Prevent SSR rendering issues
//   if (!mounted) return <div className="h-[680px] w-full" />;

//   return (
//     <div className="relative w-full h-[680px] flex items-center justify-center overflow-hidden">
//       <Globe
//         ref={globeRef}
//         width={900}
//         height={900}
//         // Transparent background so the blue gradient of the parent section shows through
//         backgroundColor="rgba(0,0,0,0)"
//         // FIX: Use a reliable CDN URL first to ensure it loads.
//         // Once this works, you can switch back to "/map3.jpg" if that file exists in your public folder.
//         globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
//         bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
//         // Atmosphere
//         showAtmosphere={true}
//         // FIX: Use HEX Color. Three.js ignores Alpha in strings here.
//         atmosphereColor="#38bdf8"
//         atmosphereAltitude={0.15}
//         // Points
//         pointsData={points}
//         pointLat={(obj) => obj.lat}
//         pointLng={(obj) => obj.lng}
//         pointAltitude={(obj) => obj.altitude}
//         pointColor={(obj) => obj.color}
//         pointRadius={0.7}
//         pointLabel={(obj) =>
//           `<div style="font-family:sans-serif; padding:6px 10px; color:white; font-weight:bold; background:rgba(15, 23, 42, 0.8); border:1px solid rgba(255,255,255,0.2); border-radius:6px; box-shadow: 0 4px 6px rgba(0,0,0,0.3);">${obj.name}</div>`
//         }
//         onPointClick={(obj) => focusOn(obj.lat, obj.lng, 2.2)}
//         // Arcs
//         arcsData={arcs}
//         arcStartLat={(obj) => obj.startLat}
//         arcStartLng={(obj) => obj.startLng}
//         arcEndLat={(obj) => obj.endLat}
//         arcEndLng={(obj) => obj.endLng}
//         arcColor={(obj) => obj.color}
//         arcStroke={(obj) => obj.stroke ?? 1}
//         arcDashLength={0.4}
//         arcDashGap={0.6}
//         arcDashInitialGap={() => Math.random() * 2}
//         arcDashAnimateTime={2000}
//       />

//       {/* Right side floating buttons */}
//       <div className="absolute right-4 md:right-10 top-[30%] flex flex-col gap-5 z-30">
//         {OFFICES.map((loc) => (
//           <button
//             key={loc.id}
//             onClick={() => focusOn(loc.lat, loc.lng, 2.2)}
//             onMouseEnter={() => focusOn(loc.lat, loc.lng, 2.6)}
//             className="group flex items-center gap-4 min-w-[240px] px-5 py-4
//                      bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl
//                      shadow-2xl shadow-black/40 transition-all duration-300
//                      hover:bg-blue-900/40 hover:scale-105 hover:border-cyan-500/50 hover:shadow-cyan-500/20"
//           >
//             <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/5 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/30 transition-colors">
//               <span className="text-xl">{countryCodeToEmoji(loc.country)}</span>
//             </div>

//             <div className="flex-1 text-left">
//               <div className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
//                 {loc.name}
//               </div>
//               <div className="text-xs font-semibold text-slate-400 tracking-widest group-hover:text-slate-300">
//                 {loc.country.toUpperCase()}
//               </div>
//             </div>

//             <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }
import { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";

/* ---------------- WebGL Detector (FIX) ---------------- */
function isWebGLAvailable() {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

/* ---------------- Helpers ---------------- */
const countryCodeToEmoji = (code) =>
  code
    .toUpperCase()
    .replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt(0)));

/* ---------------- Office Data ---------------- */
const OFFICES = [
  {
    id: "hyderabad",
    name: "CJSS Hyderabad",
    country: "IN",
    lat: 17.4366,
    lng: 78.3644,
    color: "#06b6d4",
  },
  {
    id: "singapore",
    name: "CJSS Singapore",
    country: "SG",
    lat: 1.3521,
    lng: 103.8198,
    color: "#06b6d4",
  },
];

export default function GlobalPresenceMerged() {
  const globeRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [webglSupported, setWebglSupported] = useState(false);

  const [points, setPoints] = useState(
    OFFICES.map((o) => ({ ...o, altitude: 0.02 }))
  );

  /* ---------------- Client + WebGL Guard ---------------- */
  useEffect(() => {
    setMounted(true);
    setWebglSupported(isWebGLAvailable());
  }, []);

  /* ---------------- Bounce Animation ---------------- */
  const phaseRef = useRef(0);
  useEffect(() => {
    if (!mounted || !webglSupported) return;

    let raf;
    const animate = () => {
      phaseRef.current += 0.03;
      setPoints((prev) =>
        prev.map((p, i) => ({
          ...p,
          altitude:
            0.015 + 0.015 * Math.abs(Math.sin(phaseRef.current + i * 0.8)),
        }))
      );
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [mounted, webglSupported]);

  /* ---------------- Auto Rotate ---------------- */
  useEffect(() => {
    if (!mounted || !webglSupported) return;

    const timeout = setTimeout(() => {
      const g = globeRef.current;
      if (!g) return;

      const controls = g.controls();
      if (controls) {
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.5;
        controls.enableZoom = false;
        controls.enableDamping = true;
        controls.dampingFactor = 0.08;
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, [mounted, webglSupported]);

  const arcs = [
    {
      startLat: OFFICES[0].lat,
      startLng: OFFICES[0].lng,
      endLat: OFFICES[1].lat,
      endLng: OFFICES[1].lng,
      color: ["#06b6d4", "#3b82f6"],
      stroke: 0.8,
    },
  ];

  const focusOn = (lat, lng, altitude = 2.4) => {
    globeRef.current?.pointOfView({ lat, lng, altitude }, 900);
  };

  /* ---------------- Guards ---------------- */
  if (!mounted) return <div className="h-[680px] w-full" />;

  /* --------- Fallback (Ubuntu / No GPU) --------- */
  if (!webglSupported) {
    return (
      <div className="h-[680px] w-full flex items-center justify-center bg-slate-950 border border-white/10 rounded-xl">
        <div className="text-center max-w-md px-6">
          <h3 className="text-white text-lg font-semibold mb-2">
            Global Presence
          </h3>
          <p className="text-white/60 text-sm">
            Interactive globe is not supported on this system or browser.
          </p>
        </div>
      </div>
    );
  }

  /* ---------------- Globe UI (UNCHANGED) ---------------- */
  return (
    <div className="relative w-full h-[680px] flex items-center justify-center overflow-hidden">
      <Globe
        ref={globeRef}
        width={900}
        height={900}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        showAtmosphere
        atmosphereColor="#38bdf8"
        atmosphereAltitude={0.15}
        pointsData={points}
        pointLat={(o) => o.lat}
        pointLng={(o) => o.lng}
        pointAltitude={(o) => o.altitude}
        pointColor={(o) => o.color}
        pointRadius={0.7}
        pointLabel={(o) =>
          `<div style="padding:6px 10px; color:white; font-weight:bold; background:rgba(15,23,42,0.8); border-radius:6px;">${o.name}</div>`
        }
        onPointClick={(o) => focusOn(o.lat, o.lng, 2.2)}
        arcsData={arcs}
        arcStartLat={(o) => o.startLat}
        arcStartLng={(o) => o.startLng}
        arcEndLat={(o) => o.endLat}
        arcEndLng={(o) => o.endLng}
        arcColor={(o) => o.color}
        arcStroke={(o) => o.stroke}
        arcDashLength={0.4}
        arcDashGap={0.6}
        arcDashInitialGap={() => Math.random() * 2}
        arcDashAnimateTime={2000}
      />

      {/* Right-side buttons (UNCHANGED UI) */}
      <div className="absolute right-4 md:right-10 top-[30%] flex flex-col gap-5 z-30">
        {OFFICES.map((loc) => (
          <button
            key={loc.id}
            onClick={() => focusOn(loc.lat, loc.lng, 2.2)}
            onMouseEnter={() => focusOn(loc.lat, loc.lng, 2.6)}
            className="group flex items-center gap-4 min-w-[240px] px-5 py-4
              bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl
              shadow-2xl shadow-black/40 transition-all duration-300
              hover:bg-blue-900/40 hover:scale-105 hover:border-cyan-500/50"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5">
              <span className="text-xl">{countryCodeToEmoji(loc.country)}</span>
            </div>

            <div className="flex-1 text-left">
              <div className="text-base font-bold text-white">{loc.name}</div>
              <div className="text-xs text-slate-400 tracking-widest">
                {loc.country}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
