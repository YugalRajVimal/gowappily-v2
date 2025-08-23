"use client";

import {
  Cloud,
  Code2,
  Megaphone,
  Globe,
  Brush,
  Shield,
  Briefcase,
  Code,
  Search,
  Facebook,
  Scale,
} from "lucide-react"; // Lucide Icons

export default function Services() {
  const services = [
    {
      title: "Hosting & Cloud Solutions",
      icon: <Cloud className="w-8 h-8 text-indigo-400" />,
      plans: [
        {
          name: "Essential",
          price: "₹999/mo",
          features: [
            "✔ Shared Hosting (1 Domain)",
            "✔ Free SSL Certificate",
            "✔ 5 Business Emails",
            "✔ Basic DNS Management",
            "✔ cPanel Access",
            "👉 Best for Personal & Startup Websites",
          ],
        },
        {
          name: "Professional",
          price: "₹4,999/mo",
          features: [
            "✔ WordPress / Reseller Hosting",
            "✔ Free Domain (1 Year)",
            "✔ 25 Business Emails",
            "✔ Cloud Storage (25 GB)",
            "✔ Weekly Backup + Priority Support",
            "👉 Perfect for Growing Businesses",
          ],
        },
        {
          name: "Elite",
          price: "₹14,999/mo",
          features: [
            "✔ VPS / Dedicated Server",
            "✔ Unlimited Domains & Emails",
            "✔ Advanced Cloud Storage (100 GB)",
            "✔ Full Server Management",
            "✔ 24/7 Performance Monitoring + Security",
            "👉 Built for Enterprises & Agencies",
          ],
        },
      ],
    },
    {
      title: "Development Solutions",
      icon: <Code className="w-8 h-8 text-green-400" />,
      plans: [
        {
          name: "Essential",
          price: "₹14,999 one-time",
          features: [
            "✔ Business Website (5 Pages)",
            "✔ Basic UI/UX Design",
            "✔ Payment Gateway Integration",
            "✔ Contact Forms + Lead Capture",
            "👉 Ideal for New Startups",
          ],
        },
        {
          name: "Professional",
          price: "₹49,999 one-time",
          features: [
            "✔ Website + Android/iOS App",
            "✔ Telegram / WhatsApp Bot Integration",
            "✔ CRM / LMS Basic Setup",
            "✔ Enhanced UI/UX + Branding Elements",
            "👉 Perfect for SMBs & E-commerce",
          ],
        },
        {
          name: "Elite",
          price: "₹1,49,999+ (Custom)",
          features: [
            "✔ ERP & SaaS Platforms",
            "✔ Advanced Automation Tools",
            "✔ Multi-Platform Applications",
            "✔ Scalable Enterprise Architecture",
            "👉 Made for Corporates & Tech Startups",
          ],
        },
      ],
    },
    {
      title: "Marketing & SEO Solutions",
      icon: <Search className="w-8 h-8 text-orange-400" />,
      plans: [
        {
          name: "Essential",
          price: "₹9,999/mo",
          features: [
            "✔ SEO (10 Keywords)",
            "✔ 1 Social Media Channel Management",
            "✔ Google Analytics Setup",
            "👉 Best for Small Businesses",
          ],
        },
        {
          name: "Professional",
          price: "₹24,999/mo",
          features: [
            "✔ SEO (30 Keywords)",
            "✔ Google Ads + Meta Ads",
            "✔ Multi-Channel Social Media Management",
            "✔ Conversion Tracking",
            "👉 Great for Growing Brands",
          ],
        },
        {
          name: "Elite",
          price: "₹74,999/mo",
          features: [
            "✔ 360° Marketing Strategy",
            "✔ SEO (100+ Keywords)",
            "✔ YouTube + WhatsApp + Email Campaigns",
            "✔ Dedicated Marketing Manager",
            "✔ Funnel Optimization & ROI Reports",
            "👉 Tailored for Enterprises & Agencies",
          ],
        },
      ],
    },
    {
      title: "Meta Ecosystem Solutions",
      icon: <Facebook className="w-8 h-8 text-purple-400" />,
      plans: [
        {
          name: "Essential",
          price: "₹7,999 one-time",
          features: [
            "✔ Meta Business Suite Setup",
            "✔ Facebook Page + Shop Creation",
            "👉 Ideal for Beginners",
          ],
        },
        {
          name: "Professional",
          price: "₹14,999 one-time",
          features: [
            "✔ Instagram Growth Strategy",
            "✔ WhatsApp Cloud API Setup",
            "✔ Messenger Bot Development",
            "👉 Perfect for SMBs",
          ],
        },
        {
          name: "Elite",
          price: "₹39,999 one-time",
          features: [
            "✔ Advanced Catalog Ads",
            "✔ AI-Powered Automation",
            "✔ Multi-Brand Account Management",
            "✔ Audience Retargeting & Optimization",
            "👉 Best for Agencies & Large Brands",
          ],
        },
      ],
    },
    {
      title: "Creative & Branding Solutions",
      icon: <Brush className="w-8 h-8 text-yellow-400" />,
      plans: [
        {
          name: "Essential",
          price: "₹4,999 one-time",
          features: [
            "✔ Logo Design + Color Palette",
            "✔ 5 Social Media Templates",
            "👉 Perfect for Startups",
          ],
        },
        {
          name: "Professional",
          price: "₹14,999 one-time",
          features: [
            "✔ Full Branding Kit (Logo, Fonts, Templates)",
            "✔ 15 Social Media Designs",
            "✔ 3 Professional Video Edits",
            "✔ Website/App UI Design",
            "👉 Best for SMBs & Growing Brands",
          ],
        },
        {
          name: "Elite",
          price: "₹49,999 one-time",
          features: [
            "✔ Corporate Identity Development",
            "✔ Motion Graphics + Animation",
            "✔ Complete UI/UX (Web + Mobile)",
            "✔ Dedicated Creative Team Support",
            "👉 Built for Enterprises",
          ],
        },
      ],
    },
    {
      title: "Cybersecurity & Support Solutions",
      icon: <Shield className="w-8 h-8 text-red-400" />,
      plans: [
        {
          name: "Essential",
          price: "₹4,999/mo",
          features: [
            "✔ Basic Server Maintenance",
            "✔ Security Setup (Firewall + Antivirus)",
            "✔ 5 Business Emails",
            "👉 Best for Small Offices",
          ],
        },
        {
          name: "Professional",
          price: "₹14,999/mo",
          features: [
            "✔ Advanced Firewall Protection",
            "✔ 24/7 Monitoring & Alerts",
            "✔ Business Email Hosting (25 Accounts)",
            "✔ Regular Security Audits",
            "👉 Perfect for Growing Businesses",
          ],
        },
        {
          name: "Elite",
          price: "₹49,999/mo",
          features: [
            "✔ Full Cybersecurity Operations Center (CSOC)",
            "✔ Advanced DDoS & Threat Protection",
            "✔ Unlimited Business Email Hosting",
            "✔ Dedicated 24/7 Security Response Team",
            "👉 Designed for Enterprises",
          ],
        },
      ],
    },
    {
      title: "Legal & Business Services",
      icon: <Scale className="w-8 h-8 text-gray-500" />,
      plans: [
        {
          name: "Essential",
          price: "₹9,999 (one-time)",
          features: [
            "✔ Company Registration (Pvt Ltd / LLP / OPC)",
            "✔ PAN / TAN Registration",
            "✔ GST Registration (Basic)",
            "✔ MSME / Udyam Registration",
            "👉 Best for Startups & Freelancers",
          ],
        },
        {
          name: "Professional",
          price: "₹24,999 (one-time)",
          features: [
            "✔ Company Incorporation (Pvt Ltd / LLP)",
            "✔ GST Registration + Monthly Filing Support (3 Months)",
            "✔ Digital Signature Certificate (DSC)",
            "✔ Trademark Filing (Single Class)",
            "✔ PAN / TAN + MSME/Udyam Registration",
            "👉 Ideal for SMBs & Agencies",
          ],
        },
        {
          name: "Elite",
          price: "₹49,999+ (Custom)",
          features: [
            "✔ End-to-End Legal Compliance Package",
            "✔ Company Incorporation + GST + ISO Certification Assistance",
            "✔ Complete Trademark & IP Protection",
            "✔ Ongoing GST/Tax Filing Support",
            "✔ Corporate Legal Advisory (6 Months)",
            "👉 Tailored for Enterprises & Corporates",
          ],
        },
      ],
    },
  ];

  return (
    <section id="about" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
            GoWappily Infotech
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-indigo-200/70">
            GoWappily Infotech offers <strong>45+ professional services</strong>{" "}
            in hosting, development, marketing, branding, and business
            automation — empowering brands to scale in today’s competitive
            market.
          </p>
        </div>

        {/* Services Grid */}
        <div className="flex flex-col max-w-[1400px] w-full justify-center gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-indigo-400 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                {service.icon}
                <h3 className="text-xl font-semibold text-gray-200">
                  {service.title}
                </h3>
              </div>

              {/* Plans Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.plans?.map((plan, i) => (
                  <div
                    key={i}
                    className="rounded-lg flex flex-col justify-between bg-gray-800/40 px-4 py-6 border border-gray-700 hover:border-indigo-500 transition-all min-h-[320px]"
                  >
                    <div>
                      <h4 className="text-lg font-semibold text-indigo-300">
                        {plan.name} –{" "}
                        <span className="text-gray-200">{plan.price}</span>
                      </h4>
                      <ul className="mt-3 space-y-1 text-sm text-indigo-200/80">
                        {plan.features.map((f, idx) => (
                          <li key={idx} className="flex gap-2 text-sm">
                            <span className="text-indigo-400">•</span>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button className="mt-6 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 border border-indigo-500 rounded shadow">
                      Get Plan
                    </button>
                  </div>
                ))}
              </div>
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
        </div>
      </div>
    </section>
  );
}
