import { HeroSection } from "@/components/ui/hero-section"
import { StickyNoteSection } from "@/components/ui/sticky-note-section"
import { PrismFeatures } from "@/components/prism-features"
import { Testimonial } from "@/components/ui/design-testimonial"
import { OurCrew } from "@/components/ui/our-crew"
import { PrismFAQ } from "@/components/prism-faq"
import { PrismFooter } from "@/components/prism-footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <HeroSection />
      <StickyNoteSection />
      <PrismFeatures />
      <Testimonial />
      <OurCrew />
      <PrismFAQ />
      <PrismFooter />
    </div>
  );
}
