"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 tracking-tight">
            Turning Blockchain Data Into Insights
          </h2>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-6 text-muted leading-relaxed">
              <p>
                Hi, I’m Tochukwu ilechukwu. I&apos;m a <span className="text-white">DeFi Data Analyst and Researcher</span> focused on turning on-chain data into applicable solutions across <span className="text-white">protocols, markets, and user behavior</span>.
              </p>
              <p>
                I build <span className="text-white">data-based dashboards</span> to explore protocol activity, user behavior, liquidity, and market trends, using these analyses as the foundation for <span className="text-white">in-depth research reports</span>.
              </p>
              <p>
                I investigate <span className="text-white">what is happening on-chain, why it is happening, and what it means for the a DeFi project or broader ecosystem and in turn turn them to solutions.</span>
              </p>
            </div>

            <div className="flex flex-col justify-center">
              <div className="space-y-4">
                {["Blockchain data", "Analysis", "Dashboards", "Research", "Insights"].map(
                  (step, i) => (
                    <div key={step} className="flex items-center gap-4">
                      <span className="text-xs text-accent font-medium w-6">
                        0{i + 1}
                      </span>
                      <span className="text-sm">{step}</span>
                      {i < 4 && (
                        <div className="flex-1 h-px bg-border ml-2" />
                      )}
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