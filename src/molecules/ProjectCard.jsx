import { ExternalLink, Github } from 'lucide-react'
import Button from '../atoms/Button'

export default function ProjectCard({ title, description, image, demoUrl, githubUrl, stack = [] }) {
  return (
    <article className="brutal-border brutal-shadow bg-white dark:bg-night-card flex flex-col h-full brutal-hover">
      <div className="w-full h-48 bg-brand-mid brutal-border border-b-0 overflow-hidden flex items-center justify-center relative">
        {image ? (
          <img
            src={image}
            alt={`Captura de pantalla de ${title}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-brand-dark flex items-center justify-center">
            <span className="font-heading text-brand-accent text-5xl font-700">
              {title.charAt(0).toUpperCase()}
            </span>
          </div>
        )}
        {stack.length > 0 && (
          <div className="absolute bottom-2 left-2 flex flex-wrap gap-1">
            {stack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs font-700 bg-brand-accent text-black px-2 py-0.5 border-2 border-black"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-1 gap-4">
        <h3 className="font-heading font-700 text-xl uppercase dark:text-white">{title}</h3>
        <p className="font-body text-gray-700 dark:text-gray-300 text-sm leading-relaxed flex-1">{description}</p>
        <div className="flex gap-3 flex-wrap">
          <Button
            href={demoUrl}
            external={demoUrl !== '#'}
            variant="primary"
            size="sm"
            aria-label={`Ver demo de ${title}`}
          >
            <ExternalLink size={14} aria-hidden="true" />
            Ver Demo
          </Button>
          <Button
            href={githubUrl}
            external
            variant="outline"
            size="sm"
            aria-label={`Ver codigo de ${title} en GitHub`}
          >
            <Github size={14} aria-hidden="true" />
            GitHub
          </Button>
        </div>
      </div>
    </article>
  )
}
