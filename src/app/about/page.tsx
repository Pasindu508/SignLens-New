import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Sparkles, Users, Zap, Globe, Heart, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HeroHeader } from "@/components/ui/hero-section"
import { PrismFooter } from "@/components/prism-footer"
import { Timeline, type TimelineItem } from "@/components/ui/timeline"

export const metadata: Metadata = {
  title: "About Prism - See AI Through Every Lens",
  description:
    "Learn about Prism, our mission to democratize AI access, and how we're making premium AI models affordable for everyone.",
}

export default function AboutPage() {
  const journeyItems: TimelineItem[] = [
    {
      id: "oct-2024",
      title: "Idea Genesis",
      description:
        "The founding team realized the potential of OpenRouter and saw an opportunity to make premium AI accessible to everyone.",
      status: "completed",
    },
    {
      id: "nov-2024",
      title: "Alpha Launch",
      description:
        "Early testing with select users. Built the core platform, integrated 300+ models, and refined the UX.",
      status: "completed",
    },
    {
      id: "dec-2024",
      title: "Beta Release (Today!)",
      description:
        "Prism launches to the public with a beautiful landing page, unified models access, and transparent pricing.",
      status: "active",
    },
  ]
  return (
    <div className="min-h-screen bg-black">
      <HeroHeader />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-accent/10 border border-border rounded-full">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">About Prism</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            See AI Through <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Every Lens</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Prism makes cutting-edge AI accessible to everyone. We believe premium AI shouldn't cost $20/month.
            That's why we built Prism: 300+ models for 75% less.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/app">Get Started Free</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border">
              <Link href="#story">Learn More</Link>
            </Button>
          </div>
        </div>

        {/* Decorative element */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">300+</div>
              <p className="text-muted-foreground">AI Models</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">75%</div>
              <p className="text-muted-foreground">Savings vs ChatGPT Plus</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">$4.99</div>
              <p className="text-muted-foreground">Monthly Subscription</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">60+</div>
              <p className="text-muted-foreground">Model Providers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Prism was born from a simple observation: the best AI models were locked behind expensive paywalls.
              ChatGPT Plus costs $20/month. Claude Pro costs $20/month. Perplexity Pro costs $20/month.
              For a developer or creator wanting to explore multiple models, it meant spending $40-60+ per month.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              We saw an opportunity. OpenRouter had already solved the technical challenge of aggregating
              hundreds of AI models behind a single API. But the world didn't have a consumer-friendly product
              built on top of it that made sense for individual users and small teams.
            </p>
            <p className="text-lg text-muted-foreground">
              That's where SignLens comes in. We're building the simplest way to access all the world's best AI models.
              No more choosing between ChatGPT for coding, Claude for writing, and Gemini for research.
              With SignLens, you get all of them—and 297 more—for $4.99/month.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Democratize AI</h3>
              <p className="text-muted-foreground">
                We believe premium AI shouldn't be exclusive. Everyone should have access to the world's best models.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Radical Transparency</h3>
              <p className="text-muted-foreground">
                You should see exactly what you're paying for. We show the cost of every single request before you send it.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Model Agnostic</h3>
              <p className="text-muted-foreground">
                No vendor lock-in. You have the freedom to switch between models instantly and compare results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-6 bg-accent/5 border-t border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Our Vision</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Unified AI Access</h3>
                <p className="text-muted-foreground">
                  A single platform where you can access any AI model you want, instantly switch between them,
                  and see exactly what you're paying. No subscriptions to ChatGPT Plus, Claude Pro, and Perplexity Pro.
                  Just SignLens.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">For Everyone, Not Just OpenAI</h3>
                <p className="text-muted-foreground">
                  Claude is better for certain tasks. Gemini excels at other things. Open-source models like Llama
                  are incredibly powerful. We believe you should use the best tool for each job, not be locked into
                  one vendor's ecosystem.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Transparent, Not Hidden</h3>
                <p className="text-muted-foreground">
                  Most AI platforms hide costs and rate limits behind vague promises. We show you exactly what each
                  query costs before you send it. No surprises. No mystery bills. Pure transparency.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Constantly Evolving</h3>
                <p className="text-muted-foreground">
                  We're not launching and disappearing. As new AI models come out, we're adding them.
                  As better APIs emerge, we're integrating them. SignLens will always be the easiest way to access
                  the world's best AI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Built SignLens */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Why We Built SignLens</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Rocket className="w-5 h-5 text-primary" />
                The Problem
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>$20/month per AI subscription is expensive</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Each model has different strengths</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>You're locked into one vendor's ecosystem</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Pricing is hidden or unclear</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>No easy way to compare models</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                The Prism Solution
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>$4.99/month for 300+ models</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Use the best model for each task</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>No vendor lock-in, total freedom</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Transparent pricing per request</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Instant model comparison</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 bg-accent/5 border-t border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Our Journey</h2>
          <Timeline items={journeyItems} variant="spacious" showTimestamps={false} />
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">What's Next</h2>
          <div className="space-y-6">
            <div className="p-6 rounded-lg border border-border bg-card hover:bg-accent/5 transition-colors">
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold">✓</span>
                Advanced Model Comparison
              </h3>
              <p className="text-muted-foreground">
                Side-by-side comparison of model outputs to help you choose the best AI for your task.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card hover:bg-accent/5 transition-colors">
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold">✓</span>
                Team Collaboration
              </h3>
              <p className="text-muted-foreground">
                Share conversations, create team workspaces, and collaborate with your team on AI projects.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card hover:bg-accent/5 transition-colors">
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold">✓</span>
                Public API
              </h3>
              <p className="text-muted-foreground">
                Integrate SignLens into your own applications. Build on top of our unified AI platform.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card hover:bg-accent/5 transition-colors">
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold">✓</span>
                Image Generation
              </h3>
              <p className="text-muted-foreground">
                Access image generation models (DALL-E, Midjourney, Stable Diffusion) through SignLens.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card hover:bg-accent/5 transition-colors">
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold">✓</span>
                Enterprise Plans
              </h3>
              <p className="text-muted-foreground">
                Team accounts, advanced billing, priority support, and custom integrations for organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section (Optional) */}
      <section className="py-20 px-6 bg-accent/5 border-t border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Built by Developers</h2>
          <p className="text-lg text-muted-foreground mb-8">
            SignLens is built by a team of developers, designers, and AI enthusiasts who are passionate about making
            AI accessible to everyone. We believe in transparency, simplicity, and putting users first.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                <Users className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Founded by</h3>
              <p className="text-muted-foreground">AI Enthusiasts & Full-Stack Developers</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                <Globe className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Remote First</h3>
              <p className="text-muted-foreground">Distributed team across time zones</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                <Heart className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Mission Driven</h3>
              <p className="text-muted-foreground">Democratizing AI access</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to See AI Through Every Lens?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of developers and creators who are already using Prism to access 300+ AI models
            for less than the cost of coffee.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/app">
                Start Free Trial
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border">
              <Link href="/models">Browse Models</Link>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            No credit card required. Get $0.50 free credit to start.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-accent/5 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Questions?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Why is Prism so cheap?</h3>
              <p className="text-muted-foreground text-sm">
                We aggregate access to models through OpenRouter's API, which allows us to pass massive savings
                to users. We're also profitable at $4.99/month because of our volume and efficiency.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Is my data safe?</h3>
              <p className="text-muted-foreground text-sm">
                Yes. We use industry-standard encryption for all data in transit and at rest. We're SOC 2 certified
                and GDPR compliant. We don't train on your conversations.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Can I cancel anytime?</h3>
              <p className="text-muted-foreground text-sm">
                Absolutely. No lock-in contracts. Cancel your subscription instantly from your account settings.
                If you're not happy in the first 7 days, we'll refund you.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Do you have a free tier?</h3>
              <p className="text-muted-foreground text-sm">
                Yes! All new users get $0.50 in free credit to try SignLens. After that, you can pay monthly
                or just use our free models (Llama, Gemini Flash).
              </p>
            </div>
          </div>
        </div>
      </section>

      <PrismFooter />
    </div>
  )
}