/**
 * Animates a number from 0 up to the value already in `el`'s text content,
 * preserving any non-numeric prefix/suffix (e.g. a leading apostrophe) and
 * the original decimal precision. If the text doesn't start with a digit
 * (nothing sensible to count from), it's left alone — call site should
 * skip those and just fade them in instead.
 */
export function animateCountUp(el, duration = 900) {
  const finalText = el.textContent.trim();
  const match = finalText.match(/^(\D*)([\d,]*\.?\d*)(\D*)$/);
  if (!match || match[2] === '') return;

  const [, prefix, numStr, suffix] = match;
  const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0;
  const target = parseFloat(numStr.replace(/,/g, ''));
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - (1 - progress) ** 3;
    el.textContent = prefix + (target * eased).toFixed(decimals) + suffix;
    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      el.textContent = finalText; // guarantee the exact original text
    }
  }
  requestAnimationFrame(tick);
}

export function startsWithDigit(text) {
  return /^\d/.test(text.trim());
}
