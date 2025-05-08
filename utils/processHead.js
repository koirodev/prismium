/**
 * @description
 * Эта функция обрабатывает заголовок страницы, устанавливая заголовок, мета-теги и ссылку на каноническую версию.
 * Она принимает данные страницы, строку для лифбоя и объект конфигурации.
 * Если данные страницы содержат SEO-заголовок, он используется в качестве заголовка.
 * Если SEO-заголовок отсутствует, используется заголовок страницы или строка лифбоя.
 * Если ни один из них не задан, возвращается пустая строка.
 * Функция также добавляет каноническую ссылку на текущий путь и мета-теги для описания и индексации.
 * @param {Object} data - Данные страницы, содержащие SEO-заголовок и заголовок страницы.
 * @param {string} lifebuoy - Строка для лифбоя, которая используется в качестве заголовка, если SEO-заголовок и заголовок страницы отсутствуют.
 * @param {Object} configData - Объект конфигурации, содержащий имя сайта.
 * @returns {Object} - Объект с заголовком, ссылкой и мета-тегами.
 * @example
 * useHead(processHead(data || {}, 'Главная страница', configData || {}));
 */

import { SEO_TITLE_SUFFIX } from '~/config';

export default function processHead(props = {}) {
  const config = useRuntimeConfig();

  const title = (title) => {
    if (typeof title === 'string' && title) {
      return `${title}${postfix()}`;
    }

    return '';
  };

  const postfix = () => {
    if (props.postfix !== false) {
      return SEO_TITLE_SUFFIX ? ` | ${SEO_TITLE_SUFFIX}` : '| Prismium';
    }

    return '';
  };

  return {
    title: title(props.title),
    link: [
      {
        rel: 'canonical',
        href: `${config.public?.siteUrl || ''}${useRoute().path}`,
      },
    ],
    meta: [
      {
        name: 'description',
        content: typeof props.description === 'string' ? props.description : '',
      },
      {
        name: 'robots',
        content: isRobots() ? 'index, follow' : 'noindex, nofollow',
      },
    ],
  };
}
