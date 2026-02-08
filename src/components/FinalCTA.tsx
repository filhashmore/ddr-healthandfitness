import { ArrowRight } from 'lucide-react'
import { siteConfig } from '../config/site-config'
import { AnimatedSection } from './ui/AnimatedSection'
import { Button } from './ui/Button'

export function FinalCTA() {
  const { finalCta } = siteConfig

  return (
    <section
      id="booking"
      className="px-5 sm:px-6 md:px-12 py-20 md:py-28 bg-gradient-to-b from-dark-light/30 to-dark"
    >
      <div className="max-w-3xl mx-auto text-center">
        <AnimatedSection>
          {/* Mantra */}
          <p className="text-gold-500 font-display font-semibold text-base sm:text-lg tracking-widest uppercase mb-4">
            {finalCta.mantra}
          </p>

          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate mb-6 leading-tight">
            {finalCta.headline}
          </h2>
          <p className="text-base sm:text-lg text-slate-dim max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            {finalCta.subheadline}
          </p>

          {/* CTA */}
          <Button href={finalCta.cta.href} size="lg" className="w-full sm:w-auto">
            {finalCta.cta.label}
            <ArrowRight size={20} />
          </Button>

          {/* Booking embed placeholder */}
          <div className="mt-10 sm:mt-12 p-6 sm:p-8 rounded-xl border-2 border-dashed border-dark-lighter">
            <p className="text-slate-muted text-sm">
              Calendly or booking form embed will go here
            </p>
          </div>

          {/* Alt contact */}
          <p className="mt-6 sm:mt-8 text-slate-muted text-sm">
            {finalCta.alt.text}{' '}
            <a
              href={finalCta.alt.href}
              className="text-gold-400 hover:text-gold-300 underline underline-offset-4 transition-colors"
            >
              {finalCta.alt.label}
            </a>
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
