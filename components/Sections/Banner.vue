<script setup>
import { useNPMStore } from '~/stores/npmStore';

const npmStore = useNPMStore();
const namePrismium = ref('<strong>Prismium</strong>');
</script>

<template>
  <section
    class="section relative flex min-h-screen flex-col justify-center border-b border-stroke-light max-mt:min-h-fit max-mt:justify-start"
  >
    <div
      class="background pointer-events-none absolute left-0 top-0 z-10 flex size-full"
    ></div>
    <div class="container grid grid-cols-2 gap-6 max-mt:flex max-mt:flex-col">
      <div class="local-logo w-ful flex-start z-10 flex-col gap-6">
        <h1 class="flex-start gap h1 flex-col gap-2 text-primary">
          Prismium
          <span class="text_xl font-secondary font-medium text-light">
            {{ $t('banner.title') }}
          </span>
        </h1>
        <div class="flex-start flex-col gap-2">
          <p
            class="text_base text-light/80"
            v-html="$t('banner.description', { name: namePrismium })"
          ></p>
          <span class="text_xs text-light/40">
            {{ $t('common.license_text') }},
            {{ `${npmStore.versionPrefix}${npmStore.version}` }}
            {{ $t('common.released_on') }} {{ npmStore.releaseDate }}
          </span>
        </div>
        <AppButton to="/get-started" icon="fi-rr-rocket">
          {{ $t('common.get_started') }}
        </AppButton>
      </div>
      <AppTerminal
        class="z-10 m-auto max-w-[300px] max-mt:m-0"
        command="npm install prismium"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section {
  margin-top: calc(0px - var(--global-header-height, 80px));

  padding: var(--global-header-height, 80px) 0;

  @include mediaTablet {
    padding-top: calc(var(--global-header-height, 80px) * 2);
  }
}

.background {
  background-image: url('~/assets/svg/banner-background.svg');
  background-position: top center;
  background-size: cover;
}

.local-logo {
  @apply relative;

  &::before {
    background-image: url('~/assets/svg/stroke-logo.svg');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;

    @apply absolute -left-0 -top-16 -z-10 size-64 opacity-10 content-[''];
  }
}
</style>
