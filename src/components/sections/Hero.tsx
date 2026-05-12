"use client";

import React from "react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, Network, Server } from "lucide-react";

import Image from "next/image";

const slides = [
  {
    eyebrow: "Blue-White IT Strategy",
    title: "Build a secure digital backbone that feels premium and engineered.",
    description:
      "A modern IT banner for cyber risk, infrastructure, and managed support, designed to mirror your logo palette and enterprise focus.",
    stat: "150+ Deployments",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&q=80",
    cta: "Start Assessment",
    icon: ShieldCheck,
  },
  {
    eyebrow: "Infrastructure Modernization",
    title: "Transform networks, cloud, and support into one seamless operating model.",
    description:
      "From server rooms to branch networks, we shape environments for uptime, visibility, and simple decision-making.",
    stat: "99.5% Uptime Focus",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&q=80",
    cta: "See Solutions",
    icon: Network,
  },
  {
    eyebrow: "Managed Security",
    title: "Show the board what risk looks like, then reduce it with precision.",
    description:
      "Simulations, assessments, and support programs that help teams understand exposure and act with confidence.",
    stat: "24x7 Support View",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&q=80",
    cta: "View Services",
    icon: Server,
  },
];

export const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, []);

  const currentSlide = slides[activeSlide];

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-white">
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.image}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image src={currentSlide.image} alt={currentSlide.title} fill priority className="object-cover" />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-linear-to-r from-white via-white/95 to-white/80" />
        <div className="absolute inset-0 bg-linear-to-t from-white via-white/30 to-transparent" />
        <div className="absolute inset-0 bg-grid-white opacity-65 pointer-events-none" />
        <div className="absolute inset-0 bg-pattern-logo-grid opacity-35 pointer-events-none" />
        <div className="absolute inset-0 bg-pattern-soft-dots opacity-20 mix-blend-multiply pointer-events-none" />
      </div>
      <div className="absolute top-10 -left-20 w-105 h-105 bg-blue-200/70 blur-[110px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-105 h-105 bg-sky-200/60 blur-[110px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl overflow-hidden border border-blue-200 bg-white shadow-[0_10px_24px_rgba(15,76,146,0.12)]">
                <Image src="/logo.jpg" alt="DMS Systems logo" width={56} height={56} className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="h-0.5 w-12 bg-[#0F4C92] mb-2" />
                <span className="text-[#0F4C92] font-bold uppercase tracking-[0.2em] text-sm heading-tech">Integrated IT Infrastructure</span>
              </div>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl lg:text-6xl font-black text-slate-900 leading-[1.05] mb-6 uppercase tracking-tight heading-tech"
            >
              <span className="block text-[#0F4C92] text-3xl lg:text-4xl">{currentSlide.eyebrow}</span>
              <span className="block mt-3">{currentSlide.title}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-slate-600 text-base lg:text-lg mb-10 max-w-xl leading-relaxed font-medium"
            >
              {currentSlide.description}
            </motion.p>

            <div className="flex flex-wrap items-center gap-6">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0F4C92] text-white font-bold heading-tech shadow-[0_14px_34px_rgba(15,76,146,0.2)]"
              >
                {currentSlide.cta}
                <ArrowRight size={16} />
              </motion.button>

              <div className="inline-flex items-center gap-3 px-4 py-3 rounded-full border border-blue-200 bg-white/80 backdrop-blur-sm">
                <div className="w-2.5 h-2.5 rounded-full bg-[#0F4C92]" />
                <span className="text-sm font-semibold text-slate-700">{currentSlide.stat}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-blue-200 shadow-[0_24px_60px_rgba(15,23,42,0.12)] bg-white backdrop-blur-xl">
              <div className="absolute inset-0 bg-linear-to-br from-white/90 via-white/35 to-transparent" />
              <div className="absolute inset-0 bg-pattern-logo-grid opacity-30 pointer-events-none" />

              <div className="relative p-6 lg:p-8">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-[#0F4C92] text-xs font-bold uppercase tracking-[0.2em] heading-tech">
                    <currentSlide.icon size={16} />
                    {currentSlide.eyebrow}
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-[#0F4C92]">Slide {activeSlide + 1} / {slides.length}</p>
                  </div>
                </div>

                <div className="relative rounded-[2rem] overflow-hidden border border-blue-200 min-h-80 shadow-[0_18px_40px_rgba(15,76,146,0.12)]">
                  <Image src={currentSlide.image} alt={currentSlide.title} fill className="object-cover" />
                </div>

                <div className="flex items-center justify-between gap-4 mt-6">
                  <div className="flex gap-2">
                    {slides.map((slide, index) => (
                      <button
                        key={slide.title}
                        onClick={() => setActiveSlide(index)}
                        className={`h-2.5 rounded-full transition-all ${index === activeSlide ? "w-10 bg-[#0F4C92]" : "w-2.5 bg-blue-200"}`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveSlide((activeSlide - 1 + slides.length) % slides.length)}
                      className="w-11 h-11 rounded-full border border-blue-200 bg-white text-[#0F4C92] flex items-center justify-center hover:bg-blue-50 transition-colors"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={() => setActiveSlide((activeSlide + 1) % slides.length)}
                      className="w-11 h-11 rounded-full border border-blue-200 bg-white text-[#0F4C92] flex items-center justify-center hover:bg-blue-50 transition-colors"
                      aria-label="Next slide"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-10 -right-10 z-20"
            >
              <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 40C60 100 120 120 160 160" stroke="#0f172a" strokeWidth="2" strokeDasharray="8 8" className="opacity-20" />
                <path d="M140 160H160V140" stroke="#0f172a" strokeWidth="2" className="opacity-20" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
