<script setup>
import { useDemoSettings } from '~/stores/demoSettingsStore';

const demoSettings = useDemoSettings();
const { $ScrollTrigger } = useNuxtApp();
const darkTheme = ref(false);

const setTheme = (theme) => {
  demoSettings.setTheme(theme);

  switch (theme) {
    case 'dark':
      darkTheme.value = true;
      break;
    case 'dark-contrast':
      darkTheme.value = true;
      break;
    case 'clear':
      darkTheme.value = false;
      break;
    default:
      darkTheme.value = false;
  }
};

const setDirection = (direction) => {
  demoSettings.setDirection(direction);
};

const setAnimation = (animation) => {
  demoSettings.setAnimation(animation);
};

const demoRef = ref(null);
const sectionRef = ref(null);

onMounted(() => {
  const offset = '50%';

  setTimeout(() => {
    nextTick(() => {
      if (demoRef.value && sectionRef.value) {
        sectionRef.value
          .querySelectorAll('[data-preview-right]')
          .forEach((el) => {
            $ScrollTrigger.create({
              trigger: el,
              start: `top ${offset}`,
              end: `bottom ${offset}`,
              onEnter: () => {
                demoRef.value?.classList.remove('preview_left');
                demoRef.value?.classList.add('preview_right');
              },
              onEnterBack: () => {
                demoRef.value?.classList.remove('preview_left');
                demoRef.value?.classList.add('preview_right');
              },
              onLeaveBack: () => {
                demoRef.value?.classList.remove('preview_right');
              },
              onLeave: () => {
                demoRef.value?.classList.remove('preview_right');
              },
            });
          });
      }
      if (demoRef.value && sectionRef.value) {
        sectionRef.value
          .querySelectorAll('[data-preview-left]')
          .forEach((el) => {
            $ScrollTrigger.create({
              trigger: el,
              start: `top ${offset}`,
              end: `bottom ${offset}`,
              onEnter: () => {
                demoRef.value?.classList.remove('preview_right');
                demoRef.value?.classList.add('preview_left');
              },
              onEnterBack: () => {
                demoRef.value?.classList.remove('preview_right');
                demoRef.value?.classList.add('preview_left');
              },
              onLeaveBack: () => {
                demoRef.value?.classList.remove('preview_left');
              },
              onLeave: () => {
                demoRef.value?.classList.remove('preview_left');
              },
            });
          });
      }
    });
  }, 200);
});
</script>

