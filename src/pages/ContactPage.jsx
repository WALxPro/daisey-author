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
      <section className="pb-20 bg-[#F6E9E2] px-5">
        <div className="max-w-[720px] mx-auto grid sm:grid-cols-2 gap-4 reveal">
          <a href={INSTAGRAM} target="_blank" rel="noreferrer"
            className="flex items-center justify-center gap-3 text-white font-caps text-[.7rem] tracking-[.2em] uppercase py-4 transition-transform hover:scale-[1.03] shadow-[0_12px_28px_rgba(0,0,0,.2)]"
            style={{ background: 'linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)' }}>
            <FaInstagram className="text-lg" /> DM on Instagram
          </a>
          <a href={`mailto:${EMAIL}`}
            className="flex items-center justify-center gap-3 font-caps text-[.7rem] tracking-[.2em] uppercase py-4 border border-burgundy text-burgundy bg-white transition-all hover:bg-burgundy hover:text-paper hover:scale-[1.03]">
            <FiMail className="text-lg" /> Email Me
          </a>
        </div>
      </section>
    </>
  )
}
