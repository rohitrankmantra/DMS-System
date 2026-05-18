import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BookOpen, FileText, Play, Download, ArrowRight } from "lucide-react";

const resources = [
  {
    category: "Whitepapers",
    icon: FileText,
    color: "bg-blue-100",
    items: [
      {
        title: "Cybersecurity Risk Quantification",
        description: "Learn how to quantify and communicate cyber risk to stakeholders.",
        downloads: "2.4K",
      },
      {
        title: "Building a Mature SOC",
        description: "Guide to establishing and operating a Security Operations Center.",
        downloads: "1.8K",
      },
      {
        title: "Zero Trust Architecture Guide",
        description: "Implement zero trust principles in your organization.",
        downloads: "3.1K",
      },
    ],
  },
  {
    category: "Case Studies",
    icon: BookOpen,
    color: "bg-emerald-100",
    items: [
      {
        title: "Enterprise Banking Digital Transformation",
        description: "How a major bank secured its cloud migration.",
        downloads: "892",
      },
      {
        title: "Manufacturing Operational Technology Security",
        description: "Protecting critical manufacturing infrastructure.",
        downloads: "1.2K",
      },
      {
        title: "Healthcare HIPAA Compliance",
        description: "Achieving and maintaining healthcare compliance standards.",
        downloads: "956",
      },
    ],
  },
  {
    category: "Webinars",
    icon: Play,
    color: "bg-purple-100",
    items: [
      {
        title: "Securing Your Remote Workforce",
        description: "Best practices for securing distributed teams.",
        downloads: "4.3K views",
      },
      {
        title: "Incident Response 101",
        description: "Building an effective incident response program.",
        downloads: "3.1K views",
      },
      {
        title: "Cloud Security Deep Dive",
        description: "Securing cloud environments at scale.",
        downloads: "5.2K views",
      },
    ],
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
              Resources
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-black uppercase tracking-tight text-slate-900 heading-tech">
              Knowledge & <span className="text-[#0F4C92]">Learning Resources</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600 font-medium">
              Access whitepapers, case studies, webinars, and more to deepen your cybersecurity knowledge and stay updated with industry trends.
            </p>
          </div>

          {resources.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.category} className="mb-20">
                <div className="flex items-center gap-3 mb-10">
                  <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${category.color} text-[#0F4C92]`}>
                    <Icon size={24} />
                  </div>
                  <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 heading-tech">
                    {category.category}
                  </h2>
                </div>

                <div className="grid gap-8 lg:grid-cols-3">
                  {category.items.map((item, index) => (
                    <div
                      key={index}
                      className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_10px_30px_rgba(15,76,146,0.06)] hover:shadow-[0_18px_50px_rgba(15,76,146,0.12)] transition-all group"
                    >
                      <h3 className="text-lg font-black text-slate-900 mb-3 heading-tech group-hover:text-[#0F4C92] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-6">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-500">
                          {item.downloads}
                        </span>
                        <button className="inline-flex items-center gap-2 text-sm font-bold text-[#0F4C92] hover:gap-3 transition-all">
                          <Download size={16} />
                          Download
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-20 bg-[#0f172a] text-white">
        <div className="container mx-auto px-6">
          <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 md:p-10 backdrop-blur-sm">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight heading-tech mb-6">
                Stay Updated with Industry Insights
              </h2>
              <p className="text-white/80 leading-relaxed mb-8">
                Subscribe to our newsletter for the latest cybersecurity trends, best practices, and exclusive content delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-full bg-white/10 border border-white/20 px-6 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                />
                <button className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-bold text-slate-900 hover:bg-blue-50 transition-colors">
                  Subscribe
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
