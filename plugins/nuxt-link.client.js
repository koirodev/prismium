/**
 * @description
 * Плагин для обработки ссылок в приложении Nuxt.
 * Он предотвращает переход по ссылкам, которые ведут на ту же страницу,
 * и прокручивает страницу вверх при клике на такие ссылки.
 * Также закрывает меню бургера, если оно открыто.
 * Этот плагин работает только на клиенте.
 */

import { useBurgerStore } from '~/stores/burgerStore';

export default defineNuxtPlugin(() => {
  if (process.client) {
    const burgerStore = useBurgerStore();

    document.addEventListener('click', (e) => {
      const link = e.target.closest('a');

      if (!link) return;
      if (link.target === '_blank') return;

      const hrefAttr = link.getAttribute('href');
      if (hrefAttr && hrefAttr.startsWith('#')) {
        burgerStore.closeBurger();
        return;
      }

      const { origin, pathname } = window.location;
      const linkUrl = new URL(link.href);

      if (linkUrl.origin === origin && linkUrl.pathname === pathname) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        burgerStore.closeBurger();
      }
    });
  }
});
