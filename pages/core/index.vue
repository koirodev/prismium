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

    <LazySectionsDocs class="section_padding_bottom">
      <template #aside>
        <AppAsideNav
          :items="[
            {
              title: 'Начало работы',
              link: '/get-started',
            },
            {
              title: 'Установка',
              link: '/core/installation',
            },
            {
              title: 'Инициализация',
              link: '/core/initialization',
            },
            {
              title: 'Параметры',
              link: '/core/parameters',
            },
            {
              title: 'Эффекты',
              link: '/core/effects',
            },
          ]"
        />
      </template>
      <h2 id="full-html-layout" v-html="$t(`${i18nPage}.full_html.title`)"></h2>
      <LazyAppCode max-height="unset" lang="html">{{
        codeHtmlLayout
      }}</LazyAppCode>

      <h2 id="prismium-icons" v-html="$t(`${i18nPage}.icons.title`)"></h2>
      <p v-html="$t(`${i18nPage}.icons.description`)"></p>
      <h3
        id="prismium-static-icon"
        v-html="$t(`${i18nPage}.icons.static.title`)"
      ></h3>
      <p v-html="$t(`${i18nPage}.icons.static.description`)"></p>
      <LazyAppCode lang="html">{{ codeIconStatic }}</LazyAppCode>
      <h3 id="prismium-svg-sprite">
        {{ $t(`${i18nPage}.icons.sprite.title`) }}
      </h3>
      <p v-html="$t(`${i18nPage}.icons.sprite.description`)"></p>
      <h3 id="prismium-dynamic-icon">
        {{ $t(`${i18nPage}.icons.dynamic.title`) }}
      </h3>
      <p v-html="$t(`${i18nPage}.icons.dynamic.description`)"></p>
      <LazyAppCode lang="html">{{ codeIconDynamic }}</LazyAppCode>

      <h2 id="prismium-styles" v-html="$t(`${i18nPage}.styles.title`)"></h2>
      <p v-html="$t(`${i18nPage}.styles.description`)"></p>

      <h3 id="css-styles" v-html="$t(`${i18nPage}.styles.css.title`)"></h3>
      <ul>
        <li>
          <LazyAppCode small>prismium.css</LazyAppCode> —
          {{ $t(`${i18nPage}.styles.css.prismium_css`) }}
        </li>
        <li>
          <LazyAppCode small>prismium.min.css</LazyAppCode> —
          {{ $t(`${i18nPage}.styles.css.prismium_min_css`) }}
        </li>
        <li>
          <LazyAppCode small>prismium-bundle.css</LazyAppCode> —
          {{ $t(`${i18nPage}.styles.css.prismium_bundle_css`) }}
        </li>
        <li>
          <LazyAppCode small>prismium-bundle.min.css</LazyAppCode> —
          {{ $t(`${i18nPage}.styles.css.prismium_bundle_min_css`) }}
        </li>
      </ul>
      <p v-html="$t(`${i18nPage}.styles.css.description`)"></p>
      <ul>
        <li>
          <LazyAppCode small>prismium/css</LazyAppCode> —
          {{ $t(`${i18nPage}.styles.css.prismium_css`) }}
        </li>
        <li>
          <LazyAppCode small>prismium/css/bundle</LazyAppCode> —
          {{ $t(`${i18nPage}.styles.css.prismium_bundle_css`) }}
        </li>
      </ul>

      <h3 id="scss-styles">{{ $t(`${i18nPage}.styles.scss.title`) }}</h3>
      <ul>
        <li>
          <LazyAppCode small>prismium/scss</LazyAppCode> —
          {{ $t(`${i18nPage}.styles.scss.prismium_scss`) }}
        </li>
        <li>
          <LazyAppCode small>prismium/scss/bundle</LazyAppCode> —
          {{ $t(`${i18nPage}.styles.scss.prismium_scss_bundle`) }}
        </li>
      </ul>

      <h3 id="prismium-themes">{{ $t(`${i18nPage}.themes.title`) }}</h3>
      <AppAccordion :title="$t(`${i18nPage}.themes.without_npm`)">
        <div class="article">
          <ul>
            <li>
              <LazyAppCode small>/themes/dark.css</LazyAppCode> —
              {{ $t(`${i18nPage}.themes.dark`) }}
            </li>
            <li>
              <LazyAppCode small>/themes/dark.min.css</LazyAppCode> —
              {{ $t(`${i18nPage}.themes.dark_min`) }}
            </li>
            <li>
              <LazyAppCode small>/themes/dark-contrast.css</LazyAppCode> —
              {{ $t(`${i18nPage}.themes.dark_contrast`) }}
            </li>
            <li>
              <LazyAppCode small>/themes/dark-contrast.min.css</LazyAppCode> —
              {{ $t(`${i18nPage}.themes.dark_contrast_min`) }}
            </li>
            <AppSeparator />
            <li>
              <LazyAppCode small>/themes/light.css</LazyAppCode> —
              {{ $t(`${i18nPage}.themes.light`) }}
            </li>
            <li>
              <LazyAppCode small>/themes/light.min.css</LazyAppCode> —
              {{ $t(`${i18nPage}.themes.light_min`) }}
            </li>
            <li>
              <LazyAppCode small>/themes/light-contrast.css</LazyAppCode> —
              {{ $t(`${i18nPage}.themes.light_contrast`) }}
            </li>
            <li>
              <LazyAppCode small>/themes/light-contrast.min.css</LazyAppCode> —
              {{ $t(`${i18nPage}.themes.light_contrast_min`) }}
            </li>
            <AppSeparator />
            <li>
              <LazyAppCode small>/themes/forest.css</LazyAppCode> —
              {{ $t(`${i18nPage}.themes.forest`) }}
            </li>
            <li>
              <LazyAppCode small>/themes/forest.min.css</LazyAppCode> —
              {{ $t(`${i18nPage}.themes.forest_min`) }}
            </li>
            <AppSeparator />
            <li>
              <LazyAppCode small>/themes/ocean.css</LazyAppCode> —
              {{ $t(`${i18nPage}.themes.ocean`) }}
            </li>
            <li>
              <LazyAppCode small>/themes/ocean.min.css</LazyAppCode> —
              {{ $t(`${i18nPage}.themes.ocean_min`) }}
            </li>
            <AppSeparator />
            <li>
              <LazyAppCode small>/themes/sunset.css</LazyAppCode> —
              {{ $t(`${i18nPage}.themes.sunset`) }}
            </li>
            <li>
              <LazyAppCode small>/themes/sunset.min.css</LazyAppCode> —
              {{ $t(`${i18nPage}.themes.sunset_min`) }}
            </li>
          </ul>
        </div>
      </AppAccordion>
      <AppAccordion :title="$t(`${i18nPage}.themes.with_npm`)">
        <div class="article">
          <ul>
            <li>
              <LazyAppCode small>prismium/theme/dark</LazyAppCode> —
              {{ $t(`${i18nPage}.themes.dark`) }}
            </li>
            <li>
              <LazyAppCode small>prismium/theme/dark-contrast</LazyAppCode> —
              {{ $t(`${i18nPage}.themes.dark_contrast`) }}
            </li>
            <AppSeparator />
            <li>
              <LazyAppCode small>prismium/theme/light</LazyAppCode> —
              {{ $t(`${i18nPage}.themes.light`) }}
            </li>
            <li>
              <LazyAppCode small>prismium/theme/light-contrast</LazyAppCode> —
              {{ $t(`${i18nPage}.themes.light_contrast`) }}
            </li>
            <AppSeparator />
            <li>
              <LazyAppCode small>prismium/theme/forest</LazyAppCode> —
              {{ $t(`${i18nPage}.themes.forest`) }}
            </li>
            <AppSeparator />
            <li>
              <LazyAppCode small>prismium/theme/ocean</LazyAppCode> —
              {{ $t(`${i18nPage}.themes.ocean`) }}
            </li>
            <AppSeparator />
            <li>
              <LazyAppCode small>prismium/theme/sunset</LazyAppCode> —
              {{ $t(`${i18nPage}.themes.sunset`) }}
            </li>
          </ul>
        </div>
      </AppAccordion>

      <h2
        id="prismium-initialization"
        v-html="$t(`${i18nPage}.initialization.title`)"
      ></h2>
      <p v-html="$t(`${i18nPage}.initialization.description`)"></p>
      <p v-html="$t(`${i18nPage}.initialization.description2`)"></p>
      <ul>
        <li>
          <LazyAppCode small>element</LazyAppCode> —
          <span v-html="$t(`${i18nPage}.initialization.element`)"></span>
        </li>
        <li>
          <LazyAppCode small>parameters</LazyAppCode> —
          <span v-html="$t(`${i18nPage}.initialization.parameters`)"></span>
        </li>
      </ul>
      <p v-html="$t(`${i18nPage}.initialization.example_title`)"></p>
      <LazyAppCode lang="js">
        <pre><code>new Prismium('[data-prismium]', {
  speed: 500,
  autoClose: true,
  autoCloseNested: true,
});</code></pre>
      </LazyAppCode>
      <p v-html="$t(`${i18nPage}.initialization.after_init`)"></p>
      <LazyAppCode lang="js">
        <pre><code>const prismium = document.querySelector('[data-prismium]').prismium

