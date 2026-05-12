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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-[2.5rem] blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-white rounded-[2.5rem] border border-slate-200 p-8 shadow-[0_4px_30px_rgba(15,76,146,0.08)] group-hover:shadow-[0_10px_50px_rgba(15,76,146,0.15)] transition-all">
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <feature.icon size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 heading-tech group-hover:text-[#0F4C92] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 mb-8 leading-relaxed font-medium">
                  {feature.description}
                </p>
                <div className="flex items-center gap-3 text-[#0F4C92] font-bold group-hover:gap-4 transition-all">
                  <span>Learn more</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
