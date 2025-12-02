"use client";

import React from "react";
import { FaHeart } from "react-icons/fa";
import { useTheme } from "../ThemeContext";

const AboutUs = () => {
  const { darkMode } = useTheme();
  return (
    <section
      id="about"
      className={`py-16  min-h-screen  text-center ${
        darkMode ? "bg-gray-950 text-gray-100" : "bg-white text-gray-900 "
      } `}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
        {/* <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
          <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
            GoWappily Infotech
          </span>
        </div> */}
        <div className="text-center mb-16">
          <h1
            className={`animate-[gradient_6s_linear_infinite] 
          ${
            darkMode
              ? "bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))]"
              : "bg-[linear-gradient(to_right,var(--color-gray-800),var(--color-indigo-800),var(--color-gray-50),var(--color-indigo-900),var(--color-gray-800))] "
          }

          bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-serif font-semibold  text-transparent md:text-5xl`}
          >
            About US
          </h1>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="prose prose-invert max-w-none">
            <h3 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 tracking-tight">
              About Us{" "}
              <span className="relative inline-block ml-1">
                <span className="text-danger gold-glow text-3xl relative z-10">
                  <FaHeart />
                </span>
                <span className="absolute -inset-0.5 blur-[6px] bg-danger/40 rounded-full animate-pulse z-0"></span>
                <span className="absolute -inset-1 blur-[12px] bg-danger/20 rounded-full animate-pulse z-0 delay-75"></span>
              </span>
            </h3>

            <p className="text-gray-light font-roboto mb-6 text-lg italic">
              Welcome to GoWappily — Your Partner in Digital Growth.
            </p>

            <p className="text-gray-light text-base md:text-lg font-roboto mb-4">
              Based in Noida, India, GoWappily is a creative digital marketing
              agency focused on transforming your online presence. We specialize
              in innovative strategies, impactful advertising, and tailored
              solutions that drive brand growth, engagement, and success.
            </p>

            <p className="text-gray-light text-base md:text-lg  font-roboto mb-4">
              In today's fast-paced digital-first world, standing out requires
              more than just being online — it demands purposeful strategy,
              creative storytelling, and consistent execution. That’s exactly
              what we deliver.
            </p>

            <p className="text-gray-light text-base md:text-lg  font-roboto mb-4">
              Our team of strategists, designers, and digital experts works
              passionately to help brands thrive. Whether you’re a startup or an
              established business, we tailor our digital marketing solutions to
              align with your unique goals and brand identity.
            </p>

            <p className="text-gray-light text-base md:text-lg  font-roboto mb-4">
              Our services span across brand building, performance marketing,
              SEO, social media, creative advertising, web development, and
              more. At the heart of it all is a commitment to measurable results
              and creating lasting impact.
            </p>

            <p className="text-gray-light text-base md:text-lg  font-roboto mb-4">
              Every brand has a story — and our mission is to help you tell
              yours in the most compelling way possible. With our deep
              understanding of market trends, user behavior, and digital
              platforms, we turn ideas into outcomes that matter.
            </p>

            <p className="text-gray-light text-base md:text-lg  font-roboto italic text-right">
              Let's grow, create, and succeed — together.
            </p>
          </div>

          <div className="relative aspect-square md:aspect-auto md:h-[600px]">
            <img
              src="/GowappilyLogo.svg"
              alt="Agency studio"
              className="w-full h-full object-cover rounded-lg shadow-text border bg-white"
            />

            <div className="absolute z-40 -bottom-20 md:-bottom-20 -right-4 w-36 h-36 md:w-56 md:h-56 bg-[#513ef7] border border-danger/40 rounded-lg p-4 md:p-6 flex items-center justify-center">
              <div className="text-center">
                <p className="text-3xl md:text-5xl font-bold font-montserrat text-white shadow-text">
                  5+
                </p>

                <p className="text-xs md:text-base text-white font-roboto mt-1 md:mt-2">
                  Years of Creative Excellence
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section
        className={`pt-24 ${
          darkMode ? "bg-black-theme-poor" : "bg-white"
        }  text-white relative overflow-hidden`}
      >
        {/* <div className="absolute inset-0 bg-black/70 z-0"></div> */}
        <div className="absolute top-0 left-0 w-full h-[2px] overflow-hidden">
          <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-danger/70 to-transparent animate-gold-pulse"></div>
        </div>

        <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-danger/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 rounded-full bg-danger/5 blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16 opacity-100 transform-none">
            <h2
              className={`  ${
                darkMode ? "text-indigo-200/65" : "text-indigo-900/90"
              }
          text-3xl md:text-4xl font-bold font-montserrat mb-4 tracking-tight `}
            >
              Meet Our <span className="shadow-text">Founder</span>
            </h2>
            <p
              className={`  ${
                darkMode ? "text-indigo-200/65" : "text-indigo-900"
              } text-gray-light font-roboto max-w-2xl mx-auto`}
            >
              The creative mind behind GoWappily, committed to crafting
              exceptional brand experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 lg:gap-16 max-w-lg mx-auto">
            {/** CEO profile */}
            <div className="relative z-10 group opacity-100 transform-none">
              <div className="relative overflow-hidden h-full">
                <div className="relative overflow-hidden">
                  <img
                    src="/ceo.jpeg"
                    alt=""
                    className="w-full aspect-[1/1] rounded-full object-cover object-top transition-all duration-500"
                  />

                  <div
                    className={`  ${
                      darkMode ? "bg-black/90" : "bg-white/90"
                    } absolute inset-0  backdrop-blur-sm flex flex-col justify-center items-center transition-all duration-300 p-8 opacity-0 md:group-hover:opacity-100`}
                  >
                    <div className="max-w-xs">
                      <h3
                        className={`  ${
                          darkMode ? "text-white-theme-pure" : "text-gray-900"
                        }  text-2xl font-bold font-montserrat mb-1`}
                      >
                        Abhay Bhadauria
                      </h3>

                      <span
                        className={`  ${
                          darkMode ? "text-white-theme-pure" : "text-gray-900"
                        }  text-lg font-medium tracking-wide font-montserrat mb-4 inline-block`}
                      >
                        CEO
                      </span>

                      <p
                        className={`  ${
                          darkMode ? "text-white-theme-pure" : "text-gray-900"
                        } text-danger font-medium text-center mb-1 font-montserrat`}
                      >
                        Founder. Visual storyteller. People-first builder.
                      </p>

                      <p
                        className={`  ${
                          darkMode ? "text-white-theme-pure" : "text-gray-900"
                        } text-white-theme-pure font-roboto text-center`}
                      >
                        From editing suites to film sets, Himanshu has spent
                        years crafting stories that connect. Now, he brings
                        creative minds and cutting-edge tech together under one
                        roof — building an agency where everyone grows, and
                        wins, together.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-3">
                  <div
                    className={`  ${
                      darkMode ? "text-white-theme-pure" : "text-gray-900"
                    } text-xl font-medium tracking-wide font-montserrat`}
                  >
                    Abhay Bhadauria
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="relative z-10 group opacity-100 transform-none">
              <div className="relative overflow-hidden h-full">
                <div className="relative aspect-[9/16] overflow-hidden">
                  <img
                    src={Nihal}
                    alt=""
                    className="w-full h-full object-cover transition-all duration-500"
                  />

                  <div className="absolute inset-0 bg-black/90 backdrop-blur-sm flex flex-col justify-center items-center transition-all duration-300 p-8 opacity-0 md:group-hover:opacity-100">
                    <div className="max-w-xs">
                      <h3 className="text-white-theme-pure text-2xl font-bold font-montserrat mb-1">
                        Nihal Singh
                      </h3>

                      <span className="text-danger text-lg font-medium tracking-wide font-montserrat mb-4 inline-block">
                        CTO
                      </span>

                      <p className="text-danger font-medium text-center mb-1 font-montserrat">
                        Tech visionary. Systems thinker. Founding builder.
                      </p>

                      <p className="text-white-theme-pure font-roboto text-center">
                        An IITian with deep expertise in generative AI, Nihal
                        leads our entire technology vertical — building scalable
                        systems and pushing the boundaries of what's possible.
                        Off the clock, you'll likely find him deep in an FPS
                        match, as precise with strategy as he is with code.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-3">
                  <div className="text-danger text-lg font-medium tracking-wide font-montserrat">
                    Tech-smith
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutUs;
