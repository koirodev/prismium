<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <section class="section" v-if="title">
    <div class="container">
      <h1 class="h2" v-html="title"></h1>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section {
  padding-bottom: calc(var(--section-padding) / 1.7);

  @include mediaTablet {
    padding-bottom: var(--section-padding);
  }
}
</style>
