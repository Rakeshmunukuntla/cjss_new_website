import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import TechnologyDropdown from "./TechnologyDropdown";

export default function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [techOpen, setTechOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (path) => pathname === path;

  const go = (path) => {
    navigate(path);
    setMobileOpen(false);
    setTechOpen(false);
  };

  // Scroll shrink effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* HEADER */}
      <header
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${
            scrolled
              ? "h-16 bg-[#0f172a]/95 backdrop-blur-xl shadow-xl"
              : "h-20 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a]"
          }
        `}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 h-full">
          {/* LOGO */}
          <button onClick={() => go("/")}>
            <img
              src="/images/cjss-logo.png"
              alt="CJSS"
              className={`transition-all duration-300 ${
                scrolled ? "h-10" : "h-14"
              }`}
            />
          </button>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-10 text-gray-300">
            {/* MAIN LINKS */}
            {[
              { name: "Overview", path: "/" },
              { name: "Careers", path: "/careers" },
              { name: "Resources", path: "/resources" },
              { name: "About", path: "/about" },
            ].map((item) => (
              <div key={item.path} className="relative group">
                <button
                  onClick={() => go(item.path)}
                  className={`
                    text-[16px] transition 
                    ${isActive(item.path) ? "text-white" : "hover:text-white"}
                  `}
                >
                  {item.name}
                </button>

                {/* UNDERLINE */}
                <span
                  className={`
                    absolute left-0 -bottom-1 h-[3px] rounded-full 
                    transition-all duration-300 bg-gradient-to-r from-blue-400 to-purple-400
                    ${
                      isActive(item.path)
                        ? "w-full opacity-100 glow-underline"
                        : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100 group-hover:glow-underline"
                    }
                  `}
                ></span>
              </div>
            ))}

            {/* TECHNOLOGY SERVICES DROPDOWN */}
            <div className="relative group">
              <button
                onClick={() => setTechOpen(!techOpen)}
                className={`
                  text-[16px] transition
                  ${
                    pathname.startsWith("/service")
                      ? "text-white"
                      : "hover:text-white"
                  }
                `}
              >
                Technology Services ▾
              </button>

              {/* UNDERLINE */}
              <span
                className={`
                  absolute left-0 -bottom-1 h-[3px] rounded-full 
                  transition-all duration-300 bg-gradient-to-r from-blue-400 to-purple-400
                  ${
                    pathname.startsWith("/service")
                      ? "w-full opacity-100 glow-underline"
                      : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100 group-hover:glow-underline"
                  }
                `}
              ></span>

              {/* MEGA MENU DROPDOWN */}
              {techOpen && (
                <div
                  className="
                    absolute top-full left-1/2 -translate-x-1/2 mt-4
                    w-[420px] max-w-[95vw]
                    z-50 animate-dropdown
                  "
                >
                  <TechnologyDropdown
                    navigateTo={go}
                    onOpenChange={() => setTechOpen(false)}
                  />
                </div>
              )}
            </div>
          </nav>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden text-3xl text-gray-200"
            onClick={() => {
              setMobileOpen(!mobileOpen);
              setTechOpen(false);
            }}
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div
          className="
            md:hidden fixed top-16 left-0 right-0 
            bg-[#0f172a]/95 backdrop-blur-xl shadow-xl
            px-8 py-6 space-y-6 border-b border-gray-700
            z-40 animate-fadeIn
          "
        >
          <button onClick={() => go("/")} className="mobile-item">
            Overview
          </button>

          <div>
            <button
              onClick={() => setTechOpen(!techOpen)}
              className="mobile-item flex justify-between"
            >
              Technology Services <span>{techOpen ? "-" : "+"}</span>
            </button>

            {techOpen && (
              <div className="ml-3 mt-2 border-l border-gray-600 pl-4 animate-fadeIn">
                <TechnologyDropdown navigateTo={go} />
              </div>
            )}
          </div>

          <button onClick={() => go("/careers")} className="mobile-item">
            Careers
          </button>
          <button onClick={() => go("/resources")} className="mobile-item">
            Resources
          </button>
          <button onClick={() => go("/about")} className="mobile-item">
            About
          </button>
        </div>
      )}

      {/* SPACER */}
      <div className={scrolled ? "h-16" : "h-20"}></div>
    </>
  );
}
