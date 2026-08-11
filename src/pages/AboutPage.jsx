import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { About } from '../components/Sections'
import { PageHero } from '../components/Extras'
import { processSteps, funFacts } from '../data'
import { useGsapReveal } from '../hooks'
import MiniHead from '../components/MiniHead'
import Heading from '../components/Heading'

gsap.registerPlugin(ScrollTrigger)

function Timeline() {
  const ref = useRef(null)
  useLayoutEffect(() => {
    const rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const mobile = window.matchMedia('(max-width: 767px)').matches
    if (rm || mobile) return
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
        {/* <span className="eyebrow">My Process</span> */}
        <MiniHead text="My Process" />
        {/* <h2 className="font-serif font-medium text-burgundy text-4xl md:text-5xl mt-4">From Brief to <span className="shimmer">Delivery</span></h2> */}
        <Heading text="From Brief to" highlight="Delivery" />
      </div>
      <div ref={ref} className="max-w-[680px] mx-auto relative pl-10">
        <span className="tl-line absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-gold via-goldbright to-gold" />
        {processSteps.map((s) => (
          <div key={s.num} className="tl-step relative pb-9 last:pb-0">
            <span className="absolute -left-10 top-0 w-8 h-8 rounded-full border border-gold bg-paper2 flex items-center justify-center font-serif italic text-sm text-burgundy shadow-[0_6px_14px_rgba(var(--color-gold),.25)]">{s.num}</span>
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
        {/* <span className="eyebrow">Off The Canvas</span> */}
        <MiniHead text="Off The Canvas" />
        {/* <h2 className="font-serif font-medium text-burgundy text-4xl md:text-5xl mt-4">A Few Fun <span className="shimmer">Facts</span></h2> */}
        <Heading text="A Few Fun" highlight="Facts" />
      </div>
      <div className="max-w-[900px] mx-auto grid sm:grid-cols-2 gap-6">
        {funFacts.map((f, i) => (
          <div key={f.label}
            className={`reveal bg-white border border-gold/35 p-6 shadow-[0_12px_30px_rgba(var(--color-burgundy),.1)] transition-transform duration-300 hover:rotate-0 hover:-translate-y-1 ${rotations[i % 4]} relative`}>
            <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full shadow" style={{ background: 'radial-gradient(circle at 35% 30%,var(--gold-light),var(--gold) 60%,var(--gold))' }} />
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
      <PageHero eyebrow="About Me" title="The Story Behind the" shimmerWord="Sketches" script='"Every character has a soul  I just try to draw it out."' />
      <About />
     
      <MyJourneySection/>
      <Timeline />
      <FunFacts />
    </>
  )
}

export function MyJourneySection() {
  const journeySteps = [
    {
      number: "01",
      title: "Where It Began",
      text: (
        <>
          What started as sketching favorite characters from fantasy and
          romance novels slowly became something much bigger. I found myself
          drawn to the emotions behind every story the quiet moments, the
          unforgettable characters, and the worlds readers carry with them
          long after the final page.
        </>
      ),
    },
    {
      number: "02",
      title: "From Passion to Purpose",
      text: (
        <>
          Over time, authors began reaching out to bring their own characters
          to life, turning a personal passion into a creative career. Today, I
          work with writers and readers around the world to create illustrations
          that feel authentic, emotional, and true to the stories that inspired
          them.
        </>
      ),
    },
    {
      number: "03",
      title: "The Heart of Every Piece",
      text: (
        <>
          From the first sketch to the final details, my focus is on capturing
          the{" "}
          <span
            className="
              rounded-sm
              px-1.5
              py-0.5
              font-medium
              text-burgundy
            "
            style={{
              backgroundColor: "rgba(var(--color-gold), 0.2)",
            }}
          >
            personality, emotion and magic
          </span>{" "}
          that make each character unforgettable.
        </>
      ),
    },
    {
      number: "04",
      title: "The Goal",
      text: (
        <>
          Whether it is a character portrait, a romantic scene, or a complete
          book cover, my goal is simple: to create artwork that makes people
          feel connected to the stories they love.
        </>
      ),
    },
  ];

  return (
    <section
      className="
        aurora
        relative
        isolate
        overflow-hidden
        px-5
        py-20
        md:py-28
      "
    >
      {/* Decorative background glows */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          top-16
          -z-10
          h-[460px]
          w-[460px]
          rounded-full
          blur-[140px]
        "
        style={{
          backgroundColor: "rgba(var(--color-burgundy), 0.12)",
        }}
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-36
          bottom-10
          -z-10
          h-[420px]
          w-[420px]
          rounded-full
          blur-[130px]
        "
        style={{
          backgroundColor: "rgba(var(--color-rose), 0.15)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1180px]">
        {/* Section heading */}
        {/* <header className="mx-auto mb-14 max-w-3xl text-center md:mb-20">
          <div className="flex items-center justify-center gap-4">
            <span
              aria-hidden="true"
              className="
                h-px
                w-10
                bg-gradient-to-r
                from-transparent
                to-gold/70
              "
            />

            <span
              className="
                font-caps
                text-[0.65rem]
                uppercase
                tracking-[0.34em]
                text-gold
              "
            >
              My Journey
            </span>

            <span
              aria-hidden="true"
              className="
                h-px
                w-10
                bg-gradient-to-l
                from-transparent
                to-gold/70
              "
            />
          </div>

          <h2
            className="
              mx-auto
              mt-5
              max-w-[22ch]
              font-display
              text-3xl
              uppercase
              leading-[1.15]
              tracking-[0.07em]
              text-ink
              sm:text-4xl
              md:text-5xl
            "
          >
            The Story Behind{" "}
            <span className="shimmer font-editorial normal-case">
              the Art
            </span>
          </h2>

          <div className="rule-gold mx-auto mt-6 h-px w-40" />

          <p
            className="
              mx-auto
              mt-6
              max-w-[58ch]
              font-editorial
              text-base
              leading-relaxed
              text-ink-soft
              sm:text-lg
            "
          >
            A creative journey shaped by stories, emotion and the desire to
            make imagined characters feel real.
          </p>
        </header> */}

           <div className="reveal text-center mx-auto max-w-2xl  ">

        <MiniHead text=" My Journey" />

          <Heading
            text="The Story Behind"
            highlight="the Art"
          />

          <p
            className="
              mt-5 mb-10 max-w-[56ch]
              text-sm leading-relaxed
              text-inksoft
              sm:text-[1.2rem]
              sm:leading-[1.6]
              text-center
            "
          >
            A creative journey shaped by stories, emotion and the desire to make imagined characters feel real.
          </p>
          </div>

        <div
          className="
            grid
            grid-cols-1
            items-start
            gap-12
            lg:grid-cols-[0.82fr_1.18fr]
            lg:gap-16
          "
        >
          {/* Sticky quote card */}
          <aside className="relative lg:sticky lg:top-24">
            {/* Glow behind card */}
            <div
              aria-hidden="true"
              className="
                gradient-violet
                absolute
                -inset-5
                -z-10
                rounded-[2rem]
                opacity-20
                blur-2xl
              "
            />

            <div
              className="
                plum-panel
                relative
                overflow-hidden
                rounded-2xl
                border
                border-gold/25
                px-7
                py-9
                text-paper
                shadow-[0_32px_80px_rgba(var(--color-wine-dark),0.38)]
                sm:px-9
                sm:py-11
              "
            >
              {/* Decorative circles */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  -right-16
                  -top-16
                  h-44
                  w-44
                  rounded-full
                  border
                  border-gold/10
                "
              />

              <div
                aria-hidden="true"
                className="
                  absolute
                  -right-8
                  -top-8
                  h-28
                  w-28
                  rounded-full
                  border
                  border-gold/15
                "
              />

              <span
                aria-hidden="true"
                className="
                  relative
                  block
                  font-editorial
                  text-7xl
                  leading-[0.7]
                  text-gold
                "
              >
                “
              </span>

              <blockquote
                className="
                  relative
                  mt-5
                  font-editorial
                  mdLtext-2xl
                  text-lg
                  italic
                  leading-[1.45]
                  text-gold-light
                  sm:text-[1.7rem]
                "
              >
                Every character exists in someone’s imagination. I simply help
                bring them into the world.
              </blockquote>

              <div className="mt-7 flex items-center gap-4">
                <span className="h-px w-12 bg-gold/50" />

                <span
                  className="
                    font-script
                    text-3xl
                    text-rose
                  "
                >
                  Daisy
                </span>
              </div>

              <div
                className="
                  mt-8
                  border-t
                  border-gold/20
                  pt-5
                "
              >
                <p
                  className="
                    font-caps
                    text-[0.6rem]
                    uppercase
                    tracking-[0.24em]
                    text-gold/65
                  "
                >
                  Illustrator &amp; Storyteller
                </p>
              </div>

              {/* Hand-drawn badge */}
              <div
                className="
                  mt-8
                  rounded-xl
                  border
                  border-gold/25
                  bg-white/[0.05]
                  md:p-4
                  p-2
                  backdrop-blur-sm
                "
              >
                <div className="flex items-start flex-col md:flex-row gap-3">
                  <span
                    aria-hidden="true"
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-gold/35
                      text-sm
                      text-gold
                    "
                  >
                    ✦
                  </span>

                  <div>
                    <p
                      className="
                        font-caps
                        text-[0.62rem]
                        uppercase
                        tracking-[0.2em]
                        text-gold
                      "
                    >
                      The Promise
                    </p>

                    <p
                      className="
                        mt-1
                        font-editorial
                        text-sm
                        leading-relaxed
                        text-paper/65
                      "
                    >
                      Every piece is created by hand, with care, intention and
                      no shortcuts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Journey timeline */}
          <div className="relative">
            {/* Desktop timeline line */}
            <span
              aria-hidden="true"
              className="
                absolute
                bottom-8
                left-[23px]
                top-8
                hidden
                w-px
                bg-gradient-to-b
                from-gold/10
                via-gold/45
                to-gold/10
                sm:block
              "
            />

            <div className="space-y-6">
              {journeySteps.map((step, index) => (
                <article
                  key={step.number}
                  className="
                    group
                    relative
                    rounded-2xl
                    border
                    border-burgundy/10
                    bg-[var(--paper)]/75
                    p-6
                    shadow-[0_14px_38px_rgba(var(--color-wine),0.08)]
                    backdrop-blur-md
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-gold/35
                    hover:shadow-[0_22px_55px_rgba(var(--color-wine),0.13)]
                    sm:ml-16
                    sm:p-8
                  "
                >
                  {/* Timeline number */}
                  <span
                    className="
                      mb-5
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-gold/35
                      bg-[var(--paper)]
                      font-caps
                      text-[0.62rem]
                      tracking-[0.1em]
                      text-burgundy
                      shadow-[0_8px_20px_rgba(var(--color-wine),0.1)]
                      sm:absolute
                      sm:-left-[65px]
                      sm:top-7
                    "
                  >
                    {step.number}
                  </span>

                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="
                        h-px
                        w-7
                        bg-gold/60
                        transition-all
                        duration-500
                        group-hover:w-11
                      "
                    />

                    <h3
                      className="
                        font-display
                        text-base
                        uppercase
                        tracking-[0.12em]
                        text-burgundy
                        sm:text-xl
                      "
                    >
                      {step.title}
                    </h3>
                  </div>

                  <p
                    className={`
                      mt-5 mb-10 max-w-[56ch]
              text-sm leading-relaxed
              text-inksoft
              sm:text-[1.2rem]
              sm:leading-[1.6]
                      ${
                        index === 0
                          ? `
                            first-letter:float-left
                            first-letter:mr-2
                            first-letter:mt-1
                            first-letter:font-display
                            first-letter:text-5xl
                            first-letter:font-medium
                            first-letter:leading-[0.8]
                            first-letter:text-burgundy
                          `
                          : ""
                      }
                    `}
                  >
                    {step.text}
                  </p>
                </article>
              ))}
            </div>

            {/* Highlight statement */}
            <div
              className="
                relative
                mt-8
                overflow-hidden
                rounded-2xl
                border
                border-gold/30
                px-6
                py-6
                text-center
                shadow-[0_18px_45px_rgba(var(--color-wine),0.1)]
                sm:ml-16
                sm:px-9
              "
              style={{
                background: `
                  linear-gradient(
                    120deg,
                    rgba(var(--color-gold), 0.13),
                    rgba(var(--color-rose), 0.12),
                    rgba(var(--color-burgundy), 0.09)
                  )
                `,
              }}
            >
              <span
                aria-hidden="true"
                className="
                  absolute
                  -left-4
                  -top-5
                  text-6xl
                  text-gold/10
                "
              >
                ✦
              </span>

              <p
                className="
                  relative
                  font-editorial
                  text-base
                  italic
                  leading-relaxed
                  text-wine
                  sm:text-2xl
                "
              >
                Every artwork is a small piece of someone else’s story and I
                take that seriously, one sketch at a time.
              </p>

              <div className="mt-5 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-gold/45" />
                <span className="text-xs text-gold">✦</span>
                <span className="h-px w-10 bg-gold/45" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}