"use client";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function EventsPage() {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("newest");
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    async function fetchEvents() {
      try {
        setIsLoading(true);
        const res = await fetch("https://server-node-cjss.onrender.com/events");
        const data = await res.json();
        setEvents(data.events || []);
        setFilteredEvents(data.events || []);
      } catch (error) {
        console.error("Failed to load events:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchEvents();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const categories = [
    "All",
    ...new Set(events.map((event) => event.category || "Uncategorized")),
  ];

  useEffect(() => {
    let result = [...events];

    if (searchQuery) {
      result = result.filter(
        (event) =>
          event.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.subtitle?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== "All") {
      result = result.filter((event) => event.category === selectedCategory);
    }

    switch (sortBy) {
      case "newest":
        result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      case "oldest":
        result.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        break;
      case "a-z":
        result.sort((a, b) => a.title?.localeCompare(b.title));
        break;
      case "z-a":
        result.sort((a, b) => b.title?.localeCompare(a.title));
        break;
      default:
        break;
    }

    setFilteredEvents(result);
  }, [events, searchQuery, selectedCategory, sortBy]);

  // Premium Loading State
  if (isLoading) {
    return (
      <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-indigo-100/50 to-purple-100/50 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-sky-100/50 to-cyan-100/50 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="relative flex flex-col items-center gap-8">
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 rounded-full border-[3px] border-slate-200" />
            <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-indigo-600 animate-spin" />
            <div
              className="absolute inset-3 rounded-full border-[3px] border-transparent border-t-violet-500 animate-spin"
              style={{
                animationDirection: "reverse",
                animationDuration: "1.2s",
              }}
            />
            <div
              className="absolute inset-6 rounded-full border-[3px] border-transparent border-t-purple-400 animate-spin"
              style={{ animationDuration: "1.8s" }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 animate-pulse shadow-lg shadow-indigo-500/50" />
            </div>
          </div>
          <div className="text-center space-y-2">
            <p className="text-slate-800 font-semibold text-lg">
              Loading Events
            </p>
            <p className="text-slate-500 text-sm">
              Discovering amazing experiences...
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-indigo-100/40 via-violet-100/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-sky-100/40 via-cyan-100/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-purple-50/30 via-transparent to-indigo-50/30 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div
          className="absolute top-32 left-20 w-2 h-2 rounded-full bg-indigo-300/50 animate-bounce"
          style={{ animationDuration: "3s" }}
        />
        <div
          className="absolute top-48 right-32 w-3 h-3 rounded-full bg-purple-300/50 animate-bounce"
          style={{ animationDuration: "4s", animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-32 left-1/4 w-2 h-2 rounded-full bg-sky-300/50 animate-bounce"
          style={{ animationDuration: "3.5s", animationDelay: "0.5s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* ============================================ */}
        {/* PREMIUM BACK BUTTON - NOT FIXED, IN FLOW */}
        {/* ============================================ */}
        <div className="mb-12">
          <button
            onClick={() => navigate("/")}
            className="group relative inline-flex items-center gap-3 overflow-hidden"
          >
            {/* Animated background pill */}
            <div className="relative flex items-center gap-3 px-2 py-2 pr-6 rounded-full bg-white border border-slate-200/80 shadow-lg shadow-slate-200/50 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-indigo-500/20 group-hover:border-indigo-200">
              {/* Animated gradient background on hover */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-50 via-purple-50 to-sky-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Shimmer effect */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/60 to-transparent" />
              </div>

              {/* Icon Container with animations */}
              <div className="relative">
                {/* Rotating ring */}
                <div className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500 animate-spin-slow opacity-50 blur-[2px]" />
                </div>

                {/* Icon background */}
                <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 via-indigo-600 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/40 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-indigo-500/50">
                  {/* Inner glow */}
                  <div className="absolute inset-[2px] rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Arrow icon */}
                  <svg
                    className="relative w-5 h-5 text-white transition-all duration-300 group-hover:-translate-x-0.5"
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
                </div>

                {/* Pulse rings */}
                <div className="absolute inset-0 rounded-full border-2 border-indigo-400 scale-100 opacity-0 group-hover:scale-150 group-hover:opacity-0 transition-all duration-700 group-hover:duration-1000" />
                <div className="absolute inset-0 rounded-full border-2 border-purple-400 scale-100 opacity-0 group-hover:scale-[1.8] group-hover:opacity-0 transition-all duration-700 delay-150 group-hover:duration-1000" />
              </div>

              {/* Text with animation */}
              <div className="relative flex flex-col items-start">
                <span className="text-sm font-bold text-slate-700 group-hover:text-indigo-700 transition-colors duration-300">
                  Back to Home
                </span>
              </div>

              {/* Decorative dots */}
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                <span className="w-1 h-1 rounded-full bg-indigo-400 animate-pulse" />
                <span
                  className="w-1 h-1 rounded-full bg-purple-400 animate-pulse"
                  style={{ animationDelay: "150ms" }}
                />
                <span
                  className="w-1 h-1 rounded-full bg-sky-400 animate-pulse"
                  style={{ animationDelay: "300ms" }}
                />
              </div>
            </div>

            {/* Floating particles on hover */}
            <div className="absolute top-1/2 left-5 -translate-y-1/2 pointer-events-none">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 absolute opacity-0 group-hover:opacity-100 group-hover:-translate-x-4 group-hover:-translate-y-3 transition-all duration-500" />
              <div className="w-1 h-1 rounded-full bg-purple-400 absolute opacity-0 group-hover:opacity-100 group-hover:-translate-x-6 group-hover:translate-y-2 transition-all duration-700 delay-100" />
              <div className="w-1.5 h-1.5 rounded-full bg-sky-400 absolute opacity-0 group-hover:opacity-100 group-hover:-translate-x-3 group-hover:translate-y-4 transition-all duration-600 delay-200" />
            </div>
          </button>
        </div>

        {/* ============================================ */}
        {/* PREMIUM HEADER SECTION */}
        {/* ============================================ */}
        <div className="text-center mb-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 mb-8 rounded-full bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-purple-500/10 border border-indigo-200/50 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" />
            </span>
            <span className="text-xs font-bold tracking-[0.2em] uppercase bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Discover Events
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tight">
            <span className="relative">
              <span className="absolute -inset-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-2xl rounded-full" />
              <span className="relative bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 bg-clip-text text-transparent">
                Events
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed font-light">
            Explore our curated collection of events, workshops, and experiences
            <span className="text-indigo-600 font-medium">
              {" "}
              designed to inspire and connect
            </span>
            .
          </p>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3 mt-10">
            <div className="w-12 h-1 rounded-full bg-gradient-to-r from-transparent to-indigo-300" />
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 shadow-lg shadow-indigo-500/30" />
            <div className="w-12 h-1 rounded-full bg-gradient-to-l from-transparent to-purple-300" />
          </div>
        </div>

        {/* ============================================ */}
        {/* PREMIUM FILTERS SECTION */}
        {/* ============================================ */}
        <div className="mb-16">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-sky-500/5 rounded-[2rem] blur-xl" />

            <div className="relative flex flex-col xl:flex-row items-center justify-between gap-6 p-6 md:p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200/80 shadow-xl shadow-slate-200/50">
              {/* Search */}
              <div className="relative w-full xl:w-[400px]">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                  <div className="p-2 rounded-full bg-gradient-to-br from-indigo-50 to-violet-50">
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
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-16 pr-5 py-4 rounded-2xl bg-slate-50/80 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-300 transition-all duration-300 font-medium"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute inset-y-0 right-4 flex items-center"
                  >
                    <div className="p-1.5 rounded-full bg-slate-200 hover:bg-slate-300 transition-colors">
                      <svg
                        className="w-3 h-3 text-slate-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  </button>
                )}
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4">
                {/* Category Filter */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <div className="relative">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="appearance-none px-5 py-3.5 pr-12 rounded-xl bg-white border border-slate-200 text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-300 cursor-pointer transition-all duration-300 hover:border-indigo-300"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
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
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Sort */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-sky-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="appearance-none px-5 py-3.5 pr-12 rounded-xl bg-white border border-slate-200 text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-300 cursor-pointer transition-all duration-300 hover:border-indigo-300"
                    >
                      <option value="newest">Newest First</option>
                      <option value="oldest">Oldest First</option>
                      <option value="a-z">A - Z</option>
                      <option value="z-a">Z - A</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                      <svg
                        className="w-4 h-4 text-purple-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* View Mode Toggle */}
                <div className="flex items-center gap-1 p-1.5 rounded-xl bg-slate-100 border border-slate-200">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-3 rounded-lg transition-all duration-300 ${
                      viewMode === "grid"
                        ? "bg-white text-indigo-600 shadow-md"
                        : "text-slate-400 hover:text-slate-600"
                    }`}
                  >
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
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-3 rounded-lg transition-all duration-300 ${
                      viewMode === "list"
                        ? "bg-white text-indigo-600 shadow-md"
                        : "text-slate-400 hover:text-slate-600"
                    }`}
                  >
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
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Results info */}
          <div className="mt-6 flex items-center justify-between px-2">
            <p className="text-slate-500 text-sm">
              Showing{" "}
              <span className="text-slate-800 font-semibold">
                {filteredEvents.length}
              </span>{" "}
              of{" "}
              <span className="text-slate-800 font-semibold">
                {events.length}
              </span>{" "}
              events
            </p>
            {(searchQuery || selectedCategory !== "All") && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="text-sm text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-1 transition-colors"
              >
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
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                Reset filters
              </button>
            )}
          </div>
        </div>

        {/* ============================================ */}
        {/* EVENTS DISPLAY */}
        {/* ============================================ */}
        {filteredEvents.length === 0 ? (
          /* Empty State */
          <div className="text-center py-24">
            <div className="relative inline-block mb-8">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-xl" />
              <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                <svg
                  className="w-14 h-14 text-slate-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-3xl font-bold text-slate-800 mb-3">
              No events found
            </h3>
            <p className="text-slate-500 max-w-md mx-auto mb-8">
              We couldn't find any events matching your criteria. Try adjusting
              your search or filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 transition-all duration-300 hover:-translate-y-0.5"
            >
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
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Reset All Filters
            </button>
          </div>
        ) : viewMode === "grid" ? (
          /* Premium Grid View */
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map((event, index) => (
              <article
                key={event._id}
                onClick={() => navigate(`/events/${event._id}`)}
                onMouseEnter={() => setHoveredCard(event._id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-full">
                  {/* Card glow effect */}
                  <div
                    className={`absolute -inset-2 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-sky-500/20 rounded-[2rem] blur-xl transition-opacity duration-500 ${
                      hoveredCard === event._id ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  <div className="relative h-full overflow-hidden rounded-3xl bg-white border border-slate-200/80 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-indigo-500/10 hover:border-indigo-200/50 transition-all duration-500 hover:-translate-y-2">
                    {/* Image Container */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Gradient overlays */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-transparent to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Category badge */}
                      {event.category && (
                        <div className="absolute top-4 left-4">
                          <span className="px-4 py-2 text-xs font-bold tracking-wide uppercase bg-white/95 backdrop-blur-sm text-indigo-600 rounded-full shadow-lg">
                            {event.category}
                          </span>
                        </div>
                      )}

                      {/* Hover overlay content */}
                      <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <span className="inline-flex items-center gap-2 text-white font-semibold">
                            <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                              View Event
                            </span>
                            <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                              <svg
                                className="w-5 h-5 text-indigo-600"
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
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      <h3 className="text-xl font-bold text-slate-800 line-clamp-2 group-hover:text-indigo-600 transition-colors duration-300">
                        {event.title}
                      </h3>

                      <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed">
                        {event.subtitle}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                        <div className="flex items-center gap-2 text-slate-400 text-sm">
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
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          <span>
                            {event.createdAt
                              ? new Date(event.createdAt).toLocaleDateString(
                                  "en-US",
                                  {
                                    month: "short",
                                    day: "numeric",
                                    year: "numeric",
                                  }
                                )
                              : "Coming Soon"}
                          </span>
                        </div>

                        <span className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 group-hover:gap-2 transition-all duration-300">
                          Details
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
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>

                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Premium List View */
          <div className="space-y-6">
            {filteredEvents.map((event, index) => (
              <article
                key={event._id}
                onClick={() => navigate(`/events/${event._id}`)}
                onMouseEnter={() => setHoveredCard(event._id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative">
                  {/* Card glow effect */}
                  <div
                    className={`absolute -inset-2 bg-gradient-to-r from-indigo-500/15 via-purple-500/15 to-sky-500/15 rounded-3xl blur-xl transition-opacity duration-500 ${
                      hoveredCard === event._id ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  <div className="relative overflow-hidden rounded-3xl bg-white border border-slate-200/80 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-indigo-500/10 hover:border-indigo-200/50 transition-all duration-500">
                    <div className="flex flex-col md:flex-row">
                      {/* Image */}
                      <div className="relative w-full md:w-80 lg:w-96 h-56 md:h-auto flex-shrink-0 overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/80 hidden md:block" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent md:hidden" />

                        {/* Category badge - mobile */}
                        {event.category && (
                          <div className="absolute top-4 left-4 md:hidden">
                            <span className="px-3 py-1.5 text-xs font-bold tracking-wide uppercase bg-white/95 text-indigo-600 rounded-full shadow-lg">
                              {event.category}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-4">
                          {/* Category badge - desktop */}
                          {event.category && (
                            <span className="hidden md:inline-flex px-4 py-1.5 text-xs font-bold tracking-wide uppercase bg-gradient-to-r from-indigo-50 to-violet-50 text-indigo-600 rounded-full border border-indigo-100">
                              {event.category}
                            </span>
                          )}
                          <div className="flex items-center gap-2 text-slate-400 text-sm">
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
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            <span>
                              {event.createdAt
                                ? new Date(event.createdAt).toLocaleDateString(
                                    "en-US",
                                    {
                                      month: "long",
                                      day: "numeric",
                                      year: "numeric",
                                    }
                                  )
                                : "Coming Soon"}
                            </span>
                          </div>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                          {event.title}
                        </h3>

                        <p className="text-slate-500 line-clamp-2 mb-6 leading-relaxed">
                          {event.subtitle}
                        </p>

                        <div className="flex items-center gap-4">
                          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 group-hover:shadow-xl group-hover:shadow-indigo-500/30 transition-all duration-300">
                            View Details
                            <svg
                              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
                    </div>

                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </section>
  );
}
