import { useEffect, useState } from 'react'
import { FaInstagram, FaXTwitter, FaArtstation } from 'react-icons/fa6'
import { SiKofi } from 'react-icons/si'
import { FiMail, FiClock, FiUploadCloud, FiX } from 'react-icons/fi'
import { PiSparkleFill } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import { SectionHead } from './Sections'
import { BRAND, INSTAGRAM, IG_HANDLE, EMAIL } from '../data'

const socials = [
  { icon: FaInstagram, label: 'Instagram', href: INSTAGRAM },
  { icon: FaXTwitter, label: 'X / Twitter', href: '#' },
  { icon: FaArtstation, label: 'ArtStation', href: '#' },
  { icon: SiKofi, label: 'Ko-fi', href: '#' },
]

function Status() {
  return (
    <span className="inline-flex items-center gap-2 font-caps text-[.62rem] tracking-[.2em] uppercase text-goldbright">
      <span className="w-2 h-2 rounded-full bg-[#7FCB8A] shadow-[0_0_10px_rgba(127,203,138,.8)] animate-pulsedot" />
      Commissions Open
    </span>
  )
}

const inputCls = 'w-full bg-paper border border-burgundy/25 text-ink px-4 py-3.5 text-[.92rem] transition-all focus:outline-none focus:border-gold focus:ring-[3px] focus:ring-goldbright/20'
const labelCls = 'font-caps text-[.6rem] tracking-[.22em] uppercase text-inksoft'

