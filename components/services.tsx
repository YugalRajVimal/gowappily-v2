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

export default function ServicesGoWappily() {
  const services = [
    {
      title: "Hosting & Cloud Services",
      icon: <Cloud className="w-8 h-8 text-indigo-400" />,
      // illustration: HostingIllustration,
      list: [
        "Shared, Reseller & WordPress Hosting",
        "VPS & Dedicated Servers",
        "Cloud Storage Solutions",
        "Domain & DNS Management",
        "SSL Certificate Services",
      ],
    },
    {
      title: "Development Services",
      icon: <Code2 className="w-8 h-8 text-indigo-400" />,
      // illustration: DevIllustration,
      list: [
        "Website & App Development",
        "Custom Software, ERP & CRM",
        "Telegram Bots & Mini Apps",
        "WhatsApp API & Automation",
        "Payment Gateway Integration",
        "LMS Setup",
      ],
    },
    {
      title: "Marketing & SEO",
      icon: <Megaphone className="w-8 h-8 text-indigo-400" />,
      // illustration: MarketingIllustration,
      list: [
        "SEO & Google Ads",
        "Meta Ads (Facebook & Instagram)",
        "Social Media Marketing",
        "YouTube Channel Management",
        "Email, SMS & WhatsApp Marketing",
        "Pixel & Conversion Tracking",
      ],
    },
    {
      title: "Meta Ecosystem",
      icon: <Globe className="w-8 h-8 text-indigo-400" />,
      // illustration: MetaIllustration,
      list: [
        "Meta Business Suite Setup",
        "Facebook/Shop Creation",
        "Instagram Growth Strategy",
        "Messenger Bot Development",
        "WhatsApp Cloud API",
        "Catalog Ads & Custom Audiences",
      ],
    },
    {
      title: "Creative & Branding",
      icon: <Brush className="w-8 h-8 text-indigo-400" />,
      // illustration: BrandingIllustration,
      list: [
        "Logo & Social Media Design",
        "Video Editing & Motion Graphics",
        "UI/UX Design",
        "Full Branding Kits",
      ],
    },
    {
      title: "Cyber & Business Support",
      icon: <Shield className="w-8 h-8 text-indigo-400" />,
      // illustration: CyberIllustration,
      list: [
        "Server Management & Maintenance",
        "Cybersecurity Solutions",
        "Business Email Hosting",
        "Technical Support & Troubleshooting",
      ],
    },
    {
      title: "Legal & Business Services",
      icon: <Briefcase className="w-8 h-8 text-indigo-400" />,
      // illustration: LegalIllustration,
      list: [
        "Company Registration (Pvt Ltd, LLP)",
        "GST Registration & Filing",
        "ISO Certification Assistance",
        "Digital Signature Certificate (DSC)",
        "MSME/Udyam Registration",
        "Trademark Filing & PAN/TAN",
      ],
    },
  ];

  return (
    <section id="about" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
            GoWappily Technologies
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-indigo-200/70">
            GoWappily Technologies offers{" "}
            <strong>45+ professional services</strong> in hosting, development,
            marketing, branding, and business automation — empowering brands to
            scale in today’s competitive market.
          </p>
        </div>

        {/* Services Grid */}
        <div className="flex max-w-7xl justify-center flex-wrap gap-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900/50 flex-1 min-w-[300px] max-w-[350px]  rounded-xl p-6 border border-gray-800 hover:border-indigo-400 hover:scale-[1.05] transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                {service.icon}
                <h3 className="text-xl font-semibold text-gray-200">
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
              <ul className="space-y-2 text-indigo-200/70 text-sm">
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
            href="#contact"
          >
            <span className="relative inline-flex items-center">
              Get in Touch
              <span className="ml-1 text-white/50 group-hover:translate-x-0.5 transition-transform">
                -&gt;
              </span>
            </span>
          </a>
          <a
            className="btn relative w-full sm:w-auto sm:ml-4 bg-linear-to-b from-gray-800 to-gray-800/60 text-gray-300 hover:bg-[length:100%_150%]"
            href="#services"
          >
            Explore All Services
          </a>
        </div>
      </div>
    </section>
  );
}
