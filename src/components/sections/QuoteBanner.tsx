"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const QuoteBanner = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-[#0F4C92] to-[#0C3F79]">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80"
          alt="Cyber security background"
          fill
          className="object-cover opacity-20"
        />
        {/* <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} /> */}
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="absolute -left-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
          
          <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-[3rem] p-10 lg:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
            <svg className="w-20 h-20 mx-auto mb-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <h2 className="text-xl lg:text-3xl font-black text-white mb-8 leading-tight text-center heading-tech">
              THE PRIVATE SECTOR IS THE KEY PLAYER IN CYBER SECURITY.
              <br className="hidden md:block" />
              PRIVATE SECTOR COMPANIES ARE THE <span className="text-[#60A5FA]">PRIMARY VICTIMS</span> OF
              <br className="hidden md:block" />
              <span className="text-[#60A5FA]">CYBER INTRUSIONS.</span>
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="h-0.5 w-12 bg-white/30" />
              <p className="text-lg lg:text-xl text-white font-semibold heading-tech">
                — James Comey
              </p>
              <div className="h-0.5 w-12 bg-white/30" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
