import { useState } from "react";
import MiniHead from "./MiniHead";
import Heading from "./Heading";
import PrimaryButton from "./Button";
import MobileReviewCarousel from "./MobileReviewCarousel";
// public_id is used to build the real Cloudinary poster thumbnail (.jpg)
const videos = [
  {
    id: 1,
    name: "Daisey",
    handle: "@daisey.art",
    publicId: "daisey_1_cyxxk6",
    quote:
      "Every commission felt handled with real care the detail blew me away.",
  },
  {
    id: 2,
    name: "Daisey",
    handle: "@daisey.art",
    publicId: "daisey_2_vaoony",
    quote:
      "Communication was seamless from sketch to final frame. Ten out of ten.",
  },
  {
    id: 3,
    name: "Daisey",
    handle: "@daisey.art",
    publicId: "daisey_3_frzmkh",
    quote: "The piece exceeded everything I pictured. I'll be back for more.",
  },
];

const CLOUD = "dakhcmvv7";
const poster = (id) =>
  `https://res.cloudinary.com/${CLOUD}/video/upload/so_0,c_fill,g_auto,q_auto,f_auto/${id}.jpg`;
const player = (id) =>
  `https://player.cloudinary.com/embed/?cloud_name=${CLOUD}&public_id=${id}&autoplay=true`;

function Stars() {
  return (
    <div className="flex gap-1" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="w-4 h-4"
          style={{ color: "var(--gold-bright)" }}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2l2.9 6.26L21.6 9.2l-4.8 4.68L18 20.8 12 17.5 6 20.8l1.2-6.92L2.4 9.2l6.7-.94z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ video }) {
  const [playing, setPlaying] = useState(false);

  return (
    <article className="art-card glass-card rounded-2xl overflow-hidden flex flex-col">
      <div className="relative aspect-[4/5] bg-black/70">
        {playing ? (
          <iframe
            src={player(video.publicId)}
            title={`${video.name} review`}
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowFullScreen
            loading="lazy"
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 w-full h-full cursor-pointer"
            aria-label={`Play ${video.name}'s review`}
          >
            {/* real video frame, contained so nothing is cropped */}
            <img
              src={poster(video.publicId)}
              alt=""
              loading="lazy"
              className="absolute inset-0 w-full h-full object-contain"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            {/* violet wash over the poster for brand consistency + readable button */}
            <span
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(21,8,48,.25) 0%, rgba(21,8,48,.55) 100%)",
              }}
            />
            <span className="absolute inset-0 grid place-items-center">
              <span
                className="grid place-items-center h-10 w-10 md:w-16 md:h-16 rounded-full transition-transform duration-300 group-hover:scale-110"
                style={{
                  background:
                    "linear-gradient(120deg,var(--burgundy),var(--burgundy2))",
                  boxShadow: "var(--glow-violet)",
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="md:w-6 md:h-6 h-4 w-4 "
                  fill="var(--paper)"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
            <span
              className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs tracking-[.2em] uppercase"
              style={{ color: "var(--cream)" }}
            >
              <span>Watch review</span>
              <span aria-hidden="true">▶</span>
            </span>
          </button>
        )}
      </div>

      <div className="p-3 md:p-6 flex flex-col gap-4">
        <Stars />
        <p
          className="font-light leading-relaxed text-xs md:text-lg"
          style={{ color: "var(--ink)" }}
        >
          “{video.quote}”
        </p>
        <div
          className="flex items-center gap-3 pt-2 mt-auto border-t"
          style={{ borderColor: "oklch(82.8% 0.088 82 / 0.25)" }}
        >
          <div
            className="flex items-center gap-3 pt-0 md:pt-2 mt-auto border-t"
            style={{ borderColor: "oklch(82.8% 0.088 82 / 0.25)" }}
          >
            <img
              src="/images/profile.jpg"
              alt={video.name}
              className="h-8 w-8 md:w-10 md:h-10 rounded-full object-cover"
            />

            <div className="leading-tight">
              <p
                className="text-sm font-medium"
                style={{ color: "var(--ink)" }}
              >
                {video.name}
              </p>

              <p className="text-xs" style={{ color: "var(--ink-soft)" }}>
                {video.handle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ClientReviews() {
  return (
    <section className="aurora relative overflow-hidden py-10 sm:py-28 px-5 sm:px-8">
      <div
        className="pointer-events-none absolute -top-24 -left-16 w-80 h-80 rounded-full opacity-40 float-slow"
        style={{ background: "var(--burgundy)", filter: "blur(90px)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -right-10 w-96 h-96 rounded-full opacity-30 float-slow"
        style={{
          background: "var(--rose)",
          filter: "blur(100px)",
          animationDelay: "1.5s",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto">
        <div className="reveal text-center mx-auto max-w-2xl  ">
          <MiniHead text=" Client Words" />

          <Heading
            text="Heard it straight from the"
            highlight="people I painted for"
          />

          <p
            className="
              mt-5 mb-10 max-w-[56ch]
              text-sm leading-relaxed
              text-inksoft
              sm:text-[1.2rem]
              sm:leading-[1.6]
              text-center
            "
          >
            Real reactions, filmed the moment each commission landed. Tap any
            card to play.
          </p>
        </div>

<MobileReviewCarousel>
  {videos.map((v) => (
    <ReviewCard key={v.id} video={v} />
  ))}
</MobileReviewCarousel>


{/* TABLET / DESKTOP - SAME ORIGINAL DESIGN */}
<div className="hidden md:grid gap-8 md:grid-cols-2 lg:grid-cols-3">
  {videos.map((v) => (
    <ReviewCard key={v.id} video={v} />
  ))}
</div>
        <div className="text-center mt-12 reveal">
          <PrimaryButton to="/contact">Commission</PrimaryButton>
        </div>
      </div>
    </section>
  );
}
