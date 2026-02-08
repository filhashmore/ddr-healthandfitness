import { Download } from 'lucide-react'
import { siteConfig } from '../config/site-config'
import { AnimatedSection } from './ui/AnimatedSection'

export function LeadMagnet() {
  const { leadMagnet } = siteConfig

  return (
    <section id="guide" className="px-6 md:px-12 py-20 md:py-28 bg-dark-light/20 backdrop-blur-sm">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <div className="relative p-8 md:p-12 rounded-2xl bg-gradient-to-br from-gold-600/10 via-dark to-gold-800/5 border border-gold-600/20 text-center overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-600/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold-600/3 rounded-full blur-3xl" />

            <div className="relative z-10">
              {/* Icon */}
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gold-600/15 border border-gold-600/25 mx-auto mb-6">
                <Download size={28} className="text-gold-400" />
              </div>

              {/* Label */}
              <span className="inline-block px-4 py-1.5 text-sm font-semibold tracking-wider uppercase text-gold-400 bg-gold-600/10 border border-gold-600/20 rounded-full mb-4">
                {leadMagnet.label}
              </span>

              {/* Headline */}
              <h2 className="text-2xl md:text-3xl font-display font-bold text-slate mb-2 leading-tight">
                {leadMagnet.headline}
              </h2>
              <p className="text-lg text-gold-400 font-medium mb-4">{leadMagnet.subheadline}</p>
              <p className="text-slate-dim max-w-lg mx-auto mb-8 leading-relaxed">
                {leadMagnet.description}
              </p>

              {/* Email capture placeholder */}
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-dark border border-dark-lighter text-slate placeholder:text-slate-muted focus:outline-none focus:border-gold-600 transition-colors"
                  aria-label="Email address"
                />
                <button className="px-6 py-3 bg-gold-600 text-dark font-semibold rounded-lg hover:bg-gold-500 transition-colors cursor-pointer whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-dark">
                  {leadMagnet.cta}
                </button>
              </div>

              <p className="text-xs text-slate-muted">{leadMagnet.disclaimer}</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
