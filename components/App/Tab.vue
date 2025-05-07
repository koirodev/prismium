<script setup>
const { $stRefresh } = useNuxtApp();

const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});

watch(
  () => props.active,
  (newVal) => {
    if (newVal) {
      $stRefresh();
    }
  },
  { immediate: true }
);
</script>

<template>
  <button :class="['tab', { tab_active: active }]">
    <slot></slot>
  </button>
</template>