// For example, to open an element
prismium.open();</code></pre>
      </LazyAppCode>

      <h2
        id="prismium-parameters"
        v-html="$t(`${i18nPage}.parameters.title`)"
      ></h2>
      <ElementsDocsItem
        id="param-init"
        title="init"
        type="boolean"
        default="true"
      >
        <template #default>
          <span v-html="$t(`${i18nPage}.parameters.init.description`)"></span>
        </template>
        <template #note>
          <LazyAppCode lang="js">
            <pre><code>const prismium = new Prismium('[data-prismium]', {
  init: false,
});

/* logic before Prismium initialization */

prismium.init();</code></pre>
          </LazyAppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="param-opened"
        title="opened"
        type="boolean"
        default="false"
      >
        <template #default>
          <span v-html="$t(`${i18nPage}.parameters.opened.description`)"></span>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="param-disabled"
        title="disabled"
        type="boolean"
        default="false"
      >
        <template #default>
          <span
            v-html="$t(`${i18nPage}.parameters.disabled.description`)"
          ></span>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="param-theme"
        title="theme"
        type="PrismiumTheme"
        default="'clear'"
      >
        <template #default>
          <span v-html="$t(`${i18nPage}.parameters.theme.description`)"></span>
        </template>
        <template #note>
          <LazyAppCode lang="ts">
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
          </LazyAppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="param-speed"
        title="speed"
        type="number | { open?: number; close?: number; }"
        default="350"
      >
        <template #default>
          <span v-html="$t(`${i18nPage}.parameters.speed.description`)"></span>
        </template>
        <template #note>
          <LazyAppCode lang="js">
            <pre><code>new Prismium('[data-prismium]', {
  speed: {
    open: 500,
    close: 500,
  },
});</code></pre>
          </LazyAppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="param-auto-close"
        title="autoClose"
        type="boolean"
        default="false"
      >
        <template #default>
          <span
            v-html="$t(`${i18nPage}.parameters.auto_close.description`)"
          ></span>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="param-auto-close-nested"
        title="autoCloseNested"
        type="boolean"
        default="false"
      >
        <template #default>
          <span
            v-html="$t(`${i18nPage}.parameters.auto_close_nested.description`)"
          ></span>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="param-get-parent-height"
        title="getParentHeight"
        type="boolean"
        default="false"
      >
        <template #default>
          <span
            v-html="$t(`${i18nPage}.parameters.get_parent_height.description`)"
          ></span>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="param-scroll-to"
        title="scrollTo"
        type="boolean | { offset?: number; behavior?: ScrollBehavior; }"
        default="false"
      >
        <template #default>
          <span
            v-html="$t(`${i18nPage}.parameters.scroll_to.description`)"
          ></span>
        </template>
        <template #note>
          <LazyAppCode lang="ts">
            <pre><code>type ScrollBehavior = 
  | 'auto'
  | 'instant'
  | 'smooth'</code></pre>
          </LazyAppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="param-sprite-path"
        title="spritePath"
        type="string"
        default="'sprite.svg'"
      >
        <template #default>
          <span
            v-html="$t(`${i18nPage}.parameters.sprite_path.description`)"
          ></span>
        </template>
        <template #note>
          <LazyAppCode lang="html">{{ codeIconSprite }}</LazyAppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="param-icon-attribute"
        title="iconAttribute"
        type="string"
        default="'data-prismium-icon'"
      >
        <template #default>
          <span
            v-html="$t(`${i18nPage}.parameters.icon_attribute.description`)"
          ></span>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="param-container-selectors"
        title="containerSelectors"
        type="string | string[]"
        default="['[data-prismium-container]']"
      >
        <template #default>
          <span
            v-html="
              $t(`${i18nPage}.parameters.container_selectors.description`)
            "
          ></span>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="param-current-selector"
        title="currentSelector"
        type="string"
        default="'[data-prismium-current]'"
      >
        <template #default>
          <span
            v-html="$t(`${i18nPage}.parameters.current_selector.description`)"
          ></span>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="param-content-selector"
        title="contentSelector"
        type="string"
        default="'[data-prismium-content]'"
      >
        <template #default>
          <span
            v-html="$t(`${i18nPage}.parameters.content_selector.description`)"
          ></span>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="param-hidden-selector"
        title="hiddenSelector"
        type="string"
        default="'[data-prismium-hidden]'"
      >
        <template #default>
          <span
            v-html="$t(`${i18nPage}.parameters.hidden_selector.description`)"
          ></span>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="param-active-class"
        title="activeClass"
        type="string"
        default="'prismium-active'"
      >
        <template #default>
          <span
            v-html="$t(`${i18nPage}.parameters.active_class.description`)"
          ></span>
        </template>
        <template #note>
          <p v-html="$t(`${i18nPage}.parameters.active_class.note`)"></p>
          <LazyAppCode lang="html">
            <pre><code>&lt;div class="prismium-active" data-prismium&gt;
  &lt;div data-prismium-current&gt;&lt;/div&gt;
  &lt;div data-prismium-content&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
          </LazyAppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="param-opened-class"
        title="openedClass"
        type="string"
        default="'prismium-opened'"
      >
        <template #default>
          <span
            v-html="$t(`${i18nPage}.parameters.opened_class.description`)"
          ></span>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="param-disabled-class"
        title="disabledClass"
        type="string"
        default="'prismium-disabled'"
      >
        <template #default>
          <span
            v-html="$t(`${i18nPage}.parameters.disabled_class.description`)"
          ></span>
        </template>
        <template #note>
          <p v-html="$t(`${i18nPage}.parameters.disabled_class.note`)"></p>
          <LazyAppCode lang="html">
            <pre><code>&lt;div class="prismium-disabled" data-prismium&gt;
  &lt;div data-prismium-current&gt;&lt;/div&gt;
  &lt;div data-prismium-content&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
          </LazyAppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem id="param-on" title="on" type="object">
        <template #default>
          <span v-html="$t(`${i18nPage}.parameters.on.description`)"></span>
        </template>
        <template #note>
          <LazyAppCode lang="js">
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
          </LazyAppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="param-on-any"
        title="onAny"
        type="function(handler)"
      >
        <template #default>
          <span v-html="$t(`${i18nPage}.parameters.on_any.description`)"></span>
        </template>
        <template #note>
          <LazyAppCode lang="js">
            <pre><code>const prismium = new Prismium('[data-prismium]', {
  onAny: (handler, priority) => {
    console.log(handler);
  }
});</code></pre>
          </LazyAppCode>
        </template>
      </ElementsDocsItem>

      <h2 v-html="$t(`${i18nPage}.effects.title`)" id="effects"></h2>
      <ElementsDocsItem id="param-effect" title="effect" type="string">
        <template #default>
          <span v-html="$t(`${i18nPage}.parameters.effect.description`)"></span>
        </template>
        <template #note>
          <LazyAppCode lang="js">
            <pre><code>import Prismium from 'prismium';
