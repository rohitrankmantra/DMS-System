import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Mail, Phone, MapPin, Clock, Send, ArrowRight } from "lucide-react";

const contactDetails = [
  {
    label: "Address",
    value: "E-2/7 & 8, 2nd. Floor, Malviya Nagar, New Delhi – 110017",
    note: "(Above VLCC Training Institute.)",
    icon: MapPin,
  },
  {
    label: "Tel.",
    value: "+91.011.26691429",
    note: "Direct office line",
    icon: Phone,
  },
  {
    label: "Pallavi Bhardwaj",
    value: "+91-99990-35340",
    note: "Primary contact",
    icon: Phone,
  },
  {
    label: "Email",
    value: "channels@dmsystems.in",
    note: "Response within one business day",
    icon: Mail,
  },
];

export default function Page() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-x-hidden bg-slate-50">
      <Navbar />
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-grid-white opacity-45 pointer-events-none" />
        <div className="absolute inset-0 bg-pattern-logo-grid opacity-20 pointer-events-none" />
        <div className="absolute -left-16 top-16 h-80 w-80 rounded-full bg-[#0F4C92]/10 blur-[110px] pointer-events-none" />
        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-cyan-300/20 blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-start">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-[#0F4C92] heading-tech shadow-sm">
                Contact Us
              </span>
              <h1 className="mt-6 text-4xl md:text-6xl font-black uppercase tracking-tight text-slate-900 heading-tech">
                Let&apos;s build a <span className="text-[#0F4C92]">secure line of communication</span>
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600 font-medium">
                A cleaner, more dramatic contact page with a custom pattern background, layered info cards, and a premium form layout.
              </p>

              <div className="mt-8 grid gap-4">
                {contactDetails.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="rounded-[1.6rem] border border-slate-200 bg-white p-5 shadow-[0_12px_30px_rgba(15,76,146,0.06)]">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0F4C92]/10 text-[#0F4C92]">
                          <Icon size={20} />
                        </div>
                        <div>
                          <div className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500 heading-tech">{item.label}</div>
                          <div className="mt-1 text-base font-black text-slate-900">{item.value}</div>
                          <div className="mt-1 text-sm text-slate-500">{item.note}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[2.5rem] bg-linear-to-br from-[#0f172a] via-[#12213c] to-[#0b1020] p-5 md:p-7 shadow-[0_25px_80px_rgba(11,16,32,0.35)] border border-white/10">
              <div className="rounded-[2rem] bg-white p-6 md:p-8 border border-slate-100 shadow-[0_18px_40px_rgba(15,23,42,0.08)] relative overflow-hidden">
                <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full bg-[#0F4C92]/10 blur-3xl" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-[#0F4C92] heading-tech">
                    <Send size={14} /> Send a brief
                  </div>
                  <h2 className="mt-4 text-3xl font-black uppercase tracking-tight text-slate-900 heading-tech">
                    Tell us what you need
                  </h2>
                  <p className="mt-3 text-slate-600 font-medium leading-relaxed">
                    Use this form to request support, project guidance, assessments, or a call-back from the team.
                  </p>

                  <form className="mt-8 space-y-5">
                    <div className="grid gap-5 md:grid-cols-2">
                      <input className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition-colors focus:border-[#0F4C92]" placeholder="First name" />
                      <input className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition-colors focus:border-[#0F4C92]" placeholder="Last name" />
                    </div>
                    <div className="grid gap-5 md:grid-cols-2">
                      <input className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition-colors focus:border-[#0F4C92]" placeholder="Email address" />
                      <input className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition-colors focus:border-[#0F4C92]" placeholder="Phone number" />
                    </div>
                    <input className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition-colors focus:border-[#0F4C92]" placeholder="Company / Organization" />
                    <textarea rows={5} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-colors focus:border-[#0F4C92]" placeholder="Tell us about your need, timeline, and current challenges." />

                    <button className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0F4C92] px-6 py-4 text-sm font-bold text-white shadow-[0_14px_30px_rgba(15,76,146,0.22)] transition-transform hover:-translate-y-0.5">
                      Contact Support Team
                      <ArrowRight size={16} />
                    </button>
                  </form>
                </div>
              </div>

              <div className="mt-5 rounded-[1.6rem] border border-white/10 bg-white/6 p-5 text-white backdrop-blur-md">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-blue-200 heading-tech">
                  <Clock size={14} /> Hours
                </div>
                <p className="mt-2 text-sm text-slate-300">Mon - Fri: 9AM - 6PM</p>
                <p className="mt-1 text-sm text-slate-300">Call or email for urgent requests and project alignment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
