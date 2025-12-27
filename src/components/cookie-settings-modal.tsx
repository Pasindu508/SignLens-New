'use client'

import React from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Shield, Activity, Target, Wrench, Cookie } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { useCookieConsent, type CookieCategory } from '@/lib/cookie-consent-store'

const cookieCategories = [
  {
    id: 'necessary' as CookieCategory,
    name: 'Necessary Cookies',
    description:
      'These cookies are essential for the website to function properly. They enable basic functions like page navigation and access to secure areas.',
    icon: Shield,
    required: true,
    examples: ['Authentication', 'Security', 'Session management'],
  },
  {
    id: 'functional' as CookieCategory,
    name: 'Functional Cookies',
    description:
      'These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.',
    icon: Wrench,
    required: false,
    examples: ['Language preferences', 'Theme settings', 'User preferences'],
  },
  {
    id: 'analytics' as CookieCategory,
    name: 'Analytics Cookies',
    description:
      'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.',
    icon: Activity,
    required: false,
    examples: ['Google Analytics', 'Usage statistics', 'Performance monitoring'],
  },
  {
    id: 'marketing' as CookieCategory,
    name: 'Marketing Cookies',
    description:
      'These cookies are used to track visitors across websites to display relevant advertisements and encourage user engagement.',
    icon: Target,
    required: false,
    examples: ['Advertising', 'Social media', 'Retargeting'],
  },
]

export function CookieSettingsModal() {
  const { showSettings, preferences, setPreference, savePreferences, acceptAll, closeSettings } =
    useCookieConsent()

  return (
    <AnimatePresence>
      {showSettings && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeSettings}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-3xl md:w-full z-50"
          >
            <div className="bg-background border border-border rounded-2xl shadow-2xl flex flex-col max-h-[90vh]">
              {/* Header */}
              <div className="p-6 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Cookie className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground">Cookie Preferences</h2>
                    <p className="text-sm text-muted-foreground">Manage your cookie settings</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" onClick={closeSettings} className="hover:bg-accent">
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="space-y-6">
                  <p className="text-sm text-muted-foreground">
                    We use cookies to improve your experience on our site. You can choose which types
                    of cookies to allow. Necessary cookies cannot be disabled as they are required for
                    the website to function properly.{' '}
                    <Link href="/cookies" className="text-primary hover:underline">
                      Read our Cookie Policy
                    </Link>
                  </p>

                  {/* Cookie Categories */}
                  <div className="space-y-4">
                    {cookieCategories.map((category) => {
                      const Icon = category.icon
                      const isEnabled = preferences[category.id]

                      return (
                        <motion.div
                          key={category.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-4 rounded-xl border border-border bg-card hover:bg-accent/50 transition-colors"
                        >
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Icon className="w-5 h-5 text-primary" />
                            </div>

                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-4 mb-2">
                                <div>
                                  <h3 className="font-semibold text-foreground flex items-center gap-2">
                                    {category.name}
                                    {category.required && (
                                      <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full">
                                        Required
                                      </span>
                                    )}
                                  </h3>
                                </div>
                                <Switch
                                  checked={isEnabled}
                                  onCheckedChange={(checked) => setPreference(category.id, checked)}
                                  disabled={category.required}
                                  className="flex-shrink-0"
                                />
                              </div>

                              <p className="text-sm text-muted-foreground mb-3">{category.description}</p>

                              <div className="flex flex-wrap gap-2">
                                {category.examples.map((example) => (
                                  <span
                                    key={example}
                                    className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground"
                                  >
                                    {example}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-border flex flex-col sm:flex-row gap-3 justify-end">
                <Button variant="outline" onClick={acceptAll} className="border-border hover:bg-accent w-full sm:w-auto">
                  Accept All
                </Button>
                <Button onClick={savePreferences} className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto">
                  Save Preferences
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}