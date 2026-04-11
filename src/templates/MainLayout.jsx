import Navbar from '../organisms/Navbar'
import Footer from '../organisms/Footer'

export default function MainLayout({ children, dark, onToggleTheme }) {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-night-bg transition-colors duration-200">
      <Navbar dark={dark} onToggleTheme={onToggleTheme} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
