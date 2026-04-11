import SectionTitle from '../atoms/SectionTitle'
import ProjectCard from '../molecules/ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="section-padding bg-brand-accent"
      aria-label="Seccion de proyectos destacados"
    >
      <div className="container-max">
        <div className="brutal-border brutal-shadow bg-white inline-block px-4 py-1 mb-6">
          <span className="font-heading font-700 text-sm uppercase tracking-widest">
            Portfolio
          </span>
        </div>
        <SectionTitle className="text-black">
          PROYECTOS<br />DESTACADOS
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
