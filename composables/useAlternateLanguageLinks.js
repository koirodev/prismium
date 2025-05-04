export default function useAlternateLanguageLinks() {
  const config = useRuntimeConfig();
  const route = useRoute();
  const { locale, locales } = useI18n();

  useHead(() => {
    const baseUrl = config.public.siteUrl;

    let pathWithoutLocale = route.fullPath;
    const localePattern = new RegExp(
      `^/(${locales.value.map((l) => l.code).join('|')})(/.*)$`
    );
    const match = pathWithoutLocale.match(localePattern);

    if (match) {
      pathWithoutLocale = match[2] || '/';
    }

    const links = locales.value.map((loc) => {
      let href = baseUrl;

      if (loc.code === locales.value[0].code) {
        href += pathWithoutLocale;
      } else {
        href += `/${loc.code}${pathWithoutLocale}`;
      }

      return {
        rel: 'alternate',
        hreflang: loc.iso,
        href,
      };
    });

    return {
      link: links,
    };
  });
}
