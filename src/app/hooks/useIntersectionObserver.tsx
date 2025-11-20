import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions extends IntersectionObserverInit {
  // IntersectionObserverInit already includes threshold and rootMargin
  freezeOnceVisible?: boolean; // optional: keep true forever after first intersection
}

export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
): [React.RefObject<HTMLDivElement | null>, boolean] {
  const {
    threshold = 0.1,
    root = null,
    rootMargin = '0px',
    freezeOnceVisible = false,
  } = options;

  // Correct typing: current can be HTMLDivElement or null
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;

        setIsVisible((prev) => {
          if (visible) {
            if (freezeOnceVisible || !prev) {
              // Once visible → stay visible if freezeOnceVisible is true
              return true;
            }
          }
          return prev || visible;
        });

        // Disconnect early if we only need to know the first time
        if (visible && !freezeOnceVisible) {
          observer.disconnect();
        }
        // Or keep freezeOnceVisible behavior but disconnect when fully visible
        if (visible && freezeOnceVisible) {
          observer.disconnect();
        }
      },
      { threshold, root, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, root, rootMargin, freezeOnceVisible]);

  return [ref, isVisible];
}