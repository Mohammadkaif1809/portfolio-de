/**
 * Personal links and contact details.
 *
 * Replace every YOUR_* value before sharing this site.
 * Search the repo for YOUR_ to find remaining placeholders.
 */
export const profile = {
  name: 'Mohammad Kaif',
  role: 'Data Engineer',
  shortRole: 'Data Engineering',
  tagline:
    'Building reliable data pipelines, analytics systems, and data-driven solutions.',
  email: 'mohammadkaif1809@gmail.com',
  githubUrl: 'https://github.com/Mohammadkaif1809?tab=repositories',
  linkedinUrl: 'https://www.linkedin.com/in/mohammadkaif18/',
  locationNote: 'Open to Data Engineering opportunities',
} as const

export function isPlaceholder(value: string): boolean {
  return value.includes('YOUR_')
}

export function externalHref(url: string): string | undefined {
  if (isPlaceholder(url)) return undefined
  return url
}

export function mailtoHref(email: string): string | undefined {
  if (isPlaceholder(email)) return undefined
  return `mailto:${email}`
}
