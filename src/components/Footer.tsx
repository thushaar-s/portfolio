import { profile, liveSocials as socials } from '../data/portfolio'
import { SocialIcon } from './Icons'

export default function Footer() {
  return (
    <footer className="relative z-[2] border-t border-line">
      <div className="gutter mx-auto flex max-w-page flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between" style={{ paddingBottom: 'max(40px, env(safe-area-inset-bottom, 0px))' }}>
        <div>
          <p className="font-display text-[18px] font-light">{profile.name}</p>
          <p className="mt-1 text-[14px] text-mute">© {new Date().getFullYear()} {profile.name}. {profile.location}.</p>
        </div>
        <ul className="flex gap-2">
          {socials.map((s) => (
            <li key={s.label}>
              <a href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="grid h-10 w-10 place-items-center rounded-full border border-line text-mute transition-colors hover:border-accent hover:text-accent">
                <SocialIcon name={s.icon} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
