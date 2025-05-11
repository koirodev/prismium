<script setup>
import codeHtmlLayout from '~/examples/full-html/index.html?raw';
import codeIconStatic from '~/examples/all-icons/static.html?raw';
import codeIconSprite from '~/examples/all-icons/sprite.html?raw';
import codeIconDynamic from '~/examples/all-icons/dynamic.html?raw';

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
      <h2 id="full-html-layout" v-html="$t(`${i18nPage}.full_html.title`)"></h2>
      <AppCode max-height="unset" lang="html">{{ codeHtmlLayout }}</AppCode>

      <h2 id="prismium-icons" v-html="$t(`${i18nPage}.icons.title`)"></h2>
      <p v-html="$t(`${i18nPage}.icons.description`)"></p>
      <h3
        id="prismium-static-icon"
        v-html="$t(`${i18nPage}.icons.static.title`)"
      ></h3>
      <p v-html="$t(`${i18nPage}.icons.static.description`)"></p>
      <AppCode lang="html">{{ codeIconStatic }}</AppCode>
      <h3 id="prismium-svg-sprite">
        {{ $t(`${i18nPage}.icons.sprite.title`) }}
      </h3>
      <p v-html="$t(`${i18nPage}.icons.sprite.description`)"></p>
      <h3 id="prismium-dynamic-icon">
        {{ $t(`${i18nPage}.icons.dynamic.title`) }}
      </h3>
      <p v-html="$t(`${i18nPage}.icons.dynamic.description`)"></p>
      <AppCode lang="html">{{ codeIconDynamic }}</AppCode>

      <h2 id="prismium-styles">Стили <strong>Prismium</strong></h2>
      <p>
        Библиотека Prismium содержит предустановленный стили <b>CSS</b> и
        <b>SCSS</b>
      </p>

      <h3 id="css-styles">CSS стили</h3>
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

      <h3 id="scss-styles">SCSS стили</h3>
      <ul>
        <li><AppCode small>prismium/scss</AppCode> — базовый набор стилей</li>
        <li>
          <AppCode small>prismium/scss/bundle</AppCode> — набор всех стилей
          Prismium, включая темы
        </li>
      </ul>

      <h3 id="prismium-themes">Темы Prismium</h3>
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

      <h2 id="prismium-initialization">
        Инициализация <strong>Prismium</strong> в проекте
      </h2>
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
      <AppCode lang="js">
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
      <AppCode lang="js">
        <pre><code>const prismium = document.querySelector('[data-prismium]').prismium

// For example, to open an element
prismium.open();</code></pre>
      </AppCode>

      <h2 id="prismium-parameters">Параметры <strong>Prismium</strong></h2>
      <ElementsDocsItem
        id="param-init"
        title="init"
        type="boolean"
        default="true"
      >
        <template #default>
          Параметр для автоматической инициализации <b>Prismium</b> сразу после
          вызова класса.
        </template>
        <template #note>
          <AppCode lang="js">
            <pre><code>const prismium = new Prismium('[data-prismium]', {
  init: false,
});

/* logic before Prismium initialization */

