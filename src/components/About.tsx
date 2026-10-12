"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-14 tracking-tight">
            Turning Blockchain Data Into Insights
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6 text-muted leading-relaxed text-[15px]">
              <p>
                Hi, I’m Tochukwu ilechukwu. I&apos;m a DeFi Data Analyst and Researcher focused on turning on-chain data into applicable solutions across protocols, markets, and user behavior .
              </p>
              <p>
                I build data-based dashboards to explore protocol activity, user behavior, liquidity, and market trends, using these analyses as the foundation for in-depth research reports .
              </p>
              <p>
                I investigate what is happening on-chain, why it is happening, and what it means for the a DeFi project or broader ecosystem and in turn turn them to solutions.
              </p>
            </div>

            <div className="bg-surface border border-border rounded-2xl p-8">
              <div className="space-y-5">
                {["Blockchain data", "Analysis", "Dashboards", "Research", "Insights"].map(
                  (step, i) => (
                    <div key={step} className="flex items-center gap-4">
                      <span className="text-xs font-medium text-accent w-7">
                        0{i + 1}
                      </span>
                      <span className="text-sm text-cream">{step}</span>
                      {i < 4 && <div className="flex-1 h-px bg-border" />}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}