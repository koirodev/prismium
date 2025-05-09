<script setup>
import { ANIMATION } from '~/config';

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  variant: {
    type: String,
    default: 'dark',
    validator: (value) => ['dark', 'light'].includes(value),
  },
});

const { $globalSizes } = useNuxtApp();

onMounted(() => {
  nextTick(() => {
    $globalSizes.setGlobalBreadcrumbsHeight();
  });
});

onUnmounted(() => {
  nextTick(() => {
    $globalSizes.setGlobalBreadcrumbsHeight();
  });
});

const classes = computed(() => [
  {
    [`breadcrumbs_${props.variant}`]:
      props.variant !== 'dark' && props.variant != '',
  },
]);
</script>

<template>
  <div :class="['breadcrumbs section', classes]" v-if="items">
    <div class="container">
      <ul
        class="breadcrumbs__list text"
        itemscope
        itemtype="https://schema.org/BreadcrumbList"
      >
        <li
          class="breadcrumbs__item"
          itemprop="itemListElement"
          itemscope
          itemtype="https://schema.org/ListItem"
          v-for="(item, i) in items"
          :key="i"
        >
          <AppLink
            class="breadcrumbs__link"
            itemprop="item"
            :to="item.to"
            :title="item.title"
          >
            <span class="breadcrumbs__text text" itemprop="name">
              {{ item.title }}
            </span>
            <meta itemprop="position" :content="i" />
          </AppLink>
        </li>
      </ul>
    </div>
  </div>
</template>
