"use client";

import {
  Home,
  HeartHandshake,
  GraduationCap,
  Briefcase,
  Puzzle,
  Menu,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
  { label: "Careers Home", path: "/careers", icon: Home },
  { label: "Life at CJSS", path: "/life-at-cjss", icon: HeartHandshake },
  { label: "Job for Fresher", path: "/jobs/fresher", icon: GraduationCap },
  { label: "Job for Experienced", path: "/jobs/experienced", icon: Briefcase },
  { label: "Problems We Solve", path: "/problems", icon: Puzzle },
];

export default function CareerVerticalNavbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  /* ───────── AUTO HIDE ON SCROLL ───────── */
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 120) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  /* ───────── NAVIGATE ───────── */
  const goTo = (path) => {
    navigate(path);
    setMobileOpen(false);
  };

  const isActive = (path) =>
    location.pathname === path || location.pathname.startsWith(path + "/");

  return (
    <>
      {/* ============ MOBILE FAB ============ */}
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed bottom-6 left-6 z-50 md:hidden bg-blue-600 text-white p-3 rounded-full shadow-lg"
      >
        <Menu size={22} />
      </button>

      {/* ============ MOBILE DRAWER ============ */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm md:hidden">
          <aside className="absolute left-0 top-0 h-full w-[260px] bg-white shadow-xl p-6">
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute right-4 top-4 text-slate-600"
            >
              <X />
            </button>

            <h3 className="mb-6 text-xs font-semibold tracking-widest text-slate-500">
              CAREERS
            </h3>

            <nav className="flex flex-col gap-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.path);

                return (
                  <button
                    key={item.path}
                    onClick={() => goTo(item.path)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
                      active
                        ? "bg-blue-50 text-blue-700"
                        : "hover:bg-slate-100 text-slate-700"
                    }`}
                  >
                    <Icon size={18} />
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </aside>
        </div>
      )}

      {/* ============ DESKTOP SIDEBAR ============ */}
      <aside
        className={`
          hidden md:flex fixed left-0 z-40
          top-[60px] h-[calc(100vh-80px)]
          ${expanded ? "w-[260px]" : "w-[64px]"}
          transition-all duration-300 ease-out

          bg-gradient-to-r
          from-white/40 via-white/20 to-transparent
          backdrop-blur-md

          shadow-[6px_0_24px_rgba(0,0,0,0.06)]
          ${visible ? "translate-x-0" : "-translate-x-full"}
          group
        `}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
      >
        <div className="flex flex-col w-full px-2 pt-6">
          <div
            className={`mb-4 px-4 text-xs font-semibold tracking-widest text-slate-500 transition ${
              expanded ? "opacity-100" : "opacity-0"
            }`}
          >
            CAREERS
          </div>

          <nav className="flex flex-col gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);

              return (
                <button
                  key={item.path}
                  onClick={() => goTo(item.path)}
                  className={`relative flex items-center h-[44px] rounded-xl transition ${
                    active
                      ? "bg-gradient-to-r from-blue-50 to-cyan-50"
                      : "hover:bg-slate-100"
                  }`}
                >
                  {/* ACTIVE BAR */}
                  <span
                    className={`absolute left-0 top-2 bottom-2 w-[3px] rounded-full ${
                      active ? "bg-blue-500" : "bg-transparent"
                    }`}
                  />

                  {/* ICON */}
                  <span className="ml-4 mr-4">
                    <Icon
                      size={18}
                      className={
                        active
                          ? "text-blue-600"
                          : "text-slate-500 group-hover:text-slate-700"
                      }
                    />
                  </span>

                  {/* LABEL */}
                  <span
                    className={`text-sm font-medium whitespace-nowrap transition ${
                      expanded ? "opacity-100" : "opacity-0"
                    } ${active ? "text-slate-900" : "text-slate-700"}`}
                  >
                    {item.label}
                  </span>

                  {/* TOOLTIP */}
                  {!expanded && (
                    <span className="absolute left-full ml-3 px-3 py-1 text-xs rounded-md bg-slate-900 text-white opacity-0 group-hover:opacity-100 pointer-events-none transition whitespace-nowrap">
                      {item.label}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
