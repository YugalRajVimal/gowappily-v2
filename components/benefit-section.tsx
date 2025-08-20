"use client";

import {
  Rocket,
  ShieldCheck,
  Users,
  Lightbulb,
  Clock,
  Award,
} from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <Rocket className="w-8 h-8 text-indigo-400" />,
      title: "All-in-One Solutions",
      description:
        "From hosting and development to marketing and legal services — everything under one roof.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-indigo-400" />,
      title: "Security & Reliability",
      description:
        "Enterprise-grade security with 99.9% uptime, ensuring your business runs without interruptions.",
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-400" />,
      title: "Expert Team Support",
      description:
        "A dedicated team of professionals with expertise across diverse industries and technologies.",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-indigo-400" />,
      title: "Innovation First",
      description:
        "We blend creativity with cutting-edge tech to deliver unique, future-ready solutions.",
    },
    {
      icon: <Clock className="w-8 h-8 text-indigo-400" />,
      title: "On-Time Delivery",
      description:
        "Our agile approach ensures timely project completion without compromising on quality.",
    },
    {
      icon: <Award className="w-8 h-8 text-indigo-400" />,
      title: "Proven Track Record",
      description:
        "Trusted by startups and enterprises alike, with measurable results and client satisfaction.",
    },
  ];

  return (
    <section id="benefits" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Why Choose GoWappily Technologies?
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-indigo-200/70">
            We do more than provide digital solutions — we craft impactful
            experiences that empower your business to grow, innovate, and
            succeed in today’s competitive digital world.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-900/50 p-6 rounded-xl hover:scale-[1.05] border border-gray-800 hover:border-indigo-400 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                {benefit.icon}
                <h3 className="text-xl font-semibold text-gray-200">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-indigo-200/70 text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
