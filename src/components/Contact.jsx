import { useEffect, useState } from "react";
import { FaInstagram, FaXTwitter, FaArtstation } from "react-icons/fa6";
import { SiKofi } from "react-icons/si";
import { FiMail, FiClock, FiUploadCloud, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
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
      <span className="w-2 h-2 rounded-full bg-[#7FCB8A] shadow-[0_0_10px_rgba(127,203,138,.8)] animate-pulsedot" />
      Commissions Open
    </span>
  );
}

const inputCls =
  "w-full bg-paper border border-burgundy/25 text-ink px-4 py-3.5 text-[.92rem] transition-all focus:outline-none focus:border-gold focus:ring-[3px] focus:ring-goldbright/20";
const labelCls =
  "font-caps text-[.6rem] tracking-[.22em] uppercase text-inksoft";

import { artworks } from "../data";

export function Contact() {
  const [sent, setSent] = useState(false);
  const featured = artworks.slice(0, 4);

  return (
    <section
      id="contact"
      className="py-20 md:py-32"
      style={{
        background: `radial-gradient(ellipse 55% 50% at 92% 10%, rgba(228,168,168,.42), transparent 60%),
          radial-gradient(ellipse 50% 45% at 5% 60%, rgba(198,58,58,.09), transparent 60%),
          linear-gradient(180deg,#FBF6EF,#F6E9E2)`,
      }}
    >
      <div className="max-w-[1180px] mx-auto px-3 md:px-10">
        {/* ============================================================= */}
        {/* HERO SPLIT: animated desk (left) + commission form (right)     */}
        {/* ============================================================= */}
        <div className="grid lg:grid-cols-[42%_58%] gap-10 lg:gap-16 items-center mb-24">
          {/* -------- LEFT: animated art-studio desk -------- */}
          <div className="reveal order-2 lg:order-1 relative">
            {/* framed parchment panel so the scene feels like part of the studio */}
            <div
              className="relative rounded-xl p-4 md:p-6 border border-gold/30 shadow-[0_28px_70px_rgba(90,24,32,.14)] overflow-hidden"
              style={{
                background:
                  "radial-gradient(ellipse 70% 60% at 50% 40%, #FDF8EF, #F3E7D6)",
              }}
            >
              {/* subtle corner flourishes */}
              <span className="absolute top-2 left-3 font-script text-gold text-lg opacity-50">
                ✦
              </span>
              <span className="absolute bottom-2 right-3 font-script text-gold text-lg opacity-50">
                ✦
              </span>
              <ArtistDesk />
            </div>

            {/* caption under the scene */}
            <p className="mt-4 text-center font-script text-brand text-2xl leading-none">
              where every character begins…
            </p>
          </div>

          {/* -------- RIGHT: heading + commission form -------- */}
          <div className="order-1 lg:order-2">
            {sent ? (
              <div className="reveal in bg-white/60 border border-gold/40 rounded-lg p-10 shadow-[0_22px_55px_rgba(90,24,32,.13)] text-center">
                {/* animated checkmark */}
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  className="mx-auto mb-5"
                >
                  <circle
                    cx="32"
                    cy="32"
                    r="29"
                    fill="none"
                    stroke="#B9862F"
                    strokeWidth="2"
                    strokeDasharray="182"
                    strokeDashoffset="182"
                    style={{ animation: "drawRing .7s ease forwards" }}
                  />
                  <path
                    d="M20 33 l9 9 l16 -18"
                    fill="none"
                    stroke="#5A1820"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="42"
                    strokeDashoffset="42"
                    style={{ animation: "drawCheck .5s ease .6s forwards" }}
                  />
                </svg>
                <h3 className="font-serif text-3xl text-burgundy mb-3">
                  Thank you!
                </h3>
                <p className="text-inksoft leading-[1.9] max-w-[42ch] mx-auto">
                  Your request has been received. I'll personally review it and
                  respond within 24–48 hours. Looking forward to bringing your
                  vision to life.
                </p>
              </div>
            ) : (
              <form
                className="reveal bg-[#F6E9E2] rounded-lg p-7 md:p-8 relative border border-gold/25 shadow-[0_22px_55px_rgba(90,24,32,.12)]"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <span className="absolute top-3.5 right-4 font-script text-gold text-base opacity-60">
                  ✦
                </span>

                <div className="mb-5">
                  <label
                    htmlFor="f-name"
                    className="font-caps font-bold text-[.6rem] tracking-[.2em] uppercase text-gold block mb-1.5"
                  >
                    Your name
                  </label>
                  <input
                    id="f-name"
                    required
                    placeholder="e.g. Alex Rivers"
                    className="w-full bg-transparent border-0 border-b border-[#D9C4A8] pb-1.5 text-[.92rem] text-ink placeholder:text-[#B0A090] focus:outline-none focus:border-brand transition-colors"
                  />
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="f-email"
                    className="font-caps font-bold text-[.6rem] tracking-[.2em] uppercase text-gold block mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="f-email"
                    type="email"
                    required
                    placeholder="you@email.com"
                    className="w-full bg-transparent border-0 border-b border-[#D9C4A8] pb-1.5 text-[.92rem] text-ink placeholder:text-[#B0A090] focus:outline-none focus:border-brand transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 mb-5">
                  <div>
                    <label
                      htmlFor="f-type"
                      className="font-caps font-bold text-[.6rem] tracking-[.2em] uppercase text-gold block mb-1.5"
                    >
                      Project type
                    </label>
                    <select
                      id="f-type"
                      className="w-full bg-transparent border-0 border-b border-[#D9C4A8] pb-1.5 text-[.92rem] text-ink focus:outline-none focus:border-brand transition-colors"
                    >
                      <option>Bust Up</option>
                      <option>Half Body</option>
                      <option>Full Body</option>
                      <option>Couple Illustration</option>
                      <option>Book Cover</option>
                      <option>Not Sure Yet</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="f-budget"
                      className="font-caps font-bold text-[.6rem] tracking-[.2em] uppercase text-gold block mb-1.5"
                    >
                      Budget
                    </label>
                    <select
                      id="f-budget"
                      className="w-full bg-transparent border-0 border-b border-[#D9C4A8] pb-1.5 text-[.92rem] text-ink focus:outline-none focus:border-brand transition-colors"
                    >
                      <option>Under $100</option>
                      <option>$100–250</option>
                      <option>$250–500</option>
                      <option>$500+</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="f-desc"
                    className="font-caps font-bold text-[.6rem] tracking-[.2em] uppercase text-gold block mb-1.5"
                  >
                    Your idea
                  </label>
                  <textarea
                    id="f-desc"
                    placeholder="Tell me about your character(s), story, mood, personality, inspiration, and include any reference links if available."
                    className="w-full bg-transparent border-0 border-b border-[#D9C4A8] pb-1.5 text-xs sm:text-[.92rem] text-ink placeholder:text-[#B0A090] min-h-[80px] resize-y focus:outline-none focus:border-brand transition-colors"
                  />
                </div>

                <div className="mb-7">
                  <label className="font-caps font-bold text-[.6rem] tracking-[.2em] uppercase text-gold block mb-1.5">
                    Reference upload
                  </label>
                  <div className="border border-dashed border-gold rounded p-4 text-center text-xs sm:text-[.78rem] text-inksoft cursor-pointer transition-colors hover:border-brand hover:text-brand flex items-center justify-center gap-2">
                    <FiUploadCloud className="text-base" /> Drop your reference
                    images here, or click to browse
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full font-caps text-[.7rem] tracking-[.2em] uppercase text-paper py-3.5 rounded transition-transform hover:scale-[1.02] shadow-[0_10px_24px_rgba(90,24,32,.3)]"
                  style={{
                    background: "linear-gradient(120deg,#5A1820,#7A2430)",
                  }}
                >
                  Send my request ✦
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="max-w-[900px] mx-auto text-center">
          {/* header */}
          <div className="reveal">
            <span className="font-script text-gold text-2xl block leading-none mb-3">
              a little note
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-burgundy leading-[1.1]">
              Tell Me Your Story…
            </h2>
            <div className="flex items-center justify-center gap-3 mt-5 mb-9">
              <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold/60" />
              <span className="font-script text-gold text-lg">✦</span>
              <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold/60" />
            </div>
          </div>

          {/* intro copy */}
          <p className="reveal text-inksoft max-w-[62ch] mx-auto mb-4 sm:text-[1.20rem] sm:leading-[1.6] text-sm">
            Whether you're an author dreaming of the perfect character design, a
            reader wanting to see a beloved character come to life, or someone
            searching for a one-of-a-kind custom illustration, I'd love to hear
            your ideas.
          </p>
          <p className="reveal text-inksoft max-w-[62ch] mx-auto mb-12 sm:text-[1.20rem] sm:leading-[1.6] text-sm">
            Every illustration begins with a conversation. Share your vision,
            and together we'll create something memorable, meaningful, and
            uniquely yours.
          </p>

          {/* 2×2 paper info cards */}
          <div className="grid sm:grid-cols-2 gap-5 mb-14 text-left">
            {/* Email */}
            <div className="reveal relative bg-[#F7ECE4] rounded-lg p-6 border border-gold/20 shadow-[0_14px_36px_rgba(90,24,32,.09)]">
              <span className="absolute top-4 right-4 font-script text-gold text-sm opacity-60">
                ✦
              </span>
              <div className="font-caps font-bold text-[.8rem] tracking-[.28em] uppercase text-gold mb-4">
                email
              </div>
              <div className="h-px w-full bg-gold/25 mb-4" />
              <a
                href={`mailto:${EMAIL}`}
                className=" text-base text-burgundy hover:text-brand transition-colors"
              >
                {EMAIL}
              </a>
            </div>

            {/* Response time */}
            <div className="reveal relative bg-[#F7ECE4] rounded-lg p-6 border border-gold/20 shadow-[0_14px_36px_rgba(90,24,32,.09)]">
              <span className="absolute top-4 right-4 font-script text-gold text-sm opacity-60">
                ✦
              </span>
              <div className="font-caps font-bold text-[.8rem] tracking-[.28em] uppercase text-gold mb-4">
                response time
              </div>
              <div className="h-px w-full bg-gold/25 mb-4" />
              <p className=" text-base text-ink">
                Usually within 24–48 hours
              </p>
            </div>

            {/* Status */}
            <div className="reveal relative bg-[#F7ECE4] rounded-lg p-6 border border-gold/20 shadow-[0_14px_36px_rgba(90,24,32,.09)]">
              <span className="absolute top-4 right-4 font-script text-gold text-sm opacity-60">
                ✦
              </span>
              <div className="font-caps font-bold text-[.8rem] tracking-[.28em] uppercase text-gold mb-4">
                status
              </div>
              <div className="h-px w-full bg-gold/25 mb-4" />
              <p className=" text-base text-burgundy inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold inline-block animate-pulse" />
                Commissions Open
              </p>
            </div>

            {/* Commission type */}
            <div className="reveal relative bg-[#F7ECE4] rounded-lg p-6 border border-gold/20 shadow-[0_14px_36px_rgba(90,24,32,.09)]">
              <span className="absolute top-4 right-4 font-script text-gold text-sm opacity-60">
                ✦
              </span>
              <div className="font-caps font-bold text-[.8rem] tracking-[.28em] uppercase text-gold mb-4">
                commission type
              </div>
              <div className="h-px w-full bg-gold/25 mb-4" />
              <ul className=" text-base text-ink leading-[1.9]">
                <li>Character Art</li>
                <li>Couple Illustrations</li>
                <li>Book Covers</li>
                <li>Fantasy Romance</li>
              </ul>
            </div>
          </div>

          {/* divider */}
          <div className="reveal flex items-center justify-center mb-8">
            <span className="h-px w-40 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
          </div>

          {/* social icons with hover tooltips */}
          <div className="reveal flex items-center justify-center gap-6 mb-6">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="group relative w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center text-burgundy transition-all duration-300 hover:border-gold hover:-translate-y-1 hover:shadow-[0_10px_22px_rgba(185,134,47,.28)] hover:bg-gold/10"
              >
                <Icon className="text-base transition-transform duration-300 group-hover:scale-110" />

                <span
                  className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap
                     font-caps text-[.58rem] tracking-[.18em] uppercase text-paper bg-burgundy
                     px-2.5 py-1 rounded shadow-[0_6px_16px_rgba(90,24,32,.3)]
                     opacity-0 translate-y-1 transition-all duration-300
                     group-hover:opacity-100 group-hover:translate-y-0"
                >
                  {label}
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-burgundy rotate-45" />
                </span>
              </a>
            ))}
          </div>

          {/* signature */}
          <span className="reveal font-script text-gold text-2xl block">
            with love, Daisy
          </span>
        </div>
      </div>

      {/* keyframes for the success checkmark */}
      <style>{`
        @keyframes drawRing { to { stroke-dashoffset: 0; } }
        @keyframes drawCheck { to { stroke-dashoffset: 0; } }
      `}</style>
    </section>
  );
}

