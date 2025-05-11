// import { defineSitemapEventHandler } from '#imports';

// export default defineSitemapEventHandler(async () => {
//   const languages = ['en', 'ru', 'zh'];
//   const routes = [
//     { link: '/', priority: 1.0, changefreq: 'daily' },
//     { link: '/get-started', priority: 0.9, changefreq: 'weekly' },
//     { link: '/core', priority: 0.75, changefreq: 'weekly' },
//     { link: '/react', priority: 0.6, changefreq: 'weekly' },
//     { link: '/vue', priority: 0.6, changefreq: 'weekly' },
//     { link: '/demos', priority: 0.3, changefreq: 'monthly' },
//     { link: '/constrictor', priority: 0.3, changefreq: 'monthly' },
//   ];

//   const sitemapSources = languages.flatMap((lang) =>
//     routes.map((route) => ({
//       url: lang === 'en' ? route.link : `/${lang}${route.link}`,
//       changefreq: route.changefreq,
//       priority: route.priority,
//     }))
//   );

//   return sitemapSources;
// });
