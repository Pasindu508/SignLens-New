'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type CookieCategory = 'necessary' | 'functional' | 'analytics' | 'marketing'

export interface CookiePreferences {
  necessary: boolean
  functional: boolean
  analytics: boolean
  marketing: boolean
}

interface CookieConsentState {
  preferences: CookiePreferences
  hasResponded: boolean
  showBanner: boolean
  showSettings: boolean
  setPreference: (category: CookieCategory, value: boolean) => void
  acceptAll: () => void
  acceptNecessary: () => void
  savePreferences: () => void
  openSettings: () => void
  closeSettings: () => void
  closeBanner: () => void
}

const defaultPreferences: CookiePreferences = {
  necessary: true, // Always true
  functional: false,
  analytics: false,
  marketing: false,
}

export const useCookieConsent = create<CookieConsentState>()(
  persist(
    (set) => ({
      preferences: defaultPreferences,
      hasResponded: false,
      showBanner: true,
      showSettings: false,

      setPreference: (category, value) =>
        set((state) => {
          // Necessary cookies can't be disabled
          if (category === 'necessary') return state

          return {
            preferences: {
              ...state.preferences,
              [category]: value,
            },
          }
        }),

      acceptAll: () =>
        set({
          preferences: {
            necessary: true,
            functional: true,
            analytics: true,
            marketing: true,
          },
          hasResponded: true,
          showBanner: false,
          showSettings: false,
        }),

      acceptNecessary: () =>
        set({
          preferences: defaultPreferences,
          hasResponded: true,
          showBanner: false,
          showSettings: false,
        }),

      savePreferences: () =>
        set((state) => ({
          hasResponded: true,
          showBanner: false,
          showSettings: false,
        })),

      openSettings: () => set({ showSettings: true, showBanner: false }),
      closeSettings: () => set({ showSettings: false }),
      closeBanner: () => set({ showBanner: false }),
    }),
    {
      name: 'prism-cookie-consent',
      partialize: (state) => ({
        preferences: state.preferences,
        hasResponded: state.hasResponded,
      }),
    }
  )
)