// Module connection
import { EffectsModule } from 'prismium/modules';

new Prismium('[data-prismium]', {
  // Module initializing
  modules: [EffectsModule],
  effect: 'line-by-line',
});</code></pre>
          </LazyAppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="param-effect-selectors"
        title="effectSelectors"
        type="string | string[]"
      >
        <span
          v-html="$t(`${i18nPage}.parameters.effect_selectors.description`)"
        ></span>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="param-effect-ignore"
        title="effectIgnore"
        type="string | string[]"
      >
        <span
          v-html="$t(`${i18nPage}.parameters.effect_ignore.description`)"
        ></span>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="param-effect-line-by-line"
        title="effectLineByLine"
        type="object"
      >
        <template #note>
          <LazyAppCode lang="js">
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
          </LazyAppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="param-effect-fade-scale"
        title="effectFadeScale"
        type="object"
      >
        <template #note>
          <LazyAppCode lang="js">
            <pre><code>new Prismium('[data-prismium]', {
  effect: 'fade-scale',
  effectFadeScale: {
    speed: 400,
    easing: 'cubic-bezier(.25,.1,.25,1)',
    scale: 0.9,
    opacity: 0,
  },
});</code></pre>
          </LazyAppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="param-effect-slide"
        title="effectSlide"
        type="object"
      >
        <template #note>
          <LazyAppCode lang="js">
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
          </LazyAppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="param-effect-stagger"
        title="effectStagger"
        type="object"
      >
        <template #note>
          <LazyAppCode lang="js">
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
          </LazyAppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem id="param-effect-wave" title="effectWave" type="object">
        <template #note>
          <LazyAppCode lang="js">
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
          </LazyAppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem id="param-effect-flip" title="effectFlip" type="object">
        <template #note>
          <LazyAppCode lang="js">
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
          </LazyAppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem id="param-effect-zoom" title="effectZoom" type="object">
        <template #note>
          <LazyAppCode lang="js">
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
          </LazyAppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="param-effect-cascade"
        title="effectCascade"
        type="object"
      >
        <template #note>
          <LazyAppCode lang="js">
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
          </LazyAppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="param-effect-custom"
        title="effectCustom"
        type="object"
      >
        <template #default>
          <div
            v-html="$t(`${i18nPage}.parameters.effect_custom.description`)"
          ></div>
        </template>
        <template #note>
          <LazyAppCode lang="js">
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
          </LazyAppCode>
        </template>
      </ElementsDocsItem>

      <h2>{{ $t(`${i18nPage}.static_methods.title`) }}</h2>
      <ElementsDocsItem
        id="static-method-init"
        title="init()"
        :params="['el: HTMLElement']"
        return="Prismium instance"
      >
        <template #default>
          <span
            v-html="$t(`${i18nPage}.static_methods.init.description`)"
          ></span>
        </template>
        <template #note>
          <LazyAppCode lang="js">
            <pre><code>const prismium = document.querySelector('[data-prismium]');

