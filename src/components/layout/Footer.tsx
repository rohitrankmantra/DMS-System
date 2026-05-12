import React from "react";
import Link from "next/link";
import { Github, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-20 pb-10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-grid-white opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&q=80')] bg-cover bg-center opacity-[0.22] mix-blend-multiply pointer-events-none" />
      <div className="absolute inset-0 bg-linear-to-t from-white via-white/78 to-white/42 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-blue-100/50 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 rounded-xl overflow-hidden border border-blue-200 bg-white shadow-[0_10px_24px_rgba(15,76,146,0.14)]">
                <Image src="/logo.jpg" alt="DMS Systems logo" width={48} height={48} className="w-full h-full object-cover" />
              </div>
              <span className="text-xl font-bold tracking-tight text-[#0F4C92] heading-tech">DMS Systems</span>
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Integrated IT infrastructure, cyber risk visibility, and managed support for business-critical operations.
            </p>
            <div className="flex items-center gap-4">
              {[Twitter, Github, Linkedin, Instagram].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-slate-300 hover:bg-slate-50 transition-all duration-300"
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              {["Cyber Risk Quantification", "Network and Security", "Cloud and Data Center", "Managed IT Support", "Compliance Readiness"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              {["About", "Industries", "Case Studies", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-semibold mb-6">Newsletter</h4>
            <p className="text-sm text-slate-600 mb-4">
              Get monthly infrastructure and cybersecurity briefings.
            </p>
            <div className="flex flex-col gap-3">
              <div className="relative group">
                <Input
                  placeholder="Email address"
                  className="bg-white border-slate-300 focus:border-slate-500 focus:ring-slate-400/20 transition-all h-11"
                />
                <Button className="absolute right-1 top-1 h-9 bg-slate-900 hover:bg-slate-800 text-white px-3">
                  <ArrowRight size={16} />
                </Button>
              </div>
              <p className="text-[10px] text-slate-500 px-1">
                By subscribing, you agree to our Privacy Policy and Terms of Service.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} DMS Systems. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <Link key={item} href="#" className="text-xs text-slate-500 hover:text-slate-900 transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
