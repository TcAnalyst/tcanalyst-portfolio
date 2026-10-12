"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.15] mb-8">
            DeFi Data Analyst
            <br />
            <span className="text-muted">& Researcher</span>
          </h1>

          <p className="text-lg md:text-xl text-muted mb-5 max-w-2xl leading-relaxed">
            I turn on-chain data into meaningful insights across protocols, markets, and user behavior.
          </p>

          <p className="text-base text-muted/80 mb-12 max-w-2xl leading-relaxed">
            I build data-based dashboards that provides solution for DeFi projects and products.
          </p>

          <div className="flex flex-wrap gap-4 mb-14">
            <a
              href="#work"
              className="px-7 py-3.5 bg-accent text-background font-medium rounded-xl hover:bg-accent-dim transition-all shadow-glow"
            >
              View My Work →
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 border border-border rounded-xl hover:border-accent/50 hover:text-accent transition-all"
            >
              Get In Touch →
            </a>
          </div>

          <div className="flex gap-8 text-sm text-muted">
            <a href="https://x.com/tc_junior1" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              X
            </a>
            <a href="https://www.linkedin.com/in/ilechukwu-e-438908127" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              LinkedIn
            </a>
            <a href="https://medium.com/@tcanalyst" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              Medium
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}