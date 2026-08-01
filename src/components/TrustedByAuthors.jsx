// Sample placeholder testimonials — replace with real client name, photo,
// quote and project once available. Structure stays the same either way.
const testimonials = [
  {
    name: "Elena Ross",
    role: "Indie Fantasy Author",
    quote:
      "The character art completely elevated my series. Every detail — down to the way Wolfborn's eyes carry his backstory — matched exactly what I'd imagined but could never fully describe.",
    project: "Character Art — Wolfborn Series",
    initials: "ER",
  },
  {
    name: "Marcus Feld",
    role: "Contemporary Romance Author",
    quote:
      "I've commissioned three covers so far and each one has visibly boosted my pre-order numbers. The mood, lighting, and composition are always spot on, and revisions are fast and painless.",
    project: "Book Cover — The Last Lamb of Swanston St.",
    initials: "MF",
  },
  {
    name: "Priya Shah",
    role: "Urban Fantasy Author",
    quote:
      "Clear communication from the first message to final delivery. My readers constantly comment on how alive the characters look — it's like they stepped straight out of the manuscript.",
    project: "Group Character Art — The Trio",
    initials: "PS",
  },
];

function StarRow() {
  return (
    <div className="flex gap-1 text-goldbright text-sm mb-3" aria-hidden="true">
      {"★★★★★".split("").map((s, i) => (
        <span key={i}>{s}</span>
      ))}
    </div>
  );
}

export function TrustedByAuthors() {
  return (
    <div className="max-w-[1240px] mx-auto px-5 md:px-8">
      <p className="font-caps text-[.6rem] tracking-[.3em] uppercase text-goldbright text-center mb-3 reveal">
        Client Feedback
      </p>
      <h3 className="font-serif text-2xl sm:text-3xl text-[#FBF2E6] text-center mb-10 sm:mb-14 reveal">
        Trusted by Authors Worldwide
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 reveal">
        {testimonials.map((t, i) => (
          <figure
            key={i}
            className="
              relative
              flex flex-col
              bg-white/5
              border border-goldbright/25
              rounded-lg
              p-6 sm:p-7
              shadow-[0_16px_38px_rgba(0,0,0,.28)]
            "
          >
            <StarRow />

            <blockquote className="text-[.92rem] leading-relaxed text-creamdim italic mb-6 flex-1">
              "{t.quote}"
            </blockquote>

            <figcaption className="flex items-center gap-3 pt-5 border-t border-goldbright/15">
              <div
                className="
                  w-11 h-11
                  rounded-full
                  flex items-center justify-center
                  font-caps text-[.7rem]
                  text-winedark
                  bg-gradient-to-br from-goldbright to-[#A87A2C]
                  flex-none
                "
                aria-hidden="true"
              >
                {t.initials}
              </div>
              <div className="min-w-0">
                <div className="text-[.9rem] font-medium text-[#FBF2E6] truncate">
                  {t.name}
                </div>
                <div className="text-[.72rem] text-goldlight truncate">
                  {t.role}
                </div>
              </div>
            </figcaption>

            <div className="mt-3 text-[.68rem] tracking-[.1em] uppercase text-creamdim/60">
              {t.project}
            </div>
          </figure>
        ))}
      </div>

      <div className="text-center mt-12 reveal">
        {compact && (
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 font-caps text-[.7rem] tracking-[.2em] uppercase text-white px-8 py-4 rounded-full transition-transform hover:scale-105 shadow-[0_12px_30px_rgba(0,0,0,.35)]"
            style={{
              background:
                "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)",
            }}
          >
            <FaInstagram className="text-base" /> Follow {IG_HANDLE}
          </a>
        )}
        <p className="text-[.72rem] text-creamdim mt-4 tracking-[.15em] uppercase">
          Trusted by authors around the world
        </p>
      </div>
    </div>
  );
}