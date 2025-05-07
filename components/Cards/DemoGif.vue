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
});
</script>

<template>
  <div>
    <span class="text_base text-light">Фильтры</span>
    <img
      class=""
      loading="lazy"
      width="1920"
      height="500"
      :src="image"
      :alt="title"
    />
  </div>
</template>
