<script setup>
const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  reverse: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    class="max-mm:flex-start grid grid-cols-2 items-center gap-6 max-mm:flex-col"
  >
    <span
      :class="[
        'h3 row-start-1 w-full text-light',
        { 'text-end max-mm:flex-row-reverse max-mm:text-start': !reverse },
        { 'col-start-2 flex-row-reverse text-start': reverse },
      ]"
    >
      {{ title }}
    </span>
    <a
      data-fancybox
      :href="image"
      :class="[
        'row-start-1 flex h-fit w-full overflow-hidden rounded',
        { 'col-start-1': reverse },
      ]"
    >
      <img
        class="image"
        loading="lazy"
        width="1920"
        height="500"
        :src="image"
        :alt="title"
      />
    </a>
  </div>
</template>

<style lang="scss" scoped>
.h3 {
  @apply flex items-center gap-4;
  &::before {
    @apply flex h-px w-full bg-stroke content-[''];
  }
}
</style>
