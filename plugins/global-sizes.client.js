/**
 * @description
 * Плагин для получения высоты глобального хедера и хлебных крошек.
 * Также вычисляет разницу между высотой 100vh и 100dvh.
 * Это необходимо для корректного отображения элементов на мобильных устройствах.
 * Плагин обновляет значения при изменении размера окна.
 */

export const getGlobalHeaderHeight = (selector = 'header') => {
  if (document.querySelector(selector)) {
    const header = document.querySelector(selector);
    return header.clientHeight;
  }
  return 0;
};

export const setGlobalHeaderHeight = () => {
  const height = getGlobalHeaderHeight();
  document.body.style.setProperty('--global-header-height', `${height}px`);
};

export const getGlobalBreadcrumbsHeight = () => {
  if (document.querySelector('.breadcrumbs')) {
    const breadcrumbs = document.querySelector('.breadcrumbs');
    return breadcrumbs.clientHeight;
  }
  return 0;
};

export const setGlobalBreadcrumbsHeight = () => {
  const height = getGlobalBreadcrumbsHeight();
  document.body.style.setProperty('--global-breadcrumbs-height', `${height}px`);
};

export const getGlobalDVHDiff = () => {
  let a, b;
  document.body.style.setProperty('height', '100dvh');
  a = document.body.clientHeight;
  document.body.style.setProperty('height', '100vh');
  b = document.body.clientHeight;
  document.body.style.removeProperty('height');
  return b - a;
};

export const setGlobalDVHDiff = () => {
  const diff = getGlobalDVHDiff();
  if (diff > 0) {
    document.body.style.setProperty('--global-dvh-diff', `${diff}px`);
  } else {
    document.body.style.removeProperty('--global-dvh-diff');
  }
};

export const updateAllSizes = () => {
  setGlobalHeaderHeight();
  setGlobalBreadcrumbsHeight();
  setGlobalDVHDiff();
};

export default defineNuxtPlugin(() => {
  let lastWidth = window.innerWidth;

  if (process.client) {
    updateAllSizes();

    const handleResize = () => {
      if (window.innerWidth !== lastWidth) {
        lastWidth = window.innerWidth;
        updateAllSizes();
      }
    };

    window.addEventListener('resize', handleResize);
  }

  return {
    provide: {
      globalSizes: {
        getGlobalHeaderHeight,
        setGlobalHeaderHeight,
        getGlobalBreadcrumbsHeight,
        setGlobalBreadcrumbsHeight,
        getGlobalDVHDiff,
        setGlobalDVHDiff,
        updateAllSizes,
      },
    },
  };
});
