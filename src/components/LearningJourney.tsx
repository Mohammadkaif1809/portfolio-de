import { journeyItems } from '../data/journey'
import { SectionHeading } from './ui/SectionHeading'

export function LearningJourney() {
  return (
    <section id="journey" className="border-b border-line py-16 md:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Learning"
          title="Learning journey"
          description="A practical path through data engineering, learning each concept by building real projects."
        />
        <ol className="relative max-w-2xl border-l border-line pl-6 md:pl-8">
          {journeyItems.map((item, index) => (
            <li key={item.title} className="relative pb-8 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute top-1.5 -left-[1.55rem] h-2.5 w-2.5 rounded-full border border-accent bg-canvas md:-left-[2.05rem]"
              />
              <p className="font-mono text-xs text-muted">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-1 text-base font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                {item.detail}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
