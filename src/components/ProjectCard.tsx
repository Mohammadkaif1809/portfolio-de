import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../data/projects'
import { ArchitectureFlow } from './ui/ArchitectureFlow'
import { GithubIcon } from './ui/BrandIcons'
import { SocialLink } from './ui/SocialLink'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-line bg-surface p-6 transition-shadow hover:shadow-[0_1px_8px_rgba(0,0,0,0.06)]">
      {project.imageSrc ? (
        <img
          src={project.imageSrc}
          alt={project.imageAlt ?? `${project.name} architecture or screenshot`}
          className="mb-5 aspect-[16/8] w-full rounded-md border border-line object-cover"
        />
      ) : null}
      <h3 className="text-lg font-semibold tracking-tight text-ink">
        {project.name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      <div className="mt-5">
        <p className="font-mono text-xs tracking-wide text-muted uppercase">
          Problem
        </p>
        <p className="mt-1.5 text-sm leading-relaxed text-ink">
          {project.problem}
        </p>
      </div>

      <div className="mt-5">
        <p className="font-mono text-xs tracking-wide text-muted uppercase">
          What I built
        </p>
        <ul className="mt-2 space-y-1.5">
          {project.built.map((item) => (
            <li key={item} className="text-sm text-ink before:mr-2 before:text-muted before:content-['–']">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5">
        <p className="mb-2 font-mono text-xs tracking-wide text-muted uppercase">
          Technologies
        </p>
        <p className="text-sm text-ink">{project.technologies.join(' · ')}</p>
      </div>

      <div className="mt-5">
        <ArchitectureFlow steps={project.flow} label="Pipeline" />
      </div>

      <div className="mt-5">
        <p className="mb-2 font-mono text-xs tracking-wide text-muted uppercase">
          Concepts
        </p>
        <ul className="flex flex-wrap gap-2">
          {project.concepts.map((concept) => (
            <li
              key={concept}
              className="rounded-md border border-line bg-canvas px-2.5 py-1 text-xs text-ink"
            >
              {concept}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <SocialLink href={project.githubUrl} label={`${project.name} on GitHub`}>
          <GithubIcon size={16} />
          View GitHub
        </SocialLink>
        {project.demoUrl ? (
          <SocialLink href={project.demoUrl} label={`${project.name} live demo`}>
            Live demo
            <ArrowUpRight size={16} />
          </SocialLink>
        ) : null}
      </div>
    </article>
  )
}
