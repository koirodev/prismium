<script setup>
const props = defineProps({
  command: {
    type: String,
    default: null,
  },
});
const isCopied = ref(false);

const copyCommand = () => {
  navigator.clipboard.writeText(props.command);
  isCopied.value = true;
  setTimeout(() => {
    isCopied.value = false;
  }, 5000);
};
</script>

<template>
  <div
    class="relative inline-flex size-fit w-full items-center gap-2 rounded border border-stroke-light bg-dark/30 p-2 backdrop-blur-sm"
  >
    <span class="icon-wrapper">
      <SvgFiRrAngleSmallRight class="icon" />
    </span>
    <input
      class="w-full bg-transparent text-base"
      type="text"
      disabled
      autocomplete="off"
      :name="`command ${command}`"
      :value="command"
      :aria-label="$t('common.copy_get_started')"
    />
    <span class="icon-wrapper">
      <button
        type="button"
        :area-label="!isCopied ? $t('common.copy') : $t('common.copied')"
        padded="false"
        @click.prevent="copyCommand"
        v-tippy
      >
        <SvgFiRrCopy class="icon" v-if="!isCopied" />
        <SvgFiRrCheck class="icon" v-else />
      </button>
    </span>
  </div>
</template>

<style lang="scss" scoped>
.icon {
  --icon-size: 100%;
  --icon-color: theme('colors.light.DEFAULT');
}

.icon-wrapper {
  @apply size-5 shrink-0;
}
</style>
