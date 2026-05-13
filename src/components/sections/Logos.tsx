"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const baseLogos = [
  "/logos/logo1.jpg",
  "/logos/logo2.jpg",
  "/logos/logo3.png",
  "/logos/logo4.png",
  "/logos/logo5.png",
  "/logos/logo6.png",
  "/logos/logo7.png",
];

export const Logos = () => {
  const logos = [...baseLogos, ...baseLogos]; // duplicate for smoother looping
  const sizeClasses = ["w-44 h-24", "w-56 h-32", "w-48 h-28", "w-64 h-36", "w-52 h-32"];
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [itemWidth, setItemWidth] = useState(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const first = el.querySelector<HTMLDivElement>('[data-logo-item]');
    if (first) setItemWidth(first.offsetWidth + 24); // include gap

    let raf: number | null = null;
    const step = () => {
      if (!el || isPaused) {
        raf = requestAnimationFrame(step);
        return;
      }
      // smooth automatic scroll
      el.scrollLeft += 1.2; // speed
      // loop when scrolled half (because duplicated)
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = 0;
      }
      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => {
      if (raf) cancelAnimationFrame(raf);
    };
  }, [isPaused]);

  // manual controls
  const scrollBy = (distance: number) => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({ left: distance, behavior: "smooth" });
  };

  // pointer drag support
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let isDown = false;
    let startX = 0;
    let scrollStart = 0;

    const onDown = (e: PointerEvent) => {
      isDown = true;
      el.setPointerCapture(e.pointerId);
      startX = e.clientX;
      scrollStart = el.scrollLeft;
      setIsPaused(true);
    };

    const onMove = (e: PointerEvent) => {
      if (!isDown) return;
      const dx = startX - e.clientX;
      el.scrollLeft = scrollStart + dx;
    };

    const onUp = (e: PointerEvent) => {
      isDown = false;
      try { el.releasePointerCapture(e.pointerId); } catch {}
      setIsPaused(false);
    };

    el.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);

    return () => {
      el.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

  return (
    <section id="logos" className="py-20 relative overflow-hidden bg-gradient-to-b from-white/5 to-transparent">
      <div className="absolute -left-20 -top-10 w-96 h-96 rounded-full bg-gradient-to-tr from-[#DBEAFE] to-transparent opacity-30 blur-3xl pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-72 h-72 rounded-full bg-gradient-to-br from-[#E0F2FE] to-transparent opacity-25 blur-2xl pointer-events-none" />
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-[#0F4C92] text-xs font-bold uppercase tracking-[0.2em] heading-tech mb-4"
          >
            Our Clients
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-4xl lg:text-5xl font-black text-slate-900 mb-3 uppercase tracking-tight heading-tech"
          >
            Trusted by <span className="text-[#0F4C92]">Leading Organizations</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="text-slate-600 text-lg font-medium"
          >
            A selection of partners and clients we’ve helped secure and scale.
          </motion.p>
        </div>

          <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6 justify-end">
            <button
              aria-label="previous"
              onClick={() => scrollBy(-(itemWidth || 200))}
              className="p-2 rounded-full bg-white/90 text-slate-700 shadow"
            >
              ◀
            </button>
            <button
              aria-label="next"
              onClick={() => scrollBy(itemWidth || 200)}
              className="p-2 rounded-full bg-[#1E40AF] text-white shadow"
            >
              ▶
            </button>
          </div>

          <div className="overflow-hidden">
            <div
              ref={trackRef}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="flex gap-6 overflow-x-auto no-scrollbar py-6 px-4 scroll-smooth touch-pan-x snap-x items-center"
              style={{ scrollbarWidth: "none" }}
            >
              {logos.map((src, i) => {
                const cls = sizeClasses[i % sizeClasses.length];
                return (
                  <div
                    key={`${src}-${i}`}
                    data-logo-item
                    className={`flex-none ${cls} p-4 bg-white rounded-3xl border border-blue-200 shadow-[0_20px_40px_rgba(15,76,146,0.06)] transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 flex items-center justify-center`}
                  >
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image src={src} alt={`client-logo-${i}`} fill className="object-contain" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Logos;
