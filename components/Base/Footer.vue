<script setup></script>

<template>
  <footer class="mt-auto py-3">
    <div class="container flex items-center justify-between">
      <span class="text-s font-secondary">
        © prismium 2024 - {{ new Date().getFullYear() }}
      </span>

      <AppLink
        class="icon-wrapper flex size-8"
        to="https://github.com/koirodev/prismium/"
        title="GitHub"
      >
        <SvgGithub class="icon" />
      </AppLink>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.icon-wrapper {
  @include hover {
    .icon {
      --icon-color: theme('colors.primary.DEFAULT');
    }
  }

  .icon {
    --icon-color: theme('colors.light');
    --icon-size: 100%;
  }
}
</style>
