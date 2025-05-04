/**
 * @description Конвертирует строку в логическое значение.
 * @param {string} value - Значение для конвертации.
 * @returns {boolean} - Конвертированное логическое значение.
 */

export default function stupidBoolean(value) {
  if (!value) return false;
  
  return typeof value === 'boolean' ? value : value === 'true' || value === '1';
}