prismium.init();</code></pre>
          </AppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="param-opened"
        title="opened"
        type="boolean"
        default="false"
      >
        <template #default>
          Определяет будет ли <b>Prismium</b> открытым по умолчанию.
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="param-disabled"
        title="disabled"
        type="boolean"
        default="false"
      >
        <template #default>
          Определяет будет ли возможность взаимодействия с <b>Prismium</b> по
          умолчанию.
          <b
            >Отключает взаимодействие (открытие/закрытие) даже при помощи
            методов!</b
          >
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="param-theme"
        title="theme"
        type="PrismiumTheme"
        default="'clear'"
      >
        <template #default>
          Устанавливает тему <b>Prismium</b> из существующих наборов.
        </template>
        <template #note>
          <AppCode lang="ts">
            <pre><code>type PrismiumTheme = 
  | 'clear'
  | 'light'
  | 'dark'
  | 'light-contrast'
  | 'dark-contrast'
  | 'forest'
  | 'ocean'
  | 'sunset'
  | {[key: string]: boolean};</code></pre>
          </AppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="param-speed"
        title="speed"
        type="number | { open?: number; close?: number; }"
        default="350"
      >
        <template #default>
          Устанавливает скорость анимации открытия и закрытия <b>Prismium</b>.
        </template>
        <template #note>
          <AppCode lang="js">
            <pre><code>new Prismium('[data-prismium]', {
  speed: {
    open: 500,
    close: 500,
  },
});</code></pre>
          </AppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="param-auto-close"
        title="autoClose"
        type="boolean"
        default="false"
      >
        <template #default>
          Определяет, будет ли <b>Prismium</b> закрываться при открытии других
          <b>Prismium</b> первого уровня.
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="param-auto-close-nested"
        title="autoCloseNested"
        type="boolean"
        default="false"
      >
        <template #default>
          Определяет, будут ли вложенные <b>Prismium</b> закрываться при
          открытии других вложенных <b>Prismium</b> в родительском
          <b>Prismium</b>.
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="param-get-parent-height"
        title="getParentHeight"
        type="boolean"
        default="false"
      >
        <template #default>
          Определяет источник высоты при открытии. Необходимо для плавной
          анимации раскрытия <b>Prismium</b>, по умолчанию высота берется исходя
          их высоты контента
          <i
            >(по умолчанию
            <code class="local-code">`[data-prismium-content]`</code>)</i
          >. При установленном значении
          <code class="local-code">`true`</code> высота будет браться из
          родительского элемента
          <i>(по умолчанию <code class="local-code">`[data-prismium]`</code>)</i
          >.
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="param-scroll-to"
        title="scrollTo"
        type="boolean | { offset?: number; behavior?: ScrollBehavior; }"
        default="false"
      >
        <template #default>
          Определяет, будет ли <b>Prismium</b> прокручивать страницу к
          открываемому элементу.
        </template>
        <template #note>
          <AppCode lang="ts">
            <pre><code>type ScrollBehavior = 
  | 'auto'
  | 'instant'
  | 'smooth'</code></pre>
          </AppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="param-sprite-path"
        title="spritePath"
        type="string"
        default="'sprite.svg'"
      >
        <template #default>
          Необходимо для поддержки смены иконки в <b>Prismium</b> через спрайт
          при открытии/закрытии.
        </template>
        <template #note>
          <AppCode lang="html">{{ codeIconSprite }}</AppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="param-icon-attribute"
        title="iconAttribute"
        type="string"
        default="'data-prismium-icon'"
      >
        <template #default>
          Указывает атрибут, который будет использоваться для
          <b>HTML-элемента</b> иконки. Допустимы только <b>data</b> и
          <b>HTML-атрибуты</b>.
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="param-container-selectors"
        title="containerSelectors"
        type="string | string[]"
        default="['[data-prismium-container]']"
      >
        <template #default>
          Указывает селекторы, которые будут использоваться для поиска
          контейнера <b>Prismium</b>.
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="param-current-selector"
        title="currentSelector"
        type="string"
        default="'[data-prismium-current]'"
      >
        <template #default>
          Указывает селектор элемента, который будет использоваться для открытия
          <b>Prismium</b>.
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="param-content-selector"
        title="contentSelector"
        type="string"
        default="'[data-prismium-content]'"
      >
        <template #default>
          Указывает селектор элемента, который будет использоваться для поиска
          контента внутри <b>Prismium</b>.
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="param-hidden-selector"
        title="hiddenSelector"
        type="string"
        default="'[data-prismium-hidden]'"
      >
        <template #default>
          Указывает селектор элемента, который будет использоваться для поиска
          технического контейнера <b>Prismium</b>. Контейнер не является
          обязательным в DOM-дереве. Смотреть
          <a href="#full-html-layout">полный HTML шаблон</a>.
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="param-active-class"
        title="activeClass"
        type="string"
        default="'prismium-active'"
      >
        <template #default>
          Указывает класс активного <b>Prismium</b>. Может использоваться для
          установки активного состояния. <br />
          <b>Не рекомендуется изменять!</b> Участвует в стилях
          <b>Prismium</b> по умолчанию.
        </template>
        <template #note>
          <p>
            Для установки активного состояния <b>Prismium</b> по умолчанию,
            необходимо добавить класс
            <code class="local-code">`prismium-active`</code> к элементу
            <code class="local-code">`[data-prismium]`</code>. <br /><b
              >Например:</b
            >
            <AppCode lang="html">
              <pre><code>&lt;div class="prismium-active" data-prismium&gt;
  &lt;div data-prismium-current&gt;&lt;/div&gt;
  &lt;div data-prismium-content&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
            </AppCode>
          </p></template
        >
      </ElementsDocsItem>

      <ElementsDocsItem
        id="param-opened-class"
        title="openedClass"
        type="string"
        default="'prismium-opened'"
      >
        <template #default>
          Указывает класс технического контейнера <b>Prismium</b> после полного
          раскрытия. <br />
          <b>Не рекомендуется изменять!</b> Участвует в стилях
          <b>Prismium</b> по умолчанию.
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="param-disabled-class"
        title="disabledClass"
        type="string"
        default="'prismium-disabled'"
      >
        <template #default>
          Указывает класс выключенного <b>Prismium</b>. Может использоваться для
          установки выключенного состояния. Не влияет на состояние
          <b>Prismium</b> (открыт/закрыт) по умолчанию. <br />
          <b>Не рекомендуется изменять!</b> Участвует в стилях
          <b>Prismium</b> по умолчанию.
        </template>
        <template #note>
          <p>
            Для установки выключенного состояния <b>Prismium</b> по умолчанию,
            необходимо добавить класс
            <code class="local-code">`prismium-disabled`</code> к элементу
            <code class="local-code">`[data-prismium]`</code>. <br /><b
              >Например:</b
            >
            <AppCode lang="html">
              <pre><code>&lt;div class="prismium-disabled" data-prismium&gt;
  &lt;div data-prismium-current&gt;&lt;/div&gt;
  &lt;div data-prismium-content&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
            </AppCode>
          </p></template
        >
      </ElementsDocsItem>

      <ElementsDocsItem id="param-on" title="on" type="object">
        <template #default>
          Используется для установки событий на экземпляр <b>Prismium</b>.
        </template>
        <template #note>
          <AppCode lang="js">
            <pre><code>const prismium = new Prismium('[data-prismium]', {
  on: {
    BeforeOpen: (prismium) => {
      console.log(prismium);
    },
    close: (prismium) => {
      console.log(prismium);
    },
  }
});</code></pre>
          </AppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="param-on-any"
        title="onAny"
        type="function(handler)"
      >
        <template #default>
          Add event listener that will be fired on all events
        </template>
        <template #note>
          <AppCode lang="js">
            <pre><code>const prismium = new Prismium('[data-prismium]', {
  onAny: (handler, priority) => {
    console.log(handler);
  }
});</code></pre>
          </AppCode>
        </template>
      </ElementsDocsItem>

      <h2>Эффекты <strong>Prismium</strong></h2>
      <ElementsDocsItem id="param-effect" title="effect" type="string">
        <template #default>
          Используется для установки эффекта открытия/закрытия <b>Prismium</b>.
          <br />
          Доступные эффекты: <code class="local-code">`line-by-line`</code>,
          <code class="local-code">`fade-scale`</code>,
          <code class="local-code">`slide`</code>,
          <code class="local-code">`stagger`</code>,
          <code class="local-code">`wave`</code>,
          <code class="local-code">`flip`</code>,
          <code class="local-code">`zoom`</code>,
          <code class="local-code">`cascade`</code>,
          <code class="local-code">`custom`</code>. Требует подключения модуля
          эффектов. Если вы используете бандл, то он уже подключен.
        </template>
        <template #note>
          <AppCode lang="js">
            <pre><code>import Prismium from 'prismium';
