<script setup>
const { isHeaderHidden } = useHeaderScroll();
const { $globalSizes } = useNuxtApp();

onMounted(() => {
  $globalSizes.updateAllSizes();
  window.addEventListener('resize', $globalSizes.updateAllSizes);
});

onUnmounted(() => {
  window.removeEventListener('resize', $globalSizes.updateAllSizes);
});
</script>

<template>
  <header
    :class="[
      'animation-default fixed left-0 top-0 z-50 h-fit w-full bg-gradient-to-b from-dark to-transparent py-4 backdrop-blur-[1px] transition-transform',
      { '-translate-y-full': isHeaderHidden },
    ]"
  >
    <div class="container flex items-end justify-start gap-5">
      <AppLogo />

      <BaseNav />

      <AppBurgerButton />
    </div>
  </header>
</template>
