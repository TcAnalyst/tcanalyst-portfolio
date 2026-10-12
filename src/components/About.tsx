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
            I read the chain so you don’t have to
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6 text-muted leading-relaxed text-[15px]">
              <p>
                I’m a DeFi data analyst and researcher. I take on-chain data and turn it into answers that protocols can use
              </p>
              <p>
                I build dashboards to track what’s happening inside a protocol: how people use it, where liquidity sits, and how the market around it is moving. Those dashboards become the base for my research reports
              </p>
              <p>
                For any DeFi project or ecosystem, I look at three things: what’s happening on-chain, why it’s happening, and what the team should do about it
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