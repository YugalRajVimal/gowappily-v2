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
              <li>Hosting & Cloud Services</li>
              <li>Development Services</li>
              <li>Marketing & SEO</li>
              <li>Meta Ecosystem</li>
              <li>Creative & Branding</li>
              <li>Cyber & Business Support</li>
              <li>Legal & Business Services</li>
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
              {/* <li>
                <a
                  href="#about"
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                >
                  About Us
                </a>
              </li> */}
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
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-2 flex-1">
            <h3 className="text-sm font-medium text-gray-200">Contact Us</h3>
            <p className="text-sm text-indigo-200/65">
              Address: G-13,Sector 6 Noida
            </p>
            <p className="text-sm text-indigo-200/65">Phone: +91 6398960435</p>
            <p className="text-sm text-indigo-200/65">Phone: +91 8235490591</p>
            <p className="text-sm text-indigo-200/65">
              Email: info@gowappily.com
            </p>
            <div className="flex space-x-2">
              <a
                href="https://www.facebook.com/share/1JDm8fcyz7/?mibextid=wwXIfr"
                className="text-indigo-200/65 transition hover:text-indigo-500"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/gowappily_infotech?igsh=YnA2MW41anhubjY2&utm_source=qr"
                className="text-indigo-200/65 transition hover:text-indigo-500"
              >
                Instagram
              </a>
              {/* <a href="https://linkedin.com" className="text-indigo-200/65 transition hover:text-indigo-500">LinkedIn</a> */}
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
