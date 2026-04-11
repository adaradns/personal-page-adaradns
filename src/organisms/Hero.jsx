import { ArrowDown } from 'lucide-react'
import Button from '../atoms/Button'
import TerminalBlock from '../molecules/TerminalBlock'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center pt-16 section-padding bg-white"
      aria-label="Seccion de inicio"
    >
      <div className="container-max w-full">
        <div className="max-w-4xl">
          <div className="inline-block bg-brand-accent brutal-border brutal-shadow-sm px-4 py-1 mb-6">
            <span className="font-heading font-700 text-sm uppercase tracking-widest text-black">
              Arquitecta de Software
            </span>
          </div>

          <h1 className="font-heading font-700 text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase leading-none tracking-tighter text-black mb-6">
            Hola,<br />
            <span className="text-brand-dark">soy Adara</span>
          </h1>

          <div className="mb-10">
            <TerminalBlock />
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <Button href="#proyectos" variant="primary" size="lg">
              Ver Proyectos
            </Button>
            <Button href="#contacto" variant="secondary" size="lg">
              Contactame
            </Button>
          </div>

          <div className="mt-16 flex items-center gap-3">
            <ArrowDown
              size={20}
              className="text-brand-dark animate-bounce"
              aria-hidden="true"
            />
            <span className="font-heading text-sm uppercase tracking-widest text-gray-500">
              Scroll para explorar
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
