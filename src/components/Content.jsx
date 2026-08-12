import { useEffect, useMemo, useRef, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import {
  artworks,
  Homeartworks,
  filters,
  processSteps,
  terms,
  tiers,
} from "../data";
import { SectionHead } from "./Sections";
import MiniHead from "./MiniHead";
import Heading from "./Heading";
import GalleryCard from "./GalleryCard";
import PrimaryButton from "./Button";

export function Gallery({ onOpenLightbox, preview = false, bare = false }) {
  const [filter, setFilter] = useState("all");
  const [numCols, setNumCols] = useState(3);

  const gridRef = useRef(null);

  useEffect(() => {
    function updateCols() {
      if (window.innerWidth >= 1024) setNumCols(3);
      else if (window.innerWidth >= 640) setNumCols(2);
      else setNumCols(1);
    }
    updateCols();
    window.addEventListener("resize", updateCols);
    return () => window.removeEventListener("resize", updateCols);
  }, []);

  useEffect(() => {
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 767px)").matches;
    const tiles = gridRef.current
      ? gridRef.current.querySelectorAll(".g-tile")
      : [];
    if (!tiles.length) return;
    if (rm || mobile) {
      gsap.set(tiles, { clearProps: "all" });
      return;
    }
    gsap.set(tiles, {
      opacity: 0,
      scale: 0.94,
      clipPath: "inset(12% 12% 12% 12%)",
    });
    const st = ScrollTrigger.batch(tiles, {
      start: "top 90%",
      once: true,
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          scale: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.08,
          overwrite: true,
        }),
    });
    ScrollTrigger.refresh();
    return () => st.forEach((t) => t.kill());
  }, [filter, numCols]);

  const items = artworks.filter((a) => filter === "all" || a.cat === filter);

  function distribute(list, cols) {
    const buckets = Array.from({ length: cols }, () => []);
    list.forEach((item, i) => buckets[i % cols].push(item));
    return buckets;
  }

  const renderGrid = (list) => {
    const columns = distribute(list, numCols);

    return (
      <div
        className="
        mx-auto
        flex
        max-w-[1200px]
        gap-5
        px-5
        sm:gap-[50px]
        sm:px-0
      "
      >
        {columns.map((col, columnIndex) => (
          <div
            key={columnIndex}
            className="
            flex
            min-w-0
            flex-1
            flex-col
            gap-5
            sm:gap-6
          "
          >
            {col.map((artwork, artworkIndex) => (
              <GalleryCard
                key={artwork.id}
                artwork={artwork}
                index={artworkIndex}
                onOpen={(artworkId) => onOpenLightbox?.(artworkId)}
              />
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="portfolio" className="py-10 md:py-32 aurora">
      <div className="w-full" ref={gridRef}>
        {!bare && (
          <>
            <div className="text-center">
              <MiniHead text=" the Gallery" />
              <Heading text="A Glimpse Into My World" />
              <p
                className="
              my-5 
              text-sm leading-relaxed
              text-inksoft
              sm:text-[1.2rem]
              sm:leading-[1.6]
              text-center
            "
              >
                Every piece tells a story. Click any piece to view it full size.
              </p>
            </div>
          </>
        )}

        <div
          className="flex flex-wrap justify-center gap-1.5 sm:gap-2.5 mb-8 sm:mb-12"
          role="tablist"
        >
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`font-caps text-[.58rem] sm:text-[.68rem] tracking-[.14em] sm:tracking-[.2em] uppercase px-3 py-2 sm:px-5 sm:py-2.5 border rounded-full transition-all ${
                filter === f.key
                  ? "text-[var(--paper)] border-[var(--burgundy)] bg-[var(--burgundy)] shadow-[0_6px_16px_rgba(var(--color-burgundy),.35)]"
                  : "bg-[var(--paper-deep)] border-[var(--gold-soft)] text-[var(--ink-soft)] hover:text-[var(--burgundy)] hover:border-[var(--gold)]"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {renderGrid(items)}

        {preview && (
          <div className="text-center mt-10">
            <PrimaryButton to="/portfolio">See Full Portfolio ✦</PrimaryButton>
          </div>
        )}
      </div>
    </section>
  );
}


gsap.registerPlugin(ScrollTrigger);

/* =========================================
   INITIAL RESPONSIVE COLUMN COUNT
   ========================================= */

function getInitialColumnCount() {
  if (typeof window === "undefined") {
    return 1;
  }

  if (window.matchMedia("(min-width: 1024px)").matches) {
    return 3;
  }

  if (window.matchMedia("(min-width: 640px)").matches) {
    return 2;
  }

  return 1;
}

/* =========================================
   INITIAL MOBILE CHECK
   ========================================= */

function getInitialMobileState() {
  if (typeof window === "undefined") {
    return false;
  }

  return window.matchMedia("(max-width: 767px)").matches;
}


export function HomeGallery({
  onOpenLightbox,
  preview = false,
  bare = false,
  previewLimit = 9,
}) {
  const [filter, setFilter] = useState("all");

  const [numCols, setNumCols] = useState(getInitialColumnCount);

  const [isMobile, setIsMobile] = useState(getInitialMobileState);

  /*
   * Desktop/tablet ko loader ki zarurat nahi.
   *
   * Mobile initial state false hogi.
   */
  const [mobileGalleryReady, setMobileGalleryReady] = useState(() => {
    return !getInitialMobileState();
  });

  const gridRef = useRef(null);

  /* =========================================
     FILTERED ITEMS
     ========================================= */

  const items = useMemo(() => {
    const filtered =
      filter === "all"
        ? Homeartworks
        : Homeartworks.filter((artwork) => artwork.cat === filter);

    /*
     * Homepage preview mein limited items.
     *
     * Full portfolio:
     * preview = false
     */
    if (preview) {
      return filtered.slice(0, previewLimit);
    }

    return filtered;
  }, [filter, preview, previewLimit]);

  /* =========================================
     COLUMN DISTRIBUTION
     ========================================= */

  const columns = useMemo(() => {
    const buckets = Array.from(
      {
        length: numCols,
      },
      () => [],
    );

    for (let index = 0; index < items.length; index++) {
      buckets[index % numCols].push(items[index]);
    }

    return buckets;
  }, [items, numCols]);

  /* =========================================
     RESPONSIVE BREAKPOINTS

     Mobile  < 640  = 1
     Tablet  >=640  = 2
     Desktop >=1024 = 3
     ========================================= */

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 767px)");

    const tabletQuery = window.matchMedia("(min-width: 640px)");

    const desktopQuery = window.matchMedia("(min-width: 1024px)");

    const updateResponsiveState = () => {
      /*
       * MOBILE STATE
       */
      setIsMobile(mobileQuery.matches);

      /*
       * COLUMN COUNT
       */
      const nextCols = desktopQuery.matches ? 3 : tabletQuery.matches ? 2 : 1;

      setNumCols((current) => {
        if (current === nextCols) {
          return current;
        }

        return nextCols;
      });

      /*
       * Desktop/tablet par loader
       * force hide.
       */
      if (!mobileQuery.matches) {
        setMobileGalleryReady(true);
      }
    };

    updateResponsiveState();

    mobileQuery.addEventListener("change", updateResponsiveState);

    tabletQuery.addEventListener("change", updateResponsiveState);

    desktopQuery.addEventListener("change", updateResponsiveState);

    return () => {
      mobileQuery.removeEventListener("change", updateResponsiveState);

      tabletQuery.removeEventListener("change", updateResponsiveState);

      desktopQuery.removeEventListener("change", updateResponsiveState);
    };
  }, []);

  /* =========================================
     MOBILE-ONLY INITIAL IMAGE LOADER

     GalleryCard change karne ki zarurat nahi.

     Hum gallery ke first 2 <img> elements
     directly observe kar rahe hain.

     First 2 images load/error =>
     loader disappear.
     ========================================= */

  useEffect(() => {
    /*
     * Desktop/tablet:
     * kuch mat karo.
     */
    if (!isMobile) {
      setMobileGalleryReady(true);
      return;
    }

    const root = gridRef.current;

    if (!root) {
      return;
    }

    /*
     * Mobile par new category/gallery
     * ke liye loader show.
     */
    setMobileGalleryReady(false);

    /*
     * Gallery mein images find karo.
     */
    const allImages = Array.from(root.querySelectorAll("img"));

    /*
     * Sirf first 2 images ka wait.
     *
     * Poori gallery ka wait nahi karna.
     */
    const imagesToWaitFor = allImages.slice(0, Math.min(2, allImages.length));

    /*
     * No images?
     * Loader immediately remove.
     */
    if (imagesToWaitFor.length === 0) {
      setMobileGalleryReady(true);
      return;
    }

    let completed = 0;

    const handledImages = new Set();

    const cleanups = [];

    const markImageComplete = (image) => {
      /*
       * Same image ko twice
       * count nahi karna.
       */
      if (handledImages.has(image)) {
        return;
      }

      handledImages.add(image);

      completed += 1;

      /*
       * First 2 ready.
       */
      if (completed >= imagesToWaitFor.length) {
        setMobileGalleryReady(true);
      }
    };

    imagesToWaitFor.forEach((image) => {
      /*
       * Already browser cache mein
       * loaded image.
       */
      if (image.complete) {
        markImageComplete(image);

        return;
      }

      const handleLoad = () => {
        markImageComplete(image);
      };

      const handleError = () => {
        /*
         * Broken image ki wajah se
         * loader forever stuck nahi hoga.
         */
        markImageComplete(image);
      };

      image.addEventListener("load", handleLoad, {
        once: true,
      });

      image.addEventListener("error", handleError, {
        once: true,
      });

      cleanups.push(() => {
        image.removeEventListener("load", handleLoad);

        image.removeEventListener("error", handleError);
      });

      /*
       * Race condition protection:
       * listener add hote hote image
       * load ho gayi ho.
       */
      if (image.complete) {
        markImageComplete(image);
      }
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, [isMobile, filter, numCols, items.length]);

  /* =========================================
     DESKTOP / TABLET GALLERY ANIMATION

     Mobile:
     no IntersectionObserver animation
     no scroll animation

     Desktop/tablet:
     one IntersectionObserver
     ========================================= */

  useEffect(() => {
    const root = gridRef.current;

    if (!root) {
      return;
    }

    const selector = gsap.utils.selector(root);

    const mm = gsap.matchMedia();

    /* -----------------------------------------
       DESKTOP / TABLET
       ----------------------------------------- */

    mm.add(
      `
        (min-width: 768px)
        and
        (prefers-reduced-motion: no-preference)
      `,
      () => {
        const tiles = selector(".g-tile");

        if (!tiles.length) {
          return;
        }

        /*
         * Lightweight initial state.
         *
         * No clipPath.
         * No blur.
         */
        gsap.set(tiles, {
          autoAlpha: 0,
          y: 16,
          scale: 0.99,
        });

        const observer = new IntersectionObserver(
          (entries) => {
            const entered = [];

            entries.forEach((entry) => {
              if (!entry.isIntersecting) {
                return;
              }

              entered.push(entry.target);

              observer.unobserve(entry.target);
            });

            if (!entered.length) {
              return;
            }

            gsap.to(entered, {
              autoAlpha: 1,
              y: 0,
              scale: 1,

              duration: 0.5,

              stagger: 0.04,

              ease: "power2.out",

              overwrite: "auto",

              onComplete: () => {
                gsap.set(entered, {
                  clearProps: "transform,opacity,visibility",
                });
              },
            });
          },
          {
            threshold: 0.05,

            rootMargin: "100px 0px 100px 0px",
          },
        );

        tiles.forEach((tile) => {
          observer.observe(tile);
        });

        return () => {
          observer.disconnect();
        };
      },
    );

    /* -----------------------------------------
       MOBILE / REDUCED MOTION
       ----------------------------------------- */

    mm.add(
      {
        mobile: "(max-width: 767px)",

        reduced: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const { mobile, reduced } = context.conditions;

        if (!mobile && !reduced) {
          return;
        }

        const tiles = selector(".g-tile");

        /*
         * Koi desktop GSAP inline
         * style mobile par leftover
         * na rahe.
         */
        gsap.set(tiles, {
          clearProps: "opacity,visibility,transform,clipPath",
        });
      },
    );

    return () => {
      mm.revert();
    };
  }, [filter, numCols, items.length]);

  /* =========================================
     FILTER CHANGE
     ========================================= */

  const handleFilterChange = (nextFilter) => {
    if (nextFilter === filter) {
      return;
    }

    /*
     * Mobile par click karte hi
     * loader immediately show.
     */
    if (isMobile) {
      setMobileGalleryReady(false);
    }

    setFilter(nextFilter);
  };

  /* =========================================
     RENDER
     ========================================= */

  return (
    <section
      id="portfolio"
      className="
        py-10
        md:py-32
        aurora
      "
    >
      <div className="w-full ">
        {/* =================================
            HEADING
            ================================= */}

        {!bare && (
          <div className="text-center px-5">
            <MiniHead text="the Gallery" />

            <Heading text="A Glimpse Into My World" />

            <p
              className="
                my-5

                text-sm
                leading-relaxed

                text-inksoft

                sm:text-[1.2rem]
                sm:leading-[1.6]

                text-center
              "
            >
              Every piece tells a story. Click any piece to view it full size.
            </p>
          </div>
        )}

        {/* =================================
            FILTERS
            ================================= */}

        <div
          className="
            flex
            flex-wrap
            justify-center

            gap-1.5
            sm:gap-2.5
            px-5
            mb-8
            sm:mb-12
          "
          role="tablist"
          aria-label="Artwork categories"
        >
          {filters.map((f) => {
            const active = filter === f.key;

            return (
              <button
                key={f.key}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => handleFilterChange(f.key)}
                className={`
                  font-caps

                  text-[.58rem]
                  sm:text-[.68rem]

                  tracking-[.14em]
                  sm:tracking-[.2em]

                  uppercase

                  px-3
                  py-2

                  sm:px-5
                  sm:py-2.5

                  border

                  rounded-full

                  transition-[color,background-color,border-color,box-shadow]

                  duration-300

                  ${
                    active
                      ? `
                        text-[var(--paper)]

                        border-[var(--burgundy)]

                        bg-[var(--burgundy)]

                        shadow-[0_6px_16px_rgba(var(--color-burgundy),.25)]
                      `
                      : `
                        bg-[var(--paper-deep)]

                        border-[var(--gold-soft)]

                        text-[var(--ink-soft)]

                        hover:text-[var(--burgundy)]

                        hover:border-[var(--gold)]
                      `
                  }
                `}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* =================================
            GALLERY WRAPPER

            Important:
            Real gallery hidden hone ke bawajood
            document flow mein rehti hai.

            Isliye footer upar nahi aata.
            ================================= */}

        <div
          className="
            relative

            max-w-[1200px]

            mx-auto
          "
        >
          {/* ===============================
              MOBILE ONLY LOADER
              =============================== */}

          {isMobile && !mobileGalleryReady && (
            <div
              aria-label="Loading gallery"
              aria-live="polite"
              className="
                  absolute

                  inset-x-0
                  top-0

                  z-30

                  px-3

                  md:hidden

                  space-y-3
                "
            >
              {/* Skeleton 1 */}

              <div
                className="
                    relative

                    aspect-[4/5]

                    w-full

                    overflow-hidden

                    rounded-sm

                    bg-[var(--paper2)]

                    animate-pulse
                  "
              >
                <div
                  className="
                      absolute

                      inset-0

                      bg-gradient-to-br

                      from-transparent

                      via-white/20

                      to-transparent
                    "
                />
              </div>

              {/* Skeleton 2 */}

              <div
                className="
                    relative

                    aspect-[4/5]

                    w-full

                    overflow-hidden

                    rounded-sm

                    bg-[var(--paper2)]

                    animate-pulse
                  "
              >
                <div
                  className="
                      absolute

                      inset-0

                      bg-gradient-to-br

                      from-transparent

                      via-white/20

                      to-transparent
                    "
                />
              </div>

              {/* Small loading text */}

              <div
                className="
                    flex
                    items-center
                    justify-center

                    gap-2

                    py-3

                    text-xs

                    font-caps

                    uppercase

                    tracking-[0.18em]

                    text-[var(--ink-soft)]
                  "
              >
                <span
                  className="
                      inline-block

                      h-3
                      w-3

                      rounded-full

                      border-2

                      border-[var(--gold-soft)]

                      border-t-[var(--burgundy)]

                      animate-spin
                    "
                />
                Loading gallery
              </div>
            </div>
          )}

          {/* ===============================
              REAL MASONRY GALLERY

              Mobile:
              loader tak invisible BUT
              still occupies height.

              Tablet/Desktop:
              always visible.
              =============================== */}

          <div
            ref={gridRef}
            className={`
              flex

              items-start

              gap-3
              sm:gap-5
              lg:gap-7

              px-3
              sm:px-5

              transition-opacity

              duration-300

              md:opacity-100
              md:pointer-events-auto

              ${
                isMobile && !mobileGalleryReady
                  ? `
                    opacity-0
                    pointer-events-none
                  `
                  : `
                    opacity-100
                    pointer-events-auto
                  `
              }
            `}
          >
            {columns.map((column, columnIndex) => (
              <div
                key={columnIndex}
                className="
                    flex

                    flex-1

                    min-w-0

                    flex-col

                    gap-3
                    sm:gap-5
                    lg:gap-7
                  "
              >
                {column.map((artwork, artworkIndex) => {
                  /*
                   * Global original index.
                   *
                   * Mobile numCols = 1
                   * => 0,1,2,3...
                   *
                   * Desktop numCols = 3
                   * => proper global order.
                   */
                  const globalIndex = artworkIndex * numCols + columnIndex;

                  return (
                    <GalleryCard
                      key={artwork.id}
                      artwork={artwork}
                      index={globalIndex}
                      onOpen={onOpenLightbox}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* =================================
            PREVIEW BUTTON
            ================================= */}

        {preview && (
          <div
            className="
              text-center
              mt-10
            "
          >
            <PrimaryButton to="/portfolio">See Full Portfolio ✦</PrimaryButton>
          </div>
        )}
      </div>
    </section>
  );
}


export function Process() {
  return (
    <section
      id="process"
      className="py-20 md:py-32"
      style={{
        background: `radial-gradient(ellipse 60% 55% at 85% 20%, rgba(var(--color-brand) / .09), transparent 62%),
        radial-gradient(ellipse 50% 50% at 10% 90%, rgba(var(--color-rose) / .45), transparent 60%), var(--paper2)`,
      }}
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <SectionHead
          eyebrow="The Process"
          title="From Idea to"
          shimmerWord="Artwork"
        />
        <div className="relative mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          <span className="hidden lg:block absolute top-[30px] left-[6%] right-[6%] h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          {processSteps.map((s) => (
            <div key={s.num} className="reveal group text-center px-1.5">
              <div className="w-[60px] h-[60px] mx-auto mb-5 border border-gold rounded-full flex items-center justify-center font-serif italic text-xl text-burgundy bg-paper2 relative z-[1] shadow-[0_0_0_6px_var(--paper2),0_10px_22px_rgba(var(--color-gold),.25)] transition-all duration-[400ms] group-hover:bg-[var(--burgundy)] group-hover:text-[var(--gold-light)] group-hover:scale-110">
                {s.num}
              </div>
              <h3 className="font-serif font-medium text-burgundy text-2xl mb-2">
                {s.title}
              </h3>
              <p className="text-[.87rem] text-inksoft">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Terms({ bare = false }) {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section id="terms" className="py-20 md:py-32 bg-paper">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        {!bare && (
          <SectionHead
            eyebrow="Please Read"
            title="Terms of"
            shimmerWord="Service"
          />
        )}
        <div className="reveal relative bg-[var(--paper)] max-w-[860px] mx-auto mt-12 p-8 md:p-14 border border-gold/30 shadow-[0_26px_60px_rgba(var(--color-burgundy),.14)]">
          <span
            className="absolute -top-3.5 right-14 w-8 h-[78px] bg-gradient-to-b from-brand to-[var(--brand)]"
            style={{ clipPath: "polygon(0 0,100% 0,100% 100%,50% 82%,0 100%)" }}
          />
          {terms.map((t, i) => (
            <div
              key={t.title}
              className={
                i < terms.length - 1 ? "border-b border-burgundy/15" : ""
              }
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
                className="w-full flex justify-between items-center py-4 font-serif text-2xl text-burgundy hover:text-brand transition-colors text-left"
              >
                {t.title}
                <FiPlus
                  className={`text-gold text-xl flex-none transition-transform duration-300 ${openIdx === i ? "rotate-45" : ""}`}
                />
              </button>
              {openIdx === i && (
                <ul className="grid gap-2 pb-5 text-[.93rem] text-inksoft">
                  {t.items.map((it) => (
                    <li key={it} className="pl-6 relative">
                      <span className="absolute left-0 text-gold">❧</span>
                      {it}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <span className="absolute left-1/2 -translate-x-1/2 bottom-3 text-gold text-xl">
            ❦
          </span>
        </div>
      </div>
    </section>
  );
}
