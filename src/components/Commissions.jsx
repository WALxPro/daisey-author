const PACKAGES = [
  {
    title: "Book Cover Art",
    price: "$449 – $1,199",
    badge: null,
    items: [
      "Custom book cover illustration",
      "Artwork based on your story and characters",
      "Pricing varies by complexity",
      "Sketch approval stage included",
      "High-resolution final files",
    ],
  },
  {
    title: "Character Art",
    price: "$80 – $450",
    badge: "Most Loved",
    items: [
      "Bust-up: $80 – $120",
      "Half body: $130 – $180",
      "Full body: $190 – $260",
      "Couple illustration: $360 – $450",
    ],
  },
  {
    title: "Scene Illustration",
    price: "$270 – $500",
    badge: null,
    items: [
      "Full illustrated scene",
      "One or multiple characters",
      "Price varies by character count and complexity",
      "High-resolution final files",
    ],
  },
  {
    title: "Comic Illustration",
    price: "$150 – $400",
    badge: null,
    items: [
      "Black and white page: $150 – $250",
      "Coloured page: $250 – $400",
      "Custom quotes available for longer projects",
      "Sketch approval stage included",
    ],
  },
  {
    title: "Animation",
    price: "$400 – $1,000",
    badge: null,
    items: [
      "5-second animation: $400 – $600",
      "10-second animation: $650 – $1,000",
      "Pricing varies by movement and scene complexity",
      "High-resolution final files",
    ],
  },
  {
    title: "Social Media Content",
    price: "$60 – $2,500",
    badge: null,
    items: [
      "Single social media post: $60 – $120",
      "7-day campaign: $700 – $1,200",
      "Monthly handling: $1,300 – $2,500",
      "Posts, stories, reels and account handling",
    ],
  },
  {
    title: "Book Graphics",
    price: "$50 – $130",
    badge: null,
    items: [
      "Interior book graphics",
      "Decorative illustrations and visual elements",
      "Custom graphics based on the book style",
      "High-resolution final files",
    ],
  },
  {
    title: "Merch Design & Production",
    price: "Custom Quote",
    badge: null,
    items: [
      "Custom merchandise artwork",
      "Design preparation for production",
      "Pricing based on product type",
      "Pricing based on quantity",
    ],
  },
];

function Commissions() {
  return (
    <section
      id="commissions"
      className="plum-panel relative overflow-hidden px-5 py-20 sm:px-10 lg:px-16 lg:py-28"
    >
      <header className="mx-auto max-w-2xl text-center">
        <p className="font-sans text-[0.62rem] uppercase tracking-[0.3em] text-gold">
          Commissions Open
        </p>

        <h2 className="mt-6 font-display text-2xl uppercase leading-snug tracking-[0.12em] text-paper sm:text-[2rem]">
          Commission your own artwork
        </h2>

        <div
          aria-hidden="true"
          className="rule-gold mx-auto mt-6 h-px w-40"
        />

        <p className="mt-6 font-editorial text-lg leading-relaxed text-paper/70">
          Bring your character, your couple, or your novel to life. Every piece
          is hand-drawn and fully custom.
        </p>
      </header>

      <div className="mx-auto mt-14 grid max-w-[85rem] gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PACKAGES.map((pkg) => (
          <article
            key={pkg.title}
            className="glass-card font-serif group relative flex h-full flex-col rounded-xl px-7 py-8 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2"
          >
            {pkg.badge && (
              <span
                className="absolute -top-3 left-7 rounded-full px-3 py-1 font-sans text-[0.55rem] uppercase tracking-[0.2em] text-wine-deep"
                style={{
                  backgroundImage: "var(--gradient-gold)",
                }}
              >
                {pkg.badge}
              </span>
            )}

            <h3 className="font-display text-lg uppercase tracking-[0.14em] text-paper">
              {pkg.title}
            </h3>

            <p className="mt-3 font-editorial text-2xl text-gold">
              {pkg.price}
            </p>

            <div className="rule-gold mt-5 h-px w-full opacity-50" />

            <ul className="mt-6 flex-1 space-y-2.5">
              {pkg.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-2.5 font-editorial text-base leading-snug text-paper/75"
                >
                  <span aria-hidden="true" className="shrink-0 text-gold">
                    ✦
                  </span>

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <p className="mx-auto mt-12 max-w-2xl text-center font-editorial text-base leading-relaxed text-paper/60">
        Prices may vary with character complexity, detailed outfits,
        backgrounds, animation or lighting.
        <strong className="mt-2 block text-gold">
          Commercial usage rights: +30% of the artwork price.
        </strong>
      </p>
    </section>
  );
}

export default Commissions;