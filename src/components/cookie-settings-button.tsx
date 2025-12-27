'use client'

import { Settings } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCookieConsent } from '@/lib/cookie-consent-store'

export function CookieSettingsButton() {
  const { openSettings } = useCookieConsent()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={openSettings}
      className="text-muted-foreground hover:text-foreground"
    >
      <Settings className="w-4 h-4 mr-2" />
      Cookie Settings
    </Button>
  )
}