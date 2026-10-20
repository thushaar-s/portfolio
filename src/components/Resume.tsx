import ResumeButton from './ResumeButton'
import { ArrowUpRight, FileIcon } from './Icons'

export default function Resume() {
  return (
    <section id="resume" aria-labelledby="resume-title" className="relative z-[2] border-t border-line">
      <div className="gutter mx-auto max-w-page py-20 md:py-24">
        <div className="vf relative overflow-hidden rounded-[28px] border border-line bg-panel px-6 py-12 md:px-14 md:py-16">
          <span className="vf-c tl" /><span className="vf-c tr" /><span className="vf-c bl" /><span className="vf-c br" />
          <div className="relative grid gap-8 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <p className="eyebrow flex items-center gap-2"><span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />Resume</p>
              <h2 id="resume-title" className="mt-5 font-display text-[clamp(28px,3.6vw,48px)] font-light leading-[1.1] tracking-[-0.02em]">The one-page version.</h2>
              <p className="mt-4 max-w-[52ch] text-[17px] text-mute">Experience, tools and results on a single page, ready for your hiring team.</p>
            </div>
            <div className="flex flex-col gap-3 md:col-span-4 md:items-end">
              <ResumeButton className="btn btn-primary w-full justify-center md:w-auto"><FileIcon />Download Resume<ArrowUpRight /></ResumeButton>
              <p className="font-mono text-[12px] text-mute">PDF · 1 page</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
