"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useTheme } from "@/app/ThemeContext";


gsap.registerPlugin(useGSAP);

export default function HeroHome() {
  const containerRef = useRef(null);

  const { darkMode } = useTheme();

  useGSAP(
    () => {
      gsap.from("#welcome-heading", {
        y: 100,
        opacity: 0,
        ease: "power3.out",
        stagger: 0.1,
        duration: 5,
      });
      gsap.from("#welcome-heading .letter", {
        y: 100,
        opacity: 0,
        ease: "power3.out",
        stagger: 0.1,
        // duration: 0.5,
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef}>
      <div className="relative w-full h-[20vh] md:h-[30vh]">
        <video
          autoPlay
          loop
          muted
          className={`h-full w-full object-cover ${darkMode&&"opacity-40"}`}
        >
          <source src="/vdo.mp4" type="video/mp4" />
        </video>
        <div className="absolute h-full text-center w-full bg-[#070c1c]/50 left-0 top-0 flex justify-center items-center">
          <div
            id="welcome-heading"
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl animate-[gradient_6s_linear_infinite] 

     
            bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))]

            
            
            bg-[length:200%_auto] 
            bg-clip-text font-serif 
            font-semibold 
            text-transparent py-4`}
          >
            {/* <span className="letter">W</span>
            <span className="letter">e</span>
            <span className="letter">l</span>
            <span className="letter">c</span>
            <span className="letter">o</span>
            <span className="letter">m</span>
            <span className="letter">e</span>
            <span className="letter"> </span>
            <span className="letter">t</span>
            <span className="letter">o</span>
            <span className="letter"> </span> */}
            <span className="letter">G</span>
            <span className="letter">o</span>
            <span className="letter">W</span>
            <span className="letter">a</span>
            <span className="letter">p</span>
            <span className="letter">p</span>
            <span className="letter">p</span>
            <span className="letter">i</span>
            <span className="letter">l</span>
            <span className="letter">y</span>
            <span className="letter"> </span>
            <span className="letter">I</span>
            <span className="letter">n</span>
            <span className="letter">f</span>
            <span className="letter">o</span>
            <span className="letter">t</span>
            <span className="letter">e</span>
            <span className="letter">c</span>
            <span className="letter">h</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 ">
        {/* <ModalVideo
          thumb={VideoThumb}
          thumbWidth={1104}
          thumbHeight={576}
          thumbAlt="Modal video thumbnail"
          video="videos//video.mp4"
          videoWidth={1920}
          videoHeight={1080}
        /> */}

        {/* Hero content */}
        <div id="about" className="py-12 md:py-20">
          {/* Section header */}
          <div className=" text-center ">
            <h1
              className={`animate-[gradient_6s_linear_infinite] 
               ${
                 darkMode
                   ? "bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))]"
                   : "bg-[linear-gradient(to_right,var(--color-gray-800),var(--color-indigo-800),var(--color-gray-50),var(--color-indigo-900),var(--color-gray-800))] "
               }
               bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl`}
              data-aos="fade-up"
            >
              {/* Driving Growth Through Next-Gen Digital Solutions */}
              Powering Business Growth with Smart Digital Solutions
            </h1>
            <div className="mx-auto max-w-4xl">
              <p
                className={`mb-8 text-xl text-indigo-200/65 ${
                  darkMode ? "text-indigo-200/65" : "text-indigo-900/90"
                }`}
                data-aos="fade-up"
                data-aos-delay={200}
              >
                {/* At GoWappily Infotech, we transform your ideas into reality
                with our extensive range of professional services. Experience
                the future of technology with our stunning 3D animations and
                dark-themed design. */}
                {/* GoWappily Infotech is a comprehensive digital technology partner
                delivering <strong>45+ specialized services</strong> under one
                platform. From software development, web hosting, and cloud
                infrastructure to digital marketing, branding, and business
                process automation, we enable businesses with smart, scalable,
                and high-impact solutions. Our skilled team combines innovation
                with technology to craft customized strategies that empower
                brands to grow, expand, and thrive in today’s dynamic digital
                landscape. market. */}
                GoWappily Infotech is your trusted digital partner, delivering
                expert solutions in app development, web development, social
                media marketing, performance marketing, SEO, and CRM/ERP
                systems. We combine creativity, strategy, and technology to
                craft tailored digital experiences that drive visibility,
                engagement, and growth. Our goal is to help businesses scale and
                succeed in today’s competitive digital landscape through
                results-driven, smart, and scalable solutions.
              </p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                {/* <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn group mb-4 w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="/contact-us"
                  >
                    <span className="relative inline-flex items-center">
                      Start Building
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div> */}
                {/* <div data-aos="fade-up" data-aos-delay={600}>
                  <a
                    className="btn relative w-full bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                    href="#0"
                  >
                    Schedule Demo
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
