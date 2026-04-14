import MainLayout from '../templates/MainLayout'
import Hero from '../organisms/Hero'
import About from '../organisms/About'
import Projects from '../organisms/Projects'
import Skills from '../organisms/Skills'
import Contact from '../organisms/Contact'

export default function Home({ dark, onToggleTheme }) {
  return (
    <MainLayout dark={dark} onToggleTheme={onToggleTheme}>
      <Hero />
      <About />
      {/* <Projects /> */}
      <Skills />
      <Contact />
    </MainLayout>
  )
}
