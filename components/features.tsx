import Image from "next/image";

import {
  BrushIcon,
  CodeIcon,
  Facebook,
  FacebookIcon,
  FileTextIcon,
  SearchIcon,
  ServerIcon,
  ShieldIcon,
} from "lucide-react";

export default function Features() {
  return (
    <section className="relative">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <img
          className="max-w-none"
          src="/images/blurred-shape-gray.svg"
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <img
          className="max-w-none"
          src="/images/blurred-shape.svg"
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className=" py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                GoWappily Infotech
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Your All-in-One Digital Solutions Partner
            </h2>
            <p className="text-lg text-indigo-200/65">
              From hosting and development to marketing, branding, and business
              automation — we provide 45+ professional services under one roof,
              blending creativity with technology to help brands grow, scale,
              and succeed.
            </p>
          </div>
          <div className="flex justify-center pb-4 md:pb-12" data-aos="fade-up">
            <img
              className="max-w-none"
              src="/images/features.png"
              width={1104}
              height={384}
              alt="GoWappily Services"
            />
          </div>
          {/* Items */}
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">
            <article>
              <div className="flex items-center gap-2 mb-2">
                <CodeIcon className="h-6 w-6" />
                <h3 className=" font-nacelle text-[1rem] font-semibold text-gray-200">
                  Development Solutions
                </h3>
              </div>
              <p className="text-indigo-200/65 pl-8">
                Websites, mobile apps, custom software, ERP, CRM, bots, and
                payment gateway integrations built for your business goals.
              </p>
            </article>
            <article>
              <div className="flex items-center gap-2 mb-2">
                <SearchIcon className="h-6 w-6" />
                <h3 className=" font-nacelle text-[1rem] font-semibold text-gray-200">
                  Marketing & SEO
                </h3>
              </div>
              <p className="text-indigo-200/65 pl-8">
                SEO, Google & Meta ads, social media management, bulk messaging,
                and conversion tracking to boost your reach and ROI.
              </p>
            </article>
            <article>
              <div className="flex items-center gap-2 mb-2">
                <Facebook className="h-6 w-6" />
                <h3 className=" font-nacelle text-[1rem] font-semibold text-gray-200">
                  Meta Ecosystem Expertise
                </h3>
              </div>
              <p className="text-indigo-200/65 pl-8">
                Facebook/Instagram growth, Messenger & WhatsApp bots, cloud API,
                and catalog ads for better engagement and sales.
              </p>
            </article>
            <article>
              <div className="flex items-center gap-2 mb-2">
                <ServerIcon className="h-6 w-6" />
                <h3 className=" font-nacelle text-[1rem] font-semibold text-gray-200">
                  Hosting & Cloud Services
                </h3>
              </div>
              <p className="text-indigo-200/65 pl-8">
                Shared hosting, VPS, dedicated servers, cloud storage, domain
                registration, and SSL — secure, reliable, and scalable.
              </p>
            </article>

            <article>
              <div className="flex items-center gap-2 mb-2">
                <BrushIcon className="h-6 w-6" />
                <h3 className=" font-nacelle text-[1rem] font-semibold text-gray-200">
                  Creative & Branding
                </h3>
              </div>
              <p className="text-indigo-200/65 pl-8">
                Logos, social media creatives, videos, UI/UX, and full branding
                kits to give your business a memorable identity.
              </p>
            </article>
            <article>
              <div className="flex items-center gap-2 mb-2">
                <ShieldIcon className="h-6 w-6" />
                <h3 className=" font-nacelle text-[1rem] font-semibold text-gray-200">
                  Cyber & Business Support
                </h3>
              </div>
              <p className="text-indigo-200/65 pl-8">
                Server management, cybersecurity, business email hosting, and
                technical support to keep your operations running smoothly.
              </p>
            </article>
            <article>
              <div className="flex items-center gap-2 mb-2">
                <FileTextIcon className="h-6 w-6" />
                <h3 className=" font-nacelle text-[1rem] font-semibold text-gray-200">
                  Legal & Compliance
                </h3>
              </div>
              <p className="text-indigo-200/65 pl-8">
                Company registration, GST filing, ISO certification, DSC,
                trademark, MSME/Udyam, and PAN/TAN registration support.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
