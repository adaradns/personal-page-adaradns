export default function About() {
  return (
    <section
      id="sobre-mi"
      className="section-padding bg-brand-dark"
      aria-label="Seccion sobre mi"
    >
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 brutal-border border-white brutal-shadow-white bg-brand-mid overflow-hidden flex items-center justify-center">
                <img
                  src="/logo-adara.png"
                  alt="Adara Denis"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-accent brutal-border border-white -z-10" />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-block bg-brand-accent brutal-border border-white brutal-shadow-white px-4 py-1 mb-6">
              <span className="font-heading font-700 text-sm uppercase tracking-widest text-black">
                Mi Historia
              </span>
            </div>
            <h2 className="font-heading font-700 text-4xl md:text-5xl uppercase leading-none text-white mb-8">
              CONOCEME<br />
              <span className="text-brand-accent">MEJOR</span>
            </h2>

            <div className="brutal-border border-white bg-white/10 p-6">
              <p className="font-body text-white leading-relaxed text-base">
                Hace muchisimo tiempo que me encanta todo lo relacionado con la informatica, pero
                hace aproximadamente 9 años que me dedico profesionalmente a desarrollar software.
                Durante mi experiencia aprendi y rompi muchas veces codigo, mi lema es:{' '}
                <strong className="text-brand-accent">
                  "Que hay que romper o desarmar para reconstruir y aprender mejor"
                </strong>
                , gracias a eso pude enfrentar el desafio de ser Arquitecta de Software, mi rol
                actual.
              </p>
              <br />
              <p className="font-body text-white leading-relaxed text-base">
                Como me encanta aprender, tambien me gusta mucho trasmitir mis conocimientos,
                siento que aprendo mucho haciendolo y que de alguna manera aporto a otra persona,
                asi que tambien soy profe cuando me surge la posibilidad, y como descubri esto de
                que me gusta mucho mostrar lo que se e interactuar desde noviembre del 2025 soy
                creadora de contenido en el canal de YouTube{' '}
                <a
                  href="https://youtube.com/@codeaseguro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-accent underline hover:no-underline font-600"
                >
                  Codea Seguro
                </a>
                , y eso me encanta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
