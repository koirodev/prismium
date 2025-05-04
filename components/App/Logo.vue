<script setup>
const versionPrefix = ref('v');
const versionValue = ref('4.0.0');
const version = computed(() => versionPrefix.value + versionValue.value);

onMounted(async () => {
  try {
    const { data } = await useFetch(
      'https://registry.npmjs.org/prismium/latest'
    );
    if (data.value) {
      versionValue.value = data.value.version;
    }
  } catch (error) {
    console.error('Failed to fetch package version:', error);
  }
});
</script>

<template>
  <div
    class="relative flex w-fit select-none items-end justify-start gap-2 no-underline max-mm:gap-1"
  >
    <AppLink
      class="logo-image relative top-1 flex size-12 shrink-0 cursor-pointer select-none"
      to="/"
    >
      <SvgLogoLight
        class="logo-icon pointer-events-none absolute left-0 top-0 size-full"
        :fontControlled="false"
        filled
      />
    </AppLink>
    <AppLink
      class="text-s font-secondary text-2xl lowercase leading-none"
      to="/"
    >
      prismium
    </AppLink>
    <AppLink
      class="bg-primary-default/30 any-hover:border-stroke-light/80 animation-default border-stroke-light font-primary text-text-light-primary relative flex h-fit w-fit self-center overflow-hidden rounded-md border px-1 py-1 text-xs leading-none no-underline transition-colors"
      to="https://www.npmjs.com/package/prismium"
    >
      {{ version }}
    </AppLink>
  </div>
</template>
