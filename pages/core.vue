<script setup>
import codeHtmlLayout from '~/examples/full-html/index.html?raw';

const { t: $t } = useI18n();
const i18nPage = ref('pages.core');

useHead(
  processHead({
    title: $t(`${i18nPage.value}.seo.title`),
    description: $t(`${i18nPage.value}.seo.description`),
  })
);
</script>

<template>
  <div>
    <AppBreadcrumbs
      :items="[
        {
          title: $t('pages.home.common.breadcrumbs'),
          to: $t('pages.home.common.link'),
        },
        {
          title: $t(`${i18nPage}.common.breadcrumbs`),
          to: $t(`${i18nPage}.common.link`),
        },
      ]"
    />

    <SectionsTitle :title="$t(`${i18nPage}.h1`)" />

    <SectionsDocs class="section_padding_bottom">
      <h2><strong>Prismium</strong> полный HTML шаблон</h2>
      <AppCode max-height="unset" language="html">{{ codeHtmlLayout }}</AppCode>

      <h2>Стили <strong>Prismium</strong></h2>
      <p>
        Библиотека Prismium содержит предустановленный стили <b>CSS</b> и
        <b>SCSS</b>
      </p>

      <h3>CSS стили</h3>
      <p><b>CSS</b> стили для локального использования <b>(без npm)</b>:</p>
      <ul>
        <li><AppCode small>prismium.css</AppCode> — базовый набор стилей</li>
        <li>
          <AppCode small>prismium.min.css</AppCode> — минифицированный базовый
          набор стилей
        </li>
        <li>
          <AppCode small>prismium-bundle.css</AppCode> — набор всех стилей
          Prismium, включая темы
        </li>
        <li>
          <AppCode small>prismium-bundle.min.css</AppCode> — минифицированный
          набор всех стилей <b>Prismium</b>, включая темы
        </li>
      </ul>
      <p><b>CSS</b> стили для использования через <b>NPM</b></p>
      <ul>
        <li><AppCode small>prismium/css</AppCode> — базовый набор стилей</li>
        <li>
          <AppCode small>prismium/css/bundle</AppCode> — набор всех стилей
          Prismium, включая темы
        </li>
      </ul>

      <h3>SCSS стили</h3>
      <ul>
        <li><AppCode small>prismium/scss</AppCode> — базовый набор стилей</li>
        <li>
          <AppCode small>prismium/scss/bundle</AppCode> — набор всех стилей
          Prismium, включая темы
        </li>
      </ul>

      <h3>Темы Prismium</h3>
      <AppAccordion title="Темы (без NPM)">
        <div class="article">
          <ul>
            <li>
              <AppCode small>/themes/dark.css</AppCode> — темная тема,
              вдохновлена свежи асфальтом на треках Ф-1
            </li>
            <li>
              <AppCode small>/themes/dark.min.css</AppCode> — темная тема
              (минифицированная)
            </li>
            <li>
              <AppCode small>/themes/dark-contrast.css</AppCode> — контрастная
              темная тема
            </li>
            <li>
              <AppCode small>/themes/dark-contrast.min.css</AppCode> —
              контрастная темная тема (минифицированная)
            </li>
            <AppSeparator />
            <li>
              <AppCode small>/themes/light.css</AppCode> — светлая тема с
              нотками легкости
            </li>
            <li>
              <AppCode small>/themes/light.min.css</AppCode> — светлая тема
              (минифицированная)
            </li>
            <li>
              <AppCode small>/themes/light-contrast.css</AppCode> — контрастная
              светлая тема
            </li>
            <li>
              <AppCode small>/themes/light-contrast.min.css</AppCode> —
              контрастная светлая тема (минифицированная)
            </li>
            <AppSeparator />
            <li>
              <AppCode small>/themes/forest.css</AppCode> — светлая тема,
              вдохновленная бамбуковой рощей в Арасияме
            </li>
            <li>
              <AppCode small>/themes/forest.min.css</AppCode> — тоже самое
              (минифицированная)
            </li>
            <AppSeparator />
            <li>
              <AppCode small>/themes/ocean.css</AppCode> — светлая тема,
              вдохновленная индийским океаном
            </li>
            <li>
              <AppCode small>/themes/ocean.min.css</AppCode> — тоже самое
              (минифицированная)
            </li>
            <AppSeparator />
            <li>
              <AppCode small>/themes/sunset.css</AppCode> — светлая тема,
              вдохновленная закатами в Сиднее
            </li>
            <li>
              <AppCode small>/themes/sunset.min.css</AppCode> — тоже самое
              (минифицированная)
            </li>
          </ul>
        </div>
      </AppAccordion>
      <AppAccordion title="Импорт тем (через NPM)">
        <div class="article">
          <ul>
            <li>
              <AppCode small>prismium/theme/dark</AppCode> — темная тема,
              вдохновлена свежи асфальтом на треках Ф-1
            </li>
            <li>
              <AppCode small>prismium/theme/dark-contrast</AppCode> —
              контрастная темная тема
            </li>
            <AppSeparator />
            <li>
              <AppCode small>prismium/theme/light</AppCode> — светлая тема с
              нотками легкости
            </li>
            <li>
              <AppCode small>prismium/theme/light-contrast</AppCode> —
              контрастная светлая тема
            </li>
            <AppSeparator />
            <li>
              <AppCode small>prismium/theme/forest</AppCode> — светлая тема,
              вдохновленная бамбуковой рощей в Арасияме
            </li>
            <AppSeparator />
            <li>
              <AppCode small>prismium/theme/ocean</AppCode> — светлая тема,
              вдохновленная индийским океаном
            </li>
            <AppSeparator />
            <li>
              <AppCode small>prismium/theme/sunset</AppCode> — светлая тема,
              вдохновленная закатами в Сиднее
            </li>
          </ul>
        </div>
      </AppAccordion>

      <h2>Инициализация <strong>Prismium</strong> в проекте</h2>
      <p>
        Отлично, мы реализовали HTML шаблон <b>Prismium</b> и подключили
        необходимые стили. Теперь можно приступить к инициализации.
      </p>
      <p>
        Чтобы инициализировать <b>Prismium</b>, вам понадобится вызвать класс
        <AppCode small>Prismium(element, parameters)</AppCode>
      </p>
      <ul>
        <li>
          <AppCode small>element</AppCode> — HTMLElement или строка (CSS
          селектор). <b>Обязательный параметр!</b>
        </li>
        <li>
          <AppCode small>parameters</AppCode> — Object с параметрами
          инициализации.
        </li>
      </ul>
      <p>
        <b>Пример инициализации <b>Prismium</b>:</b>
      </p>
      <AppCode language="javascript">
        <pre><code>new Prismium('[data-prismium]', {
  speed: 500,
  autoClose: true,
  autoCloseNested: true,
});</code></pre>
      </AppCode>
      <p>
        После инициализации <b>Prismium</b> у вас появится доступ к его
        экземпляру через HTMLElement:
      </p>
      <AppCode language="javascript">
        <pre><code>const prismium = document.querySelector('[data-prismium]').prismium

