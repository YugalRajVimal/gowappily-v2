import Image from "next/image";

import Spotlight from "@/components/spotlight";

export default function Workflows() {
  const WorflowImg01 = "/images/workflow-01.png";
  const WorflowImg02 = "/images/workflow-02.png";
  const WorflowImg03 = "/images/workflow-03.png";

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Transforming Ideas into Success.
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Crafting Dreams into Reality.
            </h2>
            <p className="text-lg text-indigo-200/65">
              From software development and web hosting to branding and business
              automation, GoWappily Infotech offers 45+ expert services designed
              to accelerate growth, drive scalability, and ensure long-term
              success for your business.
            </p>
          </div>

          {/* Spotlight items */}
          <Spotlight className="group mx-auto flex justify-center gap-4 flex-wrap w-full  items-start gap-6 lg:max-w-none ">
            {/* Card 1 */}
            <a
              className="group/card relative w-full md:w-[40%] h-full overflow-hidden rounded-2xl bg-gray-800 p-px ..."
              href="#0"
            >
              <div className="relative z-20 h-full overflow-hidden  rounded-[inherit] bg-gray-950 ...">
                {/* Image */}
                <img
                  src={WorflowImg01}
                  width={350}
                  height={288}
                  className="mx-auto"
                  alt="Hosting & Cloud Services"
                />
                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal ...">
                      <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                        Web Development
                      </span>
                    </span>
                  </div>
                  <p className="text-indigo-200/65">
                    At GoWappily Infotech, we design and develop websites that
                    are fast, secure, and user-friendly. Our web development
                    services cover everything from dynamic business websites to
                    custom portals and eCommerce platforms. With responsive
                    designs, SEO-ready structures, and seamless navigation, we
                    ensure your online presence makes the right impact. Whether
                    you need a corporate site, a startup landing page, or a
                    full-scale web application, our team blends creativity with
                    functionality to deliver high-performing solutions that
                    drive engagement and conversions.
                  </p>
                </div>
              </div>
            </a>

            {/* Card 2 */}
            <a
              className="group/card relative w-full md:w-[40%] h-full overflow-hidden rounded-2xl bg-gray-800 p-px ..."
              href="#0"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 ...">
                {/* Image */}
                <img
                  src={WorflowImg02}
                  width={350}
                  height={288}
                  className="mx-auto"
                  alt="Development Solutions"
                />
                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal ...">
                      <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                        App Development
                      </span>
                    </span>
                  </div>
                  <p className="text-indigo-200/65">
                    We build intuitive and scalable mobile applications tailored
                    to your business goals. From Android and iOS apps to
                    cross-platform solutions, GoWappily Infotech ensures smooth
                    performance, engaging UI/UX, and future-ready technology.
                    Our app development services include custom app design, API
                    integration, real-time updates, and robust security to give
                    your users a seamless experience. Whether it’s an eCommerce
                    app, service-based platform, or enterprise-level solution,
                    we create apps that boost customer engagement and business
                    growth.
                  </p>
                </div>
              </div>
            </a>

            {/* Card 3 */}
            <a
              className="group/card relative h-full w-full md:w-[40%] overflow-hidden rounded-2xl bg-gray-800 p-px ..."
              href="#0"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 ...">
                {/* Image */}
                <img
                  src={WorflowImg03}
                  width={350}
                  height={288}
                  className="mx-auto"
                  alt="Marketing & Branding"
                />
                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal ...">
                      <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                        Digital Marketing
                      </span>
                    </span>
                  </div>
                  <p className="text-indigo-200/65">
                    GoWappily Infotech offers end-to-end digital marketing
                    strategies to put your brand in front of the right audience.
                    Our services include SEO, social media marketing, Google
                    Ads, content creation, and email campaigns—all designed to
                    generate leads and increase visibility. With data-driven
                    insights and creative campaigns, we help businesses build
                    strong digital footprints, improve online reputation, and
                    achieve measurable results. From startups to enterprises, we
                    craft marketing solutions that scale with your business.
                  </p>
                </div>
              </div>
            </a>
            <a
              className="group/card relative w-full md:w-[40%] h-full overflow-hidden rounded-2xl bg-gray-800 p-px ..."
              href="#0"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 ...">
                {/* Image */}
                <img
                  src={WorflowImg01}
                  width={350}
                  height={288}
                  className="mx-auto"
                  alt="Hosting & Cloud Services"
                />
                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal ...">
                      <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                        Hosting Services
                      </span>
                    </span>
                  </div>
                  <p className="text-indigo-200/65">
                    Our reliable and secure hosting solutions keep your business
                    online—always. GoWappily Infotech provides shared, VPS,
                    cloud, and dedicated hosting tailored to different business
                    needs. With 99.9% uptime, fast load speeds, advanced
                    security, and 24/7 technical support, we ensure your website
                    or application runs smoothly without interruptions. Whether
                    you’re hosting a personal blog, an eCommerce site, or a
                    corporate application, our hosting services deliver speed,
                    scalability, and peace of mind.
                  </p>
                </div>
              </div>
            </a>
          </Spotlight>
        </div>
      </div>
    </section>
  );
}
