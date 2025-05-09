<script setup>
const props = defineProps({
  container: {
    type: Object,
    required: true,
  },
});

const { toc, generateTOC } = useTOC();
const structuredToc = ref([]);

const createStructuredToc = () => {
  const result = [];

  let localId = 0;
  toc.value.forEach((item) => {
    if (item.heading === 'h2') {
      result.push({
        ...item,
        localId: localId,
        children: [],
      });

      localId++;
    } else if (item.heading === 'h3') {
      result
        .find((t) => t.localId === localId - 1)
        .children.push({
          ...item,
        });
    }
  });

  structuredToc.value = result;
};

watch(
  () => toc.value,
  () => {
    if (toc.value && toc.value.length) {
      createStructuredToc();
    }
  },
  { deep: true }
);

onMounted(() => {
  nextTick(() => {
    const container = props.container;

    if (container) {
      generateTOC(container, { headings: ['h2', 'h3'] });

      if (toc.value && toc.value.length) {
        createStructuredToc();
      }
    }
  });
});
</script>

<template>
  <nav class="toc-container">
    <ul
      class="animation-default flex-start sticky top-[var(--toc-top-offset)] max-h-[var(--toc-max-height)] flex-col overflow-y-auto rounded-lg border border-stroke bg-dark2 p-2 transition-[top_max-height]"
    >
      <template v-if="structuredToc.length > 0">
        <li
          class="toc-item text_md m-0"
          v-for="(h2Item, index) in structuredToc"
          :key="`h2-${index}`"
        >
          <a
            :class="[
              'toc-link animation-default font-medium',
              { active: h2Item.active },
            ]"
            :href="h2Item.link"
          >
            {{ h2Item.text }}
          </a>
          <ul class="relative pl-4" v-if="h2Item.children.length">
            <li
              class="toc-item"
              v-for="(h3Item, subIndex) in h2Item.children"
              :key="`h3-${index}-${subIndex}`"
            >
              <a
                :class="['toc-link text_md', { active: h3Item.active }]"
                :href="h3Item.link"
              >
                {{ h3Item.text }}
              </a>
            </li>
          </ul>
        </li>
      </template>
      <li v-else class="text-sm italic text-gray-500">
        Оглавление загружается...
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.toc-container {
  --toc-max-height: calc(100vh - var(--global-header-height) - 20px);
  --toc-top-offset: calc(var(--global-header-height) + 10px);

  header.-translate-y-full ~ .wrapper & {
    --toc-max-height: calc(100vh - 20px);
    --toc-top-offset: 10px;
  }
}

.toc-item {
  @apply flex w-full flex-col items-start justify-start;
}

.toc-link {
  @apply flex w-full rounded px-3 py-2 text-light transition-colors any-hover:text-light/70;

  &.active {
    @apply bg-light text-dark;
  }
}

.overflow-y-auto {
  @include scrollbarDelete;
}
</style>
