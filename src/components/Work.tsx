import { useCallback, useEffect, useRef, useState } from 'react'
import { projectButtons, projects, videoLinks, videos, type Video } from '../data/portfolio'
import { ArrowUpRight, Play, SocialIcon } from './Icons'
import { Corners, Section, Tag, Tilt } from './ui'
import VideoModal from './VideoModal'

function VideoCard({ v, index, onOpen }: { v: Video; index: number; onOpen: (v: Video) => void }) {
  const ref = useRef<HTMLVideoElement>(null)
  const [preview, setPreview] = useState(false)
  // Hover preview only on devices with a mouse. Phones just show the still frame.
  const canPreview = () => window.matchMedia('(hover: hover) and (prefers-reduced-motion: no-preference)').matches
  const start = () => { if (canPreview()) setPreview(true) }
  const stop = () => setPreview(false)
  useEffect(() => { if (preview) ref.current?.play().catch(() => {}) }, [preview])

  return (
    <li className="min-w-0">
      <button type="button" onClick={() => onOpen(v)} onMouseEnter={start} onMouseLeave={stop} onFocus={start} onBlur={stop}
        className="vf group relative block aspect-[9/16] w-full overflow-hidden rounded-[20px] border border-line bg-panel text-left"
        aria-label={`Play video ${index + 1}`}>
        <img src={v.poster} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
        {preview && <video ref={ref} src={v.src} muted loop playsInline preload="auto" aria-hidden="true" tabIndex={-1} className="absolute inset-0 h-full w-full object-cover" />}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-transparent" />
        <Corners />
        <div className="absolute inset-x-0 top-0 flex items-center justify-between px-5 pt-5 font-mono text-[11px] tracking-[0.1em]">
          <span>CLIP {String(index + 1).padStart(2, '0')}</span><span className="text-mute">9:16</span>
        </div>
        <span className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-fg/40 bg-ink/40 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-accent group-hover:text-accent">
          <Play className="ml-0.5 h-5 w-5" />
        </span>
      </button>
    </li>
  )
}

const ext = (url: string) => (url.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})

function ProjectCard({ p, index }: { p: (typeof projects)[number]; index: number }) {
  const isPlaceholder = p.title === 'Project Title'
  return (
    <Tilt className="h-full" max={4}>
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-panel">
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-[19px] font-medium leading-snug">{p.title}</h3>
            <span className="shrink-0 font-mono text-[12px] text-mute">{String(index + 1).padStart(2, '0')}</span>
          </div>
          <p className="mt-2 text-[15px] leading-relaxed text-mute">{p.description}</p>
          {p.points && (
            <ul className="mt-4 space-y-2">
              {p.points.map((pt) => (
                <li key={pt.slice(0, 24)} className="flex gap-3 text-[14px] leading-relaxed text-fg/85">
                  <span className="mt-[10px] h-px w-3 shrink-0 bg-mute" aria-hidden="true" /><span>{pt}</span>
                </li>
              ))}
            </ul>
          )}
          <ul className="mt-5 flex flex-wrap gap-2">{p.tools.map((t, i) => <li key={t + i}><Tag>{t}</Tag></li>)}</ul>
          <div className="mt-auto flex flex-wrap gap-2 pt-6">
            {(isPlaceholder || p.detailsUrl !== '#') && (
              <a href={p.detailsUrl} {...ext(p.detailsUrl)} className="btn btn-primary btn-sm">{projectButtons.details}<ArrowUpRight /></a>
            )}
            {(isPlaceholder || p.codeUrl !== '#') && (
              <a href={p.codeUrl} {...ext(p.codeUrl)} className="btn btn-ghost btn-sm">{projectButtons.code}</a>
            )}
          </div>
        </div>
      </article>
    </Tilt>
  )
}

export default function Work() {
  const [active, setActive] = useState<Video | null>(null)
  const close = useCallback(() => setActive(null), [])

  return (
    <Section id="work" label="Portfolio" title="Video samples and selected work."
      intro="A few recent edits. Select a clip to watch it with sound, or hover on desktop to preview. The full library is on Google Drive.">
      <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {videos.map((v, i) => <VideoCard key={v.src} v={v} index={i} onOpen={setActive} />)}
      </ul>

      <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-line bg-panel p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[17px] font-medium">More videos</p>
          <p className="mt-1 text-[15px] text-mute">Reels, brand shoots and edits, all in one Google Drive folder.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <a href={videoLinks.drive} target="_blank" rel="noopener noreferrer" className="btn btn-primary"><SocialIcon name="drive" />View more on Drive<ArrowUpRight /></a>
          <a href={videoLinks.youtube.url} target="_blank" rel="noopener noreferrer" className="btn btn-ghost"><SocialIcon name="youtube" />{videoLinks.youtube.label}</a>
        </div>
      </div>

      <div id="projects" className="mt-20 scroll-mt-24">
        <div className="flex items-end justify-between gap-4">
          <h3 className="font-display text-[clamp(22px,2.4vw,30px)] font-light tracking-[-0.02em]">Projects</h3>
          <p className="font-mono text-[12px] text-mute">{String(projects.length).padStart(2, '0')} entries</p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => <ProjectCard key={i} p={p} index={i} />)}
        </div>
      </div>

      <VideoModal video={active} onClose={close} />
    </Section>
  )
}
