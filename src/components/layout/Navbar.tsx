"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Solutions", href: "#features" },
  { name: "Approach", href: "#workflow" },
  { name: "Industries", href: "#portfolio" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [sidebarOpen]);

  return (
    <>
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
        <nav
          className={cn(
            "w-full max-w-6xl transition-all duration-500 rounded-full border border-slate-200",
            isScrolled
              ? "bg-white/95 backdrop-blur-xl py-3 shadow-[0_8px_26px_rgba(15,23,42,0.08)]"
              : "bg-white/85 backdrop-blur-md py-4"
          )}
        >
          <div className="container mx-auto px-8 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-11 h-11 rounded-md overflow-hidden border border-blue-200 bg-white shadow-[0_6px_20px_rgba(28,120,200,0.22)] group-hover:rotate-6 transition-transform duration-300">
                <Image src="/logo.jpg" alt="DMS logo" width={44} height={44} className="object-cover w-full h-full" />
              </div>
              <span className="text-xl font-black tracking-tight text-[#0F4C92] uppercase heading-tech">
                DMS Systems
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-bold uppercase tracking-wider text-slate-500 hover:text-[#0F4C92] transition-colors relative group"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <Button size="icon" variant="ghost" className="rounded-full text-[#0F4C92] hover:bg-blue-50">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                  <Menu className="w-5 h-5" />
                </div>
              </Button>
              <Button className="bg-[#0F4C92] hover:bg-[#0C3F79] text-white font-bold rounded-full px-8 h-12 heading-tech">
                START ASSESSMENT
              </Button>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-slate-900 p-2"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Menu />
            </button>
          </div>
        </nav>
      </div>

      {/* Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            />
            
            {/* Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-96 bg-white z-50 shadow-2xl overflow-y-auto"
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <Link href="/" className="flex items-center gap-3" onClick={() => setSidebarOpen(false)}>
                    <div className="w-14 h-14 rounded-xl overflow-hidden border border-blue-200 bg-white shadow-[0_6px_20px_rgba(28,120,200,0.22)]">
                      <Image src="/logo.jpg" alt="DMS logo" width={56} height={56} className="object-cover w-full h-full" />
                    </div>
                    <div>
                      <span className="text-xl font-black tracking-tight text-[#0F4C92] uppercase heading-tech">
                        DMS Systems
                      </span>
                      <p className="text-xs text-slate-500 font-semibold tracking-wide uppercase">
                        Integrated IT Infrastructure
                      </p>
                    </div>
                  </Link>
                  <button
                    onClick={() => setSidebarOpen(false)}
                    className="w-12 h-12 rounded-full bg-[#0F4C92]/10 flex items-center justify-center hover:bg-[#0F4C92]/20 text-[#0F4C92] transition-all"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* About Section */}
                <div className="mb-8 p-6 bg-gradient-to-br from-blue-50 to-sky-50 rounded-3xl border border-blue-200">
                  <h3 className="text-lg font-black text-slate-900 mb-4 heading-tech">About Us</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    A modern IT infrastructure and security firm focused on delivering premium enterprise solutions. We combine architecture, implementation, and long-term support under one accountable team.
                  </p>
                </div>

                {/* Navigation */}
                <div className="mb-8">
                  <h3 className="text-sm font-black text-slate-400 mb-4 uppercase tracking-widest heading-tech">Quick Links</h3>
                  <div className="flex flex-col gap-2">
                    {navLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="group flex items-center justify-between py-4 px-5 rounded-2xl text-base font-bold uppercase tracking-wider text-slate-700 hover:text-[#0F4C92] hover:bg-[#0F4C92]/5 transition-all"
                        onClick={() => setSidebarOpen(false)}
                      >
                        {link.name}
                        <ArrowRight size={20} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all text-[#0F4C92]" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="mb-8">
                  <h3 className="text-sm font-black text-slate-400 mb-4 uppercase tracking-widest heading-tech">Contact Info</h3>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-slate-200">
                      <div className="w-10 h-10 rounded-full bg-[#0F4C92]/10 flex items-center justify-center text-[#0F4C92] flex-shrink-0">
                        <Phone size={18} />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 font-semibold uppercase tracking-wide">Phone</p>
                        <p className="text-sm font-bold text-slate-900">+91 98765 43210</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-slate-200">
                      <div className="w-10 h-10 rounded-full bg-[#0F4C92]/10 flex items-center justify-center text-[#0F4C92] flex-shrink-0">
                        <Mail size={18} />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 font-semibold uppercase tracking-wide">Email</p>
                        <p className="text-sm font-bold text-slate-900">contact@dmsystems.in</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-slate-200">
                      <div className="w-10 h-10 rounded-full bg-[#0F4C92]/10 flex items-center justify-center text-[#0F4C92] flex-shrink-0">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 font-semibold uppercase tracking-wide">Location</p>
                        <p className="text-sm font-bold text-slate-900">Delhi, India</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-slate-200">
                      <div className="w-10 h-10 rounded-full bg-[#0F4C92]/10 flex items-center justify-center text-[#0F4C92] flex-shrink-0">
                        <Clock size={18} />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 font-semibold uppercase tracking-wide">Hours</p>
                        <p className="text-sm font-bold text-slate-900">Mon - Fri: 9AM - 6PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <Button className="w-full bg-[#0F4C92] hover:bg-[#0C3F79] text-white font-bold rounded-full h-14 text-lg heading-tech">
                  START ASSESSMENT
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
