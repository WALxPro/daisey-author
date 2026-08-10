// import { useCallback, useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";

// export default function GalleryCard({
//   artwork,
//   index = 0,
//   onOpen,
//   registerRef,
// }) {
//   const [loaded, setLoaded] = useState(false);
//   const [aspectRatio, setAspectRatio] = useState("4 / 5");

//   const cardRef = useRef(null);
//   const imageRef = useRef(null);
//   const skeletonRef = useRef(null);

//   const captionId = `artwork-caption-${artwork.id}`;

//   const handleImageLoad = () => {
//     const image = imageRef.current;
//     if (image?.naturalWidth && image?.naturalHeight) {
//       setAspectRatio(`${image.naturalWidth} / ${image.naturalHeight}`);
//     }
//     setLoaded(true);
//   };

//   const handleOpen = () => {
//     onOpen?.(artwork.id);
//   };

//   const setCardRef = useCallback(
//     (element) => {
//       cardRef.current = element;
//       registerRef?.(artwork.id, element);
//     },
//     [artwork.id, registerRef],
//   );

//   useEffect(() => {
//     setLoaded(false);

//     const image = imageRef.current;
//     if (
//       image?.complete &&
//       image.naturalWidth > 0 &&
//       image.naturalHeight > 0
//     ) {
//       setAspectRatio(`${image.naturalWidth} / ${image.naturalHeight}`);
//       setLoaded(true);
//     }
//   }, [artwork.src]);

//   useEffect(() => {
//     const reduceMotion = window.matchMedia(
//       "(prefers-reduced-motion: reduce)",
//     ).matches;
//     const mobile = window.matchMedia("(max-width: 767px)").matches;

//     if (!loaded) {
//       const skeleton = skeletonRef.current;
//       if (!skeleton) return undefined;

//       const shimmerTween = gsap.fromTo(
//         skeleton,
//         { backgroundPosition: "200% 0" },
//         {
//           backgroundPosition: "-200% 0",
//           duration: reduceMotion || mobile ? 0 : 1.5,
//           repeat: reduceMotion || mobile ? 0 : -1,
//           ease: "none",
//         },
//       );

//       return () => shimmerTween.kill();
//     }

//     const image = imageRef.current;
//     if (!image) return undefined;

//     if (reduceMotion || mobile) {
//       setAspectRatio(`${image.naturalWidth} / ${image.naturalHeight}`);
//       return undefined;
//     }

//     const imageTween = gsap.fromTo(
//       image,
//       {
//         autoAlpha: 0,
//         scale: 0.985,
//         filter: "blur(7px) brightness(1) saturate(1)",
//       },
//       {
//         autoAlpha: 1,
//         scale: 1,
//         filter: "blur(0px) brightness(1) saturate(1)",
//         duration: 0.9,
//         ease: "power3.out",
//         overwrite: "auto",
//       },
//     );

//     setAspectRatio(`${image.naturalWidth} / ${image.naturalHeight}`);

//     return () => imageTween.kill();
//   }, [loaded]);

//   return (
//     <figure
//       ref={setCardRef}
//       data-artwork-id={artwork.id}
//       data-category={artwork.cat}
//       data-subcategory={artwork.subcat || ""}
//       className={`
//         g-tile
//         gsap-art-card
//         relative
//         overflow-hidden
//         rounded-sm
//         p-2
//         sm:p-2.5
//         transition-transform duration-500 ease-out
//         hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(31,12,64,0.12)]
//         ${artwork.span || ""}
//       `}
//     >
//       <button
//         type="button"
//         onClick={handleOpen}
//         aria-label={`Open ${artwork.title} in fullscreen viewer`}
//         aria-describedby={captionId}
//         className="
//           relative
//           block
//           w-full
//           cursor-zoom-in
//           overflow-hidden
//           rounded-sm
//           focus-visible:outline-none
//           focus-visible:ring-2
//           focus-visible:ring-[var(--gold)]
//           focus-visible:ring-offset-2
//           focus-visible:ring-offset-[var(--paper)]
//         "
//       >
//         <span
//           className="
//             relative
//             block
//             w-full
//             overflow-hidden
//             rounded-sm
//           "
//           style={{
//             aspectRatio,
//             background: `
//               linear-gradient(
//                 135deg,
//                 var(--paper2),
//                 rgba(var(--color-rose), 0.2),
//                 var(--paper)
//               )
//             `,
//           }}
//         >
//           {!loaded && (
//             <span
//               ref={skeletonRef}
//               aria-hidden="true"
//               className="
//                 absolute
//                 inset-0
//                 z-10
//               "
//               style={{
//                 backgroundImage: `
//                   linear-gradient(
//                     110deg,
//                     var(--paper2) 20%,
//                     rgba(var(--color-burgundy), 0.22) 45%,
//                     rgba(var(--color-gold), 0.2) 55%,
//                     var(--paper2) 80%
//                   )
//                 `,
//                 backgroundSize: "220% 100%",
//               }}
//             />
//           )}

