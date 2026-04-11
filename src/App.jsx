import useTheme from './hooks/useTheme'
import Home from './pages/Home'

export default function App() {
  const { dark, toggle } = useTheme()
  return <Home dark={dark} onToggleTheme={toggle} />
}
