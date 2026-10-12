"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Identify", desc: "Start with the question nobody’s asked yet." },
  { num: "02", title: "Query", desc: "Pull the raw on-chain activity with SQL." },
  { num: "03", title: "Analyze", desc: "Follow the money, the users, and the liquidity to see what’s moving." },
  { num: "04", title: "Visualize", desc: "Turn the data into dashboards anyone can read." },
  { num: "05", title: "Research", desc: "write up what the data is really saying." },
  { num: "06", title: "Insight", desc: "What happened, why it happened, and what it means." },
];

export default function Workflow() {
  return (
    <section className="py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold mb-16 tracking-tight"
        >
          How I Work
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-6 border border-border rounded-2xl bg-surface hover:border-accent/30 transition-colors"
            >
              <div className="text-xs text-accent font-medium mb-3">{step.num}</div>
              <h3 className="text-lg font-medium mb-2 text-cream">{step.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}