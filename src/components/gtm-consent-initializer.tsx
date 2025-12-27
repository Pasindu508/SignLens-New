'use client'

import { useEffect } from 'react'
import { initializeGTMConsent } from '@/lib/gtm-consent'

export function GTMConsentInitializer() {
  useEffect(() => {
    initializeGTMConsent()
  }, [])
  return null
}