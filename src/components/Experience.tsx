import { experience } from '../data/portfolio'
import { ArrowUpRight } from './Icons'
import { Section } from './ui'

export default function Experience() {
  return (
    <Section id="experience" label="Experience" title="Where I have done the work.">
      <ol className="relative">
        {experience.map((job, i) => (
          <li key={job.organization + job.dates} className="grid gap-4 border-t border-line py-10 first:border-t-0 first:pt-0 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-3">
              <p className="font-mono text-[13px] tabular-nums text-fg">{job.dates}</p>
              <p className="mt-1 text-[14px] text-mute">{job.location}</p>
              {i === 0 && job.dates.includes('Present') && (
                <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 font-mono text-[11px] text-accent"><span className="h-1.5 w-1.5 rounded-full bg-accent" />Current</p>
              )}
            </div>
            <div className="min-w-0 lg:col-span-9">
              <h3 className="font-display text-[clamp(20px,2.2vw,28px)] font-light tracking-[-0.02em]">{job.role}</h3>
              <p className="mt-1 text-[16px] text-accent">{job.organization}</p>
              <p className="mt-3 text-[15px] text-mute">{job.summary}</p>
              <ul className="mt-5 space-y-3">
                {job.points.map((pt) => (
                  <li key={pt.slice(0, 30)} className="flex gap-3 text-[16px] leading-relaxed text-fg/90">
                    <span className="mt-[11px] h-px w-3 shrink-0 bg-mute" aria-hidden="true" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              {(job.highlights?.length || job.link) && (
                <div className="mt-6 flex flex-wrap items-center gap-2">
                  {job.highlights?.map((h) => (
                    <span key={h} className="rounded-lg border border-line bg-panel px-3 py-1.5 font-mono text-[12px] text-fg">{h}</span>
                  ))}
                  {job.link && (
                    <a href={job.link.url} target="_blank" rel="noopener noreferrer" className="ml-1 inline-flex items-center gap-1 text-[14px] text-accent hover:underline">{job.link.label}<ArrowUpRight /></a>
                  )}
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
