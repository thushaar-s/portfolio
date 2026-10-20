import { lazy, Suspense, useEffect, useState } from 'react'
import { profile, stats } from '../data/portfolio'
import { ArrowDown, ArrowUpRight } from './Icons'
import ResumeButton from './ResumeButton'
import { Corners } from './ui'

const HeroScene = lazy(() => import('./HeroScene'))

/* Running camera-style timecode shown on the photo frame. */
function Timecode() {
  const [t, setT] = useState(0)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const start = performance.now()
    const id = window.setInterval(() => setT(performance.now() - start), 1000 / 30)
    return () => window.clearInterval(id)
  }, [])
  const s = Math.floor(t / 1000)
  const f = Math.floor((t % 1000) / (1000 / 30))
  const p = (n: number) => String(n).padStart(2, '0')
  return <span className="tabular-nums">{`${p(Math.floor(s / 3600))}:${p(Math.floor(s / 60) % 60)}:${p(s % 60)}:${p(f)}`}</span>
}

export default function Hero() {
  return (
    <section id="top" aria-label="Introduction" className="relative z-[2] overflow-hidden">
      <div className="gutter mx-auto grid max-w-page items-center gap-12 pb-16 pt-[calc(68px+env(safe-area-inset-top,0px)+48px)] md:pb-20 lg:grid-cols-12 lg:gap-6 lg:pt-[calc(68px+env(safe-area-inset-top,0px)+72px)]">
        <div className="relative z-[1] min-w-0 lg:col-span-7">
          <p className="eyebrow rise flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="flex items-center gap-2 text-fg"><span className="rec-dot inline-block h-2 w-2 rounded-full bg-rec" />{profile.name}</span>
            <span aria-hidden="true">/</span>
            <span>{profile.location}</span>
          </p>

          <h1 className="rise mt-6 font-display text-[clamp(38px,6.2vw,86px)] font-light leading-[1.02] tracking-[-0.035em]" style={{ animationDelay: '.08s' }}>
            <span className="sr-only">{profile.name}, {profile.title}. </span>
            {profile.headline.map((line, i) => (
              <span key={line} className={`block ${i === 1 ? 'text-mute' : ''}`}>{line}</span>
            ))}
          </h1>

          <p className="rise mt-6 font-mono text-[13px] uppercase tracking-[0.12em] text-accent" style={{ animationDelay: '.16s' }}>{profile.title}</p>

          <p className="rise mt-5 max-w-[56ch] text-[17px] leading-relaxed text-mute md:text-[18px]" style={{ animationDelay: '.22s' }}>{profile.intro}</p>

          <div className="rise mt-9 flex flex-wrap gap-3" style={{ animationDelay: '.3s' }}>
            <a href="#work" className="btn btn-primary">View Portfolio <ArrowDown /></a>
            <ResumeButton className="btn btn-ghost">Download Resume <ArrowUpRight /></ResumeButton>
            <a href="#contact" className="btn btn-ghost">Contact Me</a>
          </div>

          <p className="rise mt-8 flex items-center gap-2 text-[14px] text-mute" style={{ animationDelay: '.36s' }}>
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />{profile.availability}
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[460px] lg:col-span-5 lg:max-w-none">
          <Suspense fallback={null}><HeroScene className="pointer-events-none absolute -inset-[18%] z-0 sm:-inset-[22%]" /></Suspense>
          <figure className="vf rise relative z-[1] mx-auto aspect-[4/5] w-[70%] max-w-full lg:ml-auto lg:mr-[4%] overflow-hidden rounded-[22px] border border-line bg-panel shadow-[0_40px_120px_-40px_rgba(104,210,255,.35)]" style={{ animationDelay: '.2s' }}>
            <img src={profile.photo} alt={profile.photoAlt} className="h-full w-full object-cover object-top grayscale-[15%]" width={900} height={1367} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/40" />
            <Corners />
            <figcaption className="absolute inset-x-0 top-0 flex items-center justify-between px-5 pt-5 font-mono text-[11px] tracking-[0.1em] text-fg/90">
              <span className="flex items-center gap-1.5 rounded-full bg-ink/70 px-2.5 py-1 backdrop-blur-sm"><span className="rec-dot inline-block h-1.5 w-1.5 rounded-full bg-rec" />REC</span>
              <span className="rounded-full bg-ink/70 px-2.5 py-1 backdrop-blur-sm"><Timecode /></span>
            </figcaption>
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between px-5 pb-5 font-mono text-[11px] tracking-[0.1em] text-fg/90">
              <span>CAM A</span><span>DXB</span>
            </div>
          </figure>
        </div>
      </div>

      {/* Results strip */}
      <div className="marquee-wrap relative border-y border-line bg-panel/60" aria-label="Selected results">
        <ul className="sr-only">{stats.map((s) => <li key={s.label}>{s.value} {s.label}</li>)}</ul>
        <div className="overflow-hidden py-5" aria-hidden="true">
          <div className="marquee flex w-max">
            {[0, 1].map((k) => (
              <div key={k} className="flex shrink-0">
                {stats.map((s) => (
                  <div key={s.label + k} className="flex items-baseline gap-3 px-8">
                    <span className="font-display text-[22px] font-light tracking-[-0.02em] text-fg">{s.value}</span>
                    <span className="whitespace-nowrap text-[14px] text-mute">{s.label}</span>
                    <span className="ml-8 text-line">✦</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
