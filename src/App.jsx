import { lazy, Suspense, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Footer } from './components/Footer'

const PortfolioPage = lazy(() => import('./pages/PortfolioPage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const PricingPage = lazy(() => import('./pages/PricingPage'))
const TestimonialsPage = lazy(() => import('./pages/TestimonialsPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const TermsPage = lazy(() => import('./pages/TermsPage'))

function Loader() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-paper">
      <span className="font-script text-4xl text-burgundy">Daisyy Sketches</span>
      <span className="mt-4 w-24 h-0.5 overflow-hidden bg-gold/20 relative">
        <span className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-burgundy to-gold animate-marquee" style={{ animationDuration: '1.2s' }} />
      </span>
    </div>
  )
}

function LoadingScreen() {
  return (
    <div className="app-loader" role="status" aria-live="polite" aria-label="Loading website">
      <span className="app-loader__orb app-loader__orb--one" aria-hidden="true" />
      <span className="app-loader__orb app-loader__orb--two" aria-hidden="true" />
      <div className="app-loader__content">
        <span className="app-loader__sparkle" aria-hidden="true">✦</span>
        <p className="font-script text-5xl text-goldlight sm:text-6xl">Daisyy Sketches</p>
        <p className="mt-2 font-caps text-[0.58rem] uppercase tracking-[0.34em] text-creamdim">Preparing your gallery</p>
        <span className="app-loader__line" aria-hidden="true"><span /></span>
      </div>
    </div>
  )
}

function ScrollAndFade({ children }) {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return <div key={pathname} className="route-fade pt-[80px]">{children}</div>
}

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const finishLoading = () => window.setTimeout(() => setLoading(false), 450)
    if (document.readyState === 'complete') {
      finishLoading()
      return undefined
    }
    window.addEventListener('load', finishLoading, { once: true })
    return () => window.removeEventListener('load', finishLoading)
  }, [])

  return (
    <BrowserRouter>
      <RoutedApp />
      {loading && <LoadingScreen />}
    </BrowserRouter>
  )
}

function RoutedApp() {
  const { pathname } = useLocation()
  return (
    <>
      <Navbar darkHero={pathname === '/' || true} />
      <ScrollAndFade>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </ScrollAndFade>
      <Footer />
    </>
  )
}
