/**
 * @description
 * Эта функция исправляет ссылку, чтобы она была допустимым URL.
 * Она обеспечивает, что ссылка начинается с '/' и заканчивается '/'.
 * Если ссылка является внешней, она возвращается как есть.
 * Если ссылка является индексной страницей, возвращается '/'.
 * @param {string} value - Ссылка для исправления.
 * @returns {string} - Исправленная ссылка.
 * @example
 * fixLink('about');
 * // возвращает '/about/'
 */

import { LINK_STARTS_EXTERNAL, INDEX_PAGE_NAME } from '~/config';

export default function fixLink(value) {
  if (!value) return value;
  if (typeof value !== 'string') return value;

  if (LINK_STARTS_EXTERNAL.some((start) => value.startsWith(start))) {
    return value;
  }

  if (INDEX_PAGE_NAME.some((page) => value === page)) {
    return '/';
  }

  let result = value;

  if (!result.startsWith('/')) {
    result = '/' + result;
  }

  if (!result.endsWith('/')) {
    result = result + '/';
  }

  return result;
}
