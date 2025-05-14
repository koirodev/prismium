<script setup>
const isVisible = ref(false);

const closeBanner = () => {
  isVisible.value = false;

  const expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + 30);
  localStorage.setItem('warningBannerClosed', expiryDate.toISOString());
};

onMounted(() => {
  const closedUntil = localStorage.getItem('warningBannerClosed');

  if (closedUntil) {
    const expiryDate = new Date(closedUntil);
    const currentDate = new Date();

    if (currentDate >= expiryDate) {
      localStorage.removeItem('warningBannerClosed');
      isVisible.value = true;
    }
  } else {
    isVisible.value = true;
  }
});
</script>

<template>
  <div
    v-if="isVisible"
    class="absolute left-0 top-[var(--global-header-height)] z-20 w-full bg-system-error py-4"
  >
    <div class="container flex items-center justify-between gap-5">
      <span class="text-lg text-dark" v-html="$t('beta_warning.title')"></span>
      <button
        class="size-6 shrink-0"
        :title="$t('beta_warning.close')"
        type="button"
        @click.prevent="closeBanner"
      >
        <SvgFiRrCrossSmall class="icon" />
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.icon {
  --icon-size: 100%;
  --icon-color: theme('colors.dark');
}
</style>
