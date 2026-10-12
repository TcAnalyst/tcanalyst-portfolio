"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight">
            Let&apos;s turn that Data to solution.
          </h2>
          <p className="text-muted mb-4 leading-relaxed">
            I’m looking for DeFi data analyst roles, research projects, and on-chain analytics work
          </p>
          <p className="text-muted mb-10 leading-relaxed">
            Got a question the data might answer? Send it my way. If your protocol’s story is buried in the chain, I can help dig it out.
          </p>

          <a
            href="mailto:ilechukwuemmanuel19@gmail.com"
            className="inline-block px-7 py-3.5 bg-accent text-background font-medium rounded-xl hover:bg-accent-dim transition-all shadow-glow mb-10"
          >
            Email Me →
          </a>

          <div className="flex flex-wrap gap-8 text-sm">
            <a href="https://x.com/tc_junior1" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
              X →
            </a>
            <a href="https://www.linkedin.com/in/ilechukwu-e-438908127" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
              LinkedIn →
            </a>
            <a href="https://medium.com/@tcanalyst" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
              Medium →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}