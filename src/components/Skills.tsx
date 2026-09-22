import { skillCategories } from '../data/skills'
import { SectionHeading } from './ui/SectionHeading'

export function Skills() {
  return (
    <section id="skills" className="border-b border-line py-16 md:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Skills"
          title="Technical skills"
          description="Grouped by how I actually use them — not as percentage scores."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <article
              key={category.title}
              className="rounded-lg border border-line bg-surface p-5"
            >
              <h3 className="text-sm font-semibold text-ink">{category.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-line bg-canvas px-2.5 py-1 text-xs text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
