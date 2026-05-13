"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Shield, BarChart, Smartphone, Globe, Cpu, ArrowRight } from "lucide-react";

const features = [
  {
    title: "Risk Visibility Layer",
    description: "Quantify cyber exposure and map security investments to business impact.",
    icon: Zap,
    color: "#0F4C92",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Security by Design",
    description: "Integrated controls from endpoint to network and cloud perimeter.",
    icon: Shield,
    color: "#10B981",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "Live Infrastructure Insights",
    description: "Real-time performance telemetry and alerting across critical systems.",
    icon: BarChart,
    color: "#F97316",
    gradient: "from-orange-500 to-rose-500",
  },
  {
    title: "Hybrid Workplace Ready",
    description: "Secure access and unified collaboration for distributed teams.",
    icon: Smartphone,
    color: "#8B5CF6",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    title: "Scalable Multi-Site Operations",
    description: "Standardized architecture and governance across geographies.",
    icon: Globe,
    color: "#3B82F6",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    title: "Automation Core",
    description: "Playbooks and policy automation for repeatable service quality.",
    icon: Cpu,
    color: "#F59E0B",
    gradient: "from-amber-500 to-yellow-400",
  },
];

function IconBadge({
  icon: Icon,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
}) {
  return (
    <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-[1.6rem] bg-linear-to-br from-[#0F4C92] via-[#165ca7] to-[#0b3a74] p-0.5 shadow-[0_18px_35px_rgba(15,76,146,0.18)]">
      <div className="absolute -inset-2 rounded-[1.9rem] bg-[#0F4C92]/10 blur-md" />
      <div className="absolute -right-1 -top-1 h-3.5 w-3.5 rounded-full border-2 border-white bg-[#58a6ff] shadow-sm" />
      <div className="relative flex h-full w-full items-center justify-center rounded-[1.45rem] border border-white/20 bg-white/10 backdrop-blur-md">
        <div className="absolute inset-2.5 rounded-[1rem] bg-linear-to-br from-white/14 to-transparent" />
        <Icon size={28} className="relative z-10 text-white drop-shadow-[0_2px_2px_rgba(15,76,146,0.25)]" />
      </div>
    </div>
  );
}

export const Features = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(15,76,146,0.05),transparent)]" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-[#0F4C92] text-xs font-bold uppercase tracking-[0.2em] heading-tech mb-6"
          >
            <Zap size={16} />
            Core Solutions
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl font-black text-slate-900 mb-6 uppercase tracking-tight heading-tech"
          >
            Built for <span className="text-[#0F4C92]">Operational Resilience</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg font-medium"
          >
            A curated set of capabilities designed to strengthen your digital backbone, reduce risk, and drive operational excellence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative min-h-55"
            >
              {(() => {
                const variant = index % 3;
                // Variant A: match the glass card style used by variants C
                if (variant === 0) {
                  return (
                    <>
                      <div className="absolute inset-0 rounded-[2rem] bg-linear-to-br from-[#f8fbff] to-[#f1f7ff] blur-md" />
                      <div className="relative bg-white/60 backdrop-blur-sm rounded-[2rem] border border-slate-100 p-8 shadow-[0_4px_24px_rgba(15,76,146,0.04)] transition-all">
                        <div className="flex items-center gap-4 mb-4">
                          <IconBadge icon={feature.icon} />
                          <h3 className="text-2xl font-black text-slate-900 heading-tech group-hover:text-[#0F4C92] transition-colors">
                            {feature.title}
                          </h3>
                        </div>
                        <p className="text-slate-600 mb-6 leading-relaxed font-medium">{feature.description}</p>
                        <div className="flex items-center gap-3 text-[#0F4C92] font-bold">
                          <span>Learn more</span>
                          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </>
                  );
                }

                // Variant B: ribbon & tilted icon
                if (variant === 1) {
                  return (
                    <>
                      <div className="absolute inset-0 rounded-[2rem] bg-linear-to-br from-[#fff7ed] to-[#fff1e6] blur-lg" />
                      <div className="relative bg-white/95 rounded-[2rem] border border-slate-100 p-8 shadow-[0_6px_30px_rgba(11,37,77,0.04)] transition-all overflow-hidden">
                        <div className="absolute right-4 top-4 transform rotate-12 bg-linear-to-r from-[#0F4C92] to-[#0b3a74] text-white px-3 py-1 rounded-md text-xs font-semibold">Core</div>
                        <div className="flex flex-col items-start">
                          <div className="mb-4 transform rotate-3">
                            <IconBadge icon={feature.icon} />
                          </div>
                          <h3 className="text-2xl font-black text-slate-900 mb-3 heading-tech group-hover:text-[#0F4C92] transition-colors">
                            {feature.title}
                          </h3>
                          <p className="text-slate-600 leading-relaxed font-medium mb-6">
                            {feature.description}
                          </p>
                          <div className="mt-auto flex items-center gap-3 text-[#0F4C92] font-bold">
                            <span>Learn more</span>
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </>
                  );
                }

                // Variant C: glass / soft card
                return (
                  <>
                    <div className="absolute inset-0 rounded-[2rem] bg-linear-to-br from-[#f8fbff] to-[#f1f7ff] blur-md" />
                    <div className="relative bg-white/60 backdrop-blur-sm rounded-[2rem] border border-slate-100 p-8 shadow-[0_4px_24px_rgba(15,76,146,0.04)] transition-all">
                      <div className="flex items-center gap-4 mb-4">
                        <IconBadge icon={feature.icon} />
                        <h3 className="text-2xl font-black text-slate-900 heading-tech group-hover:text-[#0F4C92] transition-colors">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-slate-600 mb-6 leading-relaxed font-medium">{feature.description}</p>
                      <div className="flex items-center gap-3 text-[#0F4C92] font-bold">
                        <span>Learn more</span>
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