//           <img
//             ref={imageRef}
//             src={artwork.src}
//             alt={artwork.title}
//             loading={index < 3 ? "eager" : "lazy"}
//             decoding="async"
//             onLoad={handleImageLoad}
//             className="
//               absolute
//               inset-0
//               h-full
//               w-full
//               object-contain
//               transition-transform duration-700 ease-[var(--ease-silk)]
//               group-hover:scale-105
//             "
//             style={{
//               opacity: 0,
//               willChange: "transform, opacity, filter",
//             }}
//           />
//         </span>
//       </button>

//       <figcaption
//         id={captionId}
//         className="
//           pointer-events-none
//           absolute
//           inset-0
//           z-20
//           flex
//           items-end
//           overflow-hidden
//           rounded-sm
//           p-5
//           sm:p-6
//           opacity-0
//           transition-all
//           duration-500
//           ease-out
//           group-hover:opacity-100
//           group-focus-within:opacity-100
//         "
//         style={{
//           background: `
//             linear-gradient(
//               to top,
//               rgba(69, 27, 112, 0.78) 0%,
//               rgba(88, 43, 137, 0.64) 32%,
//               rgba(119, 78, 166, 0.32) 52%,
//               transparent 72%,
//               transparent 100%
//             )
//           `,
//           willChange: "opacity",
//         }}
//       >
//         <div
//           className="
//             relative
//             z-10
//             w-full
//             pt-12
//             transition-all
//             duration-500
//             ease-out
//             group-hover:translate-y-0
//             group-focus-within:translate-y-0
//           "
//         >
//           <h3
//             className="
//               font-serif
//               text-xl
//               font-medium
//               uppercase
//               tracking-[0.08em]
//               sm:text-2xl
//               opacity-0
//               translate-y-3
//               transition-all
//               duration-500
//               ease-out
//               group-hover:opacity-100
//               group-hover:translate-y-0
//               group-focus-within:opacity-100
//               group-focus-within:translate-y-0
//             "
//             style={{
//               color: "var(--paper)",
//               textShadow: "0 2px 10px rgba(0, 0, 0, 0.92)",
//             }}
//           >
//             {artwork.title}
//           </h3>

//           <p
//             className="
//               mt-1.5
//               font-serif
//               text-sm
//               font-medium
//               italic
//               opacity-0
//               translate-y-3
//               transition-all
//               duration-500
//               ease-out
//               delay-75
//               group-hover:opacity-100
//               group-hover:translate-y-0
//               group-focus-within:opacity-100
//               group-focus-within:translate-y-0
//             "
//             style={{
//               color: "var(--gold-bright)",
//             }}
//           >
//             {artwork.catLabel}
//           </p>

//           {artwork.desc && (
//             <p
//               className="mt-2 font-serif text-sm leading-relaxed sm:text-[0.95rem] text-white/90"
//             >
//               {artwork.desc}
//             </p>
//           )}
//         </div>
//       </figcaption>
//     </figure>
//   );
// }

import { memo, useCallback, useEffect, useRef, useState } from "react";

