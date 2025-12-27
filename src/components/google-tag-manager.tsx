'use client'

import { useEffect } from 'react'
import Script from 'next/script'
import { useCookieConsent } from '@/lib/cookie-consent-store'

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-PRL29Z3V'

export default function GoogleTagManager() {
  const { preferences, hasResponded } = useCookieConsent()

  // Only load GTM if user has consented to analytics or marketing
  const shouldLoadGTM = hasResponded && (preferences.analytics || preferences.marketing)

  useEffect(() => {
    if (shouldLoadGTM && typeof window !== 'undefined') {
      // Push consent state to dataLayer
      ;(window as any).dataLayer = (window as any).dataLayer || []
      ;(window as any).dataLayer.push({
        event: 'consent_update',
        analytics_consent: preferences.analytics ? 'granted' : 'denied',
        marketing_consent: preferences.marketing ? 'granted' : 'denied',
      })
    }
  }, [shouldLoadGTM, preferences])

  if (!shouldLoadGTM) {
    return null
  }

  return (
    <Script
      id="gtm-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `,
      }}
    />
  )
}

export function GoogleTagManagerNoScript() {
  const { preferences, hasResponded } = useCookieConsent()
  const shouldLoadGTM = hasResponded && (preferences.analytics || preferences.marketing)

  if (!shouldLoadGTM) {
    return null
  }

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  )
}