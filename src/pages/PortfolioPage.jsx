import { lazy, Suspense, useState } from 'react'
import { Gallery } from '../components/Content'
import {artworks} from "../data"

import { PageHero, CTABanner } from '../components/Extras'
import { useGsapReveal } from '../hooks'

const Lightbox = lazy(() => import('../components/Contact'))

export default function PortfolioPage() {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  useGsapReveal([])

  const openLightbox = (artworkId) => {
    const index = artworks.findIndex((artwork) => artwork.id === artworkId)
    if (index !== -1) setLightboxIndex(index)
  }

  return (
    <>
      <PageHero
        eyebrow="The Gallery"
        title="My"
        shimmerWord="Portfolio"
        script="Every character has a story — here's a few of theirs."
      />
      <Gallery onOpenLightbox={openLightbox} bare />
      <CTABanner
        title="Want Something Like This?"
        sub="Tell me about your characters and I'll sketch the rest."
        btn="Let's Create Yours"
      />
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
