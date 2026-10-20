import { useState } from 'react'
import { liveSocials as socials, profile } from '../data/portfolio'
import { Copy, SocialIcon } from './Icons'
import { Section } from './ui'

export default function Contact() {
  const [copied, setCopied] = useState('')

  const copy = async (text: string, key: string) => {
    try { await navigator.clipboard.writeText(text); setCopied(key) } catch { setCopied('') }
    window.setTimeout(() => setCopied(''), 1800)
  }

  const items = [
    { k: 'email', label: 'Email', value: profile.email },
    { k: 'phone', label: 'Phone (UAE)', value: profile.phone },
    { k: 'phoneIndia', label: 'Phone (India)', value: profile.phoneIndia },
  ]

  return (
    <Section id="contact" label="Contact" title="Hiring for a marketing, social media or content role? Let's talk."
      intro="I am in Dubai and available to start immediately. Email or call me about a role or an interview.">
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((c) => (
          <div key={c.k} className="rounded-2xl border border-line bg-panel p-6">
            <p className="eyebrow">{c.label}</p>
            <div className="mt-2 flex items-center justify-between gap-3">
              <span className="min-w-0 select-all break-all text-[18px]">{c.value}</span>
              <button type="button" onClick={() => copy(c.value, c.k)} aria-label={`Copy ${c.label}`} className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-[13px] text-mute hover:border-fg hover:text-fg">
                <Copy />{copied === c.k ? 'Copied' : 'Copy'}
              </button>
            </div>
          </div>
        ))}
        <div className="rounded-2xl border border-line bg-panel p-6">
          <p className="eyebrow">Location</p>
          <p className="mt-2 text-[18px]">{profile.location}</p>
          <p className="mt-1 text-[14px] text-mute">{profile.availability}</p>
        </div>
      </div>

      <ul className="mt-6 flex flex-wrap gap-2">
        {socials.map((s) => (
          <li key={s.label}>
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-[14px] text-mute transition-colors hover:border-fg hover:text-fg">
              <SocialIcon name={s.icon} />{s.label === 'Video samples on Google Drive' ? 'Drive' : s.label}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
