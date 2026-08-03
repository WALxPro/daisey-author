import { lazy, Suspense, useState } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Marquee, {  About, Flourish } from '../components/Sections'
import { artworks } from '../data'
import { useGsapReveal } from '../hooks'
import MiniHead from '../components/MiniHead'
import Heading from '../components/Heading'
import DeferredSection from '../components/DeferredSection'

const Gallery = lazy(() => import('../components/Content').then((module) => ({ default: module.Gallery })))
const Lightbox = lazy(() => import('../components/Contact'))
const Commissions = lazy(() => import('../components/Commissions'))
const TestimonialSlider = lazy(() => import('../components/TestimonialSlider'))
const InstagramSection = lazy(() => import('../components/InstagramSection'))
const CTABanner = lazy(() => import('../components/Extras').then((module) => ({ default: module.CTABanner })))

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
      <DeferredSection minHeight="38rem">
        <Suspense fallback={null}>
          <Gallery onOpenLightbox={openLightbox} preview />
        </Suspense>
      </DeferredSection>
      <DeferredSection minHeight="42rem">
        <Suspense fallback={null}>
          <Commissions />
        </Suspense>
      </DeferredSection>
      <DeferredSection minHeight="32rem">
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

          <Suspense fallback={null}>
            <TestimonialSlider />
          </Suspense>
        </section>
      </DeferredSection>
      <DeferredSection minHeight="60rem">
        <Suspense fallback={null}>
          <InstagramSection />
        </Suspense>
      </DeferredSection>
      <DeferredSection minHeight="20rem">
        <Suspense fallback={null}>
          <CTABanner />
        </Suspense>
      </DeferredSection>
      
      {lightboxIndex !== null && (
        <Suspense fallback={null}>
          <Lightbox
            artworks={artworks}
            currentIndex={lightboxIndex}
            onChange={setLightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        </Suspense>
      )}
    </>
  )
}
