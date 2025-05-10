<script setup>
const props = defineProps({
  lang: {
    type: String,
    default: 'js',
  },
  small: {
    type: Boolean,
    default: false,
  },
  smallClear: {
    type: Boolean,
    default: false,
  },
  backtick: {
    type: Boolean,
    default: false,
  },
  maxHeight: {
    type: String,
    default: '70vh',
  },
});

const isCopied = ref(false);
const $slots = useSlots();

const copyCommand = () => {
  const slotNodes = $slots.default ? $slots.default() : [];
  const textContent = slotNodes
    .map((node) => {
      return typeof node.children === 'string' ? node.children : '';
    })
    .join('');

  navigator.clipboard.writeText(textContent);
  isCopied.value = true;
  setTimeout(() => {
    isCopied.value = false;
  }, 5000);
};
</script>

<template>
  <div
    v-if="!small"
    class="code-block relative h-fit w-full overflow-hidden rounded border border-stroke"
    v-highlight
  >
    <button
      class="absolute right-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded bg-dark2/50 backdrop-blur-sm"
      type="button"
      :aria-label="!isCopied ? $t('common.copy') : $t('common.copied')"
      @click="copyCommand"
      v-tippy
    >
      <SvgFiRrCopy class="icon" v-if="!isCopied" />
      <SvgFiRrCheck class="icon" v-else />
    </button>
    <div
      class="w-full overflow-auto"
      :style="{ maxHeight: maxHeight }"
      v-scrollbar="{ scrollbars: { autoHide: 'leave' } }"
    >
      <pre><code :class="`language-${lang}`"><slot></slot></code></pre>
    </div>
  </div>

  <code
    class="small"
    :aria-label="!isCopied ? $t('common.copy') : $t('common.copied')"
    @click="copyCommand"
    v-tippy
    v-else
    ><slot></slot
  ></code>
</template>

<style lang="scss" scoped>
pre {
  @apply text_md m-0 w-full min-w-fit overflow-auto bg-dark2 !font-mono backdrop-blur-sm;
}

.small {
  font: inherit;

  @apply cursor-pointer rounded border border-stroke bg-dark2 px-2 py-[0.15rem] !font-mono text-light;

  pre {
    font: inherit;
  }
}

.icon {
  --icon-color: theme('colors.white');
  --icon-size: 60%;
}
</style>
