import * as Icons from 'lucide-react'
import { siteConfig } from '../config/site-config'
import { AnimatedSection } from './ui/AnimatedSection'
import { SectionLabel } from './ui/SectionLabel'

type IconName = keyof typeof Icons

function getIcon(name: string, size = 18) {
  const Icon = Icons[name as IconName] as React.ComponentType<{ size: number; className?: string }>
  if (!Icon) return null
  return <Icon size={size} className="text-gold-500 shrink-0" />
}

export function About() {
  const { about } = siteConfig

  return (
    <section id="about" className="px-6 md:px-12 py-20 md:py-28">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Image placeholder + philosophy card */}
          <AnimatedSection direction="left">
            <div className="space-y-8">
              {/* Portrait */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-dark-light border border-dark-lighter">
                <img
                  src="/images/ddr-hyrox-sandbag.jpg"
                  alt={about.imageAlt}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  loading="lazy"
                />
                {/* Subtle gradient overlay at bottom for blending */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent" />
                {/* Gold accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-600 to-gold-400" />
              </div>

              {/* Philosophy card */}
              <div className="p-6 rounded-xl bg-gold-600/5 border border-gold-600/20">
                <h3 className="font-display text-lg font-semibold text-gold-400 mb-3">
                  {about.philosophy.title}
                </h3>
                <p className="text-slate-dim leading-relaxed text-sm">
                  {about.philosophy.text}
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Story + credentials */}
          <div>
            <AnimatedSection>
              <SectionLabel>{about.label}</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate mb-8 leading-tight">
                {about.headline}
              </h2>
            </AnimatedSection>

            {/* Story paragraphs */}
            <div className="space-y-5 mb-10">
              {about.paragraphs.map((p, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <p className="text-slate-dim leading-relaxed">{p}</p>
                </AnimatedSection>
              ))}
            </div>

            {/* Credentials */}
            <AnimatedSection delay={0.3}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-1">
                {about.credentials.map((cred, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-dark-light/50 transition-colors"
                  >
                    {getIcon(cred.icon)}
                    <span className="text-sm text-slate-dim leading-snug">{cred.text}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
