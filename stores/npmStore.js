export const useNPMStore = defineStore('npm', () => {
  const packageUrl = ref('https://www.npmjs.com/package/prismium');
  const data = ref([]);
  const version = ref('4.0.0');
  const versionPrefix = ref('v');

  const releaseDateRaw = ref(null);
  const { locale } = useI18n();

  const releaseDate = computed(() => {
    if (!releaseDateRaw.value) return null;

    const localeMap = { en: 'en-US', ru: 'ru-RU', zh: 'zh-CN' };
    const currentLocale = localeMap[locale.value] || locale.value;

    return new Intl.DateTimeFormat(currentLocale, {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }).format(releaseDateRaw.value);
  });

  async function fetchData() {
    try {
      const { data: npmjs } = await useFetch(
        'https://registry.npmjs.org/prismium/latest'
      );
      if (npmjs.value) {
        data.value = npmjs.value;
        version.value = npmjs.value.version;

        if (
          npmjs.value._npmOperationalInternal &&
          npmjs.value._npmOperationalInternal.tmp
        ) {
          const timestampMatch =
            npmjs.value._npmOperationalInternal.tmp.match(/\d{13}/);
          if (timestampMatch) {
            releaseDateRaw.value = new Date(parseInt(timestampMatch[0]));
          }
        } else {
          releaseDateRaw.value = new Date();
        }
      }
    } catch (error) {
      console.error('Failed to fetch package version:', error);
    }
  }

  if (!data.value.length) {
    fetchData();
  }

  return {
    packageUrl,
    data,
    version,
    versionPrefix,
    releaseDate,
  };
});
