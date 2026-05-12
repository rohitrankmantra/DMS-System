"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Foundation",
    price: "$1,500",
    description: "For teams starting structured IT and security operations.",
    features: ["Environment Assessment", "Network Baseline", "Security Hardening", "Quarterly Review", "Email Support"],
    isPopular: false,
  },
  {
    name: "Growth",
    price: "$4,500",
    description: "For organizations scaling infrastructure and governance maturity.",
    features: ["Architecture and Migration Plan", "Cloud and Backup Strategy", "Threat Simulation", "24x7 Monitoring", "Monthly SLA Reporting", "Priority Support"],
    isPopular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored transformation and managed operations for complex enterprises.",
    features: ["Dedicated Pod", "Multi-Site Program Governance", "Compliance Readiness", "vCISO Advisory", "Incident Response Planning", "Custom Integrations"],
    isPopular: false,
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-grid-white opacity-45 pointer-events-none" />
      <div className="absolute inset-0 bg-pattern-logo-grid opacity-15 pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-[#0F4C92] font-semibold tracking-wider uppercase text-sm mb-4 heading-tech">Pricing Plans</h2>
          <h3 className="text-4xl font-black text-slate-900 mb-6 heading-tech">Choose Your <span className="text-gradient">Service Model</span></h3>
          <p className="text-slate-600 text-lg">
            Flexible engagement structures for advisory, implementation, and managed support.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-10 rounded-[2rem] border transition-all duration-500 relative flex flex-col overflow-hidden shadow-[0_12px_40px_rgba(15,76,146,0.06)] ${
                plan.isPopular
                  ? "bg-linear-to-br from-[#eef7ff] via-white to-[#dcecff] border-blue-300 scale-[1.03] z-10"
                  : "bg-white border-slate-200 hover:border-blue-200"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#0F4C92] text-white text-xs font-bold tracking-widest uppercase flex items-center gap-1 heading-tech">
                  <Zap size={12} fill="currentColor" />
                  Most Popular
                </div>
              )}

              <div className="absolute -right-10 -top-10 opacity-10 text-[#0F4C92]">
                <Zap size={120} />
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-black text-slate-900 mb-2 heading-tech">{plan.name}</h4>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-slate-500">/month</span>}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <div className="space-y-4 mb-10 grow">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#0F4C92]/15 flex items-center justify-center text-[#0F4C92] shrink-0">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-sm text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                variant={plan.isPopular ? "default" : "outline"}
                className={`w-full h-12 rounded-xl font-bold ${
                  plan.isPopular
                    ? "bg-[#0F4C92] hover:bg-[#0C3F79] text-white shadow-lg heading-tech"
                    : "border-slate-300 text-slate-900 hover:bg-slate-50 heading-tech"
                }`}
              >
                Choose Plan
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
