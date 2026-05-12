"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Cyber Risk Quantification",
    description: "Board-ready exposure reporting, breach simulations, and prioritized risk treatment maps.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
  },
  {
    title: "Infrastructure Modernization",
    description: "Compute, storage, networking, and cloud transitions aligned to performance objectives.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
  {
    title: "Managed IT and Security",
    description: "End-to-end monitoring, support operations, policy compliance, and incident readiness.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-slate-50/70">
      <div className="absolute inset-0 bg-grid-white opacity-50 pointer-events-none" />
      <div className="absolute inset-0 bg-pattern-logo-grid opacity-35 pointer-events-none" />
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 heading-tech"
          >
            Our Services
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight heading-tech"
          >
            One-Stop IT Infrastructure Expertise
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg font-medium"
          >
            Inspired by enterprise-first delivery models, we combine architecture, implementation, and long-term support under one accountable team.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-200"
            >
              <div className="p-10 pb-6">
                <h4 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-[#0F4C92] transition-colors uppercase tracking-tight heading-tech">
                  {service.title}
                </h4>
                <p className="text-slate-600 leading-relaxed mb-6 font-medium">
                  {service.description}
                </p>
              </div>
              
              <div className="relative h-64 mx-6 mb-6 rounded-[2rem] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Arrow Button */}
                <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-[#0F4C92] flex items-center justify-center text-white group-hover:bg-[#0C3F79] transition-colors shadow-lg cursor-pointer">
                  <ArrowUpRight size={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
