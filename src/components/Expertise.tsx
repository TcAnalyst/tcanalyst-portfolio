"use client";

import { motion } from "framer-motion";
import { expertise } from "../data/expertise";

export default function Expertise() {
  return (
    <section className="py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold mb-16 tracking-tight"
        >
          What I Do
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {expertise.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-7 border border-border rounded-2xl bg-surface hover:border-accent/40 hover:shadow-soft transition-all duration-300"
            >
              <h3 className="text-lg font-medium mb-4 text-cream">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed mb-6">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-md bg-background border border-border text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}