'use client'

import { motion } from 'framer-motion'
import { Lock } from 'lucide-react'
import { LegalPageLayout, LegalSection } from '@/components/legal-page-layout'

export default function GDPRPage() {
  return (
    <LegalPageLayout
      title="GDPR Compliance"
      description="Your data rights and how we comply with GDPR regulations"
      icon={<Lock className="w-6 h-6 text-primary" />}
      lastUpdated="November 12, 2024"
    >
      <LegalSection title="1. About This Policy">
        <p>
          Prism is committed to protecting your privacy and ensuring you have a positive experience on our 
          platform. This GDPR Compliance Policy explains how we process your personal data in accordance with 
          the General Data Protection Regulation (GDPR).
        </p>
      </LegalSection>

      <LegalSection title="2. Our Commitment to GDPR">
        <p>Prism is fully compliant with GDPR including:</p>
        <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
          <li>Data Protection Impact Assessments</li>
          <li>Lawful basis for all data processing</li>
          <li>Data Processing Agreements with all vendors</li>
          <li>Breach notification procedures</li>
          <li>Privacy by Design principles</li>
          <li>Regular audits and compliance checks</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Legal Basis for Processing">
        <p>We process your personal data based on:</p>
        <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
          <li>Contract: To provide our Service to you</li>
          <li>Consent: When you explicitly agree</li>
          <li>Legal obligation: To comply with laws</li>
          <li>Vital interests: To protect your safety</li>
          <li>Legitimate interests: To improve our Service</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Your GDPR Rights">
        <h3 className="font-semibold text-foreground mt-4 mb-2">4.1 Right to Access</h3>
        <p className="ml-4">
          You have the right to obtain confirmation of whether we process your personal data and to request 
          access to that data.
        </p>

        <h3 className="font-semibold text-foreground mt-4 mb-2">4.2 Right to Rectification</h3>
        <p className="ml-4">
          You have the right to correct any inaccurate or incomplete personal data we hold about you.
        </p>

        <h3 className="font-semibold text-foreground mt-4 mb-2">4.3 Right to Erasure</h3>
        <p className="ml-4">
          You have the right to request deletion of your personal data under certain circumstances.
        </p>

        <h3 className="font-semibold text-foreground mt-4 mb-2">4.4 Right to Restrict Processing</h3>
        <p className="ml-4">
          You have the right to request that we limit how we use your personal data.
        </p>

        <h3 className="font-semibold text-foreground mt-4 mb-2">4.5 Right to Data Portability</h3>
        <p className="ml-4">
          You have the right to receive your personal data in a portable format and transmit it to another 
          organization.
        </p>

        <h3 className="font-semibold text-foreground mt-4 mb-2">4.6 Right to Object</h3>
        <p className="ml-4">
          You have the right to object to certain types of processing, including direct marketing.
        </p>

        <h3 className="font-semibold text-foreground mt-4 mb-2">4.7 Rights Related to Automated Decision Making</h3>
        <p className="ml-4">
          You have the right not to be subject to decisions based solely on automated processing.
        </p>
      </LegalSection>

      <LegalSection title="5. How to Exercise Your Rights">
        <p>To exercise any of your GDPR rights, please contact us with your request:</p>
        <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
          <li>Email: gdpr@prism.ai</li>
          <li>Include your name and account email</li>
          <li>Clearly state which right you wish to exercise</li>
          <li>We will respond within 30 days</li>
        </ul>
      </LegalSection>

      <LegalSection title="6. Data Processing">
        <h3 className="font-semibold text-foreground mt-4 mb-2">6.1 Processors</h3>
        <p className="ml-4">
          We use third-party data processors who assist us in providing our Service. All processors have 
          executed Data Processing Agreements (DPAs) with us.
        </p>

        <h3 className="font-semibold text-foreground mt-4 mb-2">6.2 Data Transfers</h3>
        <p className="ml-4">
          Any international data transfers are protected by appropriate safeguards such as Standard Contractual 
          Clauses (SCCs).
        </p>
      </LegalSection>

      <LegalSection title="7. Data Protection Officer">
        <p>
          Prism has appointed a Data Protection Officer (DPO) to oversee our GDPR compliance. You can contact 
          our DPO at:{' '}
          <a href="mailto:dpo@prism.ai" className="text-primary hover:underline">
            dpo@prism.ai
          </a>
        </p>
      </LegalSection>

      <LegalSection title="8. Data Retention">
        <p>
          We retain personal data only for as long as necessary to provide our Service and fulfill the purposes 
          for which it was collected, unless a longer retention period is required by law.
        </p>
      </LegalSection>

      <LegalSection title="9. Data Protection Impact Assessments">
        <p>
          We conduct Data Protection Impact Assessments (DPIAs) for all new processing activities to ensure we 
          handle your data responsibly and in compliance with GDPR.
        </p>
      </LegalSection>

      <LegalSection title="10. Complaints and Resolution">
        <p>
          If you believe we have not complied with GDPR, you have the right to lodge a complaint with your 
          local supervisory authority. However, we encourage you to contact us first so we can attempt to resolve 
          the matter.
        </p>
        <p className="mt-4">
          You can contact us at:{' '}
          <a href="mailto:compliance@prism.ai" className="text-primary hover:underline">
            compliance@prism.ai
          </a>
        </p>
      </LegalSection>

      <LegalSection title="11. California Privacy Rights (CCPA)">
        <p>
          If you are a California resident, you have additional rights under the California Consumer Privacy Act 
          (CCPA). Please refer to our Privacy Policy for details about your CCPA rights or contact us directly.
        </p>
      </LegalSection>
    </LegalPageLayout>
  )
}