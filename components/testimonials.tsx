"use client";

import { useState } from "react";
import useMasonry from "@/utils/useMasonry";

const testimonials = [
  {
    clientImg: "/clients/consumerHaat.jpg",
    name: "Kanchan Shah",
    company: "Consumer Haat",
    content:
      "Partnering with GoWappily Infotech completely transformed our online shopping experience. From smooth performance to secure payments and an elegant product showcase — they built an eCommerce platform that truly reflects our brand. Sales and engagement have doubled since launch!",
    categories: [1, 3, 5],
  },
  {
    clientImg: "/clients/aasthaSolarEnergyLogo.jpeg",
    name: "Mr. Vineet",
    company: "Aastha Solar Energy",
    content:
      "GoWappily Infotech transformed the way our teams collaborate across multiple geographies. Their cloud integration solutions have made our systems faster, more secure, and highly scalable.",
    categories: [1, 3, 5],
  },
  {
    clientImg: "/clients/arbcLogo.jpg",
    name: "Kanchan Shah",
    company: "International Trade World",
    content:
      "The AI-driven automation solutions from GoWappily Infotech have helped us reduce operational costs by 40%. Their deep understanding of enterprise requirements is unmatched.",
    categories: [1, 2, 4],
  },
  {
    clientImg: "/clients/infotechSolutions.png",
    link: "https://infotechsystems.net.in/",
    name: "Ravi Sharma",
    company: "Infotech Solutions",
    content:
      "Infotech Solutions transformed our IT infrastructure and helped us streamline operations across all locations. Their team is responsive, knowledgeable, and delivered scalable solutions tailored to our business needs.",
    categories: [1, 2, 3],
  },
  {
    clientImg: "/clients/ksJobGlobal.svg",
    link: "https://ksjobglobal.com/",
    name: "Anil Mehta",
    company: "KS. Job Global",
    content:
      "KS. Job Global helped us connect with skilled professionals across hospitality, driving, and healthcare sectors efficiently. Their platform is reliable, inclusive, and has significantly improved our workforce management and growth opportunities.",
    categories: [1, 3, 5],
  },
  {
    clientImg: "/clients/nextGridSolarEnergy.webp",
    link: "https://nextgridsolar.com/",
    name: "Ravi Gupta",
    company: "NextGrid Solar Energy",
    content:
      "NextGrid Solar Energy provided us with a reliable and sustainable solar power solution for our commercial setup. Their team was professional, efficient, and ensured a smooth installation process. Highly recommended for clean energy solutions.",
    categories: [2, 4, 5],
  },
  {
    clientImg: "/clients/clenfayLogo.jpg",
    name: "Shivam Garg",
    company: "CLENFLAY",
    content:
      "From advanced analytics to seamless ERP integration, core Technologies delivered beyond expectations. Their team truly understands enterprise-grade software development.",
    categories: [1, 4],
  },
  {
    clientImg: "/clients/azadShorthandLogo.webp",
    name: "Azad Singh Yadav",
    company: "Azad Shorthand",
    content:
      "Our digital transformation journey was stuck until we partnered with GoWappily Infotech. They streamlined workflows, integrated data pipelines, and boosted overall efficiency significantly.",
    categories: [1, 2, 5],
  },
  {
    clientImg: "/clients/manglamMarketingLogo.jpeg",
    name: "Mr. Nishant",
    company: "Manglam Marketing",
    content:
      "What impressed us most about GoWappily Infotech was their ability to integrate complex AI models into our existing systems without disrupting ongoing operations.",
    categories: [1, 3],
  },
  {
    clientImg: "/clients/geetaFabsLogo.png",
    name: "Adarsh Gupta",
    company: "Geeta Fabs",
    content:
      "GoWappily Infotech’ IoT and AI solutions have allowed us to optimize our supply chain in real time. It’s like having a control center that predicts and resolves issues instantly.",
    categories: [1, 3, 5],
  },
  {
    clientImg: "/clients/neConstructionLogo.jpeg",
    name: "Ejaj Alam",
    company: "NE Construction",
    content:
      "GoWappily Infotech built our secure blockchain integration platform in record time. The performance and reliability have exceeded our highest expectations.",
    categories: [1, 2, 5],
  },
  {
    clientImg: "/clients/rjSolarLogo.jpg",
    name: "Mr. Joginder",
    company: "RJ Solar Technologies",
    content:
      "Their data analytics dashboard is sleek, intuitive, and lightning-fast. GoWappily Infotech has made enterprise data insights accessible and actionable for our teams.",
    categories: [1, 4],
  },
  {
    clientImg: "/clients/thePrMediaLogo.svg",
    name: "Kapil Poswal",
    company: "The PR Media",
    content:
      "We were looking for a partner who could handle AI, cloud, and cybersecurity together — GoWappily Infotech delivered all of that in one unified solution.",
    categories: [1, 2],
  },
 
];

