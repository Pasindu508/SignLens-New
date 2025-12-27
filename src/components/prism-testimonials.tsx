"use client";
import React from "react";
import { motion } from "framer-motion";
import { TestimonialsColumn } from "./ui/testimonials-columns";

type Testimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};

const columnOne: Testimonial[] = [
  {
    text:
      "SignLens helped me ship our AI assistant in days. The bento features are delightful and the docs are fantastic.",
    image:
      "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=200&auto=format&fit=crop",
    name: "Alex Carter",
    role: "Product Lead, Serif",
  },
  {
    text:
      "The multi-provider abstraction is clean. Swapping models is finally painless.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    name: "Priya Nair",
    role: "Founder, Lumen",
  },
  {
    text:
      "Framer Motion animations felt buttery smooth out of the box.",
    image:
      "https://images.unsplash.com/photo-1543132220-5d4cd4d4f71b?q=80&w=200&auto=format&fit=crop",
    name: "Marco Silva",
    role: "Frontend Engineer, Wave",
  },
];

const columnTwo: Testimonial[] = [
  {
    text:
      "Deep Research removed hours of manual digging for my team.",
    image:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop",
    name: "Sarah Nguyen",
    role: "Head of Ops, Brook",
  },
  {
    text:
      "Global access and provider fallbacks saved our launch in APAC.",
    image:
      "https://images.unsplash.com/photo-1549203851-2f8b36e383fd?q=80&w=200&auto=format&fit=crop",
    name: "David Kim",
    role: "CTO, Meridian",
  },
  {
    text:
      "Pricing transparency and usage controls are spot on.",
    image:
      "https://images.unsplash.com/photo-1549074771-8e4490fbf0ab?q=80&w=200&auto=format&fit=crop",
    name: "Hannah Lee",
    role: "Data PM, Flux",
  },
];

const columnThree: Testimonial[] = [
  {
    text:
      "The bento grid is a perfect showcase section. My only regret is not adding it sooner.",
    image:
      "https://images.unsplash.com/photo-1542157585-ef20bfcce7f1?q=80&w=200&auto=format&fit=crop",
    name: "Chris Young",
    role: "Design Lead, Folio",
  },
  {
    text:
      "Switching between OpenAI and local models took minutes—no rewrites!",
    image:
      "https://images.unsplash.com/photo-1544005318-5a032ed9c540?q=80&w=200&auto=format&fit=crop",
    name: "Mina Park",
    role: "ML Engineer, Delta",
  },
  {
    text:
      "Docs and starter templates feel premium. A+ developer experience.",
    image:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=200&auto=format&fit=crop",
    name: "Omar Farouk",
    role: "Indie Hacker",
  },
];

export function PrismTestimonials() {
  return (
    <section className="w-full bg-black">
      <div className="container mx-auto px-4 py-20">
        <div className="flex items-center justify-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl text-center mb-24 font-pixel tracking-tight text-white leading-tight max-w-4xl"
          >
            Loved by Developers
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
          className="mx-auto mt-4 max-w-2xl text-center text-white/70"
        >
          Testimonials from folks using Prism to ship delightful AI experiences.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          <TestimonialsColumn testimonials={columnOne} className="hidden sm:block" duration={16} pauseOnHover={false} />
          <TestimonialsColumn testimonials={columnTwo} duration={14} pauseOnHover={false} />
          <TestimonialsColumn testimonials={columnThree} className="hidden lg:block" duration={18} pauseOnHover={false} />
        </div>
      </div>
    </section>
  );
}