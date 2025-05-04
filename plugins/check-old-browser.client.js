/**
 * @description Определяет старый браузер на клиенте
 */

export default defineNuxtPlugin(() => {
  const isOldBrowser = useState('isOldBrowser', () => false);

  const version = {
    safari: 15,
    ios: 15,
    ie: 11,
    edge: 91,
    yandex: 21,
    opera: 77,
    firefox: 92,
    chrome: 91,
    samsung: 17.0,
  };

  if (process.client) {
    try {
      const userAgent = window.navigator.userAgent || '';
      let old = false;

      if (!userAgent) {
        isOldBrowser.value = false;
        return;
      }

      // Safari
      const isSafari =
        userAgent.includes('Safari') &&
        !userAgent.includes('Chrome') &&
        !userAgent.includes('Chromium');
      const safariMatch = userAgent.match(/Version\/(\d+)\.(\d+)/);
      if (isSafari && safariMatch) {
        const safariVersion = parseInt(safariMatch[1]);
        if (!isNaN(safariVersion) && safariVersion < version.safari) old = true;
      }

      // iOS WebView (например, приложения с WebView)
      const iosMatch = userAgent.match(/OS (\d+)_/);
      if (iosMatch) {
        const iosVersion = parseInt(iosMatch[1]);
        if (!isNaN(iosVersion) && iosVersion < version.ios) old = true;
      }

      // Internet Explorer
      const isIE =
        userAgent.includes('MSIE ') || userAgent.includes('Trident/');
      if (isIE) old = true;

      // Edge (до перехода на Chromium)
      const edgeMatch = userAgent.match(/Edge\/(\d+)/);
      if (edgeMatch) {
        const edgeVersion = parseInt(edgeMatch[1]);
        if (!isNaN(edgeVersion) && edgeVersion < version.edge) old = true;
      }

      // Yandex Browser
      const yandexMatch = userAgent.match(/YaBrowser\/(\d+)/);
      if (yandexMatch) {
        const yandexVersion = parseInt(yandexMatch[1]);
        if (!isNaN(yandexVersion) && yandexVersion < version.yandex) old = true;
      }

      // Opera
      const operaMatch = userAgent.match(/OPR\/(\d+)/);
      if (operaMatch) {
        const operaVersion = parseInt(operaMatch[1]);
        if (!isNaN(operaVersion) && operaVersion < version.opera) old = true;
      }

      // Firefox
      const firefoxMatch = userAgent.match(/Firefox\/(\d+)/);
      if (firefoxMatch) {
        const firefoxVersion = parseInt(firefoxMatch[1]);
        if (!isNaN(firefoxVersion) && firefoxVersion < version.firefox)
          old = true;
      }

      // Chrome
      const chromeMatch = userAgent.match(/Chrome\/(\d+)/);
      if (chromeMatch) {
        const chromeVersion = parseInt(chromeMatch[1]);
        if (!isNaN(chromeVersion) && chromeVersion < version.chrome) old = true;
      }

      // Samsung Internet
      const samsungMatch = userAgent.match(/SamsungBrowser\/(\d+)/);
      if (samsungMatch) {
        const samsungVersion = parseInt(samsungMatch[1]);
        if (!isNaN(samsungVersion) && samsungVersion < version.samsung)
          old = true;
      }

      isOldBrowser.value = old;
    } catch (e) {
      console.warn('Ошибка при определении старости браузера:', e);
      isOldBrowser.value = false;
    }

    if (isOldBrowser.value) {
      document.querySelector('body').classList.add('_old-browser');
    }
  }

  const oldBrowserCookie = useCookie('ignore-old-browser', {
    maxAge: 60 * 60 * 24 * 30, // 30 дней
    sameSite: 'Lax',
    secure: process.env.NODE_ENV === 'production',
  });

  return {
    provide: {
      oldBrowserCookie,
    },
  };
});
