import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Building2, Shield, BarChart, TrendingUp, ArrowRight } from "lucide-react";
import Image from "next/image";

const industries = [
  {
    name: "Financial Services",
    description: "Secure operations and protect sensitive financial data with compliance-ready solutions.",
    challenges: ["Regulatory compliance (RBI, SEBI)", "Fraud prevention", "Data protection", "Secure transactions"],
    icon: BarChart,
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    name: "Manufacturing",
    description: "Protect industrial infrastructure and operational technology with comprehensive controls.",
    challenges: ["Operational continuity", "Supply chain security", "Device protection", "Network segmentation"],
    icon: Building2,
    gradient: "from-emerald-600 to-teal-600",
  },
  {
    name: "Healthcare",
    description: "Safeguard patient data and ensure compliance with healthcare security standards.",
    challenges: ["Patient data protection", "HIPAA compliance", "Medical device security", "Access controls"],
    icon: Shield,
    gradient: "from-rose-600 to-pink-600",
  },
  {
    name: "Technology",
    description: "Defend against advanced threats and maintain security throughout the development lifecycle.",
    challenges: ["Application security", "Cloud security", "DevSecOps", "Incident response"],
    icon: TrendingUp,
    gradient: "from-purple-600 to-violet-600",
  },
];

export default function Page() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-x-hidden">
      <Navbar />
      <section className="relative overflow-hidden pt-32 pb-20 bg-slate-50">
        <div className="absolute inset-0 bg-grid-white opacity-45 pointer-events-none" />
        <div className="absolute inset-0 bg-pattern-logo-grid opacity-20 pointer-events-none" />
        <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-[#0F4C92]/10 blur-[100px] pointer-events-none" />
        <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-sky-300/20 blur-[110px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-[#0F4C92] heading-tech shadow-sm">
              Industries
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-black uppercase tracking-tight text-slate-900 heading-tech">
              Sector-Specific <span className="text-[#0F4C92]">Security Solutions</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600 font-medium">
              We understand the unique security challenges across different industries. Our tailored solutions address sector-specific regulations, threats, and operational requirements.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <div key={industry.name} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_12px_40px_rgba(15,76,146,0.08)] hover:shadow-[0_18px_60px_rgba(15,76,146,0.15)] transition-all">
                  <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${industry.gradient} text-white mb-6`}>
                    <Icon size={28} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-3 heading-tech uppercase">{industry.name}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{industry.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-slate-700 uppercase tracking-widest mb-4">Key Challenges</h4>
                    <ul className="space-y-2">
                      {industry.challenges.map((challenge) => (
                        <li key={challenge} className="flex items-center gap-2 text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#0F4C92]" />
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="inline-flex items-center gap-2 text-sm font-bold text-[#0F4C92] hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight size={16} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="rounded-[2.5rem] border border-slate-200 bg-gradient-to-br from-slate-50 to-blue-50 p-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-slate-900 heading-tech mb-6">
                Industry Expertise Across Sectors
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Our team has delivered security solutions to organizations across diverse industries. We understand your sector's unique challenges and regulations.
              </p>
              <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0F4C92] text-white font-bold hover:bg-[#0b3a74] transition-colors">
                Explore Our Case Studies
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
