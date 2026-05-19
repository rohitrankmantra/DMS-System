"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, GraduationCap, Briefcase } from "lucide-react";

const academicLeaders = [
  {
    name: "Devender Kumar Bajaj (D.K. Bajaj)",
    role: "Founder & Chairman",
    bio: "A pioneer in cybersecurity with 34+ years of IT industry experience. Founded D M Systems 27 years ago. Former senior management with Hero Group & Birla Group.",
    icon: Award,
  },
  {
    name: "Pallavi Bhardwaj",
    role: "VP - Channel Business & Operations",
    bio: "Core leader with 25+ years in operations & channel business. With DMS since inception. Heads Channel Business & Operations, ensuring client satisfaction.",
    icon: Briefcase,
  },
  {
    name: "Amit Sharma",
    role: "Manager - Finance & Accounts",
    bio: "18+ years in finance and taxation expertise. Joined 2015. Strengthened financial processes, regulatory compliance, and fiscal management.",
    icon: GraduationCap,
  },
];

export const Team = () => {
  return (
    <section id="team" className="py-24 relative overflow-hidden bg-white">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#0F4C92 1px, transparent 1px), linear-gradient(90deg, #0F4C92 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-[#0F4C92] text-xs font-bold uppercase tracking-[0.2em] heading-tech mb-6"
          >
            Academic Leadership
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight heading-tech"
          >
            Guiding Our <span className="text-[#0F4C92]">Academic Vision</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg font-medium"
          >
            Distinguished leaders with decades of experience shaping the future of cybersecurity education and industry practice.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {academicLeaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <div className="h-full bg-gradient-to-br from-white to-blue-50 rounded-[2.5rem] p-8 border border-blue-200 shadow-[0_10px_40px_rgba(15,76,146,0.1)] group-hover:shadow-[0_20px_60px_rgba(15,76,146,0.18)] transition-all">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#0F4C92] to-[#3B82F6] flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
                  <leader.icon size={40} className="text-white" />
                </div>
                
                <h3 className="text-2xl font-black text-slate-900 mb-3 heading-tech group-hover:text-[#0F4C92] transition-colors">
                  {leader.name}
                </h3>
                
                <p className="text-[#0F4C92] font-bold uppercase tracking-widest text-sm mb-6">
                  {leader.role}
                </p>
                
                <p className="text-slate-600 text-base leading-relaxed">
                  {leader.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
