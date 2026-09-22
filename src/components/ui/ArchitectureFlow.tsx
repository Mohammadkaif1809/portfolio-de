type ArchitectureFlowProps = {
  steps: string[]
  label?: string
}

export function ArchitectureFlow({ steps, label }: ArchitectureFlowProps) {
  return (
    <div>
      {label ? (
        <p className="mb-2 font-mono text-xs tracking-wide text-muted uppercase">
          {label}
        </p>
      ) : null}
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-2">
        {steps.map((step, index) => (
          <li key={`${step}-${index}`} className="flex items-center gap-2">
            <span className="rounded-md border border-line bg-canvas px-2.5 py-1 font-mono text-xs text-ink">
              {step}
            </span>
            {index < steps.length - 1 ? (
              <span aria-hidden="true" className="text-muted">
                →
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  )
}
