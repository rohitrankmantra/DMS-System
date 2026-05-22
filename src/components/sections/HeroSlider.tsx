"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, Server, Workflow } from "lucide-react";

const slides = [
  {
    eyebrow: "Secure Infrastructure",
    title: "Think Big. We make IT, possible!",
    description:
      "We observe the ongoing trends and analyze the upcoming technologies to transform the digital universe.",
    cta: "Explore Services",
    stat: "24x7 Protection",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1800&q=80",
    accent: "#0F4C92",
    icon: ShieldCheck,
  },
  {
    eyebrow: "Operational Resilience",
    title: "Protect, connect, and modernize every part of your business.",
    description:
      "Managed services, network design, and cloud readiness delivered with a clean client-first interface.",
    cta: "View Solutions",
    stat: "Enterprise Ready",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1800&q=80",
    accent: "#1D4ED8",
    icon: Server,
  },
  {
    eyebrow: "Delivery Workflow",
    title: "A modern service stack built to move with your team.",
    description:
      "Use the slider to rotate core offers while keeping a simple, readable message on top of the background.",
    cta: "Get Started",
    stat: "Fast Deployment",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1800&q=80",
    accent: "#0369A1",
    icon: Workflow,
  },
];

export const HeroSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, []);

  const currentSlide = slides[activeSlide];

  return (
    <section className="relative min-h-[86vh] overflow-hidden bg-[#0d2a4a] text-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide.image}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image src={currentSlide.image} alt={currentSlide.title} fill priority className="object-cover" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-linear-to-r from-[#0d2a4a]/92 via-[#0d2a4a]/78 to-[#0d2a4a]/42" />
      <div className="absolute inset-0 bg-linear-to-b from-[#0d2a4a]/20 via-transparent to-[#07111f]/55" />
      <div className="absolute inset-0 bg-grid-white opacity-18 pointer-events-none" />

      <div className="absolute top-14 -left-16 h-80 w-80 rounded-full bg-sky-400/12 blur-[110px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#0f4c92]/18 blur-[120px] pointer-events-none" />

      <div className="relative z-10 container mx-auto flex min-h-[86vh] flex-col px-6 pt-36 pb-24 lg:pt-40 lg:pb-28">
        <button
          onClick={() => setActiveSlide((activeSlide - 1 + slides.length) % slides.length)}
          className="absolute left-2 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-white/10 text-white shadow-[0_10px_30px_rgba(2,6,23,0.18)] backdrop-blur-md transition-colors hover:bg-white/20 lg:left-4"
          aria-label="Previous slide"
        >
          <ChevronLeft size={18} />
        </button>

        <button
          onClick={() => setActiveSlide((activeSlide + 1) % slides.length)}
          className="absolute right-2 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-white/10 text-white shadow-[0_10px_30px_rgba(2,6,23,0.18)] backdrop-blur-md transition-colors hover:bg-white/20 lg:right-4"
          aria-label="Next slide"
        >
          <ChevronRight size={18} />
        </button>

        <div className="flex min-h-[54vh] items-center justify-center lg:justify-start lg:max-w-3xl lg:ml-14 xl:ml-20">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-white/90 backdrop-blur-md heading-tech">
              <currentSlide.icon size={12} />
              {currentSlide.eyebrow}
            </div>

            <h1 className="mt-5 max-w-xl text-4xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl heading-tech text-center lg:text-left mx-auto lg:mx-0">
              {currentSlide.title}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-100/85 sm:text-lg text-center lg:text-left mx-auto lg:mx-0">
              {currentSlide.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-md bg-[#2B7DE9] px-6 py-3 text-sm font-bold text-white shadow-[0_12px_28px_rgba(43,125,233,0.34)] transition-transform heading-tech"
              >
                {currentSlide.cta}
                <ArrowRight size={14} />
              </motion.button>

              <div className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-white/90 backdrop-blur-md">
                <span className="h-2.5 w-2.5 rounded-full bg-[#2B7DE9]" />
                {currentSlide.stat}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};