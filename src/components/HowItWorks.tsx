import * as Icons from 'lucide-react'
import { siteConfig } from '../config/site-config'
import { AnimatedSection } from './ui/AnimatedSection'
import { SectionLabel } from './ui/SectionLabel'

type IconName = keyof typeof Icons

function getIcon(name: string) {
  const Icon = Icons[name as IconName] as React.ComponentType<{ size: number; className?: string }>
  if (!Icon) return null
  return <Icon size={24} className="text-gold-400" />
}

export function HowItWorks() {
  const { howItWorks } = siteConfig

  return (
    <section id="how-it-works" className="px-6 md:px-12 py-20 md:py-28 bg-dark-light/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <SectionLabel>{howItWorks.label}</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate mb-4">
            {howItWorks.headline}
          </h2>
          <p className="text-slate-dim max-w-xl mx-auto">{howItWorks.subheadline}</p>
        </AnimatedSection>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {howItWorks.steps.map((step, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="relative p-6 rounded-xl bg-dark border border-dark-lighter hover:border-gold-600/30 transition-all duration-300 h-full group">
                {/* Step number */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gold-600/10 border border-gold-600/20 text-gold-400 font-display font-bold text-sm">
                    {step.number}
                  </span>
                  <span className="text-dark-lighter group-hover:text-gold-600/30 transition-colors">
                    {getIcon(step.icon)}
                  </span>
                </div>

                <h3 className="font-display text-lg font-semibold text-slate mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-dim leading-relaxed">{step.description}</p>

                {/* Connector line (desktop only, not on last) */}
                {i < howItWorks.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8 border-t border-dashed border-dark-lighter" />
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
