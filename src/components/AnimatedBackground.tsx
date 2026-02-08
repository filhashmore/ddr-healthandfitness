import { useEffect, useState } from 'react'

/**
 * Animated gradient background with warm gold floating orbs, aurora sweep,
 * and parallax scroll response. Mizzou Black & Gold theme.
 */
export function AnimatedBackground() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Base gradient — deep black with subtle warm undertone */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#0a0a0a] to-[#080604]" />

      {/* Aurora sweep — warm gold band */}
      <div className="absolute inset-0 aurora-sweep opacity-60" />

      {/* Secondary aurora — counter direction */}
      <div className="absolute inset-0 aurora-sweep-reverse opacity-30" />

      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 opacity-70 bg-mesh" />

      {/* ── Floating orbs with parallax ── */}

      {/* Orb 1 — hero area, large warm gold glow */}
      <div
        className="absolute w-[700px] h-[700px] rounded-full blur-[100px] orb-float-slow"
        style={{
          background: 'radial-gradient(circle, rgba(253,183,25,0.12) 0%, rgba(253,183,25,0.04) 40%, transparent 70%)',
          top: `${-50 + scrollY * 0.04}px`,
          right: '-200px',
        }}
      />

      {/* Orb 2 — left side, deeper gold */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-[80px] orb-float-medium"
        style={{
          background: 'radial-gradient(circle, rgba(214,158,16,0.15) 0%, rgba(214,158,16,0.05) 40%, transparent 70%)',
          top: `${500 - scrollY * 0.06}px`,
          left: '-150px',
        }}
      />

      {/* Orb 3 — center right, bright gold */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full blur-[70px] orb-float-fast"
        style={{
          background: 'radial-gradient(circle, rgba(255,209,125,0.10) 0%, rgba(255,209,125,0.03) 40%, transparent 70%)',
          top: `${1200 - scrollY * 0.05}px`,
          right: '5%',
        }}
      />

      {/* Orb 4 — deep amber, lower left */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[90px] orb-float-slow"
        style={{
          background: 'radial-gradient(circle, rgba(176,131,16,0.12) 0%, rgba(176,131,16,0.03) 40%, transparent 70%)',
          top: `${2200 - scrollY * 0.03}px`,
          left: '-250px',
        }}
      />

      {/* Orb 5 — accent near testimonials */}
      <div
        className="absolute w-[450px] h-[450px] rounded-full blur-[80px] orb-float-medium"
        style={{
          background: 'radial-gradient(circle, rgba(253,183,25,0.13) 0%, rgba(253,183,25,0.04) 40%, transparent 70%)',
          top: `${3200 - scrollY * 0.04}px`,
          right: '-120px',
        }}
      />

      {/* Orb 6 — near CTA at bottom */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-[90px] orb-float-fast"
        style={{
          background: 'radial-gradient(circle, rgba(214,158,16,0.10) 0%, rgba(214,158,16,0.03) 40%, transparent 70%)',
          top: `${4400 - scrollY * 0.03}px`,
          left: '10%',
        }}
      />

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(253,183,25,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(253,183,25,0.15) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Noise texture overlay for depth */}
      <div className="absolute inset-0 opacity-[0.03] noise-texture" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,5,5,0.5)_100%)]" />
    </div>
  )
}
