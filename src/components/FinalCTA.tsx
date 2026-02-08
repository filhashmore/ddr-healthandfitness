import { Mail, Phone } from 'lucide-react'
import { siteConfig } from '../config/site-config'
import { AnimatedSection } from './ui/AnimatedSection'
import { Button } from './ui/Button'

export function FinalCTA() {
  const { finalCta, contact } = siteConfig

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

          {/* Contact options */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
            <Button href={contact.emailLink} size="lg" className="w-full sm:w-auto">
              <Mail size={20} />
              Email David
            </Button>
            <Button href={contact.phoneLink} variant="secondary" size="lg" className="w-full sm:w-auto">
              <Phone size={20} />
              Call {contact.phone}
            </Button>
          </div>

          {/* What to expect */}
          <div className="mt-2 p-6 sm:p-8 rounded-xl bg-dark-light/40 border border-dark-lighter">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-3">
              What happens next?
            </p>
            <div className="flex flex-col sm:flex-row gap-6 text-left sm:text-center max-w-2xl mx-auto">
              <div className="flex-1">
                <p className="text-slate font-medium mb-1">1. Reach out</p>
                <p className="text-slate-dim text-sm">Email or call — tell me a bit about your goals.</p>
              </div>
              <div className="flex-1">
                <p className="text-slate font-medium mb-1">2. Free discovery call</p>
                <p className="text-slate-dim text-sm">20 minutes. No sales pitch — just an honest conversation.</p>
              </div>
              <div className="flex-1">
                <p className="text-slate font-medium mb-1">3. Your plan</p>
                <p className="text-slate-dim text-sm">If we're a fit, I build your personalized program.</p>
              </div>
            </div>
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
