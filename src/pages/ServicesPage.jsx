import { Link } from 'react-router-dom'
import { PageHero } from '../components/Extras'
import { ServicesAccordion } from '../components/Extras'
import { useGsapReveal } from '../hooks'

export default function ServicesPage() {
  useGsapReveal([])
  return (
    <>
      <PageHero eyebrow="Services" title="What I" shimmerWord="Offer" script="From a single portrait to a full book cover — here's how I can help bring your story to life." />
      <section className="py-16 md:py-24 bg-paper px-5 md:px-8">
        <ServicesAccordion />
        <div className="text-center mt-12 reveal">
          <Link to="/pricing" className="btn-main inline-block">Ready to Start? See Pricing ✦</Link>
        </div>
      </section>
    </>
  )
}
