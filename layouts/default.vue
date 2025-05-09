<script setup>
import { ANIMATION, MEDIA } from '~/config';

const { locale } = useI18n();
const { $initScrollSmoother, $gsap, $cubicDefault } = useNuxtApp();
const { isMobile } = useDevice();

const pageRef = ref(null);
const isLoad = ref(false);
const isOldBrowser = useState('isOldBrowser');

// let scrollSmoother;
onMounted(() => {
  isLoad.value = true;
  pageRef.value.classList.remove('overflow-hidden');
  pageRef.value.classList.remove('h-screen');

  nextTick(() => {
    // if (!isMobile.value.any() && !('ontouchstart' in window)) {
    //   scrollSmoother = $initScrollSmoother();
    // }

    if (isOldBrowser.value) {
      pageRef.value.style.opacity = 1;
    } else {
      $gsap.fromTo(
        pageRef.value,
        { opacity: 0 },
        { opacity: 1, ease: $cubicDefault, duration: ANIMATION.LONG }
      );
    }
  });
});

onUnmounted(() => {
  if (scrollSmoother) {
    scrollSmoother ? scrollSmoother.kill : null;
  }
});

useAlternateLanguageLinks();

watchEffect(() => {
  useHead({
    htmlAttrs: {
      lang: locale.value,
      class: 'page',
    },
    bodyAttrs: {
      class: 'page__body',
    },
  });
});
</script>

<template>
  <div>
    <NuxtLoadingIndicator color="#89ffff" v-if="isLoad" />
    <LazyErrorOldBrowser v-if="isOldBrowser" />

    <AppPreloader v-if="!isLoad" />

    <div class="h-screen overflow-hidden font-primary opacity-0" ref="pageRef">
      <BaseHeader />

      <div class="wrapper">
        <div class="wrapper__content">
          <main class="main">
            <slot></slot>
          </main>

          <LazyBaseFooter />
        </div>
      </div>
    </div>
  </div>
</template>
