import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import { PiSparkleFill } from 'react-icons/pi'
import { navLinks, BRAND } from '../data'

export default function Navbar({ darkHero }) {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(darkHero)
  const [progress, setProgress] = useState(0)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let lastY = window.scrollY
    const onScroll = () => {
      const h = document.documentElement
      const y = window.scrollY
      setProgress((h.scrollTop / Math.max(h.scrollHeight - h.clientHeight, 1)) * 100)
      setDark(darkHero && y < window.innerHeight - 80)
      // smart hide: hide on scroll down, reveal instantly on scroll up
      if (y > lastY + 6 && y > 140) setHidden(true)
      else if (y < lastY - 4 || y <= 140) setHidden(false)
      lastY = y
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [darkHero])

  const linkCls = ({ isActive }) =>
    `relative pb-1 transition-colors uppercase ${
      isActive
        ? (dark ? 'text-goldlight' : 'text-burgundy') + ' after:w-full'
        : (dark ? 'text-creamdim hover:text-goldlight' : 'text-inksoft hover:text-burgundy') + ' after:w-0 hover:after:w-full'
    } after:absolute after:left-0 after:bottom-0 after:h-px after:bg-gold after:transition-all after:duration-300`

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 backdrop-blur-md border-b transition-[transform,background-color,border-color] duration-300 will-change-transform ${hidden && !open ? '-translate-y-full' : 'translate-y-0'} ${
      dark ? 'bg-winedeep/60 border-goldbright/25' : 'bg-paper/85 border-gold/20'
    }`}>
      <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-3 flex items-center justify-between gap-4">
        <Link to="/" className={`font-script text-[1.65rem] leading-none whitespace-nowrap ${dark ? 'text-cream' : 'text-burgundy'}`}>
          {BRAND} <PiSparkleFill className="inline text-goldbright text-sm -mt-2 animate-twinkle" />
        </Link>

        <ul className="hidden lg:flex gap-6 text-[.72rem] tracking-[.12em]">
          {navLinks.map((l) => (
            <li key={l.to}><NavLink to={l.to} end={l.to === '/'} className={linkCls}>{l.label}</NavLink></li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/contact" className="font-caps text-[.64rem] tracking-[.2em] uppercase text-paper bg-burgundy border border-burgundy px-4 py-2 shadow-[0_6px_18px_rgba(90,24,32,.25)] transition-colors hover:bg-gold hover:border-gold hover:text-ink">
            ✦ Commission Me
          </Link>
        </div>

        <button className={`lg:hidden text-2xl ${dark ? 'text-goldlight' : 'text-burgundy'}`} onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {open && (
        <ul className={`lg:hidden flex flex-col gap-4 px-8 py-6 border-b ${dark ? 'bg-winedeep/95 border-goldbright/30' : 'bg-paper/95 border-gold/30'}`}>
          {navLinks.map((l, i) => (
            <li key={l.to} style={{ animation: `menuIn .4s ${i * 0.06}s both` }}>
              <NavLink to={l.to} end={l.to === '/'} onClick={() => setOpen(false)}
                className={({ isActive }) => `text-[.8rem] tracking-[.12em] uppercase ${isActive ? 'text-goldbright' : dark ? 'text-creamdim' : 'text-inksoft'}`}>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
      <div className="absolute left-0 -bottom-px h-0.5 bg-gradient-to-r from-burgundy to-gold" style={{ width: `${progress}%` }} />
    </nav>
  )
}
