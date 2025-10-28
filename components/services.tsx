"use client";

import Image from "next/image";
import {
  Cloud,
  Code2,
  Megaphone,
  Globe,
  Brush,
  Shield,
  Briefcase,
} from "lucide-react"; // Lucide Icons
import { useTheme } from "@/app/ThemeContext";

export default function ServicesGoWappily() {
  const services = [
    {
      title: "Web Development",
      icon: <Code2 className="w-8 h-8 text-indigo-400" />,
      list: [
        "Responsive Website Development",
        "Custom Web Applications",
        "SEO-Ready Website Structure",
        "E-commerce Platforms",
        "API Integration",
      ],
    },
    {
      title: "App Development",
      icon: <Code2 className="w-8 h-8 text-indigo-400" />,
      list: [
        "Android & iOS Mobile Apps",
        "Cross-Platform Solutions",
        "User-Centered UI/UX Design",
        "Real-Time Updates & Notifications",
        "App Maintenance & Support",
      ],
    },
    {
      title: "SEO",
      icon: <Megaphone className="w-8 h-8 text-indigo-400" />,
      list: [
        "On-page & Technical SEO",
        "Keyword Research & Strategy",
        "Local SEO & Google My Business",
        "SEO Audits & Reporting",
        "Content Optimization",
      ],
    },
    {
      title: "Social Media Marketing",
      icon: <Globe className="w-8 h-8 text-indigo-400" />,
      list: [
        "Facebook, Instagram, Twitter & LinkedIn",
        "Content Creation & Scheduling",
        "Audience Engagement",
        "Ad Campaign Management",
        "Performance Analytics",
      ],
    },
    {
      title: "Performance Marketing",
      icon: <Cloud className="w-8 h-8 text-indigo-400" />,
      list: [
        "Google Ads (Search & Display)",
        "Meta Ads (Facebook & Instagram)",
        "Conversion Tracking & Pixel Setup",
        "A/B Testing & Optimization",
        "ROI-focused Campaigns",
      ],
    },
    {
      title: "CRM/ERP",
      icon: <Briefcase className="w-8 h-8 text-indigo-400" />,
      list: [
        "Custom CRM Development",
        "ERP Implementation",
        "Workflow Automation",
        "Sales & Support Dashboards",
        "Data Reporting & Analytics",
      ],
    },
  ];

  const { darkMode } = useTheme();

  return (
    <section id="about" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <h1
            className={`animate-[gradient_6s_linear_infinite] 
          ${
            darkMode
              ? "bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))]"
              : "bg-[linear-gradient(to_right,var(--color-gray-800),var(--color-indigo-800),var(--color-gray-50),var(--color-indigo-900),var(--color-gray-800))] "
          }
          bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl`}
          >
            GoWappily Infotech
          </h1>
          <p
            className={`max-w-3xl mx-auto text-lg t ${
              darkMode ? "text-indigo-200/65" : "text-indigo-900/90"
            }`}
          >
            GoWappily Infotech offers <strong>45+ professional services</strong>{" "}
            in hosting, development, marketing, branding, and business
            automation — empowering brands to scale in today’s competitive
            market.
          </p>
        </div>

        {/* Services Grid */}
        <div className="flex max-w-7xl justify-center flex-wrap gap-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${
                darkMode ? "bg-gray-900/50" : "bg-gray-900"
              } flex-1 min-w-[300px] max-w-[350px]  rounded-xl p-6 border border-gray-800 hover:border-indigo-400 hover:scale-[1.05] transition-all duration-300 group`}
            >
              <div className="flex items-center gap-3 mb-4">
                {service.icon}
                <h3 className="text-xl font-semibold text-gray-100">
                  {service.title}
                </h3>
              </div>
              {/* <div className="mb-4">
                <img
                  src={service.illustration}
                  alt={service.title}
                  className="rounded-lg"
                  width={500}
                  height={300}
                />
              </div> */}
              <ul className="space-y-2 text-indigo-100 text-sm">
                {service.list.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-indigo-400">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            className="btn group mb-4 w-full sm:w-auto bg-linear-to-t from-indigo-600 to-indigo-500 text-white hover:bg-[length:100%_150%]"
            href="/contact-us"
          >
            <span className="relative inline-flex items-center">
              Get in Touch
              <span className="ml-1 text-white/50 group-hover:translate-x-0.5 transition-transform">
                -&gt;
              </span>
            </span>
          </a>
          <a
            className="btn relative w-full sm:w-auto sm:ml-4 bg-linear-to-b from-gray-800 to-gray-800/60 text-gray-100 hover:bg-[length:100%_150%]"
            href="/services"
          >
            Explore All Services
          </a>
        </div>
      </div>
    </section>
  );
}
