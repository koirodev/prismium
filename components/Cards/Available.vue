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
  to: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <AppLink
    class="flex-start animation-default h-auto w-full flex-col gap-3 rounded border border-stroke p-4 transition-colors any-hover:border-stroke/60"
    :to="props.to"
  >
    <img
      class="mx-auto flex aspect-square w-3/4"
      loading="lazy"
      width="150"
      height="150"
      :src="image"
      :alt="title"
    />
    <span
      class="text_xl animation-default transition-padding max-mm:text_xs self-center text-center text-light"
    >
      {{ title }}
    </span>
  </AppLink>
</template>
