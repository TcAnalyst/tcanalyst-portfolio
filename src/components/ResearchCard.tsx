"use client";

import { motion } from "framer-motion";

interface ResearchCardProps {
  title: string;
  description: string;
  category: string;
  link: string;
  index: number;
}

export default function ResearchCard({
  title,
  description,
  category,
  link,
  index,
}: ResearchCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="p-7 border border-border rounded-2xl bg-surface hover:border-accent/40 hover:shadow-soft transition-all duration-300"
    >
      <span className="text-xs text-accent tracking-wider uppercase mb-3 block">
        {category}
      </span>
      <h3 className="text-xl font-medium mb-3 text-cream">{title}</h3>
      <p className="text-sm text-muted leading-relaxed mb-6">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-accent hover:underline underline-offset-4"
      >
        View Article →
      </a>
    </motion.article>
  );
}