Prismium.init();</code></pre>
          </LazyAppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="static-method-use"
        title="use()"
        :params="['selector: string | HTMLElement']"
        return="void"
      >
        <template #default>
          <span
            v-html="$t(`${i18nPage}.static_methods.use.description`)"
          ></span>
        </template>
        <template #note>
          <LazyAppCode lang="js">
            <pre><code> import Prismium from 'prismium';
import { EffectsModule } from 'prismium/modules';

Prismium.use([EffectsModule]);

const prismium = new Prismium('[data-prismium]', {
  effect: 'line-by-line',
  effectLineByLine: {
    // effect options
  },
});</code></pre>
          </LazyAppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="static-get-instance"
        title="getInstance()"
        :params="['el: HTMLElement | string']"
        return="Prismium instance"
      >
        <template #default>
          <span
            v-html="$t(`${i18nPage}.static_methods.get_instance.description`)"
          ></span>
        </template>
        <template #note>
          <LazyAppCode lang="js">
            <pre><code>const element = document.querySelector('[data-prismium]');

Prismium.getInstance(element);
// or
Prismium.getInstance('[data-prismium]');
//or
element.prismium</code></pre>
          </LazyAppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="static-method-open"
        title="open()"
        :params="['selector: string | HTMLElement']"
        return="Prismium constructor"
      >
        <template #default>
          <span
            v-html="$t(`${i18nPage}.static_methods.open.description`)"
          ></span>
        </template>
        <template #note>
          <LazyAppCode lang="js">
            <pre><code>const prismium = document.querySelector('[data-prismium]');

