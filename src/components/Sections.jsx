import { useMemo } from "react";
import { PiSparkleFill } from "react-icons/pi";
import { artworks } from "../data";
import { useCountUp, useReducedMotion } from "../hooks";
import { Link } from "react-router-dom";

export function Marquee({ onOpenLightbox }) {
  const items = [...artworks, ...artworks]; // duplicated for seamless loop
  return (
    <div
      className="relative overflow-hidden py-6 border-y border-gold"
      style={{
        background:
          "linear-gradient(120deg,#5A1820 0%,#6E2029 55%,#4A141B 100%)",
      }}
      aria-label="Artwork showcase strip"
    >
      <div className="absolute inset-y-0 left-0 w-24 z-[2] pointer-events-none bg-gradient-to-r from-[#4A141B] to-transparent" />
      <div className="absolute inset-y-0 right-0 w-24 z-[2] pointer-events-none bg-gradient-to-l from-[#4A141B] to-transparent" />
      <div className="flex gap-5 w-max animate-marquee hover:[animation-play-state:paused]">
        {items.map((a, i) => (
          <figure
            key={`${a.id}-${i}`}
            className="w-[170px] h-[220px] flex-none border border-goldbright/60 p-[5px] bg-white/5 transition-transform duration-300 hover:-translate-y-1.5 cursor-pointer"
          >
            <img
              src={a.src}
              alt={a.title}
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
          </figure>
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
    <div className="text-center max-w-[680px] mx-auto mb-12 reveal">
      <span className="eyebrow">{eyebrow}</span>
      <h2
        className={`font-serif font-medium text-2xl md:text-5xl leading-tight mt-4 ${dark ? "text-[#FBF2E6]" : "text-burgundy"}`}
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
    cls: "top-[5%] left-[5%] -rotate-[8deg] group-hover:-rotate-[11deg] group-hover:-translate-y-1",
  },
  {
    src: "/images/couple-icerink.jpg",
    cls: "top-[6%] right-[5%] rotate-[7deg] group-hover:rotate-[10deg] group-hover:-translate-y-1",
  },
  {
    src: "/images/character-roseline.jpg",
    cls: "bottom-[5%] left-[6%] rotate-[6deg] group-hover:rotate-[9deg] group-hover:translate-y-1",
  },
  {
    src: "/images/book-cover-swanston.jpg",
    cls: "bottom-[6%] right-[5%] -rotate-[7deg] group-hover:-rotate-[10deg] group-hover:translate-y-1",
  },
];

export function About() {
  const rm = useReducedMotion();
  const [r1, chars] = useCountUp(500);
  const [r2, comms] = useCountUp(1000);
  return (
    <section
      id="about"
      className="py-20 md:py-32 relative"
      style={{
        background: `radial-gradient(ellipse 50% 55% at 0% 30%, rgba(228,168,168,.3), transparent 60%),
        radial-gradient(ellipse 45% 50% at 100% 85%, rgba(198,58,58,.08), transparent 60%), #FBF6EF`,
      }}
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 grid md:grid-cols-[.85fr_1.15fr] gap-10 lg:gap-20 items-center">
        {/* signature card — no author photo needed */}
        <div
          className="reveal group relative aspect-[4/5] flex items-center justify-center overflow-hidden border border-gold shadow-[0_24px_60px_rgba(90,24,32,.28)]"
          style={{
            background: `radial-gradient(ellipse 70% 50% at 75% 15%, rgba(198,58,58,.3), transparent 60%),
            radial-gradient(ellipse 60% 50% at 15% 90%, rgba(217,172,85,.18), transparent 60%),
            linear-gradient(160deg,#3A1119,#241016 60%,#1C0A0F)`,
          }}
        >
          <div className="absolute inset-2.5 border border-goldbright/40 pointer-events-none z-[3]" />
          {!rm && <CardStars />}
          {chips.map((c) => (
            <div
              key={c.src}
              className={`absolute w-[32%] aspect-[3/4] p-[5px] bg-paper shadow-[0_12px_28px_rgba(0,0,0,.45)] z-[2] transition-transform duration-500 ${c.cls}`}
            >
              <span
                className="absolute -top-[7px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full z-[3] shadow"
                style={{
                  background:
                    "radial-gradient(circle at 35% 30%,#F0D08A,#B9862F 60%,#8A5E1B)",
                }}
              />
              <img
                src={c.src}
                alt=""
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
          ))}
          <div className="relative z-[4] text-center px-4 py-4 w-[82%] sm:w-auto sm:px-6 sm:py-5 bg-winedeep/55 backdrop-blur border border-goldbright/50 shadow-[0_16px_40px_rgba(0,0,0,.4)]">
            {" "}
            <svg
              className="w-[56px] h-[56px] sm:w-[74px] sm:h-[74px] mx-auto mb-2 sm:mb-2.5 animate-spinslow"
              viewBox="0 0 120 120"
              aria-hidden
            >
              <defs>
                <path
                  id="sealcirc"
                  d="M60,60 m-42,0 a42,42 0 1,1 84,0 a42,42 0 1,1 -84,0"
                />
              </defs>
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="#D9AC55"
                strokeWidth="1.4"
              />
              <circle
                cx="60"
                cy="60"
                r="42"
                fill="none"
                stroke="#D9AC55"
                strokeWidth="1"
                strokeDasharray="2 3"
              />
              <text
                style={{
                  fontFamily: "Cinzel",
                  fontSize: 9,
                  letterSpacing: ".26em",
                  fill: "#E9C87F",
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
                  fill: "#C63A3A",
                }}
              >
                D
              </text>
            </svg>
            <span className="font-script text-cream block leading-none text-4xl sm:text-5xl md:text-6xl [text-shadow:0_4px_18px_rgba(217,172,85,.35)]">
              Daisyy
            </span>
            <span className="font-caps text-[.48rem] sm:text-[.6rem] tracking-[.22em] sm:tracking-[.32em] uppercase text-goldbright block mt-2 sm:mt-3">
              Fantasy &amp; Romance Illustrator
            </span>
            <span className="block w-[52px] sm:w-[70px] h-px mx-auto mt-2 sm:mt-3 bg-gradient-to-r from-transparent via-goldbright to-transparent" />{" "}
            <span className="font-serif italic text-creamdim block mt-2 sm:mt-3 text-sm sm:text-base">
              "every stroke tells a story"
            </span>
          </div>
        </div>

        <div className="reveal">
          <span className="eyebrow">About The Artist</span>
          <h2 className="font-serif font-medium text-burgundy text-2xl md:text-5xl leading-tight my-5">
            Bringing Stories to Life, One
            <span className="shimmer"> Illustration</span> at a Time.
          </h2>
          <p className="text-inksoft max-w-[56ch] text-sm leading-relaxed sm:text-[1.20rem] sm:leading-[1.6] my-5">
            I'm Daisy, a fantasy and romance illustrator passionate about
            turning characters, emotions, and stories into memorable visual art.
            Every piece I create is carefully hand-drawn with attention to
            detail, ensuring that each character feels authentic, expressive,
            and alive. My journey as an artist began with a love for
            storytelling and a fascination with the worlds hidden inside books.
          </p>
          <p className="text-inksoft max-w-[56ch] text-sm leading-relaxed sm:text-[1.20rem] sm:leading-[1.6] mb-5">
            Over the years, I've had the privilege of working with authors,
            readers, and creatives from around the world, helping them give a
            face to the characters they've imagined for so long. Whether it's a
            beloved book character, an original fantasy hero, or a heartfelt
            romantic scene, my goal is always the same:
          </p>
          <p className=" shimmer font-semibold max-w-[56ch] text-sm leading-relaxed sm:text-[1rem] sm:leading-[1.6]">
            to create artwork that captures emotion, tells a story, and leaves a
            lasting impression.
          </p>

          <div className="flex flex-wrap gap-9 mt-10 mb-[50px]">
            <div className="border-l-2 border-gold pl-4">
              <b
                ref={r1}
                className="font-serif font-medium text-4xl text-burgundy block"
              >
                {chars}+
              </b>
              <span className="text-[.7rem] tracking-[.16em] uppercase text-inksoft">
                Commissions
              </span>
            </div>
            <div className="border-l-2 border-gold pl-4">
              <b
                ref={r2}
                className="font-serif font-medium text-4xl text-burgundy block"
              >
                {comms.toLocaleString()}+
              </b>
              <span className="text-[.7rem] tracking-[.16em] uppercase text-inksoft">
                Happy Authors
              </span>
            </div>
            <div className="border-l-2 border-gold pl-4">
              <b className="font-serif font-medium text-4xl text-burgundy block">
                100%
              </b>
              <span className="text-[.7rem] tracking-[.16em] uppercase text-inksoft">
                Hand Drawn No AI
              </span>
            </div>
          </div>
          <Link
            to="/about"
            className="font-caps text-[.84rem] tracking-[.2em] uppercase text-paper bg-burgundy border border-burgundy px-4 py-3 shadow-[0_6px_18px_rgba(90,24,32,.25)] transition-colors hover:bg-gold hover:border-gold hover:text-ink"
          >
            ✦ Read My Full Story
          </Link>
        </div>
      </div>
      <span className="sr-only">
        <PiSparkleFill />
      </span>
    </section>
  );
}
