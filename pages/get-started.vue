<script setup>
import { AppBreadcrumbs } from '#components';

import codeCdnBundle from '~/examples/cdn/bundle.html?raw';
import codeCdnModule from '~/examples/cdn/module.html?raw';
import codeBaseTemplate from '~/examples/base-template/index.html?raw';

const { t: $t } = useI18n();

useHead(
  processHead({
    title: $t('pages.get_started.seo.title'),
    description: $t('pages.get_started.seo.description'),
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
      <h2>Установка</h2>
      <p>
        У вас имеется несколько способов установить <b>Prismium</b> в ваш
        проект. Все зависит от ваших предпочтений и требований проекта.
      </p>

      <h3>Установка через <strong>NPM</strong></h3>
      <AppTerminal class="max-w-[300px]" command="npm install prismium" />
      <AppCode language="javascript">
        <pre><code>import Prismium from 'prismium'; // library
import 'prismium/css'; // styles

new Prismium(/* ... */);</code></pre>
      </AppCode>
      <p>
        По умолчанию <b>Prismium</b> импортируется без тем и модулей. Если вам
        не достаточно стандартного функционала, то вам придется импортировать
        необходимые вам модули и темы.
      </p>
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
      <p>
        Если вы не хотите импортировать модули или темы, вы можете использовать
        <b>Prismium</b> со всеми модулями и темами по умолчанию. Однако, это
        может привести к увеличению размера вашего бандла.
      </p>
      <AppCode language="javascript">
        <pre><code>import Prismium from 'prismium/bundle'; // bundle
import 'prismium/css/bundle'; // style bundle

new Prismium('[data-prismium]', {
  theme: 'dark',
});</code></pre>
      </AppCode>

      <h3>Использование через <strong>CDN</strong></h3>
      <AppCode language="html">{{ codeCdnBundle }}</AppCode>
      <AppCode language="html">{{ codeCdnModule }}</AppCode>

      <h3>Скачать ресурсы</h3>
      <p>
        Если вы хотите использовать <b>Prismium</b> локально, то вы можете
        загрузить ресурсы с сайта:
        <AppLink to="https://www.jsdelivr.com/package/npm/prismium"
          >jsdelivr.com</AppLink
        >
      </p>

      <h2>Добавление HTML шаблона <strong>Prismium</strong></h2>
      <p>Давайте добавим базовый шаблон <b>Prismium</b> в ваше приложение:</p>
      <AppCode language="html">{{ codeBaseTemplate }}</AppCode>

      <h2>Инициализация <strong>Prismium</strong> в проекте</h2>
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

      <h2>Настройка стилей и размеров <strong>Prismium</strong></h2>
      <p>
        Скорее всего вам понадобится кастомизировать <b>Prismium</b>, сделать
        это очень просто, просто обращайтесь к классам которые вы задали в HTML
        <b>Prismium</b> или к своим классам, которые вы зададите сами.
        <AppLink to="/core">Список основных классов</AppLink>
      </p>
      <p>
        Если вам не надо сильно кастомизировать <b>Prismium</b>, то возможно вам
        хватит базовых CSS переменных. С их списком вы можете ознакомиться тут
        по <AppLink to="/core">ссылке</AppLink>. Кстати, темы
        <b>Prismium</b> полностью реализованы с применением базовых CSS
        переменных библиотеки, так что вам ничто не мешает с легкостью создать
        свою тему.
      </p>
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

      <h2>Что делать дальше?</h2>
      <p>
        Как можете заметить, <b>Prismium</b> очень прост в использовании и
        настройке. Вы можете использовать его в своем проекте, как только вы
        добавили его в проект и инициализировали. Но это только начало!
      </p>
      <p><b>Что вы можете сделать дальше:</b></p>
      <ul>
        <li>
          Ознакомиться <AppLink to="/core">с полной документацией</AppLink>
          <b> Prismium</b>
        </li>
        <li>
          Ознакомиться с уже готовыми
          <AppLink to="/demo">демо кейсами Prismium</AppLink>
        </li>
        <li>
          Попробовать реализовать свой <b>Prismium</b> через
          <AppLink to="/constructor">конструктор</AppLink>
        </li>
        <li>
          Если у вас возникли вопросы, вы можете задать их на
          <AppLink to="https://stackoverflow.com/questions"
            >StackOverflow</AppLink
          >
          или
          <AppLink to="https://github.com/koirodev/prismium/discussions"
            >Prismium Discussions</AppLink
          >.
        </li>
        <li>
          Если вы обнаружили ошибку или у вас есть предложение по улучшению
          <b>Prismium</b>, создайте issue на
          <AppLink to="https://github.com/koirodev/prismium/issues"
            >GitHub</AppLink
          >
        </li>
      </ul>
    </SectionsDocs>
  </div>
</template>
