"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  ListTodo,
  Code,
  Lightbulb,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureItem = ({ icon, title, description, className }: FeatureItemProps) => (
  <div className={cn("flex flex-col items-center justify-center text-center p-12 h-full w-full", className)}>
    <div className="mb-6">
      {icon}
    </div>
    <h3 className="text-xl text-white mb-2 font-medium">{title}</h3>
    <p className="text-white/80 text-lg">{description}</p>
  </div>
);

// Mobile horizontal divider
const MobileDivider = () => (
  <div className="w-full h-[2px] md:hidden relative">
    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
      <line 
        x1="0" 
        y1="1" 
        x2="100%" 
        y2="1" 
        stroke="white" 
        strokeWidth="2" 
        strokeDasharray="8 8" 
        strokeOpacity="0.3" 
      />
    </svg>
  </div>
);

export function PrismFeatures() {
  return (
    <section id="features" className="w-full py-16 md:py-32 bg-black text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl text-center mb-12 md:mb-24 font-pixel tracking-tight text-white"
        >
          What you'll do
        </motion.h2>
        
        <div className="relative">
          {/* Desktop Crosshair SVG Overlay */}
          <motion.svg 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full pointer-events-none hidden md:block z-0"
            fill="none"
          >
            {/* Vertical Line Top */}
            <motion.line 
              initial={{ y2: "50%" }}
              whileInView={{ y2: "0%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              x1="50%" 
              y1="50%" 
              x2="50%" 
              y2="0" 
              stroke="white" 
              strokeWidth="2" 
              strokeDasharray="8 8" 
              strokeOpacity="0.3" 
            />
            {/* Vertical Line Bottom */}
            <motion.line 
              initial={{ y2: "50%" }}
              whileInView={{ y2: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              x1="50%" 
              y1="50%" 
              x2="50%" 
              y2="100%" 
              stroke="white" 
              strokeWidth="2" 
              strokeDasharray="8 8" 
              strokeOpacity="0.3" 
            />
            {/* Horizontal Line Left */}
            <motion.line 
              initial={{ x2: "50%" }}
              whileInView={{ x2: "0%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              x1="50%" 
              y1="50%" 
              x2="0" 
              y2="50%" 
              stroke="white" 
              strokeWidth="2" 
              strokeDasharray="8 8" 
              strokeOpacity="0.3" 
            />
            {/* Horizontal Line Right */}
            <motion.line 
              initial={{ x2: "50%" }}
              whileInView={{ x2: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              x1="50%" 
              y1="50%" 
              x2="100%" 
              y2="50%" 
              stroke="white" 
              strokeWidth="2" 
              strokeDasharray="8 8" 
              strokeOpacity="0.3" 
            />
          </motion.svg>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Item 1: Accessible Meetings */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <FeatureItem
                icon={
                  <div className="w-16 h-16 rounded-2xl bg-[#60A5FA] flex items-center justify-center">
                     <ListTodo className="w-8 h-8 text-black" />
                  </div>
                }
                title="Host accessible meetings"
                description="with real‑time sign ↔ speech"
              />
            </motion.div>

            <MobileDivider />

            {/* Item 2: Workshops */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <FeatureItem
                icon={
                  <div className="w-16 h-16 rounded-2xl bg-[#9FE870] flex items-center justify-center">
                    <Code className="w-8 h-8 text-black" />
                  </div>
                }
                title="Run Deaf-inclusive"
                description="workshops and classes"
              />
            </motion.div>

            <MobileDivider />

            {/* Item 3: Hackathons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <FeatureItem
                icon={
                  <div className="w-16 h-16 rounded-2xl bg-[#3B82F6] flex items-center justify-center">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                }
                title="Organize inclusive hackathons"
                description="and team projects"
              />
            </motion.div>

            <MobileDivider />

            {/* Item 4: Community */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <FeatureItem
                icon={
                  <div className="w-16 h-16 rounded-2xl bg-[#C084FC] flex items-center justify-center">
                    <Users className="w-8 h-8 text-black" />
                  </div>
                }
                title="Build an always-accessible"
                description="Deaf–hearing community"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
