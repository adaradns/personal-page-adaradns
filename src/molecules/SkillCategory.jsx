import { ChevronRight } from 'lucide-react'
import Tag from '../atoms/Tag'

export default function SkillCategory({ label, skills, color, subcategories = [] }) {
  return (
    <div className="brutal-border brutal-shadow bg-white p-5 brutal-hover">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b-2 border-black">
        <ChevronRight size={18} className="text-brand-accent flex-shrink-0" aria-hidden="true" />
        <h3 className="font-heading font-700 text-base uppercase tracking-wide">{label}</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Tag key={skill} className={color}>
            {skill}
          </Tag>
        ))}
      </div>

      {subcategories.map((sub) => (
        <div key={sub.label} className="mt-4 pt-4 border-t-2 border-dashed border-gray-200">
          <div className="flex items-center gap-1 mb-2">
            <ChevronRight size={14} className="text-brand-mid flex-shrink-0" aria-hidden="true" />
            <span className="font-heading font-700 text-xs uppercase tracking-wide text-gray-500">
              {sub.label}
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {sub.skills.map((skill) => (
              <Tag key={skill} className={sub.color}>
                {skill}
              </Tag>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
