'use client'

import { motion } from 'framer-motion'
import { Cookie } from 'lucide-react'
import { LegalPageLayout, LegalSection } from '@/components/legal-page-layout'

export default function CookiePage() {
  return (
    <LegalPageLayout
      title="Cookie Policy"
      description="How we use cookies and similar tracking technologies"
      icon={<Cookie className="w-6 h-6 text-primary" />}
      lastUpdated="November 12, 2024"
    >
      <LegalSection title="1. What Are Cookies?">
        <p>
          Cookies are small pieces of data stored on your device (computer or mobile device) that contain 
          information about your interaction with websites. They are widely used in order to make websites work, 
          or work more efficiently, as well as to provide information to the owners of the site.
        </p>
      </LegalSection>

      <LegalSection title="2. How We Use Cookies">
        <h3 className="font-semibold text-foreground mt-4 mb-2">2.1 Strictly Necessary Cookies</h3>
        <p className="ml-4">
          These cookies are essential for the functionality of our Service. Without them, you would not be able 
          to use basic features such as logging in or navigating our website.
        </p>

        <h3 className="font-semibold text-foreground mt-4 mb-2">2.2 Analytical/Performance Cookies</h3>
        <p className="ml-4">
          These cookies allow us to recognize and count the number of visitors and to see how visitors move around 
          our website. This helps us improve the way our website works, for example, by ensuring that users are 
          finding what they are looking for easily.
        </p>

        <h3 className="font-semibold text-foreground mt-4 mb-2">2.3 Functionality Cookies</h3>
        <p className="ml-4">
          These cookies are used to recognize you when you return to our website. This enables us to personalize 
          our content for you, greet you by name, and remember your preferences (for example, your choice of language 
          or region).
        </p>

        <h3 className="font-semibold text-foreground mt-4 mb-2">2.4 Targeting Cookies</h3>
        <p className="ml-4">
          These cookies record your visit to our website, the pages you have visited, and the links you have followed. 
          We will use this information to make our website and the advertising displayed on it more relevant to your interests.
        </p>
      </LegalSection>

      <LegalSection title="3. Types of Cookies We Use">
        <div className="space-y-4 mt-4">
          <div className="p-4 rounded-lg border border-border bg-card">
            <h4 className="font-semibold text-foreground">Session Cookies</h4>
            <p className="text-sm text-muted-foreground mt-2">
              Temporary cookies that expire when you close your browser
            </p>
          </div>
          <div className="p-4 rounded-lg border border-border bg-card">
            <h4 className="font-semibold text-foreground">Persistent Cookies</h4>
            <p className="text-sm text-muted-foreground mt-2">
              Long-term cookies that remain on your device until deleted
            </p>
          </div>
          <div className="p-4 rounded-lg border border-border bg-card">
            <h4 className="font-semibold text-foreground">First-Party Cookies</h4>
            <p className="text-sm text-muted-foreground mt-2">
              Cookies set directly by Prism
            </p>
          </div>
          <div className="p-4 rounded-lg border border-border bg-card">
            <h4 className="font-semibold text-foreground">Third-Party Cookies</h4>
            <p className="text-sm text-muted-foreground mt-2">
              Cookies set by our service providers for analytics and advertising
            </p>
          </div>
        </div>
      </LegalSection>

      <LegalSection title="4. Managing Cookies">
        <p>
          You have the right to decide whether to accept or reject cookies. You can exercise this right by 
          modifying the settings in your internet browser. Most browsers have an option for turning off the 
          cookie feature, which will prevent your browser from accepting new cookies, as well as (depending 
          on the sophistication of your browser) allowing you to decide on acceptance of each new cookie in a 
          variety of ways.
        </p>
      </LegalSection>

      <LegalSection title="5. Third-Party Service Providers">
        <p>We use the following third-party services that may set cookies:</p>
        <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
          <li>Google Analytics for website analytics</li>
          <li>Stripe for payment processing</li>
          <li>Segment for data collection and analytics</li>
          <li>Sentry for error tracking</li>
        </ul>
      </LegalSection>

      <LegalSection title="6. Consent">
        <p>
          By using our Service, you consent to our use of cookies as described in this Cookie Policy. If you do 
          not consent to our use of cookies, please configure your browser settings accordingly or refrain from 
          using our Service.
        </p>
      </LegalSection>

      <LegalSection title="7. Updates to This Policy">
        <p>
          We may update this Cookie Policy from time to time. We will notify you of any significant changes by 
          posting the new Cookie Policy on our website with an updated "Last updated" date.
        </p>
      </LegalSection>

      <LegalSection title="8. Contact Us">
        <p>
          If you have questions about our Cookie Policy, please contact us at:{' '}
          <a href="mailto:cookies@prism.ai" className="text-primary hover:underline">
            cookies@prism.ai
          </a>
        </p>
      </LegalSection>
    </LegalPageLayout>
  )
}