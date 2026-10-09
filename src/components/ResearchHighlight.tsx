"use client";

import { motion } from "framer-motion";

const highlights = [
  { value: "$1B+", label: "Monad TVL analyzed" },
  { value: "20+", label: "Robinhood US stocks & ETFs tracked" },
  { value: "$300M+", label: "Balancer v3-related DEX volume investigated" },
];

export default function ResearchHighlight() {
  return (
    <section className="py-24 border-t border-border bg-surface/20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold mb-16 tracking-tight text-center"
        >
          From Data to Insight
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-semibold text-accent mb-3">
                {item.value}
              </div>
              <p className="text-sm text-muted">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}