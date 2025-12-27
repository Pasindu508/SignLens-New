"use client";
import React, { useEffect } from "react";
import { motion, useAnimationControls, useReducedMotion } from "framer-motion";

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

interface TestimonialsColumnProps {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
  pauseOnHover?: boolean;
}

export const TestimonialsColumn = ({
  className,
  testimonials,
  duration = 10,
  pauseOnHover = true,
}: TestimonialsColumnProps) => {
  const controls = useAnimationControls();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return; // Respect user preference
    controls.start({
      translateY: "-50%",
      transition: {
        duration: duration,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      },
    });
  }, [controls, duration, prefersReducedMotion]);

  return (
    <div
      className={`relative h-[28rem] sm:h-[32rem] overflow-hidden ${className ?? ""}`}
      aria-label="Testimonials column"
      onMouseEnter={() => {
        if (pauseOnHover) controls.stop();
      }}
      onMouseLeave={() => {
        if (pauseOnHover && !prefersReducedMotion) {
          controls.start({
            translateY: "-50%",
            transition: {
              duration: duration,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            },
          });
        }
      }}
    >
      <motion.div animate={controls} className="flex flex-col gap-6 pb-6">
        {new Array(2).fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ text, image, name, role }, i) => (
              <div
                className="p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg shadow-black/30 w-[19rem] sm:w-[21rem]"
                key={i}
              >
                <div className="text-white/90 text-sm leading-relaxed">{text}</div>
                <div className="flex items-center gap-2 mt-5">
                  <img
                    width={40}
                    height={40}
                    src={image}
                    alt={name}
                    loading="lazy"
                    className="h-10 w-10 rounded-full object-cover ring-2 ring-white/30"
                  />
                  <div className="flex flex-col">
                    <div className="font-medium tracking-tight leading-5 text-white">{name}</div>
                    <div className="leading-5 text-white/60 tracking-tight text-sm">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
      {/* Top/Bottom gradient masks to fade edges */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/80 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent" />
    </div>
  );
};