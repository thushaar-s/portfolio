import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from 'react'
import { profile } from '../data/portfolio'

/* Opens or downloads the resume PDF.
   On a normal website (Vercel, Netlify) this is a plain download link.
   Inside the Claude artifact viewer, where plain downloads are blocked,
   it uses the viewer's save prompt instead. */
type Saver = { save: (r: { filename: string; data: Blob }) => Promise<unknown> }
const FILE_NAME = 'Thushaar_S_Resume.pdf'

export default function ResumeButton({ className, children }: { className: string; children: ReactNode }) {
  const saver = useRef<Saver | null>(null)
  const [note, setNote] = useState('')

  useEffect(() => {
    const w = window as unknown as { claude?: { use?: (n: string) => Promise<Saver | null> } }
    w.claude?.use?.('downloads').then((d) => { saver.current = d }).catch(() => {})
  }, [])

  const onClick = async (e: MouseEvent<HTMLAnchorElement>) => {
    const d = saver.current
    if (!d) return // normal site: the link downloads the file
    e.preventDefault()
    try {
      const blob = await (await fetch(profile.resumeUrl)).blob()
      await d.save({ filename: FILE_NAME, data: blob })
      setNote('')
    } catch (err) {
      const code = (err as { code?: string })?.code
      setNote(code === 'declined' ? '' : `Download unavailable here. Email ${profile.email} for a copy.`)
    }
  }

  return (
    <>
      <a href={profile.resumeUrl} download={FILE_NAME} target="_blank" rel="noopener" onClick={onClick} className={className}>{children}</a>
      {note && <span role="status" className="basis-full text-[13px] text-mute">{note}</span>}
    </>
  )
}
