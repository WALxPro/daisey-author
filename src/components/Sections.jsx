import { useMemo } from "react";
import { PiSparkleFill } from "react-icons/pi";
import { artworks } from "../data";
import { useCountUp, useReducedMotion } from "../hooks";
import { Link } from "react-router-dom";
import PrimaryButton from "./Button";
import Heading from "./Heading";
import MiniHead from "./MiniHead";

const WORDS = [
  "HAND DRAWN",
  "MADE WITH LOVE",
  "FULLY CUSTOM",
  "DAISEY SKETCHES",
  "FANTASY ROMANCE",
  "NO AI",
  "COMMISSIONS OPEN",
];

export default function Marquee() {
  const marqueeWords = [...WORDS, ...WORDS];

  return (
    <div className="gradient-violet overflow-hidden border-y border-burgundy/20 py-3">
      <div className="marquee-track flex w-max whitespace-nowrap">
        {marqueeWords.map((word, index) => (
          <span
            key={`${word}-${index}`}
            className="mx-4 inline-flex items-center gap-8 font-sans text-[0.62rem] uppercase tracking-[0.34em] text-white/85"
          >
            {word}

            <span aria-hidden="true" className="text-rose">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function Flourish() {
  return (
    <div
      className="flex items-center justify-center gap-4 mx-auto max-w-[420px] text-gold"
      aria-hidden
    >
      <span className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/40" />
      <svg viewBox="0 0 60 24" className="w-[34px] h-5 flex-none">
        <path
          d="M2 12 C14 2, 22 2, 30 12 C38 22, 46 22, 58 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <circle cx="30" cy="12" r="2.4" fill="currentColor" />
      </svg>
      <span className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/40" />
    </div>
  );
}

export function SectionHead({ eyebrow, title, shimmerWord, children, dark }) {
  return (
    <div className="reveal-text text-center max-w-[680px] mx-auto mb-12">
      <span className="eyebrow">{eyebrow}</span>
      <h2
        className={`font-serif font-medium text-2xl md:text-5xl leading-tight mt-4 ${dark ? "text-[var(--paper)]" : "text-burgundy"}`}
      >
        {title} <span className="shimmer">{shimmerWord}</span>
      </h2>
      {children && (
        <p
          className={`mt-3.5 text-sm leading-relaxed sm:text-[1.20rem] sm:leading-[1.6] px-3 ${dark ? "text-creamdim" : "text-inksoft"}`}
        >
          {children}
        </p>
      )}
    </div>
  );
}

function CardStars() {
  const stars = useMemo(
    () =>
      Array.from({ length: 10 }, (_, i) => ({
        id: i,
        size: 1.5 + Math.random() * 2,
        left: 8 + Math.random() * 84,
        top: 8 + Math.random() * 84,
        dur: 2 + Math.random() * 3,
        delay: Math.random() * 3,
      })),
    [],
  );
  return stars.map((s) => (
    <span
      key={s.id}
      className="absolute rounded-full bg-goldlight animate-twinkle z-[1]"
      style={{
        width: s.size,
        height: s.size,
        left: `${s.left}%`,
        top: `${s.top}%`,
        animationDuration: `${s.dur}s`,
        animationDelay: `${s.delay}s`,
      }}
    />
  ));
}

const chips = [
  {
    src: "/images/character-wolfborn.jpg",
    cls: `
      top-[5%] left-[5%] -rotate-[8deg]
      group-hover:-rotate-[11deg]
      group-hover:-translate-y-1
    `,
  },
  {
    src: "/images/couple-icerink.jpg",
    cls: `
      top-[6%] right-[5%] rotate-[7deg]
      group-hover:rotate-[10deg]
      group-hover:-translate-y-1
    `,
  },
  {
    src: "/images/character-roseline.jpg",
    cls: `
      bottom-[5%] left-[6%] rotate-[6deg]
      group-hover:rotate-[9deg]
      group-hover:translate-y-1
    `,
  },
  {
    src: "/images/book-cover-swanston.jpg",
    cls: `
      bottom-[6%] right-[5%] -rotate-[7deg]
      group-hover:-rotate-[10deg]
      group-hover:translate-y-1
    `,
  },
];

export function About() {
  const reducedMotion = useReducedMotion();

  const [commissionRef, commissions] = useCountUp(500);
  const [authorsRef, authors] = useCountUp(1000);

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-20 md:py-32"
    >
      {/* Soft section decoration */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -left-40 top-20
          h-80 w-80 rounded-full
          bg-rose/10 blur-[110px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -right-40 bottom-10
          h-80 w-80 rounded-full
          bg-burgundy/5 blur-[120px]
        "
      />

      <div
        className="
          relative mx-auto grid
          max-w-[1200px]
          items-center gap-10
          px-5
          md:grid-cols-[0.85fr_1.15fr]
          md:px-10
          lg:gap-20
        "
      >
        {/* Signature artwork card */}
        <div
          className="
            reveal group relative
            flex aspect-[4/5]
            items-center justify-center
            overflow-hidden
            border border-gold/70
            shadow-[0_24px_60px_rgba(var(--color-wine-deep),0.28)]
          "
          style={{
            background: `
              radial-gradient(
                ellipse 70% 55% at 75% 15%,
                rgb(var(--color-burgundy2) / 0.22),
                transparent 62%
              ),
              radial-gradient(
                ellipse 65% 55% at 15% 90%,
                rgb(var(--color-rose) / 0.12),
                transparent 62%
              ),
              linear-gradient(
                160deg,
                var(--wine),
                var(--wine-deep) 58%,
                var(--wine-dark)
              )
            `,
          }}
        >
          {/* Inner border */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute inset-2.5 z-[3]
              border border-rose-soft/35
            "
          />

          {!reducedMotion && <CardStars />}

          {/* Artwork chips */}
          {chips.map((chip) => (
            <div
              key={chip.src}
              className={`
                absolute z-[2]
                aspect-[3/4] w-[32%]
                bg-paper p-[5px]
                shadow-[0_12px_28px_rgba(var(--color-wine-dark),0.45)]
                transition-transform duration-500
                ${chip.cls}
              `}
            >
              {/* Gold pin */}
              <span
                aria-hidden="true"
                className="
                  absolute -top-[7px] left-1/2 z-[3]
                  h-3 w-3 -translate-x-1/2
                  rounded-full shadow
                "
                style={{
                  background: `
                    radial-gradient(
                      circle at 35% 30%,
                      var(--gold-light),
                      var(--gold) 60%,
                      var(--gold)
                    )
                  `,
                }}
              />

              <img
                src={chip.src}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover object-top"
              />
            </div>
          ))}

          {/* Center signature panel */}
          <div
            className="
              relative z-[4]
              w-[82%]
              border border-rose/25
              bg-winedeep/85
              px-4 py-4
              text-center
              shadow-[0_16px_40px_rgba(var(--color-wine-dark),0.45)]
              backdrop-blur-md
              sm:w-auto
              sm:px-6 sm:py-5
            "
          >
            {/* Rotating seal */}
            <svg
              className="
                mx-auto mb-2
                h-[56px] w-[56px]
                animate-spinslow
                sm:mb-2.5
                sm:h-[74px] sm:w-[74px]
              "
              viewBox="0 0 120 120"
              aria-hidden="true"
            >
              <defs>
                <path
                  id="sealcirc"
                  d="
                    M60,60
                    m-42,0
                    a42,42 0 1,1 84,0
                    a42,42 0 1,1 -84,0
                  "
                />
              </defs>

              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="var(--rose)"
                strokeWidth="1.4"
              />

              <circle
                cx="60"
                cy="60"
                r="42"
                fill="none"
                stroke="var(--rose)"
                strokeWidth="1"
                strokeDasharray="2 3"
              />

              <text
                style={{
                  fontFamily: "Cinzel",
                  fontSize: 9,
                  letterSpacing: ".26em",
                  fill: "var(--rose-soft)",
                }}
              >
                <textPath href="#sealcirc">
                  HAND DRAWN ✦ WITH LOVE ✦ DAISYY ✦
                </textPath>
              </text>

              <text
                x="60"
                y="70"
                textAnchor="middle"
                style={{
                  fontFamily: '"Great Vibes"',
                  fontSize: 30,
                  fill: "var(--brand)",
                }}
              >
                D
              </text>
            </svg>

            {/* Artist name */}
            <span
              className="
                block font-script
                text-4xl leading-none
                text-cream
                [text-shadow:0_4px_18px_rgba(var(--color-burgundy2),0.35)]
                sm:text-5xl
                md:text-6xl
              "
            >
              Daisyy
            </span>

            {/* Artist title */}
            <span
              className="
                mt-2 block
                font-caps text-[0.48rem]
                uppercase tracking-[0.22em]
                text-gold-light
                sm:mt-3
                sm:text-[0.6rem]
                sm:tracking-[0.32em]
              "
            >
              Fantasy &amp; Romance Illustrator
            </span>

            {/* Divider */}
            <span
              aria-hidden="true"
              className="
                mx-auto mt-2 block
                h-px w-[52px]
                bg-gradient-to-r
                from-transparent via-rose to-transparent
                sm:mt-3
                sm:w-[70px]
              "
            />

            {/* Quote */}
            <span
              className="
                mt-2 block
                font-serif text-sm italic
                text-cream-dim
                sm:mt-3
                sm:text-base
              "
            >
              “every stroke tells a story”
            </span>
          </div>
        </div>

        {/* About content */}
        <div className="reveal">
          <MiniHead text=" About The Artist" />

          <Heading
            text="Bringing Stories to Life, One"
            highlight="Illustration"
          />

          <p
            className="
              my-5 max-w-[56ch]
              text-sm leading-relaxed
              text-inksoft
              sm:text-[1.2rem]
              sm:leading-[1.6]
            "
          >
            I'm Daisy, a fantasy and romance illustrator passionate about
            turning characters, emotions, and stories into memorable visual art.
            Every piece I create is carefully hand-drawn with attention to
            detail, ensuring that each character feels authentic, expressive,
            and alive. My journey as an artist began with a love for
            storytelling and a fascination with the worlds hidden inside books.
          </p>

          <p
            className="
              mb-5 max-w-[56ch]
              text-sm leading-relaxed
              text-inksoft
              sm:text-[1.2rem]
              sm:leading-[1.6]
            "
          >
            Over the years, I've had the privilege of working with authors,
            readers, and creatives from around the world, helping them give a
            face to the characters they've imagined for so long. Whether it's a
            beloved book character, an original fantasy hero, or a heartfelt
            romantic scene, my goal is always the same:
          </p>

      
                        <p
                className="
                  relative
                  font-editorial
                  text-xl
                  italic
                  leading-relaxed
                  text-wine
                  sm:text-2xl
                  text-center
                "
              >
                  to create artwork that captures emotion, tells a story, and leaves a
            lasting impression.
              </p>

          {/* Stats */}
          <div className="mb-[50px] mt-10 flex flex-wrap gap-9">
            <div className="border-l-2 border-gold/75 pl-4">
              <b
                ref={commissionRef}
                className="
                  block font-serif
                  text-4xl font-medium
                  text-burgundy
                "
              >
                {commissions}+
              </b>

              <span
                className="
                  text-[0.7rem]
                  uppercase tracking-[0.16em]
                  text-ink-soft
                "
              >
                Commissions
              </span>
            </div>

            <div className="border-l-2 border-gold/75 pl-4">
              <b
                ref={authorsRef}
                className="
                  block font-serif
                  text-4xl font-medium
                  text-burgundy
                "
              >
                {authors.toLocaleString()}+
              </b>

              <span
                className="
                  text-[0.7rem]
                  uppercase tracking-[0.16em]
                  text-ink-soft
                "
              >
                Happy Authors
              </span>
            </div>

            <div className="border-l-2 border-gold/75 pl-4">
              <b
                className="
                  block font-serif
                  text-4xl font-medium
                  text-burgundy
                "
              >
                100%
              </b>

              <span
                className="
                  text-[0.7rem]
                  uppercase tracking-[0.16em]
                  text-ink-soft
                "
              >
                Hand Drawn No AI
              </span>
            </div>
          </div>

          <PrimaryButton to="/about">✦ Read My Full Story</PrimaryButton>
        </div>
      </div>

      <span className="sr-only">
        <PiSparkleFill />
      </span>
    </section>
  );
}
