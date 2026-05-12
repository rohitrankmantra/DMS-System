"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-grid-white opacity-50 pointer-events-none" />
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-4">Contact Us</h2>
            <h3 className="text-4xl font-black text-slate-900 mb-6">Plan Your Next <span className="text-gradient">IT Milestone</span></h3>
            <p className="text-slate-600 text-lg mb-12">
              Share your infrastructure goals and we will propose a practical roadmap for modernization, security, and support.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-900 group-hover:bg-cyan-50 group-hover:border-cyan-300 transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-1 uppercase tracking-widest font-semibold">Email Us</div>
                  <div className="text-xl font-bold text-slate-900">ww.sales@whiz-works.com</div>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-900 group-hover:bg-cyan-50 group-hover:border-cyan-300 transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-1 uppercase tracking-widest font-semibold">Call Us</div>
                  <div className="text-xl font-bold text-slate-900">+91 96253 00824</div>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-900 group-hover:bg-cyan-50 group-hover:border-cyan-300 transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-1 uppercase tracking-widest font-semibold">Visit Us</div>
                  <div className="text-xl font-bold text-slate-900">Gurugram, India</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-10 rounded-[40px] bg-white border border-slate-200 relative shadow-sm"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-100/80 blur-3xl rounded-full" />
            
            <form className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="first-name" className="text-slate-700">First Name</Label>
                  <Input
                    id="first-name"
                    placeholder="John"
                    className="bg-white border-slate-300 focus:border-cyan-600 h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name" className="text-slate-700">Last Name</Label>
                  <Input
                    id="last-name"
                    placeholder="Doe"
                    className="bg-white border-slate-300 focus:border-cyan-600 h-12"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-700">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="bg-white border-slate-300 focus:border-cyan-600 h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-slate-700">Subject</Label>
                <Input
                  id="subject"
                  placeholder="Tell us your priority"
                  className="bg-white border-slate-300 focus:border-cyan-600 h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-slate-700">Message</Label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Describe current challenges, target timeline, and expected outcomes."
                  className="w-full rounded-md bg-white border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-600 transition-all min-h-30"
                />
              </div>

              <Button className="w-full h-14 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl shadow-lg group">
                Send Message
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
