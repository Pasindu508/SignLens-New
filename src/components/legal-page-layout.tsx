"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight, Shield, Scale, Cookie, Lock } from "lucide-react"
import { PrismFooter } from "@/components/prism-footer"

interface LegalPageLayoutProps {
  title: string
  description: string
  icon: React.ReactNode
  lastUpdated: string
  children: React.ReactNode
}

export function LegalPageLayout({
  title,
  description,
  icon,
  lastUpdated,
  children,
}: LegalPageLayoutProps) {
  const legalPages = [
    { name: "Privacy Policy", href: "/privacy", icon: <Shield className="w-4 h-4" /> },
    { name: "Terms of Service", href: "/terms", icon: <Scale className="w-4 h-4" /> },
    { name: "Cookie Policy", href: "/cookies", icon: <Cookie className="w-4 h-4" /> },
    { name: "GDPR", href: "/gdpr", icon: <Lock className="w-4 h-4" /> },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6"
          >
            {icon}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center gap-2 text-sm text-muted-foreground"
          >
            <span>Last updated:</span>
            <span className="font-medium">{lastUpdated}</span>
          </motion.div>
        </div>
      </section>

      {/* Navigation Breadcrumb */}
      <section className="py-4 px-6 bg-muted/30 border-b">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <span className="text-foreground font-medium">{title}</span>
          </nav>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 px-6 bg-muted/20 border-b">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-semibold text-foreground mb-4">Legal Documents</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {legalPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="flex items-center gap-3 p-4 rounded-lg border bg-background hover:bg-muted/50 transition-colors"
              >
                <div className="text-primary">{page.icon}</div>
                <span className="font-medium text-foreground">{page.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <motion.main
        className="max-w-4xl mx-auto px-6 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {children}
      </motion.main>

      <PrismFooter />
    </div>
  )
}

// Reusable section component
interface LegalSectionProps {
  title: string
  children: React.ReactNode
}

export function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="mb-12 scroll-mt-20"
    >
      <h2 className="text-2xl font-bold text-foreground mb-4">{title}</h2>
      <div className="text-muted-foreground space-y-4">{children}</div>
    </motion.section>
  )
}
