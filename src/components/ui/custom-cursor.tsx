"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  // Motion values for raw mouse position
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Spring physics for the outer ring (smooth, buttery lag)
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 }
  const ringX = useSpring(mouseX, springConfig)
  const ringY = useSpring(mouseY, springConfig)

  // Spring physics for the inner dot (snappy, follows closely)
  const dotSpringConfig = { damping: 30, stiffness: 700, mass: 0.1 }
  const dotX = useSpring(mouseX, dotSpringConfig)
  const dotY = useSpring(mouseY, dotSpringConfig)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      // Check if the target or its parent is clickable
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') !== null || 
        target.closest('button') !== null ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('cursor-pointer')

      setIsHovering(isClickable)
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("mouseover", handleMouseOver)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    document.body.addEventListener("mouseleave", handleMouseLeave)
    document.body.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("mouseover", handleMouseOver)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
      document.body.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [isVisible, mouseX, mouseY])

  if (!isVisible) return null

  return (
    <>
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>
      
      {/* Outer Ring - Smooth Follower */}
      <motion.div
        className="fixed top-0 left-0 z-[99999] pointer-events-none rounded-full border-2 backdrop-blur-[1px]"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          borderColor: "#9FE870",
          backgroundColor: isClicking ? "rgba(159, 232, 112, 0.2)" : "rgba(159, 232, 112, 0.05)",
          boxShadow: isHovering 
            ? "0 0 0 1px rgba(0,0,0,0.5), 0 0 20px rgba(159, 232, 112, 0.4)" 
            : "0 0 0 1px rgba(0,0,0,0.5), 0 0 10px rgba(159, 232, 112, 0.2)",
        }}
        animate={{
          height: isClicking ? 48 : (isHovering ? 64 : 32),
          width: isClicking ? 48 : (isHovering ? 64 : 32),
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
      />

      {/* Inner Dot - Snappy Follower */}
      <motion.div
        className="fixed top-0 left-0 z-[99999] pointer-events-none rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: "#9FE870",
          boxShadow: "0 0 0 1px rgba(0,0,0,0.5)",
        }}
        animate={{
          height: isClicking ? 6 : (isHovering ? 8 : 8),
          width: isClicking ? 6 : (isHovering ? 8 : 8),
        }}
      />
    </>
  )

}
