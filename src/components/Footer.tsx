import { Instagram, Mail, Phone, MapPin } from 'lucide-react'
import { siteConfig } from '../config/site-config'

export function Footer() {
  const { footer, contact, social, nav } = siteConfig

  return (
    <footer className="px-6 md:px-12 py-12 border-t border-dark-lighter">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-lg font-bold text-slate mb-2">
              <span className="text-gold-500">DDR</span> Health & Fitness
            </h3>
            <p className="text-sm text-slate-muted mb-4">{footer.tagline}</p>
            <div className="flex items-center gap-2 text-sm text-slate-muted">
              <MapPin size={14} className="text-gold-600 shrink-0" />
              {contact.location}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-slate uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {nav.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-muted hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-slate uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={contact.phoneLink}
                  className="flex items-center gap-2 text-sm text-slate-muted hover:text-gold-400 transition-colors"
                >
                  <Phone size={14} className="text-gold-600 shrink-0" />
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={contact.emailLink}
                  className="flex items-center gap-2 text-sm text-slate-muted hover:text-gold-400 transition-colors break-all"
                >
                  <Mail size={14} className="text-gold-600 shrink-0" />
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-slate uppercase tracking-wider mb-4">
              Follow Along
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={social.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-muted hover:text-gold-400 transition-colors"
                >
                  <Instagram size={14} className="text-gold-600 shrink-0" />
                  {social.instagram.handle}
                </a>
              </li>
              <li>
                <a
                  href={social.instagramCoaching.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-muted hover:text-gold-400 transition-colors"
                >
                  <Instagram size={14} className="text-gold-600 shrink-0" />
                  {social.instagramCoaching.handle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-dark-lighter flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-muted">{footer.copyright}</p>
          <div className="flex items-center gap-6">
            {footer.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-slate-muted hover:text-gold-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-slate-muted/60 mt-6">{footer.disclaimer}</p>
      </div>
    </footer>
  )
}
