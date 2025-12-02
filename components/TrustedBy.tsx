"use client";

import React, { useRef, useState, useEffect } from "react";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "@/app/ThemeContext";

// ✅ Interfaces
interface ClientLogo {
  id: number;
  name: string;
  image: string;
}

interface ReviewStat {
  id: number;
  name: string;
  count: number;
  icon?: string;
}

interface BrandLogoSliderProps {
  clientLogos: ClientLogo[];
}

interface AnimatedCounterProps {
  end: number;
  icon?: string;
  name: string;
}

// ✅ Animated Counter Component
const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  icon,
  name,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target); // only trigger once
        }
      },
      { threshold: 0.5 } // triggers when 50% visible
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center">
      <span className="block text-4xl md:text-5xl font-bold text-danger mb-1 font-montserrat">
        {inView ? <CountUp start={0} end={end} duration={2} /> : 0} {icon}
      </span>
      <span className="text-gray-light text-sm uppercase tracking-wider font-roboto">
        {name}
      </span>
    </div>
  );
};

// ✅ Brand Logo Slider Component
const BrandLogoSlider: React.FC<BrandLogoSliderProps> = ({ clientLogos }) => (
  <div className="relative w-full">
    {/* Navigation Arrows */}
    <div className="absolute inset-y-0 -left-10 z-10 flex items-center">
      <button className="swiper-button-prev-custom text-[#f10000] hover:scale-[2] p-2 transition">
        <ChevronLeft className="w-8 h-8" />
      </button>
    </div>
    <div className="absolute inset-y-0 -right-10 z-10 flex items-center">
      <button className="swiper-button-next-custom text-[#f10000] hover:scale-[2] p-2 transition">
        <ChevronRight className="w-8 h-8" />
      </button>
    </div>

    {/* Swiper Carousel */}
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation={{
        nextEl: ".swiper-button-next-custom",
        prevEl: ".swiper-button-prev-custom",
      }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      loop
      speed={800}
      slidesPerView={2}
      spaceBetween={20}
      breakpoints={{
        640: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 5 },
      }}
      className="py-6"
    >
      {clientLogos.map((client) => (
        <SwiperSlide key={client.id}>
          <div
            className="h-20 sm:h-24 md:h-28 w-full flex items-center justify-center p-3 sm:p-4 bg-white rounded-lg border border-gray-300 hover:border-[#f10000] transition-all duration-300 shadow-[0_3px_10px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_20px_rgba(0,0,0,0.15)]"
            style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 4px 6px" }}
          >
            <div
              className="w-full h-full flex items-center justify-center overflow-hidden"
              style={{
                maxWidth: "90%",
                maxHeight: "90%",
                objectFit: "contain",
              }}
            >
              <img
                src={client.image}
                alt={client.name}
                className={`max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-110 ${
                  client.image.includes("com11.svg") ||
                  client.image.includes("com12.svg")
                    ? "scale-[1.8] hover:scale-[2.2]"
                    : ""
                }`}
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

// ✅ Main TrustedBy Component
const TrustedBy: React.FC = () => {
  const clientLogos: ClientLogo[] = [
    { id: 1, name: "Client 1", image: "/brands/com1.webp" },
    { id: 2, name: "Client 2", image: "/brands/com2.webp" },
    { id: 3, name: "Client 3", image: "/brands/com3.webp" },
    { id: 4, name: "Client 4", image: "/brands/com4.png" },
    { id: 5, name: "Client 5", image: "/brands/com5.jpg" },
    { id: 7, name: "Client 7", image: "/brands/com7.png" },
    { id: 8, name: "Client 8", image: "/brands/com8.png" },
    { id: 9, name: "Client 9", image: "/brands/com9.webp" },
    { id: 10, name: "Client 10", image: "/brands/com10.webp" },
    { id: 11, name: "Client 11", image: "/brands/com11.svg" },
    { id: 12, name: "Client 12", image: "/brands/com12.svg" },
  ];

  const reviewStats: ReviewStat[] = [
    { id: 1, name: "Brands", count: 120, icon: "+" },
    { id: 2, name: "Years Experience", count: 5 },
    { id: 3, name: "Projects Completed", count: 500, icon: "+" },
  ];

  const { darkMode } = useTheme();

  return (
    <section className="">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        {/* <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-widest text-white mb-4 font-montserrat">
            Our Clients
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 tracking-tight text-white ">
            Trusted by Industry Leaders
          </h3>
          <p className="text-gray-light font-roboto">
            We’re proud to collaborate with innovative brands across industries
            to deliver exceptional creative solutions.
          </p>
        </div> */}

        {/* Brand Logos */}
        <div className="">
          <div className="md:container mx-auto">
            <div className="rounded-xl p-8 md:px-10 md:pb-10 ">
              <div className="text-center mb-12">
                <h2
                  className={`text-3xl md:text-4xl font-bold   font-montserrat mb-2  ${
                    darkMode ? "text-white" : "text-indigo-900/90"
                  }`}
                >
                  Our Trusted Partners
                </h2>
                <p className="text-gray-600 font-roboto">
                  We’re proud to collaborate with these amazing brands
                </p>
                <div className="w-24 h-1 bg-white mx-auto mt-4" />
                <div className="mt-2 text-center">
                  <a
                    className="btn group w-full sm:w-auto bg-linear-to-t from-indigo-600 to-indigo-500 text-white hover:bg-[length:100%_150%]"
                    href="/contact-us"
                  >
                    <span className="relative inline-flex items-center">
                      Partner with Us
                      <span className="ml-1 text-white/50 group-hover:translate-x-0.5 transition-transform">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
              </div>

              <BrandLogoSlider clientLogos={clientLogos} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