Prismium.open(prismium);
// or
Prismium.open('[data-prismium]');</code></pre>
          </LazyAppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="static-method-open-all"
        title="openAll()"
        :params="['container: string | HTMLElement', 'selector?: string']"
        return="void"
      >
        <template #default>
          <span
            v-html="$t(`${i18nPage}.static_methods.open_all.description`)"
          ></span>
        </template>
        <template #note>
          <LazyAppCode lang="js">
            <pre><code>const myContainer = document.querySelector('.my-container');

Prismium.openAll(myContainer, '.prismium');
// or
Prismium.openAll('.my-container', '.prismium')</code></pre>
          </LazyAppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="static-method-open-everything"
        title="openEverything()"
        :params="['selector?: string']"
        return="void"
      >
        <template #default>
          <span
            v-html="
              $t(`${i18nPage}.static_methods.open_everything.description`)
            "
          ></span>
        </template>
        <template #note>
          <LazyAppCode lang="js">
            <pre><code>Prismium.openEverything();
// or
Prismium.openEverything('.my-prismium')</code></pre>
          </LazyAppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="static-method-toggle"
        title="toggle()"
        :params="['selector: string | HTMLElement']"
        return="void"
      >
        <template #default>
          <span
            v-html="$t(`${i18nPage}.static_methods.toggle.description`)"
          ></span>
        </template>
        <template #note>
          <LazyAppCode lang="js">
            <pre><code>const prismium = document.querySelector('[data-prismium]');

