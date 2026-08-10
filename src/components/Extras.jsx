import { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import { Link } from 'react-router-dom'
import { FiPlus, FiChevronDown, FiStar, FiMail } from 'react-icons/fi'
import { FaInstagram } from 'react-icons/fa6'
import { services, faqs, testimonials, taggedBy, INSTAGRAM, IG_HANDLE, artworks } from '../data'
import { SectionHead } from './Sections'
import PrimaryButton from './Button'

/* ---------- Services accordion (Services page + overview) ---------- */

export function ServicesAccordion() {
  const [active, setActive] = useState(0)
  const s = services[active]

  return (
    <div className="max-w-[1200px] mx-auto w-full">
      <div className="grid md:grid-cols-[360px_1fr] rounded-2xl overflow-hidden border border-gold/30 bg-white shadow-[0_18px_45px_rgba(var(--color-burgundy),.14)]">

        {/* ---- Tab list ---- */}
        <div
          className="flex md:flex-col gap-2 p-3 md:p-4 overflow-x-auto md:overflow-visible [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          style={{ background: 'var(--gradient-violet)' }}
          role="tablist"
          aria-label="Services"
        >
          {services.map((svc, i) => {
            const on = i === active
            return (
              <button
                key={svc.title}
                role="tab"
                aria-selected={on}
                onClick={() => setActive(i)}
                className={`group flex-none md:flex-auto flex items-center gap-3 px-3 py-3 rounded-xl border text-left transition-all duration-300 ${
                  on
                    ? 'bg-gold border-gold text-wine-deep shadow-[0_8px_20px_rgba(var(--color-wine-dark),.35)]'
                    : 'bg-white/10 border-white/10 text-paper hover:bg-white/20 hover:border-gold/40'
                }`}
              >
                <img
                  src={svc.img}
                  alt=""
                  loading="lazy"
                  className={`w-11 h-11 md:w-20 md:h-20 rounded-lg object-cover object-top flex-none border ${on ? 'border-wine-deep/30' : 'border-gold/40'}`}
                />
                <span className="min-w-0 whitespace-nowrap md:whitespace-normal">
                  <span className="font-serif text-[0.98] text-[1.3rem] leading-tight block">{svc.title}</span>
                  <span className={`hidden md:block text-[.66rem] md:text-[0.98rem] font-semibold tracking-wide mt-0.5 ${on ? 'text-wine-deep/70' : 'text-gold-light'}`}>
                    {svc.start}
                  </span>
                </span>
              </button>
            )
          })}
        </div>

        {/* ---- Active panel ---- */}
        <div key={active} className="p-6 sm:p-8 md:p-9 route-fade">
          <h3 className="font-serif text-2xl md:text-[1.9rem] text-burgundy leading-tight">{s.title}</h3>
          <p className="text-[.95rem] text-ink font-semibold mt-1.5">{s.summary}</p>
          <p className="font-serif italic text-gold text-lg font-bold mt-2.5">{s.start}</p>

          <div className="h-px w-full my-6 bg-gradient-to-r from-gold/50 via-burgundy/25 to-transparent" />

          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-7 text-[.92rem] text-inksoft">
            <div className="min-w-0">
              <p className="leading-relaxed">{s.description}</p>
              <h4 className="font-caps text-[.78rem] tracking-[.22em] font-bold uppercase text-gold mt-5 mb-2.5">What's included</h4>
              <ul className="grid gap-2">
                {s.included.map((it) => (
                  <li key={it} className="flex gap-2.5">
                    <span className="text-gold flex-none mt-0.5">✦</span>
                    <span className="min-w-0">{it}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-5 content-start min-w-0">
              <div>
                <h4 className="font-caps text-[.78rem] tracking-[.22em] font-bold uppercase text-gold mb-1.5">Revisions</h4>
                <p>{s.revisions}</p>
              </div>
              <div>
                <h4 className="font-caps text-[.78rem] tracking-[.22em] font-bold uppercase text-gold mb-1.5">What I need from you</h4>
                <p>{s.references}</p>
              </div>
              <div>
                <h4 className="font-caps text-[.78rem] tracking-[.22em] font-bold uppercase text-gold mb-1.5">Turnaround</h4>
                <p>{s.turnaround}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}



/* ---------- FAQ accordion ---------- */
export function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <div className="max-w-[760px] mx-auto mt-14">
      <h3 className="reveal font-display text-3xl text-ink text-center mb-6">Frequently Asked</h3>
      <div className="reveal bg-white border border-gold/30 shadow-[0_16px_40px_rgba(var(--color-burgundy),.1)] px-6 md:px-8">
        {faqs.map((f, i) => (
          <div key={f.q} className={i < faqs.length - 1 ? 'border-b border-burgundy/12' : ''}>
            <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full flex justify-between items-center gap-4 py-4 text-left font-serif text-lg md:text-xl text-burgundy hover:text-brand transition-colors">
              {f.q}
              <FiPlus className={`text-gold flex-none transition-transform duration-300 ${open === i ? 'rotate-45' : ''}`} />
            </button>
            <div className={`grid transition-all duration-400 ${open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
              <p className="overflow-hidden text-[1rem] text-inksoft pb-4">{f.a}</p>
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
    <figure className="reveal group bg-white border border-gold/35 p-5 shadow-[0_10px_28px_rgba(var(--color-burgundy),.09)] transition-all duration-400 hover:-translate-y-1.5 hover:border-goldbright hover:shadow-[0_20px_45px_rgba(var(--color-burgundy),.18)] flex gap-4">
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
          <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full z-[2] shadow" style={{ background: 'radial-gradient(circle at 35% 30%,var(--gold-light),var(--gold) 60%,var(--gold))' }} />
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
          <h2 className="font-serif font-medium text-[var(--paper)] text-3xl sm:text-4xl md:text-6xl mt-2 md:mt-3 leading-tight">Loved on <span className="shimmer">Instagram</span></h2>
          <p className="text-creamdim text-sm md:text-base max-w-[34ch] md:max-w-[46ch] mx-auto mt-3 md:mt-4 leading-relaxed">Authors from all over the world tag me in their cover reveals and character art — here's the love, straight from their pages.</p>
          <a href={INSTAGRAM} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 md:gap-2.5 mt-6 md:mt-8 font-caps text-[.6rem] md:text-[.7rem] tracking-[.18em] md:tracking-[.2em] uppercase text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full transition-transform hover:scale-105 shadow-[0_12px_30px_rgba(0,0,0,.4)]"
            style={{ background: 'linear-gradient(45deg,var(--brand),var(--burgundy),var(--burgundy2),var(--brand),var(--gold-bright))' }}>
            <FaInstagram className="text-base" /> Follow {IG_HANDLE}
          </a>
        </div>
      </div>
    </div>
  )
}

/* ---------- Instagram section ---------- */
// export function InstagramSection({ compact }) {
//   return (
//     <section className={`${compact ? 'py-16 md:py-24' : 'pb-16 md:pb-24'} text-cream relative overflow-hidden`} style={{ background: 'linear-gradient(140deg,var(--burgundy),var(--burgundy) 55%,var(--wine))' }}>
//       {!compact && <IgScatter />}
      
//     </section>
//   )
// }

/* ---------- Final CTA banner ---------- */
export function CTABanner({ title = 'Ready to See Your Characters Come to Life?', sub = 'Get a personalized quote in 24-48 hours.', btn = 'Get a Custom Quote', to = '/contact' }) {
  return (
    <section className="py-16 md:py-20 text-center bg-white relative overflow-hidden">
      
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(100deg,transparent 30%,rgba(var(--color-gold-light),.12) 50%,transparent 70%)', backgroundSize: '200% 100%', animation: 'shine 6s linear infinite' }} />
      <div className="reveal-text relative z-[1] max-w-[720px] mx-auto px-5">
        <h2 className="font-serif text-ink text-4xl md:text-5xl">{title}</h2>
        <p className="text-inksoft mt-3">{sub}</p>
        <PrimaryButton to={to} className="mt-8">{btn} ✦</PrimaryButton>
      </div>
    </section>
  )
}

/* ---------- small page hero ---------- */
const PAGE_HERO_SPARKLES = [
  { top: "14%", left: "7%", delay: "0s", size: "text-sm" },
  { top: "30%", left: "38%", delay: "1.4s", size: "text-xs" },
  { top: "72%", left: "13%", delay: "2.6s", size: "text-base" },
  { top: "80%", left: "42%", delay: "3.4s", size: "text-xs" },
  { top: "18%", left: "88%", delay: "0.8s", size: "text-sm" },
  { top: "62%", left: "76%", delay: "2s", size: "text-xs" },
];

const PAGE_HERO_DUST = [
  {
    top: "22%",
    left: "18%",
    size: 3,
    duration: "16s",
    delay: "0s",
    drift: 18,
  },
  {
    top: "40%",
    left: "60%",
    size: 2,
    duration: "22s",
    delay: "3s",
    drift: -24,
  },
  {
    top: "72%",
    left: "30%",
    size: 4,
    duration: "19s",
    delay: "1.5s",
    drift: 22,
  },
  {
    top: "35%",
    left: "82%",
    size: 2,
    duration: "24s",
    delay: "5s",
    drift: -16,
  },
  {
    top: "60%",
    left: "8%",
    size: 3,
    duration: "20s",
    delay: "2.2s",
    drift: 20,
  },
  {
    top: "85%",
    left: "68%",
    size: 2,
    duration: "26s",
    delay: "4s",
    drift: -20,
  },
  {
    top: "15%",
    left: "50%",
    size: 3,
    duration: "18s",
    delay: "6s",
    drift: 14,
  },
  {
    top: "50%",
    left: "40%",
    size: 2,
    duration: "23s",
    delay: "1s",
    drift: -18,
  },
];

export function PageHero({
  eyebrow,
  title,
  shimmerWord,
  script,
}) {
  return (
    <header
      className="
        aurora
        relative
        isolate
        overflow-hidden
        px-5
        pb-14
        pt-36
        text-center
        text-cream
        md:pb-20
      "
    >
      {/* Moving aurora background */}
      <div
        aria-hidden="true"
        className="
          pagehero-aurora
          pointer-events-none
          absolute
          inset-0
          z-0
        "
        style={{
          background: `
            radial-gradient(
              120% 80% at 15% 20%,
              rgba(120, 60, 130, 0.12),
              transparent 55%
            ),
            radial-gradient(
              100% 90% at 85% 80%,
              rgba(200, 130, 180, 0.14),
              transparent 60%
            )
          `,
        }}
      />

      {/* Left violet glow */}
      <div
        aria-hidden="true"
        className="
          pagehero-glow-a
          pointer-events-none
          absolute
          -left-24
          top-10
          z-0
          h-72
          w-72
          rounded-full
          blur-[90px]
        "
        style={{
          backgroundColor:
            "rgba(var(--color-burgundy), 0.18)",
        }}
      />

      {/* Right rose glow */}
      <div
        aria-hidden="true"
        className="
          pagehero-glow-b
          pointer-events-none
          absolute
          -right-20
          bottom-0
          z-0
          h-80
          w-80
          rounded-full
          blur-[100px]
        "
        style={{
          backgroundColor:
            "rgba(var(--color-rose), 0.22)",
        }}
      />

      {/* Center breathing glow */}
      <div
        aria-hidden="true"
        className="
          pagehero-glow-c
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          z-0
          h-96
          w-96
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          blur-[120px]
        "
        style={{
          backgroundColor: "rgba(139, 92, 160, 0.22)",
        }}
      />

      {/* Roaming plum glow */}
      <div
        aria-hidden="true"
        className="
          pagehero-glow-d
          pointer-events-none
          absolute
          left-[35%]
          top-[10%]
          z-0
          h-64
          w-64
          rounded-full
          blur-[110px]
        "
        style={{
          backgroundColor: "rgba(190, 120, 170, 0.2)",
        }}
      />

      {/* Sparkles */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]
        "
      >
        {PAGE_HERO_SPARKLES.map((sparkle, index) => (
          <span
            key={index}
            className={`
              sparkle
              absolute
              text-burgundy2/45
              ${sparkle.size}
            `}
            style={{
              top: sparkle.top,
              left: sparkle.left,
              animationDelay: sparkle.delay,
            }}
          >
            ✦
          </span>
        ))}
      </div>

      {/* Floating dust */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]
        "
      >
        {PAGE_HERO_DUST.map((dust, index) => (
          <span
            key={index}
            className="
              pagehero-dust
              absolute
              rounded-full
            "
            style={{
              top: dust.top,
              left: dust.left,
              width: `${dust.size}px`,
              height: `${dust.size}px`,
              backgroundColor:
                "rgba(var(--color-burgundy), 0.5)",
              boxShadow:
                "0 0 6px rgba(var(--color-burgundy), 0.45)",
              animationDuration: dust.duration,
              animationDelay: dust.delay,
              "--pagehero-drift": `${dust.drift}px`,
            }}
          />
        ))}
      </div>

      {/* Page hero content */}
      <div className="relative z-10 mx-auto max-w-[800px]">
      
        <span
            className="
              shine inline-flex items-center gap-2
              overflow-hidden rounded-full
              border border-burgundy/20
              bg-paper-deep/75
              px-4 py-1.5
              font-sans text-[0.6rem]
              uppercase tracking-[0.28em]
              text-burgundy
              shadow-[var(--shadow-paper)]
              sm:text-[0.7rem]
            "
          >
            <span aria-hidden="true" className="text-burgundy2">
              ✦
            </span>
            {eyebrow}
          </span>

        <h1
          className="
            mt-4
            font-display
            text-4xl
            text-ink
            md:text-6xl
          "
        >
          {title}{" "}
          {shimmerWord && (
            <span className=" text-burgundy">
              {shimmerWord}
            </span>
            
          )}
        </h1>

        {script && (
          <p
            className="
              mt-4
              font-script
              text-2xl
              text-burgundy
              md:text-3xl
            "
          >
            {script}
          </p>
        )}
      </div>

      <style>{`
        @keyframes pagehero-aurora-motion {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(2%, -1.5%, 0)
              scale(1.05);
          }
        }

        @keyframes pagehero-glow-a-motion {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(30px, -20px, 0);
          }
        }

        @keyframes pagehero-glow-b-motion {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(-25px, 25px, 0);
          }
        }

        @keyframes pagehero-glow-c-motion {
          0%,
          100% {
            transform:
              translate(-50%, -50%)
              scale(1);
            opacity: 0.7;
          }

          50% {
            transform:
              translate(-50%, -50%)
              scale(1.18);
            opacity: 0.9;
          }
        }

        @keyframes pagehero-glow-d-motion {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(40px, 30px, 0);
          }
        }

        @keyframes pagehero-dust-motion {
          0% {
            transform: translate3d(0, 0, 0);
            opacity: 0;
          }

          15% {
            opacity: 1;
          }

          85% {
            opacity: 1;
          }

          100% {
            transform: translate3d(
              var(--pagehero-drift, 20px),
              -60px,
              0
            );
            opacity: 0;
          }
        }

        .pagehero-aurora {
          animation:
            pagehero-aurora-motion
            18s ease-in-out infinite;
        }

        .pagehero-glow-a {
          animation:
            pagehero-glow-a-motion
            9s ease-in-out infinite;
        }

        .pagehero-glow-b {
          animation:
            pagehero-glow-b-motion
            11s ease-in-out infinite;
        }

        .pagehero-glow-c {
          animation:
            pagehero-glow-c-motion
            8s ease-in-out infinite;
        }

        .pagehero-glow-d {
          animation:
            pagehero-glow-d-motion
            13s ease-in-out infinite;
        }

        .pagehero-dust {
          animation-name: pagehero-dust-motion;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          filter: blur(0.5px);
        }

        @media (prefers-reduced-motion: reduce) {
          .pagehero-aurora,
          .pagehero-glow-a,
          .pagehero-glow-b,
          .pagehero-glow-c,
          .pagehero-glow-d,
          .pagehero-dust {
            animation: none;
          }
        }
      `}</style>
    </header>
  );
}
