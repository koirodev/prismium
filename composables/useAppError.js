/**
 * @description: 
 * Композибл для обработки ошибок приложения.
 * Если ошибка произошла на сервере, она выбрасывается с помощью createError.
 * Если ошибка произошла на клиенте, страница перезагружается и ошибка выбрасывается с помощью createError.
 */

export default function (error) {
  if (!error) return;
  
  if (process.server) {
    throw createError({
      statusCode: error.value?.statusCode || 500,
      statusMessage: error.value?.statusMessage || 'Ошибка сервера',
    });
  } else {
    window.location.reload();
    throw createError({
      statusCode: error.value?.statusCode || 500,
      statusMessage: error.value?.statusMessage || 'Ошибка сервера',
    });
  }
}
