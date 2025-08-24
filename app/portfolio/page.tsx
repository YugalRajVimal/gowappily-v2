"use client";

import {
  Cloud,
  Code,
  Search,
  Facebook,
  Brush,
  Shield,
  Scale,
} from "lucide-react"; // Lucide Icons
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Portfolio() {
  const portfolio = [
    {
      title: "Hosting & Cloud Solutions",
      icon: <Cloud className="w-8 h-8 text-indigo-400" />,
      projects: [
        {
          name: "Startup Hosting Setup",
          description: "Deployed scalable cloud hosting with free SSL and cPanel access.",
          image: "/portfolio/hosting1.jpg",
        },
        {
          name: "Reseller Hosting Platform",
          description: "Built a multi-domain hosting reseller solution with priority support.",
          image: "/portfolio/hosting2.jpg",
        },
        {
          name: "Enterprise VPS Deployment",
          description: "Configured dedicated VPS with monitoring & security for an agency.",
          image: "/portfolio/hosting3.jpg",
        },
      ],
    },
    {
      title: "Development Solutions",
      icon: <Code className="w-8 h-8 text-green-400" />,
      projects: [
        {
          name: "Business Website",
          description: "5-page responsive website with lead capture & payment integration.",
          image: "/portfolio/dev1.jpg",
        },
        {
          name: "E-commerce App",
          description: "Custom e-commerce web + mobile app with CRM integration.",
          image: "/portfolio/dev2.jpg",
        },
        {
          name: "SaaS Platform",
          description: "Enterprise SaaS with ERP modules and automation tools.",
          image: "/portfolio/dev3.jpg",
        },
      ],
    },
    {
      title: "Marketing & SEO Solutions",
      icon: <Search className="w-8 h-8 text-orange-400" />,
      projects: [
        {
          name: "Local SEO Campaign",
          description: "Ranked client’s business in top 3 local search results.",
          image: "/portfolio/seo1.jpg",
        },
        {
          name: "Paid Ads Funnel",
          description: "Google & Meta Ads campaign with 3x ROI for SMB.",
          image: "/portfolio/seo2.jpg",
        },
        {
          name: "Enterprise 360° Marketing",
          description: "Full-funnel digital marketing & content strategy.",
          image: "/portfolio/seo3.jpg",
        },
      ],
    },
    {
      title: "Meta Ecosystem Solutions",
      icon: <Facebook className="w-8 h-8 text-purple-400" />,
      projects: [
        {
          name: "Meta Business Setup",
          description: "Created Meta shop & integrated with Business Suite.",
          image: "/portfolio/meta1.jpg",
        },
        {
          name: "Instagram Growth Campaign",
          description: "Deployed content strategy for 10k+ organic followers.",
          image: "/portfolio/meta2.jpg",
        },
        {
          name: "WhatsApp API Automation",
          description: "WhatsApp bot with catalog + retargeting campaigns.",
          image: "/portfolio/meta3.jpg",
        },
      ],
    },
    {
      title: "Creative & Branding Solutions",
      icon: <Brush className="w-8 h-8 text-yellow-400" />,
      projects: [
        {
          name: "Logo & Brand Identity",
          description: "Custom logo & color palette for a startup brand.",
          image: "/portfolio/brand1.jpg",
        },
        {
          name: "Brand Kit + Templates",
          description: "Full branding kit with social media creatives.",
          image: "/portfolio/brand2.jpg",
        },
        {
          name: "Corporate UI/UX",
          description: "UI/UX design for enterprise web & mobile platforms.",
          image: "/portfolio/brand3.jpg",
        },
      ],
    },
    {
      title: "Cybersecurity & Support",
      icon: <Shield className="w-8 h-8 text-red-400" />,
      projects: [
        {
          name: "Basic Security Setup",
          description: "Server firewall + antivirus setup for small office.",
          image: "/portfolio/security1.jpg",
        },
        {
          name: "Advanced Firewall",
          description: "Configured DDoS protection & monitoring for SMB.",
          image: "/portfolio/security2.jpg",
        },
        {
          name: "Full CSOC Deployment",
          description: "Enterprise-level Cybersecurity Operations Center.",
          image: "/portfolio/security3.jpg",
        },
      ],
    },
    {
      title: "Legal & Business Services",
      icon: <Scale className="w-8 h-8 text-gray-400" />,
      projects: [
        {
          name: "Company Registration",
          description: "Registered Pvt Ltd company with PAN/TAN + GST.",
          image: "/portfolio/legal1.jpg",
        },
        {
          name: "Trademark Filing",
          description: "Filed trademarks & managed IP protection.",
          image: "/portfolio/legal2.jpg",
        },
        {
          name: "Corporate Compliance",
          description: "End-to-end GST & legal compliance for enterprise.",
          image: "/portfolio/legal3.jpg",
        },
      ],
    },
  ];

  return (
    <section id="portfolio" className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
      <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
          <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
            GoWappily Infotech
          </span>
        </div>
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-200 to-indigo-400">
            Our Portfolio
          </h1>
          <p className="text-base sm:text-lg text-indigo-200/70 mt-4 max-w-3xl mx-auto">
            A showcase of projects we’ve delivered in hosting, development,
            marketing, branding, and business automation.
          </p>
        </div>

        {portfolio.map((category, index) => (
          <div key={index} className="mb-14 sm:mb-16">
            {/* Category Title */}
            <div className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-6">
              {category.icon}
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-200">
                {category.title}
              </h2>
            </div>

            {/* Responsive Swiper */}
            <Swiper
              spaceBetween={16}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1.2, spaceBetween: 16 }, // small phones
                768: { slidesPerView: 2, spaceBetween: 20 }, // tablets
                1024: { slidesPerView: 3, spaceBetween: 24 }, // desktop
              }}
              pagination={{ clickable: true }}
              navigation
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              modules={[Pagination, Navigation, Autoplay]}
              className="!pb-12"
            >
              {category.projects.map((project, i) => (
                <SwiperSlide key={i}>
                  <div className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 hover:border-indigo-400 transition-all duration-300 flex flex-col h-full">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="aspect-video w-full object-cover bg-indigo-900"
                    />
                    <div className="p-4 flex-1 flex flex-col">
                      <h3 className="text-base sm:text-lg font-semibold text-indigo-300">
                        {project.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-indigo-200/70 mt-2 flex-1">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
      </div>
    </section>
  );
}