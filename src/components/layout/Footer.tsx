import React from "react";
import Link from "next/link";
import { Github, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&q=80')] bg-cover bg-center opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/80 to-white/60 backdrop-blur-sm pointer-events-none" />

      <div className="container mx-auto px-6 py-20 relative z-10">
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
            <div className="text-sm text-slate-600 space-y-2 mb-6">
              <div>
                <strong className="text-slate-800">Address:</strong>
                <div className="text-slate-600">E-2/7 & 8, 2nd. Floor, Malviya Nagar, New Delhi – 110017</div>
                <div className="text-slate-500 text-xs">(Above VLCC Training Institute.)</div>
              </div>
              <div>
                <strong className="text-slate-800">Tel. :</strong>
                <a href="tel:+911126691429" className="ml-2 text-slate-600 hover:text-[#0F4C92]">+91.011.26691429</a>
              </div>
              <div>
                <strong className="text-slate-800">Pallavi Bhardwaj:</strong>
                <a href="tel:+919999035340" className="ml-2 text-slate-600 hover:text-[#0F4C92]">+91-99990-35340</a>
              </div>
              <div>
                <strong className="text-slate-800">Email:</strong>
                <a href="mailto:channels@dmsystems.in" className="ml-2 text-slate-600 hover:text-[#0F4C92]">channels@dmsystems.in</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {[Twitter, Github, Linkedin, Instagram].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-white hover:bg-[#0F4C92] hover:border-[#0F4C92] transition-all duration-300"
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
            <p className="text-sm text-slate-600 mb-4">Get monthly infrastructure and cybersecurity briefings.</p>
            <div className="flex flex-col gap-3">
              <div className="relative">
                <Input
                  placeholder="Email address"
                  className="bg-white border-slate-200 focus:border-slate-400 focus:ring-slate-300/30 transition-all h-12 pr-14 rounded-full"
                />
                <Button className="absolute right-1 top-1 h-10 w-10 rounded-full bg-[#0F4C92] hover:bg-[#0b3a74] text-white flex items-center justify-center">
                  <ArrowRight size={16} />
                </Button>
              </div>
              <p className="text-[11px] text-slate-500 px-1">By subscribing, you agree to our Privacy Policy and Terms of Service.</p>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-200/60 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} DMS Systems. All rights reserved.</p>
          <div className="flex items-center gap-6">
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
