// Navbar and Footer are provided by the company layout
import { About } from "@/components/sections/About";
import { Features } from "@/components/sections/Features";
import { Team } from "@/components/sections/Team";
import { ShieldCheck, Eye, ArrowRight } from "lucide-react";

export default function Page() {
  return (
    <main>
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-grid-white opacity-45 pointer-events-none" />
        <div className="absolute inset-0 bg-pattern-logo-grid opacity-20 pointer-events-none" />
        <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-[#0F4C92]/10 blur-[100px] pointer-events-none" />
        <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-sky-300/20 blur-[110px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-[#0F4C92] heading-tech shadow-sm">
              Company
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-black uppercase tracking-tight text-slate-900 heading-tech">
              D M Systems: <span className="text-[#0F4C92]">Protecting Digital Futures</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600 font-medium">
              27 years of trusted cybersecurity and IT solutions expertise. We design, deploy, monitor, and audit world-class security solutions with a relentless 24x7 rapid response team.
            </p>
          </div>

          <div id="mission-vision" className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_18px_50px_rgba(15,76,146,0.08)]">
              <div className="flex items-center gap-3 text-[#0F4C92] font-bold uppercase tracking-[0.24em] text-xs heading-tech">
                <ShieldCheck size={16} /> Mission
              </div>
              <h2 className="mt-4 text-3xl font-black uppercase tracking-tight text-slate-900 heading-tech">Establish as Trusted Leader</h2>
              <p className="mt-4 text-slate-600 leading-relaxed font-medium">
                To establish D M Systems Pvt. Ltd. as a trusted leader in cybersecurity by delivering reliable, high-quality solutions and building enduring partnerships with our customers and partners through integrity, expertise, and consistent excellence.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-linear-to-br from-[#0F4C92] to-[#0b3a74] p-8 text-white shadow-[0_18px_50px_rgba(15,76,146,0.18)]">
              <div className="flex items-center gap-3 text-blue-200 font-bold uppercase tracking-[0.24em] text-xs heading-tech">
                <Eye size={16} /> What We Do
              </div>
              <h2 className="mt-4 text-3xl font-black uppercase tracking-tight heading-tech">Design, Deploy, Monitor & Protect</h2>
              <p className="mt-4 text-white/80 leading-relaxed font-medium">
                We don't just secure—we outsmart threats. We design, deploy, monitor, and audit world-class cybersecurity solutions, powered by a relentless 24x7 rapid response team committed to keeping you protected at all times.
              </p>
            </div>
          </div>
        </div>
      </section>

      <About />
      <Features />
      <Team />

      <section className="py-20 bg-[#0f172a] text-white">
        <div className="container mx-auto px-6">
          <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 md:p-10 backdrop-blur-sm shadow-[0_22px_60px_rgba(0,0,0,0.22)]">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.24em] text-blue-200 heading-tech">About Our Expertise</div>
                <h2 className="mt-3 text-3xl font-black uppercase tracking-tight heading-tech">Leading Cybersecurity Solutions Provider</h2>
                <p className="mt-3 max-w-2xl text-white/75 leading-relaxed">
                  From network security and endpoint protection to threat detection, response, and secure infrastructure design—D M Systems delivers comprehensive solutions with the backing of skilled professionals and strategic technology partnerships.
                </p>
              </div>
              <button className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-900 shadow-sm">
                Explore Services
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
