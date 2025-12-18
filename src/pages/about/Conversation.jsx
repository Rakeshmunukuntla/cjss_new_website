"use client";

import { useState } from "react";

export default function Conversation({ onSuccess }) {
  const [email, setEmail] = useState("");
  const [initiative, setInitiative] = useState("");
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch(
        "https://server-node-cjss.onrender.com/conversations",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, initiative }),
        }
      );

      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message);

      setStatus("success");

      setEmail("");
      setInitiative("");

      if (onSuccess) onSuccess();

      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong");
    }
  };

  return (
    <section className="px-6 py-28 bg-slate-50 relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.05),_transparent_60%)]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className="rounded-4xl border border-slate-200 bg-white shadow-2xl shadow-blue-900/5 p-10 lg:p-12 
                        grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center overflow-hidden relative"
        >
          {/* Decorative gradient blob behind the card content */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

          {/* LEFT CONTENT */}
          <div className="space-y-6 relative z-10">
            <p className="text-xs uppercase tracking-[0.5em] text-blue-600 font-bold">
              Start a conversation
            </p>
            <h2 className="text-4xl font-bold text-slate-900 leading-tight">
              Let’s co-create your next{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                release
              </span>
            </h2>
            <p className="text-lg leading-relaxed text-slate-600 font-medium">
              Tell us about your SAP Commerce upgrade, AEM personalization
              backlog, or platform ambition. We will assemble a discovery squad
              within 48 hours.
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-slate-600 font-medium">
              <span className="px-4 py-2 border rounded-full border-slate-200 bg-slate-50">
                Blueprint workshops
              </span>
              <span className="px-4 py-2 border rounded-full border-slate-200 bg-slate-50">
                Accelerated pilots
              </span>
              <span className="px-4 py-2 border rounded-full border-slate-200 bg-slate-50">
                Managed run teams
              </span>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Work email"
              className="w-full px-6 py-4 text-slate-900 border bg-slate-50
                       border-slate-200 rounded-2xl placeholder-slate-400
                       focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all duration-300"
              required
            />

            <textarea
              value={initiative}
              onChange={(e) => setInitiative(e.target.value)}
              placeholder="Tell us about your initiative"
              className="w-full bg-slate-50 border border-slate-200
                       rounded-2xl px-6 py-4 text-slate-900 placeholder-slate-400
                       focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 min-h-[140px]"
              required
            />

            {/* ERROR MESSAGE */}
            {status === "error" && (
              <p className="text-sm text-red-500 font-semibold bg-red-50 p-2 rounded">
                {errorMsg}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-4 font-bold text-white shadow-lg
                         bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl
                         shadow-blue-500/20 hover:shadow-blue-500/30 hover:-translate-y-0.5 
                         transition-all duration-300
                         disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
            >
              {status === "loading"
                ? "Booking your discovery call…"
                : "Book a discovery call"}
            </button>

            {/* ✅ SUCCESS MESSAGE BELOW BUTTON */}
            {status === "success" && (
              <p className="text-green-600 font-bold text-sm mt-2 text-center bg-green-50 p-2 rounded">
                ✅ Submission received! We’ll contact you soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
