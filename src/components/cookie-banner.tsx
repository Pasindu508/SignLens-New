'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, Settings } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCookieConsent } from '@/lib/cookie-consent-store'

export function CookieBanner() {
  const { showBanner, hasResponded, acceptAll, acceptNecessary, openSettings } =
    useCookieConsent()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Don't render on server or if user has already responded
  if (!mounted || hasResponded) return null

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 15 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-6xl mx-auto">
            <div className="bg-card border border-border rounded-2xl shadow-2xl backdrop-blur-xl">
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                  {/* Icon and Content */}
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Cookie className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          We value your privacy
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          We use cookies to enhance your browsing experience, serve personalized content,
                          and analyze our traffic. By clicking "Accept All", you consent to our use of cookies{' '}
                          <Link href="/cookies" className="text-primary hover:underline">
                            Learn more
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                    <Button
                      variant="outline"
                      onClick={openSettings}
                      className="border-border hover:bg-accent w-full sm:w-auto"
                    >
                      <Settings className="w-4 h-4 mr-2" />
                      Customize
                    </Button>
                    <Button
                      variant="outline"
                      onClick={acceptNecessary}
                      className="border-border hover:bg-accent w-full sm:w-auto"
                    >
                      Reject All
                    </Button>
                    <Button
                      onClick={acceptAll}
                      className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto"
                    >
                      Accept All
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}