<script setup>
const { isHeaderHidden } = useHeaderScroll();
const { $globalSizes } = useNuxtApp();
const { isBurgerOpen } = useBurgerStore();
const { locales, setLocale, setLocaleCookie } = useI18n();

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
      'animation-default bg-dark fixed left-0 top-0 z-50 h-fit w-full border-l-fuchsia-950 py-4 transition-transform',
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
