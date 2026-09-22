import { currentlyLearning, currentlyUsing } from '../data/skills'
import { profile } from '../data/profile'
import { SectionHeading } from './ui/SectionHeading'

export function About() {
  return (
    <section id="about" className="border-b border-line py-16 md:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="About"
          title="Background"
          description="A concise look at how I approach data engineering work."
        />
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
          <div className="max-w-2xl space-y-4 text-base leading-relaxed text-muted">
            <p>
              I&apos;m {profile.name}, a Data Engineer focused on moving data from
              source systems into a shape that can be queried, trusted, and used
              for analysis.
            </p>
            <p>
              My work centers on pipelines: extracting data from APIs, cleaning
              and transforming it with Python and Pandas, and loading it into
              databases such as MySQL. I use SQL throughout — for inspection,
              transformation logic, and analysis after the load.
            </p>
            <p>
              I also work with Apache Spark, PySpark, and Databricks for
              processing workflows that need a defined schema and repeatable
              transformations. I am continuing to learn cloud platforms and
              more advanced data engineering patterns through projects rather
              than treating any one tool as finished knowledge.
            </p>
          </div>
          <aside className="space-y-4">
            <div className="rounded-lg border border-line bg-surface p-5">
              <h3 className="text-sm font-semibold text-ink">What I work with</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {currentlyUsing.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-line bg-canvas px-2.5 py-1 text-xs text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-line bg-surface p-5">
              <h3 className="text-sm font-semibold text-ink">Currently learning</h3>
              <ul className="mt-3 space-y-2">
                {currentlyLearning.map((item) => (
                  <li
                    key={item}
                    className="border-l-2 border-accent pl-3 text-sm text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
