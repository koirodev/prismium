<script setup>
const error = useError();
const { t: $t } = useI18n();

const headTitle = computed(() => {
  if (!error.value) return $t('pages.error.seo.unknown');
  if (error.value.statusCode === 404) return $t('pages.error.seo.404');
  if (error.value.statusCode === 500) return $t('pages.error.seo.500');
  return $t('pages.error.seo.other', { code: error?.value?.statusCode });
});

onMounted(() => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'instant',
  });
});

useHead({
  title: headTitle.value,
  meta: [
    {
      name: 'robots',
      content: 'noindex, nofollow',
    },
  ],
});
</script>

<template>
  <NuxtLayout name="default">
    <SectionsDefault
      class="section_center section_padding_top section_padding_bottom"
      :title="$t('pages.error.404.title')"
      :description="$t('pages.error.404.description')"
      v-if="!error || error?.statusCode === 404"
    >
      <div class="flex-center">
        <AppButton :to="$t('pages.home.common.link')" icon="fi-rr-bed">{{
          $t('common.back_home')
        }}</AppButton>
      </div>
    </SectionsDefault>
    <SectionsDefault
      class="section_center section_padding_top section_padding_bottom"
      :title="$t('pages.error.500.title')"
      :description="$t('pages.error.500.description')"
      v-else-if="error?.statusCode === 500"
    >
      <div class="flex-center">
        <AppButton :to="$t('pages.home.common.link')" icon="fi-rr-bed">{{
          $t('common.back_home')
        }}</AppButton>
      </div>
    </SectionsDefault>
    <SectionsDefault
      class="section_center section_padding_top section_padding_bottom"
      :title="$t('pages.error.000.title', { code: error?.statusCode })"
      :description="$t('pages.error.000.description')"
      v-else
    >
      <div class="flex-center">
        <AppButton :to="$t('pages.home.common.link')" icon="fi-rr-bed">{{
          $t('common.back_home')
        }}</AppButton>
      </div>
    </SectionsDefault>
  </NuxtLayout>
</template>
