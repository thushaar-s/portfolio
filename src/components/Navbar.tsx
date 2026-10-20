import { useEffect, useState } from 'react'
import { nav, profile } from '../data/portfolio'
import { Close, Menu } from './Icons'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50" style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}>
      <div className={`transition-colors duration-300 ${scrolled || open ? 'border-b border-line bg-ink/85 backdrop-blur-md' : 'border-b border-transparent'}`}>
        <nav aria-label="Main" className="gutter mx-auto flex h-[68px] max-w-page items-center justify-between">
          <a href="#top" className="group flex items-center gap-3" aria-label={`${profile.name}, back to top`}>
            <span className="grid h-9 w-9 place-items-center rounded-full border border-line font-display text-[12px] tracking-tight transition-colors group-hover:border-accent">TS</span>
            <span className="hidden text-[15px] font-medium sm:block">{profile.name}</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="rounded-full px-3.5 py-2 text-[14px] text-mute transition-colors hover:text-fg">{n.label}</a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a href="#contact" className="btn btn-primary btn-sm hidden sm:inline-flex">Let's talk</a>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full border border-line md:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <Close /> : <Menu />}
            </button>
          </div>
        </nav>
      </div>

      <div id="mobile-menu" hidden={!open} className="md:hidden">
        <div className="gutter fixed inset-x-0 bottom-0 top-[calc(68px+env(safe-area-inset-top,0px))] z-40 overflow-y-auto bg-ink" style={{ paddingBottom: 'max(24px, env(safe-area-inset-bottom, 0px))' }}>
          <ul className="flex flex-col pt-6">
            {nav.map((n, i) => (
              <li key={n.href} className="border-b border-line">
                <a href={n.href} onClick={() => setOpen(false)} className="flex items-baseline justify-between py-5">
                  <span className="font-display text-[26px] font-light">{n.label}</span>
                  <span className="font-mono text-[12px] text-mute">{String(i + 1).padStart(2, '0')}</span>
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" onClick={() => setOpen(false)} className="btn btn-primary mt-8 w-full justify-center">Let's talk</a>
        </div>
      </div>
    </header>
  )
}
