// Get current time
function now() {
  return Date.now();
}

// Process accordions
function processAccordions(
  nestedAccordions,
  rootAccordions,
  getInstance,
  open
) {
  // Open nested accordions instantly
  nestedAccordions.forEach((el) => {
    const instance = getInstance(el);
    if (instance) {
      // Save original speed
      const originalSpeed = { ...instance.speed };

      // Set zero speed
      el.style.setProperty('--pr-speed', '0ms');

      // Open accordion
      open(el, false);
      instance.iconManager?.updateIcon('open');

      // Restore speed immediately
      requestAnimationFrame(() => {
        instance.speed = originalSpeed;
        el.style.setProperty('--pr-speed', `${originalSpeed.open}ms`);
      });
    }
  });

  // Open root accordions with animation
  rootAccordions.forEach((el) => {
    const instance = getInstance(el);
    if (instance) {
      open(el, false);
      instance.iconManager?.updateIcon('open');
    }
  });
}

// Get element depth
function getElementDepth(el, container) {
  let depth = 0;
  let current = el;

  while (current && current !== container && current !== document.body) {
    current = current.parentElement;
    if (current && current.matches('.prismium')) {
      depth++;
    }
  }

  return depth;
}

export { now, processAccordions, getElementDepth };
