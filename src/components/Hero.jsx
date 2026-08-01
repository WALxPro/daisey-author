import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";

import { heroSlides } from "../data";
import { useReducedMotion } from "../hooks";

const tags = [
  "Character Art",
  "Couples",
  "Romance Fantasy",
  "Book Covers",
];

function Stars({ count = 26 }) {
  const stars = useMemo(
    () =>
      Array.from({ length: count }, (_, index) => ({
        id: index,
        size: 1.5 + Math.random() * 2.5,
        left: Math.random() * 100,
        top: Math.random() * 55,
        duration: 2.2 + Math.random() * 3,
        delay: Math.random() * 3,
      })),
    [count],
  );

  return stars.map((star) => (
    <span
      key={star.id}
      className="absolute rounded-full bg-goldlight animate-twinkle pointer-events-none"
      style={{
        width: star.size,
        height: star.size,
        left: `${star.left}%`,
        top: `${star.top}%`,
        animationDuration: `${star.duration}s`,
        animationDelay: `${star.delay}s`,
      }}
    />
  ));
}

function Dust({ count = 16 }) {
  const dust = useMemo(
    () =>
      Array.from({ length: count }, (_, index) => ({
        id: index,
        size: 2 + Math.random() * 4,
        left: Math.random() * 100,
        duration: 9 + Math.random() * 10,
        delay: -Math.random() * 14,
      })),
    [count],
  );

  return dust.map((particle) => (
    <span
      key={particle.id}
      className="absolute rounded-full animate-drift pointer-events-none opacity-50"
      style={{
        width: particle.size,
        height: particle.size,
        left: `${particle.left}%`,
        bottom: -10,
        background: "radial-gradient(circle,#F0D08A,#B9862F)",
        animationDuration: `${particle.duration}s`,
        animationDelay: `${particle.delay}s`,
      }}
    />
  ));
}

function Watchers() {
  return (
    <svg
      className="absolute left-2 md:left-16 bottom-[-6px] w-[150px] md:w-[220px] z-[4] opacity-95 hidden sm:block"
      viewBox="0 0 220 150"
      aria-hidden="true"
    >
      <rect
        x="18"
        y="118"
        width="184"
        height="9"
        rx="4"
        fill="#0F0406"
      />

      <rect
        x="34"
        y="127"
        width="10"
        height="20"
        fill="#0F0406"
      />

      <rect
        x="176"
        y="127"
        width="10"
        height="20"
        fill="#0F0406"
      />

      <circle cx="86" cy="58" r="15" fill="#140609" />

      <path
        d="M64 122 C64 90 72 76 86 76 C100 76 108 90 108 122 Z"
        fill="#140609"
      />

      <circle cx="126" cy="66" r="13" fill="#1B0A0E" />

      <path
        d="M106 122 C106 94 113 82 126 82 C139 82 146 94 146 122 Z"
        fill="#1B0A0E"
      />

      <path
        d="M112 70 Q118 60 122 62"
        stroke="#1B0A0E"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />

      <path
        className="animate-heart"
        d="M106 34 c-3-6-12-4-12 2 c0 5 7 9 12 13 c5-4 12-8 12-13 c0-6-9-8-12-2z"
        fill="#C63A3A"
      />
    </svg>
  );
}

const H1_WORDS = [
  ["Bringing", "Your", "Characters", "to", "Life"],
  ["One", "Sketch", "at", "a", "Time"],
];

