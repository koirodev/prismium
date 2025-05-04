/**
 * @description Композибл для определения мобильного устройства.
 * @example
 * const { isMobile } = useDevice();
 * if (isMobile.any()) {
 *   // do something for mobile
 * }
 */

export function useDevice() {
  const isMobile = ref({});

  onMounted(() => {
    isMobile.value = {
      Android: function () {
        return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
      },
      any: function () {
        return (
          this.Android() ||
          this.BlackBerry() ||
          this.iOS() ||
          this.Opera() ||
          this.Windows()
        );
      },
    };
  });

  return { isMobile };
}
