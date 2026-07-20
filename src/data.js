export const BRAND = 'Daisyy Sketches'
export const TAGLINE = 'Bringing Your Characters to Life, One Sketch at a Time'
export const INSTAGRAM = 'https://www.instagram.com/daisyy_sketches'
export const IG_HANDLE = '@daisyy_sketches'
export const EMAIL = 'hello@daisyysketches.art'

export const artworks = [
  { id: 'swanston', src: '/images/book-cover-swanston.jpg', title: 'The Last Lamb of Swanston St.', cat: 'cover', catLabel: 'Book Cover', span: 'wide tall', note: 'Custom Book Cover — Romance Fantasy, 2025' },
  { id: 'wolfborn', src: '/images/character-wolfborn.jpg', title: 'Wolfborn', cat: 'character', catLabel: 'Character', span: '', note: 'Character Portrait — Fantasy, 2025' },
  { id: 'guardian', src: '/images/character-dreadlock.jpg', title: 'The Guardian', cat: 'character', catLabel: 'Character', span: '', note: 'Character Portrait — Urban Fantasy, 2025' },
  { id: 'icerink', src: '/images/couple-icerink.jpg', title: 'Rink-side Kiss', cat: 'couple', catLabel: 'Couple', span: 'tall', note: 'Couple Illustration — Sports Romance, 2025' },
  { id: 'redcarpet', src: '/images/couple-redcarpet.jpg', title: 'Red Carpet Night', cat: 'couple', catLabel: 'Couple', span: '', note: 'Couple Illustration — Contemporary Romance, 2025' },
  { id: 'roseline', src: '/images/character-roseline.jpg', title: 'Roseline', cat: 'character', catLabel: 'Character', span: 'tall', note: 'Full-Body Character — Contemporary, 2025' },
  { id: 'waltz', src: '/images/couple-oliver-cindy.jpg', title: 'Spotlight Waltz', cat: 'couple', catLabel: 'Couple', span: '', note: 'Couple Illustration — Romance, 2025' },
  { id: 'trio', src: '/images/character-trio.jpg', title: 'The Trio', cat: 'character', catLabel: 'Character', span: 'wide', note: 'Group Character Art — Urban Fantasy, 2025' },
  { id: 'trio', src: '/images/couple-shane-maddie.jpg', title: 'The Trio', cat: 'character', catLabel: 'Character', span: 'wide', note: 'Group Character Art — Urban Fantasy, 2025' },
]

export const heroSlides = ['swanston', 'icerink', 'wolfborn', 'waltz', 'roseline']
  .map((id) => artworks.find((a) => a.id === id))

export const filters = [
  { key: 'all', label: 'All' },
  { key: 'character', label: 'Character Art' },
  { key: 'couple', label: 'Couple Illustrations' },
  { key: 'cover', label: 'Book Covers' },
]

export const tiers = [
  {
    title: "Book Cover Art",
    price: "$449 – $1,199",
    img: "/images/book-cover-swanston.jpg",
    points: [
      "Custom book cover illustration",
      "Artwork based on your story and characters",
      "Pricing varies by complexity",
    ],
  },
  {
    title: "Character Art",
    price: "$80 – $450",
    img: "/images/character-dreadlock.jpg",
    points: [
      "Bust-up: $80 – $120",
      "Half body: $130 – $180",
      "Full body: $190 – $260",
      "Couple illustration: $360 – $450",
    ],
    featured: true,
  },
  {
    title: "Scene Illustration",
    price: "$270 – $500",
    img: "/images/character-roseline.jpg",
    points: [
      "Full illustrated scene",
      "One or multiple characters",
      "Price may increase with character count and complexity",
    ],
  },
  {
    title: "Comic Illustration",
    price: "$150 – $400",
    img: "/images/comic-illustration.jpg",
    points: [
      "Black and white page: $150 – $250",
      "Coloured page: $250 – $400",
      "Custom quotes available for longer projects",
    ],
  },
  {
    title: "Animation",
    price: "$400 – $1,000",
    img: "/images/animation-service.jpg",
    points: [
      "5-second animation: $400 – $600",
      "10-second animation: $650 – $1,000",
      "Pricing varies by movement and scene complexity",
    ],
  },
  {
    title: "Social Media Content",
    price: "$60 – $2,500",
    img: "/images/social-media-content.jpg",
    points: [
      "Single social media post: $60 – $120",
      "7-day campaign: $700 – $1,200",
      "Monthly social media handling: $1,300 – $2,500",
      "Posts, stories, reels, content and account handling",
    ],
  },
  {
    title: "Book Graphics",
    price: "$50 – $130",
    img: "/images/book-graphics.jpg",
    points: [
      "Interior book graphics",
      "Decorative illustrations and visual elements",
      "Custom graphics based on the book style",
    ],
  },
  {
    title: "Merch Design & Production",
    price: "Custom Quote",
    img: "/images/merch-design.jpg",
    points: [
      "Custom merchandise artwork",
      "Design preparation for production",
      "Pricing based on product type and quantity",
    ],
  },
];

