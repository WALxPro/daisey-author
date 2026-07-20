import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { tiers } from "../data";


gsap.registerPlugin(ScrollTrigger);

const SHADES = {
  brown: `
    radial-gradient(
      ellipse 70% 60% at 85% 15%,
      rgba(198,58,58,.28),
      transparent 60%
    ),
    linear-gradient(160deg,#3A1119,#241016 60%,#1C0A0F)
  `,

  cream: `
    radial-gradient(
      ellipse 70% 60% at 12% 20%,
      rgba(228,168,168,.42),
      transparent 60%
    ),
    linear-gradient(160deg,#FFF9F3,#F1E1D5)
  `,
};

export function HomeCommissionStack() {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  // Home page par sirf pehle 4 cards
  const cards = tiers.slice(0, 4);

  useEffect(() => {
    const section = sectionRef.current;
    const cardsContainer = cardsRef.current;

    if (!section || !cardsContainer) return;

    const cardElements = gsap.utils.toArray(
      cardsContainer.querySelectorAll(".stack-card"),
    );

    const media = gsap.matchMedia();

    media.add(
      {
        desktop: "(min-width: 768px)",
        mobile: "(max-width: 767px)",
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const { desktop, mobile, reduceMotion } = context.conditions;

        if (reduceMotion) {
          gsap.set(cardElements, {
            clearProps: "all",
            opacity: 1,
            visibility: "visible",
          });

          return;
        }

        /*
         * Desktop:
         * left content fixed,
         * right side cards stacked,
         * full section pinned during scroll.
         */
        if (desktop) {
          cardElements.forEach((card, index) => {
            gsap.set(card, {
              zIndex: cardElements.length - index,
              y: index * 18,
              scale: 1 - index * 0.035,
              rotation: index % 2 === 0 ? -1.5 : 1.5,
              transformOrigin: "50% 100%",
            });
          });

          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: `+=${cards.length * 90}%`,
              scrub: 1,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          cardElements.forEach((card, index) => {
            if (index === cardElements.length - 1) return;

            const nextCards = cardElements.slice(index + 1);

            timeline
              .to(
                card,
                {
                  yPercent: -120,
                  xPercent: index % 2 === 0 ? -18 : 18,
                  rotation: index % 2 === 0 ? -8 : 8,
                  scale: 0.9,
                  opacity: 0,
                  ease: "power2.inOut",
                  duration: 1,
                },
                index,
              )
              .to(
                nextCards,
                {
                  y: (cardIndex) => cardIndex * 18,
                  scale: (cardIndex) => 1 - cardIndex * 0.035,
                  rotation: (cardIndex) =>
                    cardIndex % 2 === 0 ? -1.5 : 1.5,
                  ease: "power2.inOut",
                  duration: 1,
                  stagger: 0.03,
                },
                index,
              );
          });

          return;
        }

        /*
         * Mobile:
         * cards normal vertical layout mein rahenge.
         * Har card simple entrance animation karega.
         */
        if (mobile) {
          gsap.set(cardElements, {
            position: "relative",
            inset: "auto",
            opacity: 0,
            y: 60,
            scale: 0.96,
            rotation: 0,
          });

          cardElements.forEach((card) => {
            gsap.to(card, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
                once: true,
              },
            });
          });
        }
      },
    );

    ScrollTrigger.refresh();

    return () => {
      media.revert();
    };
  }, [cards.length]);

  return (
    <section
      ref={sectionRef}
      id="home-commissions"
      className="relative overflow-hidden bg-[#FBF6EF]"
    >
      <div
        className="
          min-h-screen
          max-w-[1400px]
          mx-auto
          px-5
          md:px-10
          lg:px-16
          py-20
          md:py-0
          grid
          grid-cols-1
          md:grid-cols-[0.8fr_1.2fr]
          lg:grid-cols-[0.9fr_1.1fr]
          gap-14
          md:gap-16
          lg:gap-24
          items-center
        "
      >
        {/* LEFT CONTENT */}
        <div className="relative z-10 max-w-[520px]">
          <span className="font-caps text-[.65rem] md:text-[.72rem] tracking-[.28em] uppercase text-brand">
            Commissions Open
          </span>

          <h2 className="font-serif text-winedark text-[2.7rem] sm:text-5xl lg:text-6xl leading-[.98] mt-5">
            Bring Your
            <span className="block italic text-brand mt-2">
              Story to Life
            </span>
          </h2>

          <span className="block w-20 h-px bg-goldbright my-7" />

          <p className="text-inksoft text-[.95rem] md:text-base leading-7 max-w-[460px]">
            Custom illustrations created around your characters, stories and
            ideas. Explore a selection of commission services, then visit the
            pricing page for complete packages and details.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-9">
            <Link
              to="/pricing"
              className="
                font-caps
                text-[.63rem]
                tracking-[.22em]
                uppercase
                px-7
                py-4
                text-white
                bg-gradient-to-r
                from-brand
                to-[#A82626]
                border
                border-brand
                shadow-[0_12px_28px_rgba(198,58,58,.25)]
                transition-transform
                duration-300
                hover:-translate-y-1
              "
            >
              View Pricing ✦
            </Link>

            <Link
              to="/contact"
              className="
                font-caps
                text-[.63rem]
                tracking-[.22em]
                uppercase
                px-7
                py-4
                text-burgundy
                border
                border-burgundy/40
                transition-all
                duration-300
                hover:bg-burgundy
                hover:text-white
              "
            >
              Start a Project
            </Link>
          </div>

          <p className="mt-8 font-caps text-[.56rem] tracking-[.2em] uppercase text-inksoft/60">
            Scroll to explore services
          </p>
        </div>

        {/* RIGHT STACKED CARDS */}
        <div
          ref={cardsRef}
          className="
            relative
            w-full
            max-w-[650px]
            mx-auto
            md:mx-0
            min-h-[500px]
            sm:min-h-[570px]
            md:h-[620px]
          "
        >
          {cards.map((card, index) => {
            const isDark = index % 2 === 0;

            return (
              <article
                key={card.title}
                className={`
                  stack-card
                  md:absolute
                  md:inset-0
                  w-full
                  min-h-[470px]
                  sm:min-h-[540px]
                  md:h-[600px]
                  overflow-hidden
                  border
                  ${
                    isDark
                      ? "border-goldbright/35 text-cream"
                      : "border-[#CFA6A6]/50 text-winedark"
                  }
                  shadow-[0_28px_70px_rgba(70,20,28,.2)]
                  mb-7
                  md:mb-0
                `}
                style={{
                  background: isDark ? SHADES.brown : SHADES.cream,
                }}
              >
                <div
                  className="
                    h-full
                    grid
                    grid-cols-1
                    sm:grid-cols-[1fr_1.05fr]
                  "
                >
                  {/* CARD IMAGE */}
                  <div className="relative min-h-[230px] sm:min-h-full overflow-hidden">
                    <img
                      src={card.img}
                      alt={card.title}
                      loading="lazy"
                      className="
                        absolute
                        inset-0
                        w-full
                        h-full
                        object-cover
                        object-top
                        transition-transform
                        duration-700
                        hover:scale-[1.04]
                      "
                    />

                    <div
                      className="absolute inset-0"
                      style={{
                        background: isDark
                          ? "linear-gradient(180deg,transparent 45%,rgba(18,6,8,.52))"
                          : "linear-gradient(180deg,transparent 55%,rgba(58,17,25,.16))",
                      }}
                    />

                    <span
                      className={`
                        absolute
                        top-5
                        left-5
                        w-11
                        h-11
                        rounded-full
                        flex
                        items-center
                        justify-center
                        font-serif
                        italic
                        text-lg
                        backdrop-blur-md
                        ${
                          isDark
                            ? "bg-black/25 text-goldlight border border-goldbright/40"
                            : "bg-white/50 text-brand border border-brand/20"
                        }
                      `}
                    >
                      0{index + 1}
                    </span>
                  </div>

                  {/* CARD CONTENT */}
                  <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-11">
                    <span
                      className={`
                        font-caps
                        text-[.55rem]
                        tracking-[.24em]
                        uppercase
                        ${
                          isDark ? "text-goldlight" : "text-brand"
                        }
                      `}
                    >
                      Custom Commission
                    </span>

                    <h3
                      className={`
                        font-serif
                        text-3xl
                        lg:text-[2.5rem]
                        leading-tight
                        mt-4
                        ${
                          isDark ? "text-[#FBF2E6]" : "text-winedark"
                        }
                      `}
                    >
                      {card.title}
                    </h3>

                    <div
                      className={`
                        font-serif
                        italic
                        text-2xl
                        mt-3
                        ${
                          isDark ? "text-goldbright" : "text-brand"
                        }
                      `}
                    >
                      {card.price}
                    </div>

                    <span
                      className={`
                        block
                        w-14
                        h-px
                        my-6
                        ${
                          isDark
                            ? "bg-goldbright/50"
                            : "bg-brand/30"
                        }
                      `}
                    />

                    <ul className="grid gap-3">
                      {card.points.slice(0, 3).map((point) => (
                        <li
                          key={point}
                          className={`
                            flex
                            items-start
                            gap-3
                            text-[.85rem]
                            leading-6
                            ${
                              isDark
                                ? "text-creamdim"
                                : "text-inksoft"
                            }
                          `}
                        >
                          <span
                            className={
                              isDark
                                ? "text-goldbright"
                                : "text-brand"
                            }
                          >
                            ✦
                          </span>

                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/pricing"
                      className={`
                        inline-flex
                        items-center
                        mt-8
                        font-caps
                        text-[.58rem]
                        tracking-[.22em]
                        uppercase
                        transition-transform
                        duration-300
                        hover:translate-x-1.5
                        ${
                          isDark
                            ? "text-goldlight"
                            : "text-brand"
                        }
                      `}
                    >
                      Explore details
                      <span className="ml-2">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}