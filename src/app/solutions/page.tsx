import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Features } from "@/components/sections/Features";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Page() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-x-hidden">
      <Navbar />
      <section className="relative overflow-hidden pt-32 pb-20 bg-white">
        <div className="absolute inset-0 bg-grid-white opacity-45 pointer-events-none" />
        <div className="absolute inset-0 bg-pattern-logo-grid opacity-20 pointer-events-none" />
        <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-[#0F4C92]/10 blur-[100px] pointer-events-none" />
        <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-sky-300/20 blur-[110px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-[#0F4C92] heading-tech shadow-sm">
              Solutions
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-black uppercase tracking-tight text-slate-900 heading-tech">
              Enterprise Security <span className="text-[#0F4C92]">Solutions Built to Scale</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600 font-medium">
              Comprehensive cybersecurity solutions designed for modern organizations. From network security to threat detection, we provide integrated solutions that work together seamlessly.
            </p>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_18px_50px_rgba(15,76,146,0.08)] text-left">
                <h3 className="text-2xl font-black uppercase tracking-tight text-slate-900 heading-tech mb-6">
                  What Sets Us Apart
                </h3>
                <ul className="space-y-4">
                  {[
                    "27+ years of proven cybersecurity expertise",
                    "24x7 rapid response team always ready",
                    "Integrated solutions across all security domains",
                    "Risk-driven approach aligned with your business",
                    "SLA-backed support and measurable outcomes",
                    "Strategic partnerships with leading vendors",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-[#0F4C92] mt-1 shrink-0" />
                      <span className="text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[2rem] border border-blue-200 bg-linear-to-br from-[#0F4C92] to-[#0b3a74] p-8 text-white">
                <h3 className="text-2xl font-black uppercase tracking-tight heading-tech mb-6">
                  Why Choose DMS Systems
                </h3>
                <ul className="space-y-4">
                  {[
                    "Tailored solutions for your specific needs",
                    "Transparent pricing and clear SLAs",
                    "Dedicated support from seasoned experts",
                    "Continuous improvement and optimization",
                    "Industry compliance and certifications",
                    "Proven track record across sectors",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-blue-200 mt-1 shrink-0" />
                      <span className="text-white/90 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Features />
      <Services />
      <Testimonials />
      <Pricing />

      <section className="py-20 bg-[#0f172a] text-white">
        <div className="container mx-auto px-6">
          <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 md:p-10 backdrop-blur-sm shadow-[0_22px_60px_rgba(0,0,0,0.22)]">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.24em] text-blue-200 heading-tech">Ready to Protect Your Organization?</div>
                <h2 className="mt-3 text-3xl font-black uppercase tracking-tight heading-tech">Start Your Security Transformation Today</h2>
                <p className="mt-3 max-w-2xl text-white/75 leading-relaxed">
                  Schedule a consultation with our team to discuss your specific security challenges and discover how DMS Systems can help.
                </p>
              </div>
              <button className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-900 shadow-sm hover:bg-blue-50 transition-colors">
                Schedule Consultation
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
