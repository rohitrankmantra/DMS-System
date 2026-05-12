"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const team = [
  {
    name: "Gaurav Setia",
    role: "Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
  },
  {
    name: "Ashish Singh",
    role: "Sales Head",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80",
  },
  {
    name: "Mahi Shukla",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80",
  },
  {
    name: "Shivam Chauhan",
    role: "Team Lead, Sales",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
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
            Experts Behind Delivery
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg font-medium"
          >
            Cross-functional leaders in consulting, engineering, and support operations with enterprise deployment experience.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  <p className="text-[#0F4C92] font-bold uppercase tracking-widest text-sm">
                    {member.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
