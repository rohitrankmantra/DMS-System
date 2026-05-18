import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, TrendingUp } from "lucide-react";
import Image from "next/image";

const caseStudies = [
  {
    title: "Enterprise Banking Group - Cyber Risk Dashboard",
    category: "Financial Services",
    year: "2024",
    challenge: "Large banking group needed board-level visibility into cyber risk posture across 50+ locations.",
    solution: "Designed and deployed comprehensive cyber risk quantification framework with real-time executive dashboard.",
    results: [
      "Risk visibility improved by 85%",
      "Incident response time reduced by 60%",
      "Compliance score: 98%",
      "Zero critical breaches in 24 months",
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    title: "Manufacturing Conglomerate - Network Transformation",
    category: "Manufacturing",
    year: "2023",
    challenge: "Multi-site manufacturing company faced fragmented network infrastructure with poor security controls.",
    solution: "Implemented SD-WAN and segmentation across 15 manufacturing facilities with centralized security monitoring.",
    results: [
      "Network latency reduced by 45%",
      "Security incidents reduced by 75%",
      "Operational uptime: 99.8%",
      "Cost savings: 40% on bandwidth",
    ],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
  },
  {
    title: "Healthcare Provider - Patient Data Protection",
    category: "Healthcare",
    year: "2023",
    challenge: "Healthcare organization needed to secure patient data and achieve HIPAA compliance across all systems.",
    solution: "Deployed encryption, access controls, and secure backup systems with audit logging and monitoring.",
    results: [
      "HIPAA compliance achieved",
      "Zero data breaches",
      "Audit ready in 12 months",
      "Patient data security rating: A+",
    ],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
  },
  {
    title: "Tech Startup - Secure Development Pipeline",
    category: "Technology",
    year: "2024",
    challenge: "Fast-growing tech company needed to secure development pipeline without slowing innovation.",
    solution: "Implemented DevSecOps practices with automated security scanning and policy enforcement.",
    results: [
      "Vulnerability detection time: 5 minutes",
      "Development velocity unchanged",
      "Zero production incidents from code",
      "Security certification: ISO 27001",
    ],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
  },
];

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
          <div className="max-w-4xl mx-auto text-center mb-20">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-[#0F4C92] heading-tech shadow-sm">
              Case Studies
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-black uppercase tracking-tight text-slate-900 heading-tech">
              Real Results from <span className="text-[#0F4C92]">Real Engagements</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600 font-medium">
              Explore how DMS Systems has transformed security posture across diverse organizations. See measurable outcomes and proven results.
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className={`grid gap-10 lg:grid-cols-2 items-center rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-[0_12px_40px_rgba(15,76,146,0.08)] hover:shadow-[0_18px_60px_rgba(15,76,146,0.15)] transition-all ${
                  index % 2 === 1 ? "lg:grid-cols-2 lg:direction-rtl" : ""
                }`}
              >
                <div className="relative overflow-hidden h-96">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/30 to-transparent" />
                </div>

                <div className={`p-8 md:p-10 ${index % 2 === 1 ? "lg:order-first" : ""}`}>
                  <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#0F4C92] heading-tech mb-4">
                    <TrendingUp size={14} />
                    {study.category} • {study.year}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-slate-900 heading-tech mb-6">
                    {study.title}
                  </h3>

                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Challenge</h4>
                      <p className="text-slate-700 leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Solution</h4>
                      <p className="text-slate-700 leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">Results</h4>
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {study.results.map((result) => (
                        <li key={result} className="flex items-center gap-2 text-sm font-semibold text-[#0F4C92]">
                          <div className="w-2 h-2 rounded-full bg-[#0F4C92]" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="inline-flex items-center gap-2 text-sm font-bold text-[#0F4C92] hover:gap-3 transition-all">
                    Download Case Study
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0f172a] text-white">
        <div className="container mx-auto px-6">
          <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 md:p-10 backdrop-blur-sm shadow-[0_22px_60px_rgba(0,0,0,0.22)]">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.24em] text-blue-200 heading-tech">Partner Success</div>
                <h2 className="mt-3 text-3xl font-black uppercase tracking-tight heading-tech">Ready to Become Our Next Success Story?</h2>
                <p className="mt-3 max-w-2xl text-white/75 leading-relaxed">
                  Let's discuss how DMS Systems can help you achieve your security and business objectives.
                </p>
              </div>
              <button className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-900 shadow-sm hover:bg-blue-50 transition-colors">
                Start Your Journey
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