Prismium.toggle(prismium);
// or
Prismium.toggle('[data-prismium]');</code></pre>
          </LazyAppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="static-method-close"
        title="close()"
        :params="['selector: string | HTMLElement']"
        return="void"
      >
        <template #default>
          <span
            v-html="$t(`${i18nPage}.static_methods.close.description`)"
          ></span>
        </template>
        <template #note>
          <LazyAppCode lang="js">
            <pre><code>const prismium = document.querySelector('[data-prismium]');

Prismium.close(prismium);
// or
Prismium.close('[data-prismium]');</code></pre>
          </LazyAppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="static-method-close-all"
        title="closeAll()"
        :params="['container: string | HTMLElement', 'selector?: string']"
        return="void"
      >
        <template #default>
          <span
            v-html="$t(`${i18nPage}.static_methods.close_all.description`)"
          ></span>
        </template>
        <template #note>
          <LazyAppCode lang="js">
            <pre><code>const myContainer = document.querySelector('.my-container');

Prismium.closeAll(myContainer, '.prismium');
// or
Prismium.closeAll('.my-container', '.prismium')</code></pre>
          </LazyAppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="static-method-close-everything"
        title="closeEverything()"
        :params="['selector?: string']"
        return="void"
      >
        <template #default>
          <span
            v-html="
              $t(`${i18nPage}.static_methods.close_everything.description`)
            "
          ></span>
        </template>
        <template #note>
          <LazyAppCode lang="js">
            <pre><code>Prismium.closeEverything();
// or
Prismium.closeEverything('.my-prismium')</code></pre>
          </LazyAppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="static-method-close-nested"
        title="closeNested()"
        :params="['selector: string | HTMLElement']"
        return="void"
      >
        <template #default>
          <span
            v-html="$t(`${i18nPage}.static_methods.close_nested.description`)"
          ></span>
        </template>
        <template #note>
          <LazyAppCode lang="js">
            <pre><code>const parent = document.querySelector('[data-prismium]');

Prismium.closeNested(parent);
// or
Prismium.closeNested('[data-prismium]');</code></pre>
          </LazyAppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="static-method-disable"
        title="disable()"
        :params="['selector: string | HTMLElement']"
        return="void"
      >
        <template #default>
          <span
            v-html="$t(`${i18nPage}.static_methods.disable.description`)"
          ></span>
        </template>
        <template #note>
          <LazyAppCode lang="js">
            <pre><code>const prismium = document.querySelector('[data-prismium]');

Prismium.disable(prismium);
// or
Prismium.disable('[data-prismium]');</code></pre>
          </LazyAppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="static-method-enable"
        title="enable()"
        :params="['selector: string | HTMLElement']"
        return="void"
      >
        <template #default>
          <span
            v-html="$t(`${i18nPage}.static_methods.enable.description`)"
          ></span>
        </template>
        <template #note>
          <LazyAppCode lang="js">
            <pre><code>const prismium = document.querySelector('[data-prismium]');

Prismium.enable(prismium);
// or
Prismium.enable('[data-prismium]');</code></pre>
          </LazyAppCode>
        </template>
      </ElementsDocsItem>

      <h2>{{ $t(`${i18nPage}.methods.title`) }}</h2>
      <ElementsDocsItem
        id="method-init"
        title="init()"
        :params="['el?: HTMLElement']"
        return="void"
      >
        <template #default>
          <span v-html="$t(`${i18nPage}.methods.init.description`)"></span>
        </template>
        <template #note>
          <LazyAppCode lang="js">
            <pre><code>const prismium = new Prismium('[data-prismium]', {
  init: false,
});

