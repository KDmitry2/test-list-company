import { useEffect, useRef, useState } from "react";

export const useElementOnScreen = () => {
  const containerRef = useRef<HTMLTableRowElement | null>(null);

  const [isVisible, setIsVisible] = useState(false);

  const observerCallback = ([entry]: IntersectionObserverEntry[]) => {
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    });

    const container = containerRef.current;
    if (container) {
      observer.observe(container);
    }

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, [observerCallback, containerRef]);

  return { isVisible, containerRef };
};
