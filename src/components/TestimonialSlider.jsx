import { useEffect, useRef, useState } from 'react'
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi'
import gsap from 'gsap'
import { testimonials } from '../data'

/** VIP testimonial slider: one large spotlight card, gsap crossfade + slide, auto-advance */
export default function TestimonialSlider({ items = testimonials, dark = false }) {
  const [cur, setCur] = useState(0)
  const dirRef = useRef(1)
  const cardRef = useRef(null)
  const timerRef = useRef(null)
  const list = items.length ? items : testimonials
  const t = list[cur % list.length]

  const go = (i, dir = 1) => {
    dirRef.current = dir
    setCur(((i % list.length) + list.length) % list.length)
  }

  // auto-advance (pause handled via hover events)
  const start = () => {
    stop()
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    timerRef.current = setInterval(() => go(curRef.current + 1, 1), 5000)
  }
  const stop = () => timerRef.current && clearInterval(timerRef.current)
  const curRef = useRef(cur)
  useEffect(() => { curRef.current = cur }, [cur])
  useEffect(() => { start(); return stop }, [list.length]) // eslint-disable-line

  // gsap entrance per slide: card slides, image tilts in, stars pop one-by-one
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      const d = dirRef.current
      gsap.fromTo('.ts-card', { x: 60 * d, opacity: 0 }, { x: 0, opacity: 1, duration: .6, ease: 'power3.out' })
      gsap.fromTo('.ts-img', { rotate: 6 * d, scale: .9, opacity: 0 }, { rotate: -2, scale: 1, opacity: 1, duration: .7, ease: 'back.out(1.6)' })
      gsap.fromTo('.ts-star', { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: .35, stagger: .08, ease: 'back.out(2.2)', delay: .15 })
      gsap.fromTo('.ts-quote', { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: .5, delay: .12, ease: 'power2.out' })
    }, cardRef)
    return () => ctx.revert()
  }, [cur])

  const frame = dark
    ? 'border-goldbright/50 bg-winedeep/60 text-cream shadow-[0_26px_60px_rgba(0,0,0,.45)]'
    : 'border-gold/40 bg-white text-ink shadow-[0_26px_60px_rgba(90,24,32,.16)]'

  return (
    <div ref={cardRef} className="relative max-w-[880px] mx-auto" onMouseEnter={stop} onMouseLeave={start}>
      {/* giant quote mark */}
      <span className={`absolute -top-10 left-2 font-serif italic text-[7rem] leading-none select-none pointer-events-none ${dark ? 'text-goldbright/15' : 'text-gold/15'}`}>"</span>

      <figure className={`ts-card relative border p-6 md:p-9 flex flex-col sm:flex-row gap-6 items-center backdrop-blur ${frame}`}>
        <div className="ts-img relative flex-none w-32 h-40 md:w-40 md:h-52 p-1.5 bg-paper border border-gold/50 shadow-[0_16px_36px_rgba(0,0,0,.3)] -rotate-2">
          <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full z-[2] shadow" style={{ background: 'radial-gradient(circle at 35% 30%,#F0D08A,#B9862F 60%,#8A5E1B)' }} />
          <img src={t.img} alt="" className="w-full h-full object-cover object-top" loading="lazy" />
        </div>
        <div className="min-w-0 text-center sm:text-left">
          <span className="flex justify-center sm:justify-start gap-1 text-goldbright">
            {[...Array(5)].map((_, i) => <FiStar key={i} className="ts-star fill-goldbright" />)}
          </span>
          <blockquote className={`ts-quote font-serif italic text-lg md:text-2xl leading-snug mt-3 ${dark ? 'text-[#FBF2E6]' : 'text-ink'}`}>
            "{t.quote}"
          </blockquote>
          <figcaption className="mt-4">
            <span className={`font-caps text-[.66rem] tracking-[.22em] uppercase ${dark ? 'text-goldlight' : 'text-burgundy'}`}>{t.name}</span>
            <span className={`ml-2 text-[.8rem] ${dark ? 'text-creamdim' : 'text-inksoft'}`}>{t.handle}</span>
          </figcaption>
        </div>
      </figure>

      {/* arrows */}
      <button onClick={() => go(cur - 1, -1)} aria-label="Previous"
        className={`absolute top-1/2 -translate-y-1/2 -left-3 md:-left-14 w-11 h-11 rounded-full border flex items-center justify-center transition-all hover:scale-110 ${dark ? 'border-goldbright/50 text-goldlight bg-winedeep/70 hover:bg-goldbright hover:text-winedark' : 'border-gold/50 text-burgundy bg-white hover:bg-burgundy hover:text-paper'}`}>
        <FiChevronLeft />
      </button>
      <button onClick={() => go(cur + 1, 1)} aria-label="Next"
        className={`absolute top-1/2 -translate-y-1/2 -right-3 md:-right-14 w-11 h-11 rounded-full border flex items-center justify-center transition-all hover:scale-110 ${dark ? 'border-goldbright/50 text-goldlight bg-winedeep/70 hover:bg-goldbright hover:text-winedark' : 'border-gold/50 text-burgundy bg-white hover:bg-burgundy hover:text-paper'}`}>
        <FiChevronRight />
      </button>

      {/* dots */}
      <div className="flex justify-center gap-2 mt-7">
        {list.map((x, i) => (
          <button key={x.handle} onClick={() => go(i, i > cur ? 1 : -1)} aria-label={`Review ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-400 ${i === cur ? 'w-7 bg-goldbright shadow-[0_0_10px_rgba(217,172,85,.8)]' : `w-1.5 ${dark ? 'bg-goldbright/30' : 'bg-gold/30'}`}`} />
        ))}
      </div>
    </div>
  )
}
