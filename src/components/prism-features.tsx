"use client";

import * as React from "react";
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
        <h2 className="text-4xl md:text-6xl text-center mb-12 md:mb-24 font-pixel tracking-tight text-white">
          What you'll do
        </h2>
        
        <div className="relative">
          {/* Desktop Crosshair SVG Overlay */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none hidden md:block z-0"
            fill="none"
          >
            {/* Vertical Line Top */}
            <line 
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
            <line 
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
            <line 
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
            <line 
              x1="50%" 
              y1="50%" 
              x2="100%" 
              y2="50%" 
              stroke="white" 
              strokeWidth="2" 
              strokeDasharray="8 8" 
              strokeOpacity="0.3" 
            />
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Item 1: Accessible Meetings */}
            <div>
              <FeatureItem
                icon={
                  <div className="w-16 h-16 rounded-2xl bg-[#60A5FA] flex items-center justify-center">
                     <ListTodo className="w-8 h-8 text-black" />
                  </div>
                }
                title="Host accessible meetings"
                description="with real‑time sign ↔ speech"
              />
            </div>

            <MobileDivider />

            {/* Item 2: Workshops */}
            <div>
              <FeatureItem
                icon={
                  <div className="w-16 h-16 rounded-2xl bg-[#9FE870] flex items-center justify-center">
                    <Code className="w-8 h-8 text-black" />
                  </div>
                }
                title="Run Deaf-inclusive"
                description="workshops and classes"
              />
            </div>

            <MobileDivider />

            {/* Item 3: Hackathons */}
            <div>
              <FeatureItem
                icon={
                  <div className="w-16 h-16 rounded-2xl bg-[#3B82F6] flex items-center justify-center">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                }
                title="Organize inclusive hackathons"
                description="and team projects"
              />
            </div>

            <MobileDivider />

            {/* Item 4: Community */}
            <div>
              <FeatureItem
                icon={
                  <div className="w-16 h-16 rounded-2xl bg-[#C084FC] flex items-center justify-center">
                    <Users className="w-8 h-8 text-black" />
                  </div>
                }
                title="Build an always-accessible"
                description="Deaf–hearing community"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
