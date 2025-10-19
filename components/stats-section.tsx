"use client";

import { Users, Globe, Layers, Award, Clock, Shield } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-indigo-400" />,
      value: "53+",
      label: "Happy Clients",
    },
    {
      icon: <Globe className="w-8 h-8 text-indigo-400" />,
      value: "45+",
      label: "Professional Services",
    },
    {
      icon: <Layers className="w-8 h-8 text-indigo-400" />,
      value: "60+",
      label: "Projects Delivered",
    },
    {
      icon: <Award className="w-8 h-8 text-indigo-400" />,
      value: "2+",
      label: "Years of Experience",
    },
    {
      icon: <Clock className="w-8 h-8 text-indigo-400" />,
      value: "99%",
      label: "Uptime Guarantee",
    },
    {
      icon: <Shield className="w-8 h-8 text-indigo-400" />,
      value: "100%",
      label: "Secure Solutions",
    },
  ];

  return (
    <section id="stats" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
        {/* Heading */}
        <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
          <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
            GoWappily Infotech
          </span>
        </div>
        <div className="text-center mb-16">
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Our Impact in Numbers
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-indigo-200/70">
            Numbers speak louder than words — here’s how we’ve helped businesses
            grow and thrive.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-indigo-400 hover:scale-[1.05] transition-all duration-300 group"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold text-gray-200 mb-2 group-hover:text-indigo-400 transition-colors">
                {stat.value}
              </div>
              <p className="text-indigo-200/70 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
