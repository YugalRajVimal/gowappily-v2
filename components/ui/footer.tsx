import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Logo from "./logo";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Footer illustration */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <img
            className="max-w-none"
            src="/images/footer-illustration.svg"
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-6 py-8 md:py-12 xl:gap-20">
          {/* About GoWappily */}
          <div className="space-y-2 flex-2">
            <div className="mb-1 text-xl font-mono">
              {/* <Logo /> */}
              GoWappily
            </div>
            <h3 className="text-sm font-medium text-gray-200">
              About GoWappily Infotech
            </h3>
            <p className="text-sm text-indigo-200/65">
              GoWappily Infotech is a full-service digital solutions provider
              offering 45+ professional services under one roof. We empower
              businesses with innovative, reliable, and result-driven solutions.
            </p>
          </div>

          {/* Development */}
          <div className="space-y-2 flex-1">
            <h3 className="text-sm font-medium text-gray-200">Services</h3>
            <ul className="space-y-2 text-sm text-indigo-200/65">
              <li>
                <a
                  href="/services"
                  className="transition hover:text-indigo-500"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="transition hover:text-indigo-500"
                >
                  Mobile App Development
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="transition hover:text-indigo-500"
                >
                  SEO Optimization
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="transition hover:text-indigo-500"
                >
                  Social Media Marketing
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="transition hover:text-indigo-500"
                >
                  Performance Marketing
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="transition hover:text-indigo-500"
                >
                  CRM & ERP Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-2 flex-1">
            <h3 className="text-sm font-medium text-gray-200">Quick Links</h3>
            <ul className="space-y-2 text-sm text-indigo-200/65">
              <li>
                <a
                  href="/"
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/portfolio"
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                >
                  Our Portfolio
                </a>
              </li>
              <li>
                <a
                  href="/about-us"
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact-us"
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-2 flex-1">
            <h3 className="text-sm font-medium text-gray-200">Contact Us</h3>
            <p className="text-sm text-indigo-200/65">
              Address: G-13,Sector 6 Noida
            </p>
            <p className="text-sm text-indigo-200/65 transition hover:text-indigo-500">
              Phone:{" "}
              <a href="tel:+916398960435" className="hover:underline">
                +91 6398960435
              </a>
            </p>
            <p className="text-sm text-indigo-200/65 transition hover:text-indigo-500">
              Phone:{" "}
              <a href="tel:+918800592770" className="hover:underline">
                +91 8800592770
              </a>
            </p>
            <p className="text-sm text-indigo-200/65 transition hover:text-indigo-500">
              Email:{" "}
              <a href="mailto:info@gowappily.com" className="hover:underline">
                info@gowappily.com
              </a>
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.facebook.com/share/1JDm8fcyz7/?mibextid=wwXIfr"
                className="text-indigo-200/65 transition hover:text-indigo-500"
                aria-label="Facebook"
              >
                <FaFacebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/gowappily_infotech?igsh=YnA2MW41anhubjY2&utm_source=qr"
                className="text-indigo-200/65 transition hover:text-indigo-500"
                aria-label="Instagram"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com/gowappily"
                className="text-indigo-200/65 transition hover:text-indigo-500"
                aria-label="Twitter"
              >
                <FaTwitter className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/gowappily-infotech"
                className="text-indigo-200/65 transition hover:text-indigo-500"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        {/* Footer Logo & Social */}
        <div className="text-center w-full">
          <div className="text-sm">
            <p className="py-2 text-indigo-200/65">
              © {new Date().getFullYear()} GoWappily Infotech
              <span className="text-gray-700"> · </span>
              <a
                className="text-indigo-200/65 transition hover:text-indigo-500"
                href="#0"
              >
                Terms
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
