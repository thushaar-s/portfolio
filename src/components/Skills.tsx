import { competencies, skillGroups } from '../data/portfolio'
import { Section, Tag, Tilt } from './ui'

function Dots({ level, name }: { level: number; name: string }) {
  return (
    <span className="flex gap-1" role="img" aria-label={`${name}: ${level} out of 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} className={`h-1.5 w-4 rounded-full ${n <= level ? 'bg-accent' : 'bg-line'}`} />
      ))}
    </span>
  )
}

export default function Skills() {
  return (
    <Section id="skills" label="Skills" title="Tools I use every week, from the first idea to the final report.">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map((g, gi) => (
          <Tilt key={g.title} className="h-full">
            <article className="group relative h-full overflow-hidden rounded-2xl border border-line bg-panel p-6 transition-colors hover:border-[#3a3a3a]">
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(360px circle at var(--gx,50%) var(--gy,0%), rgba(104,210,255,.08), transparent 60%)' }} />
              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-[18px] font-medium">{g.title}</h3>
                  <p className="mt-1 text-[14px] text-mute">{g.note}</p>
                </div>
                <span className="font-mono text-[12px] text-mute">{String(gi + 1).padStart(2, '0')}/{String(skillGroups.length).padStart(2, '0')}</span>
              </div>
              <ul className="relative mt-6 divide-y divide-line border-t border-line">
                {g.skills.map((s) => (
                  <li key={s.name} className="flex items-center justify-between gap-3 py-3">
                    <span className="text-[15px]">{s.name}</span>
                    <Dots level={s.level} name={s.name} />
                  </li>
                ))}
              </ul>
            </article>
          </Tilt>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="eyebrow">Core competencies</h3>
        <ul className="mt-5 flex flex-wrap gap-2">
          {competencies.map((c) => <li key={c}><Tag>{c}</Tag></li>)}
        </ul>
      </div>
    </Section>
  )
}
