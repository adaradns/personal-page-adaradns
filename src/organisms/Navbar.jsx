import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from '../atoms/Logo'
import NavLink from '../molecules/NavLink'
import ThemeToggle from '../atoms/ThemeToggle'

const navItems = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sobre-mi', label: 'Sobre Mi' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar({ dark, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white dark:bg-night-bg brutal-border dark:border-gray-700 border-t-0 border-l-0 border-r-0 transition-shadow duration-150 ${
        scrolled ? 'shadow-brutal' : ''
      }`}
    >
      <nav
        className="container-max flex items-center justify-between h-16 px-4 md:px-8"
        aria-label="Navegacion principal"
      >
        <Logo />

        <ul className="hidden md:flex items-center gap-8" role="list">
          {navItems.map((item) => (
            <li key={item.href}>
              <NavLink href={item.href}>{item.label}</NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle dark={dark} onToggle={onToggleTheme} />
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="md:hidden brutal-border brutal-shadow-sm p-2 cursor-pointer bg-white dark:bg-night-card hover:bg-brand-accent transition-colors duration-150"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Cerrar menu' : 'Abrir menu'}
          >
            {open
              ? <X size={20} className="dark:text-white" aria-hidden="true" />
              : <Menu size={20} className="dark:text-white" aria-hidden="true" />
            }
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="md:hidden bg-white dark:bg-night-bg brutal-border dark:border-gray-700 border-t border-l-0 border-r-0"
        >
          <ul className="flex flex-col py-4 px-4 gap-4" role="list">
            {navItems.map((item) => (
              <li key={item.href}>
                <NavLink href={item.href} onClick={closeMenu}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
