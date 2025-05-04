/**
 * @description
 * Исправляет ссылку на контент, добавляя базовый URL, если она не начинается с 'http'.
 * Если значение уже является URL, возвращает его без изменений.
 * Если значение является относительным путем, добавляет к нему базовый URL.
 * @param {string} value - Ссылка на контент, которую нужно исправить.
 * @returns {string} - Исправленная ссылка на контент.
 * @example
 * const fixedLink = fixContentLink('/path/to/resource');
 * console.log(fixedLink); // Вывод: 'https://api.example.com/path/to/resource'
 */

export default function fixContentLink(value) {
  if (!value) return value;
  if (typeof value !== 'string') return value;
  if (value.startsWith('http')) return value;

  const config = useRuntimeConfig();

  const basePath = config.public.apiBase;
  const relativePath = value.startsWith('/') ? value : `/${value}`;

  return `${basePath}${relativePath}`;
}
