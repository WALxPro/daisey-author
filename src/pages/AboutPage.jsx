import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { About } from '../components/Sections'
import { PageHero, InstagramSection } from '../components/Extras'
import { processSteps, funFacts } from '../data'
import { useGsapReveal } from '../hooks'

gsap.registerPlugin(ScrollTrigger)

function Timeline() {
  const ref = useRef(null)
  useLayoutEffect(() => {
    const rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (rm) return
    const ctx = gsap.context(() => {
      gsap.fromTo('.tl-line', { scaleY: 0 }, {
        scaleY: 1, transformOrigin: 'top', ease: 'none',
        scrollTrigger: { trigger: ref.current, start: 'top 70%', end: 'bottom 60%', scrub: true },
      })
      gsap.utils.toArray('.tl-step').forEach((el) => {
        gsap.from(el, { x: -30, opacity: 0, duration: .7, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 82%', once: true } })
      })
    }, ref)
    return () => ctx.revert()
  }, [])
  return (
    <section className="py-16 md:py-24 bg-paper2 px-5 md:px-8">
      <div className="text-center max-w-[640px] mx-auto mb-12 reveal">
        <span className="eyebrow">My Process</span>
        <h2 className="font-serif font-medium text-burgundy text-4xl md:text-5xl mt-4">From Brief to <span className="shimmer">Delivery</span></h2>
      </div>
      <div ref={ref} className="max-w-[680px] mx-auto relative pl-10">
        <span className="tl-line absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-gold via-goldbright to-gold" />
        {processSteps.map((s) => (
          <div key={s.num} className="tl-step relative pb-9 last:pb-0">
            <span className="absolute -left-10 top-0 w-8 h-8 rounded-full border border-gold bg-paper2 flex items-center justify-center font-serif italic text-sm text-burgundy shadow-[0_6px_14px_rgba(185,134,47,.25)]">{s.num}</span>
            <h3 className="font-serif text-2xl text-burgundy">{s.title}</h3>
            <p className="text-[.9rem] text-inksoft mt-1">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function FunFacts() {
  const rotations = ['-rotate-2', 'rotate-1', 'rotate-2', '-rotate-1']
  return (
    <section className="py-16 md:py-24 bg-paper px-5 md:px-8">
      <div className="text-center max-w-[640px] mx-auto mb-10 reveal">
        <span className="eyebrow">Off The Canvas</span>
        <h2 className="font-serif font-medium text-burgundy text-4xl md:text-5xl mt-4">A Few Fun <span className="shimmer">Facts</span></h2>
      </div>
      <div className="max-w-[900px] mx-auto grid sm:grid-cols-2 gap-6">
        {funFacts.map((f, i) => (
          <div key={f.label}
            className={`reveal bg-white border border-gold/35 p-6 shadow-[0_12px_30px_rgba(90,24,32,.1)] transition-transform duration-300 hover:rotate-0 hover:-translate-y-1 ${rotations[i % 4]} relative`}>
            <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full shadow" style={{ background: 'radial-gradient(circle at 35% 30%,#F0D08A,#B9862F 60%,#8A5E1B)' }} />
            <h3 className="font-caps text-[.62rem] tracking-[.24em] uppercase text-gold mb-2">{f.label}</h3>
            <p className="font-serif italic text-lg text-ink">{f.value}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function AboutPage() {
  useGsapReveal([])
  return (
    <>
      <PageHero eyebrow="About Me" title="The Story Behind the" shimmerWord="Sketches" script='"Every character has a soul — I just try to draw it out."' />
      <About />
      <section className="pb-4 bg-paper px-5 md:px-8">
        <div className="max-w-[760px] mx-auto text-inksoft grid gap-4 reveal">
          <p>I'm a self-taught illustrator who fell in love with storytelling through art. It started with sketching characters from my favorite romance-fantasy novels — and it turned into a calling when authors began asking me to draw <em>theirs</em>.</p>
          <p>Every piece I create is 100% hand-drawn — no AI, no shortcuts — just hours of sketching, coloring, and care poured into bringing your characters to life exactly the way you imagined them.</p>
          <p>Today I work with self-published authors around the world on couple art, character portraits, and complete book covers. If your story deserves to be <em>seen</em>, not just read — I'd love to draw it.</p>
        </div>
      </section>
      <Timeline />
      <FunFacts />
      <InstagramSection compact />
    </>
  )
}
