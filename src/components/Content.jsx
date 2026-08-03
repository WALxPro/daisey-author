import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { artworks, filters, processSteps, terms, tiers } from "../data";
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
    const tiles = gridRef.current ? gridRef.current.querySelectorAll(".g-tile") : [];
    if (!tiles.length) return;
    if (rm) {
      gsap.set(tiles, { clearProps: "all" });
      return;
    }
    gsap.set(tiles, { opacity: 0, scale: 0.94, clipPath: "inset(12% 12% 12% 12%)" });
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
    <section
      id="portfolio"
      className="py-20 md:py-32 aurora"
     
    >
      <div className="w-full" ref={gridRef}>
        {!bare && (
         <>
          <div className="text-center">
            <MiniHead text=" the Gallery" />
            <Heading
              text="A Glimpse Into My World"
            />
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

        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2.5 mb-8 sm:mb-12" role="tablist">
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

// export function Commissions({ bare = false }) {

//   const [flipped, setFlipped] = useState(-1);
//   return (
//     <section
//       id="commissions"
//       className="py-20 md:py-32"
//       style={{
//         background: `radial-gradient(ellipse 70% 60% at 50% 0%, rgba(var(--color-rose) / .5), transparent 70%),
//         radial-gradient(ellipse 55% 50% at 8% 100%, rgba(var(--color-rose-soft) / .42), transparent 62%),
//         radial-gradient(ellipse 50% 45% at 96% 70%, rgba(var(--color-brand) / .1), transparent 60%), var(--paper)`,
//       }}
//     >
//       <div className="max-w-[1200px] mx-auto px-5 md:px-10">
//         {!bare && (
//           <SectionHead
//             eyebrow="Commissions Open"
//             title="Commission Your Own"
//             shimmerWord="Artwork"
//           >
//             Bring your character, your couple, or your novel to life. Every
//             piece is hand-drawn and fully custom.
//           </SectionHead>
//         )}

//         {/* flip cards: 3 per row, last 2 auto-centered */}
//         <div className="flex flex-wrap justify-center gap-6 mt-12 [perspective:1400px]">
//           {tiers.map((t, i) => {
//             const isFlipped = flipped === i;
//             return (
//               <div
//                 key={t.title}
//                 className="reveal basis-[290px] max-w-[320px] grow-0 h-[400px] cursor-pointer group"
//                 onClick={() => setFlipped(isFlipped ? -1 : i)}
//               >
//                 <div
//                   className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${isFlipped ? "[transform:rotateY(180deg)]" : "group-hover:[transform:rotateY(8deg)_translateY(-6px)]"}`}
//                 >
//                   {/* FRONT — price only */}
//                   <div
//                     className={`absolute inset-0 [backface-visibility:hidden] overflow-hidden ${t.featured ? "border-2 border-gold" : "border border-gold/45"} shadow-[0_18px_45px_rgba(var(--color-burgundy),.22)]`}
//                   >
//                     <img
//                       src={t.img}
//                       alt={t.title}
//                       loading="lazy"
//                       className="absolute inset-0 w-full h-full object-cover object-top"
//                     />
//                     <div
//                       className="absolute inset-0"
//                       style={{
//                         background:
//                           "linear-gradient(190deg,rgba(var(--color-wine),.15) 30%,rgba(var(--color-wine-dark),.88) 78%)",
//                       }}
//                     />
//                     {t.featured && (
//                       <span className="absolute top-4 -right-9 rotate-45 text-white font-caps text-[.55rem] tracking-[.22em] uppercase px-12 py-1.5 z-[3] shadow bg-gradient-to-r from-brand to-[var(--brand)]">
//                         Most Loved
//                       </span>
//                     )}
//                     <div className="absolute inset-x-0 bottom-0 p-6 text-center">
//                       <h3 className="font-serif text-[var(--paper)] text-2xl">
//                         {t.title}
//                       </h3>
//                       <div className="font-serif italic text-goldlight text-4xl mt-1.5 [text-shadow:0_4px_16px_rgba(var(--color-gold-bright),.4)]">
//                         {t.price}
//                       </div>
//                       <span className="inline-block mt-4 font-caps text-[.56rem] tracking-[.26em] uppercase text-creamdim border border-goldbright/40 rounded-full px-4 py-1.5 group-hover:text-goldlight group-hover:border-goldlight transition-colors">
//                         Tap for details ✦
//                       </span>
//                     </div>
//                   </div>

//                   {/* BACK — full details */}
//                   <div
//                     className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] border border-gold flex flex-col p-4 text-cream"
//                     style={{
//                       background: `radial-gradient(ellipse 70% 50% at 75% 10%, rgba(var(--color-brand) / .3), transparent 60%), linear-gradient(160deg,var(--wine),var(--wine) 60%,var(--wine-deep))`,
//                     }}
//                   >
//                     <h3 className="font-serif text-xl text-[var(--paper)]">
//                       {t.title}
//                     </h3>
//                     <div className="font-serif italic text-goldbright text-lg ">
//                       {t.price}
//                     </div>
//                     <span className="block w-14 h-px bg-goldbright/50 my-4" />
//                     <ul className="grid gap-2 text-[.8rem] text-creamdim">
//                       {t.points.map((p) => (
//                         <li key={p}>
//                           <span className="text-goldbright mr-2">✦</span>
//                           {p}
//                         </li>
//                       ))}
//                       <li>
//                         <span className="text-goldbright mr-2">✦</span>
//                         High-resolution final files
//                       </li>
//                       <li>
//                         <span className="text-goldbright mr-2">✦</span>Sketch
//                         approval stage included
//                       </li>
//                     </ul>
//                     <Link
//                       to="/contact"
//                       onClick={(e) => e.stopPropagation()}
//                       className="mt-auto text-center font-caps text-[.64rem] tracking-[.2em] uppercase border border-goldbright text-goldlight py-3 transition-colors hover:bg-goldbright hover:text-winedark"
//                     >
//                       Commission This ✦
//                     </Link>
//                     <span className="text-center text-[.62rem] text-creamdim/70 mt-2 uppercase tracking-[.2em]">
//                       tap to flip back
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         <p className="reveal text-center mt-10 text-[.88rem] text-inksoft">
//           Prices may vary with character complexity, detailed outfits,
//           backgrounds, or lighting.{" "}
//           <b className="text-burgundy font-medium">
//             Commercial usage rights: +30% of the artwork price.
//           </b>
//         </p>
//       </div>
//     </section>
//   );
// }

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
