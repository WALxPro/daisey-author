import { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import { Link } from 'react-router-dom'
import { FiPlus, FiChevronDown, FiStar, FiMail } from 'react-icons/fi'
import { FaInstagram } from 'react-icons/fa6'
import { services, faqs, testimonials, taggedBy, INSTAGRAM, IG_HANDLE, artworks } from '../data'
import { SectionHead } from './Sections'

/* ---------- Services accordion (Services page + overview) ---------- */
export function ServicesAccordion() {
  const [open, setOpen] = useState(0)
  return (
    <div className="max-w-[900px] mx-auto grid gap-4">
      {services.map((s, i) => (
        <div key={s.title}
          className={`reveal bg-white border transition-all duration-300 ${s.featured ? 'border-2 border-gold shadow-[0_14px_38px_rgba(185,134,47,.25)]' : 'border-gold/35 shadow-[0_10px_26px_rgba(90,24,32,.08)]'} ${open === i ? '' : 'hover:border-gold'}`}>
          <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full flex items-center gap-4 p-4 md:p-5 text-left">
            <img src={s.img} alt="" loading="lazy" className="w-16 h-16 object-cover object-top border border-gold/40 flex-none" />
            <span className="flex-1 min-w-0">
              <span className="font-serif text-xl md:text-2xl text-burgundy block">{s.title}</span>
              <span className="text-[.85rem] text-inksoft block truncate">{s.summary}</span>
            </span>
            <span className="font-serif italic text-gold whitespace-nowrap hidden sm:block">{s.start}</span>
            <FiChevronDown className={`text-gold text-xl flex-none transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} />
          </button>
          <div className={`grid transition-all duration-500 ease-in-out ${open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
            <div className="overflow-hidden">
              <div className="px-5 pb-6 pt-1 grid md:grid-cols-2 gap-6 text-[.92rem] text-inksoft">
                <div>
                  <p>{s.description}</p>
                  <h4 className="font-caps text-[.6rem] tracking-[.22em] uppercase text-gold mt-4 mb-2">What's included</h4>
                  <ul className="grid gap-1.5">{s.included.map((it) => <li key={it}><span className="text-gold mr-2">✦</span>{it}</li>)}</ul>
                </div>
                <div className="grid gap-3 content-start">
                  <div><h4 className="font-caps text-[.6rem] tracking-[.22em] uppercase text-gold mb-1">Revisions</h4>{s.revisions}</div>
                  <div><h4 className="font-caps text-[.6rem] tracking-[.22em] uppercase text-gold mb-1">What I need from you</h4>{s.references}</div>
                  <div><h4 className="font-caps text-[.6rem] tracking-[.22em] uppercase text-gold mb-1">Turnaround</h4>{s.turnaround}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

/* ---------- FAQ accordion ---------- */
export function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <div className="max-w-[760px] mx-auto mt-14">
      <h3 className="reveal font-serif text-3xl text-burgundy text-center mb-6">Frequently Asked</h3>
      <div className="reveal bg-white border border-gold/30 shadow-[0_16px_40px_rgba(90,24,32,.1)] px-6 md:px-8">
        {faqs.map((f, i) => (
          <div key={f.q} className={i < faqs.length - 1 ? 'border-b border-burgundy/12' : ''}>
            <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full flex justify-between items-center gap-4 py-4 text-left font-serif text-lg md:text-xl text-burgundy hover:text-brand transition-colors">
              {f.q}
              <FiPlus className={`text-gold flex-none transition-transform duration-300 ${open === i ? 'rotate-45' : ''}`} />
            </button>
            <div className={`grid transition-all duration-400 ${open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
              <p className="overflow-hidden text-[.92rem] text-inksoft pb-4">{f.a}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ---------- Testimonial card + grid ---------- */
export function Stars() {
  return <span className="flex gap-0.5 text-goldbright">{[...Array(5)].map((_, i) => <FiStar key={i} className="fill-goldbright" />)}</span>
}

export function TestimonialCard({ t }) {
  return (
    <figure className="reveal group bg-white border border-gold/35 p-5 shadow-[0_10px_28px_rgba(90,24,32,.09)] transition-all duration-400 hover:-translate-y-1.5 hover:border-goldbright hover:shadow-[0_20px_45px_rgba(90,24,32,.18)] flex gap-4">
      <img src={t.img} alt="" loading="lazy" className="w-20 h-24 object-cover object-top border border-gold/40 flex-none" />
      <div className="min-w-0">
        <Stars />
        <blockquote className="text-[.9rem] text-inksoft mt-2 italic">"{t.quote}"</blockquote>
        <figcaption className="mt-2 font-caps text-[.6rem] tracking-[.2em] uppercase text-burgundy">{t.name} <span className="text-gold normal-case tracking-normal font-sans">{t.handle}</span></figcaption>
      </div>
    </figure>
  )
}


/* ---------- Instagram scatter: grid -> fly to scattered frame on scroll (scrub, reversible) ---------- */
const SCATTER_DESKTOP = [
  { ex: -0.40, ey: -0.33, r: -14 },
  { ex:  0.00, ey: -0.42, r:   6 },
  { ex:  0.40, ey: -0.33, r:  12 },
  { ex: -0.42, ey:  0.34, r:   9 },
  { ex:  0.02, ey:  0.44, r:  -5 },
  { ex:  0.42, ey:  0.34, r: -12 },
]
// mobile: push cards to the far corners/edges so center copy stays clear
const SCATTER_MOBILE = [
  { ex: -0.38, ey: -0.40, r: -14 },
  { ex:  0.02, ey: -0.48, r:   6 },
  { ex:  0.40, ey: -0.40, r:  12 },
  { ex: -0.40, ey:  0.42, r:   9 },
  { ex:  0.02, ey:  0.50, r:  -5 },
  { ex:  0.40, ey:  0.42, r: -12 },
]
const pick = (i) => (window.innerWidth < 768 ? SCATTER_MOBILE[i] : SCATTER_DESKTOP[i])

function IgScatter() {
  const rootRef = useRef(null)
  const cards = artworks.slice(0, 6)

  useLayoutEffect(() => {
    const rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      const cw = () => Math.min(170, window.innerWidth * 0.26)
      const ch = () => cw() * 1.28
      const gap = () => (window.innerWidth < 768 ? 8 : 14)
      const endScale = () => (window.innerWidth < 768 ? 0.92 : 1.1)
      const startX = (i) => ((i % 3) - 1) * (cw() + gap())
      const startY = (i) => (i < 3 ? -1 : 1) * (ch() / 2 + gap() / 2)

      if (rm) {
        // no motion: show scattered end-state with visible center
        gsap.utils.toArray('.ig-card').forEach((c, i) =>
          gsap.set(c, { xPercent: -50, yPercent: -50, x: () => pick(i).ex * window.innerWidth, y: () => pick(i).ey * window.innerHeight, rotate: pick(i).r }))
        gsap.set('.ig-center', { opacity: 1, scale: 1 })
        return
      }

      gsap.set('.ig-center', { opacity: 0, scale: 0.85, y: 14 })
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top top',
          end: '+=170%',
          scrub: 0.7,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })
      gsap.utils.toArray('.ig-card').forEach((c, i) => {
        tl.fromTo(c,
          { xPercent: -50, yPercent: -50, x: () => startX(i), y: () => startY(i), rotate: 0, scale: 1 },
          { xPercent: -50, yPercent: -50, x: () => pick(i).ex * window.innerWidth, y: () => pick(i).ey * window.innerHeight,
            rotate: () => pick(i).r, scale: endScale, ease: 'power2.inOut', duration: 1 }, 0)
      })
      tl.to('.ig-center', { opacity: 1, scale: 1, y: 0, duration: 0.45, ease: 'power2.out' }, 0.5)
      requestAnimationFrame(() => ScrollTrigger.refresh())
    }, rootRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={rootRef} className="relative h-screen overflow-hidden">
      {/* cards */}
      {cards.map((a, i) => (
        <a key={a.id} href={INSTAGRAM} target="_blank" rel="noreferrer"
          className="ig-card absolute left-1/2 top-1/2 w-[min(170px,26vw)] aspect-[1/1.28] p-1 md:p-1.5 bg-paper border border-goldbright/60 shadow-[0_20px_50px_rgba(0,0,0,.5)] z-[5] will-change-transform group">
          <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full z-[2] shadow" style={{ background: 'radial-gradient(circle at 35% 30%,#F0D08A,#B9862F 60%,#8A5E1B)' }} />
          <img src={a.src} alt={a.title} loading="lazy" className="w-full h-full object-cover object-top" />
          <span className="absolute inset-1.5 bg-winedark/0 group-hover:bg-winedark/45 transition-colors flex items-center justify-center">
            <FaInstagram className="text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity" />
          </span>
        </a>
      ))}

      {/* center reveal */}
      <div className="ig-center absolute inset-0 z-[20] flex flex-col items-center justify-center text-center px-6 pointer-events-none">
        <div className="pointer-events-auto">
          <span className="font-script text-goldbright text-2xl md:text-4xl block -rotate-2">what clients think…</span>
          <h2 className="font-serif font-medium text-[#FBF2E6] text-3xl sm:text-4xl md:text-6xl mt-2 md:mt-3 leading-tight">Loved on <span className="shimmer">Instagram</span></h2>
          <p className="text-creamdim text-sm md:text-base max-w-[34ch] md:max-w-[46ch] mx-auto mt-3 md:mt-4 leading-relaxed">Authors from all over the world tag me in their cover reveals and character art — here's the love, straight from their pages.</p>
          <a href={INSTAGRAM} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 md:gap-2.5 mt-6 md:mt-8 font-caps text-[.6rem] md:text-[.7rem] tracking-[.18em] md:tracking-[.2em] uppercase text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full transition-transform hover:scale-105 shadow-[0_12px_30px_rgba(0,0,0,.4)]"
            style={{ background: 'linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)' }}>
            <FaInstagram className="text-base" /> Follow {IG_HANDLE}
          </a>
        </div>
      </div>
    </div>
  )
}

/* ---------- Instagram section ---------- */
export function InstagramSection({ compact }) {
  return (
    <section className={`${compact ? 'py-16 md:py-24' : 'pb-16 md:pb-24'} text-cream relative overflow-hidden`} style={{ background: 'linear-gradient(140deg,#4A141B,#5A1820 55%,#3A1119)' }}>
      {!compact && <IgScatter />}
      <div className="max-w-[1240px] mx-auto px-5 md:px-8">
        {/* Trusted-by testimonials — static grid replacing the old marquee */}
        <p className="font-caps text-[.6rem] tracking-[.3em] uppercase text-goldbright text-center mb-3 reveal">
          Client Feedback
        </p>
        <h3 className="font-serif text-2xl sm:text-3xl text-[#FBF2E6] text-center mb-10 sm:mb-14 reveal">
          Trusted by Authors Worldwide
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 reveal">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="
                relative
                flex flex-col
                bg-white/5
                border border-goldbright/25
                rounded-lg
                p-6 sm:p-7
                shadow-[0_16px_38px_rgba(0,0,0,.28)]
              "
            >
              <div className="flex gap-1 text-goldbright text-sm mb-3" aria-hidden="true">
                {"★★★★★".split("").map((s, j) => (
                  <span key={j}>{s}</span>
                ))}
              </div>

              <blockquote className="text-[.92rem] leading-relaxed text-creamdim italic mb-6 flex-1">
                "{t.quote}"
              </blockquote>

              <figcaption className="flex items-center gap-3 pt-5 border-t border-goldbright/15">
                <div
                  className="
                    w-11 h-11
                    rounded-full
                    flex items-center justify-center
                    font-caps text-[.7rem]
                    text-winedark
                    bg-gradient-to-br from-goldbright to-[#A87A2C]
                    flex-none
                  "
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <div className="text-[.9rem] font-medium text-[#FBF2E6] truncate">
                    {t.name}
                  </div>
                  <div className="text-[.72rem] text-goldlight truncate">
                    {t.role}
                  </div>
                </div>
              </figcaption>

              <div className="mt-3 text-[.68rem] tracking-[.1em] uppercase text-creamdim/60">
                {t.project}
              </div>
            </figure>
          ))}
        </div>

        <div className="text-center mt-12 reveal">
          {compact && (
            <a href={INSTAGRAM} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2.5 font-caps text-[.7rem] tracking-[.2em] uppercase text-white px-8 py-4 rounded-full transition-transform hover:scale-105 shadow-[0_12px_30px_rgba(0,0,0,.35)]"
              style={{ background: 'linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)' }}>
              <FaInstagram className="text-base" /> Follow {IG_HANDLE}
            </a>
          )}
          <p className="text-[.72rem] text-creamdim mt-4 tracking-[.15em] uppercase">Trusted by authors around the world</p>
        </div>
      </div>
    </section>
  )
}

/* ---------- Final CTA banner ---------- */
export function CTABanner({ title = 'Ready to See Your Characters Come to Life?', sub = 'Get a personalized quote in 24-48 hours.', btn = 'Get a Custom Quote', to = '/contact' }) {
  return (
    <section className="py-16 md:py-20 text-center text-cream relative overflow-hidden"
      style={{ background: 'linear-gradient(120deg,#5A1820,#7A2430 45%,#5A1820)' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(100deg,transparent 30%,rgba(240,208,138,.12) 50%,transparent 70%)', backgroundSize: '200% 100%', animation: 'shine 6s linear infinite' }} />
      <div className="relative z-[1] max-w-[720px] mx-auto px-5 reveal">
        <h2 className="font-serif font-medium text-[#FBF2E6] text-4xl md:text-5xl">{title}</h2>
        <p className="text-creamdim mt-3">{sub}</p>
        <Link to={to} className="btn-main inline-block mt-8">{btn} ✦</Link>
      </div>
    </section>
  )
}

/* ---------- small page hero ---------- */
export function PageHero({ eyebrow, title, shimmerWord, script }) {
  return (
    <header className="pt-36 pb-14 md:pb-20 text-center text-cream relative overflow-hidden"
      style={{ background: `radial-gradient(ellipse 60% 60% at 70% 20%, rgba(198,58,58,.22), transparent 60%), linear-gradient(170deg,#241016,#3A1119 60%,#1C0A0F)` }}>
      <div className="max-w-[800px] mx-auto px-5">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="font-serif font-medium text-[#FBF2E6] text-4xl md:text-6xl mt-4">{title} <span className="shimmer">{shimmerWord}</span></h1>
        {script && <p className="font-script text-goldbright text-2xl md:text-3xl mt-4">{script}</p>}
      </div>
    </header>
  )
}