// Module connection
import { EffectsModule } from 'prismium/modules';

new Prismium('[data-prismium]', {
  // Module initializing
  modules: [EffectsModule],
  effect: 'line-by-line',
});</code></pre>
          </AppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="param-effect-selectors"
        title="effectSelectors"
        type="string | string[]"
      >
        Определяет селекторы, которые будут использоваться для поиска элементов
        эффекта. По умолчанию <b>Prismium</b> анимирует первых детей
        <code class="local-code">`[data-prismium-content]`</code>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="param-effect-ignore"
        title="effectIgnore"
        type="string | string[]"
      >
        Определяет элементы с селектором, которые будут игнорироваться при
        анимации эффекта.
      </ElementsDocsItem>

      <ElementsDocsItem
        id="param-effect-line-by-line"
        title="effectLineByLine"
        type="object"
      >
        <template #note>
          <AppCode lang="js">
            <pre><code>new Prismium('[data-prismium]', {
  effect: 'line-by-line',
  effectLineByLine: {
    speed: 350,
    easing: 'cubic-bezier(.25,.1,.25,1)',
    delay: 30,
    scale: 0.95,
    y: 30,
    x: 0,
    opacity: 0,
  },
});</code></pre>
          </AppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="param-effect-fade-scale"
        title="effectFadeScale"
        type="object"
      >
        <template #note>
          <AppCode lang="js">
            <pre><code>new Prismium('[data-prismium]', {
  effect: 'fade-scale',
  effectFadeScale: {
    speed: 400,
    easing: 'cubic-bezier(.25,.1,.25,1)',
    scale: 0.9,
    opacity: 0,
  },
});</code></pre>
          </AppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="param-effect-slide"
        title="effectSlide"
        type="object"
      >
        <template #note>
          <AppCode lang="js">
            <pre><code>new Prismium('[data-prismium]', {
  effect: 'slide',
  effectSlide: {
    speed: 400,
    easing: 'cubic-bezier(.25,.1,.25,1)',
    direction: 'up',
    distance: 30,
    opacity: 0,
  },
});</code></pre>
          </AppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="param-effect-stagger"
        title="effectStagger"
        type="object"
      >
        <template #note>
          <AppCode lang="js">
            <pre><code>new Prismium('[data-prismium]', {
  effect: 'stagger',
  effectStagger: {
    speed: 400,
    easing: 'cubic-bezier(.25,.1,.25,1)',
    delay: 50,
    directions: ['up', 'right', 'down', 'left'],
    distance: 30,
    opacity: 0,
  },
});</code></pre>
          </AppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem id="param-effect-wave" title="effectWave" type="object">
        <template #note>
          <AppCode lang="js">
            <pre><code>new Prismium('[data-prismium]', {
  effect: 'wave',
  effectWave: {
    speed: 400,
    easing: 'cubic-bezier(.25,.1,.25,1)',
    delay: 30,
    amplitude: 20,
    frequency: 2,
    opacity: 0,
  },
});</code></pre>
          </AppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem id="param-effect-flip" title="effectFlip" type="object">
        <template #note>
          <AppCode lang="js">
            <pre><code>new Prismium('[data-prismium]', {
  effect: 'flip',
  effectFlip: {
    speed: 600,
    easing: 'cubic-bezier(.25,.1,.25,1)',
    delay: 50,
    perspective: 1000,
    rotation: 90,
    opacity: 0,
  },
});</code></pre>
          </AppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem id="param-effect-zoom" title="effectZoom" type="object">
        <template #note>
          <AppCode lang="js">
            <pre><code>new Prismium('[data-prismium]', {
  effect: 'zoom',
  effectZoom: {
    speed: 500,
    easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    delay: 50,
    scale: 0.1,
    opacity: 0,
    origins: [
      'top left',
      'top right',
      'bottom left',
      'bottom right',
      'center',
    ],
  },
});</code></pre>
          </AppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="param-effect-cascade"
        title="effectCascade"
        type="object"
      >
        <template #note>
          <AppCode lang="js">
            <pre><code>new Prismium('[data-prismium]', {
  effect: 'cascade',
  effectCascade: {
    speed: 600,
    easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    delay: 100,
    rotation: 15,
    distance: 50,
    opacity: 0,
  },
});</code></pre>
          </AppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="param-effect-custom"
        title="effectCustom"
        type="object"
      >
        <template #default>
          Используется для создания кастомного эффекта открытия/закрытия.
          <ul>
            <li>
              <code class="local-code">`speed`</code> — необходим для
              правильного подсчета конечной точки анимации. Доступен через
              <code class="local-code">`prismium.effect.open`</code> в событиях.
            </li>
            <li>
              <code class="local-code">`delay`</code> — необходим для
              правильного подсчета конечной точки анимации. Доступен через
              <code class="local-code">`prismium.effect.delay`</code> в
              событиях.
            </li>
            <li>
              <code class="local-code">`setup`</code> — событие срабатывает
              непосредственно перед закрытием или открытием экземпляра
              <b>Prismium</b>.
              <ul>
                <li>
                  <code class="local-code">`prismium`</code> — экземпляр
                  <b>Prismium</b>.
                </li>
                <li>
                  <code class="local-code">`children`</code> — HTML-элемент
                  ребенка
                </li>
                <li>
                  <code class="local-code">`index`</code> — индекс ребенка.
                  Отсчитывается с 0.
                </li>
                <li>
                  <code class="local-code">`total`</code> — общее количество
                  детей с эффектом
                </li>
                <li>
                  <code class="local-code">`isOpening`</code> — определяет
                  открывается ли <b>Prismium</b> или закрывается
                </li>
              </ul>
            </li>
            <li>
              <code class="local-code">`open`</code> — событие срабатывает при
              открытии экземпляра <b>Prismium</b>.
              <ul>
                <li>
                  <code class="local-code">`prismium`</code> — экземпляр
                  <b>Prismium</b>.
                </li>
                <li>
                  <code class="local-code">`children`</code> — HTML-элемент
                  ребенка
                </li>
                <li>
                  <code class="local-code">`index`</code> — индекс ребенка.
                  Отсчитывается с 0.
                </li>
                <li>
                  <code class="local-code">`total`</code> — общее количество
                  детей с эффектом
                </li>
              </ul>
            </li>
            <li>
              <code class="local-code">`close`</code> — событие срабатывает при
              закрытии экземпляра <b>Prismium</b>.
              <ul>
                <li>
                  <code class="local-code">`prismium`</code> — экземпляр
                  <b>Prismium</b>.
                </li>
                <li>
                  <code class="local-code">`children`</code> — HTML-элемент
                  ребенка
                </li>
                <li>
                  <code class="local-code">`index`</code> — индекс ребенка.
                  Отсчитывается с 0.
                </li>
                <li>
                  <code class="local-code">`total`</code> — общее количество
                  детей с эффектом
                </li>
              </ul>
            </li>
            <li>
              <code class="local-code">`cleanup`</code> — событие срабатывает
              непосредственно после закрытия или открытия экземпляра
              <b>Prismium</b>. Как правило используется для очистки от ранее
              установленных стилей.
              <ul>
                <li>
                  <code class="local-code">`prismium`</code> — экземпляр
                  <b>Prismium</b>.
                </li>
                <li>
                  <code class="local-code">`children`</code> — HTML-элемент
                  ребенка
                </li>
                <li>
                  <code class="local-code">`index`</code> — индекс ребенка.
                  Отсчитывается с 0.
                </li>
                <li>
                  <code class="local-code">`total`</code> — общее количество
                  детей с эффектом
                </li>
                <li>
                  <code class="local-code">`isOpening`</code> — определяет
                  открывается ли <b>Prismium</b> или закрывается
                </li>
              </ul>
            </li>
          </ul>
        </template>
        <template #note>
          <AppCode lang="js">
            <pre><code>new Prismium('[data-prismium]', {
  effect: 'custom',
  effectCustom: {
    speed: 400,
    delay: 100,
    setup: (prismium, child, index, total, isOpening) => {
      const speed = prismium.effect.speed;
      const delay = prismium.effect.delay;

      if (isOpening) {
        child.style.opacity = '0';
      } else {
        child.style.opacity = '1';
      }

      setTimeout(() => {
        child.style.transition = `all ${speed}ms ease ${index * delay}ms`;
      }, 0);
    },
    open: (prismium, child, index, total) => {
      child.style.opacity = '1';
    },
    close: (prismium, child, index, total) => {
      child.style.opacity = '0';
    },
    cleanup: (prismium, child, index, total, isOpening) => {
      child.style.removeProperty('opacity');
    },
  },
});</code></pre>
          </AppCode>
        </template>
      </ElementsDocsItem>

      <h2>Статические методы</h2>
      <ElementsDocsItem
        id="static-method-init"
        title="init()"
        :params="['el: HTMLElement']"
        return="Prismium instance"
      >
        <template #default>
          Инициализирует экземпляр <b>Prismium</b> на переданном элементе
          <code class="local-code">`el`</code>. <br />
        </template>
        <template #note>
          <AppCode lang="js">
            <pre><code>const prismium = document.querySelector('[data-prismium]');

