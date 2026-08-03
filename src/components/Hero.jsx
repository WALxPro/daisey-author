import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import { heroSlides } from "../data";
import { useReducedMotion } from "../hooks";
import { Link } from "react-router-dom";

const STATS = [
  { value: "120+", label: "Commissions" },
  { value: "8 yrs", label: "Hand-drawn" },
  { value: "0%", label: "AI used" },
];

const SPARKLES = [
  { top: "12%", left: "6%", delay: "0s", size: "text-sm" },
  { top: "28%", left: "44%", delay: "1.4s", size: "text-xs" },
  { top: "68%", left: "12%", delay: "2.6s", size: "text-base" },
  { top: "82%", left: "38%", delay: "3.4s", size: "text-xs" },
  { top: "18%", left: "88%", delay: "0.8s", size: "text-sm" },
  { top: "58%", left: "72%", delay: "2s", size: "text-xs" },
];

// Extra drifting dust particles for a more "alive" background
const DUST = [
  { top: "22%", left: "18%", size: 3, dur: "16s", delay: "0s", drift: 18 },
  { top: "40%", left: "60%", size: 2, dur: "22s", delay: "3s", drift: -24 },
  { top: "72%", left: "30%", size: 4, dur: "19s", delay: "1.5s", drift: 22 },
  { top: "35%", left: "82%", size: 2, dur: "24s", delay: "5s", drift: -16 },
  { top: "60%", left: "8%", size: 3, dur: "20s", delay: "2.2s", drift: 20 },
  { top: "85%", left: "68%", size: 2, dur: "26s", delay: "4s", drift: -20 },
  { top: "15%", left: "50%", size: 3, dur: "18s", delay: "6s", drift: 14 },
  { top: "50%", left: "40%", size: 2, dur: "23s", delay: "1s", drift: -18 },
];

const HEADING_WORDS = ["Bringing", "Your", "Characters", "to", "Life"];

