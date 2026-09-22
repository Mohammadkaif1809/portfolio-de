import { useState } from 'react'
import profileImage from '../assets/profile.jpeg'

export function VideoIntro() {
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <div className="group relative w-full max-w-[420px]">
      {/* Soft background glow */}
      <div className="absolute -inset-2 rounded-3xl bg-accent/10 opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />

      {/* Image Card */}
      <div className="relative overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl">
        {!imgFailed ? (
          <img
            src={profileImage}
            alt="Mohammad Kaif, Data Engineer, professional profile photo"
            className="aspect-[4/5] h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div className="flex aspect-[4/5] w-full flex-col items-center justify-center bg-accent-soft text-center">
            <p className="text-lg font-semibold text-ink">
              Mohammad Kaif
            </p>
            <p className="mt-1 text-sm text-muted">
              Data Engineer
            </p>
          </div>
        )}

        {/* Subtle image overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70" />

        {/* Bottom information */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-xs font-medium text-white">
              Data Engineer
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}