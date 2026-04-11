export default function Tag({ children, className = '' }) {
  return (
    <span
      className={`inline-block px-3 py-1 text-sm font-heading font-600 text-white brutal-border brutal-shadow-sm ${className}`}
    >
      {children}
    </span>
  )
}