prismium.init();</code></pre>
          </LazyAppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="method-destroy"
        title="destroy()"
        :params="['el?: HTMLElement']"
        return="Prismium instance"
      >
        <template #default>
          <span v-html="$t(`${i18nPage}.methods.destroy.description`)"></span>
        </template>
        <template #note>
          <LazyAppCode lang="js">
            <pre><code>const prismium = new Prismium('[data-prismium]');

prismium.destroy();</code></pre>
          </LazyAppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="method-setup-speed"
        title="setupSpeed()"
        :params="['open: number, close?: number']"
        return="void"
      >
        <template #default>
          <span
            v-html="$t(`${i18nPage}.methods.setup_speed.description`)"
          ></span>
        </template>
        <template #note>
          <LazyAppCode lang="js">
            <pre><code>const prismium = new Prismium('[data-prismium]');

prismium.setupSpeed(100, 200);</code></pre>
          </LazyAppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem id="method-open" title="open()" return="void">
        <template #default>
          <span v-html="$t(`${i18nPage}.methods.open.description`)"></span>
        </template>
        <template #note>
          <LazyAppCode lang="js">
            <pre><code>const prismium = new Prismium('[data-prismium]');

prismium.open();</code></pre>
          </LazyAppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem id="method-close" title="close()" return="void">
        <template #default>
          <span v-html="$t(`${i18nPage}.methods.close.description`)"></span>
        </template>
        <template #note>
          <LazyAppCode lang="js">
            <pre><code>const prismium = new Prismium('[data-prismium]');

prismium.close();</code></pre>
          </LazyAppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem id="method-toggle" title="toggle()" return="void">
        <template #default>
          <span v-html="$t(`${i18nPage}.methods.toggle.description`)"></span>
        </template>
        <template #note>
          <LazyAppCode lang="js">
            <pre><code>const prismium = new Prismium('[data-prismium]');

prismium.toggle();</code></pre>
          </LazyAppCode>
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
        <template #default>
          <span v-html="$t(`${i18nPage}.methods.on.description`)"></span>
        </template>
        <template #note>
          <LazyAppCode lang="js">
            <pre><code>const prismium = new Prismium('[data-prismium]');

prismium.on('beforeOpen', (prismium) => console.log(prismium));
// or
prismium.on(['beforeOpen', 'afterOpen'], (prismium) => console.log(prismium));
// or
prismium.on('beforeOpen afterOpen', (prismium) => console.log(prismium));
</code></pre>
          </LazyAppCode>
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
          <span v-html="$t(`${i18nPage}.methods.once.description`)"></span>
        </template>
        <template #note>
          <LazyAppCode lang="js">
            <pre><code>const prismium = new Prismium('[data-prismium]');

prismium.once('beforeOpen', (prismium) => console.log(prismium));
// or
prismium.once(['beforeOpen', 'afterOpen'], (prismium) => console.log(prismium));
// or
prismium.once('beforeOpen afterOpen', (prismium) => console.log(prismium));
</code></pre>
          </LazyAppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="method-on-any"
        title="onAny()"
        :params="['handler: PrismiumEventCallback']"
        return="Prismium instance"
      >
        <template #default>
          <span v-html="$t(`${i18nPage}.methods.on_any.description`)"></span>
        </template>
        <template #note>
          <LazyAppCode lang="js">
            <pre><code>const prismium = new Prismium('[data-prismium]');

prismium.onAny((prismium) => console.log(prismium));
</code></pre>
          </LazyAppCode>
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
          <span v-html="$t(`${i18nPage}.methods.off.description`)"></span>
        </template>
        <template #note>
          <LazyAppCode lang="js">
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
          </LazyAppCode>
        </template>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="method-off-any"
        title="offAny()"
        :params="['handler: PrismiumEventCallback']"
        return="Prismium instance"
      >
        <template #default>
          <span v-html="$t(`${i18nPage}.methods.off_any.description`)"></span>
        </template>
        <template #note>
          <LazyAppCode lang="js">
            <pre><code>const prismium = new Prismium('[data-prismium]');
const handler = (prismium) => console.log(prismium);
prismium.onAny(handler);

