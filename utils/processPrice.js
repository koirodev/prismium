/**
 * @description
 * Форматирует цену в строку с учетом валюты.
 * Если цена не является числом, она будет преобразована в число.
 * Если цена не может быть преобразована в число, она будет возвращена как есть.
 * @param {number|string} price - Цена для форматирования.
 * @param {boolean} float - Если true, цена будет форматирована с двумя десятичными знаками.
 * @returns {string} - Форматированная цена.
 */

export default function processPrice(price, float = false) {
  if (typeof price !== 'number') {
    const parsed = Number(price);

    if (isNaN(parsed)) {
      return price;
    }

    price = parsed;
  }

  if (float) {
    return price.toLocaleString('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  return price.toLocaleString('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}