Prismium.init();</code></pre>
          </AppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="static-method-use"
        title="use()"
        :params="['selector: string | HTMLElement']"
        return="void"
      >
        <template #default>
          Регистрирует модуль, который будет использоваться <b>Prismium</b>.
        </template>
        <template #note>
          <AppCode lang="js">
            <pre><code> import Prismium from 'prismium';
import { EffectsModule } from 'prismium/modules';

Prismium.use([EffectsModule]);

const prismium = new Prismium('[data-prismium]', {
  effect: 'line-by-line',
  effectLineByLine: {
    // effect options
  },
});</code></pre>
          </AppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="static-get-instance"
        title="getInstance()"
        :params="['el: HTMLElement | string']"
        return="Prismium instance"
      >
        <template #default> </template>
        <template #note>
          <AppCode lang="js">
            <pre><code>const element = document.querySelector('[data-prismium]');

Prismium.getInstance(element);
// or
Prismium.getInstance('[data-prismium]');
//or
element.prismium</code></pre>
          </AppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="static-method-open"
        title="open()"
        :params="['selector: string | HTMLElement']"
        return="Prismium constructor"
      >
        <template #default>Открывает один экземпляр <b>Prismium</b></template>
        <template #note>
          <AppCode lang="js">
            <pre><code>const prismium = document.querySelector('[data-prismium]');