export default function Hero({}) {
  const reducedMotion = useReducedMotion();

  const slides = heroSlides.slice(0, 4);
  const slideCount = slides.length;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [progressKey, setProgressKey] = useState(0);

  const rootRef = useRef(null);

  // Entrance animations
  useEffect(() => {
    if (reducedMotion) return undefined;

    // Large blurred layers are costly on small and lower-powered devices.
    const animateAmbient = window.matchMedia("(min-width: 768px)").matches;

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      timeline
        .from(".h-eyebrow-line", {
          scaleX: 0,
          opacity: 0,
          duration: 0.7,
          transformOrigin: "left center",
          ease: "power2.out",
        })
        .from(
          ".h-script",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.35",
        )
        .from(
          ".h-word",
          {
            y: 60,
            opacity: 0,
            rotate: 2,
            duration: 0.9,
            stagger: 0.07,
            ease: "back.out(1.6)",
          },
          "-=0.25",
        )
        .from(
          ".h-sub",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .from(
          ".h-btn",
          {
            y: 16,
            scale: 0.94,
            duration: 0.5,
            stagger: 0.09,
            ease: "power3.out",
          },
          "-=0.3",
        )
        .from(
          ".h-tag",
          {
            y: 10,
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
            y: 50,
            opacity: 0,
            scale: 0.96,
            rotate: -4,
            duration: 1.1,
            ease: "power4.out",
          },
          0.3,
        );

      // Frame floating animation
      gsap.to(".h-frame", {
        y: -10,
        duration: 4.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 1.2,
      });

      if (animateAmbient) {
        gsap.to(".h-glow-a", { x: 30, y: -20, duration: 9, ease: "sine.inOut", repeat: -1, yoyo: true });
        gsap.to(".h-glow-b", { x: -25, y: 25, duration: 11, ease: "sine.inOut", repeat: -1, yoyo: true });
        gsap.to(".h-glow-c", { scale: 1.18, opacity: 0.9, duration: 8, ease: "sine.inOut", repeat: -1, yoyo: true });
        gsap.to(".h-glow-d", { x: 40, y: 30, duration: 13, ease: "sine.inOut", repeat: -1, yoyo: true });
      }
    }, rootRef);

    return () => context.revert();
  }, [reducedMotion]);

  // Automatic slider
  useEffect(() => {
    if (reducedMotion || slideCount <= 1) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      if (document.visibilityState !== "visible") return;

      setCurrentSlide((current) => (current + 1) % slideCount);

      setProgressKey((current) => current + 1);
    }, 6000);

    return () => window.clearInterval(intervalId);
  }, [reducedMotion, slideCount]);

  const activeSlide = slides[currentSlide];

  const handleDotClick = (index) => (event) => {
    event.stopPropagation();

    setCurrentSlide(index);
    setProgressKey((current) => current + 1);
  };

  return (
    <section
      ref={rootRef}
      id="home"
      className="
        aurora relative overflow-hidden
        px-5 pb-16 pt-12
        sm:px-8 sm:pb-20 sm:pt-14
        lg:min-h-[calc(100vh-80px)]
        lg:px-12 lg:pb-20 lg:pt-16
      "
    >
      {/* Slow drifting aurora wash */}
      <div
        aria-hidden="true"
        className="h-aurora-shift pointer-events-none absolute inset-0 -z-[1]"
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

      {/* Violet background glow */}
      <div
        aria-hidden="true"
        className="
          h-glow-a pointer-events-none
          absolute -left-24 top-10
          h-72 w-72 rounded-full
          bg-burgundy/16 blur-[70px]
        "
      />

      {/* Rose background glow */}
      <div
        aria-hidden="true"
        className="
          h-glow-b pointer-events-none hidden md:block
          absolute -right-20 bottom-0
          h-80 w-80 rounded-full
          bg-rose/20 blur-[75px]
        "
      />

      {/* Breathing center glow */}
      <div
        aria-hidden="true"
        className="
          h-glow-c pointer-events-none hidden md:block
          absolute left-1/2 top-1/2
          h-96 w-96 -translate-x-1/2 -translate-y-1/2
          rounded-full
          blur-[85px]
          opacity-70
        "
        style={{
          backgroundColor: "rgba(139, 92, 160, 0.22)",
        }}
      />

      {/* Roaming plum glow */}
      <div
        aria-hidden="true"
        className="
          h-glow-d pointer-events-none hidden md:block
          absolute left-[35%] top-[10%]
          h-64 w-64 rounded-full
          blur-[80px]
        "
        style={{
          backgroundColor: "rgba(190, 120, 170, 0.20)",
        }}
      />

      {/* Floating sparkles */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {SPARKLES.map((sparkle, index) => (
          <span
            key={index}
            className={`
              sparkle absolute
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

      {/* Drifting dust particles */}
      {!reducedMotion && (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden md:block">
          {DUST.map((dust, index) => (
            <span
              key={index}
              className="h-dust absolute rounded-full"
              style={{
                top: dust.top,
                left: dust.left,
                width: `${dust.size}px`,
                height: `${dust.size}px`,
                backgroundColor: "rgba(139, 92, 160, 0.55)",
                boxShadow: "0 0 6px rgba(139, 92, 160, 0.5)",
                animationDuration: dust.dur,
                animationDelay: dust.delay,
                "--drift": `${dust.drift}px`,
              }}
            />
          ))}
        </div>
      )}

      {/* Flex layout */}
      <div
        className="
          container relative mx-auto
          flex flex-col items-center
          gap-10
          lg:flex-row
          lg:items-center
          lg:justify-between
          lg:gap-6
        "
      >
        {/* Left content: 50% */}
        <div
          className="
            w-full max-w-xl
            text-center
            lg:max-w-none
            lg:flex-[1_1_50%]
            lg:text-left
          "
        >
          {/* Badge */}
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
            Hand-drawn • Fully custom • Made with love
          </span>

          {/* Heading */}
          <h1
            className="
              mt-6 flex flex-wrap
              justify-center gap-x-[0.28em]
              font-display
              text-[2rem] leading-[1.08]
              uppercase tracking-[0.08em]
              text-ink
              sm:text-[3rem]
              lg:justify-start
              lg:text-[3.25rem]
              xl:text-[4.6rem]
            "
          >
            {HEADING_WORDS.map((word) => (
              <span key={word} className="h-word inline-block">
                {word}
              </span>
            ))}
          </h1>

          {/* Line */}
          <div
            aria-hidden="true"
            className="
              h-eyebrow-line
              mx-auto mt-6 h-px w-40
              bg-gradient-to-r
              from-transparent
              via-burgundy/70
              to-transparent
              lg:mx-0
            "
          />

          {/* Script heading */}
          <p
            className="
              h-script mt-5
              font-script text-3xl
              text-burgundy
              sm:text-5xl
              xl:text-6xl
            "
          >
            One Sketch at a Time
          </p>

          {/* Description */}
          <p
            className="
              h-sub mx-auto mt-6
              max-w-lg
              font-editorial text-lg
              leading-relaxed text-ink-soft
              sm:text-xl
              lg:mx-0 lg:text-xl
            "
          >
            Custom illustrations, couple art, and book covers for authors who
            want their story to be seen, not just read.
          </p>

          {/* Buttons */}
          <div
            className="
              mt-9 flex flex-wrap
              justify-center gap-4
              opacity-100
              lg:justify-start
            "
          >
            <Link
              href="/portfolio"
              className="
                h-btn gradient-violet group
                relative inline-flex
                items-center justify-center
                overflow-hidden rounded-full
                px-7 py-3.5
                font-sans text-[0.66rem]
                uppercase tracking-[0.22em]
                text-paper opacity-100
                shadow-[var(--shadow-paper)]
                transition-all duration-500
                hover:-translate-y-1
                hover:shadow-[0_18px_45px_rgba(var(--color-burgundy),0.24)]
              "
            >
              <span className="relative z-10">View the Gallery ✦</span>

              <span
                aria-hidden="true"
                className="
                  absolute inset-y-0 -left-full
                  w-1/2 skew-x-[-20deg]
                  bg-paper/25
                  transition-all duration-700
                  group-hover:left-full
                "
              />
            </Link>

            <Link
              to="/pricing"
              className="
                h-btn inline-flex
                items-center justify-center
                rounded-full
                border border-burgundy/30
                px-7 py-3.5
                font-sans text-[0.66rem]
                uppercase tracking-[0.22em]
                text-burgundy opacity-100
                transition-all duration-500
                hover:-translate-y-1
                hover:border-burgundy2
                hover:bg-paper-deep
              "
            >
              Commission Prices
            </Link>
          </div>

          
        </div>

        {/* Right frame: 50% */}
        <div
          className="
            relative w-full
            max-w-[660px]
            pb-12
            lg:ml-auto
            lg:flex-[1_1_50%]
          "
        >
          {/* Frame glow */}
          <div
            aria-hidden="true"
            className="
              gradient-violet
              absolute -inset-7 -z-10
              rounded-[2rem]
              opacity-15 blur-2xl
            "
          />

          {/* Main frame */}
          <div
            className="
              h-frame relative z-[5]
              w-full max-w-[620px]
              p-[10px]
              sm:p-[14px]
              lg:ml-auto
              lg:-rotate-[1deg]
            "
          >
            {/* White mount */}
            <div
              className="
                relative bg-paper
                p-2 sm:p-3
                shadow-[inset_0_0_25px_rgba(var(--color-burgundy),0.08)]
              "
            >
              {/* Plum inner frame */}
              <div
                className="relative p-2 sm:p-2.5"
                style={{
                  background: `
                    linear-gradient(
                      145deg,
                      var(--wine-deep),
                      var(--wine-dark)
                    )
                  `,
                }}
              >
                {/* Image viewport */}
                <div
                  className="
                    relative overflow-hidden
                    h-[420px]
                    sm:h-[520px]
                    lg:h-[580px]
                    xl:h-[620px]
                  "
                  style={{
                    backgroundColor: "var(--wine-dark)",
                  }}
                >
                  {slides.map((slide, index) => {
                    const isActive = index === currentSlide;

                    return (
                      <div
                        key={slide.id}
                        aria-hidden={!isActive}
                        className={`
                          absolute inset-0
                          transition-[opacity,transform]
                          duration-[1200ms]
                          ease-[cubic-bezier(0.22,1,0.36,1)]
                          ${
                            isActive
                              ? "pointer-events-auto scale-100 opacity-100"
                              : "pointer-events-none scale-[1.03] opacity-0"
                          }
                        `}
                      >
                        {/* Blurred background */}
                        <div
                          aria-hidden="true"
                          className={`
                            absolute -inset-10
                            bg-cover bg-center
                            opacity-30 blur-2xl
                            transition-transform
                            duration-[6000ms]
                            ease-linear
                            ${
                              isActive && !reducedMotion
                                ? "scale-125"
                                : "scale-110"
                            }
                          `}
                          style={{
                            backgroundImage: `url("${slide.src}")`,
                          }}
                        />

                        {/* Dark overlay */}
                        <div
                          aria-hidden="true"
                          className="absolute inset-0"
                          style={{
                            backgroundColor:
                              "rgba(var(--color-wine-deep), 0.52)",
                          }}
                        />

                        {/* Full image without cropping */}
                        <img
                          src={slide.src}
                          alt={slide.title}
                          loading={index === 0 ? "eager" : "lazy"}
                          decoding="async"
                          className="
                            relative z-[1]
  block h-full w-full
  object-contain
  p-1.5 sm:p-2
                          "
                        />
                      </div>
                    );
                  })}

                  {/* Glass reflection */}
                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute inset-0 z-[2]
                    "
                    style={{
                      background: `
                        linear-gradient(
                          200deg,
                          rgba(var(--color-paper), 0.16),
                          transparent 34%
                        )
                      `,
                    }}
                  />

                  {/* Violet inner glow */}
                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute inset-0 z-[2]
                    "
                    style={{
                      boxShadow:
                        "inset 0 0 35px rgba(var(--color-burgundy), 0.16)",
                    }}
                  />

                  {/* Slider dots */}
                  {slideCount > 1 && (
                    <div
                      className="
                        absolute right-3 top-3
                        z-[3] flex gap-2
                      "
                    >
                      {slides.map((slide, index) => {
                        const isActive = index === currentSlide;

                        return (
                          <button
                            key={slide.id}
                            type="button"
                            aria-label={`Show ${slide.title}`}
                            aria-current={isActive ? "true" : undefined}
                            onClick={handleDotClick(index)}
                            className="
                              relative h-[9px]
                              w-[9px] cursor-pointer
                            "
                          >
                            <span
                              className={`
                                absolute inset-0
                                rounded-full
                                transition-all duration-300
                                ${
                                  isActive
                                    ? "scale-110 bg-burgundy2 shadow-[0_0_10px_rgba(var(--color-burgundy2),0.9)]"
                                    : "bg-rose/45 hover:bg-burgundy2/70"
                                }
                              `}
                            />

                            {isActive && !reducedMotion && (
                              <span
                                key={progressKey}
                                className="
                                    absolute -inset-1.5
                                    rounded-full
                                    border border-burgundy2/70
                                  "
                                style={{
                                  animation:
                                    "h-dot-progress 4.2s linear forwards",
                                }}
                              />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Title plate */}
            {activeSlide && (
              <div
                className="
                  absolute -bottom-6 left-1/2
                  z-30 max-w-[90%]
                  -translate-x-1/2
                  overflow-hidden
                  text-ellipsis whitespace-nowrap
                  border border-white/20
                  px-6 py-2
                  text-center
                  font-caps text-[0.6rem]
                  uppercase tracking-[0.24em]
                  text-white
                "
                style={{
                  background: `
                    linear-gradient(
                      120deg,
                      var(--wine-deep),
                      var(--burgundy),
                      var(--burgundy2)
                    )
                  `,
                  boxShadow: "0 10px 25px rgba(var(--color-wine-deep), 0.28)",
                }}
              >
                {activeSlide.title}
              </div>
            )}

            {/* Bottom shadow */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -bottom-[52px]
                left-[8%] right-[8%]
                h-10 blur-md
              "
              style={{
                background: `
                  radial-gradient(
                    ellipse 50% 100% at 50% 0%,
                    rgba(var(--color-burgundy2), 0.24),
                    transparent 72%
                  )
                `,
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes h-dot-progress {
          from {
            clip-path: inset(0 0 0 0);
            opacity: 1;
          }

          to {
            clip-path: inset(0 0 0 100%);
            opacity: 1;
          }
        }

        @keyframes h-aurora-shift {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(2%, -1.5%, 0) scale(1.05);
          }
        }

        .h-aurora-shift {
          animation: h-aurora-shift 18s ease-in-out infinite;
        }

        @keyframes h-dust-float {
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
            transform: translate3d(var(--drift, 20px), -60px, 0);
            opacity: 0;
          }
        }

        .h-dust {
          animation-name: h-dust-float;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          filter: blur(0.5px);
        }

        @media (prefers-reduced-motion: reduce) {
          .h-aurora-shift,
          .h-dust {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
