export default function SectionTitle({ children, subtitle, accent = false, className = '' }) {
  return (
    <div className={`mb-12 ${className}`}>
      <h2
        className={`font-heading text-4xl md:text-5xl font-700 uppercase leading-none tracking-tight ${
          accent ? 'text-brand-accent' : 'text-black dark:text-white'
        }`}
      >
        {children}
      </h2>
      {subtitle && (
        <p className="mt-3 text-lg font-body text-gray-600 max-w-xl">{subtitle}</p>
      )}
    </div>
  )
}
