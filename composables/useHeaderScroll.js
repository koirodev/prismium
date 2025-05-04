/**
 * @description Композибл для скрытия заголовка при прокрутке страницы.
 */

import { MEDIA } from '~/config';

export default function () {
  const isHeaderHidden = ref(false);

  onMounted(() => {
    const header = document.querySelector('header');
    if (!header) return;

    const headerHeight = header.offsetHeight;
    const scrollThreshold = headerHeight / 1;
    let lastScrollY = window.scrollY;

    const hideHeader = () => {
      isHeaderHidden.value = true;
    };

    const showHeader = () => {
      isHeaderHidden.value = false;
    };

    const headerProcess = () => {
      const currentScrollY = window.scrollY;

      if (Math.abs(currentScrollY - lastScrollY) < scrollThreshold) {
        return;
      }

      if (currentScrollY < window.innerHeight) {
        showHeader();
        return;
      }

      if (currentScrollY < headerHeight) {
        showHeader();
      }

      if (
        currentScrollY > lastScrollY &&
        currentScrollY > headerHeight &&
        !isHeaderHidden.value
      ) {
        hideHeader();
      } else if (
        currentScrollY < lastScrollY &&
        currentScrollY > headerHeight &&
        isHeaderHidden.value
      ) {
        showHeader();
      }

      lastScrollY = currentScrollY;
    };

    let lastWidth = window.innerWidth;
    const handleResize = () => {
      if (window.innerWidth !== lastWidth) return;
      lastWidth = window.innerWidth;

      if (window.innerWidth > MEDIA.TABLET) {
        isHeaderHidden.value = false;
        window.removeEventListener('scroll', headerProcess);
      } else {
        window.addEventListener('scroll', headerProcess);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', headerProcess);

    onUnmounted(() => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', headerProcess);
    });
  });

  return {
    isHeaderHidden,
  };
}