export function Footer() {
  return (
    <footer
      className="py-10 border-t border-gold/30 text-[#E9D6C6]"
      style={{ background: "linear-gradient(120deg,#5A1820,#4A141B)" }}
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 flex flex-wrap justify-between items-center gap-6">
        <a
          href="#home"
          className="font-script text-3xl text-cream leading-none"
        >
          {BRAND}{" "}
          <PiSparkleFill className="inline text-goldbright text-base -mt-2" />
        </a>
        <Status />
        <small className="text-[#C9AB9C] text-[.78rem]">
          © 2026 Daisyy Sketches — All artwork is 100% hand-drawn. No AI used.
        </small>
        <div className="flex items-center gap-4">
          <Link
            to="/terms"
            className="text-[.72rem] tracking-[.15em] uppercase text-[#C9AB9C] hover:text-goldbright transition-colors"
          >
            Terms of Service
          </Link>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="w-9 h-9 rounded-full flex items-center justify-center text-white transition-transform hover:scale-110"
            style={{
              background:
                "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)",
            }}
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export function Lightbox({ art, onClose, onPrev, onNext, currentIndex, total }) {
  useEffect(() => {
    const fn = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev?.();
      if (e.key === "ArrowRight") onNext?.();
    };
    document.addEventListener("keydown", fn);
    return () => document.removeEventListener("keydown", fn);
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    if (!art) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [art]);

  if (!art) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center px-6 py-10 overflow-y-auto"
      onClick={onClose}
    >
      {/* Backdrop layer — dark tint + blur on content behind it */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundColor: "rgba(46, 38, 32, 0.75)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
        }}
      />

      <button
        className="absolute top-6 right-6 sm:top-8 sm:right-8 w-11 h-11 rounded-full flex items-center justify-center transition"
        style={{ color: "#F8F3E9", border: "1px solid rgba(248,243,233,0.4)" }}
        aria-label="Close"
        onClick={onClose}
      >
        <FiX size={20} />
      </button>

      <div className="flex items-center justify-center gap-4 sm:gap-8 w-full max-w-[1400px]">
        {onPrev && (
          <button
            className="hidden sm:flex shrink-0 w-11 h-11 rounded-full items-center justify-center transition"
            style={{ color: "#F8F3E9", border: "1px solid rgba(248,243,233,0.4)" }}
            aria-label="Previous"
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
          >
            <FiChevronLeft size={20} />
          </button>
        )}

        <img
          src={art.src}
          alt={art.title}
          onClick={(e) => e.stopPropagation()}
          className="max-h-[68vh] max-w-full object-contain"
          style={{ boxShadow: "0 34px 90px rgba(0,0,0,.55)" }}
        />

        {onNext && (
          <button
            className="hidden sm:flex shrink-0 w-11 h-11 rounded-full items-center justify-center transition"
            style={{ color: "#F8F3E9", border: "1px solid rgba(248,243,233,0.4)" }}
            aria-label="Next"
            onClick={(e) => { e.stopPropagation(); onNext(); }}
          >
            <FiChevronRight size={20} />
          </button>
        )}
      </div>

      <div className="mt-8 text-center max-w-xl" onClick={(e) => e.stopPropagation()}>
        <h3
          className="font-serif text-3xl sm:text-4xl tracking-[.03em] uppercase"
          style={{ color: "#F8F3E9" }}
        >
          {art.title}
        </h3>

        <span
          className="inline-block mt-4 font-caps text-[.62rem] tracking-[.2em] uppercase px-4 py-2 rounded-md"
          style={{ color: "#C9A24A", border: "1px solid rgba(201,162,74,0.5)" }}
        >
          {art.catLabel}
        </span>

        {art.desc && (
          <p
            className="mt-5 font-serif italic text-[15px] leading-relaxed"
            style={{ color: "rgba(248,243,233,0.75)" }}
          >
            {art.desc}
          </p>
        )}

        {total > 1 && (
          <p
            className="mt-6 font-caps text-[.68rem] tracking-[.2em]"
            style={{ color: "rgba(248,243,233,0.5)" }}
          >
            {currentIndex + 1} / {total}
          </p>
        )}
      </div>
    </div>
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
            "radial-gradient(ellipse 55% 45% at 52% 40%, rgba(228,168,168,.35), transparent 65%), radial-gradient(ellipse 40% 40% at 68% 55%, rgba(185,134,47,.20), transparent 70%)",
        }}
      />

      <svg
        viewBox="0 0 420 460"
        className="relative w-full h-auto overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="deskWood" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#8a5636" />
            <stop offset="1" stopColor="#5f3a22" />
          </linearGradient>
          <linearGradient id="deskTop" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#a9764c" />
            <stop offset=".5" stopColor="#c08e5e" />
            <stop offset="1" stopColor="#8a5636" />
          </linearGradient>
          <radialGradient id="lampGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="#f7dfa3" stopOpacity=".9" />
            <stop offset="1" stopColor="#f7dfa3" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="paperGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#fdf8ef" />
            <stop offset="1" stopColor="#f2e6d3" />
          </linearGradient>
          <linearGradient id="inkGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#7A2430" />
            <stop offset="1" stopColor="#5A1820" />
          </linearGradient>
          <linearGradient id="goldStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f0d08a" />
            <stop offset="1" stopColor="#b9862f" />
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
            stroke="#b9862f"
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
            stroke="#d9c4a8"
            strokeWidth="1"
            transform="rotate(-4 121 81)"
          />
          <line
            x1="110"
            y1="72"
            x2="132"
            y2="72"
            stroke="#c9b79a"
            strokeWidth="1.2"
            transform="rotate(-4 121 81)"
          />
          <line
            x1="110"
            y1="80"
            x2="130"
            y2="80"
            stroke="#c9b79a"
            strokeWidth="1.2"
            transform="rotate(-4 121 81)"
          />
          <line
            x1="110"
            y1="88"
            x2="128"
            y2="88"
            stroke="#c9b79a"
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
            stroke="#b9862f"
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
            stroke="#d9c4a8"
            strokeWidth="1"
            transform="rotate(5 301 74)"
          />
          {/* tiny heart sketch on the note */}
          <path
            d="M301 68 c-3-4-9-1-9 3 c0 4 9 9 9 9 c0 0 9-5 9-9 c0-4-6-7-9-3z"
            fill="none"
            stroke="#c63a3a"
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
            stroke="#6b4326"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <line
            x1="110"
            y1="10"
            x2="120"
            y2="150"
            stroke="#6b4326"
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
            stroke="#e0d0b4"
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
          <rect x="30" y="130" width="60" height="6" rx="3" fill="#6b4326" />
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
          fill="#5f3a22"
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
          <rect x="10" y="6" width="22" height="16" rx="3" fill="#3a1016" />
          <rect
            x="8"
            y="2"
            width="26"
            height="8"
            rx="3"
            fill="#c63a3a"
            opacity=".85"
          />
          {/* moving shine */}
          <rect
            x="4"
            y="22"
            width="8"
            height="36"
            rx="4"
            fill="#ffffff"
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
            fill="#b9862f"
            opacity=".85"
          />
          <rect
            x="0"
            y="34"
            width="40"
            height="10"
            rx="4"
            fill="#f0d08a"
            opacity=".8"
          />
          <g className="float-a">
            <rect
              x="8"
              y="-6"
              width="5"
              height="46"
              rx="2.5"
              fill="#7A2430"
              transform="rotate(-8 10 20)"
            />
            <path
              d="M8 -8 l5 4 l-2 -8z"
              fill="#f0d08a"
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
              fill="#5f3a22"
              transform="rotate(4 22 20)"
            />
            <path
              d="M20 -12 l5 4 l-2 -8z"
              fill="#f0d08a"
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
              fill="#c63a3a"
              transform="rotate(11 32 20)"
            />
            <path
              d="M30 -6 l5 4 l-2 -8z"
              fill="#f0d08a"
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
            stroke="#e0d0b4"
            strokeWidth="1"
            transform="rotate(-3 60 7)"
          />
          <line
            x1="14"
            y1="6"
            x2="104"
            y2="6"
            stroke="#d3c1a4"
            strokeWidth="1"
            transform="rotate(-3 60 7)"
          />
        </g>

        {/* ============ FLOATING GOLDEN DUST ============ */}
        <g fill="#e9c877">
          <circle className="dust dust-1" cx="90" cy="180" r="2.2" />
          <circle className="dust dust-2" cx="260" cy="150" r="1.8" />
          <circle className="dust dust-3" cx="330" cy="210" r="2.4" />
          <circle className="dust dust-4" cx="150" cy="100" r="1.6" />
          <circle className="dust dust-5" cx="300" cy="90" r="2" />
          <circle className="dust dust-6" cx="60" cy="130" r="1.8" />
        </g>

        {/* ============ FLOATING FLOWER PETALS (rose) ============ */}
        <g fill="#e4a8a8" opacity=".85">
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