export const services = [
  {
    title: 'Bust-Up Illustration', start: 'Starting at $50', img: '/images/character-dreadlock.jpg',
    summary: 'A close, expressive portrait focused on the face and shoulders.',
    description: 'Perfect for character profiles, avatars, and getting that one unforgettable expression exactly right. Every bust-up gets full attention on the eyes, hair, and personality of your character.',
    included: ['Fully rendered head & shoulders portrait', 'Simple color or soft-gradient background', 'High-resolution files for web & print'],
    revisions: '2 rounds of revisions included', references: 'Character description + face/hair references (photos, Picrews, or written details all welcome)', turnaround: '1–2 weeks',
  },
  {
    title: 'Half-Body Illustration', start: 'Starting at $90', img: '/images/character-wolfborn.jpg',
    summary: 'Waist-up, with more detail on outfit and pose.',
    description: 'Room for expressive hands, detailed costumes, and atmosphere. A favorite for character reveals and author newsletters.',
    included: ['Waist-up fully rendered illustration', 'Outfit & accessory detail', 'Atmospheric lighting', 'High-resolution files'],
    revisions: '2 rounds of revisions included', references: 'Character description + outfit references', turnaround: '2 weeks',
  },
  {
    title: 'Full-Body Illustration', start: 'Starting at $130', img: '/images/character-roseline.jpg',
    summary: 'The complete character — full outfit and pose detail, with an optional simple background.',
    description: 'Your character head to toe: stance, styling, story. Great for pin-ups, character sheets, and swag art.',
    included: ['Full-body fully rendered illustration', 'Complete costume design', 'Simple scenic background', 'High-resolution files'],
    revisions: '2 rounds of revisions included', references: 'Character description + outfit & pose references', turnaround: '2–3 weeks',
  },
  {
    title: 'Couple Illustration', start: 'Starting at $250', img: '/images/couple-icerink.jpg', featured: true,
    summary: 'Two characters together in a romance-focused composition — my most-loved service for romance authors.',
    description: 'The kiss, the almost-kiss, the dance, the quiet moment — I build the whole scene around the emotion between your two characters.',
    included: ['Two fully rendered characters', 'Romance-focused composition', 'Full scene, mood & lighting', 'High-resolution files'],
    revisions: '2 rounds of revisions included', references: 'Both character references + the moment/scene you want captured', turnaround: '2–3 weeks',
  },
  {
    title: 'Book Cover Design', start: 'Starting at $200', img: '/images/book-cover-swanston.jpg',
    summary: 'Full cover composition — character art plus title typography, formatted to print & ebook specs.',
    description: 'A complete, market-ready cover: custom illustration, title treatment that matches your genre, and files sized for KDP, IngramSpark, or your printer of choice.',
    included: ['Full custom cover illustration', 'Title & author-name typography treatment', 'Ebook + print-ready formats', 'High-resolution files'],
    revisions: '2 rounds of revisions included', references: 'Blurb or synopsis, character references, comp titles you love', turnaround: '3 weeks',
  },
  {
    title: 'Commercial Usage Add-On', start: '+30% of artwork price', img: '/images/couple-redcarpet.jpg',
    summary: 'Licensing for commercial use of any piece above.',
    description: 'Planning to use the art on merch, marketing, or anything beyond the cover itself? Commercial usage rights are available for an additional 30% fee based on the original artwork price.',
    included: ['Commercial license for the commissioned piece', 'Use on merchandise, ads & promotions'],
    revisions: '—', references: 'Just tell me how you plan to use the piece', turnaround: 'Instant — added to any commission',
  },
]

export const faqs = [
  { q: 'How long does a commission take?', a: 'Usually 2-3 weeks depending on complexity and current queue.' },
  { q: 'Do I need to pay upfront?', a: 'Full payment or partial upfront payment may be required before starting.' },
  { q: 'What if I need changes after the sketch is approved?', a: 'Major changes after sketch approval may require additional charges.' },
  { q: 'Can I use the art commercially?', a: 'Yes, with the +30% commercial usage add-on.' },
  { q: "What if I'm not sure what I want?", a: "I'm flexible and happy to discuss custom ideas over DM or email." },
]

