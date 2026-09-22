import { projects } from '../data/projects'
import { GithubIcon } from './ui/BrandIcons'
import { SectionHeading } from './ui/SectionHeading'
import { SocialLink } from './ui/SocialLink'

export function GitHubSection() {
  return (
    <section id="github" className="border-b border-line py-16 md:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="GitHub"
          title="Most of my learning happens by building."
          description="Repositories are the best place to see how I structure pipelines, transformations, and SQL — not a dashboard of fabricated stats."
        />
        <div className="rounded-lg border border-line bg-surface p-6 md:p-8">
          <p className="max-w-2xl text-sm leading-relaxed text-muted">
            On GitHub you can expect notebooks and scripts around API ingestion,
            Pandas cleaning, MySQL loads, Spark / PySpark transformations, and
            Databricks workflows. Links below point to the projects listed on
            this site. more projects are available on my GitHub profile and will be updated here soon.
          </p>
          <div className="mt-6">
            <SocialLink href={'https://github.com/Mohammadkaif1809?tab=repositories'} label="Open GitHub profile">
              <GithubIcon size={16} />
              View GitHub
            </SocialLink>
          </div>
          <ul className="mt-6 divide-y divide-line border-t border-line">
            {projects.map((project) => (
              <li
                key={project.id}
                className="flex flex-col gap-2 py-3 sm:flex-row sm:items-center sm:justify-between"
              >
                <span className="text-sm text-ink">{project.name}</span>
                <SocialLink
                  href={'https://github.com/Mohammadkaif1809/Data-engineering-projects'}
                  label={`${project.name} repository`}
                  variant="text"
                >
                  Repository
                </SocialLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
