/**
 * @description Обрабатывает URL изображения.
 * @param {string} value - URL изображения для обработки.
 * @param {boolean} api - Если true, URL будет обработан для использования API.
 * @returns {string} - Обработанный URL изображения.
 */

export default function processImage(value, api = true) {
  if (!value) return '/images/no-image.webp';
  if (!api) return value;
  
  return fixContentLink(value);
}
