/**
 * @description Преобразует CSS значение в число.
 * @param {string} value - CSS значение для преобразования.
 * @returns {number} - Преобразованное число.
 * @example
 * cssToNumber('2rem');
 * // возвращает 32 (если размер шрифта корня равен 16px)
 */

export default function cssToNumber(value) {
  if (!value) return value;
  if (typeof value !== 'string') return value;

  if (value.endsWith('rem')) {
    return (
      parseFloat(value) *
      parseFloat(getComputedStyle(document.documentElement).fontSize)
    );
  } else if (value.endsWith('vw')) {
    return (parseFloat(value) * 1920) / 100;
  } else if (value.endsWith('px')) {
    return parseFloat(value);
  }

  return parseFloat(value);
}
