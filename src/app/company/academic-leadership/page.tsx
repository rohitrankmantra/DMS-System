"use client";

import { Team } from "@/components/sections/Team";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Page() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-x-hidden bg-slate-50">
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-grid-white opacity-45 pointer-events-none" />
        <div className="absolute inset-0 bg-pattern-logo-grid opacity-20 pointer-events-none" />
        <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-[#0F4C92]/10 blur-[100px] pointer-events-none" />
        <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-sky-300/20 blur-[110px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-[#0F4C92] heading-tech shadow-sm">
              Team
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-black uppercase tracking-tight text-slate-900 heading-tech">Leadership &amp; Team</h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600 font-medium">Meet the leadership and core team that deliver D M Systems’ cybersecurity and managed services.</p>
          </div>
        </div>
      </section>

      <Team />
      <Testimonials />
    </main>
  );
}
