import { useState } from 'react'
import { Gallery } from '../components/Content'
import { Lightbox } from '../components/Contact'
import { PageHero, CTABanner } from '../components/Extras'
import { useGsapReveal } from '../hooks'

export default function PortfolioPage() {
  const [lightbox, setLightbox] = useState(null)
  useGsapReveal([])
  return (
    <>
      <PageHero eyebrow="The Gallery" title="My" shimmerWord="Portfolio" script="Every character has a story — here's a few of theirs." />
      <Gallery onOpenLightbox={setLightbox} bare />
      <CTABanner title="Want Something Like This?" sub="Tell me about your characters and I'll sketch the rest." btn="Let's Create Yours" />
      <Lightbox art={lightbox} onClose={() => setLightbox(null)} />
    </>
  )
}
