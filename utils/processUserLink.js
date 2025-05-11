/**
 * @description
 * Обрабатывает элемент ссылки, добавляя обработчик события клика для навигации по ссылке.
 * Если ссылка является внутренней (начинается с '/') и не открывается в новой вкладке,
 * добавляет обработчик события клика, который предотвращает переход по ссылке и вызывает функцию навигации.
 * Также добавляет класс 'link' к элементу ссылки.
 * Устанавливает флаг isProcessed в true, чтобы избежать повторной обработки.
 * Если ссылка является якорной (начинается с '#'), обработка не выполняется.
 * @param {HTMLElement} el - Элемент ссылки для обработки.
 * @returns {void}
 */

export default function processUserLink(el) {
  if (!el) return;
  if (el.isProcessed) return;

  const href = el.getAttribute('href');
  if (!href) return;

  // Пропускаем обработку для якорей
  if (href.startsWith('#')) return;

  const localePath = useLocalePath();

  el.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target.href);
  });

  if (!href.startsWith('http') && el.getAttribute('target') !== '_blank') {
    el.setAttribute('href', localePath(href));

    el.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo(el.getAttribute('href'));
    });
  }

  if (href.startsWith('http')) {
    el.setAttribute('target', '_blank');
  }

  el.isProcessed = true;
}
