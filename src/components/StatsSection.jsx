"use client";

import {
  Briefcase,
  Buildings,
  Factory,
  Persons,
  Star,
} from "@gravity-ui/icons";
import { motion } from "motion/react"

const stats = [
  {
    icon: Briefcase,
    value: "50K",
    label: "Active Jobs",
  },
  {
    icon: Factory,
    value: "12K",
    label: "Companies",
  },
  {
    icon: Persons,
    value: "2M",
    label: "Job Seekers",
  },
  {
    icon: Star,
    value: "97%",
    label: "Satisfaction Rate",
  },
];

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-black py-24 lg:py-36">
      {/* Globe Background */}
      <div
        className="absolute inset-0 bg-top bg-no-repeat opacity-90"
        style={{
          backgroundImage: "url('images/globe.png')",
          backgroundSize: "100% auto",
          backgroundPosition: "center",
        }}
      />

      {/* Purple Glow */}
      <div className="absolute left-1/2 top-0 h-[400px] w-[900px] -translate-x-1/2 rounded-full bg-violet-600/30 blur-[140px]" />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black" />

      <div className="relative z-10 mx-auto max-w-7xl px-5">
        {/* Heading */}
        <div className="mx-auto max-w-3xl pt-20 text-center">
          <h2 className="text-3xl font-medium leading-tight text-white md:text-5xl">
            Assisting over{" "}
            <span className="text-violet-400">15,000 job seekers</span>
            <br />
            find their dream positions.
          </h2>
          <motion.p animate={{ rotate: 360 }} className="text-xl font-bold">Remote Job</motion.p>
          <motion.p  initial={{ scale: 0 }} animate={{ scale: 2 ,  transition: { duration: 2 } }}  className="text-xl text-violet-400 font-bold">On-Site Job</motion.p>
        </div>

        {/* Stats Cards */}
        <div className="mt-24 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-3xl border border-white/10 bg-black/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-violet-500/40"
              >
                <div className="mb-12">
                  <Icon className="h-5 w-5 text-white/80" />
                </div>

                <h3 className="text-4xl font-bold text-white lg:text-5xl">
                  {item.value}
                </h3>

                <p className="mt-3 text-sm text-gray-400">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}