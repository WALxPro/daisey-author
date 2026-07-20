import { useState } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import { Marquee, About, Flourish } from '../components/Sections'
import { Gallery, Commissions } from '../components/Content'
import { Lightbox } from '../components/Contact'
import { InstagramSection, CTABanner } from '../components/Extras'
import TestimonialSlider from '../components/TestimonialSlider'
import { SectionHead } from '../components/Sections'
import Pinned from '../components/Pinned'
import { useGsapReveal } from '../hooks'
import { HomeCommissionStack } from '../components/HomeCommissionStack'


export default function Home() {
  const [lightbox, setLightbox] = useState(null)
  useGsapReveal([])
  return (
    <>
      <Hero onOpenLightbox={setLightbox} />
      <Marquee onOpenLightbox={setLightbox} />
      <About />
      {/* <Pinned /> */}
      <Gallery onOpenLightbox={setLightbox} preview />
      <Commissions />
      <section className="py-20 md:py-28 px-5" style={{ background: 'radial-gradient(ellipse 60% 50% at 15% 15%, rgba(228,168,168,.4), transparent 60%), #F6EDE4' }}>
        <SectionHead eyebrow="Testimonials" title="Kind Words From" shimmerWord="Clients">
          Nothing means more than hearing your characters came to life the way you imagined.
        </SectionHead>
        <div className="reveal"><TestimonialSlider /></div>
      </section>
      <InstagramSection />
      <CTABanner />
      
      <Lightbox art={lightbox} onClose={() => setLightbox(null)} />
    </>
  )
}
