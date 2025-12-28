import type { Metadata, Viewport } from "next";
import { CookieConsentProvider } from "@/components/cookie-consent-provider";
import GoogleTagManager, { GoogleTagManagerNoScript } from "@/components/google-tag-manager";
import { GTMConsentInitializer } from "@/components/gtm-consent-initializer";
import { VoiceChat } from "@/components/ui/audio-chat";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { Geist, Geist_Mono, VT323, Bebas_Neue } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pixelFont = VT323({
  weight: "400",
  variable: "--font-pixel",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SignLens",
  description: "SignLens is an all-in-one AI platform giving you seamless access to 300+ language models—including GPT-4, Claude, Gemini, and open-source leaders—all through one unified chat and API. With SignLens, you save up to 75% compared to other AI tools, unlock powerful multi-model workflows, and enjoy a transparent, developer-friendly experience. Effortlessly switch between models, compare responses, and scale your AI solutions with blazing speed and zero vendor lock-in.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pixelFont.variable} ${bebasNeue.variable} antialiased select-none`}
      >
        {/* Initialize default GTM consent (denied) before any tags */}
        <GTMConsentInitializer />
        {/* noscript fallback for GTM */}
        <GoogleTagManagerNoScript />
        <CookieConsentProvider>
          {/* Conditionally loads GTM only after consent */}
          <GoogleTagManager />
          {children}
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
            <VoiceChat />
          </div>
          <CustomCursor />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
