import {
  CodeIcon,
  SearchIcon,
  Facebook,
  CloudIcon,
  BriefcaseIcon,
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
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                GoWappily Infotech
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] dark:bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[linear-gradient(to_right,var(--color-gray-800),var(--color-indigo-800),var(--color-gray-50),var(--color-indigo-900),var(--color-gray-800))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Your All-in-One Digital Solutions Partner
            </h2>
            <p className="text-lg text-indigo-200/65">
              From hosting and development to marketing, branding, and business
              automation — we provide 45+ professional services under one roof,
              blending creativity with technology to help brands grow, scale,
              and succeed.
            </p>
          </div>
          {/* Items */}
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">
            {/* Web Development */}
            <article>
              <div className="flex items-center gap-2 mb-2">
                <CodeIcon className="h-6 w-6" />
                <h3 className="font-nacelle text-[1rem] font-semibold text-gray-200">
                  Web Development
                </h3>
              </div>
              <p className="text-indigo-200/65 pl-8">
                Responsive websites, custom web apps, e-commerce platforms,
                SEO-ready structures, and seamless API integrations tailored to
                your business.
              </p>
            </article>

            {/* App Development */}
            <article>
              <div className="flex items-center gap-2 mb-2">
                <CodeIcon className="h-6 w-6" />
                <h3 className="font-nacelle text-[1rem] font-semibold text-gray-200">
                  App Development
                </h3>
              </div>
              <p className="text-indigo-200/65 pl-8">
                Native Android & iOS apps, cross-platform solutions, engaging
                UI/UX design, real-time updates, and ongoing app support and
                maintenance.
              </p>
            </article>

            {/* SEO */}
            <article>
              <div className="flex items-center gap-2 mb-2">
                <SearchIcon className="h-6 w-6" />
                <h3 className="font-nacelle text-[1rem] font-semibold text-gray-200">
                  SEO
                </h3>
              </div>
              <p className="text-indigo-200/65 pl-8">
                Comprehensive on-page and technical SEO, keyword research, local
                SEO, audits, and content optimization to boost your search
                rankings.
              </p>
            </article>

            {/* Social Media Marketing */}
            <article>
              <div className="flex items-center gap-2 mb-2">
                <Facebook className="h-6 w-6" />
                <h3 className="font-nacelle text-[1rem] font-semibold text-gray-200">
                  Social Media Marketing
                </h3>
              </div>
              <p className="text-indigo-200/65 pl-8">
                Facebook, Instagram, Twitter, and LinkedIn campaigns with
                content creation, audience engagement, ad management, and
                detailed analytics.
              </p>
            </article>

            {/* Performance Marketing */}
            <article>
              <div className="flex items-center gap-2 mb-2">
                <CloudIcon className="h-6 w-6" />
                <h3 className="font-nacelle text-[1rem] font-semibold text-gray-200">
                  Performance Marketing
                </h3>
              </div>
              <p className="text-indigo-200/65 pl-8">
                ROI-driven paid media campaigns on Google Ads and Meta Ads,
                conversion tracking, A/B testing, and campaign optimization to
                maximize growth.
              </p>
            </article>

            {/* CRM/ERP */}
            <article>
              <div className="flex items-center gap-2 mb-2">
                <BriefcaseIcon className="h-6 w-6" />
                <h3 className="font-nacelle text-[1rem] font-semibold text-gray-200">
                  CRM/ERP
                </h3>
              </div>
              <p className="text-indigo-200/65 pl-8">
                Custom CRM development, ERP implementation, workflow automation,
                sales dashboards, and business data reporting for smarter
                operations.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
