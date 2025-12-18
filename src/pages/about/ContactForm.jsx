"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("https://server-node-cjss.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to submit");
      }

      setStatus("success");

      // clear form
      setName("");
      setEmail("");
      setMessage("");

      setTimeout(() => setStatus("idle"), 3000);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong");
    }
  };

  return (
    <div className="p-10 bg-white rounded-2xl shadow-xl border border-slate-100 relative overflow-hidden">
      {/* Decorative top gradient line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500"></div>

      <h2 className="mb-3 text-4xl font-bold text-slate-900">
        Ready to Get Started?
      </h2>

      <p className="mb-10 text-slate-500 font-medium">
        Your email address will not be published. Required fields are marked *
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1 text-sm font-semibold text-slate-700">
            Your Name *
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 text-slate-900 border rounded-lg bg-slate-50 border-slate-200 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all duration-300"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-semibold text-slate-700">
            Your Email *
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 text-slate-900 border rounded-lg bg-slate-50 border-slate-200 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all duration-300"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-semibold text-slate-700">
            Please tell us about your requirement
          </label>
          <textarea
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message..."
            required
            className="w-full px-4 py-3 text-slate-900 border rounded-lg bg-slate-50 border-slate-200 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all duration-300"
          ></textarea>
        </div>

        {status === "error" && (
          <p className="text-sm font-medium text-red-500 bg-red-50 p-2 rounded">
            ⚠️ {errorMsg}
          </p>
        )}

        {status === "success" && (
          <p className="text-sm font-bold text-green-600 bg-green-50 p-2 rounded flex items-center gap-2">
            ✅ Message sent successfully!
          </p>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full sm:w-auto px-8 py-4 font-bold text-white transition-all bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg shadow-md hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
        >
          {status === "loading" ? "Sending..." : "SEND MESSAGE"}
        </button>
      </form>
    </div>
  );
}