// For example, to open an element
prismium.open();</code></pre>
      </AppCode>

      <h2>Параметры <strong>Prismium</strong></h2>
      <table>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Тип</th>
            <th>По умолчанию</th>
            <th>Описание</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><AppCode class="name" small-clear>init</AppCode></td>
            <td><AppCode class="type" small-clear>boolean</AppCode></td>
            <td><AppCode class="default" small-clear>true</AppCode></td>
            <td class="description">
              <p>
                Параметр для автоматической инициализации Prismium сразу после
                вызова класса.
              </p>
              <AppCode language="javascript">
                <pre><code>const prismium = new Prismium(element, { init: false });

/* logic before Prismium initialization */

prismium.init();</code></pre>
              </AppCode>
            </td>
          </tr>
          <tr>
            <td><AppCode class="name" small-clear>theme</AppCode></td>
            <td><AppCode class="type" small-clear>string</AppCode></td>
            <td></td>
            <td class="description">
              <p>
                Устанавливает тему Prismium. Доступные темы:
                <br />
                <AppCode backtick>dark</AppCode>,
                <AppCode backtick>dark-contrast</AppCode>,
                <AppCode backtick>light</AppCode>,
                <AppCode backtick>light-contrast</AppCode>,
                <AppCode backtick>forest</AppCode>,
                <AppCode backtick>ocean</AppCode>,
                <AppCode backtick>sunset</AppCode>
              </p>
            </td>
          </tr>
          <tr>
            <td><AppCode class="name" small-clear>speed</AppCode></td>
            <td><AppCode class="type" small-clear>number | object</AppCode></td>
            <td><AppCode class="default" small-clear>350</AppCode></td>
            <td class="description">
              <p>
                Устанавливает скорость анимации открытия и закрытия Prismium.
              </p>
              <AppCode language="javascript">
                <pre><code>new Prismium(element, {
  speed: {
    open: 500,
    close: 500,
  },
});</code></pre>
              </AppCode>
            </td>
          </tr>
          <tr>
            <td><AppCode class="name" small-clear>autoClose</AppCode></td>
            <td><AppCode class="type" small-clear>boolean</AppCode></td>
            <td><AppCode class="default" small-clear>false</AppCode></td>
            <td class="description">
              <p>
                Определяет, будет ли Prismium закрываться при открытии других
                Prismium первого уровня.
              </p>
            </td>
          </tr>
          <tr>
            <td><AppCode class="name" small-clear>autoCloseNested</AppCode></td>
            <td><AppCode class="type" small-clear>boolean</AppCode></td>
            <td><AppCode class="default" small-clear>false</AppCode></td>
            <td class="description">
              <p>
                Определяет, будут ли вложенные Prismium закрываться при открытии
                других вложенных Prismium в родительском Prismium.
              </p>
            </td>
          </tr>
          <tr>
            <td><AppCode class="name" small-clear>getParentHeight</AppCode></td>
            <td><AppCode class="type" small-clear>boolean</AppCode></td>
            <td><AppCode class="default" small-clear>false</AppCode></td>
            <td class="description">
              <p>
                Определяет, откуда будет браться высота при открытии. При
                установке
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </SectionsDocs>
  </div>
</template>
