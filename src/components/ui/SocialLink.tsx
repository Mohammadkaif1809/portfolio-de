import type { ReactNode } from 'react'
import { isPlaceholder } from '../../data/profile'

type SocialLinkProps = {
  href?: string
  label: string
  children: ReactNode
  variant?: 'icon' | 'button' | 'text'
}

export function SocialLink({
  href,
  label,
  children,
  variant = 'button',
}: SocialLinkProps) {
  const placeholder = !href || isPlaceholder(href)
  const className =
    variant === 'icon'
      ? 'inline-flex h-9 w-9 items-center justify-center rounded-md text-ink transition-colors hover:bg-accent-soft'
      : variant === 'text'
        ? 'text-sm text-muted underline-offset-4 transition-colors hover:text-ink hover:underline'
        : 'inline-flex items-center justify-center gap-2 rounded-md border border-line bg-surface px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-ink/30 hover:bg-canvas'

  if (placeholder) {
    return (
      <span
        className={`${className} cursor-not-allowed opacity-70`}
        title="Replace this URL in src/data/profile.ts or src/data/projects.ts"
        aria-label={`${label} (add your URL in the data files)`}
      >
        {children}
      </span>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={className}
    >
      {children}
    </a>
  )
}
