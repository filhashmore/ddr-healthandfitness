import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react'
import { siteConfig } from '../config/site-config'
import { AnimatedSection } from './ui/AnimatedSection'
import { SectionLabel } from './ui/SectionLabel'

export function PhotoGallery() {
  const { gallery } = siteConfig
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const total = gallery.images.length
  const touchRef = useRef<{ startX: number; startY: number } | null>(null)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total)
  }, [total])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total)
  }, [total])

  // Auto-advance every 4 seconds unless paused or lightbox open
  useEffect(() => {
    if (isPaused || lightboxOpen) return
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [next, isPaused, lightboxOpen])

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [lightboxOpen])

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxOpen(false)
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightboxOpen, next, prev])

  // Touch swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchRef.current = {
      startX: e.touches[0].clientX,
      startY: e.touches[0].clientY,
    }
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchRef.current) return
    const dx = e.changedTouches[0].clientX - touchRef.current.startX
    const dy = e.changedTouches[0].clientY - touchRef.current.startY
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      if (dx < 0) next()
      else prev()
    }
    touchRef.current = null
  }

  const openLightbox = () => setLightboxOpen(true)

  return (
    <>
      <section id="gallery" className="px-4 sm:px-6 md:px-12 py-16 sm:py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-8 sm:mb-12">
              <SectionLabel>{gallery.label}</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate">
                {gallery.headline}
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div
              className="relative group"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* Main image container */}
              <div className="relative aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden bg-dark-light border border-dark-lighter">
                {gallery.images.map((img, i) => (
                  <div
                    key={i}
                    className="absolute inset-0 transition-all duration-700 ease-out"
                    style={{
                      opacity: i === current ? 1 : 0,
                      transform: i === current ? 'scale(1)' : 'scale(1.05)',
                      zIndex: i === current ? 1 : 0,
                    }}
                  >
                    {/* Blurred background fill — shows full-bleed color behind contained image */}
                    <img
                      src={img.src}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-40"
                      loading={i < 2 ? 'eager' : 'lazy'}
                      draggable={false}
                    />

                    {/* Main image — object-contain so nothing gets cropped */}
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="relative w-full h-full object-contain z-[1]"
                      loading={i < 2 ? 'eager' : 'lazy'}
                      draggable={false}
                    />

                    {/* Bottom gradient for caption */}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-dark/80 to-transparent z-[2]" />
                  </div>
                ))}

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-10">
                  <p className="text-slate text-xs sm:text-sm md:text-base font-medium tracking-wide">
                    {gallery.images[current].caption}
                  </p>
                  <p className="text-slate-muted text-xs mt-1 sm:hidden">
                    {current + 1} / {total}
                  </p>
                </div>

                {/* Click to expand — desktop only */}
                <button
                  onClick={openLightbox}
                  className="absolute top-3 right-3 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-dark/60 backdrop-blur-sm border border-dark-lighter flex items-center justify-center text-slate opacity-0 group-hover:opacity-80 transition-opacity hover:bg-gold-600/20 hover:border-gold-600/40 cursor-pointer"
                  aria-label="View full image"
                >
                  <Maximize2 size={16} />
                </button>

                {/* Navigation arrows */}
                <button
                  onClick={(e) => { e.stopPropagation(); prev() }}
                  className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-10 min-w-[44px] min-h-[44px] w-11 h-11 sm:w-10 sm:h-10 rounded-full bg-dark/60 backdrop-blur-sm border border-dark-lighter flex items-center justify-center text-slate opacity-70 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity active:bg-gold-600/30 sm:hover:bg-gold-600/20 sm:hover:border-gold-600/40"
                  aria-label="Previous photo"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); next() }}
                  className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-10 min-w-[44px] min-h-[44px] w-11 h-11 sm:w-10 sm:h-10 rounded-full bg-dark/60 backdrop-blur-sm border border-dark-lighter flex items-center justify-center text-slate opacity-70 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity active:bg-gold-600/30 sm:hover:bg-gold-600/20 sm:hover:border-gold-600/40"
                  aria-label="Next photo"
                >
                  <ChevronRight size={16} />
                </button>

                {/* Gold accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-gold-600 to-gold-400 z-10" />
              </div>

              {/* Dot indicators */}
              <div className="flex justify-center gap-1.5 sm:gap-2 mt-3 sm:mt-4 overflow-x-auto py-1">
                {gallery.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`shrink-0 h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                      i === current
                        ? 'bg-gold-500 w-5 sm:w-6'
                        : 'w-1.5 sm:w-2 bg-dark-lighter active:bg-gold-600/40 sm:hover:bg-gold-600/40'
                    }`}
                    aria-label={`Go to photo ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Lightbox Modal ── */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-dark/95 backdrop-blur-xl flex flex-col items-center justify-center"
            onClick={() => setLightboxOpen(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
          >
            {/* Close button */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 z-[110] w-10 h-10 rounded-full bg-dark-lighter/80 border border-dark-lighter flex items-center justify-center text-slate hover:text-gold-400 transition-colors cursor-pointer"
              aria-label="Close lightbox"
            >
              <X size={20} />
            </button>

            {/* Counter */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 z-[110] text-slate-muted text-sm font-medium">
              {current + 1} / {total}
            </div>

            {/* Image */}
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-full h-full max-w-5xl max-h-[80vh] mx-auto px-4 sm:px-12 py-16 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={gallery.images[current].src}
                alt={gallery.images[current].alt}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl shadow-dark/50"
                draggable={false}
              />
            </motion.div>

            {/* Caption */}
            <div className="absolute bottom-6 left-0 right-0 text-center z-[110]">
              <p className="text-slate text-sm sm:text-base font-medium">
                {gallery.images[current].caption}
              </p>
            </div>

            {/* Lightbox navigation arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-[110] w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-dark-lighter/60 border border-dark-lighter flex items-center justify-center text-slate hover:text-gold-400 hover:bg-gold-600/20 hover:border-gold-600/40 transition-all cursor-pointer"
              aria-label="Previous photo"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-[110] w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-dark-lighter/60 border border-dark-lighter flex items-center justify-center text-slate hover:text-gold-400 hover:bg-gold-600/20 hover:border-gold-600/40 transition-all cursor-pointer"
              aria-label="Next photo"
            >
              <ChevronRight size={22} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
