interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
}

const variants = {
  primary:
    'bg-gold-600 text-dark font-semibold hover:bg-gold-500 active:bg-gold-700 shadow-lg shadow-gold-600/20',
  secondary:
    'border-2 border-gold-600 text-gold-400 font-semibold hover:bg-gold-600/10 active:bg-gold-600/20',
  ghost:
    'text-slate-dim hover:text-slate font-medium underline underline-offset-4 decoration-gold-600/50 hover:decoration-gold-400',
}

const sizes = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-base rounded-lg',
  lg: 'px-8 py-4 text-lg rounded-xl',
}

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
