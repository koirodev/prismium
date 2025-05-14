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
    'prismium-active': props.open,
  };
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
  --pr-anim-duration: 0.35s;
  --pr-anim-ease: cubic-bezier(0.36, 0.3, 0, 1);
  --pr-bg: theme('colors.dark2');
  --pr-bg-active: theme('colors.dark2');
  --pr-bg-hover: theme('colors.dark2');
  --pr-bg-nested: theme('colors.dark');
  --pr-bg-nested-active: theme('colors.dark2');
  --pr-border-color: theme('colors.stroke.DEFAULT');
  --pr-border-radius: theme('borderRadius.DEFAULT');
  --pr-border-width: 1px;
  --pr-content-color: theme('colors.light.DEFAULT');
  --pr-content-font: theme('fontFamily.primary');
  --pr-content-gap: 20px;
  --pr-content-offset: 30px;
  --pr-current-color: theme('colors.light.DEFAULT');
  --pr-current-font: theme('fontFamily.secondary');
  --pr-current-gap: 20px;
  --pr-gap: 10px;
  --pr-icon-color: var(--pr-current-color);
  --pr-icon-color-hover: theme('colors.primary.DEFAULT');
  --pr-icon-size: 24px;
  --pr-padding: 16px;

  .icon {
    --icon-color: var(--pr-icon-color);
    --icon-size: var(--pr-icon-size);

    @include hover {
      --icon-color: var(--pr-icon-color-hover);
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
