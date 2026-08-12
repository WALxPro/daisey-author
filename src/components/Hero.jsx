import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { heroSlides } from "../data";
import { useReducedMotion } from "../hooks";

const SLIDES = heroSlides.slice(0, 4);
const HEADING_WORDS = ["Bringing", "Your", "Characters", "to", "Life"];

const SPARKLES = [
  { top: "14%", left: "7%", size: "text-xs" },
  { top: "72%", left: "10%", size: "text-sm" },
  { top: "20%", left: "90%", size: "text-xs" },
];

export default function Hero() {
  const reducedMotion = useReducedMotion();
  const slideCount = SLIDES.length;

  const [currentSlide, setCurrentSlide] = useState(0);
  const activeSlide = SLIDES[currentSlide];

  // Auto-advance only while the tab is visible.
  useEffect(() => {
    if (reducedMotion || slideCount <= 1) return undefined;

    const intervalId = window.setInterval(() => {
      if (document.visibilityState !== "visible") return;

      setCurrentSlide((current) => (current + 1) % slideCount);
    }, 6500);

    return () => window.clearInterval(intervalId);
  }, [reducedMotion, slideCount]);

  // Preload only the next slide.
  useEffect(() => {
    if (slideCount <= 1) return undefined;

    const nextSlide = SLIDES[(currentSlide + 1) % slideCount];

    if (!nextSlide?.src) return undefined;

    let cancelled = false;

    const preload = () => {
      if (cancelled) return;

      const image = new Image();
      image.decoding = "async";
      image.src = nextSlide.src;
    };

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(preload, {
        timeout: 1200,
      });

      return () => {
        cancelled = true;
        window.cancelIdleCallback?.(idleId);
      };
    }

    const timeoutId = window.setTimeout(preload, 500);

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, [currentSlide, slideCount]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section
      id="home"
      className="
        aurora
        relative
        overflow-hidden
        px-5
        pb-16
        pt-12
        sm:px-8
        sm:pb-20
        sm:pt-14
        lg:min-h-[calc(100vh-80px)]
        lg:px-12
        lg:pb-20
        lg:pt-16
      "
    >
      {/* Static background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-[1]"
        style={{
          background: `
            radial-gradient(
              75% 65% at 8% 18%,
              rgba(120, 60, 130, 0.13),
              transparent 62%
            ),
            radial-gradient(
              70% 65% at 92% 82%,
              rgba(200, 130, 180, 0.14),
              transparent 64%
            ),
            radial-gradient(
              45% 55% at 55% 38%,
              rgba(139, 92, 160, 0.10),
              transparent 70%
            )
          `,
        }}
      />

      {/* Static sparkles */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          hidden
          sm:block
        "
      >
        {SPARKLES.map((sparkle, index) => (
          <span
            key={index}
            className={`absolute text-burgundy2/35 ${sparkle.size}`}
            style={{
              top: sparkle.top,
              left: sparkle.left,
            }}
          >
            ✦
          </span>
        ))}
      </div>

      <div
        className="
          container
          relative
          mx-auto
          flex
          flex-col
          items-center
          gap-10
          lg:flex-row
          lg:items-center
          lg:justify-between
          lg:gap-6
        "
      >
        {/* Left content */}
        <div
          className="
            w-full
            max-w-xl
            text-center
            lg:max-w-none
            lg:flex-[1_1_50%]
            lg:text-left
          "
        >
          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-burgundy/20
              bg-paper-deep/75
              px-4
              py-1.5
              font-sans
              text-[0.6rem]
              uppercase
              tracking-[0.28em]
              text-burgundy
              shadow-[var(--shadow-paper)]
              sm:text-[0.7rem]
            "
          >
            <span
              aria-hidden="true"
              className="text-burgundy2"
            >
              ✦
            </span>

            Hand-drawn • Fully custom • Made with love
          </span>

          <h1
            className="
              mt-6
              flex
              flex-wrap
              justify-center
              gap-x-[0.28em]
              font-display
              text-[2rem]
              leading-[1.08]
              uppercase
              tracking-[0.08em]
              text-ink
              sm:text-[3rem]
              lg:justify-start
              lg:text-[3.25rem]
              xl:text-[4.6rem]
            "
          >
            {HEADING_WORDS.map((word) => (
              <span
                key={word}
                className="inline-block overflow-hidden"
              >
                {word}
              </span>
            ))}
          </h1>

          <div
            aria-hidden="true"
            className="
              mx-auto
              mt-6
              h-px
              w-40
              bg-gradient-to-r
              from-transparent
              via-burgundy/70
              to-transparent
              lg:mx-0
            "
          />

          <p
            className="
              mt-5
              font-script
              text-3xl
              text-burgundy
              sm:text-5xl
              xl:text-6xl
            "
          >
            One Sketch at a Time
          </p>

          <p
            className="
              mx-auto
              mt-6
              max-w-lg
              font-sans
              text-lg
              leading-relaxed
              text-ink-soft
              sm:text-xl
              lg:mx-0
              lg:text-xl
            "
          >
            Custom illustrations, couple art, and book covers for authors who
            want their story to be seen, not just read.
          </p>

          <div
            className="
              mt-9
              flex
              flex-wrap
              justify-center
              gap-4
              lg:justify-start
            "
          >
            <Link
              to="/portfolio"
              className="
                gradient-violet
                inline-flex
                items-center
                justify-center
                rounded-full
                px-7
                py-3.5
                font-sans
                text-[0.66rem]
                uppercase
                tracking-[0.22em]
                text-paper
                shadow-[var(--shadow-paper)]
                transition-transform
                duration-200
                hover:-translate-y-0.5
              "
            >
              View the Gallery ✦
            </Link>

            <Link
              to="/pricing"
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                border
                border-burgundy/30
                px-7
                py-3.5
                font-sans
                text-[0.66rem]
                uppercase
                tracking-[0.22em]
                text-burgundy
                transition-[transform,border-color,background-color]
                duration-200
                hover:-translate-y-0.5
                hover:border-burgundy2
                hover:bg-paper-deep
              "
            >
              Commission Prices
            </Link>
          </div>
        </div>

        {/* Right artwork frame */}
        <div
          className="
            relative
            w-full
            max-w-[660px]
            pb-12
            lg:ml-auto
            lg:flex-[1_1_50%]
          "
        >
          <div
            className="
              relative
              z-[5]
              w-full
              max-w-[620px]
              p-[10px]
              sm:p-[14px]
              lg:ml-auto
              lg:-rotate-[1deg]
            "
          >
            <div
              className="
                relative
                bg-paper
                p-2
                shadow-[0_18px_55px_rgba(var(--color-wine-deep),0.16)]
                sm:p-3
              "
            >
              <div
                className="relative p-2 sm:p-2.5"
                style={{
                  background:
                    "linear-gradient(145deg, var(--wine-deep), var(--wine-dark))",
                }}
              >
                <div
                  className="
                    relative
                    h-[420px]
                    overflow-hidden
                    sm:h-[520px]
                    lg:h-[580px]
                    xl:h-[620px]
                  "
                  style={{
                    background:
                      "radial-gradient(circle at 50% 35%, rgba(var(--color-burgundy2), 0.16), var(--wine-dark) 72%)",
                  }}
                >
                  {activeSlide && (
                    <img
                      key={activeSlide.id}
                      src={activeSlide.src}
                      alt={activeSlide.title}
                      loading={
                        currentSlide === 0
                          ? "eager"
                          : "lazy"
                      }
                      fetchPriority={
                        currentSlide === 0
                          ? "high"
                          : "auto"
                      }
                      decoding="async"
                      className={`
                        block
                        h-full
                        w-full
                        object-contain
                        p-1.5
                        sm:p-2
                        ${
                          reducedMotion
                            ? ""
                            : "h-slide-enter"
                        }
                      `}
                    />
                  )}

                  {/* Static highlight */}
                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                    "
                    style={{
                      background:
                        "linear-gradient(200deg, rgba(var(--color-paper), 0.12), transparent 32%)",
                    }}
                  />

                  {/* Slider dots */}
                  {slideCount > 1 && (
                    <div
                      className="
                        absolute
                        right-3
                        top-3
                        z-[3]
                        flex
                        gap-2
                      "
                    >
                      {SLIDES.map((slide, index) => {
                        const isActive =
                          index === currentSlide;

                        return (
                          <button
                            key={slide.id}
                            type="button"
                            aria-label={`Show ${slide.title}`}
                            aria-current={
                              isActive
                                ? "true"
                                : undefined
                            }
                            onClick={() =>
                              handleDotClick(index)
                            }
                            className="
                              grid
                              h-6
                              w-6
                              place-items-center
                              rounded-full
                            "
                          >
                            <span
                              className={`
                                block
                                rounded-full
                                transition-[transform,background-color]
                                duration-200
                                ${
                                  isActive
                                    ? "h-2.5 w-2.5 scale-110 bg-burgundy2"
                                    : "h-2 w-2 bg-rose/55 hover:bg-burgundy2/75"
                                }
                              `}
                            />
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {activeSlide && (
              <div
                className="
                  absolute
                  -bottom-6
                  left-1/2
                  z-30
                  max-w-[90%]
                  -translate-x-1/2
                  overflow-hidden
                  text-ellipsis
                  whitespace-nowrap
                  border
                  border-white/20
                  px-6
                  py-2
                  text-center
                  font-caps
                  text-[0.6rem]
                  uppercase
                  tracking-[0.24em]
                  text-white
                "
                style={{
                  background:
                    "linear-gradient(120deg, var(--wine-deep), var(--burgundy), var(--burgundy2))",
                  boxShadow:
                    "0 8px 20px rgba(var(--color-wine-deep), 0.22)",
                }}
              >
                {activeSlide.title}
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes h-slide-enter {
          from {
            opacity: 0.15;
            transform: scale(1.012);
          }

          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .h-slide-enter {
          animation: h-slide-enter 360ms ease-out both;
        }

        @media (max-width: 767px) {
          .h-slide-enter {
            animation: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .h-slide-enter {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}