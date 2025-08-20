"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./logo";
import { Menu, X } from "lucide-react"; // icons
import { useCustomerAuth } from "@/context/CustomerAuthContext";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isCustomerAuthenticated, logout } = useCustomerAuth();

  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs">
          {/* Logo */}
          <Link href="/" className="flex flex-1 items-center text-xl font-serif font-bold text-indigo-500">
            Go Wappily
          </Link>

          {/* Desktop nav */}
          <ul className="hidden  md:flex flex-1 items-center justify-end gap-3">
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
            <Link href="/services" className="text-gray-300 hover:text-white">
              Services
            </Link>
            <Link href="/portfolio" className="text-gray-300 hover:text-white">
              Portfolio
            </Link>
            <Link href="/signin" className="text-gray-300 hover:text-white">
              Sign In
            </Link>
            <Link
              href="/signup"
              className="bg-indigo-600 text-white py-2 px-3 rounded text-center"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
