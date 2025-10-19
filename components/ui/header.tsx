"use client";

import { useState, useEffect } from "react"; // Import useEffect
import Link from "next/link";
import Logo from "./logo";
import { Menu, X } from "lucide-react"; // icons
import { useCustomerAuth } from "@/context/CustomerAuthContext";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showOfferPopup, setShowOfferPopup] = useState(false); // State for the offer pop-up
  const { isCustomerAuthenticated, logout } = useCustomerAuth();

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  // Effect to show the offer pop-up after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOfferPopup(true);
    }, 3000); // 3000 milliseconds = 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <header className="z-30 mt-2 w-full md:mt-5 overflow-hidden">
      {/* Offer Pop Up */}
      {showOfferPopup && (
        <div
          className="fixed top-20 left-1/2 -translate-x-1/2 z-50 
              max-w-xs sm:max-w-md w-[calc(100%-2rem)] 
              bg-gradient-to-r from-indigo-600 to-purple-600 
              text-white p-3 sm:p-4 rounded-xl shadow-2xl 
              backdrop-blur-md flex items-center justify-between 
              space-x-2 sm:space-x-4 
              animate-slide-down"
        >
          <p className="text-sm sm:text-lg font-semibold text-center flex-grow">
            🎉 Get 10% OFF on your first project!
          </p>
          <button
            onClick={() => setShowOfferPopup(false)}
            className="text-white hover:text-gray-200 transition-colors flex-shrink-0"
            aria-label="Close offer"
          >
            <X size={20} />
          </button>
        </div>
      )}

      <div className="mx-auto max-w-6xl px-4 sm:px-6 ">
        <div className="relative flex h-14 items-center  justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs overflow-hidden">
          {/* Logo */}
          <div className="flex items-center rounded-l-md text-xl font-serif font-bold text-indigo-500 bg-white ">
            <Logo />

            {/* GoWappily Infotech */}
          </div>

          {/* Desktop nav */}
          <ul className="hidden  md:flex items-center justify-end gap-3">
            <li>
              <Link
                href="/"
                className="btn-sm relative py-[5px] text-gray-300 hover:text-gray-200 hover:scale-[1.05]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="btn-sm relative py-[5px] text-gray-300 hover:text-gray-200 hover:scale-[1.05]"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                className="btn-sm relative py-[5px] text-gray-300 hover:text-gray-200 hover:scale-[1.05]"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className="btn-sm relative py-[5px] text-gray-300 hover:text-gray-200 hover:scale-[1.05]"
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                href="/contact-us"
                className="btn-sm relative py-[5px] text-gray-300 hover:text-gray-200 hover:scale-[1.05]"
              >
                Contact Us
              </Link>
            </li>
            {/* {isCustomerAuthenticated ? (
              <li>
                <div
                  onClick={() => logout()}
                  className="btn-sm relative bg-linear-to-b from-gray-800 to-gray-800/60 py-[5px] text-gray-300 hover:bg-[length:100%_150%]"
                >
                  Logout
                </div>
              </li>
            ) : (
              <>
                <li>
                  <Link
                    href="/signin"
                    className="btn-sm relative bg-linear-to-b from-gray-800 to-gray-800/60 py-[5px] text-gray-300 hover:bg-[length:100%_150%]"
                  >
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link
                    href="/signup"
                    className="btn-sm bg-linear-to-t from-indigo-600 to-indigo-500 py-[5px] text-white shadow hover:bg-[length:100%_150%]"
                  >
                    Register
                  </Link>
                </li>
              </>
            )} */}
          </ul>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div className="mt-2 flex flex-col gap-3 rounded-xl bg-gray-900/95 p-4 md:hidden transition-all duration-300">
            <Link href="/" className="text-gray-300 hover:text-white">
              Home
            </Link>

            <Link
              href="/services"
              className="text-gray-300 hover:text-white"
              onClick={handleLinkClick}
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="text-gray-300 hover:text-white"
              onClick={handleLinkClick}
            >
              Portfolio
            </Link>

            <Link
              href="/about-us"
              className="text-gray-300 hover:text-white"
              onClick={handleLinkClick}
            >
              About Us
            </Link>

            <Link
              href="/contact-us"
              className="text-gray-300 hover:text-white"
              onClick={handleLinkClick}
            >
              Contact Us
            </Link>
            {/* <Link href="/signin" className="text-gray-300 hover:text-white">
              Sign In
            </Link>
            <Link
              href="/signup"
              className="bg-indigo-600 text-white py-2 px-3 rounded text-center"
            >
              Register
            </Link> */}
          </div>
        )}
      </div>
    </header>
  );
}
