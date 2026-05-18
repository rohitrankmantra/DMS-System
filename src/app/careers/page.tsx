import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Users, Target, Heart, Zap, ArrowRight, MapPin, Briefcase } from "lucide-react";

const jobs = [
  {
    title: "Senior Cybersecurity Consultant",
    location: "New Delhi",
    type: "Full-time",
    experience: "7+ years",
    description: "Lead enterprise security assessments and design comprehensive cybersecurity programs.",
  },
  {
    title: "Security Operations Manager",
    location: "New Delhi",
    type: "Full-time",
    experience: "5+ years",
    description: "Manage 24x7 SOC operations and lead incident response activities.",
  },
  {
    title: "Cloud Security Engineer",
    location: "Remote",
    type: "Full-time",
    experience: "4+ years",
    description: "Design and implement secure cloud infrastructure solutions.",
  },
  {
    title: "Penetration Tester",
    location: "New Delhi",
    type: "Full-time",
    experience: "3+ years",
    description: "Conduct security assessments and vulnerability testing for enterprise clients.",
  },
  {
    title: "IT Support Specialist",
    location: "New Delhi",
    type: "Full-time",
    experience: "1+ years",
    description: "Provide technical support and maintain client infrastructure.",
  },
  {
    title: "Sales Executive",
    location: "Multiple Cities",
    type: "Full-time",
    experience: "2+ years",
    description: "Build relationships and close enterprise security solution deals.",
  },
];

const values = [
  {
    title: "Integrity",
    description: "We stand by our commitments and maintain the highest ethical standards.",
    icon: Target,
  },
  {
    title: "Excellence",
    description: "We strive for continuous improvement and deliver exceptional results.",
    icon: Zap,
  },
  {
    title: "Collaboration",
    description: "We believe in teamwork and supporting each other's growth.",
    icon: Users,
  },
  {
    title: "Care",
    description: "We value our people and invest in their professional development.",
    icon: Heart,
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
          <div className="max-w-4xl mx-auto text-center mb-20">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-[#0F4C92] heading-tech shadow-sm">
              Careers
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-black uppercase tracking-tight text-slate-900 heading-tech">
              Join Our <span className="text-[#0F4C92]">Security Team</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600 font-medium">
              We're looking for talented security professionals to help us protect organizations worldwide. Build your career with a trusted leader in cybersecurity.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 mb-20">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_12px_30px_rgba(15,76,146,0.06)]"
                >
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-[#0F4C92] mb-6">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-3 heading-tech">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-slate-900 heading-tech mb-6">
              Open Positions
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Explore current job openings and find the perfect role for your career growth.
            </p>
          </div>

          <div className="space-y-4">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_8px_20px_rgba(15,76,146,0.04)] hover:shadow-[0_12px_40px_rgba(15,76,146,0.08)] transition-all group cursor-pointer"
              >
                <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
                  <div>
                    <h3 className="text-xl font-black text-slate-900 heading-tech mb-3 group-hover:text-[#0F4C92] transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-[#0F4C92]" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase size={16} className="text-[#0F4C92]" />
                        {job.type}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users size={16} className="text-[#0F4C92]" />
                        {job.experience}
                      </div>
                    </div>
                    <p className="mt-4 text-slate-600 leading-relaxed">{job.description}</p>
                  </div>
                  <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0F4C92] text-white font-bold hover:bg-[#0b3a74] transition-colors whitespace-nowrap">
                    Apply Now
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight heading-tech mb-8">
              Why Work at DMS Systems?
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-bold mb-4 heading-tech">Competitive Benefits</h3>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    Competitive salary and performance bonuses
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    Comprehensive health and wellness benefits
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    Professional development and certifications
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    Flexible working arrangements
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4 heading-tech">Growth Opportunities</h3>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    Mentorship from industry experts
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    Training on latest security technologies
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    Clear career advancement paths
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    Diverse and challenging projects
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
