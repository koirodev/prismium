<script setup>
import { Prismium, PrismiumCurrent, PrismiumContent } from 'prismium/vue';
import { EffectsModule } from 'prismium/modules';
import { ANIMATION } from '~/config';

import 'prismium/scss';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  open: {
    type: Boolean,
    default: false,
  },
});

const prismium = ref(null);
const container = ref(null);
const options = {
  effect: 'line-by-line',
  speed: ANIMATION.DEFAULT * 1000,
  autoClose: false,
  autoCloseNested: false,
};

const classes = computed(() => {
  return {
    'js-prismium-active': props.open,
  };
});
onMounted(() => {
  nextTick(() => {
    console.log(prismium.value.$el.prismium);
  });
});
</script>

<template>
  <Prismium
    :class="['prismium-doc', classes]"
    theme="dark"
    :modules="[EffectsModule]"
    :options="options"
    ref="prismium"
  >
    <PrismiumCurrent>
      <span class="text_base !font-secondary text-light" v-html="title"></span>
      <SvgFiRrAngleSmallDown class="icon" data-prismium-icon />
    </PrismiumCurrent>
    <PrismiumContent>
      <slot></slot>
    </PrismiumContent>
  </Prismium>
</template>

<style lang="scss" scoped>
.prismium-doc {
  --prismium-background-color-active: theme('colors.dark2');
  --prismium-background-color-active-nested: theme('colors.dark2');
  --prismium-background-color-disabled: theme('colors.dark2');
  --prismium-background-color-hover: theme('colors.dark2');
  --prismium-background-color-primary: theme('colors.dark2');
  --prismium-border-color-primary: theme('colors.stroke.DEFAULT');
  --prismium-border-radius: theme('borderRadius.DEFAULT');
  --prismium-border-width: 1px;
  --prismium-content-gap: 20px;
  --prismium-content-offset: 30px;
  --prismium-current-gap: 20px;
  --prismium-duration: theme('transitionDuration.default');
  --prismium-ease: theme('transitionTimingFunction.default');
  --prismium-font-primary: inherit;
  --prismium-font-secondary: inherit;
  --prismium-gap: 10px;
  --prismium-icon-color-hover: theme('colors.primary.DEFAULT');
  --prismium-icon-color-primary: theme('colors.light.DEFAULT');
  --prismium-icon-size: 24px;
  --prismium-link-color-hover: theme('colors.primary.DEFAULT');
  --prismium-link-color-primary: theme('colors.primary.DEFAULT');
  --prismium-padding: 16px;
  --prismium-text-color-primary: theme('colors.light.DEFAULT');
  --prismium-text-color-secondary: inherit;

  a:any-link {
    --link-color: theme('colors.primary.DEFAULT');
    --link-color-hover: theme('colors.primary.DEFAULT');
    --link-stroke-color: theme('colors.primary.transparent');
    --link-stroke-color-hover: theme('colors.primary.DEFAULT');
  }

  .icon {
    --icon-color: var(--prismium-icon-color-primary);
    --icon-size: var(--prismium-icon-size);

    @include hover {
      --icon-color: var(--prismium-icon-color-hover);
    }
  }

  .prismium {
    &__content {
      > :first-child {
        margin-top: 0;
      }

      > :last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
