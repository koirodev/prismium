<script setup>
import codeCdnBundle from '~/examples/cdn/bundle.html?raw';
import codeCdnModule from '~/examples/cdn/module.html?raw';
import codeBaseTemplate from '~/examples/base-template/index.html?raw';

const { t: $t } = useI18n();
const i18nPage = ref('pages.get_started');

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
      <h2 v-html="$t(`${i18nPage}.installation.title`)"></h2>
      <p v-html="$t(`${i18nPage}.installation.description`)"></p>

      <h3 v-html="$t(`${i18nPage}.installation.npm.title`)"></h3>
      <AppTerminal class="max-w-[300px]" command="npm install prismium" />
      <AppCode lang="js">
        <pre><code>import Prismium from 'prismium'; // library
import 'prismium/css'; // styles

new Prismium(/* ... */);</code></pre>
      </AppCode>
      <p v-html="$t(`${i18nPage}.installation.npm.theme_desc`)"></p>
      <AppCode lang="js">
        <pre><code>import Prismium from 'prismium'; // library
import { EffectsModule } from 'prismium/modules'; // modules

import 'prismium/css'; // styles
import 'prismium/theme/dark'; // theme

new Prismium('[data-prismium]', {
  modules: [EffectsModule],
  theme: 'dark',
});</code></pre>
      </AppCode>
      <p v-html="$t(`${i18nPage}.installation.npm.theme_desc_2`)"></p>
      <AppCode lang="js">
        <pre><code>import Prismium from 'prismium/bundle'; // bundle
import 'prismium/css/bundle'; // style bundle

new Prismium('[data-prismium]', {
  theme: 'dark',
});</code></pre>
      </AppCode>

      <h3 v-html="$t(`${i18nPage}.installation.cdn.title`)"></h3>
      <AppCode lang="html">{{ codeCdnBundle }}</AppCode>
      <AppCode lang="html">{{ codeCdnModule }}</AppCode>

      <h3 v-html="$t(`${i18nPage}.installation.download.title`)"></h3>
      <p v-html="$t(`${i18nPage}.installation.download.description`)"></p>

      <h2 v-html="$t(`${i18nPage}.html.title`)"></h2>
      <p v-html="$t(`${i18nPage}.html.description`)"></p>
      <AppCode lang="html">{{ codeBaseTemplate }}</AppCode>

      <h2 v-html="$t(`${i18nPage}.init.title`)"></h2>
      <AppCode lang="js">
        <pre><code>// Minimal initialization for basic usage
new Prismium('[data-prismium]');

// Initialization with the simplest settings
new Prismium('[data-prismium]', {
  theme: 'dark', // styling theme

  speed: {
    open: 500, // opening speed
    close: 350, // closing speed
  },

  autoClose: true, // close adjacent accordions
  autoCloseNested: true, // close adjacent nested accordions

  effect: 'line-by-line', // open and close effect

  scrollTo: true, // scroll to the opened accordion
});</code></pre>
      </AppCode>

      <h2 v-html="$t(`${i18nPage}.styles.title`)"></h2>
      <p v-html="$t(`${i18nPage}.styles.description`)"></p>
      <p v-html="$t(`${i18nPage}.styles.description_2`)"></p>
      <AppCode lang="css">
        <pre><code>.prismium {
  --pr-bg: #1c1c1c;
  --pr-bg-active: var(--pr-bg);
  --pr-bg-hover: #222222;
  --pr-bg-nested: var(--pr-bg);
  --pr-bg-nested-active: #ffffff05;
  --pr-border-color: #3a3a3a;
  --pr-border-radius: 16px;
  --pr-border-width: 1px;
  /* and other variables... */

  width: 100%;
  margin-bottom: 20px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  /* and your other styles... */
}</code></pre>
      </AppCode>

      <h2 v-html="$t(`${i18nPage}.next.title`)"></h2>
      <p v-html="$t(`${i18nPage}.next.description`)"></p>
      <p v-html="$t(`${i18nPage}.next.description_2`)"></p>
      <ul>
        <li
          v-for="i in 5"
          :key="i"
          v-html="$t(`${i18nPage}.next.list[${i - 1}]`)"
        ></li>
      </ul>
    </SectionsDocs>
  </div>
</template>
