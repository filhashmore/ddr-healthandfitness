import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { siteConfig } from '../config/site-config'
import { Button } from './ui/Button'

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const { nav } = siteConfig

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-dark/90 backdrop-blur-xl shadow-lg shadow-dark/50 border-b border-dark-lighter/50'
            : 'bg-transparent'
        }`}
        style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
          {/* Brand */}
          <a href="#" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500/50 rounded-lg shrink-0" aria-label="DDR Health & Fitness — Home">
            <img
              src="/images/DDR_Logo_OutlineUP_2026.png"
              alt="DDR Health & Fitness"
              className="h-10 md:h-12 w-auto"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs lg:text-sm font-medium text-slate-dim hover:text-gold-400 transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
            <Button href={nav.cta.href} size="sm">
              {nav.cta.label}
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-slate-dim hover:text-slate transition-colors cursor-pointer"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-dark/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
            style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
          >
            {nav.links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="text-2xl font-display font-semibold text-slate hover:text-gold-400 transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: nav.links.length * 0.05 }}
            >
              <Button href={nav.cta.href} size="lg" onClick={() => setMobileOpen(false)}>
                {nav.cta.label}
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
