<script setup>
const props = defineProps({
  from: {
    type: String,
    required: true,
  },
});

const activeContent = ref('');
const activeLanguage = ref('core');

let codeCore, codeReact, codeVue;

const loadCodes = async () => {
  const modules = import.meta.glob('~/examples/**/index.*', {
    query: '?raw',
    import: 'default',
  });
  const htmlKey = Object.keys(modules).find((key) =>
    key.includes(`/${props.from}/index.html`)
  );
  if (htmlKey) codeCore = await modules[htmlKey]();
  const jsxKey = Object.keys(modules).find((key) =>
    key.includes(`/${props.from}/index.jsx`)
  );
  if (jsxKey) codeReact = await modules[jsxKey]();
  const vueKey = Object.keys(modules).find((key) =>
    key.includes(`/${props.from}/index.vue`)
  );
  if (vueKey) codeVue = await modules[vueKey]();

  activeContent.value = codeCore;
  activeLanguage.value = 'core';
};
onMounted(loadCodes);

const toggle = (lang) => {
  switch (lang) {
    case 'core':
      activeContent.value = codeCore;
      activeLanguage.value = 'core';
      break;
    case 'react':
      activeContent.value = codeReact;
      activeLanguage.value = 'react';
      break;
    case 'vue':
      activeContent.value = codeVue;
      activeLanguage.value = 'vue';
      break;
  }
};
</script>

<template>
  <div class="flex-start flex-col gap-4">
    <div class="flex-start w-full flex-wrap gap-2">
      <AppTab
        :active="activeLanguage === 'core'"
        @click.prevent="toggle('core')"
        >Core</AppTab
      >
      <AppTab
        :active="activeLanguage === 'react'"
        @click.prevent="toggle('react')"
        >React</AppTab
      >
      <AppTab :active="activeLanguage === 'vue'" @click.prevent="toggle('vue')"
        >Vue.js</AppTab
      >
    </div>
    <div class="w-full">
      <AppCode lang="html" v-if="activeLanguage === 'core'">{{
        activeContent
      }}</AppCode>
      <AppCode lang="jsx" v-if="activeLanguage === 'react'">{{
        activeContent
      }}</AppCode>
      <AppCode lang="html" v-if="activeLanguage === 'vue'">{{
        activeContent
      }}</AppCode>
    </div>
  </div>
</template>
