import {
  FaInstagram,
  FaCheck,
} from "react-icons/fa";

import { artworks } from "../data";

const PROFILE_URL =
  "https://www.instagram.com/daisyy_sketches";

const reasons = [
  {
    title: "500+ Commissions Completed",
    note: "Delivered for indie authors and small presses since 2019.",
  },
  {
    title: "100% Hand-Drawn Artwork",
    note: "Every line inked by hand — no AI, no traced templates.",
  },
  {
    title: "Character Design Specialist",
    note: "Full turnarounds, expression sheets and cast line-ups.",
  },
  {
    title: "Fast & Clear Communication",
    note: "Replies within 24h, sketch approvals at every stage.",
  },
  {
    title: "Fantasy & Romance Focused",
    note: "Romantasy, epic fantasy and YA worlds are my home ground.",
  },
  {
    title: "Print-Ready Files",
    note: "300 DPI covers with full commercial usage rights included.",
  },
];

function InstagramSection() {
  const instagramPosts = artworks.slice(0, 8);

  return (
    <section
      className="
        plum-panel
        relative
        isolate
        w-full
        overflow-hidden
        border-y
        border-gold/20
        py-20
        text-paper
        md:py-28
      "
    >
      {/* Left background glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          top-10
          -z-10
          h-[480px]
          w-[480px]
          rounded-full
          blur-[145px]
        "
        style={{
          backgroundColor:
            "rgba(var(--color-burgundy2), 0.22)",
        }}
      />

      {/* Right background glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-36
          top-[30%]
          -z-10
          h-[440px]
          w-[440px]
          rounded-full
          blur-[135px]
        "
        style={{
          backgroundColor:
            "rgba(var(--color-rose), 0.16)",
        }}
      />

      {/* Bottom gold glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          -z-10
          h-[300px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          blur-[150px]
        "
        style={{
          backgroundColor:
            "rgba(var(--color-gold), 0.08)",
        }}
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1200px]
          px-5
          md:px-10
        "
      >
        {/* Heading */}
        <header className="mx-auto max-w-3xl text-center">
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
                text-[0.62rem]
                uppercase
                tracking-[0.34em]
                text-gold
              "
            >
              Social Highlights
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
              mt-5
              font-serif
              text-3xl
              uppercase
              leading-tight
              tracking-[0.08em]
              text-paper
              sm:text-4xl
              md:text-5xl
            "
          >
            As Seen on Instagram
            
          </h2>

          <div
            aria-hidden="true"
            className="
              rule-gold
              mx-auto
              mt-6
              h-px
              w-44
            "
          />

          <p
            className="
              mx-auto
              mt-6
              max-w-[58ch]
              font-editorial
              text-base
              leading-relaxed
              text-paper/65
              sm:text-lg
            "
          >
            Authors from all over the world tag me in their book
            art, character illustrations and commissions. Here is
            a glimpse of the love.
          </p>
        </header>

        {/* First 8 Instagram images */}
        <ul
          className="
            mt-14
            grid
            grid-cols-2
            gap-3
            sm:grid-cols-3
            sm:gap-4
            lg:grid-cols-4
          "
        >
          {instagramPosts.map((post, index) => (
            <li key={post.id || index}>
              <a
                href={PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${
                  post.title || "artwork"
                } on Instagram`}
                className="
                  glass-card
                  group
                  relative
                  block
                  aspect-square
                  overflow-hidden
                  rounded-xl
                  p-1.5
                  shadow-[0_18px_45px_rgba(var(--color-wine-dark),0.38)]
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-gold/60
                  hover:shadow-[0_28px_70px_rgba(var(--color-wine-dark),0.58)]
                "
              >
                <div
                  className="
                    relative
                    h-full
                    w-full
                    overflow-hidden
                    rounded-lg
                    bg-[var(--wine-dark)]
                  "
                >
                  <img
                    src={post.src}
                    alt={
                      post.alt ||
                      post.title ||
                      "Daisyy Sketches artwork"
                    }
                    width="768"
                    height="768"
                    loading="lazy"
                    decoding="async"
                    className="
                      h-full
                      w-full
                      object-cover
                      object-top
                      transition-transform
                      duration-700
                      ease-[var(--ease-silk)]
                      group-hover:scale-110
                    "
                  />

                  {/* Hover dark overlay */}
                  <span
                    aria-hidden="true"
                    className="
                      absolute
                      inset-0
                      bg-[var(--wine-dark)]/15
                      transition-all
                      duration-500
                      group-hover:bg-[var(--wine-dark)]/68
                    "
                  />

                  {/* Instagram hover icon */}
                  <span
                    className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                      opacity-0
                      transition-all
                      duration-500
                      group-hover:opacity-100
                    "
                  >
                    <span
                      className="
                        flex
                        h-14
                        w-14
                        translate-y-4
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-gold/45
                        bg-[var(--wine-deep)]/75
                        text-gold
                        shadow-[0_14px_35px_rgba(var(--color-wine-dark),0.65)]
                        backdrop-blur-md
                        transition-all
                        duration-500
                        group-hover:translate-y-0
                        group-hover:scale-105
                      "
                    >
                      <FaInstagram className="text-2xl" />
                    </span>
                  </span>

                  {/* Decorative sparkle */}
                  <span
                    aria-hidden="true"
                    className="
                      absolute
                      right-3
                      top-3
                      text-xs
                      text-gold
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-80
                    "
                  >
                    ✦
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>

        {/* Reasons heading */}
        <div className="mt-20 text-center">
          <p
            className="
              font-caps
              text-[0.62rem]
              uppercase
              tracking-[0.32em]
              text-gold
            "
          >
            Why Authors Work With Me
          </p>

          <h3
            className="
              mt-4
              font-serif
              text-2xl
              uppercase
              tracking-[0.1em]
              text-paper
              sm:text-3xl
            "
          >
            Trusted Creative Collaboration
          </h3>

          <div
            aria-hidden="true"
            className="
              rule-gold
              mx-auto
              mt-5
              h-px
              w-36
            "
          />
        </div>
      </div>

      {/* Reasons marquee */}
      <div className="group mt-10 w-full overflow-hidden">
        <div
          className="
            marquee-track
            flex
            w-max
            gap-4
            group-hover:[animation-play-state:paused]
          "
        >
          {[0, 1].map((duplicate) => (
            <ul
              key={duplicate}
              aria-hidden={duplicate === 1}
              className="flex gap-4"
            >
              {reasons.map((reason) => (
                <li
                  key={`${duplicate}-${reason.title}`}
                  className="
                    glass-card
                    flex
                    w-[18rem]
                    shrink-0
                    items-start
                    gap-4
                    rounded-2xl
                    px-5
                    py-5
                    shadow-[0_16px_38px_rgba(var(--color-wine-dark),0.28)]
                    sm:w-[20rem]
                    font-serif
                  "
                >
                  <span
                    className="
                      mt-0.5
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-gold/40
                      bg-gold/10
                      text-gold
                    "
                  >
                    <FaCheck className="text-xs" />
                  </span>

                  <span>
                    <span
                      className="
                        block
                        font-display
                        text-base
                        uppercase
                        leading-snug
                        tracking-[0.06em]
                        text-paper
                        sm:text-lg
                      "
                    >
                      {reason.title}
                    </span>

                    <span
                      className="
                        mt-2
                        block
                        font-editorial
                        text-sm
                        leading-relaxed
                        text-paper/55
                      "
                    >
                      {reason.note}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      {/* Instagram CTA */}
      <div
        className="
          relative
          z-10
          mx-auto
          mt-16
          flex
          max-w-6xl
          flex-col
          items-center
          px-6
          text-center
        "
      >
        <a
          href={PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="
            group
            relative
            inline-flex
            items-center
            justify-center
            gap-3
            overflow-hidden
            rounded-full
            px-8
            py-4
            font-caps
            text-[0.68rem]
            font-semibold
            uppercase
            tracking-[0.2em]
            text-[var(--wine-deep)]
            shadow-[0_16px_42px_rgba(var(--color-wine-dark),0.48)]
            transition-all
            duration-500
            hover:-translate-y-1.5
            hover:shadow-[0_22px_55px_rgba(var(--color-gold),0.24)]
          "
          style={{
            background:
              "linear-gradient(115deg, var(--gold), var(--gold-bright), var(--gold-light))",
          }}
        >
          <FaInstagram className="relative z-10 text-lg" />

          <span className="relative z-10">
            Follow @daisyy_sketches
          </span>

          {/* Button shine */}
          <span
            aria-hidden="true"
            className="
              absolute
              inset-y-0
              -left-full
              w-1/2
              skew-x-[-20deg]
              bg-white/45
              transition-all
              duration-700
              group-hover:left-full
            "
          />
        </a>

        <div className="mt-7 flex items-center gap-3">
          <span className="h-px w-8 bg-gold/40" />

          <p
            className="
              font-caps
              text-[0.58rem]
              uppercase
              tracking-[0.28em]
              text-gold/75
            "
          >
            Trusted by 1,000+ authors
          </p>

          <span className="h-px w-8 bg-gold/40" />
        </div>
      </div>
    </section>
  );
}

export default InstagramSection;