Prismium.open(prismium);
// or
Prismium.open('[data-prismium]');</code></pre>
          </AppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="static-method-open-all"
        title="openAll()"
        :params="['container: string | HTMLElement', 'selector?: string']"
        return="void"
      >
        <template #default>
          Открывает все экземпляры <b>Prismium</b> в выбранном контейнере по
          селектору <code class="local-code">`selector`</code>
          <i>(по умолчанию <code class="local-code">`'.prismium'`</code>)</i>
        </template>
        <template #note>
          <AppCode lang="js">
            <pre><code>const myContainer = document.querySelector('.my-container');

Prismium.openAll(myContainer, '.prismium');
// or
Prismium.openAll('.my-container', '.prismium')</code></pre>
          </AppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="static-method-open-everything"
        title="openEverything()"
        :params="['selector?: string']"
        return="void"
      >
        <template #default>
          Открывает все экземпляры <b>Prismium</b> на странице по селектору. По
          умолчанию откроет все экземпляры <b>Prismium</b>.
        </template>
        <template #note>
          <AppCode lang="js">
            <pre><code>Prismium.openEverything();
// or
Prismium.openEverything('.my-prismium')</code></pre>
          </AppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="static-method-toggle"
        title="toggle()"
        :params="['selector: string | HTMLElement']"
        return="void"
      >
        <template #default>Переключает один экземпляр <b>Prismium</b></template>
        <template #note>
          <AppCode lang="js">
            <pre><code>const prismium = document.querySelector('[data-prismium]');

