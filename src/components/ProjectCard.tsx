"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  cta: string;
  image: string;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  tags,
  link,
  cta,
  image,
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
      {/* Dashboard Image */}
      <div className="relative h-52 w-full overflow-hidden border-b border-border bg-background">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
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