type P = { className?: string }
const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

export const ArrowUpRight = ({ className = 'h-4 w-4' }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}><path d="M7 17 17 7M8 7h9v9" /></svg>
)
export const ArrowDown = ({ className = 'h-4 w-4' }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}><path d="M12 5v14M6 13l6 6 6-6" /></svg>
)
export const Play = ({ className = 'h-5 w-5' }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor"><path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.4-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z" /></svg>
)
export const Close = ({ className = 'h-5 w-5' }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}><path d="M6 6l12 12M18 6 6 18" /></svg>
)
export const Menu = ({ className = 'h-5 w-5' }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}><path d="M4 8h16M4 16h16" /></svg>
)
export const Copy = ({ className = 'h-4 w-4' }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}><rect x="9" y="9" width="11" height="11" rx="2" /><path d="M5 15V6a2 2 0 0 1 2-2h8" /></svg>
)
export const FileIcon = ({ className = 'h-5 w-5' }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5M9 13h6M9 17h4" /></svg>
)

export const SocialIcon = ({ name, className = 'h-[18px] w-[18px]' }: { name: string; className?: string }) => {
  switch (name) {
    case 'linkedin':
      return <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11H3zM9.5 9.75h3.8v1.5h.06c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1v5.45h-4v-4.83c0-1.15-.02-2.63-1.6-2.63-1.6 0-1.85 1.25-1.85 2.55v4.91h-4z" /></svg>
    case 'instagram':
      return <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".6" fill="currentColor" /></svg>
    case 'youtube':
      return <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.8a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8ZM9.75 15.1V8.9L15.5 12z" /></svg>
    case 'github':
      return <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" /></svg>
    case 'drive':
      return <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}><path d="M8.5 3.5h7l6 10.5-3.5 6h-12L2.5 14z" /><path d="M8.5 3.5 15 14.5H2.5M15.5 3.5 9 14.5l-3 5.5M21.5 14H9" /></svg>
    default:
      return <ArrowUpRight className={className} />
  }
}
