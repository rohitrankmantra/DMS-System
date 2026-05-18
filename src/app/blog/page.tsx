import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, Calendar, User } from "lucide-react";
import Image from "next/image";

const blogPosts = [
  {
    title: "The Evolution of Cybersecurity: From Perimeter Defense to Zero Trust",
    excerpt: "Explore how cybersecurity strategies have evolved and why zero trust is becoming the industry standard.",
    author: "Devender Kumar Bajaj",
    date: "May 10, 2024",
    category: "Security Strategy",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
  },
  {
    title: "24/7 Security Operations: Building a Resilient SOC",
    excerpt: "Learn how to establish and operate a 24x7 Security Operations Center that effectively detects and responds to threats.",
    author: "Security Team",
    date: "May 5, 2024",
    category: "Operations",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
  },
  {
    title: "Endpoint Security in the Remote Work Era",
    excerpt: "Securing distributed workforces requires a comprehensive approach. Discover best practices for endpoint protection.",
    author: "Pallavi Bhardwaj",
    date: "April 28, 2024",
    category: "Endpoint Security",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
  },
  {
    title: "Cloud Security: A Shared Responsibility Model",
    excerpt: "Understanding the shared responsibility model and implementing effective cloud security controls.",
    author: "Security Team",
    date: "April 20, 2024",
    category: "Cloud Security",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
  },
  {
    title: "Compliance Beyond Checkboxes: Building a Security Culture",
    excerpt: "Moving from compliance-driven security to building a culture of security awareness across your organization.",
    author: "Amit Sharma",
    date: "April 12, 2024",
    category: "Compliance",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
  },
  {
    title: "Incident Response Planning: Be Ready Before You Need It",
    excerpt: "A comprehensive guide to developing an effective incident response plan that protects your organization.",
    author: "Security Team",
    date: "April 5, 2024",
    category: "Incident Response",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
];

const categories = [
  "All",
  "Security Strategy",
  "Operations",
  "Endpoint Security",
  "Cloud Security",
  "Compliance",
  "Incident Response",
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
              Blog
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-black uppercase tracking-tight text-slate-900 heading-tech">
              Security Insights & <span className="text-[#0F4C92]">Industry Updates</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600 font-medium">
              Stay updated with the latest cybersecurity trends, best practices, and insights from industry experts.
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-16 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`rounded-full px-6 py-3 font-bold uppercase tracking-wider text-sm transition-all ${
                  category === "All"
                    ? "bg-[#0F4C92] text-white"
                    : "bg-white border border-slate-200 text-slate-700 hover:border-[#0F4C92] hover:text-[#0F4C92]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="group rounded-[2rem] border border-slate-200 overflow-hidden bg-white shadow-[0_10px_30px_rgba(15,76,146,0.06)] hover:shadow-[0_18px_50px_rgba(15,76,146,0.12)] transition-all"
              >
                <div className="relative overflow-hidden h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block rounded-full bg-[#0F4C92] text-white px-4 py-2 text-xs font-bold uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-black text-slate-900 mb-3 heading-tech group-hover:text-[#0F4C92] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-slate-500 mb-6 pb-6 border-b border-slate-200">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User size={14} />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {post.date}
                      </div>
                    </div>
                    <span className="font-semibold text-slate-600">{post.readTime}</span>
                  </div>

                  <button className="inline-flex items-center gap-2 text-sm font-bold text-[#0F4C92] hover:gap-3 transition-all">
                    Read Article
                    <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="rounded-[2.5rem] border border-slate-200 bg-gradient-to-br from-slate-50 to-blue-50 p-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-slate-900 heading-tech mb-6">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Get the latest cybersecurity insights, industry updates, and expert tips delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-full border border-slate-200 px-6 py-3 focus:outline-none focus:border-[#0F4C92]"
                />
                <button className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#0F4C92] text-white font-bold hover:bg-[#0b3a74] transition-colors">
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
