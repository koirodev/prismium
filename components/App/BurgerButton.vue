<script setup>
const burgerStore = useBurgerStore();
</script>

<template>
  <button
    :class="['burger-button', { active: burgerStore.isBurgerOpen }]"
    @click="burgerStore.toggleBurger"
  >
    <span></span>
  </button>
</template>
