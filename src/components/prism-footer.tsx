"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { Twitter, Github, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const PrismLogo = ({ className }: { className?: string }) => {
  return (
    <div className="flex items-center gap-2">
      <img src="/icon.svg" alt="SignLens Logo" className="w-8 h-8 rounded" />
      <span
        className={cn(
          "font-bebas text-3xl text-white",
          className
        )}
      >
        SignLens
      </span>
    </div>
  );
};

const footerLinks = [
  {
    title: "Product",
    links: [
      { id: 1, title: "Features", url: "#features" },
      { id: 4, title: "Changelog", url: "/changelog" },
    ],
  },
  {
    title: "Company",
    links: [
      { id: 1, title: "About", url: "/about" },
      { id: 2, title: "Blog", url: "/blog" },
      { id: 3, title: "Careers", url: "/careers" },
      { id: 4, title: "Contact", url: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { id: 1, title: "Documentation", url: "/docs" },
      { id: 2, title: "API Reference", url: "/api" },
      { id: 3, title: "Community", url: "/community" },
      { id: 4, title: "Support", url: "/support" },
    ],
  },
  {
    title: "Legal",
    links: [
      { id: 1, title: "Privacy Policy", url: "/privacy" },
      { id: 2, title: "Terms of Service", url: "/terms" },
      { id: 3, title: "Cookie Policy", url: "/cookies" },
      { id: 4, title: "GDPR", url: "/gdpr" },
    ],
  },
];

export function PrismFooter() {
  const [isTablet, setIsTablet] = React.useState(false);
  const [isDesktop, setIsDesktop] = React.useState(false);
  const [is2xl, setIs2xl] = React.useState(false);

  React.useEffect(() => {
    const checkViewport = () => {
      const width = window.innerWidth;
      setIsTablet(width >= 768 && width < 1024);
      setIsDesktop(width >= 1024);
      setIs2xl(width >= 1536);
    };
    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  return (
    <footer id="community" className="w-full relative overflow-hidden bg-black py-12 md:py-24">
      {/* Background Text */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none select-none leading-none z-0">
         <h1 className="font-pixel text-[15vw] md:text-[20vw] font-bold text-white/[0.03] text-center tracking-tighter translate-y-[35%]">
            SignLens
         </h1>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between pb-16 gap-12">
          {/* Company Info */}
          <div className="flex flex-col items-start justify-start gap-y-6 max-w-sm">
            <Link href="/" className="flex items-center">
              <PrismLogo />
            </Link>
            <p className="text-white/60 leading-relaxed">
              SignLens is a browser-based Deaf–hearing communication platform. 
              Anyone can join a call and communicate naturally using sign, speech, or text.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <Link
                href="https://twitter.com/prism"
                className="text-white/40 hover:text-[#bef264] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="https://github.com/signlens"
                className="text-white/40 hover:text-[#bef264] transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="https://linkedin.com/company/signlens"
                className="text-white/40 hover:text-[#bef264] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:hello@signlens.ai"
                className="text-white/40 hover:text-[#bef264] transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-3">
              <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-white/80">
                🔒 SOC 2 Certified
              </div>
              <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-white/80">
                ⚡ 99.9% Uptime
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 md:pl-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {footerLinks.map((column, columnIndex) => (
                <div key={columnIndex} className="flex flex-col gap-4">
                  <h3 className="font-semibold text-white tracking-wider text-sm">{column.title}</h3>
                  <ul className="flex flex-col gap-3">
                    {column.links.map((link) => (
                      <li key={link.id}>
                        <Link
                          href={link.url}
                          className="group inline-flex items-center gap-1 text-sm text-white/60 hover:text-[#bef264] transition-colors"
                        >
                          {link.title}
                          <ChevronRightIcon className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#bef264]" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
            <p>© 2025 SignLens. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-[#bef264] transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-[#bef264] transition-colors">
                Terms
              </Link>
              <Link href="/cookies" className="hover:text-[#bef264] transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}