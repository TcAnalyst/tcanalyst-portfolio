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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="p-6 border border-border rounded-xl bg-surface/30 hover:border-accent/40 transition-all"
    >
      <span className="text-xs text-accent tracking-wider uppercase mb-3 block">
        {category}
      </span>
      <h3 className="text-xl font-medium mb-3">{title}</h3>
      <p className="text-sm text-muted leading-relaxed mb-6">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-accent hover:underline"
      >
        View Article →
      </a>
    </motion.article>
  );
}