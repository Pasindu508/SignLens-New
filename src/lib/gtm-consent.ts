'use client'

declare global {
  interface Window {
    dataLayer?: any[]
  }
}

// Initialize GTM with default consent state (before user makes choice)
export function initializeGTMConsent() {
  if (typeof window === 'undefined') return

  window.dataLayer = window.dataLayer || []

  // Set default consent to denied
  window.dataLayer.push({
    event: 'consent_default',
    consent: {
      ad_storage: 'denied',
      analytics_storage: 'denied',
      functionality_storage: 'denied',
      personalization_storage: 'denied',
      security_storage: 'granted', // Always granted
      wait_for_update: 500,
    },
  })
}

// Update consent based on user preferences
export function updateGTMConsent(preferences: {
  analytics: boolean
  marketing: boolean
  functional: boolean
}) {
  if (typeof window === 'undefined') return

  window.dataLayer = window.dataLayer || []

  window.dataLayer.push({
    event: 'consent_update',
    consent: {
      ad_storage: preferences.marketing ? 'granted' : 'denied',
      analytics_storage: preferences.analytics ? 'granted' : 'denied',
      functionality_storage: preferences.functional ? 'granted' : 'denied',
      personalization_storage: preferences.functional ? 'granted' : 'denied',
      security_storage: 'granted',
    },
  })
}