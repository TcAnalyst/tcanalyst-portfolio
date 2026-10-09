"use client";

import { motion } from "framer-motion";
import { research } from "../data/research";
import ResearchCard from "./ResearchCard";

export default function Research() {
  return (
    <section id="research" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">
            Research & Insights
          </h2>
          <p className="text-muted max-w-2xl">
            Using on-chain data to investigate protocols, markets, and ecosystem behavior.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {research.map((item, i) => (
            <ResearchCard key={item.id} {...item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}