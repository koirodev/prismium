/**
 * @description
 * Плагин для инициализации GSAP и его плагинов.
 * Он регистрирует плагины GSAP и создает экземпляр ScrollSmoother.
 * Также он предоставляет функции для управления анимацией и прокруткой.
 */

import { ANIMATION } from '~/config';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollSmoother from 'gsap/ScrollSmoother';
import { CustomEase } from 'gsap/CustomEase';
// import { Draggable } from '~/assets/modules/gsap/Draggable'
// import GSDevTools from '~/assets/modules/gsap/GSDevTools'
// import TextPlugin from '~/assets/modules/gsap/TextPlugin';
// import SplitText from '~/assets/modules/gsap/SplitText';

const settings = {
  wrapper: '.wrapper',
  content: '.wrapper__content',
  smooth: 1.2,
};

gsap.registerPlugin(
  CustomEase,
  ScrollToPlugin,
  // Draggable,
  // GSDevTools,
  ScrollSmoother,
  // TextPlugin,
  // SplitText,
  ScrollTrigger
);

let scrollSmoother;
const initScrollSmoother = () => {
  const isOldBrowser = useState('isOldBrowser');
  if (isOldBrowser.value) return;

  scrollSmoother = ScrollSmoother.create({
    wrapper: settings.wrapper,
    content: settings.content,
    smooth: settings.smooth,
  });

  return scrollSmoother;
};

const stRefresh = () => {
  ScrollTrigger.refresh();
};

const cubicDefault = CustomEase.create('cubicDefault', ANIMATION.EASE);

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    nuxtApp.hook('page:start', () => {
      if (scrollSmoother) {
        scrollSmoother.smooth(0);
      }
    });

    nuxtApp.hook('page:finish', () => {
      if (!scrollSmoother) {
        window.scrollTo({
          top: 0,
          behavior: 'instant',
        });

        return;
      }

      gsap.to(window, {
        scrollTo: 0,
        duration: 0,
        onComplete: () => {
          nextTick(() => {
            setTimeout(() => {
              stRefresh();
            }, 0);

            if (scrollSmoother) {
              scrollSmoother.smooth(settings.smooth);
            }
          });
        },
      });
    });
  }

  return {
    provide: {
      gsap,
      ScrollToPlugin,
      ScrollTrigger,
      ScrollSmoother,
      initScrollSmoother,
      CustomEase,
      cubicDefault,
      // Draggable,
      // GSDevTools,
      // SplitText,
      // TextPlugin,
      stRefresh,
    },
  };
});