Prismium.toggle(prismium);
// or
Prismium.toggle('[data-prismium]');</code></pre>
          </AppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="static-method-close"
        title="close()"
        :params="['selector: string | HTMLElement']"
        return="void"
      >
        <template #default>Закрывает один экземпляр <b>Prismium</b></template>
        <template #note>
          <AppCode lang="js">
            <pre><code>const prismium = document.querySelector('[data-prismium]');

Prismium.close(prismium);
// or
Prismium.close('[data-prismium]');</code></pre>
          </AppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="static-method-close-all"
        title="closeAll()"
        :params="['container: string | HTMLElement', 'selector?: string']"
        return="void"
      >
        <template #default>
          Закрывает все экземпляры <b>Prismium</b> в выбранном контейнере по
          селектору <code class="local-code">`selector`</code>
          <i>(по умолчанию <code class="local-code">`'.prismium'`</code>)</i>
        </template>
        <template #note>
          <AppCode lang="js">
            <pre><code>const myContainer = document.querySelector('.my-container');

Prismium.closeAll(myContainer, '.prismium');
// or
Prismium.closeAll('.my-container', '.prismium')</code></pre>
          </AppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="static-method-close-everything"
        title="closeEverything()"
        :params="['selector?: string']"
        return="void"
      >
        <template #default>
          Открывает все экземпляры <b>Prismium</b> на странице по селектору. По
          умолчанию откроет все экземпляры <b>Prismium</b>.
        </template>
        <template #note>
          <AppCode lang="js">
            <pre><code>Prismium.closeEverything();
// or
Prismium.closeEverything('.my-prismium')</code></pre>
          </AppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="static-method-close-nested"
        title="closeNested()"
        :params="['selector: string | HTMLElement']"
        return="void"
      >
        <template #default>
          Закрывает все вложенные экземпляры <b>Prismium</b> в выбранном
          экземпляре.
        </template>
        <template #note>
          <AppCode lang="js">
            <pre><code>const parent = document.querySelector('[data-prismium]');

Prismium.closeNested(parent);
// or
Prismium.closeNested('[data-prismium]');</code></pre>
          </AppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="static-method-disable"
        title="disable()"
        :params="['selector: string | HTMLElement']"
        return="void"
      >
        <template #default>
          Запрещает взаимодействие с одним экземпляром <b>Prismium</b>.
          <b
            >Отключает взаимодействие (открытие/закрытие) даже при помощи
            методов!</b
          >
        </template>
        <template #note>
          <AppCode lang="js">
            <pre><code>const prismium = document.querySelector('[data-prismium]');

Prismium.disable(prismium);
// or
Prismium.disable('[data-prismium]');</code></pre>
          </AppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="static-method-enable"
        title="enable()"
        :params="['selector: string | HTMLElement']"
        return="void"
      >
        <template #default>
          Возобновляет возможность взаимодействия с одним экземпляром
          <b>Prismium</b>.
        </template>
        <template #note>
          <AppCode lang="js">
            <pre><code>const prismium = document.querySelector('[data-prismium]');

Prismium.enable(prismium);
// or
Prismium.enable('[data-prismium]');</code></pre>
          </AppCode>
        </template>
      </ElementsDocsItem>

      <h2>Методы экземпляра</h2>
      <ElementsDocsItem
        id="method-init"
        title="init()"
        :params="['el?: HTMLElement']"
        return="void"
      >
        <template #default>
          Инициализирует экземпляр <b>Prismium</b>.
        </template>
        <template #note>
          <AppCode lang="js">
            <pre><code>const prismium = new Prismium('[data-prismium]', {
  init: false,
});

prismium.init();</code></pre>
          </AppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="method-destroy"
        title="destroy()"
        :params="['el?: HTMLElement']"
        return="Prismium instance"
      >
        <template #default>Уничтожает экземпляр <b>Prismium</b>.</template>
        <template #note>
          <AppCode lang="js">
            <pre><code>const prismium = new Prismium('[data-prismium]');

prismium.destroy();</code></pre>
          </AppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="method-setup-speed"
        title="setupSpeed()"
        :params="['open: number, close?: number']"
        return="void"
      >
        <template #default>
          Устанавливает скорость открытия/закрытия <b>Prismium</b>.
          <br />
          <code class="local-code">`open`</code> — скорость открытия
          <code class="local-code">`close`</code> — скорость закрытия
        </template>
        <template #note>
          <AppCode lang="js">
            <pre><code>const prismium = new Prismium('[data-prismium]');

