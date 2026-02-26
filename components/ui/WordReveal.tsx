"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface WordRevealProps {
  text: string;
  className?: string;
  accentWords?: string[];
  accentClassName?: string;
}

export function WordReveal({
  text,
  className,
  accentWords = [],
  accentClassName = "text-teal",
}: WordRevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const words = text.split(" ");

  return (
    <span ref={ref} className={className} aria-label={text}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.06 }}
          className={`inline-block mr-[0.25em] ${
            accentWords.includes(word) ? accentClassName : ""
          }`}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
