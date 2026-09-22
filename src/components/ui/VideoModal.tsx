import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { Button } from './Button'

type VideoModalProps = {
  open: boolean
  onClose: () => void
  src: string
  title: string
}

export function VideoModal({ open, onClose, src, title }: VideoModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose()
        return
      }

      if (event.key !== 'Tab' || !dialogRef.current) return

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button, [href], video, [tabindex]:not([tabindex="-1"])',
      )
      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
      videoRef.current?.pause()
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/60"
        aria-label="Close video"
        onClick={onClose}
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="intro-video-title"
        className="relative z-10 w-full max-w-3xl overflow-hidden rounded-lg border border-line bg-surface shadow-lg"
      >
        <div className="flex items-center justify-between gap-4 border-b border-line px-4 py-3">
          <h2 id="intro-video-title" className="text-sm font-medium text-ink">
            {title}
          </h2>
          <Button
            ref={closeRef}
            variant="ghost"
            size="sm"
            aria-label="Close video player"
            className="h-9 w-9 px-0"
            onClick={onClose}
          >
            <X size={18} />
          </Button>
        </div>
        <div className="bg-black">
          <video
            ref={videoRef}
            className="aspect-video w-full"
            controls
            playsInline
            autoPlay
            src={src}
          >
            Your browser does not support the video tag. Add
            <code> /public/intro-video.mp4 </code>
            to play the introduction.
          </video>
        </div>
        <p className="px-4 py-3 text-xs text-muted">
          If the video does not load, add your file at
          <code className="mx-1 font-mono">/public/intro-video.mp4</code>.
        </p>
      </div>
    </div>
  )
}
