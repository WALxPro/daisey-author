import { FaInstagram, FaCheck } from "react-icons/fa";
import { artworks } from "../data";

const PROFILE_URL = "https://www.instagram.com/daisyy_sketches";

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
        instagram-section
        plum-panel
        relative
        isolate
        w-full
        overflow-hidden
        border-y
        border-gold/20
        py-16
        text-paper
        md:py-28
      "
    >
      {/* Background glows — desktop only */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          top-10
          -z-10
          hidden
          h-[480px]
          w-[480px]
          rounded-full
          blur-[145px]
          md:block
        "
        style={{
          backgroundColor: "rgba(var(--color-burgundy2), 0.22)",
        }}
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-36
          top-[30%]
          -z-10
          hidden
          h-[440px]
          w-[440px]
          rounded-full
          blur-[135px]
          md:block
        "
        style={{
          backgroundColor: "rgba(var(--color-rose), 0.16)",
        }}
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          -z-10
          hidden
          h-[300px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          blur-[150px]
          md:block
        "
        style={{
          backgroundColor: "rgba(var(--color-gold), 0.08)",
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
            className="rule-gold mx-auto mt-6 h-px w-44"
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
            Authors from all over the world tag me in their book art,
            character illustrations and commissions. Here is a glimpse
            of the love.
          </p>
        </header>

        {/* Instagram images */}
        <ul
          className="
            mt-12
            grid
            grid-cols-2
            gap-3
            sm:grid-cols-3
            sm:gap-4
            lg:mt-14
            lg:grid-cols-4
          "
        >
          {instagramPosts.map((post, index) => (
            <li
              key={post.id || index}
              className="
                [content-visibility:auto]
                [contain-intrinsic-size:180px]
              "
            >
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

                  shadow-[0_12px_30px_rgba(var(--color-wine-dark),0.3)]

                  md:transition-[transform,border-color,box-shadow]
                  md:duration-500
                  md:hover:-translate-y-2
                  md:hover:border-gold/60
                  md:hover:shadow-[0_28px_70px_rgba(var(--color-wine-dark),0.58)]
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
                    sizes="
                      (max-width: 639px) 50vw,
                      (max-width: 1023px) 33vw,
                      25vw
                    "
                    className="
                      h-full
                      w-full
                      object-cover
                      object-top

                      md:transition-transform
                      md:duration-700
                      md:ease-[var(--ease-silk)]
                      md:group-hover:scale-110
                    "
                  />

                  {/* Overlay - hover desktop only */}
                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-[var(--wine-dark)]/15

                      md:transition-colors
                      md:duration-500
                      md:group-hover:bg-[var(--wine-dark)]/68
                    "
                  />

                  {/* Instagram hover icon - desktop only */}
                  <span
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      hidden
                      items-center
                      justify-center
                      opacity-0

                      md:flex
                      md:transition-opacity
                      md:duration-500
                      md:group-hover:opacity-100
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

                        transition-transform
                        duration-500
                        group-hover:translate-y-0
                        group-hover:scale-105
                      "
                    >
                      <FaInstagram className="text-2xl" />
                    </span>
                  </span>

                  {/* Sparkle desktop only */}
                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      right-3
                      top-3
                      hidden
                      text-xs
                      text-gold
                      opacity-0

                      md:block
                      md:transition-opacity
                      md:duration-500
                      md:group-hover:opacity-80
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
        <div className="mt-16 text-center md:mt-20">
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
            className="rule-gold mx-auto mt-5 h-px w-36"
          />
        </div>
      </div>

      {/* =================================
          MOBILE - STATIC REASONS
      ================================= */}
      <div className="mx-auto mt-8 px-5 md:hidden">
        <ul className="grid gap-3">
          {reasons.map((reason) => (
            <li
              key={reason.title}
              className="
                glass-card
                flex
                items-start
                gap-4
                rounded-2xl
                px-5
                py-5
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
      </div>

      {/* =================================
          DESKTOP - ANIMATED MARQUEE
      ================================= */}
      <div className="group mt-10 hidden w-full overflow-hidden md:block">
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
                    w-[20rem]
                    shrink-0
                    items-start
                    gap-4
                    rounded-2xl
                    px-5
                    py-5
                    font-serif
                    shadow-[0_16px_38px_rgba(var(--color-wine-dark),0.28)]
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
                        text-lg
                        uppercase
                        leading-snug
                        tracking-[0.06em]
                        text-paper
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

      {/* CTA */}
      <div
        className="
          relative
          z-10
          mx-auto
          mt-12
          flex
          max-w-6xl
          flex-col
          items-center
          px-6
          text-center
          md:mt-16
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

            md:transition-[transform,box-shadow]
            md:duration-500
            md:hover:-translate-y-1.5
            md:hover:shadow-[0_22px_55px_rgba(var(--color-gold),0.24)]
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

          {/* Shine desktop only */}
          <span
            aria-hidden="true"
            className="
              absolute
              inset-y-0
              -left-full
              hidden
              w-1/2
              skew-x-[-20deg]
              bg-white/45

              md:block
              md:transition-all
              md:duration-700
              md:group-hover:left-full
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