export default function Hero({ onOpenLightbox }) {
  const reducedMotion = useReducedMotion();

  const [currentSlide, setCurrentSlide] = useState(0);

  const rootRef = useRef(null);

  useEffect(() => {
    if (reducedMotion) return undefined;

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "back.out(1.8)",
        },
      });

      timeline
        .from(".h-word", {
          y: 70,
          opacity: 0,
          rotate: 3,
          duration: 0.8,
          stagger: 0.09,
        })
        .from(
          ".h-script",
          {
            y: 24,
            opacity: 0,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.55",
        )
        .from(
          ".h-sub",
          {
            y: 24,
            opacity: 0,
            duration: 0.55,
            ease: "power3.out",
          },
          "-=0.3",
        )
        .from(
          ".h-tag",
          {
            y: 12,
            opacity: 0,
            duration: 0.35,
            stagger: 0.05,
            ease: "power2.out",
          },
          "-=0.2",
        )
        .from(
          ".h-frame",
          {
            y: 40,
            opacity: 0,
            rotate: -3,
            duration: 0.9,
            ease: "power3.out",
          },
          0.35,
        );
    }, rootRef);

    return () => context.revert();
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion || heroSlides.length <= 1) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setCurrentSlide(
        (current) => (current + 1) % heroSlides.length,
      );
    }, 3800);

    return () => window.clearInterval(interval);
  }, [reducedMotion]);

  const activeSlide = heroSlides[currentSlide];

  return (
    <header
      ref={rootRef}
      id="home"
      className="min-h-screen flex items-center pt-28 sm:pt-32 pb-24 relative overflow-hidden text-cream"
      style={{
        background: `
          radial-gradient(
            ellipse 70% 55% at 68% 30%,
            rgba(198,58,58,.24),
            transparent 65%
          ),
          radial-gradient(
            ellipse 55% 45% at 12% 75%,
            rgba(122,44,54,.5),
            transparent 65%
          ),
          linear-gradient(
            180deg,
            #241016 0%,
            #3A1119 45%,
            #1C0A0F 100%
          )
        `,
      }}
    >
      {/* Spotlight beam */}
      <div
        className="absolute top-0 right-[6%] w-[46%] h-full pointer-events-none z-[2]"
        style={{
          background:
            "radial-gradient(ellipse 60% 90% at 50% 0%, rgba(240,208,138,.14), transparent 70%)",
        }}
      />

      {/* Background hills */}
      <svg
        className="absolute inset-x-0 bottom-0 w-full h-[34%] z-[1] opacity-90"
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,220 L0,140 L180,90 L340,150 L520,80 L700,160 L900,100 L1100,170 L1280,110 L1440,150 L1440,220 Z"
          fill="#160709"
          opacity=".9"
        />

        <path
          d="M0,220 L0,180 L220,140 L430,190 L640,150 L880,200 L1120,160 L1320,200 L1440,175 L1440,220 Z"
          fill="#0F0406"
        />
      </svg>

      {!reducedMotion && <Stars />}

      {!reducedMotion && <Dust />}

      <Watchers />

      <div
        className="
          relative z-[5]
          grid w-full
          max-w-[1240px]
          mx-auto
          px-5 sm:px-8 lg:px-10
          gap-10 lg:gap-14
          items-center
          lg:grid-cols-[minmax(0,.92fr)_minmax(0,1.08fr)]
        "
      >
        {/* Left content */}
        <div
          className="
            min-w-0
            w-full
            max-w-[560px]
            mx-auto lg:mx-0
            mt-5 lg:mt-0
            text-center lg:text-left
          "
        >
          <span
            className="
              h-script
              block
              font-script
              text-goldbright
              text-xl md:text-2xl
              leading-[1.15]
              tracking-normal
              -rotate-2
              origin-center lg:origin-left
            "
          >
            Hand-drawn • Fully custom • Made with love
          </span>

          <h1 className="font-serif font-medium text-[#FBF2E6] mt-2 mb-6">
            {H1_WORDS.map((line, lineIndex) => (
              <span
                key={lineIndex}
                className={`
                  block overflow-hidden
                  ${
                    lineIndex === 1
                      ? "mt-3 text-[1.45rem] sm:text-[1.7rem] leading-[1.15]"
                      : "text-[2rem] sm:text-[2.1rem] leading-[1.2]"
                  }
                  md:text-3xl
                  md:leading-[1.15]
                  lg:text-5xl
                `}
              >
                {line.map((word) => (
                  <span
                    key={`${lineIndex}-${word}`}
                    className={`
                      h-word
                      inline-block
                      mr-[0.22em]
                      ${lineIndex === 1 ? "shimmer" : ""}
                    `}
                  >
                    {word}
                  </span>
                ))}
              </span>
            ))}
          </h1>

          <p
            className="
              h-sub
              max-w-[46ch]
              mx-auto lg:mx-0
              text-creamdim
              text-sm sm:text-[1.03rem]
            "
          >
            Custom illustrations, couple art, and book covers for authors who
            want their story to be seen, not just read.
          </p>

          <div
            className="
              relative z-20
              flex flex-wrap
              items-center
              justify-center lg:justify-start
              gap-4
              mt-9
            "
          >
            <Link
              to="/portfolio"
              className="
                h-btn
                inline-flex
                items-center
                justify-center
                px-5 md:px-7
                py-3
                rounded-full
                bg-[#D9AC55]
                text-[#241016]
                text-sm
                font-semibold
                tracking-wide
                border
                border-[#F0D08A]
                hover:bg-[#F0D08A]
                transition-all
                duration-300
              "
            >
              View Portfolio
            </Link>

            <Link
              to="/pricing"
              className="
                h-btn
                inline-flex
                items-center
                justify-center
                px-5 md:px-7
                py-3
                rounded-full
                bg-white/10
                text-[#FBF2E6]
                text-sm
                font-semibold
                tracking-wide
                border
                border-[#D9AC55]
                hover:bg-[#D9AC55]
                hover:text-[#241016]
                transition-all
                duration-300
              "
            >
              Commission Me
            </Link>
          </div>

          <div
            className="
              flex flex-wrap
              justify-center lg:justify-start
              gap-2.5
              mt-8
            "
          >
            {tags.map((tag) => (
              <span
                key={tag}
                className="
                  h-tag
                  text-[.68rem]
                  tracking-[.15em]
                  uppercase
                  text-[#EDD6C4]
                  border
                  border-goldbright/45
                  bg-white/5
                  px-3.5
                  py-1.5
                  rounded-full
                "
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Artwork frame */}
        <div
          className="
            h-frame
            relative z-[5]
            order-first lg:order-none
            w-full
            max-w-[620px]
            mx-auto
            p-2.5 sm:p-3.5
            rotate-0 lg:-rotate-[1.2deg]
            shadow-[0_40px_90px_rgba(0,0,0,.6),0_0_70px_rgba(217,172,85,.28)]
          "
          style={{
            background:
              "linear-gradient(140deg,#8A5E1B,#D9AC55 30%,#8A5E1B 55%,#F0D08A 80%,#8A5E1B)",
          }}
        >
          <div className="bg-winedeep p-2 relative">
            <div
              className="
                relative
                overflow-hidden
                bg-winedark
                h-[420px]
                sm:h-[520px]
                lg:h-[580px]
                xl:h-[620px]
              "
            >
              {heroSlides.map((slide, index) => {
                const isActive = index === currentSlide;

                return (
                  <div
                    key={slide.id}
                    className={`
                      absolute inset-0
                      transition-opacity
                      duration-[1100ms]
                      ${
                        isActive
                          ? "opacity-100 pointer-events-auto"
                          : "opacity-0 pointer-events-none"
                      }
                    `}
                    aria-hidden={!isActive}
                  >
                    {/* Blurred background fills extra frame space */}
                    <div
                      className="
                        absolute
                        -inset-8
                        bg-cover
                        bg-center
                        blur-2xl
                        scale-110
                        opacity-35
                      "
                      style={{
                        backgroundImage: `url("${slide.src}")`,
                      }}
                      aria-hidden="true"
                    />

                    <div
                      className="absolute inset-0 bg-winedark/55"
                      aria-hidden="true"
                    />

                    {/* Complete artwork stays visible */}
                    <img
                      src={slide.src}
                      alt={slide.title}
                      className="
                        relative z-[1]
                        block
                        w-full
                        h-full
                        object-contain
                        p-1 sm:p-2
                      "
                      loading={index === 0 ? "eager" : "lazy"}
                      decoding="async"
                      onClick={() => {
                        if (onOpenLightbox) {
                          onOpenLightbox(slide);
                        }
                      }}
                    />
                  </div>
                );
              })}

              {/* Glass highlight */}
              <div
                className="absolute inset-0 z-[2] pointer-events-none"
                style={{
                  background:
                    "linear-gradient(200deg,rgba(255,255,255,.10),transparent 35%)",
                }}
              />

              {/* Slider dots */}
              <div className="absolute right-3 top-3 flex gap-1.5 z-[3]">
                {heroSlides.map((slide, index) => {
                  const isActive = index === currentSlide;

                  return (
                    <button
                      key={slide.id}
                      type="button"
                      aria-label={`Show ${slide.title}`}
                      aria-current={isActive ? "true" : undefined}
                      onClick={(event) => {
                        event.stopPropagation();
                        setCurrentSlide(index);
                      }}
                      className={`
                        w-[7px]
                        h-[7px]
                        rounded-full
                        cursor-pointer
                        transition-all
                        ${
                          isActive
                            ? "bg-goldlight shadow-[0_0_8px_#F0D08A]"
                            : "bg-goldlight/35"
                        }
                      `}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          {/* Artwork title plate */}
          {activeSlide && (
            <div
              className="
                absolute
                left-1/2
                -translate-x-1/2
                -bottom-6
                max-w-[90%]
                text-winedark
                font-caps
                text-[.6rem]
                tracking-[.24em]
                uppercase
                text-center
                px-6
                py-2
                whitespace-nowrap
                overflow-hidden
                text-ellipsis
                shadow-[0_8px_20px_rgba(0,0,0,.45)]
              "
              style={{
                background:
                  "linear-gradient(120deg,#8A5E1B,#D9AC55,#8A5E1B)",
              }}
            >
              {activeSlide.title}
            </div>
          )}

          {/* Bottom glow */}
          <div
            className="
              absolute
              left-[8%]
              right-[8%]
              -bottom-[52px]
              h-10
              blur-md
            "
            style={{
              background:
                "radial-gradient(ellipse 50% 100% at 50% 0%, rgba(240,208,138,.22), transparent 70%)",
            }}
          />
        </div>
      </div>
    </header>
  );
}