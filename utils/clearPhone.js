/**
 * @description Очищает номер телефона, удаляя все символы, не являющиеся цифрами.
 * @param {string} value - Номер телефона для очистки.
 * @returns {string} - Очищенный номер телефона.
 * @example
 * clearPhone('(123) 456-7890');
 * // возвращает '1234567890'
 */

export default function clearPhone(value) {
  if (!value) return value;
  if (typeof value !== 'string') return value;

  return value.replace(/[^\d+]/g, '');
}
