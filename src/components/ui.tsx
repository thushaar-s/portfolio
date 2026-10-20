import { useRef, type ReactNode, type PointerEvent } from 'react'

/* Shared building blocks used by every section. */

export function Section({ id, label, title, intro, children, className = '' }: {
  id: string; label: string; title: ReactNode; intro?: ReactNode; children: ReactNode; className?: string
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`relative z-[2] border-t border-line ${className}`}>
      <div className="gutter mx-auto max-w-page py-20 md:py-28">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-3">
            <p className="eyebrow flex items-center gap-2"><span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />{label}</p>
          </div>
          <div className="min-w-0 lg:col-span-9">
            <h2 id={`${id}-title`} className="font-display text-[clamp(28px,3.6vw,48px)] font-light leading-[1.1] tracking-[-0.02em]">{title}</h2>
            {intro && <p className="mt-5 max-w-[62ch] text-[17px] leading-relaxed text-mute">{intro}</p>}
          </div>
        </div>
        <div className="mt-12 md:mt-16">{children}</div>
      </div>
    </section>
  )
}

export function Corners() {
  return (<><span className="vf-c tl" /><span className="vf-c tr" /><span className="vf-c bl" /><span className="vf-c br" /></>)
}

/* Gentle 3D tilt that follows the pointer. Off for touch and reduced motion. */
export function Tilt({ children, className = '', max = 6 }: { children: ReactNode; className?: string; max?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const move = (e: PointerEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el || e.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `perspective(900px) rotateX(${-y * max}deg) rotateY(${x * max}deg) translateZ(0)`
    el.style.setProperty('--gx', `${(x + 0.5) * 100}%`)
    el.style.setProperty('--gy', `${(y + 0.5) * 100}%`)
  }
  const leave = () => { if (ref.current) ref.current.style.transform = '' }
  return (
    <div ref={ref} onPointerMove={move} onPointerLeave={leave}
      className={`transition-transform duration-300 ease-out will-change-transform [transform-style:preserve-3d] ${className}`}>
      {children}
    </div>
  )
}

export function Tag({ children }: { children: ReactNode }) {
  return <span className="inline-flex items-center rounded-full border border-line px-3 py-1 font-mono text-[12px] text-mute">{children}</span>
}
