"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-50/60">
      <div className="absolute inset-0 bg-grid-white opacity-45 pointer-events-none" />
      <div className="absolute inset-0 bg-pattern-logo-grid opacity-15 pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-5 relative"
          >
            <div className="space-y-6">
              <div className="rounded-[2rem] overflow-hidden bg-linear-to-br from-[#0F4C92] to-[#1C78C8] p-8 text-center text-white h-64 flex flex-col justify-center items-center group shadow-[0_18px_50px_rgba(15,76,146,0.18)]">
                <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="text-white" size={32} />
                </div>
                <h4 className="text-lg font-black leading-tight heading-tech">Operational In <br /> Multiple Regions</h4>
              </div>
              <div className="rounded-[2rem] overflow-hidden relative h-64 border border-slate-200 shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80"
                  alt="Team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="pt-12 space-y-6">
              <div className="rounded-[2rem] overflow-hidden relative h-125 border border-slate-200 shadow-[0_18px_50px_rgba(15,76,146,0.10)]">
                <Image
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=80"
                  alt="Working"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0F4C92]/28 to-transparent" />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 bg-white p-10 rounded-[2rem] shadow-xl text-center z-20 min-w-45 border border-blue-200"
            >
              <div className="text-5xl font-black text-[#0F4C92] mb-1 tracking-tighter heading-tech">10+</div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Years In Delivery</div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:pl-12"
          >
            <span className="text-[#0F4C92] font-bold uppercase tracking-[0.2em] text-sm mb-4 block heading-tech">About Us</span>
            <h3 className="text-4xl lg:text-5xl font-black text-slate-900 mb-8 leading-[1.05] uppercase tracking-tight heading-tech">
              Design, Implement, And Support Your IT Lifecycle
            </h3>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed font-medium max-w-xl">
              Our consulting and engineering teams align infrastructure programs with business outcomes. From site surveys and architecture to rollout and managed support, each phase is governed by measurable SLAs.
            </p>

            <div className="space-y-6 mb-12">
              {[
                "Structured discovery: site audit, requirement mapping, risk baseline",
                "Predictable implementation: milestones, approvals, and controlled change",
                "Continuous support: warranty coverage and AMC-led optimization"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-2 h-0.5 bg-primary" />
                  <span className="text-slate-800 font-bold text-lg">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-10">
              <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-full px-10 h-16 text-lg uppercase">
                Explore Capabilities
              </Button>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 shadow-sm">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Call Support</div>
                  <div className="text-xl font-black text-slate-900 tracking-tight">+91 124 424 0646</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
