const reduceMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Prepares any .viz-line paths inside `root` for a stroke-draw animation by
 * setting their dasharray/dashoffset to the path's own length. Call this
 * once right after the SVG is in the DOM, before playVisualReveal.
 */
export function setupLineDraw(root) {
  if (!root) return;
  root.querySelectorAll('.viz-line').forEach((path) => {
    const len = path.getTotalLength();
    path.style.strokeDasharray = String(len);
    path.style.strokeDashoffset = reduceMotion ? '0' : String(len);
  });
}

/**
 * Triggers the reveal: adds `.is-visible` (which the CSS in global.css keys
 * off of for bars/arcs/rows/values) and animates any .viz-line paths to
 * dashoffset 0.
 */
export function playVisualReveal(root) {
  if (!root) return;
  if (reduceMotion) {
    root.classList.add('is-visible');
    return;
  }
  requestAnimationFrame(() => {
    root.classList.add('is-visible');
    root.querySelectorAll('.viz-line').forEach((path) => {
      path.style.strokeDashoffset = '0';
    });
  });
}

export const prefersReducedMotion = reduceMotion;
