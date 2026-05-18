"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const team = [
  {
    name: "Devender Kumar Bajaj (D.K. Bajaj)",
    role: "Founder & Chairman",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80",
    bio: "A pioneer in cybersecurity with 34+ years of IT industry experience. Founded D M Systems 27 years ago. Former senior management with Hero Group & Birla Group."
  },
  {
    name: "Pallavi Bhardwaj",
    role: "VP - Channel Business & Operations",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
    bio: "Core leader with 25+ years in operations & channel business. With DMS since inception. Heads Channel Business & Operations, ensuring client satisfaction."
  },
  {
    name: "Amit Sharma",
    role: "Manager - Finance & Accounts",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    bio: "18+ years in finance and taxation expertise. Joined 2015. Strengthened financial processes, regulatory compliance, and fiscal management."
  },
];

export const Team = () => {
  return (
    <section id="team" className="py-24 relative overflow-hidden bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#0F4C92] font-bold uppercase tracking-[0.2em] text-sm mb-4 heading-tech"
          >
            Leadership Team
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight heading-tech"
          >
            Visionary Leaders Shaping Cybersecurity
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg font-medium"
          >
            Decades of combined experience in cybersecurity, operations, and strategic business management driving excellence across all domains.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group"
            >
              <div className="bg-white rounded-[2rem] overflow-hidden shadow-[0_4px_30px_rgba(15,76,146,0.08)] group-hover:shadow-[0_10px_50px_rgba(15,76,146,0.15)] transition-all">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-xl font-black text-slate-900 mb-2 heading-tech group-hover:text-[#0F4C92] transition-colors">
                    {member.name}
                  </h4>
                  <p className="text-[#0F4C92] font-bold uppercase tracking-widest text-sm mb-3">
                    {member.role}
                  </p>
                  {member.bio && (
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
