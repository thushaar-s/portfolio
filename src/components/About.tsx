import { about } from '../data/portfolio'
import { Section } from './ui'

export default function About() {
  return (
    <Section id="about" label="About me" title={about.heading}>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="hidden lg:col-span-3 lg:block" />
        <div className="min-w-0 space-y-5 text-[17px] leading-[1.75] text-mute lg:col-span-5">
          {about.paragraphs.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
          <p className="border-l border-accent pl-4 text-fg">{about.goals}</p>
        </div>
        <dl className="min-w-0 self-start rounded-2xl border border-line bg-panel lg:col-span-4">
          {about.facts.map((f, i) => (
            <div key={f.label} className={`flex flex-col gap-1 px-6 py-5 ${i ? 'border-t border-line' : ''}`}>
              <dt className="eyebrow">{f.label}</dt>
              <dd className="text-[16px] text-fg">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}
