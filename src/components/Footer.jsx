// import { FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] text-gray-300 pt-20 pb-10">
//       {/* MAIN GRID */}
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
//         {/* CJSS Brand Section */}
//         <div>
//           <h2 className="text-2xl font-bold text-white mb-4">CJSS</h2>

//           <p className="text-gray-400 text-sm leading-relaxed mb-4">
//             Helping businesses innovate and scale with advanced technology
//             solutions, cloud modernization, AI-driven automation, and
//             enterprise-grade engineering.
//           </p>

//           <p className="text-gray-400 text-sm">
//             We empower organizations to build reliable, secure, and future-ready
//             digital systems.
//           </p>
//         </div>

//         {/* COMPANY LINKS */}
//         <div>
//           <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
//           <ul className="space-y-2">
//             <li className="hover:text-white cursor-pointer">About Us</li>
//             <li className="hover:text-white cursor-pointer">Careers</li>
//             <li className="hover:text-white cursor-pointer">Resources</li>
//             <li className="hover:text-white cursor-pointer">
//               Technology Services
//             </li>
//             <li className="hover:text-white cursor-pointer">Overview</li>
//           </ul>
//         </div>

//         {/* SERVICES LINKS */}
//         <div>
//           <h3 className="text-white font-semibold mb-4 text-lg">Services</h3>
//           <ul className="space-y-2">
//             <li className="hover:text-white cursor-pointer">
//               Quality Engineering
//             </li>
//             <li className="hover:text-white cursor-pointer">
//               Cloud Technologies
//             </li>
//             <li className="hover:text-white cursor-pointer">
//               Application Services
//             </li>
//             <li className="hover:text-white cursor-pointer">
//               Digital Platforms
//             </li>
//             <li className="hover:text-white cursor-pointer">AI Services</li>
//           </ul>
//         </div>

//         {/* CONTACT + SOCIAL */}
//         <div>
//           <h3 className="text-white font-semibold mb-4 text-lg">Contact</h3>

//           <p className="text-gray-300 text-sm">📩 contact@cjss.com</p>
//           <p className="text-gray-300 text-sm">📞 +91 98765 43210</p>
//           <p className="text-gray-300 text-sm mt-2">📍 Hyderabad, India</p>

//           <h3 className="text-white font-semibold mt-6 mb-3 text-lg">
//             Connect
//           </h3>

//           <div className="flex items-center gap-4">
//             {/* LinkedIn */}
//             <div className="h-12 w-12 flex items-center justify-center bg-white/10 rounded-lg cursor-pointer hover:bg-white/20 transition">
//               <FaLinkedinIn className="text-gray-200 text-xl" />
//             </div>

//             {/* Twitter */}
//             <div className="h-12 w-12 flex items-center justify-center bg-white/10 rounded-lg cursor-pointer hover:bg-white/20 transition">
//               <FaTwitter className="text-gray-200 text-xl" />
//             </div>

//             {/* Facebook */}
//             <div className="h-12 w-12 flex items-center justify-center bg-white/10 rounded-lg cursor-pointer hover:bg-white/20 transition">
//               <FaFacebookF className="text-gray-200 text-xl" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* COPYRIGHT LINE */}
//       <div className="mt-16 pt-6 border-t border-white/10 text-center text-gray-400 text-sm">
//         © {new Date().getFullYear()} CJSS Technologies. All rights reserved.
//       </div>
//     </footer>
//   );
// }
import { FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom"; // ✅ Add this

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] text-gray-300 pt-20 pb-10">
      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* CJSS Brand Section */}
        <div>
          <Link to="/">
            <h2 className="text-2xl font-bold text-white mb-4">CJSS</h2>
          </Link>

          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            Helping businesses innovate and scale with advanced technology
            solutions, cloud modernization, AI-driven automation, and
            enterprise-grade engineering.
          </p>

          <p className="text-gray-400 text-sm">
            We empower organizations to build reliable, secure, and future-ready
            digital systems.
          </p>
        </div>

        {/* COMPANY LINKS */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="hover:text-white transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/careers"
                className="hover:text-white transition-colors"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                to="/resources"
                className="hover:text-white transition-colors"
              >
                Resources
              </Link>
            </li>
            <li>
              <Link
                to="/life-at-cjss"
                className="hover:text-white transition-colors"
              >
                Life at CJSS
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white transition-colors">
                Overview
              </Link>
            </li>
          </ul>
        </div>

        {/* SERVICES LINKS */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Services</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/services/quality-engineering"
                className="hover:text-white transition-colors"
              >
                Quality Engineering
              </Link>
            </li>
            <li>
              <Link
                to="/services/cloud-technologies"
                className="hover:text-white transition-colors"
              >
                Cloud Technologies
              </Link>
            </li>
            <li>
              <Link
                to="/services/application-modernization"
                className="hover:text-white transition-colors"
              >
                Application Services
              </Link>
            </li>
            <li>
              <Link
                to="/services/digital-commerce"
                className="hover:text-white transition-colors"
              >
                Digital Platforms
              </Link>
            </li>
            <li>
              <Link
                to="/services/ai"
                className="hover:text-white transition-colors"
              >
                AI Services
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT + SOCIAL */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Contact</h3>

          <p className="text-gray-300 text-sm">📩 contact@cjss.com</p>
          <p className="text-gray-300 text-sm">📞 +91 98765 43210</p>
          <p className="text-gray-300 text-sm mt-2">📍 Hyderabad, India</p>

          <h3 className="text-white font-semibold mt-6 mb-3 text-lg">
            Connect
          </h3>

          <div className="flex items-center gap-4">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/cjss-technologies/about/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 w-12 flex items-center justify-center bg-white/10 rounded-lg cursor-pointer hover:bg-white/20 transition"
            >
              <FaLinkedinIn className="text-gray-200 text-xl" />
            </a>

            {/* Twitter */}
            <a
              href="https://twitter.com/CJSS8102021"
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 w-12 flex items-center justify-center bg-white/10 rounded-lg cursor-pointer hover:bg-white/20 transition"
            >
              <FaTwitter className="text-gray-200 text-xl" />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/Customer-Journey-Software-Solutions-112603838118106"
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 w-12 flex items-center justify-center bg-white/10 rounded-lg cursor-pointer hover:bg-white/20 transition"
            >
              <FaFacebookF className="text-gray-200 text-xl" />
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT LINE */}
      <div className="mt-16 pt-6 border-t border-white/10 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} CJSS Technologies. All rights reserved.
      </div>
    </footer>
  );
}
