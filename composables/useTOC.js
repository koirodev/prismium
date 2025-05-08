/**
 * @description
 * Композиция для генерации оглавления (Table Of Contents)
 * на основе заголовков в контейнере.
 */

export default function useTOC() {
  const { $ScrollTrigger } = useNuxtApp();
  const toc = ref([]);
  const observers = ref([]);

  function generateTOC(container, settings = {}) {
    if (!container) return;

    // Очищаем предыдущие наблюдатели, если они есть
    observers.value.forEach((observer) => observer.disconnect());
    observers.value = [];
    toc.value = [];

    const defaultSettings = {
      headings: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      ignoreClass: 'toc-ignore',
      rootMargin: '-20px 0px -80% 0px', // Определяет смещение области пересечения
      threshold: 0.1, // Процент видимости элемента для срабатывания
    };

    const mergedSettings = { ...defaultSettings, ...settings };

    let headings = mergedSettings.headings;
    let ignoreClass = mergedSettings.ignoreClass;
    if (typeof headings === 'string') {
      headings = headings.split(',');
    }

    const toggleActive = (el) => {
      toc.value.forEach((i) => {
        i.active = i.id === el.id;
      });
    };

    const headingObserver = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);

        if (visibleEntry) {
          toggleActive(visibleEntry.target);
        } else if (entries.length > 0) {
          const scrollY = window.scrollY;
          let closestHeading = null;
          let minDistance = Infinity;

          entries.forEach((entry) => {
            const distance = Math.abs(
              entry.target.getBoundingClientRect().top + scrollY - scrollY
            );
            if (distance < minDistance) {
              minDistance = distance;
              closestHeading = entry.target;
            }
          });

          if (closestHeading) {
            toggleActive(closestHeading);
          }
        }
      },
      {
        rootMargin: mergedSettings.rootMargin,
        threshold: mergedSettings.threshold,
      }
    );

    observers.value.push(headingObserver);

    headings.forEach((heading) => {
      container
        .querySelectorAll(`${heading}:not(.${ignoreClass})`)
        .forEach((el, i) => {
          const active = ref(false);
          el.id = `toc-${i}-${heading}`;

          // Добавляем элемент под наблюдение
          headingObserver.observe(el);

          toc.value.push({
            text: el.textContent,
            id: `toc-${i}-${heading}`,
            link: `#${`toc-${i}-${heading}`}`,
            active: active,
            heading: heading,
          });
        });
    });

    // Сортировка элементов по порядку их появления в документе
    toc.value.sort((a, b) => {
      const aEl = container.querySelector(a.link);
      const bEl = container.querySelector(b.link);

      if (!aEl || !bEl) return 0;

      const pos = aEl.compareDocumentPosition(bEl);

      if (pos & Node.DOCUMENT_POSITION_FOLLOWING) return -1;
      if (pos & Node.DOCUMENT_POSITION_PRECEDING) return 1;
      return 0;
    });
  }

  // Отключаем все наблюдатели при размонтировании компонента
  onUnmounted(() => {
    observers.value.forEach((observer) => observer.disconnect());
    observers.value = [];
  });

  return {
    toc,
    generateTOC,
  };
}
