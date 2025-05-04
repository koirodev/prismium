/**
 * @description
 * Плагин для получения конфигурационных данных с API.
 * Данные сохраняются в состоянии приложения.
 */

export default defineNuxtPlugin(async () => {
  const configData = useState('configData', () => null);
  // const config = useRuntimeConfig();

  // if (!configData.value) {
  //   const { data } = await useFetch(`${config.public.apiUrl}/configs`);
  //   configData.value = data.value.data;
  // }
});
