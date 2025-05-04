<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'button',
  },
  to: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  tabindex: {
    type: [String, Number],
    default: null,
  },
  icon: {
    type: String,
    default: null,
  },
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'dark', 'light'].includes(value),
  },
});

const { component, linkProps, icon } = useButton(props);

const classes = computed(() => [
  {
    [`button_${props.variant}`]:
      props.variant !== 'default' && props.variant != '',
  },
]);
</script>

<template>
  <component
    :is="component"
    :class="['button', classes]"
    v-bind="linkProps"
    :type="!to ? type : null"
    :title="title ?? $slots.default?.()?.[0]?.children ?? ''"
    :tabindex="tabindex || null"
    :disabled="disabled || null"
  >
    <span class="button__text"><slot></slot></span>
    <span class="button__icon" v-if="props.icon">
      <component :is="icon" class="icon" />
    </span>
  </component>
</template>
