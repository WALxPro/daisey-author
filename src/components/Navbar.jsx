import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { PiSparkleFill } from "react-icons/pi";
import { navLinks, BRAND } from "../data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const html = document.documentElement;

      const scrollPercentage =
        (html.scrollTop /
          Math.max(html.scrollHeight - html.clientHeight, 1)) *
        100;

      setProgress(scrollPercentage);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkCls = ({ isActive }) =>
    `relative py-2 font-medium uppercase tracking-[0.3em]
     text-[0.68rem] transition-colors duration-300
     after:absolute after:left-0 after:bottom-0 after:h-px
     after:bg-[#7c2bd5] after:transition-all after:duration-300
     ${
       isActive
         ? "text-[#6723a9] after:w-full"
         : "text-[#716b84] after:w-0 hover:text-[#6723a9] hover:after:w-full"
     }`;

  return (
    <nav
      className="sticky inset-x-0 top-0 z-50
        border-b border-[#ece8f2]
        bg-white/95 backdrop-blur-xl"
    >
      <div
        className="mx-auto flex min-h-[80px] max-w-[1340px]
          items-center justify-between gap-4
          px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12"
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center whitespace-nowrap
            font-script text-[1.5rem] leading-none
            text-[#7c2bd5] transition-colors duration-300
            hover:text-[#9b4ce1]
            sm:text-[1.7rem] md:text-[2rem]"
        >
          {BRAND}

          <PiSparkleFill
            className="ml-1 inline-block text-[0.65rem]
              text-[#a64ce4] animate-twinkle"
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={linkCls}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop commission button */}
        <div className="hidden items-center lg:flex">
          <Link
            to="/contact"
            className="inline-flex min-h-[44px] items-center
              justify-center gap-2 rounded-full
              bg-gradient-to-r from-[#4b0c83]
              via-[#7625c4] to-[#b55ce5]
              px-6 font-caps text-[0.64rem]
              font-semibold uppercase tracking-[0.18em]
              text-white
              shadow-[0_8px_24px_rgba(91,31,159,0.22)]
              transition-all duration-300
              hover:-translate-y-0.5
              hover:shadow-[0_12px_28px_rgba(91,31,159,0.3)]"
          >
            Commission
            <PiSparkleFill className="text-[0.58rem]" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="shrink-0 text-2xl text-[#6723a9] lg:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="border-t border-[#ece8f2]
            bg-white/[0.98] px-6 py-6 lg:hidden"
        >
          <ul className="mx-auto flex max-w-[1340px] flex-col gap-4">
            {navLinks.map((link, index) => (
              <li
                key={link.to}
                style={{
                  animation: `menuIn 0.4s ${index * 0.06}s both`,
                }}
              >
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block text-[0.76rem] font-medium uppercase
                     tracking-[0.2em] transition-colors
                     ${
                       isActive
                         ? "text-[#6723a9]"
                         : "text-[#716b84] hover:text-[#6723a9]"
                     }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}

            <li className="pt-2">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2
                  rounded-full bg-gradient-to-r
                  from-[#4b0c83] via-[#7625c4]
                  to-[#b55ce5] px-6 py-3
                  font-caps text-[0.68rem]
                  uppercase tracking-[0.18em] text-white"
              >
                Commission
                <PiSparkleFill className="text-[0.6rem]" />
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Scroll progress */}
      <div
        className="absolute -bottom-px left-0 h-[2px]
          bg-gradient-to-r from-[#4b0c83]
          via-[#7c2bd5] to-[#b55ce5]"
        style={{ width: `${progress}%` }}
      />
    </nav>
  );
}