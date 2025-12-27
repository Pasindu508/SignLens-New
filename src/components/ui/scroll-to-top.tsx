"use client"

import React, { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ScrollToTopProps {
  /** Pixels scrolled before showing the button */
  threshold?: number
  /** Optional className to extend styles */
  className?: string
}

export const ScrollToTop: React.FC<ScrollToTopProps> = ({ threshold = 400, className }) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > threshold)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [threshold])

  const handleClick = () => {
    try {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } catch {
      window.scrollTo(0, 0)
    }
  }

  return (
    <div
      aria-hidden
      className={`fixed bottom-6 right-6 lg:bottom-8 lg:right-8 z-50 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
      } ${className ?? ""}`}
    >
      <Button
        aria-label="Scroll to top"
        title="Scroll to top"
        onClick={handleClick}
        size="icon"
        className="bg-white text-black hover:bg-white/90 shadow-lg border border-white/20"
      >
        <ArrowUp className="w-5 h-5" />
      </Button>
    </div>
  )
}