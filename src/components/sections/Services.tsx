"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Network Security",
    description:
      "Protect your organization's digital backbone with advanced network security solutions, including segmentation, threat detection, and continuous monitoring.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80",
  },
  {
    title: "Endpoint Protection",
    description:
      "Secure every device across your organization with comprehensive endpoint protection, malware defense, behavior analysis, and device hardening.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80",
  },
  {
    title: "Threat Detection & Response",
    description:
      "Stay ahead of threats with our 24x7 rapid response team. We detect anomalies in real-time and respond with precision to minimize impact.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
  },
  {
    title: "Secure Infrastructure Design",
    description:
      "Build security into your infrastructure from the ground up. We assess, design, and implement resilient solutions tailored to your unique needs.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-slate-50/80">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_35%_at_50%_0%,rgba(15,76,146,0.08),transparent)] pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-[0.25em] uppercase text-sm mb-4 heading-tech"
          >
            Core Services
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight heading-tech"
          >
            Comprehensive Security Solutions
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg font-medium"
          >
            D M Systems delivers world-class cybersecurity solutions with 27 years of expertise. We design, deploy, monitor, and audit comprehensive security solutions powered by a relentless 24x7 response team.
          </motion.p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-[2rem] overflow-hidden shadow-[0_10px_30px_rgba(15,76,146,0.06)] hover:shadow-[0_18px_40px_rgba(15,76,146,0.12)] transition-all duration-500 border border-slate-200"
            >
              <div className="p-8 pb-5">
                <h4 className="text-xl md:text-2xl font-black text-slate-900 mb-4 group-hover:text-[#0F4C92] transition-colors uppercase tracking-tight heading-tech">
                  {service.title}
                </h4>
                <p className="text-slate-600 leading-relaxed mb-6 font-medium text-sm md:text-base">
                  {service.description}
                </p>
              </div>
              
              <div className="relative h-44 mx-6 mb-6 rounded-[1.5rem] overflow-hidden bg-slate-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Arrow Button */}
                <div className="absolute bottom-4 right-4 w-11 h-11 rounded-full bg-[#0F4C92] flex items-center justify-center text-white group-hover:bg-[#0C3F79] transition-colors shadow-lg cursor-pointer">
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
