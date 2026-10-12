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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group border border-border rounded-2xl overflow-hidden bg-surface hover:border-accent/40 hover:shadow-soft transition-all duration-300"
    >
      <div className="h-44 bg-background border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-40">
          <div className="grid grid-cols-6 gap-2 p-8 w-full">
            {Array.from({ length: 18 }).map((_, i) => (
              <div
                key={i}
                className="h-1.5 rounded-full bg-accent/60"
                style={{
                  width: `${35 + (i % 6) * 12}%`,
                  opacity: 0.25 + (i % 4) * 0.2,
                }}
              />
            ))}
          </div>
        </div>
        <div className="absolute bottom-3 left-5 text-[11px] text-muted/60 tracking-wider uppercase">
          Dashboard Preview
        </div>
      </div>

      <div className="p-7">
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
          className="inline-flex text-sm text-accent hover:underline underline-offset-4"
        >
          {cta}
        </a>
      </div>
    </motion.article>
  );
}