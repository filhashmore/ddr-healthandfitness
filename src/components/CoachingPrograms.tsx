import * as Icons from 'lucide-react'
import { Check } from 'lucide-react'
import { siteConfig } from '../config/site-config'
import { AnimatedSection } from './ui/AnimatedSection'
import { SectionLabel } from './ui/SectionLabel'
import { Button } from './ui/Button'

type IconName = keyof typeof Icons

function getIcon(name: string) {
  const Icon = Icons[name as IconName] as React.ComponentType<{ size: number; className?: string }>
  if (!Icon) return null
  return <Icon size={24} className="text-gold-400" />
}

export function CoachingPrograms() {
  const { programs } = siteConfig

  return (
    <section id="programs" className="px-6 md:px-12 py-20 md:py-28">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <SectionLabel>{programs.label}</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate mb-4">
            {programs.headline}
          </h2>
          <p className="text-slate-dim max-w-2xl mx-auto">{programs.subheadline}</p>
        </AnimatedSection>

        {/* Program Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {programs.offerings.map((program, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div
                className={`relative flex flex-col p-8 rounded-2xl border h-full transition-all duration-300 ${
                  program.highlighted
                    ? 'bg-gradient-to-b from-gold-600/10 to-dark border-gold-600/40 shadow-xl shadow-gold-600/5'
                    : 'bg-dark-light/50 border-dark-lighter hover:border-gold-600/20'
                }`}
              >
                {/* Badge */}
                {'badge' in program && program.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-semibold tracking-wider uppercase bg-gold-600 text-dark rounded-full">
                    {program.badge}
                  </span>
                )}

                {/* Icon + Name */}
                <div className="flex items-center gap-3 mb-2">
                  {getIcon(program.icon)}
                  <h3 className="font-display text-xl font-bold text-slate">{program.name}</h3>
                </div>

                {/* Tagline */}
                <p className="text-sm text-gold-400 font-medium mb-4">{program.tagline}</p>

                {/* Description */}
                <p className="text-sm text-slate-dim leading-relaxed mb-6">{program.description}</p>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {program.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check size={16} className="text-gold-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-dim">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  href={program.href}
                  variant={program.highlighted ? 'primary' : 'secondary'}
                  className="w-full"
                >
                  {program.cta}
                </Button>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Footnote */}
        <AnimatedSection delay={0.4}>
          <p className="text-center text-sm text-slate-muted mt-10">{programs.footnote}</p>
        </AnimatedSection>
      </div>
    </section>
  )
}
