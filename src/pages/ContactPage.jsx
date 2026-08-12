import { FaInstagram } from 'react-icons/fa6'
import { FiMail } from 'react-icons/fi'
import { Contact } from '../components/Contact'
import { PageHero } from '../components/Extras'
import { INSTAGRAM, IG_HANDLE, EMAIL } from '../data'
import { useGsapReveal } from '../hooks'

export default function ContactPage() {
  useGsapReveal([])
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's Bring Your Character to" shimmerWord="Life" script="Fill out the form below and I'll get back to you within 24-48 hours." />
      <Contact />
      <section className=" bg-[var(--paper2)] px-5">
        <div className="max-w-[720px] mx-auto grid sm:grid-cols-1 gap-4 reveal py-10">
          <a href={INSTAGRAM} target="_blank" rel="noreferrer"
            className="flex items-center justify-center gap-3 text-white font-caps text-[.7rem] tracking-[.2em] uppercase py-4 transition-transform hover:scale-[1.03] shadow-[0_12px_28px_rgba(var(--color-wine-dark),.2)]"
            style={{ background: 'linear-gradient(45deg,var(--brand),var(--burgundy),var(--burgundy2),var(--brand),var(--gold-bright))' }}>
            <FaInstagram className="text-lg" /> DM on Instagram
          </a>
         
        </div>
      </section>
    </>
  )
}
