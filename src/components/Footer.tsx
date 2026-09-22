import { profile } from '../data/profile'
import { SocialLink } from './ui/SocialLink'

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="container-page flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-ink">
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p className="mt-1 text-xs text-muted">
            Data Engineering · SQL · Python · Spark
          </p>
        </div>
        <div className="flex items-center gap-4">
          <SocialLink href={'https://github.com/Mohammadkaif1809?tab=repositories'} label="GitHub" variant="text">
            GitHub
          </SocialLink>
          <SocialLink href={'https://www.linkedin.com/in/mohammadkaif18/'} label="LinkedIn" variant="text">
            LinkedIn
          </SocialLink>
        </div>
      </div>
    </footer>
  )
}