// removed all event handlers
prismium.offAny(handler);
// removed all event handlers
prismium.offAny();</code></pre>
          </LazyAppCode>
        </template>
      </ElementsDocsItem>

      <h2 v-html="$t(`${i18nPage}.events.title`)" id="events"></h2>
      <p v-html="$t(`${i18nPage}.events.description`)"></p>
      <ol>
        <li>
          <p v-html="$t(`${i18nPage}.events.list.init`)"></p>
          <LazyAppCode lang="js">
            <pre><code>const prismium = new Prismium('[data-prismium]', {
  on: {
    beforeOpen: (prismium) => {
      console.log(prismium);
    },
  }
});</code></pre>
          </LazyAppCode>
        </li>
        <li>
          <p v-html="$t(`${i18nPage}.events.list.method`)"></p>
          <LazyAppCode lang="js">
            <pre><code>const prismium = new Prismium('[data-prismium]');
prismium.on('beforeOpen', (prismium) => {
  console.log(prismium);
});</code></pre>
          </LazyAppCode>
        </li>
      </ol>
      <p v-html="$t(`${i18nPage}.events.note`)"></p>

      <ElementsDocsItem
        id="event-before-init"
        title="beforeInit"
        args="(prismium)"
      >
        {{ $t(`${i18nPage}.events.before_init.description`) }}
      </ElementsDocsItem>

      <ElementsDocsItem id="event-init" title="init" args="(prismium)">
        {{ $t(`${i18nPage}.events.init.description`) }}
      </ElementsDocsItem>

      <ElementsDocsItem
        id="event-after-init"
        title="beforeOpen"
        args="(prismium)"
      >
        {{ $t(`${i18nPage}.events.after_init.description`) }}
      </ElementsDocsItem>

      <ElementsDocsItem
        id="event-before-open"
        title="beforeOpen"
        args="(prismium)"
      >
        {{ $t(`${i18nPage}.events.before_open.description`) }}
      </ElementsDocsItem>

      <ElementsDocsItem id="event-open" title="open" args="(prismium)">
        {{ $t(`${i18nPage}.events.open.description`) }}
      </ElementsDocsItem>

      <ElementsDocsItem
        id="event-after-open"
        title="afterOpen"
        args="(prismium)"
      >
        {{ $t(`${i18nPage}.events.after_open.description`) }}
      </ElementsDocsItem>

      <ElementsDocsItem
        id="event-before-close"
        title="beforeClose"
        args="(prismium)"
      >
        {{ $t(`${i18nPage}.events.before_close.description`) }}
      </ElementsDocsItem>

      <ElementsDocsItem id="event-close" title="close" args="(prismium)">
        {{ $t(`${i18nPage}.events.close.description`) }}
      </ElementsDocsItem>

      <ElementsDocsItem
        id="event-after-close"
        title="afterClose"
        args="(prismium)"
      >
        {{ $t(`${i18nPage}.events.after_close.description`) }}
      </ElementsDocsItem>

      <ElementsDocsItem
        id="event-before-destroy"
        title="beforeDestroy"
        args="(prismium)"
      >
        {{ $t(`${i18nPage}.events.before_destroy.description`) }}
      </ElementsDocsItem>

      <ElementsDocsItem id="event-destroy" title="destroy" args="(prismium)">
        {{ $t(`${i18nPage}.events.destroy.description`) }}
      </ElementsDocsItem>

      <ElementsDocsItem
        id="event-after-destroy"
        title="afterDestroy"
        args="(prismium)"
      >
        {{ $t(`${i18nPage}.events.after_destroy.description`) }}
      </ElementsDocsItem>

      <ElementsDocsItem
        id="event-effect-start"
        title="effectStart"
        args="(prismium, direction)"
      >
        <span v-html="$t(`${i18nPage}.events.effect_start.description`)"></span>
      </ElementsDocsItem>

      <ElementsDocsItem
        id="event-effect-end"
        title="effectEnd"
        args="(prismium, direction)"
      >
        <span v-html="$t(`${i18nPage}.events.effect_end.description`)"></span>
      </ElementsDocsItem>

      <h2>{{ $t(`${i18nPage}.ts.title`) }}</h2>
      <p v-html="$t(`${i18nPage}.ts.description`)"></p>
      <LazyAppCode lang="js">
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
      </LazyAppCode>
    </LazySectionsDocs>
  </div>
</template>

<style lang="scss">
.local-code {
  @apply text-primary/80;
}
</style>
