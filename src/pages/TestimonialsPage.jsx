import { useState } from 'react'
import { Link } from 'react-router-dom'
import { testimonials, testimonialFilters } from '../data'
import { PageHero } from '../components/Extras'
import TestimonialSlider from '../components/TestimonialSlider'
import { useGsapReveal } from '../hooks'

export default function TestimonialsPage() {
  const [filter, setFilter] = useState('all')
  useGsapReveal([filter])
  const visible = testimonials.filter((t) => filter === 'all' || t.cat === filter)
  return (
    <>
      <PageHero eyebrow="Testimonials" title="Kind Words From" shimmerWord="Clients" script="Nothing means more than hearing your characters came to life the way you imagined." />
      <section className="py-16 md:py-24 bg-paper px-5 md:px-8">
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {testimonialFilters.map((f) => (
            <button key={f.key} onClick={() => setFilter(f.key)}
              className={`font-caps text-[.66rem] tracking-[.2em] uppercase px-4 py-2.5 border transition-all ${
                filter === f.key ? 'bg-burgundy border-burgundy text-paper shadow-[0_8px_20px_rgba(90,24,32,.25)]'
                : 'bg-white border-burgundy/25 text-inksoft hover:text-burgundy hover:border-burgundy'}`}>
              {f.label}
            </button>
          ))}
        </div>
        <TestimonialSlider key={filter} items={visible} />
        <div className="text-center mt-12 reveal">
          <Link to="/contact" className="btn-main inline-block">Loved working with me? Leave a review ✦</Link>
        </div>
      </section>
    </>
  )
}
