export const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    color: 'bg-brand-dark',
    skills: ['TypeScript', 'React', 'NextJS', 'TailwindCSS', 'MUI'],
  },
  {
    id: 'backend',
    label: 'Backend',
    color: 'bg-brand-mid',
    skills: ['NodeJS', 'Java', 'NestJS', 'Quarkus'],
  },
  {
    id: 'databases',
    label: 'Base de Datos',
    color: 'bg-brand-light',
    skills: ['MongoDB', 'PostgreSQL', 'Firestore', 'SQLite', 'MySQL'],
  },
  {
    id: 'infrastructure',
    label: 'Infraestructura',
    color: 'bg-brand-darkest',
    skills: ['Docker', 'Google Cloud Platform', 'Vercel', 'Apigee', 'NGINX', 'CI/CD', 'Kubernetes'],
  },
  {
    id: 'tools',
    label: 'Herramientas',
    color: 'bg-brand-dark',
    skills: ['Git', 'VSCode', 'IntelliJ', 'GitHub', 'GitLab', 'Postman'],
    subcategories: [
      {
        label: 'IA',
        color: 'bg-brand-mid',
        skills: ['Claude Code', 'Manejo de Skills', 'Integraciones con LLMs'],
      },
    ],
  },
  {
    id: 'methodologies',
    label: 'Metodologias',
    color: 'bg-brand-mid',
    skills: ['Agile', 'Scrum', 'Design Thinking'],
  },
]
