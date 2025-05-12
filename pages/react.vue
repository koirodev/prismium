<script setup></script>

<template>
  <div>
    <SectionsDefault
      class="section_padding_top section_padding_bottom"
      :title="$t('common.temp')"
    >
      <AppButton :to="$t('pages.home.common.link')" icon="fi-rr-bed">{{
        $t('common.back_home')
      }}</AppButton>
    </SectionsDefault>
  </div>
</template>