prismium.setupSpeed(100, 200);</code></pre>
          </AppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem id="method-open" title="open()" return="void">
        <template #default>
          Открывает один экземпляр <b>Prismium</b>.
        </template>
        <template #note>
          <AppCode lang="js">
            <pre><code>const prismium = new Prismium('[data-prismium]');

prismium.open();</code></pre>
          </AppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem id="method-close" title="close()" return="void">
        <template #default>
          Закрывает один экземпляр <b>Prismium</b>.
        </template>
        <template #note>
          <AppCode lang="js">
            <pre><code>const prismium = new Prismium('[data-prismium]');

prismium.close();</code></pre>
          </AppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem id="method-toggle" title="toggle()" return="void">
        <template #default>
          Переключает один экземпляр <b>Prismium</b>.
        </template>
        <template #note>
          <AppCode lang="js">
            <pre><code>const prismium = new Prismium('[data-prismium]');

prismium.toggle();</code></pre>
          </AppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="method-on"
        title="on()"
        :params="[
          'events: string | string[]',
          'handler: PrismiumEventCallback',
        ]"
        return="Prismium instance"
      >
        <template #default>Добавляет обработчик событий.</template>
        <template #note>
          <AppCode lang="js">
            <pre><code>const prismium = new Prismium('[data-prismium]');

prismium.on('beforeOpen', (prismium) => console.log(prismium));
// or
prismium.on(['beforeOpen', 'afterOpen'], (prismium) => console.log(prismium));
// or
prismium.on('beforeOpen afterOpen', (prismium) => console.log(prismium));
</code></pre>
          </AppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="method-once"
        title="once()"
        :params="[
          'events: string | string[]',
          'handler: PrismiumEventCallback',
        ]"
        return="Prismium instance"
      >
        <template #default>
          Добавляет обработчик событий, который будет вызван только один раз.
          При добавлении нескольких обработчиков, обработчик будет удален
          автоматически после первого вызова.
        </template>
        <template #note>
          <AppCode lang="js">
            <pre><code>const prismium = new Prismium('[data-prismium]');

prismium.once('beforeOpen', (prismium) => console.log(prismium));
// or
prismium.once(['beforeOpen', 'afterOpen'], (prismium) => console.log(prismium));
// or
prismium.once('beforeOpen afterOpen', (prismium) => console.log(prismium));
</code></pre>
          </AppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="method-on-any"
        title="onAny()"
        :params="['handler: PrismiumEventCallback']"
        return="Prismium instance"
      >
        <template #default>Добавляет обработчик на все события.</template>
        <template #note>
          <AppCode lang="js">
            <pre><code>const prismium = new Prismium('[data-prismium]');

prismium.onAny((prismium) => console.log(prismium));
</code></pre>
          </AppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="method-off"
        title="off()"
        :params="[
          'events: string | string[]',
          'handler?: PrismiumEventCallback',
        ]"
        return="Prismium instance"
      >
        <template #default>
          Снимает привязку обработчиков событий. <br />Если указан только список
          событий (без обработчика), удаляются все обработчики этих событий.
          <br />Если указан и обработчик, то удаляется только этот конкретный
          обработчик.</template
        >
        <template #note>
          <AppCode lang="js">
            <pre><code>const prismium = new Prismium('[data-prismium]');
const handler = (prismium) => console.log(prismium);

prismium.on(['beforeOpen', 'afterOpen'], handler);

// removed all event handlers
prismium.off('beforeOpen');
// removed the event handler with a specific name and handler
prismium.off('beforeOpen', handler);
// removed event handlers with specific names
prismium.off(['beforeOpen', 'afterOpen']);
</code></pre>
          </AppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="method-off-any"
        title="offAny()"
        :params="['handler: PrismiumEventCallback']"
        return="Prismium instance"
      >
        <template #default>
          Снимает привязку обработчика на все события.
        </template>
        <template #note>
          <AppCode lang="js">
            <pre><code>const prismium = new Prismium('[data-prismium]');
const handler = (prismium) => console.log(prismium);
prismium.onAny(handler);

