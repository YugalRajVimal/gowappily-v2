"use client";

import React from "react";
import { useTheme } from "../ThemeContext";

// ✅ Interface for Portfolio Item
interface PortfolioItem {
  id: number;
  name: string;
  image: string;
  link: string;
}

// ✅ Main Portfolio Component
const Portfolio: React.FC = () => {
  const projects: PortfolioItem[] = [
    {
      id: 1,
      name: "Infotech Systems",
      image: "/brands/com1.webp",
      link: "https://infotechsystems.net.in",
    },
    {
      id: 2,
      name: "Rank My Book",
      image: "/brands/com2.webp",
      link: "https://rankmythisbook.com",
    },
    {
      id: 3,
      name: "Mangalam Marketing",
      image: "/brands/com3.webp",
      link: "https://manglammarketing.com/",
    },
    {
      id: 4,
      name: "Geeta Fabs",
      image: "/brands/com4.png",
      link: "https://geetafabs.com",
    },
    {
      id: 5,
      name: "International Trade World",
      image: "/brands/com5.jpg",
      link: "http://internationaltradeworld.com/",
    },
    {
      id: 6,
      name: "Hariom Advertising Company",
      image: "/brands/com7.png",
      link: "https://hariomprop.com/",
    },
    {
      id: 7,
      name: "BS Advertising Company",
      image: "/brands/com8.png",
      link: "https://hariomrealest.com/",
    },
    {
      id: 8,
      name: "Aastha Solar Energy",
      image: "/brands/com9.webp",
      link: "https://aasthasolarenergy.in",
    },
    {
      id: 9,
      name: "Power 4 Brands",
      image: "/brands/com10.webp",
      link: "http://power4brands.com/",
    },
    {
      id: 10,
      name: "Astro & Occult Academy",
      image: "/brands/com11.svg",
      link: "https://astrovicky.in",
    },
    {
      id: 11,
      name: "The PR Media",
      image: "/brands/com12.svg",
      link: "https://theprmediaa.com",
    },

    // Added from testimonials
    {
      id: 12,
      name: "Consumer Haat",
      image: "/clients/consumerHaat.jpg",
      link: "https://consumerhaat.com",
    },
    {
      id: 13,
      name: "KS. Job Global",
      image: "/clients/ksJobGlobal.svg",
      link: "https://ksjobglobal.com/",
    },
    {
      id: 14,
      name: "NextGrid Solar Energy",
      image: "/clients/nextGridSolarEnergy.webp",
      link: "https://nextgridsolar.com/",
    },
    {
      id: 15,
      name: "CLENFAY",
      image: "/clients/clenfayLogo.jpg",
      link: "clenfay.com",
    },
    {
      id: 16,
      name: "Azad Shorthand",
      image: "/clients/azadShorthandLogo.webp",
      link: "#",
    },
    {
      id: 17,
      name: "NE Construction",
      image: "/clients/neConstructionLogo.jpeg",
      link: "#",
    },
    {
      id: 18,
      name: "RJ Solar Technologies",
      image: "/clients/rjSolarLogo.jpg",
      link: "https://rjsolartechnology.site",
    },
  ];

  const { darkMode } = useTheme();

  return (
    <section
      className={`pt-16 pb-20  min-h-screen  text-center ${
        darkMode ? "bg-gray-950 text-gray-100" : "bg-white text-gray-900 "
      } `}
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className={`font-serif 
        ${
          darkMode
            ? "bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))]"
            : "bg-[linear-gradient(to_right,var(--color-gray-800),var(--color-indigo-800),var(--color-gray-50),var(--color-indigo-900),var(--color-gray-800))] "
        }

        bg-[length:200%_auto] bg-clip-text pb-5 text-4xl md:text-5xl font-semibold text-transparent animate-[gradient_6s_linear_infinite]`}
          >
            Portfolio
          </h2>
          <h3
            className={`font-serif 
        ${
          darkMode
            ? "bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))]"
            : "bg-[linear-gradient(to_right,var(--color-gray-800),var(--color-indigo-800),var(--color-gray-50),var(--color-indigo-900),var(--color-gray-800))] "
        }

        bg-[length:200%_auto] bg-clip-text pb-5 text-3xl md:text-4xl font-semibold text-transparent animate-[gradient_6s_linear_infinite]`}
          >
            Our Featured Projects
          </h3>
          <p
            className={`${
              darkMode ? "text-gray-400 " : "text-gray-900 "
            }font-roboto`}
          >
            A curated selection of projects we’ve passionately built with
            industry-leading clients.
          </p>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`${
                darkMode ? "bg-gray-900/60" : "bg-gray-900"
              } rounded-lg shadow-lg p-6 flex flex-col items-center text-center transition-transform hover:-translate-y-2 hover:shadow-2xl`}
            >
              <img
                src={project.image}
                alt={project.name}
                className={`w-24 h-24 object-contain mb-4 ${project.image.endsWith('.svg') ? 'bg-white' : ''}`}
              />
              <h4 className="text-lg font-semibold text-gray-100 mb-3">
                {project.name}
              </h4>
              {project.link == "#" ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-block bg-[#0f1626] text-white px-4 py-2 rounded hover:bg-violet-900 transition"
                >
                  Application
                </a>
              ) : (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-block bg-gray-800 text-white px-4 py-2 rounded hover:bg-violet-900 transition"
                >
                  Visit Website
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
