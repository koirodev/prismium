/**
 * @description
 * Композибл для анимации элементов с использованием GSAP и ScrollTrigger.
 * Он предоставляет функции для анимации элементов при прокрутке страницы.
 * Также включает в себя настройки по умолчанию для анимации и триггеров.
 */

import { ANIMATION, MEDIA } from '~/config';

export default function () {
  const { $gsap, $cubicDefault } = useNuxtApp();
  const isOldBrowser = useState('isOldBrowser');

  const defaultTrigger = {
    start: 'top 98%',
    end: 'bottom bottom',
    scrub: false,
    markers: false,
    // toggleActions: "play none none none",
    toggleActions: 'play none none reverse',
  };

  const itemSettings = {
    y: 45,
    opacity: 0,
    ease: $cubicDefault,
    duration: ANIMATION.LONG,
    delay: 0.05,
    clearProps: 'transform,opacity',
  };

  const getFactor = () => {
    innerWidth = window.innerWidth;
    if (innerWidth <= MEDIA.TABLET && innerWidth > MEDIA.MOBILE) return 0.78;
    if (innerWidth <= MEDIA.MOBILE) return 0.6;
    return 1;
  };

  const itemAnimation = (el) => {
    if (el instanceof Element && !isOldBrowser.value) {
      nextTick(() => {
        $gsap.from(el, {
          ...itemSettings,
          y: 45 * getFactor(),
          scrollTrigger: { trigger: el, ...defaultTrigger },
        });
      });
    }
  };

  const itemAnimationSmall = (el) => {
    if (el instanceof Element && !isOldBrowser.value) {
      nextTick(() => {
        $gsap.from(el, {
          ...itemSettings,
          y: 20 * getFactor(),
          scrollTrigger: { trigger: el, ...defaultTrigger },
        });
      });
    }
  };

  return {
    defaultTrigger,

    itemSettings,
    itemAnimation,
    itemAnimationSmall,
  };
}
