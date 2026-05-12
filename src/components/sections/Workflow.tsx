"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Users, Settings, Trophy, ChevronRight } from "lucide-react";

const steps = [
  {
    title: "Assess",
    description: "Discover business goals, infrastructure dependencies, and cyber risk baseline.",
    icon: Search,
  },
  {
    title: "Design",
    description: "Create fit-for-purpose architecture, rollout plan, and governance controls.",
    icon: Users,
  },
  {
    title: "Implement",
    description: "Execute in phases with quality checkpoints, approvals, and operational handoff.",
    icon: Settings,
  },
  {
    title: "Optimize",
    description: "Run managed support and continuous improvement through KPI-led reviews.",
    icon: Trophy,
  },
];

export const Workflow = () => {
  return (
    <section id="workflow" className="py-24 relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-sky-50">
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'linear-gradient(#0F4C92 1px, transparent 1px), linear-gradient(90deg, #0F4C92 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-blue-200 text-[#0F4C92] text-xs font-bold uppercase tracking-[0.2em] heading-tech mb-6"
          >
            Strategic Approach
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight heading-tech"
          >
            How We <span className="text-[#0F4C92]">Deliver Outcomes</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg font-medium"
          >
            A structured, four-phase process designed to deliver measurable results while minimizing disruption.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-6 lg:gap-0">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="flex-1 relative"
              >
                <div className="h-full bg-white rounded-[2.5rem] p-8 border border-blue-200 shadow-[0_10px_40px_rgba(15,76,146,0.1)]">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-[#0F4C92] to-[#3B82F6] flex items-center justify-center text-white shadow-lg">
                      <step.icon size={32} />
                    </div>
                    <div className="text-5xl font-black text-[#0F4C92]/10">0{index + 1}</div>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4 heading-tech">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">{step.description}</p>
                </div>
              </motion.div>
              {index < steps.length - 1 && (
                <div className="hidden lg:flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#0F4C92] flex items-center justify-center text-white shadow-lg">
                    <ChevronRight size={24} />
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
