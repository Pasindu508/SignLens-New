"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface WordRotateProps {
  words: string[];
  duration?: number;
  framerProps?: HTMLMotionProps<"span">;
  className?: string;
}

export function WordRotate({
  words,
  duration = 2500,
  framerProps = {
    initial: { opacity: 0, y: -8 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 8 },
    transition: { duration: 0.25, ease: "easeOut" },
  },
  className,
}: WordRotateProps) {
  const [index, setIndex] = useState(0);

  // Reserve space to prevent layout shift by using the longest word as a placeholder
  const longestWord = useMemo(
    () => words.reduce((a, b) => (a.length >= b.length ? a : b), words[0] ?? ""),
    [words],
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    <span className="relative inline-block overflow-hidden align-baseline">
      {/* Placeholder reserves width/height so the line doesn’t jump */}
      <span aria-hidden className={cn(className, "invisible inline-block")}>{longestWord}</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          className={cn(className, "absolute left-0 top-0")}
          {...framerProps}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}