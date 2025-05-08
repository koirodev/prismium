<script setup>
const props = defineProps({
  language: {
    type: String,
    default: 'javascript',
  },
  small: {
    type: Boolean,
    default: false,
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
    class="relative h-fit w-full overflow-hidden rounded border border-stroke"
    v-highlight
  >
    <button
      class="absolute right-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded bg-dark2/50 backdrop-blur-sm"
      type="button"
      :area-label="!isCopied ? $t('common.copy') : $t('common.copied')"
      @click="copyCommand"
      v-tippy
    >
      <SvgFiRrCopy class="icon" v-if="!isCopied" />
      <SvgFiRrCheck class="icon" v-else />
    </button>
    <div
      class="max-h-[70vh] w-full overflow-auto"
      v-scrollbar="{ scrollbars: { autoHide: 'leave' } }"
    >
      <pre><code :class="`language-${language}`"><slot></slot></code></pre>
    </div>
  </div>

  <code
    :class="`small language-${language}`"
    :area-label="!isCopied ? $t('common.copy') : $t('common.copied')"
    @click="copyCommand"
    v-tippy
    v-else
    ><slot></slot
  ></code>
</template>

<style lang="scss" scoped>
pre {
  @apply m-0 w-full min-w-fit overflow-auto bg-dark2;
}

.small {
  font: inherit;

  @apply cursor-pointer rounded border border-stroke bg-stroke px-2 py-1;
}

.icon {
  --icon-color: theme('colors.white');
  --icon-size: 60%;
}
</style>
