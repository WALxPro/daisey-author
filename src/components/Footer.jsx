import { Link } from "react-router-dom";

import {
  PiPaintBrushBroadFill,
  PiSparkleFill,
} from "react-icons/pi";

import {
  FaInstagram,
  FaRedditAlien,
} from "react-icons/fa";

import { FaThreads } from "react-icons/fa6";
import { SiSubstack } from "react-icons/si";

const BRAND = "Daisyy Sketches";

const footerLinks = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Portfolio",
    to: "/portfolio",
  },
  {
    label: "Services",
    to: "/services",
  },
  {
    label: "Pricing",
    to: "/pricing",
  },
  {
    label: "Testimonials",
    to: "/testimonials",
  },
  {
    label: "About Me",
    to: "/about",
  },
  {
    label: "Contact Us",
    to: "/contact",
  },
];

const socials = [
  {
    icon: FaInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/daisyy_sketches/",
  },
  {
    icon: PiPaintBrushBroadFill,
    label: "Cara",
    href: "https://cara.app/daisyyartist",
  },
  {
    icon: FaRedditAlien,
    label: "Reddit",
    href: "https://reddit.com/u/YOUR_USERNAME",
  },
  {
    icon: FaThreads,
    label: "Threads",
    href: "https://www.threads.com/@daisyy_sketches?xmt=AQG0k_bgb8Y_8CdOq0ti6zARccG2AynC73iUVbTxPluXLQ8",
  },
  {
    icon: SiSubstack,
    label: "Substack",
    href: "https://substack.com/@daisyysketches2",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="
        plum-panel
        relative
        isolate
        overflow-hidden
        border-t
        border-gold/25
        px-5
        pb-8
        pt-16
        text-paper
        md:px-10
        md:pt-20
      "
    >
      {/* Decorative background glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-32
          top-0
          -z-10
          h-80
          w-80
          rounded-full
          blur-[120px]
        "
        style={{
          backgroundColor:
            "rgba(var(--color-burgundy2), 0.22)",
        }}
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-24
          bottom-0
          -z-10
          h-72
          w-72
          rounded-full
          blur-[110px]
        "
        style={{
          backgroundColor:
            "rgba(var(--color-rose), 0.15)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1200px]">
        {/* Main footer content */}
        <div
          className="
            grid
            gap-12
            md:grid-cols-2
            lg:grid-cols-[1.15fr_0.9fr_0.95fr]
            lg:gap-16
          "
        >
          {/* Brand */}
          <div>
            <Link
              to="/"
              aria-label={`${BRAND} home`}
              className="
                inline-flex
                items-center
                gap-2
                font-script
                text-4xl
                leading-none
                text-gold-light
                transition-colors
                duration-300
                hover:text-goldbright
                sm:text-5xl
              "
            >
              {BRAND}

              <PiSparkleFill
                aria-hidden="true"
                className="text-lg text-gold"
              />
            </Link>

            <p
              className="
                mt-6
                max-w-[42ch]
                font-editorial
                text-base
                leading-relaxed
                text-paper/65
              "
            >
              Hand-drawn character art, romantic scenes and book
              illustrations created to bring your stories and
              imagined worlds to life.
            </p>

            <div className="mt-7 inline-flex">
              {/* <Status /> */}
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <p
              className="
                font-caps
                text-[0.65rem]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-gold
              "
            >
              Explore
            </p>

            <div className="rule-gold mt-4 h-px w-24" />

            <ul
              className="
                mt-6
                grid
                grid-cols-2
                gap-x-8
                gap-y-4
              "
            >
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="
                      group
                      inline-flex
                      items-center
                      gap-2
                      font-editorial
                      text-sm
                      text-paper/65
                      transition-colors
                      duration-300
                      hover:text-gold
                      sm:text-base
                    "
                  >
                    <span
                      aria-hidden="true"
                      className="
                        text-[0.5rem]
                        text-gold/45
                        transition-all
                        duration-300
                        group-hover:rotate-90
                        group-hover:text-gold
                      "
                    >
                      ✦
                    </span>

                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social icons */}
          <div className="md:col-span-2 lg:col-span-1">
            <p
              className="
                font-caps
                text-[0.65rem]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-gold
              "
            >
              Follow My Work
            </p>

            <div className="rule-gold mt-4 h-px w-24" />

            <p
              className="
                mt-6
                max-w-[35ch]
                font-editorial
                text-sm
                leading-relaxed
                text-paper/60
              "
            >
              Follow along for sketches, artwork reveals and
              behind-the-scenes updates.
            </p>

            <div
              className="
                mt-7
                flex
                flex-wrap
                items-center
                gap-3
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
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-gold/35
                    bg-white/[0.04]
                    text-gold
                    transition-all
                    duration-300
                    hover:-translate-y-1.5
                    hover:border-gold
                    hover:bg-white/[0.1]
                    hover:text-paper
                    hover:shadow-[0_12px_30px_rgba(var(--color-gold),0.2)]
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
                      z-20
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
                      text-[0.52rem]
                      uppercase
                      tracking-[0.16em]
                      text-paper
                      opacity-0
                      shadow-[0_8px_20px_rgba(var(--color-wine-dark),0.7)]
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
          </div>
        </div>

        {/* Divider */}
        <div
          aria-hidden="true"
          className="
            rule-gold
            mt-14
            h-px
            w-full
            opacity-45
          "
        />

        {/* Bottom footer */}
        <div
          className="
            mt-7
            flex
            flex-col
            items-center
            justify-between
            gap-5
            text-center
            md:flex-row
            md:text-left
          "
        >
          <small
            className="
              max-w-[62ch]
              font-editorial
              text-[0.78rem]
              leading-relaxed
              text-paper/50
            "
          >
            © {currentYear} {BRAND} — All artwork is 100%
            hand-drawn. No AI used.
          </small>

          <div
            className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-x-5
              gap-y-3
            "
          >
            <Link
              to="/terms"
              className="
                font-caps
                text-[0.58rem]
                uppercase
                tracking-[0.18em]
                text-paper/50
                transition-colors
                duration-300
                hover:text-gold
              "
            >
              Terms of Service
            </Link>

            <span
              aria-hidden="true"
              className="hidden text-gold/35 sm:inline"
            >
              ✦
            </span>

            <Link
              to="/privacy"
              className="
                font-caps
                text-[0.58rem]
                uppercase
                tracking-[0.18em]
                text-paper/50
                transition-colors
                duration-300
                hover:text-gold
              "
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}