export function Contact() {
  const [sent, setSent] = useState(false)
  return (
    <section id="contact" className="py-20 md:py-32" style={{
      background: `radial-gradient(ellipse 55% 50% at 92% 10%, rgba(228,168,168,.42), transparent 60%),
        radial-gradient(ellipse 50% 45% at 5% 60%, rgba(198,58,58,.09), transparent 60%),
        linear-gradient(180deg,#FBF6EF,#F6E9E2)` }}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <SectionHead eyebrow="Get In Touch" title="Let's Create Something" shimmerWord="Beautiful" />
        <div className="grid md:grid-cols-[.9fr_1.1fr] gap-10 lg:gap-20 mt-12">
          <div className="reveal">
            <span className="font-script text-brand text-4xl block mb-2.5">tell me your story…</span>
            <p className="text-inksoft max-w-[40ch]">
              Fill out the form and I'll get back to you within 24-48 hours. Whether it's a beloved OC, a couple portrait, or the cover of your next novel — I'd love to hear about it. DMs and email are always open.
            </p>
            <div className="flex items-center gap-4 mt-6 text-[.92rem]">
              <b className="font-caps text-[.62rem] tracking-[.22em] uppercase text-gold min-w-[78px] flex items-center gap-1.5"><FiMail /> Email</b>
              hello@daisyysketches.art
            </div>
            <div className="flex items-center gap-4 mt-4 text-[.92rem]">
              <b className="font-caps text-[.62rem] tracking-[.22em] uppercase text-gold min-w-[78px] flex items-center gap-1.5"><FiClock /> Delivery</b>
              Usually 2–3 weeks
            </div>
            <div className="flex items-center gap-4 mt-4 text-[.92rem]">
              <b className="font-caps text-[.62rem] tracking-[.22em] uppercase text-gold min-w-[78px]">Status</b>
              <span className="[&>span]:!text-burgundy"><Status /></span>
            </div>
            <div className="flex gap-4 mt-8">
              {socials.map(({ icon: Icon, label, href }) => (
                <a key={label} href={href} aria-label={label}
                  className="w-11 h-11 border border-gold/40 flex items-center justify-center text-burgundy bg-white shadow-[0_6px_16px_rgba(90,24,32,.1)] transition-all hover:bg-burgundy hover:text-goldbright hover:border-burgundy hover:-translate-y-0.5">
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {sent ? (
            <div className="reveal in bg-white p-10 border border-gold/40 shadow-[0_22px_55px_rgba(90,24,32,.13)] flex items-center justify-center">
              <p className="font-serif text-2xl text-burgundy text-center">Thank you — your request has been received. I'll reply soon!</p>
            </div>
          ) : (
            <form
              className="reveal grid sm:grid-cols-2 gap-4 bg-white p-6 md:p-9 border border-gold/40 shadow-[0_22px_55px_rgba(90,24,32,.13)]"
              onSubmit={(e) => { e.preventDefault(); setSent(true) }}
            >
              <div className="grid gap-1.5">
                <label htmlFor="f-name" className={labelCls}>Name</label>
                <input id="f-name" required placeholder="Your name" className={inputCls} />
              </div>
              <div className="grid gap-1.5">
                <label htmlFor="f-email" className={labelCls}>Email</label>
                <input id="f-email" type="email" required placeholder="you@email.com" className={inputCls} />
              </div>
              <div className="grid gap-1.5">
                <label htmlFor="f-type" className={labelCls}>Project Type</label>
                <select id="f-type" className={inputCls}>
                  <option>Bust Up</option><option>Half Body</option><option>Full Body</option>
                  <option>Couple Illustration</option><option>Book Cover</option><option>Other</option>
                </select>
              </div>
              <div className="grid gap-1.5">
                <label htmlFor="f-budget" className={labelCls}>Budget</label>
                <input id="f-budget" placeholder="e.g. $150" className={inputCls} />
              </div>
              <div className="grid gap-1.5 sm:col-span-2">
                <label htmlFor="f-desc" className={labelCls}>Description</label>
                <textarea id="f-desc" placeholder="Describe your character, scene, or story…" className={`${inputCls} min-h-[120px] resize-y`} />
              </div>
              <div className="grid gap-1.5 sm:col-span-2">
                <label className={labelCls}>Reference Upload</label>
                <div className="border border-dashed border-gold p-5 text-center text-[.82rem] text-inksoft cursor-pointer transition-colors bg-paper hover:border-brand hover:text-brand flex items-center justify-center gap-2">
                  <FiUploadCloud className="text-base" /> Drop reference images here, or click to browse
                </div>
              </div>
              <button type="submit" className="btn-main sm:col-span-2 justify-self-start">
                Send Commission Request ✦
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="py-10 border-t border-gold/30 text-[#E9D6C6]" style={{ background: 'linear-gradient(120deg,#5A1820,#4A141B)' }}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 flex flex-wrap justify-between items-center gap-6">
        <a href="#home" className="font-script text-3xl text-cream leading-none">
          {BRAND} <PiSparkleFill className="inline text-goldbright text-base -mt-2" />
        </a>
        <Status />
        <small className="text-[#C9AB9C] text-[.78rem]">
          © 2026 Daisyy Sketches — All artwork is 100% hand-drawn. No AI used.
        </small>
        <div className="flex items-center gap-4">
          <Link to="/terms" className="text-[.72rem] tracking-[.15em] uppercase text-[#C9AB9C] hover:text-goldbright transition-colors">Terms of Service</Link>
          <a href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram"
            className="w-9 h-9 rounded-full flex items-center justify-center text-white transition-transform hover:scale-110"
            style={{ background: 'linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)' }}>
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  )
}

export function Lightbox({ art, onClose }) {
  useEffect(() => {
    const fn = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', fn)
    return () => document.removeEventListener('keydown', fn)
  }, [onClose])
  if (!art) return null
  return (
    <div className="fixed inset-0 z-[99] bg-[#1E100E]/95 flex items-center justify-center p-8 cursor-zoom-out" onClick={onClose}>
      <button className="absolute top-5 right-6 text-cream/80 hover:text-white text-3xl" aria-label="Close"><FiX /></button>
      <img src={art.src} alt={art.title}
        className="max-h-[90vh] max-w-[92vw] border-8 border-white outline outline-1 outline-gold shadow-[0_34px_90px_rgba(0,0,0,.6)]" />
    </div>
  )
}
