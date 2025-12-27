'use client'

import { motion } from 'framer-motion'
import { Shield } from 'lucide-react'
import { LegalPageLayout, LegalSection } from '@/components/legal-page-layout'

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      description="How we collect, use, and protect your personal data"
      icon={<Shield className="w-6 h-6 text-primary" />}
      lastUpdated="November 12, 2024"
    >
      <LegalSection title="1. Introduction">
        <p>
          SignLens ("we," "us," "our," or "Company") respects the privacy of our users ("user" or "you"). 
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
          when you visit our website and use our services.
        </p>
        <p>
          Please read this Privacy Policy carefully. If you do not agree with our policies and practices, 
          please do not use our Services.
        </p>
      </LegalSection>

      <LegalSection title="2. Information We Collect">
        <h3 className="font-semibold text-foreground mt-4 mb-2">2.1 Information You Provide</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Account registration information (email, username, password)</li>
          <li>Profile information (name, avatar, bio)</li>
          <li>Billing and payment information</li>
          <li>Communication preferences</li>
          <li>Support inquiries and feedback</li>
        </ul>

        <h3 className="font-semibold text-foreground mt-4 mb-2">2.2 Information Automatically Collected</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>IP address and browser type</li>
          <li>Device information</li>
          <li>Cookies and similar technologies</li>
          <li>Usage patterns and analytics</li>
          <li>Referral sources</li>
        </ul>

        <h3 className="font-semibold text-foreground mt-4 mb-2">2.3 Information About Your Conversations</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>We store your conversations to provide the service</li>
          <li>We do NOT use your conversations to train our models or AI systems</li>
          <li>You can delete conversations at any time</li>
          <li>Your data is encrypted in transit and at rest</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. How We Use Your Information">
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>To provide and maintain our Service</li>
          <li>To notify you about changes to our Service</li>
          <li>To provide customer support</li>
          <li>To gather analysis or valuable information so we can improve our Service</li>
          <li>To monitor the usage of our Service</li>
          <li>To detect, prevent and address technical and security issues</li>
          <li>To provide you with news, special offers and general information</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Data Sharing">
        <p>
          We do not sell, trade, or rent your personal information to third parties. We may share your 
          information only in the following circumstances:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
          <li>With service providers who assist us in operating our website and Service</li>
          <li>For legal compliance or to protect our rights</li>
          <li>With your explicit consent</li>
          <li>In the event of a business transfer or merger</li>
        </ul>
      </LegalSection>

      <LegalSection title="5. Data Retention">
        <p>
          We retain your personal information for as long as your account is active or as needed to provide 
          you with our Services. You can request deletion of your data at any time, and we will comply within 
          30 days unless required by law to retain it.
        </p>
      </LegalSection>

      <LegalSection title="6. Security of Data">
        <p>
          The security of your data is important to us. We implement comprehensive security measures including:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
          <li>SSL/TLS encryption for all data in transit</li>
          <li>AES-256 encryption for data at rest</li>
          <li>Regular security audits and penetration testing</li>
          <li>SOC 2 Type II compliance</li>
          <li>GDPR compliance</li>
        </ul>
      </LegalSection>

      <LegalSection title="7. Your Privacy Rights">
        <p>Depending on your location, you may have the following rights:</p>
        <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
          <li>Right to access your personal information</li>
          <li>Right to correct inaccurate data</li>
          <li>Right to request deletion of your data</li>
          <li>Right to data portability</li>
          <li>Right to withdraw consent</li>
          <li>Right to object to processing</li>
        </ul>
      </LegalSection>

      <LegalSection title="8. Contact Us">
        <p>
          If you have any questions about this Privacy Policy, please contact us at:{' '}
          <a href="mailto:privacy@prism.ai" className="text-primary hover:underline">
            privacy@prism.ai
          </a>
        </p>
      </LegalSection>
    </LegalPageLayout>
  )
}