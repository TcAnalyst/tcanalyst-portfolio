"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-6">
            DeFi Data Analyst
            <br />
            <span className="text-muted">& Researcher</span>
          </h1>

          <p className="text-lg text-muted mb-4 max-w-lg">
            I turn on-chain data into meaningful insights across protocols, markets, and user behavior.
          </p>

          <p className="text-base text-muted/80 mb-10 max-w-lg leading-relaxed">
            I build data-based dashboards that provides solution for DeFi projects and products.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="#work"
              className="px-6 py-3 bg-accent text-background font-medium rounded-lg hover:bg-accent-dim transition-colors"
            >
              View My Work →
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-border rounded-lg hover:border-accent hover:text-accent transition-colors"
            >
              Get In Touch →
            </a>
          </div>

          <div className="flex gap-6 text-sm text-muted">
            <a
              href="https://x.com/tc_junior1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              X
            </a>
            <a
              href="https://www.linkedin.com/in/ilechukwu-e-438908127"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://medium.com/@tcanalyst"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Medium
            </a>
          </div>
        </motion.div>

        {/* Subtle abstract visual */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:flex justify-center"
        >
          <div className="relative w-80 h-80">
            <div className="absolute inset-0 border border-border rounded-2xl" />
            <div className="absolute inset-4 border border-border/50 rounded-xl" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-4 gap-3 opacity-40">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 rounded-full bg-accent/60"
                    style={{ opacity: 0.3 + (i % 5) * 0.15 }}
                  />
                ))}
              </div>
            </div>
            <div className="absolute bottom-8 left-8 right-8 text-xs text-muted/60 tracking-widest uppercase">
              Data → Analysis → Insights
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}