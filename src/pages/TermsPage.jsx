import { Link } from 'react-router-dom'
import { Terms } from '../components/Content'
import { PageHero } from '../components/Extras'
import { useGsapReveal } from '../hooks'

export default function TermsPage() {
  useGsapReveal([])
  return (
    <>
      <PageHero eyebrow="Please Read" title="Terms of" shimmerWord="Service" script="Keeping things clear and fair for both of us." />
      <Terms bare />
      <p className="bg-paper text-center pb-20 text-inksoft text-[.9rem]">
        Questions about these terms?{' '}
        <Link to="/contact" className="text-burgundy underline decoration-gold underline-offset-4 hover:text-brand">Reach out anytime.</Link>
      </p>
    </>
  )
}
