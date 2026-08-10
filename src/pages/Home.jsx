import { lazy, Suspense, useState } from "react";

import { Link } from "react-router-dom";

import Hero from "../components/Hero";

import Marquee, { About, Flourish } from "../components/Sections";

import { HomeGallery } from "../components/Content";
import ClientReviews from "../components/ClientReviews";
import { artworks } from "../data";
import { useGsapReveal } from "../hooks";

import MiniHead from "../components/MiniHead";
import Heading from "../components/Heading";

import DeferredSection from "../components/DeferredSection";

/* =========================================
   LAZY COMPONENTS

   HomeGallery intentionally NOT lazy.
   ========================================= */

const Lightbox = lazy(() => import("../components/Contact"));

const Commissions = lazy(() => import("../components/Commissions"));

const TestimonialSlider = lazy(() => import("../components/TestimonialSlider"));

const InstagramSection = lazy(() => import("../components/InstagramSection"));

const CTABanner = lazy(() =>
  import("../components/Extras").then((module) => ({
    default: module.CTABanner,
  })),
);

export default function Home() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (artworkId) => {
    const index = artworks.findIndex((artwork) => artwork.id === artworkId);

    if (index !== -1) {
      setLightboxIndex(index);
    }
  };

  useGsapReveal([]);

  return (
    <>
      {/* HERO */}

      <Hero />

      {/* MARQUEE / ABOUT ETC */}

      <Marquee />

      <ClientReviews/>
      <About />


      <HomeGallery preview previewLimit={9} onOpenLightbox={openLightbox} />



      <Suspense fallback={<div className="min-h-[42rem]" />}>
        <Commissions />
      </Suspense>

      {/* =================================
          TESTIMONIALS

          Deferred + lazy is fine.
          ================================= */}

      <DeferredSection minHeight="32rem">
        <section
          className="
            aurora
            px-5
            py-20
            text-center
            md:py-28
          "
        >
          <MiniHead text="Testimonials" />

          <Heading text="Kind Words From" highlight="Clients" />

          <Suspense fallback={<div className="min-h-[20rem]" />}>
            <TestimonialSlider />
          </Suspense>
        </section>
      </DeferredSection>

      {/* =================================
          INSTAGRAM
          ================================= */}

      <DeferredSection minHeight="60rem">
        <Suspense fallback={<div className="min-h-[60rem]" />}>
          <InstagramSection />
        </Suspense>
      </DeferredSection>

      {/* =================================
          CTA
          ================================= */}

      <DeferredSection minHeight="20rem">
        <Suspense fallback={<div className="min-h-[20rem]" />}>
          <CTABanner />
        </Suspense>
      </DeferredSection>

      {/* =================================
          LIGHTBOX

          Lazy is perfect here because it
          isn't needed until user clicks.
          ================================= */}

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
  );
}
