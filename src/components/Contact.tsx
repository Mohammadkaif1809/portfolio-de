import { Mail } from 'lucide-react'
import {  mailtoHref, profile } from '../data/profile'
import { GithubIcon, LinkedinIcon } from './ui/BrandIcons'
import { SectionHeading } from './ui/SectionHeading'
import { SocialLink } from './ui/SocialLink'

export function Contact() {
  const emailHref = mailtoHref(profile.email)

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Contact"
          title="Let's connect."
          description="I'm interested in Data Engineering opportunities, projects, and conversations around data."
        />
        <div className="flex flex-wrap gap-3">
          {emailHref ? (
            <a
              href={'mailto:mohammadkaif1809@gmail.com'}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-[#1e4d8c] bg-[#1e4d8c] px-4 py-2 text-sm font-medium text-white transition-colors hover:border-[#163a6b] hover:bg-[#163a6b]"
            >
              <Mail size={16} />
              Email Me
            </a>
          ) : (
            <span
              className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-md border border-[#1e4d8c] bg-[#1e4d8c] px-4 py-2 text-sm font-medium text-white opacity-70"
              title="Set YOUR_EMAIL in src/data/profile.ts"
            >
              <Mail size={16} />
              Email Me
            </span>
          )}
          <SocialLink href={'https://www.linkedin.com/in/mohammadkaif18/'} label="LinkedIn">
            <LinkedinIcon size={16} />
            LinkedIn
          </SocialLink>
          <SocialLink href={'https://github.com/Mohammadkaif1809?tab=repositories'} label="GitHub">
            <GithubIcon size={16} />
            GitHub
          </SocialLink>
        </div>
        
      </div>
    </section>
  )
}
