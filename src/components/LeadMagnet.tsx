import { useState, FormEvent } from 'react'
import { Download, CheckCircle, Loader2 } from 'lucide-react'
import { siteConfig } from '../config/site-config'
import { AnimatedSection } from './ui/AnimatedSection'

export function LeadMagnet() {
  const { leadMagnet } = siteConfig
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus('loading')
    try {
      const res = await fetch('https://formspree.io/f/mojnvjwb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          _subject: 'New Guide Request — DDR Health & Fitness',
          message: 'Please send me "The 5 Biggest Health Mistakes Busy Professionals Make" guide.',
        }),
      })
      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        // Fallback: open email client directly
        window.location.href = `mailto:ddrhealthandfitness@gmail.com?subject=Send Me the Free Guide&body=Hi David, I'd like to receive the free guide "The 5 Biggest Health Mistakes Busy Professionals Make." My email is: ${encodeURIComponent(email)}`
        setStatus('success')
      }
    } catch {
      // Fallback: open email client directly
      window.location.href = `mailto:ddrhealthandfitness@gmail.com?subject=Send Me the Free Guide&body=Hi David, I'd like to receive the free guide "The 5 Biggest Health Mistakes Busy Professionals Make." My email is: ${encodeURIComponent(email)}`
      setStatus('success')
    }
  }

  return (
    <section id="guide" className="px-5 sm:px-6 md:px-12 py-20 md:py-28 bg-dark-light/20 backdrop-blur-sm">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <div className="relative p-8 md:p-12 rounded-2xl bg-gradient-to-br from-gold-600/10 via-dark to-gold-800/5 border border-gold-600/20 text-center overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-600/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold-600/3 rounded-full blur-3xl" />

            <div className="relative z-10">
              {/* Icon */}
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gold-600/15 border border-gold-600/25 mx-auto mb-6">
                {status === 'success' ? (
                  <CheckCircle size={28} className="text-green-400" />
                ) : (
                  <Download size={28} className="text-gold-400" />
                )}
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

              {status === 'success' ? (
                <div className="max-w-md mx-auto mb-4">
                  <p className="text-green-400 font-semibold text-lg mb-3">You're in! Here's your free guide:</p>
                  <a
                    href="/DDR-Health-5-Mistakes-Guide.pdf"
                    download
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gold-600 text-dark font-semibold rounded-lg hover:bg-gold-500 transition-colors"
                  >
                    <Download size={18} />
                    Download Your Free Guide
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg bg-dark border border-dark-lighter text-slate placeholder:text-slate-muted focus:outline-none focus:border-gold-600 transition-colors"
                    aria-label="Email address"
                    disabled={status === 'loading'}
                  />
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="px-6 py-3 bg-gold-600 text-dark font-semibold rounded-lg hover:bg-gold-500 transition-colors cursor-pointer whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-dark disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      leadMagnet.cta
                    )}
                  </button>
                </form>
              )}

              <p className="text-xs text-slate-muted">{leadMagnet.disclaimer}</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
