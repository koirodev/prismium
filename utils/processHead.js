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

export default function processHead(data = {}, lifebuoy = '', configData = {}) {
  const config = useRuntimeConfig();
  
  const title = (seoTitle, pageTitle, lifebuoy) => {
    if (typeof seoTitle === 'string' && seoTitle) {
      return seoTitle;
    }
    if (typeof pageTitle === 'string' && pageTitle) {
      return `${pageTitle}${postfix()}`;
    }
    if (typeof lifebuoy === 'string' && lifebuoy) {
      return `${lifebuoy}${postfix()}`;
    }

    return '';
  };

  const postfix = () => (SEO_TITLE_SUFFIX ? ` | ${SEO_TITLE_SUFFIX}` : '');

  return {
    title: title(data?.seo_title, data?.pagetitle, lifebuoy),
    link: [
      {
        rel: 'canonical',
        href: `${config.public?.siteUrl || ''}${useRoute().path}`,
      },
    ],
    meta: [
      {
        name: 'description',
        content:
          typeof data?.seo_description === 'string' ? data.seo_description : '',
      },
      {
        name: 'robots',
        content:
          data?.searchable && isRobots()
            ? 'index, follow'
            : 'noindex, nofollow',
      },
    ],
  };
}
