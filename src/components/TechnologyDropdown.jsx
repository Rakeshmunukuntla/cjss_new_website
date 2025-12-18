// export default function TechnologyDropdown({ navigateTo, onOpenChange }) {
//   const services = [
//     {
//       title: "Quality Engineering & Assurance",
//       desc: "Delivering high-quality software through automation, shift-left testing and continuous validation.",
//       path: "/services/quality-engineering",
//     },
//     {
//       title: "Cloud Technologies",
//       desc: "Modern cloud platforms, migrations, and automation to accelerate business outcomes.",
//       path: "/services/cloud-technologies",
//     },
//     {
//       title: "Application Services & Modernization",
//       desc: "Modernize legacy applications and build cloud-ready solutions with APIs and microservices.",
//       path: "/services/application-modernization",
//     },
//     {
//       title: "Digital Platform Services & Commerce Solutions",
//       desc: "End-to-end digital commerce platforms and customer experience engineering.",
//       path: "/services/digital-commerce",
//     },
//     {
//       title: "AI",
//       desc: "Applied AI and ML solutions to augment decision making and automate processes.",
//       path: "/services/ai",
//     },
//   ];

//   return (
//     <div className="p-6 rounded-xl bg-[#0d1117]/95 backdrop-blur-xl shadow-2xl border border-gray-700 space-y-6">
//       <div className="text-gray-300 text-sm font-semibold uppercase tracking-wide">
//         Technology <br /> Services
//       </div>

//       <div className="space-y-6">
//         {services.map((s) => (
//           <button
//             key={s.path}
//             onClick={() => {
//               navigateTo(s.path);
//               onOpenChange?.(false);
//             }}
//             className="block text-left group"
//           >
//             <div className="text-white font-semibold text-[15px] group-hover:text-blue-400 transition">
//               {s.title}
//             </div>
//             <div className="text-gray-400 text-sm mt-1 group-hover:text-gray-300 transition">
//               {s.desc}
//             </div>
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react"; // ✅ Add this

export default function TechnologyDropdown({ onOpenChange }) {
  const navigate = useNavigate();
  const dropdownRef = useRef(null); // ✅ Add ref

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onOpenChange?.(false);
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onOpenChange]);

  // ✅ Close dropdown on Escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onOpenChange?.(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onOpenChange]);

  const services = [
    {
      title: "AI",
      desc: "Applied AI and ML solutions to augment decision making and automate processes.",
      path: "/services/ai",
    },
    {
      title: "Application Services & Modernization",
      desc: "Modernize legacy applications and build cloud-ready solutions with APIs and microservices.",
      path: "/services/application-modernization",
    },
    {
      title: "Cloud Technologies",
      desc: "Modern cloud platforms, migrations, and automation to accelerate business outcomes.",
      path: "/services/cloud-technologies",
    },
    {
      title: "Digital Platform Services & Commerce Solutions",
      desc: "End-to-end digital commerce platforms and customer experience engineering.",
      path: "/services/digital-commerce",
    },
    {
      title: "Quality Engineering & Assurance",
      desc: "Delivering high-quality software through automation, shift-left testing and continuous validation.",
      path: "/services/quality-engineering",
    },
  ];

  const handleNavigate = (path) => {
    navigate(path);
    onOpenChange?.(false);
  };

  return (
    <div
      ref={dropdownRef} // ✅ Attach ref
      className="p-6 rounded-xl bg-[#0d1117]/95 backdrop-blur-xl shadow-2xl border border-gray-700 space-y-6"
    >
      <div className="text-gray-300 text-sm font-semibold uppercase tracking-wide">
        Technology <br /> Services
      </div>

      <div className="space-y-6">
        {services.map((s) => (
          <button
            key={s.path}
            onClick={() => handleNavigate(s.path)}
            className="block text-left group w-full"
          >
            <div className="text-white font-semibold text-[15px] group-hover:text-blue-400 transition">
              {s.title}
            </div>
            <div className="text-gray-400 text-sm mt-1 group-hover:text-gray-300 transition">
              {s.desc}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
