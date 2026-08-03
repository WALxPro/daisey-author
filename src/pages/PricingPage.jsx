import { Link } from 'react-router-dom'
import { PageHero, FAQ, CTABanner } from '../components/Extras'
import { useGsapReveal } from '../hooks'
import Commissions from '../components/Commissions'

export default function PricingPage() {
  useGsapReveal([])
  return (
    <>
      <PageHero eyebrow="Pricing" title="Investment &" shimmerWord="Packages" script="Transparent pricing, no hidden fees because your budget should never be a mystery." />
      <Commissions bare />
      <section className="pb-16 md:pb-24 bg-paper px-5 md:px-8"><FAQ /></section>
      <CTABanner title="Not sure which package fits?" sub="Tell me your idea — I'll recommend the right one." btn="Get a Personalized Quote" />
    </>
  )
}
