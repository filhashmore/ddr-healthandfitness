import { Quote } from 'lucide-react'
import { siteConfig } from '../config/site-config'
import { AnimatedSection } from './ui/AnimatedSection'
import { SectionLabel } from './ui/SectionLabel'

export function Testimonials() {
  const { testimonials } = siteConfig

  return (
    <section id="testimonials" className="px-6 md:px-12 py-20 md:py-28 bg-dark-light/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <SectionLabel>{testimonials.label}</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate mb-4">
            {testimonials.headline}
          </h2>
          <p className="text-slate-dim max-w-xl mx-auto">{testimonials.subheadline}</p>
        </AnimatedSection>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.items.map((testimonial, i) => (
            <AnimatedSection key={i} delay={(i % 4) * 0.08}>
              <div className="relative p-6 lg:p-8 rounded-xl bg-dark border border-dark-lighter hover:border-gold-600/20 transition-all duration-300 h-full flex flex-col">
                {/* Quote icon */}
                <Quote size={24} className="text-gold-600/30 mb-4 shrink-0" />

                {/* Quote text */}
                <blockquote className="text-slate-dim leading-relaxed mb-6 flex-1">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author info */}
                <div className="flex items-center justify-between gap-4 pt-4 border-t border-dark-lighter">
                  <div>
                    <p className="font-semibold text-slate text-sm">{testimonial.name}</p>
                    <p className="text-xs text-slate-muted">{testimonial.detail}</p>
                  </div>
                  <span className="text-xs font-medium text-gold-400 bg-gold-600/10 px-3 py-1 rounded-full whitespace-nowrap">
                    {testimonial.result}
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
