/**
 * @description Проверяет, является ли указанный URL допустимым видеоформатом.
 * @param {string} videoUrl - URL для проверки.
 * @returns {boolean} - Возвращает true, если URL является допустимым видеоформатом, и false в противном случае.
 * @example
 * const videoUrl = 'https://example.com/video.mp4';
 * const isValidVideo = checkVideoFormat(videoUrl);
 * console.log(isValidVideo); // true
 */

export default function checkVideoFormat(videoUrl) {
  if (!videoUrl) return false;
  if (typeof videoUrl !== 'string') return false;

  const videoFormats = [
    '.mp4',
    '.webm',
    '.ogg',
    '.mov',
    '.avi',
    '.wmv',
    '.flv',
    '.mkv',
    '.m4v',
  ];
  return videoFormats.some((format) => videoUrl.endsWith(format));
}
