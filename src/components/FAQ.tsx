import { useState } from 'react'
import { siteConfig } from '../config/site-config'
import { AnimatedSection } from './ui/AnimatedSection'
import { SectionLabel } from './ui/SectionLabel'
import { AccordionItem } from './ui/AccordionItem'

export function FAQ() {
  const { faq } = siteConfig
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="px-6 md:px-12 py-20 md:py-28">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <SectionLabel>{faq.label}</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate">
            {faq.headline}
          </h2>
        </AnimatedSection>

        {/* Accordion */}
        <AnimatedSection delay={0.1}>
          <div className="divide-y-0">
            {faq.items.map((item, i) => (
              <AccordionItem
                key={i}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
