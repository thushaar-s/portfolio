import { interests, languages } from '../data/portfolio'
import { Section } from './ui'

const icons: Record<string, JSX.Element> = {
  Travel: <path d="M2 16l20-8-8 12-2-5-5-2 15-5" />,
  Photography: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7l2-3h4l2 3" /><circle cx="12" cy="13.5" r="3.5" /></>,
  Videography: <><rect x="2" y="6" width="14" height="12" rx="2" /><path d="M16 10l6-3v10l-6-3z" /></>,
  'Custom ROMs': <><rect x="6" y="2" width="12" height="20" rx="2.5" /><path d="M10 18h4M9.5 9l-2 2 2 2M14.5 9l2 2-2 2" /></>,
  Music: <><path d="M9 18V5l11-2v13" /><circle cx="6.5" cy="18" r="2.5" /><circle cx="17.5" cy="16" r="2.5" /></>,
  Volleyball: <><circle cx="12" cy="12" r="9" /><path d="M12 3c-2 4-2 9 0 12M4 9c4 0 9 2 11 6M20 9c-4 1-7 5-7 10" /></>,
}

export default function Interests() {
  return (
    <Section id="interests" label="Interests" title="Outside of work.">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
        {interests.map((i) => (
          <article key={i.name} className="rounded-2xl border border-line bg-panel p-6">
            <svg viewBox="0 0 24 24" className="h-7 w-7 text-accent" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              {icons[i.name] ?? <circle cx="12" cy="12" r="8" />}
            </svg>
            <h3 className="mt-5 text-[18px] font-medium">{i.name}</h3>
            {i.note && <p className="mt-1 text-[15px] text-mute">{i.note}</p>}
          </article>
        ))}
      </div>

      <h3 id="languages" className="eyebrow mt-14 scroll-mt-24">Languages</h3>
      <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {languages.map((l) => (
          <li key={l.name} className="flex items-baseline justify-between rounded-2xl border border-line bg-panel px-6 py-5">
            <span className="text-[18px]">{l.name}</span>
            <span className="font-mono text-[12px] uppercase tracking-[0.1em] text-accent">{l.level}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
