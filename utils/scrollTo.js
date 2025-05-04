/**
 * @description
 * Скроллит страницу к указанному элементу или позиции.
 * Если элемент находится внутри компонента Prismium, он открывает его.
 * @param {string|HTMLElement|number} target - Целевой элемент или позиция для скролла.
 * Если это строка, она должна быть селектором элемента.
 * Если это число, скроллит на указанное количество пикселей.
 */

export default function scrollTo(target) {
  if (target === null || target === undefined || target === '') return;

  const { $gsap } = useNuxtApp();

  const style = getComputedStyle(document.body);

  const headerHeight = cssToNumber(
    style.getPropertyValue('--global-header-height') || 0
  );

  let realTarget;
  if (typeof target === 'string') {
    realTarget = document.querySelector(target);
  } else if (target instanceof HTMLElement || typeof target === 'number') {
    realTarget = target;
  } else {
    console.warn('Invalid target for scrollTo function');
    return;
  }

  if (
    realTarget instanceof HTMLElement &&
    realTarget.closest('[data-prismium]')
  ) {
    const prismium = realTarget.closest('[data-prismium]').prismium;
    if (!prismium) return;
    prismium.open();
  }

  $gsap.to(window, {
    scrollTo: {
      y:
        target instanceof HTMLElement
          ? `#${target.getAttribute('href').split('#')[1]}`
          : target,
      offsetY: typeof target === 'number' ? 0 : headerHeight + 10,
      duration: 1,
      ease: 'linear',
      autoKill: false,
    },
  });
}
