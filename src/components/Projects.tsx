import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { SectionHeading } from './ui/SectionHeading'

export function Projects() {
  return (
    <section id="projects" className="border-b border-line py-16 md:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Projects"
          title="Selected engineering work"
          description="Pipeline-oriented projects focused on building practical data workflows. More projects are available on my GitHub and will be added here as they are completed."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
