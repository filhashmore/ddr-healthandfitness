import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { siteConfig } from '../config/site-config'
import { Button } from './ui/Button'

export function Hero() {
  const { hero } = siteConfig

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
    >
      {/* Semi-transparent overlay — lets animated background show through */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/30 to-dark/60" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 text-center pt-20 pb-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-gold-400 bg-gold-600/10 border border-gold-600/20 rounded-full mb-6 sm:mb-8">
            {hero.badge}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-slate leading-[1.1] mb-4 sm:mb-6"
        >
          {hero.headline.split(' ').map((word, i) =>
            word === 'Without' || word === 'Guessing' ? (
              <span key={i} className="text-gold-400">
                {word}{' '}
              </span>
            ) : (
              <span key={i}>{word} </span>
            )
          )}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-gold-500 font-display font-semibold text-lg sm:text-xl tracking-wide mb-4 sm:mb-6"
        >
          {hero.tagline}
        </motion.p>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-slate-dim max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed"
        >
          {hero.subheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <Button href={hero.cta.href} size="lg" className="w-full sm:w-auto">
            {hero.cta.label}
          </Button>
          <Button href={hero.ctaSecondary.href} variant="secondary" size="lg" className="w-full sm:w-auto">
            {hero.ctaSecondary.label}
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="inline-block mt-10 sm:mt-16 text-slate-muted hover:text-gold-400 transition-colors"
          aria-label="Scroll to learn more"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <ArrowDown size={24} />
          </motion.div>
        </motion.a>
      </div>
    </section>
  )
}
