import MainLayout from '../templates/MainLayout'
import Hero from '../organisms/Hero'
import About from '../organisms/About'
import Projects from '../organisms/Projects'
import Skills from '../organisms/Skills'
import Contact from '../organisms/Contact'

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </MainLayout>
  )
}
