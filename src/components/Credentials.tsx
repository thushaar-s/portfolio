import { certifications, education } from '../data/portfolio'
import { ArrowUpRight } from './Icons'
import { Section } from './ui'

/* Education and certifications share one section. */
export default function Credentials() {
  return (
    <Section id="education" label="Education" title="Degrees and certifications.">
      <h3 className="eyebrow">Education</h3>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {education.map((e) => (
          <article key={e.qualification} className="rounded-2xl border border-line bg-panel p-7">
            <p className="font-mono text-[13px] tabular-nums text-mute">{e.dates}</p>
            <h4 className="mt-4 text-[20px] font-medium">{e.qualification}</h4>
            <p className="mt-1 text-[16px] text-accent">{e.institution}</p>
            {e.description && <p className="mt-4 text-[15px] leading-relaxed text-mute">{e.description}</p>}
          </article>
        ))}
      </div>

      <h3 id="certifications" className="eyebrow mt-14 scroll-mt-24">Certifications</h3>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {certifications.map((c) => {
          const hasLink = Boolean(c.url) && c.url !== '#'
          return (
            <article key={c.name} className="flex flex-col rounded-2xl border border-line bg-panel p-7">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-line font-mono text-[12px] text-accent" aria-hidden="true">✓</span>
              <h4 className="mt-5 text-[18px] font-medium leading-snug">{c.name}</h4>
              <p className="mt-1 text-[15px] text-mute">{c.issuer}</p>
              {(c.date || hasLink) && (
                <div className="mt-auto flex items-center justify-between pt-6">
                  <span className="font-mono text-[12px] text-mute">{c.date}</span>
                  {hasLink && <a href={c.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[14px] text-accent">Verify<ArrowUpRight /></a>}
                </div>
              )}
            </article>
          )
        })}
      </div>
    </Section>
  )
}
