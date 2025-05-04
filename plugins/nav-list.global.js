/**
 * @description
 * Плагин для инициализации навигационного списка.
 * Этот плагин инициализирует состояние навигационного списка
 * и загружает данные с API, если они еще не загружены.
 */

export default defineNuxtPlugin(async () => {
  const navList = useState('navList', () => null);
  // const config = useRuntimeConfig();

  // const company = { menuindex: 0, pagetitle: 'Компания', children: [] };
  // const vehicles = { menuindex: 2, pagetitle: 'Парк техники', children: [] };
  // const coop = { menuindex: 4, pagetitle: 'Сотрудничество', children: [] };

  // if (!navList.value) {
  //   const { data } = await useFetch(`${config.public.apiUrl}/site-menu`);

  //   let originalData = data.value.data;
  //   originalData.forEach((item) => {
  //     // Главная удаляем
  //     if (item.id === 1) {
  //       originalData = originalData.filter((i) => i.id !== 1);
  //     }

  //     // Услуги { id }
  //     if (item.id === 4) {
  //       navServices.value = item;
  //     }

  //     // Компания { id }
  //     [15, 76, 77].forEach((id) => {
  //       if (item.id === id) {
  //         company.children.push(item);
  //         originalData = originalData.filter((i) => i.id !== id);
  //       }
  //     });

  //     // Парк техники { template: 8 }
  //     if (item.template === 8) {
  //       vehicles.children.push(item);
  //       originalData = originalData.filter((i) => i.template !== 8);
  //     }

  //     // Сотрудничество { template: 16 }
  //     if (item.template === 16) {
  //       coop.children.push(item);
  //       originalData = originalData.filter((i) => i.template !== 16);
  //     }
  //   });

  //   // Собираем и сортируем навигацию
  //   navList.value = [...originalData, company, vehicles, coop].sort(
  //     (a, b) => {
  //       if (a.menuindex > b.menuindex) return 1;
  //       if (a.menuindex < b.menuindex) return -1;
  //       return 0;
  //     }
  //   );
  // }
});