const categoriesList = [
  { id: 1, label: "View All", icon: "M.062 10.003a1 1..." },
  { id: 2, label: "Web Apps", icon: "M6.5 3.5a1.5 1.5..." },
  { id: 3, label: "eCommerce", icon: "M2.428 10c.665-1.815..." },
  { id: 4, label: "Enterprise", icon: "M3.757 3.758a6 6..." },
  { id: 5, label: "Solar / IoT", icon: "M13.95.879a3 3..." },
];

export default function Testimonials() {
  const masonryContainer = useMasonry();
  const [category, setCategory] = useState<number>(1);

  return (
    <div id="testimonials" className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="border-t py-12 md:py-20 border-gray-700/30">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-gray-200 to-indigo-300 animate-gradient-x">
            Don't take our word for it
          </h2>
          <p className="text-lg text-indigo-200/65">
            We provide tech-first solutions that empower decision-makers to
            build healthier and happier workspaces from anywhere in the world.
          </p>
        </div>

        {/* Category Buttons */}
        <div className="flex justify-center pb-12 max-md:hidden md:pb-16">
          <div className="inline-flex rounded-full bg-gray-800/40 p-1">
            {categoriesList.map((cat) => (
              <button
                key={cat.id}
                className={`flex h-8 items-center gap-2.5 px-3 rounded-full text-sm font-medium transition-colors ${
                  category === cat.id
                    ? "bg-indigo-500/20 text-indigo-400 shadow-inner"
                    : "text-gray-400 hover:text-indigo-300 hover:bg-gray-700/50"
                }`}
                aria-pressed={category === cat.id}
                onClick={() => setCategory(cat.id)}
              >
                <svg
                  className={`fill-current ${
                    category === cat.id ? "text-indigo-500" : "text-gray-600"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                >
                  <path d={cat.icon} />
                </svg>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Testimonial Cards */}
        <div
          className="mx-auto grid max-w-sm gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3"
          ref={masonryContainer}
        >
          {testimonials.map((testimonial, idx) => (
            <Testimonial
              key={idx}
              testimonial={testimonial}
              category={category}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function Testimonial({
  testimonial,
  category,
}: {
  testimonial: {
    clientImg: string;
    name: string;
    company: string;
    link?: string;
    content: string;
    categories: number[];
  };
  category: number;
}) {
  const isActive = testimonial.categories.includes(category) || category === 1;

  return (
    <article
      className={`relative rounded-2xl bg-gray-900/50 p-5 backdrop-blur-xs transition-all duration-300 transform ${
        isActive ? "opacity-100 scale-100" : "opacity-40 scale-95"
      }`}
    >
      <div className="flex flex-col gap-4">
        <img
          src={testimonial.clientImg}
          height={36}
          width={36}
          alt="Client logo"
          className="h-8 w-8 rounded-full bg-white"
        />
        <p className="text-indigo-200/65 before:content-['“'] after:content-['”']">
          {testimonial.content}
        </p>
        <div className="flex items-center gap-3 text-sm text-gray-200">
          <span>{testimonial.name}</span>
          <span className="text-gray-700"> - </span>
          <a
            className="text-indigo-200/65 transition-colors hover:text-indigo-500"
            href={testimonial.link ?? "#0"}
            target="_blank"
            rel="noopener noreferrer"
          >
            {testimonial.company}
          </a>
        </div>
      </div>
    </article>
  );
}
