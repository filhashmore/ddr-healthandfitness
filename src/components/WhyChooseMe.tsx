import * as Icons from 'lucide-react'
import { siteConfig } from '../config/site-config'
import { AnimatedSection } from './ui/AnimatedSection'
import { SectionLabel } from './ui/SectionLabel'

type IconName = keyof typeof Icons

function getIcon(name: string) {
  const Icon = Icons[name as IconName] as React.ComponentType<{ size: number; className?: string }>
  if (!Icon) return null
  return <Icon size={28} className="text-gold-400" />
}

export function WhyChooseMe() {
  const { whyChooseMe } = siteConfig

  return (
    <section id="why" className="px-6 md:px-12 py-20 md:py-28">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <SectionLabel>{whyChooseMe.label}</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate mb-4">
            {whyChooseMe.headline}
          </h2>
          <p className="text-slate-dim max-w-xl mx-auto">{whyChooseMe.subheadline}</p>
        </AnimatedSection>

        {/* Differentiator cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {whyChooseMe.items.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="p-6 lg:p-8 rounded-xl bg-dark-light/50 border border-dark-lighter hover:border-gold-600/20 transition-all duration-300 h-full group">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gold-600/10 border border-gold-600/20 mb-5 group-hover:bg-gold-600/15 transition-colors">
                  {getIcon(item.icon)}
                </div>
                <h3 className="font-display text-lg font-semibold text-slate mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-dim leading-relaxed">{item.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
