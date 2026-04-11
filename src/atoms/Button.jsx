const variants = {
  primary: 'bg-brand-accent text-black hover:bg-brand-dark hover:text-brand-accent',
  secondary: 'bg-brand-dark text-brand-accent hover:bg-black',
  outline: 'bg-transparent text-black hover:bg-brand-dark hover:text-white',
  ghost: 'bg-white text-black hover:bg-brand-accent',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  onClick,
  disabled = false,
  className = '',
  type = 'button',
  'aria-label': ariaLabel,
}) {
  const base =
    'inline-flex items-center gap-2 font-heading font-700 brutal-border brutal-shadow brutal-hover cursor-pointer transition-colors duration-150 select-none'
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''} ${className}`

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={classes}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}
