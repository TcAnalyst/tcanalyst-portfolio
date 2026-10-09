"use client";

import { motion } from "framer-motion";
import { certifications } from "../data/certifications";

export default function Certifications() {
  return (
    <section className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold mb-16 tracking-tight"
        >
          Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 border border-border rounded-xl bg-surface/30"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">{cert.title}</h3>
                <span className="text-xs px-2.5 py-1 rounded-md border border-accent/40 text-accent">
                  {cert.status}
                </span>
              </div>
              <p className="text-sm text-muted leading-relaxed mb-6">
                {cert.description}
              </p>
              {cert.link ? (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent hover:underline"
                >
                  View Certificate →
                </a>
              ) : (
                <span className="text-sm text-muted/50">Certificate available on request</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}