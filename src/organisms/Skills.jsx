import SectionTitle from '../atoms/SectionTitle'
import SkillCategory from '../molecules/SkillCategory'
import { skillCategories } from '../data/skills'

export default function Skills() {
  return (
    <section
      id="habilidades"
      className="section-padding bg-white dark:bg-night-bg"
      aria-label="Seccion de habilidades"
    >
      <div className="container-max">
        <div className="inline-block bg-brand-dark brutal-border brutal-shadow px-4 py-1 mb-6">
          <span className="font-heading font-700 text-sm uppercase tracking-widest text-brand-accent">
            Stack Tecnologico
          </span>
        </div>
        <SectionTitle>
          HABILIDADES
        </SectionTitle>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <SkillCategory key={category.id} {...category} />
          ))}
        </div>
      </div>
    </section>
  )
}
