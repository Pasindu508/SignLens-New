"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

const crewMembers = [
  {
    name: "Pasindu Matheesha",
    role: "Developer",
    image: "/Pasindu_Matheesha.jpg",
  },
  {
    name: "Risinu Imandiv",
    role: "Developer",
    image: "",
  },
  {
    name: "Oshada Yomal",
    role: "Developer",
    image: "",
  },
  {
    name: "Lasitha Sndeepa",
    role: "Developer",
    image: "",
  },
];

export function OurCrew() {
  return (
    <section id="our-crew" className="relative w-full bg-black py-24 overflow-hidden">
        {/* Background Grid - consistent with other sections */}
        <div 
            className="absolute inset-0 z-0 opacity-20 pointer-events-none"
            style={{
                backgroundImage: `linear-gradient(to right, #333 1px, transparent 1px),
                                linear-gradient(to bottom, #333 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
                maskImage: 'radial-gradient(ellipse at center, black 50%, transparent 100%)'
            }}
        />

      <div className="relative z-10 w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl text-center mb-24 font-pixel tracking-tight text-white"
        >
          Meet Our Crew
        </motion.h2>

        <InfiniteSlider gap={32} duration={70} pauseOnHover>
          {[...crewMembers, ...crewMembers].map((member, index) => (
            <div
              key={index}
              className="group relative flex w-[300px] md:w-[400px] flex-col overflow-hidden rounded-[2.5rem] bg-white p-4 md:p-6 transition-transform hover:shadow-xl"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-black mb-6">
                 <div className="absolute inset-0 flex items-center justify-center text-white/20">
                    {/* Fallback placeholder if no image */}
                    <svg
                        className="h-24 w-24"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                    </svg>
                 </div>
                 {/* 
                    Using a gray filter to match the grayscale look in the image.
                    In a real app, we'd use Next.js Image component with valid src.
                 */}
                 {member.image && (
                   <Image 
                       src={member.image} 
                       alt={member.name}
                       fill
                       draggable={false}
                       className="object-cover object-[50%_20%] grayscale transition-all duration-300 group-hover:grayscale-0 pointer-events-none select-none"
                    />
                 )}
              </div>

              {/* Text Content */}
              <div className="flex flex-col items-center text-center">
                <h3 className="text-xl font-medium text-black">
                  {member.name}
                </h3>
                <p className="mt-2 text-base font-bold text-black">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </section>
  );
}
