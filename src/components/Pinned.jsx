import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { artworks } from '../data'

gsap.registerPlugin(ScrollTrigger)

const PEEK = 16 // har pichhle card ki jhalak (px) — book-stack feel

const PANELS = [
  {
    id: "icerink",
    title: "Couple Illustration",
    word: "Couple",
    text: "Two characters brought together in one emotionally rich scene from a stolen glance and a quiet embrace to a first kiss, a dance, or the moment everything changes. Each illustration is composed around chemistry, body language, atmosphere, and the connection that makes their story feel real.",
    light: false,
  },
  {
    id: "wolfborn",
    title: "Character Art",
    word: "Character",
    text: "Your character fully realized from imagination to final artwork including facial features, expression, hairstyle, clothing, accessories, posture, and personality. Every detail is drawn with intention so the final piece feels true to who they are, not like a generic portrait.",
    light: true,
  },
  {
    id: "swanston",
    title: "Book Cover",
    word: "Cover",
    text: "A complete custom book cover designed to capture your story at first glance. From character-focused artwork and atmospheric backgrounds to title placement, typography, and print-ready formatting, every element is created to suit your genre and help your book stand out in both ebook and paperback form.",
    light: false,
  },
  {
    id: "waltz",
    title: "Scene Illustration",
    word: "Scene",
    text: "A full moment from your story illustrated with setting, lighting, composition, and emotion working together in one frame. Whether it is a dramatic confrontation, a magical reveal, a tender reunion, or a quiet cinematic moment, the goal is to make the scene feel like it has been lifted directly from the page.",
    light: true,
  },
].map((p) => ({
  ...p,
  ...artworks.find((a) => a.id === p.id),
}));
// 1–3 brown/burgundy (gehre hote hue), 4th light
const SHADES = [
  // Couple — dark
  "radial-gradient(ellipse 70% 60% at 85% 15%, rgba(198,58,58,.25), transparent 60%), linear-gradient(160deg,#3A1119,#2E0F16)",

  // Character — light
  "radial-gradient(ellipse 70% 60% at 12% 20%, rgba(228,168,168,.38), transparent 60%), linear-gradient(160deg,#FFF9F3,#F3E7DC)",

  // Book Cover — dark
  "radial-gradient(ellipse 70% 60% at 85% 80%, rgba(217,172,85,.12), transparent 60%), linear-gradient(160deg,#1F0C11,#150809)",

  // Scene — light
  "radial-gradient(ellipse 70% 60% at 15% 15%, rgba(228,168,168,.35), transparent 60%), linear-gradient(160deg,#FBF6EF,#EFDCD0)",
];

export default function Pinned() {
  const rootRef = useRef(null)

  useLayoutEffect(() => {
    const rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (rm) return
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.stack-card')

      cards.forEach((card, i) => {
        // har card ka content enter hote waqt halka sa rise + image settle
        gsap.from(card.querySelectorAll('.stack-rise'), {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: { trigger: card, start: 'top 55%', once: true },
        })
        gsap.from(card.querySelector('.stack-art'), {
          scale: 1.12,
          duration: 1.1,
          ease: 'power2.out',
          scrollTrigger: { trigger: card, start: 'top 60%', once: true },
        })

        // jab AGLA card is par chadhe, tab ye peeche dab jaye —
        // pura travel viewport-bhar ka hai, is liye padhne ka poora time milta hai
        if (i < cards.length - 1) {
          gsap.to(card.querySelector('.stack-skin'), {
            scale: 0.94,
            filter: 'brightness(.45)',
            transformOrigin: 'center top',
            ease: 'none',
            scrollTrigger: {
              trigger: cards[i + 1],
              start: 'top bottom',
              end: 'top top',
              scrub: true,
              invalidateOnRefresh: true,
            },
          })
        }
      })
      requestAnimationFrame(() => ScrollTrigger.refresh())
    }, rootRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={rootRef} className="relative bg-winedeep">
      {/* intro */}
      <div className="text-center pt-20 md:pt-28 pb-12 px-5 text-cream">
        <span className="eyebrow">The Craft</span>
        <h2 className="font-serif font-medium text-[#FBF2E6] text-2xl md:text-5xl mt-4">
          What I <span className="shimmer">create</span> for you
        </h2>
      </div>

      {PANELS.map((p, i) => (
        // FULL-WIDTH section — koi container nahi, koi chhota card nahi.
        // sticky top i*PEEK => har pichhle card ki patli jhalak upar dikhti hai (book stack)
        <div
          key={p.id}
          className="stack-card sticky w-full"
          style={{ top: i * PEEK, zIndex: i + 1 }}
        >
          <div
            className={`stack-skin w-full will-change-transform border-t  overflow-hidden shadow-[0_-22px_60px_rgba(0,0,0,.55)] ${
              p.light ? 'border-gold/60' : 'border-goldbright/40'
            }`}
            style={{ background: SHADES[i], height: `calc(100vh - ${i * PEEK}px)` }}
          >
            <div className="h-full max-w-[1240px] mx-auto grid md:grid-cols-2 gap-6 md:gap-12 items-center px-6 md:px-10 py-12 relative">
              {/* ghost word */}
              <span
                className={`absolute inset-0 flex items-center justify-center font-serif italic text-[24vw] md:text-[14vw] pointer-events-none select-none whitespace-nowrap ${
                  p.light ? 'text-burgundy/[.05]' : 'text-goldlight/[.06]'
                }`}
              >
                {p.word}
              </span>

              {/* text */}
              <div className="relative z-[2] order-2 md:order-1">
                <span className={`stack-rise block font-serif italic text-xl ${p.light ? 'text-gold' : 'text-goldbright'}`}>
                  0{i + 1}
                  <span className={`text-sm font-caps not-italic tracking-[.3em] uppercase ml-2 ${p.light ? 'text-inksoft/70' : 'text-creamdim/60'}`}>
                    of 0{PANELS.length}
                  </span>
                </span>
                <h3 className={`stack-rise font-serif font-medium text-2xl md:text-5xl mt-4 leading-tight ${p.light ? 'text-burgundy' : 'text-[#FBF2E6]'}`}>
                  {p.title}
                </h3>
                <p className={`stack-rise mt-5 max-w-[44ch] text-sm leading-relaxed sm:text-[1.20rem] sm:leading-[1.6] md:text-lg ${p.light ? 'text-inksoft' : 'text-creamdim'}`}>
                  {p.text}
                </p>
                {i === PANELS.length - 1 && (
                  <Link to="/portfolio" className="stack-rise btn-main inline-block mt-8">
                    Explore The Gallery
                  </Link>
                )}
              </div>

              {/* artwork */}
              <div className="relative z-[2] order-1 md:order-2 h-[34vh] md:h-[64vh]">
                <div
                  className="absolute inset-0 p-2 md:p-3 shadow-[0_30px_70px_rgba(0,0,0,.5),0_0_50px_rgba(217,172,85,.18)] overflow-hidden"
                  style={{ background: 'linear-gradient(140deg,#8A5E1B,#D9AC55 30%,#8A5E1B 55%,#F0D08A 80%,#8A5E1B)' }}
                >
                  <img
                    src={p.src}
                    alt={p.title}
                    loading={i === 0 ? 'eager' : 'lazy'}
                    className="stack-art w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}