import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle({ dark, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="brutal-border brutal-shadow-sm p-2 cursor-pointer bg-white dark:bg-night-card hover:bg-brand-accent dark:hover:bg-brand-accent transition-colors duration-150"
      aria-label={dark ? 'Activar modo claro' : 'Activar modo oscuro'}
    >
      {dark
        ? <Sun size={18} className="text-brand-accent" aria-hidden="true" />
        : <Moon size={18} className="text-brand-dark" aria-hidden="true" />
      }
    </button>
  )
}
