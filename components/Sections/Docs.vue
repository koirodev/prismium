<script setup>
const containerRef = ref(null);
</script>

<template>
  <section class="section">
    <div class="container grid grid-cols-5" ref="containerRef">
      <template name="aside"></template>
      <TypographyArticle class="local-article"><slot></slot></TypographyArticle>
      <ClientOnly>
        <AppTOC class="local-toc" :container="containerRef" />
      </ClientOnly>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.container {
  grid-template-columns: 300px calc(100% - 600px) 300px;

  @apply grid;

  & {
    @include media(1450px) {
      grid-template-columns: 300px calc(100% - 300px);
    }
    @include media(990px) {
      grid-template-columns: 100%;
    }
  }
}

.local-toc {
  @apply sticky left-0 top-0 col-start-1 row-start-1;

  & {
    @include media(990px) {
      @apply hidden;
    }
  }
}

.local-article {
  @apply col-start-2 row-start-1 px-8;

  & {
    @include media(990px) {
      @apply col-start-1 p-0;
    }
  }
}
</style>