<template>
  <section class="section" ref="sectionRef">
    <div
      class="container grid grid-cols-2 gap-[var(--local-gap)] max-mt:flex max-mt:flex-col"
    >
      <div>
        <div class="local-block" data-preview-right>
          <h2
            class="h2 text-light"
            v-html="$t('presentation.select_you_theme.title')"
          ></h2>

          <div class="tab-wrapper">
            <AppTab
              :active="demoSettings.theme === 'clear'"
              @click="setTheme('clear')"
              >Clear ({{ $t('common.without_theme') }})</AppTab
            >
            <AppTab
              :active="demoSettings.theme === 'light'"
              @click="setTheme('light')"
              >Light</AppTab
            >
            <AppTab
              :active="demoSettings.theme === 'light-contrast'"
              @click="setTheme('light-contrast')"
              >Light contrast</AppTab
            >
            <AppTab
              :active="demoSettings.theme === 'dark'"
              @click="setTheme('dark')"
              >Dark</AppTab
            >
            <AppTab
              :active="demoSettings.theme === 'dark-contrast'"
              @click="setTheme('dark-contrast')"
              >Dark contrast</AppTab
            >
            <AppTab
              :active="demoSettings.theme === 'forest'"
              @click="setTheme('forest')"
              >Forest</AppTab
            >
            <AppTab
              :active="demoSettings.theme === 'ocean'"
              @click="setTheme('ocean')"
              >Ocean</AppTab
            >
            <AppTab
              :active="demoSettings.theme === 'sunset'"
              @click="setTheme('sunset')"
              >Sunset</AppTab
            >
          </div>
          <p
            class="text_base text-light/70"
            v-html="$t('presentation.select_you_theme.description')"
          ></p>
        </div>
        <div class="local-block" data-preview-left>
          <h2
            class="h2 text-light"
            v-html="$t('presentation.animations.title')"
          ></h2>
          <div class="tab-wrapper">
            <AppTab
              :active="demoSettings.animation === 'line-by-line'"
              @click="setAnimation('line-by-line')"
              >Line By Line</AppTab
            >
            <AppTab
              :active="demoSettings.animation === 'fade-scale'"
              @click="setAnimation('fade-scale')"
              >Fade Scale</AppTab
            >
            <AppTab
              :active="demoSettings.animation === 'slide'"
              @click="setAnimation('slide')"
              >Slide</AppTab
            >
            <AppTab
              :active="demoSettings.animation === 'stagger'"
              @click="setAnimation('stagger')"
              >Stagger</AppTab
            >
            <AppTab
              :active="demoSettings.animation === 'wave'"
              @click="setAnimation('wave')"
              >Wave</AppTab
            >
            <AppTab
              :active="demoSettings.animation === 'flip'"
              @click="setAnimation('flip')"
              >Flip</AppTab
            >
            <AppTab
              :active="demoSettings.animation === 'zoom'"
              @click="setAnimation('zoom')"
              >Zoom</AppTab
            >
            <AppTab
              :active="demoSettings.animation === 'cascade'"
              @click="setAnimation('cascade')"
              >Cascade</AppTab
            >
          </div>
          <p class="text_base text-light/70">
            {{ $t('presentation.animations.description') }}
          </p>
        </div>
        <div class="local-block" data-preview-right>
          <h2 class="h2" v-html="$t('presentation.attention.title')"></h2>
          <p
            class="text_base text-light/70"
            v-html="$t('presentation.attention.description')"
          ></p>
        </div>
        <div class="local-block" data-preview-left>
          <h2 class="h2" v-html="$t('presentation.accessibility.title')"></h2>
          <p
            class="text_base text-light/70"
            v-html="$t('presentation.accessibility.description')"
          ></p>
          <p class="text_xs -mb-2 text-light/70 max-mt:hidden">
            {{ $t('presentation.accessibility.theme') }}
          </p>
          <div class="tab-wrapper">
            <AppTab
              :active="demoSettings.theme === 'light-contrast'"
              @click="setTheme('light-contrast')"
              >Light contrast</AppTab
            >
            <AppTab
              :active="demoSettings.theme === 'dark-contrast'"
              @click="setTheme('dark-contrast')"
              >Dark contrast</AppTab
            >
          </div>
          <p class="text_xs -mb-2 text-light/70 max-mt:hidden">
            {{ $t('presentation.accessibility.rtl') }}
          </p>
          <div class="tab-wrapper">
            <AppTab
              :active="demoSettings.direction === 'ltr'"
              @click="setDirection('ltr')"
              >LTR</AppTab
            >
            <AppTab
              :active="demoSettings.direction === 'rtl'"
              @click="setDirection('rtl')"
              >RTL</AppTab
            >
          </div>
        </div>
        <div class="local-block" data-preview-right>
          <h2
            class="h2 text-light"
            v-html="$t('presentation.compatibility.title')"
          ></h2>
          <p
            class="text_base text-light/70"
            v-html="$t('presentation.compatibility.description')"
          ></p>
          <p
            class="text_base text-light/70"
            v-html="$t('presentation.compatibility.description_2')"
          ></p>
        </div>
      </div>
      <div class="preview" ref="demoRef">
        <ElementsPrismiumPreview
          :class="['preview__item', { preview__item_light: darkTheme }]"
          :key="demoSettings.theme + demoSettings.animation"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section {
  --local-gap: #{rem(24)};
}

.tab-wrapper {
  @apply flex flex-wrap gap-2;

  & {
    @include mediaTablet {
      @apply hidden;
    }
  }
}

.local-block {
  @apply relative flex min-h-screen flex-col items-start justify-center gap-4;

  & {
    @include mediaTablet {
      @apply min-h-fit w-full pb-[var(--section-padding)];
    }
  }

  &[data-preview-left] {
    left: calc(100% + var(--local-gap));

    & {
      @include mediaTablet {
        left: 0;
      }
    }
  }
}

.preview {
  --local-pin-pong: cubic-bezier(0.55, 0.05, 0.4, 1.45);
  --local-ease: theme('transitionTimingFunction.default');
  --local-animation: 0.6s var(--local-pin-pong);
  --local-animation-short: 0.4s var(--local-ease);

  right: 0;

  transition: right var(--local-animation-short);

  @apply relative flex w-full items-start justify-start;

  & {
    @include mediaTablet {
      @apply hidden;
    }
  }

  &_right {
    .preview__item {
      transform: perspective(1000px) rotateY(-20deg) rotateX(5deg);
    }
  }

  &_left {
    right: calc(100% + var(--local-gap));

    .preview__item {
      transform: perspective(1000px) rotateY(22deg) rotateX(3deg);
    }
  }

  &__item {
    transition:
      transform var(--local-animation),
      background-color var(--local-animation-short);

    @apply sticky mx-auto size-full overflow-auto rounded border border-stroke bg-dark2/20 p-4 backdrop-blur-sm;

    &_light {
      @apply bg-light;
    }

    & {
      top: calc(var(--global-header-height, 80px) + 10px);
      left: 50%;

      max-height: calc(100vh - (var(--global-header-height, 80px) + 10px) * 2);
    }
  }
}
</style>
<style>
.prismium.prismium_clear {
  --pr-icon-size: 24px;
  --pr-current-font: 500 24px / 1.5 sans-serif;
  --pr-content-font: 500 16px / 1.5 sans-serif;
}
</style>
