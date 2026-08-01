import { useState } from 'react'
import { Gallery } from '../components/Content'
import {artworks} from "../data"

import { PageHero, CTABanner } from '../components/Extras'
import { useGsapReveal } from '../hooks'
import { Lightbox } from '../components/Contact'

export default function PortfolioPage() {
  const [lightbox, setLightbox] = useState(null)
  useGsapReveal([])

  const currentIdx = lightbox
    ? artworks.findIndex((a) => a.id === lightbox.id)
    : -1

  const goPrev = () => {
    if (currentIdx === -1) return
    const prev = artworks[(currentIdx - 1 + artworks.length) % artworks.length]
    setLightbox(prev)
  }

  const goNext = () => {
    if (currentIdx === -1) return
    const next = artworks[(currentIdx + 1) % artworks.length]
    setLightbox(next)
  }

  return (
    <>
      <PageHero
        eyebrow="The Gallery"
        title="My"
        shimmerWord="Portfolio"
        script="Every character has a story — here's a few of theirs."
      />
      <Gallery onOpenLightbox={setLightbox} bare />
      <CTABanner
        title="Want Something Like This?"
        sub="Tell me about your characters and I'll sketch the rest."
        btn="Let's Create Yours"
      />
      <Lightbox
        art={lightbox}
        onClose={() => setLightbox(null)}
        onPrev={goPrev}
        onNext={goNext}
        currentIndex={currentIdx}
        total={artworks.length}
      />
    </>
  )
}