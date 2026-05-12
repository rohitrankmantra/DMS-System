"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "CIO, Regional BFSI Group",
    role: "Financial Services",
    content:
      "The cyber risk visibility model helped us defend security investments with board-level clarity.",
    avatar: "https://i.pravatar.cc/150?u=1",
  },
  {
    name: "Head of IT, Logistics Enterprise",
    role: "Logistics",
    content:
      "DMS stabilized our branch connectivity rollout and improved incident response with a practical support model.",
    avatar: "https://i.pravatar.cc/150?u=2",
  },
  {
    name: "CTO, Manufacturing Platform",
    role: "Manufacturing",
    content:
      "From assessment to implementation, the delivery discipline was excellent and the architecture scaled quickly.",
    avatar: "https://i.pravatar.cc/150?u=3",
  },
];

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = testimonials[activeIndex];

  const goPrevious = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-grid-white opacity-45 pointer-events-none" />
      <div className="absolute inset-0 bg-pattern-logo-grid opacity-20 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 heading-tech">Reviews</h2>
          <h3 className="text-4xl font-black text-slate-900 mb-6 heading-tech">What Our Clients Say</h3>
        </div>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-stretch">
          <div className="relative rounded-[2.5rem] overflow-hidden border border-blue-200 bg-linear-to-br from-[#0F4C92] to-[#1C78C8] text-white shadow-[0_22px_60px_rgba(15,76,146,0.18)]">
            <div className="absolute inset-0 bg-pattern-soft-dots opacity-20 pointer-events-none" />
            <div className="relative p-8 lg:p-12 min-h-115 flex flex-col justify-between">
              <div className="flex items-start justify-between gap-4 mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/20 backdrop-blur-sm text-xs font-bold uppercase tracking-[0.2em] heading-tech">
                  <Quote size={16} />
                  Client review
                </div>
                <div className="flex items-center gap-1 text-yellow-300">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} size={15} fill="currentColor" />
                  ))}
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial.content}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35 }}
                >
                  <p className="text-2xl lg:text-3xl font-semibold leading-tight max-w-2xl mb-10">
                    {activeTestimonial.content}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/30 bg-white">
                      <Image
                        src={activeTestimonial.avatar}
                        alt={activeTestimonial.name}
                        width={56}
                        height={56}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold heading-tech">{activeTestimonial.name}</h4>
                      <p className="text-white/80 text-sm uppercase tracking-widest">{activeTestimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-10 flex items-center justify-between gap-4">
                <div className="flex gap-2">
                  {testimonials.map((testimonial, index) => (
                    <button
                      key={testimonial.name}
                      onClick={() => setActiveIndex(index)}
                      className={`h-2.5 rounded-full transition-all ${index === activeIndex ? "w-10 bg-white" : "w-2.5 bg-white/35"}`}
                      aria-label={`Go to review ${index + 1}`}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={goPrevious}
                    className="w-11 h-11 rounded-full border border-white/25 bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                    aria-label="Previous review"
                  >
                    <ArrowLeft size={18} />
                  </button>
                  <button
                    onClick={goNext}
                    className="w-11 h-11 rounded-full border border-white/25 bg-white text-[#0F4C92] flex items-center justify-center hover:bg-white/90 transition-colors"
                    aria-label="Next review"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.name}
                onClick={() => setActiveIndex(index)}
                className={`text-left rounded-[1.75rem] border p-5 transition-all ${
                  index === activeIndex
                    ? "bg-blue-50 border-blue-300 shadow-sm"
                    : "bg-white border-slate-200 hover:border-blue-200 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center justify-between gap-4 mb-3">
                  <div>
                    <h4 className="font-bold text-slate-900 heading-tech">{testimonial.name}</h4>
                    <p className="text-xs uppercase tracking-widest text-slate-500">{testimonial.role}</p>
                  </div>
                  <ArrowRight size={18} className={index === activeIndex ? "text-[#0F4C92]" : "text-slate-400"} />
                </div>
                <p className="text-sm leading-relaxed text-slate-600">
                  {testimonial.content}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
