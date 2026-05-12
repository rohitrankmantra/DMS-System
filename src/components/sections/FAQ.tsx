"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does a typical infrastructure engagement take?",
    answer: "Most assessment and design engagements are completed in 2 to 4 weeks. Full implementation programs vary by scope and can run from 6 to 16 weeks with phase-wise milestones.",
  },
  {
    question: "Do you provide post-implementation support?",
    answer: "Yes. We offer warranty and AMC models, with options for onsite support, 24x7 monitoring, and periodic optimization reviews based on agreed SLAs.",
  },
  {
    question: "Which areas do you specialize in?",
    answer: "Our core areas include cybersecurity risk programs, networking, cloud and data center modernization, endpoint security, backup and DR, and managed IT operations.",
  },
  {
    question: "Can you support compliance and governance needs?",
    answer: "Yes. We help teams map controls to regulatory expectations and improve audit readiness through policy, documentation, and security posture programs.",
  },
  {
    question: "What pricing model do you follow?",
    answer: "We support project-based, milestone-based, and monthly managed service contracts. Engagements are tailored to your infrastructure and risk priorities.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-50/60">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-4">FAQ</h2>
            <h3 className="text-4xl font-black text-slate-900 mb-6">Frequently Asked <span className="text-gradient">Questions</span></h3>
            <p className="text-slate-600 text-lg mb-8">
              Key answers about delivery model, scope, support, and governance.
            </p>
            <div className="p-8 rounded-3xl bg-white border border-slate-200">
              <h4 className="text-slate-900 font-bold mb-2">Still have questions?</h4>
              <p className="text-sm text-slate-600 mb-6">Our advisory team can help define the right roadmap for your environment.</p>
              <button className="text-cyan-700 font-bold hover:underline">Contact Support Team →</button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Accordion className="w-full space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border border-slate-200 bg-white rounded-2xl px-6 overflow-hidden data-[state=open]:border-cyan-500 transition-colors"
                >
                  <AccordionTrigger className="text-left text-slate-900 font-medium py-6 hover:no-underline hover:text-cyan-700 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
