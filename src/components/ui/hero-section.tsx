'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

export function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="relative min-h-screen w-full bg-black text-white flex items-center justify-center p-4 pt-20 md:pt-24 pb-12">
                
                {/* Hero Card */}
                <div className="relative w-full max-w-[88rem] rounded-[2.5rem] overflow-hidden shadow-[0_0_140px_-20px_rgba(159,232,112,0.3)] bg-black">
                    {/* Grid Background */}
                    <div 
                        className="absolute inset-0 z-0 opacity-40"
                        style={{
                            backgroundImage: `linear-gradient(to right, #444 1px, transparent 1px),
                                            linear-gradient(to bottom, #444 1px, transparent 1px)`,
                            backgroundSize: '40px 40px',
                            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)'
                        }}
                    />

                    <section className="relative z-10 flex flex-col items-center justify-center px-4 py-20 md:py-32">
                        <div className="mx-auto max-w-5xl text-center">
                        <h1 className="font-pixel text-4xl md:text-6xl lg:text-7xl tracking-wider text-white mb-8 uppercase leading-tight">
                            SIGN → SPEAK → UNDERSTAND. ZERO BARRIERS.
                        </h1>
                        
                        <p className="mx-auto max-w-4xl text-lg md:text-xl text-gray-400 mb-12 leading-relaxed font-sans">
                            99.98% ASL accuracy • 45 FPS real-time • No apps • No interpreters • No barriers.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Button
                                asChild
                                size="lg"
                                className="h-14 px-8 text-lg font-bold bg-[#9FE870] text-black hover:bg-[#8CD660] rounded-md transition-colors uppercase tracking-wide"
                            >
                                <Link href="/apply">
                                    Apply Now
                                </Link>
                            </Button>
                            <Button
                                asChild
                                size="lg"
                                className="h-14 px-8 text-lg font-bold bg-transparent border-2 border-[#9FE870] text-[#9FE870] hover:bg-[#9FE870]/10 rounded-md transition-colors uppercase tracking-wide"
                            >
                                <Link href="#learn-more">
                                    Learn More
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>
                </div>
            </main>
        </>
    )
}

const menuItems = [
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Our Crew', href: '#our-crew' },
    { name: 'Resources', href: '#faq' },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    return (
        <header className="fixed top-0 z-50 w-full bg-[#0A0A0A]/80 backdrop-blur-md">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <div className="flex items-center gap-12">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <img src="/icon.svg" alt="SignLens Logo" className="w-8 h-8 rounded" />
                        <span className="font-bebas text-3xl text-white">SIGNLENS</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:block">
                        <ul className="flex gap-8 text-sm font-medium text-gray-300">
                            {menuItems.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="hover:text-[#9FE870] transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center gap-4">
                        <Link 
                            href="/demo" 
                            className="text-sm font-medium px-4 py-2 border border-white/30 rounded-md text-white hover:border-[#9FE870] hover:text-[#9FE870] transition-colors"
                        >
                            Request Demo
                        </Link>
                        <Link 
                            href="/signup" 
                            className="text-sm font-medium px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition-colors"
                        >
                            Create a free account
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none"
                        onClick={() => setMenuState(!menuState)}
                        aria-label={menuState ? "Close menu" : "Open menu"}
                    >
                        <motion.span
                            className="w-6 h-0.5 bg-white rounded-full origin-center"
                            animate={menuState ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        />
                        <motion.span
                            className="w-6 h-0.5 bg-white rounded-full origin-center"
                            animate={menuState ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2 }}
                        />
                        <motion.span
                            className="w-6 h-0.5 bg-white rounded-full origin-center"
                            animate={menuState ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {menuState && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ 
                            opacity: 1, 
                            y: 0,
                            transition: { 
                                duration: 0.3,
                                ease: "easeOut",
                                staggerChildren: 0.1
                            }
                        }}
                        exit={{ 
                            opacity: 0, 
                            y: -20,
                            transition: { duration: 0.2, ease: "easeIn" }
                        }}
                        className="lg:hidden absolute top-full left-0 w-full bg-black border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl"
                    >
                        {menuItems.map((item) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Link 
                                    href={item.href}
                                    className="block text-lg font-medium text-gray-300 hover:text-[#9FE870] transition-colors"
                                    onClick={() => setMenuState(false)}
                                >
                                    {item.name}
                                </Link>
                            </motion.div>
                        ))}
                        <motion.div 
                            className="h-px bg-white/10 my-2" 
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.4 }}
                        />
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col gap-4"
                        >
                            <Link href="/demo" className="text-lg font-medium text-white hover:text-[#9FE870] transition-colors">Request Demo</Link>
                            <Link href="/signup" className="text-lg font-medium text-[#9FE870] hover:text-[#8CD660] transition-colors">Create Account</Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}

const Logo = ({ className }: { className?: string }) => {
    return (
        <div className={cn("flex items-center gap-2", className)}>
            <div className="relative h-8 w-8">
                 <Image
                    src="/providers/logo.svg"
                    alt="SignLens Logo"
                    fill
                    className="object-contain"
                 />
            </div>
            <span className="font-bold text-lg tracking-tight">SignLens</span>
        </div>
    )
}
