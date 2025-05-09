<script setup>
import { AppBreadcrumbs } from '#components';

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
          title: $t('pages.get_started.common.breadcrumbs'),
          to: $t('pages.get_started.common.link'),
        },
      ]"
    />

    <SectionsTitle :title="$t('pages.get_started.h1')" />

    <SectionsDocs class="section_padding_bottom">
      <h2 v-html="$t(`${i18nPage}.installation.title`)"></h2>
      <p v-html="$t(`${i18nPage}.installation.description`)"></p>

      <h3 v-html="$t(`${i18nPage}.installation.npm.title`)"></h3>
      <AppTerminal class="max-w-[300px]" command="npm install prismium" />
      <AppCode language="javascript">
        <pre><code>import Prismium from 'prismium'; // library
import 'prismium/css'; // styles

new Prismium(/* ... */);</code></pre>
      </AppCode>
      <p v-html="$t(`${i18nPage}.installation.npm.theme_desc`)"></p>
      <AppCode language="javascript">
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
      <AppCode language="javascript">
        <pre><code>import Prismium from 'prismium/bundle'; // bundle
import 'prismium/css/bundle'; // style bundle

new Prismium('[data-prismium]', {
  theme: 'dark',
});</code></pre>
      </AppCode>

      <h3 v-html="$t(`${i18nPage}.installation.cdn.title`)"></h3>
      <AppCode language="html">{{ codeCdnBundle }}</AppCode>
      <AppCode language="html">{{ codeCdnModule }}</AppCode>

      <h3 v-html="$t(`${i18nPage}.installation.download.title`)"></h3>
      <p v-html="$t(`${i18nPage}.installation.download.description`)"></p>

      <h2 v-html="$t(`${i18nPage}.html.title`)"></h2>
      <p v-html="$t(`${i18nPage}.html.description`)"></p>
      <AppCode language="html">{{ codeBaseTemplate }}</AppCode>

      <h2 v-html="$t(`${i18nPage}.init.title`)"></h2>
      <AppCode language="javascript">
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
      <AppCode language="css">
        <pre><code>.prismium {
  --prismium-background-color-disabled: #C5C5C5;
  --prismium-background-color-hover: #DFFFFF;
  --prismium-background-color-primary: #FCFFFF;
  --prismium-border-color-primary: #C5C5C5;
  --prismium-border-radius: 12px;
  --prismium-border-width: 1px;
  --prismium-content-gap: 20px;
  --prismium-content-offset: 20px;
  --prismium-link-color-hover: #C93AD6;
  --prismium-link-color-primary: #3234B4;
  --prismium-link-decoration: underline;
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
          v-for="i in 4"
          :key="i"
          v-html="$t(`${i18nPage}.next.list[${i}]`)"
        ></li>
      </ul>
    </SectionsDocs>
  </div>
</template>
