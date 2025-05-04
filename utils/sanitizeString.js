/**
 * @description
 * Функция для очистки строки от HTML-тегов и специальных символов.
 * Она удаляет все HTML-теги и оставляет только буквы и цифры.
 * @param {string} str - Строка для очистки.
 * @returns {string} - Очищенная строка."
 */

export default function sanitizeString(str) {
  if (!str) return str;
  const sanitizedStr = str.replace(/<\/?[^>]+(>|$)/g, '');
  return sanitizedStr.replace(/[^\w\s]/gi, '');
}
