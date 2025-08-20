"use client";

import { Rocket, TrendingUp, Crown, CheckCircle2 } from "lucide-react";

export default function PlansSection() {
  const plans = [
    {
      icon: <Rocket className="w-10 h-10 text-indigo-400" />,
      title: "Plan 1 – Starter",
      description:
        "Best for: Individuals & startups jo basic online presence chahte hain.",
      features: [
        "Shared Hosting (1 year) + 1 Domain",
        "Free SSL Certificate",
        "5-page Responsive Website",
        "Logo Design (Basic)",
        "Google Business Profile Setup",
        "Basic SEO (5 keywords)",
        "5 Social Media Post Designs",
        "Email Support",
      ],
      highlight: "Affordable entry-level pricing for quick launch",
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-indigo-400" />,
      title: "Growth – Scale & Automate",
      description:
        "Best for: Small & medium businesses jo growth & lead generation chahte hain.",
      features: [
        "WordPress Hosting (1 year) + 1 Domain",
        "Free SSL Certificate",
        "Business Website (10 pages) OR Landing Page + Blog",
        "Payment Gateway Integration",
        "Logo Design (Premium)",
        "10 Social Media Post Designs",
        "1 Promotional Video (30 sec)",
        "Advanced SEO (10 keywords)",
        "Google Ads / Meta Ads Setup",
        "Meta Pixel & Conversion Tracking",
        "Priority Email & WhatsApp Support",
      ],
      highlight: "Balanced pricing for brands ready to grow and generate leads",
    },
    {
      icon: <Crown className="w-10 h-10 text-indigo-400" />,
      title: "Ultimate – Complete Digital Transformation",
      description:
        "Best for enterprises jo complete digital transformation chahte hain, with end-to-end tech, marketing, and legal support.",
      features: [
        "Managed VPS Hosting (1 year) + Premium Domain",
        "Premium SSL Certificate",
        "Custom Website / Web App Development",
        "ERP or CRM Setup",
        "Payment Gateway Integration",
        "LMS (Learning Management System) Setup",
        "Full Branding Kit (Logo, Fonts, Templates)",
        "Unlimited Social Media Post Designs",
        "4 Promotional Videos / month",
        "Full SEO (unlimited keywords)",
        "Ads Management (Google + Meta)",
        "Email & SMS Marketing Setup",
        "GST Registration",
        "ISO Certification Assistance",
        "Trademark Filing Support",
        "24/7 Phone, Email & WhatsApp Support",
        "Dedicated Account Manager",
      ],
      highlight:
        "Premium solution for enterprises seeking complete digital transformation",
    },
  ];

  return (
    <section id="plans" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
          <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
            GoWappily Technologies
          </span>
        </div>
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
            Our Service Plans
          </h2>
          <p className="mt-3 text-indigo-200/80 max-w-2xl mx-auto">
            Choose the perfect plan for your business growth — from launch to
            market leadership.
          </p>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-gray-900/60 rounded-2xl border border-gray-800 hover:border-indigo-400 transition-all duration-300 p-8 flex flex-col shadow-lg hover:shadow-indigo-500/20"
            >
              {/* Icon & Title */}
              <div className="flex flex-col items-center mb-6">
                <div className="mb-4">{plan.icon}</div>
                <h3 className="text-xl font-bold text-gray-200 text-center">
                  {plan.title}
                </h3>
                <p className="text-indigo-200/70 text-sm text-center mt-2">
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 flex-1">
                {plan.features.map((feature, fIndex) => (
                  <li
                    key={fIndex}
                    className="flex items-start gap-2 text-sm text-indigo-100/80"
                  >
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-[2px]" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Highlight */}
              <div className="mt-6 text-center text-indigo-400 font-semibold text-sm">
                {plan.highlight}
              </div>

              {/* Button */}
              <div className="mt-6">
                <button className="w-full py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white font-medium transition">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
