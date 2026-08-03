import { useEffect, useRef, useState } from "react";

/**
 * Defers rendering (and therefore lazy-module downloads) until a section is
 * close to the viewport. The small placeholder keeps scrolling stable.
 */
export default function DeferredSection({ children, minHeight = "18rem" }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || isVisible) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsVisible(true);
        observer.disconnect();
      },
      { rootMargin: "500px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <div ref={ref} style={!isVisible ? { minHeight } : undefined}>
      {isVisible ? children : null}
    </div>
  );
}
