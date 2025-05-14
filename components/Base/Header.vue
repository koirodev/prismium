<script setup>
const { isHeaderHidden } = useHeaderScroll();
const { $globalSizes } = useNuxtApp();
const isStartPosition = ref(false);

const checkStartPosition = () => {
  const scrollY = window.scrollY;
  const headerHeight = $globalSizes.getGlobalHeaderHeight();
  isStartPosition.value = scrollY > headerHeight;
};

onMounted(() => {
  $globalSizes.updateAllSizes();
  checkStartPosition();

  window.addEventListener('resize', $globalSizes.updateAllSizes);
  window.addEventListener('scroll', checkStartPosition);
});

onUnmounted(() => {
  window.removeEventListener('resize', $globalSizes.updateAllSizes);
  window.removeEventListener('scroll', checkStartPosition);
});
</script>

<template>
  <div class="contents">
    <header
      :class="[
        'animation-default fixed left-0 top-0 z-50 h-fit w-full bg-gradient-to-b from-dark to-transparent py-4 transition-[transform_backdrop-filter]',
        { '-translate-y-full': isHeaderHidden },
        { 'backdrop-blur-[1px]': isStartPosition },
      ]"
    >
      <div class="container flex items-end justify-start gap-5">
        <AppLogo />

        <BaseNav />

        <AppBurgerButton />
      </div>
    </header>

    <WarningBanner />
  </div>
</template>
