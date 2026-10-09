"use client";

import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  cta: string;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  tags,
  link,
  cta,
  index,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group border border-border rounded-xl overflow-hidden bg-surface/30 hover:border-accent/40 transition-all"
    >
      {/* Abstract preview placeholder */}
      <div className="h-48 bg-background border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <div className="grid grid-cols-6 gap-2 p-6 w-full">
            {Array.from({ length: 24 }).map((_, i) => (
              <div
                key={i}
                className="h-2 rounded-full bg-accent/50"
                style={{
                  width: `${40 + (i % 7) * 10}%`,
                  opacity: 0.2 + (i % 4) * 0.2,
                }}
              />
            ))}
          </div>
        </div>
        <div className="absolute bottom-3 left-4 text-xs text-muted/50 tracking-wider uppercase">
          Dashboard Preview
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-medium mb-3 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted leading-relaxed mb-6 line-clamp-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-md bg-background border border-border text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex text-sm text-accent hover:underline"
        >
          {cta}
        </a>
      </div>
    </motion.article>
  );
}