// Sample reviews - replace with real client words as they come in!
export const testimonials = [
  { name: 'A. Rivers', handle: '@ariverswrites', cat: 'couple', img: '/images/couple-icerink.jpg', quote: 'She captured my hockey boys mid-kiss EXACTLY how I pictured them. My readers lost their minds. Worth every penny.' },
  { name: 'M. Hale', handle: '@mhale_author', cat: 'cover', img: '/images/book-cover-swanston.jpg', quote: 'My cover looks like it belongs on a bestseller shelf. Communication was easy and the sketch stage made me feel involved the whole way.' },
  { name: 'J. Okafor', handle: '@jokaforbooks', cat: 'character', img: '/images/character-dreadlock.jpg', quote: 'The Guardian came out better than the version in my head. Hand-drawn, soulful, and delivered right on schedule.' },
  { name: 'S. Bennett', handle: '@sbennettromance', cat: 'couple', img: '/images/couple-oliver-cindy.jpg', quote: 'A cowboy dipping a ballerina - weird brief, perfect execution. She just gets romance.' },
  { name: 'L. Tran', handle: '@ltranwrites', cat: 'character', img: '/images/character-roseline.jpg', quote: 'Every tattoo on my MC means something in the book, and she drew every single one accurately. That attention to detail is rare.' },
  { name: 'R. Castillo', handle: '@rcastillobooks', cat: 'cover', img: '/images/character-trio.jpg', quote: "Commissioned group art for my urban fantasy trilogy. The lighting, the mood - chef's kiss. Already booked her for book two." },
]

export const testimonialFilters = [
  { key: 'all', label: 'All' },
  { key: 'cover', label: 'Book Cover Reviews' },
  { key: 'character', label: 'Character Art Reviews' },
  { key: 'couple', label: 'Couple Art Reviews' },
]

export const processSteps = [
  { num: '01', title: 'Reference & Brief', text: 'You provide a clear visual reference and complete commission details before we begin.' },
  { num: '02', title: 'Sketch', text: 'I draft the initial concept and composition for your character or scene.' },
  { num: '03', title: 'Client Approval', text: 'You review the sketch and share notes - we lock it in together.' },
  { num: '04', title: 'Coloring & Shading', text: 'Detailed rendering, lighting, and finishing touches bring the piece to life.' },
  { num: '05', title: 'Final Delivery', text: 'High-resolution final files delivered - usually within 2-3 weeks.' },
]

export const funFacts = [
  { label: 'Favorite genre to illustrate', value: 'Romance fantasy - give me longing stares and glowing magic.' },
  { label: 'Dream commission', value: 'A full illustrated edition of an enemies-to-lovers duology.' },
  { label: 'Go-to art tools', value: 'A well-worn drawing tablet, too many custom brushes, and lo-fi playlists.' },
  { label: 'Fun detail', value: 'I name every unnamed background character. They all have lore now.' },
]

export const terms = [
  {
    title: 'About the Work',
    items: [
      'All artworks are fully hand drawn. No AI generated elements are used in any part of the work.',
      'Services offered: SFW and Semi-NSFW illustrations, including character art, couples, fantasy art, romance fantasy, book covers, and book-related commissions.',
      'Commercial usage rights are available for an additional 30% fee based on the original artwork price.',
      'Prices may vary depending on character complexity, detailed outfits, backgrounds, lighting, or additional elements.',
      'A clear visual reference and complete commission details must be provided before starting the artwork.',
      'Major changes after the sketch approval stage may require additional charges.',
    ],
  },
  {
    title: 'Process & Policies',
    items: [
      'Estimated delivery time depends on the complexity of the commission and current queue/workload (usually 2-3 weeks).',
      'Commissioned artwork may be shared on portfolio or social media unless discussed beforehand.',
      'Full payment or partial upfront payment may be required before starting the commission.',
      'Refunds are not available once the artwork process has started.',
      'The right to decline any commission request that is uncomfortable or exceeds current capabilities is reserved.',
      'Always flexible and open to discussing custom ideas, deadlines, pricing, and project details through DMs or email.',
    ],
  },
]

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/services', label: 'Services' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/about', label: 'About Me' },
  { to: '/contact', label: 'Contact' },
]

// "Tagged by authors" strip - sample handles, swap in real tags from Instagram
export const taggedBy = [
  { handle: '@ariverswrites', quote: 'cover reveal day!! look at this ART', img: '/images/couple-icerink.jpg' },
  { handle: '@mhale_author', quote: 'still not over my cover', img: '/images/book-cover-swanston.jpg' },
  { handle: '@jokaforbooks', quote: 'meet my MC, drawn by the best', img: '/images/character-dreadlock.jpg' },
  { handle: '@sbennettromance', quote: 'she drew THE scene', img: '/images/couple-oliver-cindy.jpg' },
  { handle: '@ltranwrites', quote: 'every tattoo is canon-accurate', img: '/images/character-roseline.jpg' },
  { handle: '@rcastillobooks', quote: 'trilogy art part one!!', img: '/images/character-trio.jpg' },
]
