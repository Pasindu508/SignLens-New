"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function StickyNoteSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative w-full overflow-hidden bg-black py-12 md:py-24">
      
      <div className="relative z-10 container mx-auto px-4 text-center mb-12">
        <h2 className="text-4xl md:text-6xl mb-8 font-pixel tracking-tight text-white">
          About the platform
        </h2>
        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-sans leading-relaxed">
          SignLens is a browser-based Deaf–hearing communication platform. Anyone can join a call and communicate naturally using sign, speech, or text—with real-time translation in both directions.
        </p>
      </div>

      <div ref={containerRef} className="container relative mx-auto flex min-h-[800px] max-w-6xl flex-col items-center gap-12 px-4 md:block md:min-h-[1200px]">
        {/* Background Grid Lines */}
        <div className="absolute inset-0 pointer-events-none opacity-20" 
          style={{
            backgroundImage: "linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "100% 40px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)"
          }}
        />
        
        {/* Connection Lines (Desktop SVG) */}
        <svg className="absolute inset-0 h-full w-full pointer-events-none hidden md:block" viewBox="0 0 1000 1200" fill="none" preserveAspectRatio="none">
          {/* Line from Card 1 to Card 2 */}
          <path
            d="M 350 150 C 550 150, 550 400, 700 400"
            stroke="white"
            strokeWidth="2"
            strokeDasharray="8 8"
            strokeOpacity="0.3"
          />
          {/* Line from Card 2 to Card 3 */}
          <path
            d="M 700 450 C 550 450, 550 800, 450 800"
            stroke="white"
            strokeWidth="2"
            strokeDasharray="8 8"
            strokeOpacity="0.3"
          />
        </svg>

        {/* Connection Lines (Mobile SVG) */}
        <svg className="absolute inset-0 h-full w-full pointer-events-none md:hidden" viewBox="0 0 400 1200" fill="none" preserveAspectRatio="none">
           {/* Line from Card 1 to Card 2 */}
           <path
            d="M 200 320 C 200 370, 200 370, 200 420"
            stroke="white"
            strokeWidth="2"
            strokeDasharray="8 8"
            strokeOpacity="0.3"
          />
          {/* Line from Card 2 to Card 3 */}
          <path
            d="M 200 750 C 200 800, 200 800, 200 850"
            stroke="white"
            strokeWidth="2"
            strokeDasharray="8 8"
            strokeOpacity="0.3"
          />
        </svg>

        {/* Card 1: Access & Inclusion (Green) */}
        <div className="relative z-10 md:absolute md:left-[20%] md:top-0 md:translate-x-0">
          <StickyCard 
            color="bg-[#bef264]" 
            pinColor="bg-[#a3e635]"
            title="Access & Inclusion"
            rotateAngle={-6}
            triggerAnimation={isInView}
          >
            Make every meeting, class, and event accessible. SignLens gives Deaf and hearing users equal participation with instant ASL ↔ speech ↔ text.
          </StickyCard>
        </div>

        {/* Card 2: Tools & Features (Blue) */}
        <div className="relative z-20 md:absolute md:left-[60%] md:top-[300px] md:translate-x-0">
          <StickyCard 
            color="bg-[#3b82f6]" 
            pinColor="bg-[#2563eb]"
            title="Tools & Features"
            rotateAngle={3}
            textColor="text-white"
            triggerAnimation={isInView}
            swingDirection={-1}
          >
            Host live video rooms, generate ASL avatars from text or speech, and use real-time captions—all from a single browser tab.
          </StickyCard>
        </div>

        {/* Card 3: Impact & Growth (Purple) */}
        <div className="relative z-30 md:absolute md:left-[30%] md:top-[700px] md:translate-x-0">
          <StickyCard 
            color="bg-[#a855f7]" 
            pinColor="bg-[#9333ea]"
            title="Impact & Growth"
            rotateAngle={-3}
            textColor="text-white"
            triggerAnimation={isInView}
          >
            Build an inclusive community, reduce interpreter costs, and showcase your commitment to accessibility and future-ready tech.
          </StickyCard>
        </div>

      </div>
    </section>
  );
}

interface StickyCardProps {
  children: React.ReactNode;
  title: string;
  color: string;
  pinColor: string;
  rotateAngle?: number;
  textColor?: string;
  triggerAnimation?: boolean;
  swingDirection?: 1 | -1;
}

function StickyCard({ 
  children, 
  title, 
  color, 
  pinColor, 
  rotateAngle = 0, 
  textColor = "text-black", 
  triggerAnimation = false,
  swingDirection = 1 
}: StickyCardProps) {
  return (
    <div className="relative w-[280px] sm:w-[320px] transition-transform hover:scale-105 hover:z-50">
      {/* Pin - Fixed to the container (not rotating with the shake) */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
        <div className={`h-6 w-6 rounded-full ${pinColor} shadow-md border-2 border-white/50 ring-1 ring-black/10`} />
        <div className="absolute top-1 left-1 h-2 w-2 rounded-full bg-white/40" />
      </div>

      {/* Animated Card Body - Swings from the pin */}
      <motion.div 
        initial={{ rotate: rotateAngle }}
        animate={triggerAnimation ? { 
          rotate: [
            rotateAngle, 
            rotateAngle - (10 * swingDirection), 
            rotateAngle + (10 * swingDirection), 
            rotateAngle - (5 * swingDirection), 
            rotateAngle + (5 * swingDirection), 
            rotateAngle - (2 * swingDirection), 
            rotateAngle + (2 * swingDirection), 
            rotateAngle
          ] 
        } : { rotate: rotateAngle }}
        transition={{ 
          duration: 6.0, 
          ease: "easeInOut",
          delay: 0.2
        }}
        style={{ 
          transformOrigin: "top center",
          willChange: "transform",
          backfaceVisibility: "hidden",
          WebkitFontSmoothing: "subpixel-antialiased"
        }}
        className={`rounded-[2.5rem] bg-white pt-16 px-4 pb-4 shadow-2xl`}
      >
        {/* Inner Color Card */}
        <div className={`h-full w-full rounded-[1.5rem] ${color} p-6 flex flex-col gap-3 min-h-[300px] shadow-sm`}>
          <h3 className={`font-pixel text-5xl font-normal leading-[0.9] tracking-tighter ${textColor}`}>
            {title}
          </h3>
          <p className={`text-base leading-snug ${textColor} font-sans font-medium opacity-90`}>
            {children}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
