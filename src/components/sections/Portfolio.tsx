"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "BFSI Cyber Risk Dashboard",
    category: "Financial Services",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["Risk Modeling", "Board Reports", "SOC"],
  },
  {
    title: "Multi-Site Network Transformation",
    category: "Manufacturing",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    tags: ["LAN", "SD-WAN", "Monitoring"],
  },
  {
    title: "Secure Collaboration Rollout",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
    tags: ["Endpoint Security", "SSO", "MDM"],
  },
  {
    title: "DR and Backup Program",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80",
    tags: ["BCP", "Recovery", "Compliance"],
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-[#0F172A]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(15,76,146,0.4),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.3),transparent_50%)]" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-[0.2em] heading-tech mb-6"
          >
            Industry Presence
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-black text-white mb-6 uppercase tracking-tight heading-tech"
          >
            Recent <span className="text-[#60A5FA]">Delivery Highlights</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-lg font-medium"
          >
            Sector-focused engagements across finance, logistics, technology, manufacturing, and healthcare environments.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className={`group relative ${index === 0 ? "md:col-span-2" : ""}`}
            >
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0F172A] via-[#0F172A]/60 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="flex items-center gap-3 text-[#60A5FA] text-xs uppercase tracking-[0.25em] font-bold mb-4 heading-tech">
                    <span className="w-2 h-2 rounded-full bg-[#60A5FA]" />
                    {project.category}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-black text-white mb-4 heading-tech max-w-2xl">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-4 py-2 rounded-full bg-white/10 text-white text-sm border border-white/20 backdrop-blur-sm">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#0F172A] font-bold heading-tech group-hover:bg-[#60A5FA] group-hover:text-white transition-all">
                      View Project
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
