import { useEffect, useRef, useState } from 'react';

/**
 * Ties a vertical "rail fill" to scroll position: the fill grows from 0% to
 * 100% as `listRef`'s element scrolls through the viewport, and reports
 * which dot indices should be marked active based on their offset within
 * the list. Respects prefers-reduced-motion by skipping the scroll link
 * entirely and just showing everything filled/active.
 */
export default function useScrollRail(listRef, itemCount) {
  const [fillPercent, setFillPercent] = useState(0);
  const [activeDots, setActiveDots] = useState(() => new Array(itemCount).fill(false));
  const dotRefs = useRef([]);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return undefined;

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (reduceMotion) {
      setFillPercent(100);
      setActiveDots(new Array(itemCount).fill(true));
      return undefined;
    }

    let ticking = false;

    const update = () => {
      const rect = list.getBoundingClientRect();
      const vh = window.innerHeight;

      const start = vh * 0.9; // progress = 0 while the list's top is here
      const end = vh * 0.1; // progress = 1 once the list's bottom reaches here
      const span = rect.height + start - end;
      let progress = span > 0 ? (start - rect.top) / span : 1;
      progress = Math.max(0, Math.min(1, progress));

      setFillPercent(progress * 100);

      const filledPx = progress * rect.height;
      setActiveDots(
        dotRefs.current.map((dot) =>
          dot ? dot.offsetTop <= filledPx : false
        )
      );

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [listRef, itemCount]);

  return { fillPercent, activeDots, dotRefs };
}
