import { useState } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Marquee, {  About, Flourish } from '../components/Sections'
import { Gallery } from '../components/Content'
import Lightbox from '../components/Contact'
import { artworks } from '../data'
import {  CTABanner } from '../components/Extras'
import TestimonialSlider from '../components/TestimonialSlider'
import { SectionHead } from '../components/Sections'
import Pinned from '../components/Pinned'
import { useGsapReveal } from '../hooks'
import Commissions from '../components/Commissions'
import MiniHead from '../components/MiniHead'
import Heading from '../components/Heading'
import InstagramSection from '../components/InstagramSection'

export default function Home() {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const openLightbox = (artworkId) => {
    const index = artworks.findIndex((artwork) => artwork.id === artworkId)
    if (index !== -1) setLightboxIndex(index)
  }
  useGsapReveal([])
  return (
    <>
      <Marquee  />
      <Hero onOpenLightbox={openLightbox} />
      <Marquee onOpenLightbox={openLightbox} />
      <About />
      {/* <Pinned /> */}
      <Gallery onOpenLightbox={openLightbox} preview />
      <Commissions />
    <section className="aurora px-5 py-20 text-center md:py-28">
  <MiniHead text="Testimonials" />

  <Heading text="Kind Words From" highlight="Clients" />

  <p
    className="
      mx-auto
      mt-5
      w-full
      max-w-[56ch]
      text-center
      text-sm
      leading-relaxed
      text-inksoft
      sm:text-[1.2rem]
      sm:leading-[1.6]
    mb-10
    "
  >
    Nothing means more than hearing your characters came to life the way you
    imagined.
  </p>

  <div className="reveal">
    <TestimonialSlider />
  </div>
</section>
      <InstagramSection />
      <CTABanner />
      
      {lightboxIndex !== null && (
        <Lightbox
          artworks={artworks}
          currentIndex={lightboxIndex}
          onChange={setLightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  )
}
