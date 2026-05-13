"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Code2, Search, Cpu, Radio, CheckCircle2 } from "lucide-react";

const services = [
  {
    id: "red-team",
    title: "Red-team Assessment",
    icon: Shield,
    summary:
      "Simulate real-world attacker techniques to validate your defenses, test response readiness, and prioritize remediation with confidence.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80",
    bullets: ["Adversary emulation", "Controlled exploit validation", "Executive reporting"],
    stat: "High-fidelity attack simulation",
  },
  {
    id: "app-sec",
    title: "Application Security",
    icon: Code2,
    summary:
      "Identify security weaknesses across code, APIs, authentication flows, and release pipelines before they become customer-facing incidents.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1600&q=80",
    bullets: ["Source review", "API testing", "CI/CD guardrails"],
    stat: "Secure software delivery",
  },
  {
    id: "infra-vapt",
    title: "Infrastructure VAPT",
    icon: Search,
    summary:
      "Map exposure across servers, networks, and cloud workloads with a practical vulnerability program built for operational environments.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&q=80",
    bullets: ["Asset discovery", "Exploit validation", "Risk prioritization"],
    stat: "Infrastructure exposure control",
  },
  {
    id: "forensics",
    title: "Forensics",
    icon: Radio,
    summary:
      "Preserve evidence, reconstruct timelines, and support incident response with investigation workflows designed for clarity and defensibility.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&q=80",
    bullets: ["Evidence capture", "Timeline analysis", "Incident support"],
    stat: "Defensible investigation flow",
  },
  {
    id: "ot-iot",
    title: "OT & IOT Security",
    icon: Cpu,
    summary:
      "Protect industrial and connected devices with segmentation, visibility, and testing that respects uptime and safety constraints.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80",
    bullets: ["Segmentation strategy", "Device profiling", "Lifecycle hardening"],
    stat: "Connected asset protection",
  },
];

export function ServicesPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = services[activeIndex];
  const ActiveIcon = active.icon;

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f4f7fc] pt-32 pb-20">
      <div className="absolute inset-0 bg-grid-white opacity-45 pointer-events-none" />
      <div className="absolute inset-0 bg-pattern-logo-grid opacity-20 pointer-events-none" />
      <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-[#0F4C92]/10 blur-[100px] pointer-events-none" />
      <div className="absolute right-0 bottom-24 h-72 w-72 rounded-full bg-sky-300/25 blur-[110px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-[#0F4C92] heading-tech shadow-sm">
            Services
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-black uppercase tracking-tight text-slate-900 heading-tech">
            Security services <span className="text-[#0F4C92]">built for modern teams</span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-600 font-medium">
            A premium service page inspired by your reference: bold tabs, deep navy framing, and a clean white content surface.
          </p>
        </div>

        <div className="rounded-[2.5rem] bg-linear-to-br from-[#101a33] via-[#121f3a] to-[#0b1020] p-5 md:p-8 shadow-[0_25px_80px_rgba(11,16,32,0.35)] border border-white/10">
          <div className="rounded-[1.8rem] border border-white/10 bg-white/5 p-3 md:p-4 backdrop-blur-sm">
            <div className="flex gap-3 overflow-x-auto pb-1">
              {services.map((service, index) => {
                const TabIcon = service.icon;
                const activeTab = index === activeIndex;
                return (
                  <button
                    key={service.id}
                    onClick={() => setActiveIndex(index)}
                    className={`min-w-max rounded-2xl px-5 py-4 text-left transition-all ${
                      activeTab
                        ? "bg-[#2464d8] text-white shadow-[0_14px_34px_rgba(36,100,216,0.35)]"
                        : "bg-transparent text-slate-300 hover:bg-white/8 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-2 text-sm font-bold heading-tech">
                      <TabIcon size={16} />
                      {service.title}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-8 rounded-[2rem] bg-white p-5 md:p-8 lg:p-10 border border-slate-100 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
              >
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#0F4C92] heading-tech">
                  <ActiveIcon size={14} />
                  {active.stat}
                </div>

                <h2 className="mt-6 text-3xl md:text-5xl font-black tracking-tight uppercase text-slate-900 heading-tech">
                  {active.title}
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600 font-medium">
                  {active.summary}
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {active.bullets.map((bullet) => (
                    <div key={bullet} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 shadow-sm">
                      <div className="flex items-center gap-2 text-sm font-bold text-slate-800">
                        <CheckCircle2 size={16} className="text-[#0F4C92]" />
                        {bullet}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <button className="inline-flex items-center gap-2 rounded-full bg-[#0F4C92] px-6 py-3 text-sm font-bold text-white shadow-[0_14px_30px_rgba(15,76,146,0.22)] transition-transform hover:-translate-y-0.5">
                    Request Assessment
                    <ArrowRight size={16} />
                  </button>
                  <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-700 shadow-sm transition-colors hover:border-[#0F4C92] hover:text-[#0F4C92]">
                    Speak With Team
                  </button>
                </div>
              </motion.div>

              <motion.div
                key={`${active.id}-image`}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35 }}
                className="relative"
              >
                <div className="absolute -inset-4 rounded-[2.3rem] bg-[#0F4C92]/10 blur-2xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-[0_20px_50px_rgba(15,23,42,0.16)]">
                  <div className="relative h-[22rem] md:h-[28rem]">
                    <Image src={active.image} alt={active.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-linear-to-t from-[#09111f]/72 via-[#09111f]/10 to-transparent" />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                    <div className="rounded-[1.5rem] border border-white/15 bg-[#0b1324]/70 p-4 md:p-5 text-white backdrop-blur-md">
                      <div className="text-xs font-bold uppercase tracking-[0.28em] text-blue-200 heading-tech">Service focus</div>
                      <p className="mt-2 text-lg font-semibold leading-relaxed">
                        Built to fit enterprise environments without losing operational clarity.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
