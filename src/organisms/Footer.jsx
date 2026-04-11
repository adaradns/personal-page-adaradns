import Logo from '../atoms/Logo'

function YoutubeIcon({ size = 20, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

function InstagramIcon({ size = 20, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  )
}

function HashnodeIcon({ size = 20, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 337 337"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M168.5 0C75.426 0 0 75.426 0 168.5S75.426 337 168.5 337 337 261.574 337 168.5 261.574 0 168.5 0zm-7.8 97.3l80.6 80.6a11.09 11.09 0 0 1 0 15.7l-80.6 80.6a11.09 11.09 0 0 1-15.7 0l-80.6-80.6a11.09 11.09 0 0 1 0-15.7l80.6-80.6a11.09 11.09 0 0 1 15.7 0z"
      />
    </svg>
  )
}

const socialLinks = [
  {
    href: 'https://youtube.com/@codeaseguro',
    icon: YoutubeIcon,
    label: 'Canal de YouTube: Codea Seguro',
  },
  {
    href: 'https://instagram.com/codeaseguro',
    icon: InstagramIcon,
    label: 'Instagram de Codea Seguro',
  },
  {
    href: 'https://codeaseguro.hashnode.dev/',
    icon: HashnodeIcon,
    label: 'Blog en Hashnode de Codea Seguro',
  },
]

export default function Footer() {
  return (
    <footer className="bg-black brutal-border border-b-0 border-l-0 border-r-0">
      <div className="container-max px-4 md:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Logo />
            <p className="font-body text-sm text-gray-400 mt-1">
              Arquitecta de Software & Creadora de Contenido
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 brutal-border border-gray-600 bg-black text-gray-400 hover:bg-brand-accent hover:text-black hover:border-brand-accent flex items-center justify-center transition-colors duration-150 cursor-pointer"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="font-body text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Adara Denis. Todos los derechos reservados.
          </p>
          <p className="font-body text-xs text-gray-600">
            Hecho con React + Vite + TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  )
}
