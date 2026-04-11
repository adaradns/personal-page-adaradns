export default function ContactLink({ href, icon: Icon, label, value }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 p-5 brutal-border brutal-shadow bg-white brutal-hover cursor-pointer group"
      aria-label={`${label}: ${value}`}
    >
      <div className="w-12 h-12 bg-brand-dark brutal-border flex items-center justify-center flex-shrink-0 group-hover:bg-brand-accent transition-colors duration-150">
        <Icon size={20} className="text-brand-accent group-hover:text-black transition-colors duration-150" aria-hidden="true" />
      </div>
      <div>
        <p className="font-heading font-700 text-sm uppercase tracking-wide text-gray-500">{label}</p>
        <p className="font-heading font-600 text-base">{value}</p>
      </div>
    </a>
  )
}
