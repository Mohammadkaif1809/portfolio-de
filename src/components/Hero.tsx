import { ArrowRight } from 'lucide-react'
import { profile } from '../data/profile'
import { GithubIcon, LinkedinIcon } from './ui/BrandIcons'
import { SocialLink } from './ui/SocialLink'
import { VideoIntro } from './VideoIntro'

export function Hero() {
  return (
    <section
      id="home"
      className="border-b border-line pt-24 pb-16 md:pt-28 md:pb-20"
    >
      <div className="container-page grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
        <div>
          <p className="font-mono text-xs tracking-[0.14em] text-accent uppercase">
            Data Engineering
          </p>
          <h1 className="mt-4 text-[2rem] leading-tight font-semibold tracking-tight text-ink sm:text-4xl md:text-[2.75rem]">
            Hi, I&apos;m {profile.name}.
          </h1>
          <p className="mt-3 text-lg font-medium text-ink">{profile.role}</p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
            {profile.tagline}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-[#1e4d8c] bg-[#1e4d8c] px-4 py-2 text-sm font-medium text-white transition-colors hover:border-[#163a6b] hover:bg-[#163a6b]"
            >
              View My Projects
              <ArrowRight size={16} />
            </a>
            <SocialLink href={'https://github.com/Mohammadkaif1809?tab=repositories'} label="GitHub">
              <GithubIcon size={16} />
              GitHub
            </SocialLink>
            <SocialLink href={'https://www.linkedin.com/in/mohammadkaif18/'} label="LinkedIn">
              <LinkedinIcon size={16} />
              LinkedIn
            </SocialLink>
          </div>
        </div>
        <VideoIntro />
      </div>
    </section>
  )
}
