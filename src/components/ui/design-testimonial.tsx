"use client"

import type React from "react"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion"

const testimonials = [
  {
    quote: "For the first time, I can join team meetings without asking for an interpreter. SignLens makes me feel included instead of like an exception.",
    author: "Emily Rodriguez",
    role: "Product Designer",
    company: "NovaLabs",
  },
  {
    quote: "We use SignLens for daily standups with our Deaf teammate. Setup took five minutes, and now everyone can communicate naturally.",
    author: "Jason Kim",
    role: "Engineering Manager",
    company: "BrightStack",
  },
  {
    quote: "As a teacher, I can finally run mixed Deaf–hearing classes without worrying about logistics. Students just open a link and start talking and signing.",
    author: "Dr. Ayesha Perera",
    role: "Lecturer",
    company: "Horizon University",
  },
  {
    quote: "SignLens turned our customer support into an accessible service overnight. Deaf customers can sign, type, or speak—everything just works.",
    author: "Michael Chen",
    role: "Head of Support",
    company: "CloudWave",
  },
]

export function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // Mouse position for magnetic effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 200 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  // Transform for parallax on the large number
  const numberX = useTransform(x, [-200, 200], [-20, 20])
  const numberY = useTransform(y, [-200, 200], [-10, 10])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (rect) {
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      mouseX.set(e.clientX - centerX)
      mouseY.set(e.clientY - centerY)
    }
  }

  const goNext = useCallback(() => setActiveIndex((prev) => (prev + 1) % testimonials.length), [])
  const goPrev = useCallback(() => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length), [])

  useEffect(() => {
    const timer = setInterval(goNext, 6000)
    return () => clearInterval(timer)
  }, [goNext])

  const current = testimonials[activeIndex]

  return (
    <div id="testimonials" className="flex flex-col items-center justify-center min-h-screen bg-black overflow-x-hidden relative py-20">
       {/* Grid Background */}
       <div 
            className="absolute inset-0 z-0 opacity-20 pointer-events-none"
            style={{
                backgroundImage: `linear-gradient(to right, #444 1px, transparent 1px),
                                linear-gradient(to bottom, #444 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
                maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)'
            }}
        />

      <div ref={containerRef} className="relative w-full max-w-5xl z-10" onMouseMove={handleMouseMove}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl text-center mb-24 font-pixel tracking-tight text-white"
        >
          Testimonials
        </motion.h2>
        {/* Oversized index number - positioned to bleed off left edge */}
        <motion.div
          className="absolute -left-8 top-1/2 -translate-y-1/2 text-[12rem] md:text-[28rem] font-bold font-pixel text-[#9FE870]/10 select-none pointer-events-none leading-none tracking-tighter"
          style={{ x: numberX, y: numberY }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              {String(activeIndex + 1).padStart(2, "0")}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        {/* Main content - asymmetric layout */}
        <div className="relative flex flex-col md:flex-row">
          {/* Left column - vertical text */}
          <div className="hidden md:flex flex-col items-center justify-center pr-16 border-r border-white/10">
            <motion.span
              className="text-xs font-pixel text-[#9FE870] tracking-widest uppercase"
              style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Testimonials
            </motion.span>

            {/* Vertical progress line */}
            <div className="relative h-32 w-px bg-white/10 mt-8">
              <motion.div
                className="absolute top-0 left-0 w-full bg-[#9FE870] origin-top"
                animate={{
                  height: `${((activeIndex + 1) / testimonials.length) * 100}%`,
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>

          {/* Center - main content */}
          <div className="flex-1 px-4 md:pl-16 py-8 md:py-12">
            {/* Company badge */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="mb-8"
              >
                <span className="inline-flex items-center gap-2 text-xs font-pixel text-[#9FE870] border border-[#9FE870]/30 bg-[#9FE870]/5 rounded-md px-3 py-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9FE870]" />
                  {current.company}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Quote with character reveal */}
            <div className="relative mb-12 min-h-[140px]">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={activeIndex}
                  className="text-2xl md:text-5xl font-light text-white leading-[1.15] tracking-tight"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {current.quote.split(" ").map((word, i) => (
                    <motion.span
                      key={i}
                      className="inline-block mr-[0.3em]"
                      variants={{
                        hidden: { opacity: 0, y: 20, rotateX: 90 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          rotateX: 0,
                          transition: {
                            duration: 0.5,
                            delay: i * 0.05,
                            ease: [0.22, 1, 0.36, 1],
                          },
                        },
                        exit: {
                          opacity: 0,
                          y: -10,
                          transition: { duration: 0.2, delay: i * 0.02 },
                        },
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.blockquote>
              </AnimatePresence>
            </div>

            {/* Author row */}
            <div className="flex items-end justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="flex items-center gap-4"
                >
                  {/* Animated line before name */}
                  <motion.div
                    className="w-8 h-px bg-[#9FE870]"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    style={{ originX: 0 }}
                  />
                  <div>
                    <p className="text-base font-medium text-white">{current.author}</p>
                    <p className="text-sm text-gray-400">{current.role}</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center gap-4">
                <motion.button
                  onClick={goPrev}
                  className="group relative w-12 h-12 rounded-full border border-white/10 flex items-center justify-center overflow-hidden hover:border-[#9FE870]/50 transition-colors"
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-[#9FE870]"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="relative z-10 text-white group-hover:text-black transition-colors"
                  >
                    <path
                      d="M10 12L6 8L10 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.button>

                <motion.button
                  onClick={goNext}
                  className="group relative w-12 h-12 rounded-full border border-white/10 flex items-center justify-center overflow-hidden hover:border-[#9FE870]/50 transition-colors"
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-[#9FE870]"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="relative z-10 text-white group-hover:text-black transition-colors"
                  >
                    <path
                      d="M6 4L10 8L6 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
