/**
 * @description
 * Композабл для создания эффекта "прилипания" элемента к верхней части экрана при прокрутке.
 * Использует библиотеку ScrollTrigger для управления поведением элемента.
 * @param {HTMLElement} item - Элемент, который будет "прилипать".
 * @param {HTMLElement} container - Контейнер, в пределах которого будет происходить "прилипание".
 * @returns {void}
 * @example usePin(itemRef.value, containerRef.value);
 */

import { MEDIA } from '~/config';

export default function (item, container) {
  nextTick(() => {
    if (window.innerWidth <= MEDIA.TABLET) return;
    if (!item || !container) return;

    const topElement = document.querySelector('.header-desktop');
    if (!topElement) return;

    const { $ScrollTrigger } = useNuxtApp();
    const rootStyles = getComputedStyle(document.documentElement);
    const topOffset = cssToNumber(
      rootStyles.getPropertyValue('--container-desktop-offset').trim()
    );

    $ScrollTrigger.create({
      trigger: container,
      pin: item,
      start: () => `top ${topOffset}px`,
      markers: false,
      pinSpacing: false,
      end: () => `${container.clientHeight - item.clientHeight - topOffset}px`,
    });

    return;
  });
}
