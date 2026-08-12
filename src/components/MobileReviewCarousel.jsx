import { Children, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function MobileReviewCarousel({ children }) {
  const slides = Children.toArray(children);
  const [current, setCurrent] = useState(0);
  const touchStart = useRef(null);

  const total = slides.length;

  const next = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const goTo = (index) => {
    setCurrent(index);
  };

  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStart.current === null) return;

    const endX = e.changedTouches[0].clientX;
    const difference = touchStart.current - endX;

    if (Math.abs(difference) > 50) {
      if (difference > 0) {
        next();
      } else {
        prev();
      }
    }

    touchStart.current = null;
  };

  if (!total) return null;

  return (
    <div className="relative w-full md:hidden">
      {/* Slider */}
      <div
        className="overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-full flex-none px-1"
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      {/* Previous */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous review"
        className="
          absolute
          left-[-15px]
          top-[40%]
          -translate-y-1/2
          z-20

          w-10 h-10
          rounded-full

          flex items-center justify-center

          bg-white/90
          backdrop-blur-md
          shadow-lg

          border
          border-white/40

          text-burgundy
        "
      >
        <FiChevronLeft size={20} />
      </button>

      {/* Next */}
      <button
        type="button"
        onClick={next}
        aria-label="Next review"
        className="
          absolute
          right-[-15px]

          top-[40%]

          -translate-y-1/2
          z-20

          w-10 h-10
          rounded-full

          flex items-center justify-center

          bg-white/90
          backdrop-blur-md
          shadow-lg

          border
          border-white/40

          text-burgundy
        "
      >
        <FiChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="flex justify-center items-center gap-2 mt-6">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goTo(index)}
            aria-label={`Go to review ${index + 1}`}
            className={`
              h-1.5
              rounded-full
              transition-all
              duration-300

              ${
                current === index
                  ? "w-7"
                  : "w-1.5 opacity-40"
              }
            `}
            style={{
              background: "var(--gold-bright)",
            }}
          />
        ))}
      </div>
    </div>
  );
}