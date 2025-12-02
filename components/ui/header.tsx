// "use client";

// import { useState, useEffect } from "react"; // Import useEffect
// import Link from "next/link";
// import Logo from "./logo";
// import { Menu, X } from "lucide-react"; // icons
// import { useCustomerAuth } from "@/context/CustomerAuthContext";
// import { FaMoon, FaSun } from "react-icons/fa";
// import { useTheme } from "@/app/ThemeContext";

// export default function Header() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [showOfferPopup, setShowOfferPopup] = useState(false); // State for the offer pop-up
//   const { isCustomerAuthenticated, logout } = useCustomerAuth();

//   const { darkMode, toggleTheme } = useTheme();

//   const handleLinkClick = () => {
//     setMobileOpen(false);
//   };

//   // Effect to show the offer pop-up after 3 seconds
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowOfferPopup(true);
//     }, 3000); // 3000 milliseconds = 3 seconds

//     return () => clearTimeout(timer); // Cleanup the timer on component unmount
//   }, []);

//   return (
//     <header className="z-50 fixed top-0  w-screen max-h-[10vh] h-full border-b ">
//       {/* Offer Pop Up */}
//       {/* {showOfferPopup && (
//         <div
//           className="fixed top-20 left-1/2 -translate-x-1/2 z-50
//               max-w-xs sm:max-w-md w-[calc(100%-2rem)]
//               bg-gradient-to-r from-indigo-600 to-purple-600
//               text-white p-3 sm:p-4 rounded-xl shadow-2xl
//               backdrop-blur-md flex items-center justify-between
//               space-x-2 sm:space-x-4
//               animate-slide-down"
//         >
//           <p className="text-sm sm:text-lg font-semibold text-center flex-grow">
//             🎉 Get 10% OFF on your first project!
//           </p>
//           <button
//             onClick={() => setShowOfferPopup(false)}
//             className="text-white hover:text-gray-800 transition-colors flex-shrink-0"
//             aria-label="Close offer"
//           >
//             <X size={20} />
//           </button>
//         </div>
//       )} */}

//       <div
//         className={`h-full min-h-[80px] max-h-[10vh] overflow-hidden transition-colors duration-300 ${
//           darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
//         }`}
//       >
//         <div
//           className={`relative flex h-20 py-1 items-center overflow-hidden justify-between gap-3 px-3
//       before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit]
//       before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box]
//       before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]
//       after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs overflow-hidden
//       ${darkMode ? "bg-gray-900" : "bg-white"}
//     `}
//         >
//           {/* Logo */}
//           <div
//             className={`flex items-center h-full overflow-hidden rounded-l-md text-xl font-serif font-bold ${
//               darkMode
//                 ? "text-indigo-400 bg-gray-900"
//                 : "text-indigo-500 bg-white"
//             }`}
//           >
//             <Logo />
//           </div>

//           {/* Desktop nav */}
//           <ul className="hidden md:flex items-center justify-end gap-3">
//             {[
//               { href: "/", label: "Home" },
//               { href: "/services", label: "Services" },
//               { href: "/portfolio", label: "Portfolio" },
//               { href: "/about-us", label: "About Us" },
//               { href: "/contact-us", label: "Contact Us" },
//             ].map((item) => (
//               <li key={item.href}>
//                 <Link
//                   href={item.href}
//                   className={`btn-sm text-base relative py-[5px] transition-all hover:scale-[1.05] ${
//                     darkMode
//                       ? "text-gray-100 hover:text-indigo-400"
//                       : "text-gray-900 hover:text-gray-700"
//                   }`}
//                 >
//                   {item.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           {/* Dark mode toggle */}
//           <button
//             onClick={toggleTheme}
//             className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors ${
//               darkMode
//                 ? "bg-gray-800 text-yellow-300 hover:bg-gray-700"
//                 : "bg-gray-100 text-gray-900 hover:bg-gray-200"
//             }`}
//             aria-label={
//               darkMode ? "Switch to light mode" : "Switch to dark mode"
//             }
//           >
//             {darkMode ? (
//               <FaMoon className="h-5 w-5" />
//             ) : (
//               <FaSun className="h-5 w-5" />
//             )}
//           </button>

//           {/* Mobile menu button */}
//           <button
//             className={`md:hidden transition-colors ${
//               darkMode
//                 ? "text-gray-100 hover:text-indigo-400"
//                 : "text-gray-900 hover:text-indigo-600"
//             }`}
//             onClick={() => setMobileOpen(!mobileOpen)}
//           >
//             {mobileOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile dropdown */}
//         {mobileOpen && (
//           <div
//             className={`mt-2 flex flex-col gap-3 rounded-xl p-4 md:hidden transition-all duration-300 ${
//               darkMode
//                 ? "bg-gray-800 text-gray-100"
//                 : "bg-gray-200/95 text-gray-900"
//             }`}
//           >
//             {[
//               { href: "/", label: "Home" },
//               { href: "/services", label: "Services" },
//               { href: "/portfolio", label: "Portfolio" },
//               { href: "/about-us", label: "About Us" },
//               { href: "/contact-us", label: "Contact Us" },
//             ].map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className={`transition-colors ${
//                   darkMode ? "hover:text-indigo-400" : "hover:text-indigo-600"
//                 }`}
//                 onClick={handleLinkClick}
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./logo";
import { Menu, X } from "lucide-react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "@/app/ThemeContext";
import { useCustomerAuth } from "@/context/CustomerAuthContext";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showOfferPopup, setShowOfferPopup] = useState(false);
  const { darkMode, toggleTheme } = useTheme();
  const { isCustomerAuthenticated, logout } = useCustomerAuth();

  const handleLinkClick = () => setMobileOpen(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowOfferPopup(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about-us", label: "About Us" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  return (
    <header className="z-50 fixed top-0 left-0 w-full border-b">
      {/* Main Wrapper */}
      <div
        className={`h-20 flex items-center justify-between px-4 md:px-8 transition-colors duration-300 ${
          darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
        }`}
      >
        {/* Logo */}

        <div
          className={`flex items-center h-full overflow-hidden rounded-l-md text-xl font-serif font-bold ${
            darkMode
              ? "text-indigo-400 bg-gray-900"
              : "text-indigo-500 bg-white"
          }`}
        >
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`text-base font-medium transition-all duration-200 ${
                  darkMode
                    ? "text-gray-100 hover:text-indigo-400"
                    : "text-gray-900 hover:text-indigo-600"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-3">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors ${
              darkMode
                ? "bg-gray-800 text-yellow-300 hover:bg-gray-700"
                : "bg-gray-100 text-gray-900 hover:bg-gray-200"
            }`}
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {darkMode ? (
              <FaMoon className="h-5 w-5" />
            ) : (
              <FaSun className="h-5 w-5" />
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden transition-colors ${
              darkMode
                ? "text-gray-100 hover:text-indigo-400"
                : "text-gray-900 hover:text-indigo-600"
            }`}
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        className={`absolute top-20 left-0 w-full origin-top transform transition-all duration-300 ease-in-out md:hidden z-40 ${
          mobileOpen
            ? "scale-y-100 opacity-100"
            : "scale-y-0 opacity-0 pointer-events-none"
        } ${darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"} 
        border-t border-gray-700/20 shadow-lg`}
      >
        <ul className="flex flex-col py-4 px-6 gap-4">
          {navLinks.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={handleLinkClick}
                className={`block w-full text-base font-medium py-2 rounded-md transition-all duration-200 ${
                  darkMode
                    ? "hover:bg-gray-800 hover:text-indigo-400"
                    : "hover:bg-gray-100 hover:text-indigo-600"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