import { gsap } from "gsap";

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
  const skeletonRef = useRef(null);

  const captionId = `artwork-caption-${artwork.id}`;

  const handleImageLoad = () => {
    const image = imageRef.current;

    if (image?.naturalWidth && image?.naturalHeight) {
      setAspectRatio(`${image.naturalWidth} / ${image.naturalHeight}`);
    }

    setLoaded(true);
  };

  const handleImageError = () => {
    // Loader/skeleton forever stuck na rahe
    setLoaded(true);
  };

  const handleOpen = () => {
    onOpen?.(artwork.id);
  };

  const setCardRef = useCallback(
    (element) => {
      cardRef.current = element;

      registerRef?.(artwork.id, element);
    },
    [artwork.id, registerRef],
  );

  /* Reset when image changes */
  useEffect(() => {
    setLoaded(false);

    const image = imageRef.current;

    if (image?.complete && image.naturalWidth > 0 && image.naturalHeight > 0) {
      setAspectRatio(`${image.naturalWidth} / ${image.naturalHeight}`);

      setLoaded(true);
    }
  }, [artwork.src]);

  /* Skeleton animation */
  useEffect(() => {
    if (loaded) return;

    const skeleton = skeletonRef.current;

    if (!skeleton) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const mobile = window.matchMedia("(max-width: 767px)").matches;

    /*
     * IMPORTANT:
     * Mobile par GSAP shimmer mat chalao.
     */
    if (reduceMotion || mobile) {
      gsap.set(skeleton, {
        backgroundPosition: "50% 0",
      });

      return;
    }

    const shimmerTween = gsap.fromTo(
      skeleton,
      {
        backgroundPosition: "200% 0",
      },
      {
        backgroundPosition: "-200% 0",
        duration: 1.5,
        repeat: -1,
        ease: "none",
      },
    );

    return () => {
      shimmerTween.kill();
    };
  }, [loaded]);

  /* Image reveal */
  useEffect(() => {
    if (!loaded) return;

    const image = imageRef.current;

    if (!image) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const mobile = window.matchMedia("(max-width: 767px)").matches;

    /*
     * MOBILE
     *
     * Image must explicitly be visible.
     */
    if (reduceMotion || mobile) {
      gsap.set(image, {
        autoAlpha: 1,
        scale: 1,
        clearProps: "transform,filter",
      });

      return;
    }

    /*
     * DESKTOP ONLY
     *
     * No blur animation.
     * Opacity + slight scale is much cheaper.
     */
    const imageTween = gsap.fromTo(
      image,
      {
        autoAlpha: 0,
        scale: 0.985,
      },
      {
        autoAlpha: 1,
        scale: 1,
        duration: 0.65,
        ease: "power3.out",
        overwrite: true,

        onComplete: () => {
          /*
           * Remove GSAP inline transform so
           * Tailwind group-hover:scale-105 works.
           */
          gsap.set(image, {
            clearProps: "transform,willChange",
          });
        },
      },
    );

    return () => {
      imageTween.kill();
    };
  }, [loaded]);

  return (
    <figure
      ref={setCardRef}
      data-artwork-id={artwork.id}
      data-category={artwork.cat}
      data-subcategory={artwork.subcat || ""}
      className={`
        g-tile
        gsap-art-card
        group
        relative
        overflow-hidden
        rounded-sm
        p-2
        sm:p-2.5
        transition-transform
        duration-500
        ease-out
        hover:-translate-y-1
        hover:shadow-[0_20px_45px_rgba(31,12,64,0.12)]
        ${artwork.span || ""}
      `}
    >
      <button
        type="button"
        onClick={handleOpen}
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
            src={artwork.thumb || artwork.src}
            alt={artwork.title}
            loading={index < 2 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "auto"}
            decoding="async"
            onLoad={handleImageLoad}
            onError={handleImageError}
            className="
    absolute
    inset-0

    h-full
    w-full

    object-contain

    transition-transform
    duration-700
    ease-[var(--ease-silk)]

    group-hover:scale-105
  "
            style={{
              opacity: loaded ? undefined : 0,
            }}
          />
        </span>
      </button>

      <figcaption
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
          opacity-0
          transition-all
          duration-500
          ease-out
          group-hover:opacity-100
          group-focus-within:opacity-100
        "
        style={{
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
        }}
      >
        <div
          className="
            relative
            z-10
            w-full
            pt-12
            transition-all
            duration-500
            ease-out
            group-hover:translate-y-0
            group-focus-within:translate-y-0
          "
        >
          <h3
            className="
              font-serif
              text-xl
              font-medium
              uppercase
              tracking-[0.08em]
              sm:text-2xl
              opacity-0
              translate-y-3
              transition-all
              duration-500
              ease-out
              group-hover:opacity-100
              group-hover:translate-y-0
              group-focus-within:opacity-100
              group-focus-within:translate-y-0
            "
            style={{
              color: "var(--paper)",
              textShadow: "0 2px 10px rgba(0,0,0,.92)",
            }}
          >
            {artwork.title}
          </h3>

          <p
            className="
              mt-1.5
              font-serif
              text-sm
              font-medium
              italic
              opacity-0
              translate-y-3
              transition-all
              duration-500
              ease-out
              delay-75
              group-hover:opacity-100
              group-hover:translate-y-0
              group-focus-within:opacity-100
              group-focus-within:translate-y-0
            "
            style={{
              color: "var(--gold-bright)",
            }}
          >
            {artwork.catLabel}
          </p>

          {artwork.desc && (
            <p className="mt-2 font-serif text-sm leading-relaxed sm:text-[0.95rem] text-white/90">
              {artwork.desc}
            </p>
          )}
        </div>
      </figcaption>
    </figure>
  );
}
