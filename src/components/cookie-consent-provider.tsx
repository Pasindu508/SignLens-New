'use client'

import React, { useEffect } from 'react'
import { CookieBanner } from './cookie-banner'
import { CookieSettingsModal } from './cookie-settings-modal'
import { useCookieConsent } from '@/lib/cookie-consent-store'

declare global {
  interface Window {
    dataLayer?: any[]
    gtag?: (...args: any[]) => void
  }
}

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  const { preferences, hasResponded } = useCookieConsent()

  // Initialize tracking scripts based on preferences
  useEffect(() => {
    if (!hasResponded) return

    // Initialize dataLayer if it doesn't exist
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || []

      // Push consent update to GTM Consent Mode
      window.dataLayer.push({
        event: 'consent_update',
        consent: {
          analytics_storage: preferences.analytics ? 'granted' : 'denied',
          ad_storage: preferences.marketing ? 'granted' : 'denied',
          functionality_storage: preferences.functional ? 'granted' : 'denied',
          personalization_storage: preferences.functional ? 'granted' : 'denied',
          security_storage: 'granted',
        },
      })

      // Also push a simpler event for debugging/integration
      window.dataLayer.push({
        event: 'cookie_consent_updated',
        analytics_consent: preferences.analytics,
        marketing_consent: preferences.marketing,
        functional_consent: preferences.functional,
      })
    }

    // Google Analytics
    if (preferences.analytics && typeof window !== 'undefined') {
      // Load GA script
      const script = document.createElement('script')
      script.src = `https://www.googletagmanager.com/gtag/js?id=GTM-PRL29Z3V`
      script.async = true
      document.head.appendChild(script)

      window.gtag =
        window.gtag ||
        function (...args: any[]) {
          ;(window as any).dataLayer = (window as any).dataLayer || []
          ;(window as any).dataLayer.push(arguments)
        }
      window.gtag('js', new Date())
      window.gtag('config', 'GTM-PRL29Z3V"')
    }

    // Facebook Pixel
    if (preferences.marketing && typeof window !== 'undefined') {
      // Initialize Facebook Pixel
      // fbq('init', 'YOUR_PIXEL_ID');
      // fbq('track', 'PageView');
    }

    // Add more tracking services as needed
  }, [preferences, hasResponded])

  return (
    <>
      {children}
      <CookieBanner />
      <CookieSettingsModal />
    </>
  )
}