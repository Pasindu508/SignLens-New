"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'
import { motion } from "framer-motion"
import { HelpCircle, Mail } from 'lucide-react'

export function PrismFAQ() {
  const faqItems = [
    {
      id: 'item-1',
      question: 'What is SignLens?',
      answer: 'SignLens is a browser-based platform that enables real-time communication between Deaf and hearing people using sign, speech, and text.',
    },
    {
      id: 'item-2',
      question: 'How does SignLens work?',
      answer: 'In a video room, Deaf users can sign and see accurate text, while hearing users can speak and see an ASL avatar or captions. Text can also be converted to ASL signing.',
    },
    {
      id: 'item-3',
      question: 'Do I need to install any app or hardware?',
      answer: 'No. SignLens runs in a modern web browser. You only need a device with a camera and microphone for video calls.',
    },
    {
      id: 'item-4',
      question: 'Who is SignLens for?',
      answer: 'SignLens is built for schools, workplaces, hospitals, customer support teams, events, and any group that needs accessible Deaf–hearing communication.',
    },
    {
      id: 'item-5',
      question: 'Is my data and video secure?',
      answer: 'Yes. Calls use encrypted WebRTC connections, and we follow strict privacy and security practices. Enterprise plans can enable self-hosting.',
    },
    {
      id: 'item-6',
      question: 'Can I use SignLens on mobile?',
      answer: 'Yes. SignLens works on mobile browsers and can be installed as a PWA for quick access.',
    },
    {
      id: 'item-7',
      question: 'What if a Deaf user prefers typing instead of signing?',
      answer: 'They can type messages, which can be shown as text and optionally rendered as an ASL avatar for the other side.',
    },
    {
      id: 'item-8',
      question: 'How accurate is the ASL recognition and avatar?',
      answer: 'Our latest model targets up to 99%+ recognition accuracy in supported conditions, with continuous improvements from real-world usage.',
    },
    {
      id: 'item-9',
      question: 'Is SignLens a replacement for interpreters?',
      answer: 'SignLens can reduce dependency on interpreters for many everyday interactions, but it may not fully replace certified interpreters in all legal or medical contexts.',
    },
    {
      id: 'item-10',
      question: 'How much does SignLens cost?',
      answer: 'We offer a free tier for basic use, with paid plans for higher accuracy models, group calls, and enterprise features. Pricing details are on our Plans page.',
    },
  ]

  return (
    <section id="faq" className="py-16 md:py-32 relative bg-black">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-6xl font-pixel tracking-tight text-white mb-6">
              FAQs
            </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item) => (
            <AccordionItem 
                key={item.id} 
                value={item.id}
                className="!border !border-white/30 rounded-2xl px-4 md:px-8 data-[state=open]:bg-white/5 transition-colors"
            >
              <AccordionTrigger className="group text-2xl font-medium py-8 hover:text-white hover:no-underline [&>svg]:hidden data-[state=open]:text-[#bef264]">
                <span className="text-left">{item.question}</span>
                <span className="shrink-0 text-white/70 ml-6 group-data-[state=open]:text-[#bef264]">
                    <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-200">
                        <rect x="2.75" y="7" width="9.5" height="1" rx="0.5" fill="currentColor"/>
                        <rect x="7" y="2.75" width="1" height="9.5" rx="0.5" fill="currentColor" className="origin-center transition-transform duration-200 group-data-[state=open]:rotate-90"/>
                    </svg>
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-white/70 text-lg pb-8">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

// Animated text reveal component
export const BlurredStagger = ({ text }: { text: string }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.008,
      },
    },
  }

  const letterAnimation = {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
    },
    show: {
      opacity: 1,
      filter: "blur(0px)",
    },
  }

  return (
    <motion.p
      variants={container}
      initial="hidden"
      animate="show"
      className="text-base leading-relaxed text-white/80"
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={letterAnimation}
          transition={{ duration: 0.3 }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.p>
  )
}