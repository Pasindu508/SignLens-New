'use client'

import { motion } from 'framer-motion'
import { Scale } from 'lucide-react'
import { LegalPageLayout, LegalSection } from '@/components/legal-page-layout'

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms of Service"
      description="Agreement governing your use of SignLens"
      icon={<Scale className="w-6 h-6 text-primary" />}
      lastUpdated="November 12, 2024"
    >
      <LegalSection title="1. Agreement to Terms">
        <p>
          By accessing and using SignLens (the "Service"), you accept and agree to be bound by the terms and 
          provision of this agreement. If you do not agree to abide by the above, please do not use this Service.
        </p>
      </LegalSection>

      <LegalSection title="2. Use License">
        <p>
          Permission is granted to temporarily download one copy of the materials (information or software) on 
          SignLens for personal, non-commercial transitory viewing only. This is the grant of a license, not a 
          transfer of title, and under this license you may not:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
          <li>Modifying or copying the materials</li>
          <li>Using the materials for any commercial purpose or for any public display</li>
          <li>Attempting to decompile or reverse engineer any software contained on Prism</li>
          <li>Removing any copyright or other proprietary notations from the materials</li>
          <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Disclaimer">
        <p>
          The materials on Prism are provided on an 'as is' basis. Prism makes no warranties, expressed or 
          implied, and hereby disclaims and negates all other warranties including, without limitation, implied 
          warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of 
          intellectual property or other violation of rights.
        </p>
      </LegalSection>

      <LegalSection title="4. Limitations">
        <p>
          In no event shall Prism or its suppliers be liable for any damages (including, without limitation, 
          damages for loss of data or profit, or due to business interruption) arising out of the use or 
          inability to use the materials on Prism, even if Prism or a Prism authorized representative has been 
          notified orally or in writing of the possibility of such damage.
        </p>
      </LegalSection>

      <LegalSection title="5. Accuracy of Materials">
        <p>
          The materials appearing on Prism could include technical, typographical, or photographic errors. 
          Prism does not warrant that any of the materials on Prism are accurate, complete, or current. 
          Prism may make changes to the materials contained on Prism at any time without notice.
        </p>
      </LegalSection>

      <LegalSection title="6. Materials on Prism">
        <p>
          Prism has not reviewed all of the sites linked to its website and is not responsible for the contents 
          of any such linked site. The inclusion of any link does not imply endorsement by Prism of the site. 
          Use of any such linked website is at the user's own risk.
        </p>
      </LegalSection>

      <LegalSection title="7. Modifications">
        <p>
          Prism may revise these terms of service for our website at any time without notice. By using this 
          website, you are agreeing to be bound by the then current version of these terms of service.
        </p>
      </LegalSection>

      <LegalSection title="8. Governing Law">
        <p>
          These terms and conditions are governed by and construed in accordance with the laws of the United States, 
          and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
        </p>
      </LegalSection>

      <LegalSection title="9. User Responsibilities">
        <p>You agree to:</p>
        <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
          <li>Use the Service only for lawful purposes</li>
          <li>Not use the Service to infringe any intellectual property rights</li>
          <li>Not harass or cause distress or inconvenience to any person</li>
          <li>Not transmit obscene or offensive content</li>
          <li>Not disrupt the normal flow of dialogue within Prism</li>
        </ul>
      </LegalSection>

      <LegalSection title="10. Contact Information">
        <p>
          If you have any questions about these Terms of Service, please contact us at:{' '}
          <a href="mailto:legal@signlens.ai" className="text-primary hover:underline">
            legal@signlens.ai
          </a>
        </p>
      </LegalSection>
    </LegalPageLayout>
  )
}