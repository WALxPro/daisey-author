import { useEffect, useState } from "react";
import { FaInstagram, FaXTwitter, FaArtstation } from "react-icons/fa6";
import { SiKofi } from "react-icons/si";
import {
  FiMail,
  FiClock,
  FiUploadCloud,
  FiX,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { PiSparkleFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { SectionHead } from "./Sections";
import { BRAND, INSTAGRAM, IG_HANDLE, EMAIL } from "../data";
import { FaRedditAlien } from "react-icons/fa6";
import { FaThreads } from "react-icons/fa6";
import { SiSubstack } from "react-icons/si";
import { PiPaintBrushBroadFill } from "react-icons/pi";

const socials = [
  {
    icon: PiPaintBrushBroadFill,
    label: "Cara",
    href: "https://cara.app/YOUR_USERNAME",
  },
  {
    icon: FaRedditAlien,
    label: "Reddit",
    href: "https://reddit.com/u/YOUR_USERNAME",
  },
  {
    icon: FaThreads,
    label: "Threads",
    href: "https://threads.net/@YOUR_USERNAME",
  },
  {
    icon: SiSubstack,
    label: "Substack",
    href: "https://YOUR_USERNAME.substack.com",
  },
];
function Status() {
  return (
    <span className="inline-flex items-center gap-2 font-caps text-[.62rem] tracking-[.2em] uppercase text-goldbright">
      <span className="w-2 h-2 rounded-full bg-[var(--brand)] shadow-[0_0_10px_rgba(var(--color-brand),.8)] animate-pulsedot" />
      Commissions Open
    </span>
  );
}

const inputCls =
  "w-full bg-paper border border-burgundy/25 text-ink px-4 py-3.5 text-[.92rem] transition-all focus:outline-none focus:border-gold focus:ring-[3px] focus:ring-goldbright/20";
const labelCls =
  "font-caps text-[.6rem] tracking-[.22em] uppercase text-inksoft";

export function Contact() {
  const [sent, setSent] = useState(false);

  const labelClass = `
    mb-2
    block
    font-caps
    text-[0.6rem]
    font-semibold
    uppercase
    tracking-[0.24em]
    text-gold
  `;

  const fieldClass = `
    w-full
    border-0
    border-b
    border-gold/35
    bg-transparent
    pb-2
    font-editorial
    text-[0.95rem]
    text-paper
    outline-none
    transition-colors
    duration-300
    placeholder:text-paper/35
    focus:border-gold
  `;

  const optionStyle = {
    backgroundColor: "var(--wine-deep)",
    color: "var(--paper)",
  };

  const infoCardClass = `
    glass-card
    group
    relative
    rounded-xl
    p-6
    text-left
    transition-all
    duration-500
    hover:-translate-y-1.5
    hover:border-gold/55
    hover:shadow-[0_22px_55px_rgba(var(--color-wine-dark),0.42)]
  `;

  return (
    <section
      id="contact"
      className="
        plum-panel
        relative
        isolate
        overflow-hidden
        px-5
        py-20
        md:py-28
      "
    >
      {/* Background glow — top left */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          top-10
          -z-10
          h-[500px]
          w-[500px]
          rounded-full
          blur-[140px]
        "
        style={{
          backgroundColor: "rgba(var(--color-burgundy2), 0.22)",
        }}
      />

      {/* Background glow — right */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-36
          top-[28%]
          -z-10
          h-[460px]
          w-[460px]
          rounded-full
          blur-[140px]
        "
        style={{
          backgroundColor: "rgba(var(--color-rose), 0.16)",
        }}
      />

      {/* Background glow — bottom */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          -z-10
          h-[420px]
          w-[650px]
          -translate-x-1/2
          rounded-full
          blur-[150px]
        "
        style={{
          backgroundColor: "rgba(var(--color-burgundy), 0.14)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1180px]">
        {/* ===================================================== */}
        {/* COMMISSION HEADING                                    */}
        {/* ===================================================== */}

        <header className="mx-auto mb-14 max-w-3xl text-center">
          <p
            className="
              font-caps
              text-[0.64rem]
              uppercase
              tracking-[0.34em]
              text-gold
            "
          >
            Commission Inquiry
          </p>

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
            Bring Your Vision To Life{" "}
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
            Tell me about your character, your story and the artwork you have
            been imagining. Every commission begins with your idea.
          </p>
        </header>

        {/* ===================================================== */}
        {/* ARTIST DESK + FORM                                    */}
        {/* ===================================================== */}

        <div
          className="
            grid
            items-center
            gap-10
            lg:grid-cols-[42%_58%]
            lg:gap-14
          "
        >
          {/* Left illustration */}
          <div className="order-2 lg:order-1">
            <div
              className="
                glass-card
                relative
                overflow-hidden
                rounded-2xl
                p-3
                shadow-[0_30px_90px_rgba(var(--color-wine-dark),0.52)]
                sm:p-4
              "
            >
              <span
                aria-hidden="true"
                className="
                  absolute
                  left-4
                  top-3
                  z-20
                  text-lg
                  text-gold
                  opacity-75
                "
              >
                ✦
              </span>

              <span
                aria-hidden="true"
                className="
                  absolute
                  bottom-3
                  right-4
                  z-20
                  text-lg
                  text-gold
                  opacity-75
                "
              >
                ✦
              </span>

              {/* Light canvas keeps illustration visible */}
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-xl
                  p-3
                  sm:p-5
                "
                style={{
                  background: `
                    radial-gradient(
                      circle at 50% 38%,
                      var(--paper),
                      var(--paper2)
                    )
                  `,
                  boxShadow: "inset 0 0 35px rgba(var(--color-burgundy), 0.08)",
                }}
              >
                <ArtistDesk />
              </div>
            </div>

            <p
              className="
                mt-5
                text-center
                font-script
                text-2xl
                leading-none
                text-gold
                sm:text-3xl
              "
            >
              where every character begins…
            </p>
          </div>

          {/* Right form */}
          <div className="order-1 lg:order-2">
            {sent ? (
              <div
                aria-live="polite"
                className="
                  glass-card
                  rounded-2xl
                  px-7
                  py-14
                  text-center
                  shadow-[0_28px_80px_rgba(var(--color-wine-dark),0.52)]
                  sm:px-10
                "
              >
                <svg
                  width="68"
                  height="68"
                  viewBox="0 0 68 68"
                  className="mx-auto mb-6"
                  aria-hidden="true"
                >
                  <circle
                    cx="34"
                    cy="34"
                    r="30"
                    fill="none"
                    stroke="var(--gold)"
                    strokeWidth="2"
                    strokeDasharray="190"
                    strokeDashoffset="190"
                    style={{
                      animation: "contactDrawRing .7s ease forwards",
                    }}
                  />

                  <path
                    d="M21 35 l9 9 l17 -19"
                    fill="none"
                    stroke="var(--gold-bright)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="45"
                    strokeDashoffset="45"
                    style={{
                      animation: "contactDrawCheck .5s ease .6s forwards",
                    }}
                  />
                </svg>

                <p
                  className="
                    font-caps
                    text-[0.62rem]
                    uppercase
                    tracking-[0.3em]
                    text-gold
                  "
                >
                  Request Received
                </p>

                <h3
                  className="
                    mt-3
                    font-display
                    text-3xl
                    uppercase
                    tracking-[0.1em]
                    text-paper
                    sm:text-4xl
                  "
                >
                  Thank You
                </h3>

                <div className="rule-gold mx-auto mt-5 h-px w-32" />

                <p
                  className="
                    mx-auto
                    mt-5
                    max-w-[44ch]
                    font-editorial
                    text-base
                    leading-relaxed
                    text-paper/65
                  "
                >
                  Your request has been received. I will personally review it
                  and respond within 24–48 hours. I am looking forward to
                  bringing your vision to life.
                </p>

                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="
                    mt-8
                    rounded-full
                    border
                    border-gold/45
                    px-6
                    py-3
                    font-caps
                    text-[0.62rem]
                    uppercase
                    tracking-[0.22em]
                    text-gold
                    transition-all
                    duration-300
                    hover:border-gold
                    hover:bg-white/[0.06]
                    hover:text-paper
                  "
                >
                  Send Another Request
                </button>
              </div>
            ) : (
              <form
                className="
                  glass-card
                  relative
                  rounded-2xl
                  p-6
                  shadow-[0_28px_80px_rgba(var(--color-wine-dark),0.52)]
                  sm:p-8
                  md:p-10
                "
                onSubmit={(event) => {
                  event.preventDefault();
                  setSent(true);
                }}
              >
                <span
                  aria-hidden="true"
                  className="
                    absolute
                    right-5
                    top-4
                    text-base
                    text-gold
                    opacity-75
                  "
                >
                  ✦
                </span>

                {/* Name */}
                <div className="mb-6">
                  <label htmlFor="f-name" className={labelClass}>
                    Your name
                  </label>

                  <input
                    id="f-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="e.g. Alex Rivers"
                    className={fieldClass}
                  />
                </div>

                {/* Email */}
                <div className="mb-6">
                  <label htmlFor="f-email" className={labelClass}>
                    Email
                  </label>

                  <input
                    id="f-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@email.com"
                    className={fieldClass}
                  />
                </div>

                {/* Project and budget */}
                <div
                  className="
                    mb-6
                    grid
                    grid-cols-1
                    gap-6
                    sm:grid-cols-2
                  "
                >
                  <div>
                    <label htmlFor="f-type" className={labelClass}>
                      Project type
                    </label>

                    <select
                      id="f-type"
                      name="projectType"
                      className={`${fieldClass} cursor-pointer`}
                      style={{ colorScheme: "dark" }}
                    >
                      <option style={optionStyle}>Bust Up</option>

                      <option style={optionStyle}>Half Body</option>

                      <option style={optionStyle}>Full Body</option>

                      <option style={optionStyle}>Couple Illustration</option>

                      <option style={optionStyle}>Book Cover</option>

                      <option style={optionStyle}>Scene Illustration</option>

                      <option style={optionStyle}>Comic Illustration</option>

                      <option style={optionStyle}>Not Sure Yet</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="f-budget" className={labelClass}>
                      Budget
                    </label>

                    <select
                      id="f-budget"
                      name="budget"
                      className={`${fieldClass} cursor-pointer`}
                      style={{ colorScheme: "dark" }}
                    >
                      <option style={optionStyle}>Under $100</option>

                      <option style={optionStyle}>$100–250</option>

                      <option style={optionStyle}>$250–500</option>

                      <option style={optionStyle}>$500+</option>
                    </select>
                  </div>
                </div>

                {/* Idea */}
                <div className="mb-7">
                  <label htmlFor="f-desc" className={labelClass}>
                    Your idea
                  </label>

                  <textarea
                    id="f-desc"
                    name="description"
                    required
                    placeholder="Tell me about your character(s), story, mood, personality, inspiration, and include any reference links if available."
                    className={`
                      ${fieldClass}
                      min-h-[110px]
                      resize-y
                      leading-relaxed
                    `}
                  />
                </div>

                {/* Reference upload */}
                <div className="mb-8">
                  <label htmlFor="f-reference" className={labelClass}>
                    Reference upload
                  </label>

                  <label
                    htmlFor="f-reference"
                    className="
                      flex
                      min-h-[68px]
                      cursor-pointer
                      items-center
                      justify-center
                      gap-2
                      rounded-lg
                      border
                      border-dashed
                      border-gold/40
                      bg-white/[0.04]
                      px-4
                      text-center
                      font-editorial
                      text-xs
                      text-paper/60
                      transition-all
                      duration-300
                      hover:border-gold
                      hover:bg-white/[0.08]
                      hover:text-gold
                      sm:text-sm
                    "
                  >
                    <FiUploadCloud className="shrink-0 text-lg" />

                    <span>
                      Drop your reference images here, or click to browse
                    </span>
                  </label>

                  <input
                    id="f-reference"
                    name="reference"
                    type="file"
                    accept="image/*"
                    multiple
                    className="sr-only"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="
                    group
                    relative
                    w-full
                    overflow-hidden
                    rounded-lg
                    px-5
                    py-4
                    font-caps
                    text-[0.68rem]
                    font-semibold
                    uppercase
                    tracking-[0.24em]
                    text-[var(--wine-deep)]
                    shadow-[0_14px_35px_rgba(var(--color-wine-dark),0.42)]
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:shadow-[0_20px_48px_rgba(var(--color-gold),0.22)]
                  "
                  style={{
                    background:
                      "linear-gradient(115deg, var(--gold), var(--gold-bright), var(--gold-light))",
                  }}
                >
                  <span className="relative z-10">Send My Request ✦</span>

                  <span
                    aria-hidden="true"
                    className="
                      absolute
                      inset-y-0
                      -left-full
                      w-1/2
                      skew-x-[-20deg]
                      bg-white/40
                      transition-all
                      duration-700
                      group-hover:left-full
                    "
                  />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* ===================================================== */}
        {/* SECTION DIVIDER                                       */}
        {/* ===================================================== */}

        <div
          aria-hidden="true"
          className="
            rule-gold
            mx-auto
            my-20
            h-px
            w-full
            max-w-[900px]
            opacity-60
            md:my-28
          "
        />

        {/* ===================================================== */}
        {/* LOWER CONTACT INFORMATION                             */}
        {/* ===================================================== */}

        <div className="mx-auto max-w-[900px] text-center">
          <div>
            <span
              className="
                block
                font-script
                text-3xl
                leading-none
                text-gold
                sm:text-4xl
              "
            >
              a little note
            </span>

            <h2
              className="
                mt-4
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
              Tell Me Your Story…
            </h2>

            <div
              className="
                mt-6
                flex
                items-center
                justify-center
                gap-4
              "
            >
              <span
                className="
                  h-px
                  w-16
                  bg-gradient-to-r
                  from-transparent
                  to-gold/70
                "
              />

              <span className="text-lg text-gold">✦</span>

              <span
                className="
                  h-px
                  w-16
                  bg-gradient-to-l
                  from-transparent
                  to-gold/70
                "
              />
            </div>
          </div>

          {/* Intro text */}
          <div className="mx-auto mt-9 max-w-[64ch]">
            <p
              className="
                font-editorial
                text-base
                leading-relaxed
                text-paper/65
                sm:text-lg
                sm:leading-[1.75]
              "
            >
              Whether you are an author dreaming of the perfect character
              design, a reader wanting to see a beloved character come to life,
              or someone searching for a one-of-a-kind custom illustration, I
              would love to hear your ideas.
            </p>

            <p
              className="
                mt-5
                font-editorial
                text-base
                leading-relaxed
                text-paper/65
                sm:text-lg
                sm:leading-[1.75]
              "
            >
              Every illustration begins with a conversation. Share your vision,
              and together we will create something memorable, meaningful and
              uniquely yours.
            </p>
          </div>

          {/* Information cards */}
          <div
            className="
              mt-14
              grid
              gap-5
              sm:grid-cols-2
            "
          >
            {/* Email card */}
            <article className={infoCardClass}>
              <span
                aria-hidden="true"
                className="
                  absolute
                  right-4
                  top-4
                  text-sm
                  text-gold
                  opacity-65
                "
              >
                ✦
              </span>

              <p
                className="
                  font-caps
                  text-[0.68rem]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-gold
                "
              >
                Email
              </p>

              <div className="my-4 h-px w-full bg-gold/25" />

              <a
                href={`mailto:${EMAIL}`}
                className="
                  break-all
                  font-editorial
                  text-base
                  text-paper/80
                  transition-colors
                  duration-300
                  hover:text-gold
                "
              >
                {EMAIL}
              </a>
            </article>

            {/* Response time card */}
            <article className={infoCardClass}>
              <span
                aria-hidden="true"
                className="
                  absolute
                  right-4
                  top-4
                  text-sm
                  text-gold
                  opacity-65
                "
              >
                ✦
              </span>

              <p
                className="
                  font-caps
                  text-[0.68rem]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-gold
                "
              >
                Response Time
              </p>

              <div className="my-4 h-px w-full bg-gold/25" />

              <p
                className="
                  font-editorial
                  text-base
                  text-paper/80
                "
              >
                Usually within 24–48 hours
              </p>
            </article>

            {/* Status card */}
            <article className={infoCardClass}>
              <span
                aria-hidden="true"
                className="
                  absolute
                  right-4
                  top-4
                  text-sm
                  text-gold
                  opacity-65
                "
              >
                ✦
              </span>

              <p
                className="
                  font-caps
                  text-[0.68rem]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-gold
                "
              >
                Status
              </p>

              <div className="my-4 h-px w-full bg-gold/25" />

              <p
                className="
                  inline-flex
                  items-center
                  gap-2.5
                  font-editorial
                  text-base
                  text-paper/80
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    inline-block
                    h-2
                    w-2
                    rounded-full
                    bg-gold
                    shadow-[0_0_12px_rgba(var(--color-gold),0.8)]
                    animate-pulse
                  "
                />
                Commissions Open
              </p>
            </article>

            {/* Commission types card */}
            <article className={infoCardClass}>
              <span
                aria-hidden="true"
                className="
                  absolute
                  right-4
                  top-4
                  text-sm
                  text-gold
                  opacity-65
                "
              >
                ✦
              </span>

              <p
                className="
                  font-caps
                  text-[0.68rem]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-gold
                "
              >
                Commission Types
              </p>

              <div className="my-4 h-px w-full bg-gold/25" />

              <ul
                className="
                  space-y-2
                  font-editorial
                  text-base
                  text-paper/80
                "
              >
                <li className="flex items-center gap-2">
                  <span className="text-gold">✦</span>
                  Character Art
                </li>

                <li className="flex items-center gap-2">
                  <span className="text-gold">✦</span>
                  Couple Illustrations
                </li>

                <li className="flex items-center gap-2">
                  <span className="text-gold">✦</span>
                  Book Covers
                </li>

                <li className="flex items-center gap-2">
                  <span className="text-gold">✦</span>
                  Fantasy Romance
                </li>
              </ul>
            </article>
          </div>

          {/* Social divider */}
          <div
            aria-hidden="true"
            className="
              rule-gold
              mx-auto
              mt-16
              h-px
              w-44
              opacity-65
            "
          />

          {/* Social icons */}
          <div
            className="
              mt-9
              flex
              flex-wrap
              items-center
              justify-center
              gap-5
            "
          >
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="
                  group
                  relative
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-gold/40
                  bg-white/[0.04]
                  text-gold
                  transition-all
                  duration-300
                  hover:-translate-y-1.5
                  hover:border-gold
                  hover:bg-white/[0.09]
                  hover:text-paper
                  hover:shadow-[0_12px_30px_rgba(var(--color-gold),0.18)]
                "
              >
                <Icon
                  className="
                    text-base
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />

                {/* Tooltip */}
                <span
                  className="
                    pointer-events-none
                    absolute
                    -top-10
                    left-1/2
                    -translate-x-1/2
                    translate-y-1
                    whitespace-nowrap
                    rounded
                    border
                    border-gold/25
                    bg-[var(--wine-dark)]
                    px-3
                    py-1.5
                    font-caps
                    text-[0.55rem]
                    uppercase
                    tracking-[0.18em]
                    text-paper
                    opacity-0
                    shadow-[0_8px_20px_rgba(var(--color-wine-dark),0.6)]
                    transition-all
                    duration-300
                    group-hover:translate-y-0
                    group-hover:opacity-100
                  "
                >
                  {label}

                  <span
                    aria-hidden="true"
                    className="
                      absolute
                      -bottom-1
                      left-1/2
                      h-2
                      w-2
                      -translate-x-1/2
                      rotate-45
                      bg-[var(--wine-dark)]
                    "
                  />
                </span>
              </a>
            ))}
          </div>

          {/* Signature */}
          <span
            className="
              mt-8
              block
              font-script
              text-3xl
              text-gold
            "
          >
            with love, Daisy
          </span>
        </div>
      </div>

      <style>{`
        @keyframes contactDrawRing {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes contactDrawCheck {
          to {
            stroke-dashoffset: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          circle,
          path {
            animation: none !important;
            stroke-dashoffset: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}

// import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Lightbox({
  artworks = [],
  currentIndex = 0,
  onChange,
  onClose,
}) {
  const total = artworks.length;
  const art = artworks[currentIndex];

  const showPrevious = () => {
    if (total <= 1) return;

    const previousIndex = currentIndex === 0 ? total - 1 : currentIndex - 1;

    onChange(previousIndex);
  };

  const showNext = () => {
    if (total <= 1) return;

    const nextIndex = currentIndex === total - 1 ? 0 : currentIndex + 1;

    onChange(nextIndex);
  };

  useEffect(() => {
    if (!art) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [art, currentIndex, total, onClose, onChange]);

  useEffect(() => {
    if (!art) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [art]);

  if (!art || typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={art.title || "Artwork viewer"}
      className="
        fixed
        inset-0
        z-[9999]
        isolate
        overflow-y-auto
      "
    >
      {/* Background overlay */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className="fixed inset-0"
        style={{
          background: `
            radial-gradient(
              circle at 50% 42%,
              rgba(var(--color-paper), 0.2) 0%,
              rgba(var(--color-wine-deep), 0.82) 38%,
              rgba(var(--color-wine-dark), 0.97) 78%
            )
          `,
          backdropFilter: "blur(22px)",
          WebkitBackdropFilter: "blur(22px)",
        }}
      />

      {/* Close button */}
      <button
        type="button"
        aria-label="Close artwork viewer"
        onClick={onClose}
        className="
          fixed
          right-5
          top-5
          z-30
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          transition-all
          duration-300
          hover:rotate-90
          hover:bg-white/10
          sm:right-8
          sm:top-7
        "
        style={{
          color: "var(--paper)",
          border: "1px solid rgba(var(--color-gold), 0.42)",
          background: "rgba(var(--color-wine-dark), 0.3)",
        }}
      >
        <FiX size={20} />
      </button>

      <div
        className="
          relative
          z-10
          flex
          min-h-full
          w-full
          items-center
          justify-center
          px-4
          py-20
          sm:px-8
          sm:py-16
        "
      >
        <div className="w-full max-w-[1400px]">
          {/* Image and desktop navigation */}
          <div className="flex w-full items-center justify-center gap-5 sm:gap-8">
            {total > 1 && (
              <button
                type="button"
                aria-label="Previous artwork"
                onClick={showPrevious}
                className="
                  hidden
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  transition-all
                  duration-300
                  hover:-translate-x-1
                  hover:bg-white/10
                  sm:flex
                "
                style={{
                  color: "var(--paper)",
                  border: "1px solid rgba(var(--color-gold), 0.38)",
                  background: "rgba(var(--color-wine-deep), 0.28)",
                }}
              >
                <FiChevronLeft size={23} />
              </button>
            )}

            <div className="flex min-w-0 justify-center">
              <img
                src={art.src}
                alt={art.title || "Selected artwork"}
                draggable="false"
                className="
                  block
                  max-h-[58svh]
                  max-w-full
                  select-none
                  object-contain
                  sm:max-h-[68vh]
                  sm:max-w-[75vw]
                  lg:max-w-[62vw]
                "
                style={{
                  boxShadow: `
                    0 10px 35px rgba(var(--color-wine-dark), 0.48),
                    0 35px 90px rgba(var(--color-wine-dark), 0.7),
                    0 0 35px rgba(var(--color-gold), 0.12)
                  `,
                }}
              />
            </div>

            {total > 1 && (
              <button
                type="button"
                aria-label="Next artwork"
                onClick={showNext}
                className="
                  hidden
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  transition-all
                  duration-300
                  hover:translate-x-1
                  hover:bg-white/10
                  sm:flex
                "
                style={{
                  color: "var(--paper)",
                  border: "1px solid rgba(var(--color-gold), 0.38)",
                  background: "rgba(var(--color-wine-deep), 0.28)",
                }}
              >
                <FiChevronRight size={23} />
              </button>
            )}
          </div>

          {/* Artwork information */}
          <div className="mx-auto mt-7 max-w-2xl px-3 text-center">
            <h3
              className="
                font-display
                text-2xl
                uppercase
                tracking-[0.16em]
                sm:text-3xl
              "
              style={{
                color: "var(--paper)",
                textShadow: "0 3px 18px rgba(var(--color-wine-dark), 0.9)",
              }}
            >
              {art.title}
            </h3>

            {art.catLabel && (
              <span
                className="
                  mt-4
                  inline-block
                  border
                  px-4
                  py-1.5
                  font-caps
                  text-[0.58rem]
                  uppercase
                  tracking-[0.2em]
                "
                style={{
                  color: "var(--gold-bright)",
                  borderColor: "rgba(var(--color-gold-bright), 0.5)",
                  background: "rgba(var(--color-wine-deep), 0.25)",
                }}
              >
                {art.catLabel}
              </span>
            )}

            {art.desc && (
              <p
                className="
                  mx-auto
                  mt-4
                  max-w-xl
                  font-editorial
                  text-[15px]
                  italic
                  leading-relaxed
                  sm:text-base
                "
                style={{
                  color: "rgba(var(--color-paper), 0.72)",
                }}
              >
                {art.desc}
              </p>
            )}

            {total > 1 && (
              <p
                className="
                  mt-5
                  font-caps
                  text-[0.65rem]
                  tracking-[0.22em]
                "
                style={{
                  color: "rgba(var(--color-paper), 0.48)",
                }}
              >
                {currentIndex + 1} / {total}
              </p>
            )}
          </div>

          {/* Mobile navigation */}
          {total > 1 && (
            <div className="mt-6 flex justify-center gap-4 sm:hidden">
              <button
                type="button"
                aria-label="Previous artwork"
                onClick={showPrevious}
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                "
                style={{
                  color: "var(--paper)",
                  border: "1px solid rgba(var(--color-gold), 0.4)",
                  background: "rgba(var(--color-wine-deep), 0.35)",
                }}
              >
                <FiChevronLeft size={21} />
              </button>

              <button
                type="button"
                aria-label="Next artwork"
                onClick={showNext}
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                "
                style={{
                  color: "var(--paper)",
                  border: "1px solid rgba(var(--color-gold), 0.4)",
                  background: "rgba(var(--color-wine-deep), 0.35)",
                }}
              >
                <FiChevronRight size={21} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
}
// ArtistDesk.jsx
// Premium animated "art studio" scene for the Contact page (left side).
// Drop this in and replace your old static desk SVG with <ArtistDesk />.
// Colors are pulled from your palette: paper, burgundy, gold, ink, rose.
// Everything loops gently; all motion is disabled under prefers-reduced-motion.

export function ArtistDesk() {
  return (
    <div className="relative w-full select-none" aria-hidden="true">
      {/* soft ambient glow behind the whole scene */}
      <div
        className="pointer-events-none absolute inset-0 blur-2xl opacity-70"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 52% 40%, rgba(var(--color-rose-soft),.35), transparent 65%), radial-gradient(ellipse 40% 40% at 68% 55%, rgba(var(--color-gold),.20), transparent 70%)",
        }}
      />

      <svg
        viewBox="0 0 420 460"
        className="relative w-full h-auto overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="deskWood" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="var(--gold)" />
            <stop offset="1" stopColor="var(--burgundy)" />
          </linearGradient>
          <linearGradient id="deskTop" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="var(--gold-bright)" />
            <stop offset=".5" stopColor="var(--gold)" />
            <stop offset="1" stopColor="var(--gold)" />
          </linearGradient>
          <radialGradient id="lampGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="var(--gold-light)" stopOpacity=".9" />
            <stop offset="1" stopColor="var(--gold-light)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="paperGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="var(--paper)" />
            <stop offset="1" stopColor="var(--paper2)" />
          </linearGradient>
          <linearGradient id="inkGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="var(--burgundy2)" />
            <stop offset="1" stopColor="var(--burgundy)" />
          </linearGradient>
          <linearGradient id="goldStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="var(--gold-light)" />
            <stop offset="1" stopColor="var(--gold)" />
          </linearGradient>
        </defs>

        {/* ============ LAMP GLOW POOL (pulses softly) ============ */}
        <ellipse
          cx="210"
          cy="250"
          rx="150"
          ry="90"
          fill="url(#lampGlow)"
          className="lamp-pulse"
        />

        {/* ============ WALL PARCHMENT NOTES (hanging, gentle sway) ============ */}
        <g className="sway-slow" style={{ transformOrigin: "120px 40px" }}>
          <line
            x1="120"
            y1="30"
            x2="120"
            y2="60"
            stroke="var(--gold)"
            strokeWidth="1"
            opacity=".5"
          />
          <rect
            x="104"
            y="60"
            width="34"
            height="42"
            rx="2"
            fill="url(#paperGrad)"
            stroke="var(--cream-dim)"
            strokeWidth="1"
            transform="rotate(-4 121 81)"
          />
          <line
            x1="110"
            y1="72"
            x2="132"
            y2="72"
            stroke="var(--cream-dim)"
            strokeWidth="1.2"
            transform="rotate(-4 121 81)"
          />
          <line
            x1="110"
            y1="80"
            x2="130"
            y2="80"
            stroke="var(--cream-dim)"
            strokeWidth="1.2"
            transform="rotate(-4 121 81)"
          />
          <line
            x1="110"
            y1="88"
            x2="128"
            y2="88"
            stroke="var(--cream-dim)"
            strokeWidth="1.2"
            transform="rotate(-4 121 81)"
          />
        </g>
        <g className="sway-slower" style={{ transformOrigin: "300px 40px" }}>
          <line
            x1="300"
            y1="30"
            x2="300"
            y2="55"
            stroke="var(--gold)"
            strokeWidth="1"
            opacity=".5"
          />
          <rect
            x="286"
            y="55"
            width="30"
            height="38"
            rx="2"
            fill="url(#paperGrad)"
            stroke="var(--cream-dim)"
            strokeWidth="1"
            transform="rotate(5 301 74)"
          />
          {/* tiny heart sketch on the note */}
          <path
            d="M301 68 c-3-4-9-1-9 3 c0 4 9 9 9 9 c0 0 9-5 9-9 c0-4-6-7-9-3z"
            fill="none"
            stroke="var(--brand)"
            strokeWidth="1.2"
            opacity=".7"
            transform="rotate(5 301 74)"
          />
        </g>

        {/* ============ EASEL + SKETCH PAPER ============ */}
        <g transform="translate(150 120)">
          {/* easel legs */}
          <line
            x1="10"
            y1="10"
            x2="0"
            y2="150"
            stroke="var(--burgundy)"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <line
            x1="110"
            y1="10"
            x2="120"
            y2="150"
            stroke="var(--burgundy)"
            strokeWidth="5"
            strokeLinecap="round"
          />
          {/* paper */}
          <rect
            x="8"
            y="6"
            width="104"
            height="128"
            rx="3"
            fill="url(#paperGrad)"
            stroke="var(--paper-deep)"
            strokeWidth="1.5"
          />
          {/* the sketch being drawn — a face, draws itself in a loop */}
          <g
            stroke="url(#goldStroke)"
            strokeWidth="1.6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              className="draw"
              d="M40 40 q20 -14 40 0 q10 26 -4 44 q-16 14 -32 0 q-14 -18 -4 -44z"
            />
            <path
              className="draw draw-2"
              d="M50 58 q6 -5 12 0 M68 58 q6 -5 12 0"
            />
            <path className="draw draw-3" d="M60 62 l0 14 M52 86 q10 8 22 0" />
          </g>
          <rect
            x="30"
            y="130"
            width="60"
            height="6"
            rx="3"
            fill="var(--burgundy)"
          />
        </g>

        {/* ============ DESK TOP ============ */}
        <rect
          x="20"
          y="300"
          width="380"
          height="20"
          rx="4"
          fill="url(#deskTop)"
        />
        <rect
          x="20"
          y="318"
          width="380"
          height="8"
          rx="2"
          fill="var(--burgundy)"
          opacity=".55"
        />
        {/* desk legs */}
        <rect
          x="48"
          y="320"
          width="14"
          height="110"
          rx="3"
          fill="url(#deskWood)"
        />
        <rect
          x="358"
          y="320"
          width="14"
          height="110"
          rx="3"
          fill="url(#deskWood)"
        />

        {/* ============ INK BOTTLE (shimmer highlight loops) ============ */}
        <g transform="translate(74 250)">
          <rect
            x="0"
            y="18"
            width="42"
            height="46"
            rx="6"
            fill="url(#inkGrad)"
          />
          <rect x="10" y="6" width="22" height="16" rx="3" fill="var(--wine)" />
          <rect
            x="8"
            y="2"
            width="26"
            height="8"
            rx="3"
            fill="var(--brand)"
            opacity=".85"
          />
          {/* moving shine */}
          <rect
            x="4"
            y="22"
            width="8"
            height="36"
            rx="4"
            fill="var(--paper)"
            opacity=".22"
            className="ink-shine"
          />
        </g>

        {/* ============ PENCIL CUP + PENCILS (float gently) ============ */}
        <g transform="translate(300 236)">
          <rect
            x="0"
            y="34"
            width="40"
            height="44"
            rx="6"
            fill="var(--gold)"
            opacity=".85"
          />
          <rect
            x="0"
            y="34"
            width="40"
            height="10"
            rx="4"
            fill="var(--gold-light)"
            opacity=".8"
          />
          <g className="float-a">
            <rect
              x="8"
              y="-6"
              width="5"
              height="46"
              rx="2.5"
              fill="var(--burgundy2)"
              transform="rotate(-8 10 20)"
            />
            <path
              d="M8 -8 l5 4 l-2 -8z"
              fill="var(--gold-light)"
              transform="rotate(-8 10 20)"
            />
          </g>
          <g className="float-b">
            <rect
              x="20"
              y="-10"
              width="5"
              height="50"
              rx="2.5"
              fill="var(--burgundy)"
              transform="rotate(4 22 20)"
            />
            <path
              d="M20 -12 l5 4 l-2 -8z"
              fill="var(--gold-light)"
              transform="rotate(4 22 20)"
            />
          </g>
          <g className="float-c">
            <rect
              x="30"
              y="-4"
              width="5"
              height="44"
              rx="2.5"
              fill="var(--brand)"
              transform="rotate(11 32 20)"
            />
            <path
              d="M30 -6 l5 4 l-2 -8z"
              fill="var(--gold-light)"
              transform="rotate(11 32 20)"
            />
          </g>
        </g>

        {/* ============ LOOSE PAPER ON DESK ============ */}
        <g transform="translate(150 292)">
          <rect
            x="0"
            y="0"
            width="120"
            height="14"
            rx="2"
            fill="url(#paperGrad)"
            stroke="var(--paper-deep)"
            strokeWidth="1"
            transform="rotate(-3 60 7)"
          />
          <line
            x1="14"
            y1="6"
            x2="104"
            y2="6"
            stroke="var(--cream-dim)"
            strokeWidth="1"
            transform="rotate(-3 60 7)"
          />
        </g>

        {/* ============ FLOATING GOLDEN DUST ============ */}
        <g fill="var(--gold-bright)">
          <circle className="dust dust-1" cx="90" cy="180" r="2.2" />
          <circle className="dust dust-2" cx="260" cy="150" r="1.8" />
          <circle className="dust dust-3" cx="330" cy="210" r="2.4" />
          <circle className="dust dust-4" cx="150" cy="100" r="1.6" />
          <circle className="dust dust-5" cx="300" cy="90" r="2" />
          <circle className="dust dust-6" cx="60" cy="130" r="1.8" />
        </g>

        {/* ============ FLOATING FLOWER PETALS (rose) ============ */}
        <g fill="var(--rose-soft)" opacity=".85">
          <path
            className="petal petal-1"
            d="M0 0 q6 -6 12 0 q-6 6 -12 0z"
            transform="translate(110 70)"
          />
          <path
            className="petal petal-2"
            d="M0 0 q5 -5 10 0 q-5 5 -10 0z"
            transform="translate(280 120)"
          />
          <path
            className="petal petal-3"
            d="M0 0 q6 -6 12 0 q-6 6 -12 0z"
            transform="translate(340 60)"
          />
        </g>
      </svg>

      <style>{`
        @keyframes lampPulse { 0%,100%{opacity:.55} 50%{opacity:.85} }
        .lamp-pulse{ animation: lampPulse 5s ease-in-out infinite; }

        @keyframes swaySlow { 0%,100%{transform:rotate(-1.5deg)} 50%{transform:rotate(1.5deg)} }
        .sway-slow{ animation: swaySlow 6s ease-in-out infinite; }
        .sway-slower{ animation: swaySlow 7.5s ease-in-out infinite; }

        @keyframes floatY { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
        .float-a{ animation: floatY 4s ease-in-out infinite; }
        .float-b{ animation: floatY 5s ease-in-out infinite .4s; }
        .float-c{ animation: floatY 4.6s ease-in-out infinite .8s; }

        @keyframes inkShine { 0%{transform:translateX(0);opacity:0} 40%{opacity:.28} 100%{transform:translateX(34px);opacity:0} }
        .ink-shine{ animation: inkShine 4.5s ease-in-out infinite; }

        /* self-drawing sketch lines */
        .draw{ stroke-dasharray: 240; stroke-dashoffset: 240; animation: drawLine 6s ease-in-out infinite; }
        .draw-2{ animation-delay: 1.2s; }
        .draw-3{ animation-delay: 2.2s; }
        @keyframes drawLine {
          0%{stroke-dashoffset:240}
          35%{stroke-dashoffset:0}
          80%{stroke-dashoffset:0; opacity:1}
          100%{stroke-dashoffset:0; opacity:.85}
        }

        @keyframes driftUp {
          0%{transform:translateY(0) translateX(0);opacity:0}
          15%{opacity:.9}
          85%{opacity:.6}
          100%{transform:translateY(-70px) translateX(10px);opacity:0}
        }
        .dust{ animation: driftUp 7s linear infinite; }
        .dust-1{animation-delay:0s} .dust-2{animation-delay:1.4s} .dust-3{animation-delay:2.6s}
        .dust-4{animation-delay:3.8s} .dust-5{animation-delay:.8s} .dust-6{animation-delay:5s}

        @keyframes petalFall {
          0%{transform:translateY(0) rotate(0);opacity:0}
          12%{opacity:.85}
          100%{transform:translateY(120px) rotate(220deg) translateX(-24px);opacity:0}
        }
        .petal{ animation: petalFall 9s linear infinite; transform-box: fill-box; transform-origin:center; }
        .petal-2{ animation-delay:3s; animation-duration:10s; }
        .petal-3{ animation-delay:6s; animation-duration:8.5s; }

        @media (prefers-reduced-motion: reduce) {
          .lamp-pulse,.sway-slow,.sway-slower,.float-a,.float-b,.float-c,
          .ink-shine,.draw,.draw-2,.draw-3,.dust,.petal{
            animation: none !important;
          }
          .draw,.draw-2,.draw-3{ stroke-dashoffset: 0 !important; }
          .dust,.petal{ opacity:.5 !important; }
        }
      `}</style>
    </div>
  );
}