// removed all event handlers
prismium.offAny(handler);
// removed all event handlers
prismium.offAny();</code></pre>
          </AppCode>
        </template>
      </ElementsDocsItem>

      <h2>События <strong>Prismium</strong></h2>
      <p>
        <b>Prismium</b> имеет много полезных событий, которые вы можете
        прослушивать. События могут быть назначены двумя способами:
      </p>
      <ol>
        <li>
          Использовать параметр <code class="local-code">`on`</code> при
          инициализации <b>Prismium</b>:
          <AppCode lang="js">
            <pre><code>const prismium = new Prismium('[data-prismium]', {
  on: {
    beforeOpen: (prismium) => {
      console.log(prismium);
    },
  }
});</code></pre>
          </AppCode>
        </li>
        <li>
          Использовать метод <code class="local-code">`on`</code> после
          инициализации <b>Prismium</b>:
          <AppCode lang="js">
            <pre><code>const prismium = new Prismium('[data-prismium]');
prismium.on('beforeOpen', (prismium) => {
  console.log(prismium);
});</code></pre>
          </AppCode>
        </li>
      </ol>
      <p>
        <b>
          Обратите внимание, что ключевое слово
          <code class="local-code">`this`</code> в обработчике всегда указывает
          на экземпляр Prismium, а не на элемент, на котором он был вызван.
        </b>
      </p>

      <ElementsDocsItem
        id="event-before-init"
        title="beforeInit"
        args="(prismium)"
      >
        Событие срабатывает перед инициализацией экземпляра.
      </ElementsDocsItem>

      <ElementsDocsItem id="event-init" title="init" args="(prismium)">
        Событие срабатывает при инициализации экземпляра.
      </ElementsDocsItem>

      <ElementsDocsItem
        id="event-after-init"
        title="beforeOpen"
        args="(prismium)"
      >
        Событие срабатывает сразу после инициализации экземпляра.
      </ElementsDocsItem>

      <ElementsDocsItem
        id="event-before-open"
        title="beforeOpen"
        args="(prismium)"
      >
        Событие срабатывает перед открытием экземпляра.
      </ElementsDocsItem>

      <ElementsDocsItem id="event-open" title="open" args="(prismium)">
        Событие срабатывает при открытии экземпляра.
      </ElementsDocsItem>

      <ElementsDocsItem
        id="event-after-open"
        title="afterOpen"
        args="(prismium)"
      >
        Событие срабатывает сразу после открытия экземпляра.
      </ElementsDocsItem>

      <ElementsDocsItem
        id="event-before-close"
        title="beforeClose"
        args="(prismium)"
      >
        Событие срабатывает перед закрытием экземпляра.
      </ElementsDocsItem>

      <ElementsDocsItem id="event-close" title="close" args="(prismium)">
        Событие срабатывает при закрытии экземпляра.
      </ElementsDocsItem>

      <ElementsDocsItem
        id="event-after-close"
        title="afterClose"
        args="(prismium)"
      >
        Событие срабатывает сразу после закрытия экземпляра.
      </ElementsDocsItem>

      <ElementsDocsItem
        id="event-before-destroy"
        title="beforeDestroy"
        args="(prismium)"
      >
        Событие срабатывает перед уничтожением экземпляра.
      </ElementsDocsItem>

      <ElementsDocsItem id="event-destroy" title="destroy" args="(prismium)">
        Событие срабатывает при уничтожении экземпляра.
      </ElementsDocsItem>

      <ElementsDocsItem
        id="event-after-destroy"
        title="afterDestroy"
        args="(prismium)"
      >
        Событие срабатывает сразу после уничтожения экземпляра.
      </ElementsDocsItem>

      <ElementsDocsItem
        id="event-effect-start"
        title="effectStart"
        args="(prismium, direction)"
      >
        Событие срабатывает при начале эффекта открытия/закрытия экземпляра.
        <br />
        <code class="local-code">`direction`</code> — направление эффекта
        <code class="local-code">`'open'`</code> или
        <code class="local-code">`'close'`</code>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="event-effect-end"
        title="effectEnd"
        args="(prismium, direction)"
      >
        Событие срабатывает при завершении эффекта открытия/закрытия экземпляра.
        <br />
        <code class="local-code">`'direction'`</code> — направление эффекта
        <code class="local-code">`'open'`</code> или
        <code class="local-code">`'close'`</code>
      </ElementsDocsItem>

      <h2>Определения TypeScript</h2>
      <p>
        <b>Prismium</b> полностью типизирован и экспортирует определения в
        <code class="local-code">`Prismium`</code> и
        <code class="local-code">`PrismiumOptions`</code>:
      </p>
      <AppCode lang="js">
        <pre><code>// main.ts
import Prismium, { PrismiumOptions } from 'prismium';

const options: PrismiumOptions = {
  speed: {
    open: 400,
    close: 200,
  },
  autoClose: true,
  autoCloseNested: true,
  effect: 'line-by-line',
}

const prismium = new Prismium('[data-prismium]', options);
      </code></pre>
      </AppCode>
    </SectionsDocs>
  </div>
</template>

<style lang="scss" scoped>
.local-code {
  @apply text-primary/80;
}
</style>
