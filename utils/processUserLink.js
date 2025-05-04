/**
 * @description
 * Обрабатывает элемент ссылки, добавляя обработчик события клика для навигации по ссылке.
 * Если ссылка является внутренней (начинается с '/') и не открывается в новой вкладке,
 * добавляет обработчик события клика, который предотвращает переход по ссылке и вызывает функцию навигации.
 * Также добавляет класс 'link' к элементу ссылки.
 * Устанавливает флаг isProcessed в true, чтобы избежать повторной обработки.
 * @param {HTMLElement} el - Элемент ссылки для обработки.
 * @returns {void}
 */

export default function processUserLink(el) {
  if (!el) return;
  if (el.isProcessed) return;

  if (
    !el.getAttribute('href')?.startsWith('http') &&
    el.getAttribute('target') !== '_blank'
  ) {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo(el.getAttribute('href'));
    });
  }

  el.classList.add('link');
  el.isProcessed = true;

  return;
}
