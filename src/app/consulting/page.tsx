import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Compass, ShieldCheck, Workflow, Target, MessageSquare, ArrowRight } from "lucide-react";

const pillars = [
  {
    title: "Strategy",
    description: "Align security and infrastructure investments with business goals, budget reality, and delivery timelines.",
    icon: Compass,
  },
  {
    title: "Governance",
    description: "Define decision-making, standards, and reporting models that keep programs accountable and measurable.",
    icon: ShieldCheck,
  },
  {
    title: "Delivery",
    description: "Turn plans into phased execution with clean handoffs, risk management, and stakeholder visibility.",
    icon: Workflow,
  },
  {
    title: "Outcomes",
    description: "Measure every engagement against uptime, resilience, and risk reduction outcomes that matter.",
    icon: Target,
  },
];

const phases = [
  ["Discover", "Infrastructure review, stakeholder interviews, current-state mapping"],
  ["Align", "Prioritize gaps, define target state, confirm delivery roadmap"],
  ["Execute", "Implementation support, control tuning, and change coordination"],
  ["Improve", "Post-launch reviews, optimization, and management reporting"],
];

export default function Page() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-x-hidden bg-slate-50">
      <Navbar />
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-grid-white opacity-45 pointer-events-none" />
        <div className="absolute inset-0 bg-pattern-logo-grid opacity-18 pointer-events-none" />
        <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-[#0F4C92]/10 blur-[110px] pointer-events-none" />
        <div className="absolute right-0 bottom-10 h-80 w-80 rounded-full bg-sky-300/20 blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-[#0F4C92] heading-tech shadow-sm">
                Consulting
              </span>
              <h1 className="mt-6 text-4xl md:text-6xl font-black uppercase tracking-tight text-slate-900 heading-tech">
                Strategic Consulting that <span className="text-[#0F4C92]">Transforms Security</span>
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600 font-medium">
                Our consulting services guide organizations through complex security and IT challenges. We assess your environment, design solutions aligned with your business goals, and support implementation with measurable outcomes.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="inline-flex items-center gap-2 rounded-full bg-[#0F4C92] px-6 py-3 text-sm font-bold text-white shadow-[0_14px_30px_rgba(15,76,146,0.22)] transition-transform hover:-translate-y-0.5">
                  Book a Consultation
                  <ArrowRight size={16} />
                </button>
                <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-700 shadow-sm transition-colors hover:border-[#0F4C92] hover:text-[#0F4C92]">
                  View Engagement Model
                </button>
              </div>
            </div>

            <div className="rounded-[2.5rem] bg-linear-to-br from-[#101a33] via-[#121f3a] to-[#0b1020] p-5 md:p-7 border border-white/10 shadow-[0_25px_80px_rgba(11,16,32,0.35)]">
              <div className="rounded-[2rem] bg-white/5 border border-white/10 p-4 backdrop-blur-sm">
                <div className="grid gap-4 sm:grid-cols-2">
                  {pillars.map((pillar) => {
                    const Icon = pillar.icon;
                    return (
                      <div key={pillar.title} className="rounded-3xl border border-white/10 bg-white/8 p-5 text-white shadow-[0_12px_30px_rgba(0,0,0,0.14)]">
                        <div className="flex items-center gap-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0F4C92] text-white shadow-lg">
                            <Icon size={22} />
                          </div>
                          <h3 className="text-lg font-black heading-tech">{pillar.title}</h3>
                        </div>
                        <p className="mt-3 text-sm leading-relaxed text-slate-300">{pillar.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] items-stretch">
            <div className="rounded-[2rem] bg-white p-7 md:p-8 border border-slate-200 shadow-[0_18px_50px_rgba(15,76,146,0.08)]">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-[#0F4C92] heading-tech">
                <MessageSquare size={14} /> Engagement Model
              </div>
              <h2 className="mt-4 text-3xl font-black uppercase tracking-tight text-slate-900 heading-tech">
                From Assessment to Excellence
              </h2>
              <div className="mt-8 grid gap-4 md:grid-cols-4">
                {phases.map(([phase, detail], index) => (
                  <div key={phase} className="rounded-3xl bg-slate-50 border border-slate-200 p-5">
                    <div className="text-2xl font-black text-[#0F4C92] heading-tech">0{index + 1}</div>
                    <h3 className="mt-2 text-lg font-black text-slate-900 heading-tech">{phase}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-linear-to-br from-[#0F4C92] to-[#0b3a74] p-7 md:p-8 text-white shadow-[0_18px_50px_rgba(15,76,146,0.2)]">
              <div className="text-xs font-bold uppercase tracking-[0.3em] text-blue-200 heading-tech">Our Approach</div>
              <h2 className="mt-4 text-3xl font-black uppercase tracking-tight heading-tech">Risk-Driven Solutions That Work</h2>
              <p className="mt-4 text-white/80 leading-relaxed">
                We combine deep technical expertise with a business-focused approach. Our 27 years of experience enables us to design solutions that fit your environment, reduce risk, and deliver measurable outcomes.
              </p>
              <div className="mt-8 rounded-[1.5rem] bg-white/10 border border-white/15 p-5 backdrop-blur-md">
                <p className="text-sm uppercase tracking-[0.22em] text-blue-200 font-bold heading-tech">Backed By</p>
                <p className="mt-2 text-lg font-semibold">24x7 rapid response team, strategic partnerships, and relentless commitment to your security.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
