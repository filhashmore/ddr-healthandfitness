interface SectionLabelProps {
  children: React.ReactNode
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <span className="inline-block px-4 py-1.5 text-sm font-semibold tracking-wider uppercase text-gold-400 bg-gold-600/10 border border-gold-600/20 rounded-full mb-4">
      {children}
    </span>
  )
}
