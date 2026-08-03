import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function GalleryCard({
  artwork,
  index = 0,
  onOpen,
  registerRef,
}) {
  const [loaded, setLoaded] = useState(false);
  const [aspectRatio, setAspectRatio] = useState("4 / 5");

  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const captionRef = useRef(null);
  const skeletonRef = useRef(null);
  const hoverTimelineRef = useRef(null);

  const captionId = `artwork-caption-${artwork.id}`;

  /*
   * Local card ref aur optional parent ref
   * dono ko same figure element deta hai.
   */
  const setCardRef = useCallback(
    (element) => {
      cardRef.current = element;

      registerRef?.(artwork.id, element);
    },
    [artwork.id, registerRef],
  );

  /*
   * Artwork image change hone par loading reset.
   * Cached image ke natural dimensions bhi read karta hai.
   */
  useEffect(() => {
    setLoaded(false);

    const image = imageRef.current;

    if (
      image?.complete &&
      image.naturalWidth > 0 &&
      image.naturalHeight > 0
    ) {
      setAspectRatio(
        `${image.naturalWidth} / ${image.naturalHeight}`,
      );

      setLoaded(true);
    }
  }, [artwork.src]);

  /*
   * Hover, focus, card lift, image zoom
   * aur overlay caption animation.
   */
  useGSAP(
    () => {
      const card = cardRef.current;
      const image = imageRef.current;
      const caption = captionRef.current;

      if (!card || !image || !caption) return;

      const captionItems = caption.querySelectorAll(
        "[data-caption-item]",
      );

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      /*
       * Initial card state.
       */
      gsap.set(card, {
        transformOrigin: "center center",
      });

      /*
       * Initial hidden overlay state.
       */
      gsap.set(caption, {
        autoAlpha: 0,
      });

      /*
       * Initial hidden caption text state.
       */
      gsap.set(captionItems, {
        autoAlpha: 0,
        y: 18,
      });

      /*
       * Initial image state.
       */
      gsap.set(image, {
        scale: 1,
        filter:
          "blur(0px) brightness(1) saturate(1)",
      });

      /*
       * Hover par timeline play hogi.
       * Mouse leave par reverse hogi.
       */
      const hoverTimeline = gsap.timeline({
        paused: true,

        defaults: {
          overwrite: "auto",
        },
      });

      hoverTimeline
        /*
         * Card lift aur strong hover shadow.
         */
        .to(
          card,
          {
            y: -18,
            scale: 1.025,

            boxShadow: `
              0 10px 20px rgba(31, 12, 64, 0.17),
              0 26px 52px rgba(31, 12, 64, 0.28),
              0 46px 88px rgba(21, 8, 48, 0.24),
              0 0 38px rgba(var(--color-burgundy), 0.3)
            `,

            duration: reduceMotion ? 0 : 0.62,
            ease: "power3.out",
          },
          0,
        )

        /*
         * Image zoom aur darkening.
         */
        .to(
          image,
          {
            scale: 1.045,

            filter:
              "blur(0px) brightness(1) saturate(1)",

            duration: reduceMotion ? 0 : 0.78,
            ease: "power3.out",
          },
          0,
        )

        /*
         * Full overlay fade-in.
         */
        .to(
          caption,
          {
            autoAlpha: 1,
            duration: reduceMotion ? 0 : 0.4,
            ease: "power2.out",
          },
          0.02,
        )

        /*
         * Caption text stagger.
         */
        .to(
          captionItems,
          {
            autoAlpha: 1,
            y: 0,

            duration: reduceMotion ? 0 : 0.46,
            stagger: reduceMotion ? 0 : 0.07,
            ease: "power3.out",
          },
          0.1,
        );

      hoverTimelineRef.current = hoverTimeline;

      return () => {
        hoverTimeline.kill();
        hoverTimelineRef.current = null;
      };
    },
    {
      scope: cardRef,
      dependencies: [artwork.id],
      revertOnUpdate: true,
    },
  );

  /*
   * Skeleton shimmer aur image load reveal.
   */
  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      /*
       * Image load hone se pehle shimmer.
       */
      if (!loaded) {
        const skeleton = skeletonRef.current;

        if (!skeleton) return;

        const shimmerTween = gsap.fromTo(
          skeleton,
          {
            backgroundPosition: "200% 0",
          },
          {
            backgroundPosition: "-200% 0",
            duration: reduceMotion ? 0 : 1.5,
            repeat: reduceMotion ? 0 : -1,
            ease: "none",
          },
        );

        return () => {
          shimmerTween.kill();
        };
      }

      const image = imageRef.current;

      if (!image) return;

      /*
       * Image load hone par blur-to-clear animation.
       */
      const imageTween = gsap.fromTo(
        image,
        {
          autoAlpha: 0,
          scale: 0.985,

          filter:
            "blur(7px) brightness(1) saturate(1)",
        },
        {
          autoAlpha: 1,
          scale: 1,

          filter:
            "blur(0px) brightness(1) saturate(1)",

          duration: reduceMotion ? 0 : 0.9,
          ease: "power3.out",
          overwrite: "auto",
        },
      );

      return () => {
        imageTween.kill();
      };
    },
    {
      scope: cardRef,
      dependencies: [loaded, artwork.src],
      revertOnUpdate: true,
    },
  );

  /*
   * Image load hone par natural aspect ratio save karta hai.
   */
  const handleImageLoad = (event) => {
    const image = event.currentTarget;

    if (
      image.naturalWidth > 0 &&
      image.naturalHeight > 0
    ) {
      setAspectRatio(
        `${image.naturalWidth} / ${image.naturalHeight}`,
      );
    }

    setLoaded(true);
  };

  const showHoverAnimation = () => {
    hoverTimelineRef.current?.play();
  };

  const hideHoverAnimation = () => {
    hoverTimelineRef.current?.reverse();
  };

  const handleOpen = () => {
    onOpen?.(artwork.id);
  };

  return (
    <figure
      ref={setCardRef}
      data-artwork-id={artwork.id}
      data-category={artwork.cat}
      data-subcategory={artwork.subcat || ""}
      onPointerEnter={showHoverAnimation}
      onPointerLeave={hideHoverAnimation}
      className={`
        g-tile
        gsap-art-card
        relative
        overflow-hidden
        rounded-sm
        p-2
        sm:p-2.5
        ${artwork.span || ""}
      `}
    >
      <button
        type="button"
        onClick={handleOpen}
        onFocus={showHoverAnimation}
        onBlur={hideHoverAnimation}
        aria-label={`Open ${artwork.title} in fullscreen viewer`}
        aria-describedby={captionId}
        className="
          relative
          block
          w-full
          cursor-zoom-in
          overflow-hidden
          rounded-sm
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-[var(--gold)]
          focus-visible:ring-offset-2
          focus-visible:ring-offset-[var(--paper)]
        "
      >
        <span
          className="
            relative
            block
            w-full
            overflow-hidden
            rounded-sm
          "
          style={{
            aspectRatio,

            background: `
              linear-gradient(
                135deg,
                var(--paper2),
                rgba(var(--color-rose), 0.2),
                var(--paper)
              )
            `,
          }}
        >
          {!loaded && (
            <span
              ref={skeletonRef}
              aria-hidden="true"
              className="
                absolute
                inset-0
                z-10
              "
              style={{
                backgroundImage: `
                  linear-gradient(
                    110deg,
                    var(--paper2) 20%,
                    rgba(var(--color-burgundy), 0.22) 45%,
                    rgba(var(--color-gold), 0.2) 55%,
                    var(--paper2) 80%
                  )
                `,

                backgroundSize: "220% 100%",
              }}
            />
          )}

          <img
            ref={imageRef}
            src={artwork.src}
            alt={artwork.title}
            loading={index < 3 ? "eager" : "lazy"}
            decoding="async"
            onLoad={handleImageLoad}
            className="
              absolute
              inset-0
              h-full
              w-full
              object-contain
            "
            style={{
              opacity: 0,

              willChange:
                "transform, opacity, filter",
            }}
          />
        </span>
      </button>

      <figcaption
        ref={captionRef}
        id={captionId}
        className="
          pointer-events-none
          absolute
          inset-0
          z-20
          flex
          items-end
          overflow-hidden
          rounded-sm
          p-5
          sm:p-6
        "
        style={{
          visibility: "hidden",

          background: `
            linear-gradient(
              to top,
              rgba(69, 27, 112, 0.78) 0%,
              rgba(88, 43, 137, 0.64) 32%,
              rgba(119, 78, 166, 0.32) 52%,
              transparent 72%,
              transparent 100%
            )
          `,

          willChange: "opacity",
        }}
      >
        <div
          className="
          relative
          z-10
          w-full
          pt-12
        "
        >
          <h3
            data-caption-item
            className="
              font-serif
              text-xl
              font-medium
              uppercase
              tracking-[0.08em]
              sm:text-2xl
            "
            style={{
              color: "var(--paper)",

              textShadow:
                "0 2px 10px rgba(0, 0, 0, 0.92)",
            }}
          >
            {artwork.title}
          </h3>

          <p
            data-caption-item
            className="
              mt-1.5
              font-serif
              text-sm
              font-medium
              italic
            "
            style={{
              color: "var(--gold-bright)",

              textShadow:
                "0 2px 8px rgba(0, 0, 0, 0.92)",
            }}
          >
            {artwork.catLabel}
          </p>

          {artwork.desc && (
            <p
              data-caption-item
              className="mt-2 font-serif text-sm leading-relaxed sm:text-[0.95rem]"
              style={{ color: "rgba(255, 255, 255, 0.88)" }}
            >
              {artwork.desc}
            </p>
          )}
        </div>
      </figcaption>
    </figure>
  );
}
