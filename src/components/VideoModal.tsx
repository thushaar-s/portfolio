import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import type { Video } from '../data/portfolio'
import { videoLinks } from '../data/portfolio'
import { Close, Play } from './Icons'

/* Plays one video in a full-screen player.
   Mobile-safe: it starts from a tap, plays inline, and if the browser or host refuses to
   stream the file (some phones need byte-range support), it downloads the file and plays
   it from memory instead. */
export default function VideoModal({ video, onClose }: { video: Video | null; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const ref = useRef<HTMLVideoElement>(null)
  const [src, setSrc] = useState('')
  const [needsTap, setNeedsTap] = useState(false)
  const [failed, setFailed] = useState(false)
  const triedBlob = useRef(false)

  useEffect(() => {
    if (!video) return
    setSrc(video.src); setNeedsTap(false); setFailed(false); triedBlob.current = false
    const prev = document.activeElement as HTMLElement | null
    closeRef.current?.focus()
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      prev?.focus()
    }
  }, [video, onClose])

  // Second attempt: fetch the whole file and play it from a blob URL.
  const fallbackToBlob = async () => {
    if (!video || triedBlob.current) { setFailed(true); return }
    triedBlob.current = true
    try {
      const res = await fetch(video.src)
      if (!res.ok) throw new Error('bad status')
      setSrc(URL.createObjectURL(await res.blob()))
    } catch { setFailed(true) }
  }

  // If nothing has loaded after a few seconds, try the fallback.
  useEffect(() => {
    if (!video || !src) return
    const id = window.setTimeout(() => {
      const v = ref.current
      if (v && v.readyState === 0 && !triedBlob.current) void fallbackToBlob()
    }, 4000)
    return () => window.clearTimeout(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [video, src])

  useEffect(() => () => { if (src.startsWith('blob:')) URL.revokeObjectURL(src) }, [src])

  const tryPlay = () => {
    const v = ref.current
    if (!v) return
    v.play().then(() => setNeedsTap(false)).catch(() => setNeedsTap(true))
  }

  if (!video) return null
  return createPortal(
    <div role="dialog" aria-modal="true" aria-label="Video player" className="fixed inset-0 z-[100] grid place-items-center bg-ink/95 p-4 backdrop-blur-md" onClick={onClose}
      style={{ paddingTop: 'max(16px, env(safe-area-inset-top, 0px))', paddingBottom: 'max(16px, env(safe-area-inset-bottom, 0px))' }}>
      <div className="relative flex max-h-full w-full max-w-[420px] flex-col" onClick={(e) => e.stopPropagation()}>
        <div className="mb-3 flex items-center justify-end">
          <button ref={closeRef} type="button" onClick={onClose} aria-label="Close video" className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line bg-ink hover:border-fg">
            <Close />
          </button>
        </div>
        <div className="relative">
          <video ref={ref} key={src} src={src} poster={video.poster} controls autoPlay playsInline preload="auto"
            onLoadedData={tryPlay} onError={() => void fallbackToBlob()}
            className="max-h-[calc(100dvh-120px)] w-full rounded-2xl border border-line bg-black object-contain" />
          {needsTap && !failed && (
            <button type="button" onClick={tryPlay} aria-label="Play video" className="absolute inset-0 grid place-items-center rounded-2xl bg-ink/40">
              <span className="grid h-16 w-16 place-items-center rounded-full border border-fg/50 bg-ink/60"><Play className="ml-1 h-6 w-6" /></span>
            </button>
          )}
          {failed && (
            <div className="absolute inset-0 grid place-items-center rounded-2xl bg-ink/90 p-6 text-center">
              <div>
                <p className="text-[16px]">This video could not play on your device.</p>
                <a href={videoLinks.drive} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-5 inline-flex">Watch on Google Drive</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body,
  )
}
