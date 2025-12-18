import { useEffect, useRef, useState } from "react";
import { CLIENTS } from "../../Constants";

export const ClientsSection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number(e.target.dataset.index);
            setVisible((prev) => new Set(prev).add(idx));
          }
        });
      },
      { threshold: 0.15 }
    );

    sectionRef.current
      ?.querySelectorAll("[data-index]")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative py-32 px-6 overflow-hidden
        bg-[linear-gradient(135deg,#f8f9ff_0%,#eef2ff_35%,#e0f2fe_70%,#f8fafc_100%)]
      "
    >
      {/* 🌫️ Premium background glows */}
      <div className="absolute inset-0 -z-10">
        {/* soft purple wash */}
        <div className="absolute -top-48 -left-48 w-[760px] h-[760px] rounded-full bg-indigo-300/25 blur-[180px]" />

        {/* soft blue wash */}
        <div className="absolute -bottom-48 -right-48 w-[800px] h-[800px] rounded-full bg-sky-300/25 blur-[200px]" />

        {/* subtle center glow */}
        <div
          className="
            absolute top-1/2 left-1/2
            w-[900px] h-[900px]
            -translate-x-1/2 -translate-y-1/2
            rounded-full
            bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.10),transparent_70%)]
          "
        />
      </div>

      {/* 🔹 Header */}
      <div className="max-w-5xl mx-auto text-center mb-20">
        <span className="inline-block mb-4 text-xs font-semibold tracking-[0.35em] uppercase text-indigo-600">
          Our Clients
        </span>

        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-5">
          Trusted by Leading Enterprises
        </h2>

        <p className="max-w-2xl mx-auto text-lg text-slate-600">
          We partner with forward-thinking organizations to deliver scalable,
          secure, and future-ready digital solutions.
        </p>
      </div>

      {/* 🧱 Client Cards */}
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {CLIENTS.map((client, idx) => (
            <div
              key={idx}
              data-index={idx}
              className={`
                group relative flex items-center justify-center
                rounded-3xl bg-black/85 backdrop-blur-xl
                border border-white/10
                shadow-[0_20px_40px_rgba(15,23,42,0.18)]
                transition-all duration-700 ease-out
                hover:-translate-y-2
                hover:shadow-[0_35px_80px_rgba(15,23,42,0.28)]
                ${
                  visible.has(idx)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }
              `}
              style={{ transitionDelay: `${idx * 120}ms` }}
            >
              {/* subtle hover glow */}
              <div
                className="
                  absolute inset-0 rounded-3xl
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-500
                  bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.18),transparent_70%)]
                "
              />

              <div className="relative z-10 flex flex-col items-center justify-center p-10 gap-4">
                <img
                  src={client.image}
                  alt={client.name}
                  className="
                    h-14 object-contain
                    transition-all duration-500
                    group-hover:scale-110
                  "
                />

                <p className="text-sm font-semibold text-white tracking-wide">
                  {client.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
