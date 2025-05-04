<script setup>
const props = defineProps({
  to: {
    type: String,
    default: null,
  },
});

const { component, linkProps } = useAppLink(props);
</script>

<template>
  <component :is="component" v-bind="linkProps">
    <slot></slot>
  </component>
</template>
