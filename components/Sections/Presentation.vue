<script setup>
import { useDemoSettings } from '~/stores/demoSettingsStore';

const demoSettings = useDemoSettings();
const { $gsap, $ScrollTrigger } = useNuxtApp();
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
      darkTheme.value = true;
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
                demoRef.value.classList.remove('preview_left');
                demoRef.value.classList.add('preview_right');
              },
              onEnterBack: () => {
                demoRef.value.classList.remove('preview_left');
                demoRef.value.classList.add('preview_right');
              },
              onLeaveBack: () => {
                demoRef.value.classList.remove('preview_right');
              },
              onLeave: () => {
                demoRef.value.classList.remove('preview_right');
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
                demoRef.value.classList.remove('preview_right');
                demoRef.value.classList.add('preview_left');
              },
              onEnterBack: () => {
                demoRef.value.classList.remove('preview_right');
                demoRef.value.classList.add('preview_left');
              },
              onLeaveBack: () => {
                demoRef.value.classList.remove('preview_left');
              },
              onLeave: () => {
                demoRef.value.classList.remove('preview_left');
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
          <h2 class="h2 text-light">
            Выбери <strong>свой</strong> стиль <strong>Prismium</strong>
          </h2>
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
          <p class="text_base text-light/70">
            А также, у вас всегда остается возможность кастомизировать Prismium
          </p>
        </div>
        <div class="local-block" data-preview-left>
          <h2 class="h2 text-light">
            Используй <strong>современные анимации</strong>
          </h2>
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
            А также, у вас всегда остается возможность реализовать кастомную
            анимацию
          </p>
        </div>
        <div class="local-block" data-preview-right>
          <h2 class="h2">Внимание <strong>к мелочам</strong></h2>
          <p class="text_base text-light/70">
            Контролируй даже самые мелкие детали своего приложения. Prismium
            позволяет вам настраивать каждую деталь вашего приложения, чтобы
            сделать его уникальным. Вы можете настроить цвета, шрифты, размеры,
            отступы, анимации, иконки и многое другое.
          </p>
        </div>
        <div class="local-block" data-preview-left>
          <h2 class="h2">Отличная <strong>доступность</strong></h2>
          <p class="text_base text-light/70">
            Благодаря современным технологиям, Prismium доступен для всех
            пользователей. Вам доступны темы для людей с нарушениями зрения, а
            также поддержка RTL.
          </p>
          <p class="text_xs -mb-2 text-light/70 max-mt:hidden">
            Контрастная тема:
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
            Поддержка RTL:
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
          <h2 class="h2 text-light">Отличная <strong>совместимость</strong></h2>
          <p class="text_base text-light/70">
            Prismium поддерживает все современные браузеры и устройства. Мы
            тестируем Prismium на всех популярных браузерах и устройствах, чтобы
            гарантировать, что Prismium будет работать без проблем.
          </p>
          <p class="text_base text-light/70">
            А так-же вы можете использовать Prismium на мобильных устройствах и
            планшетах. Prismium адаптируется к любому размеру экрана и
            разрешению, чтобы обеспечить лучший опыт работы с вашим приложением.
          </p>
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
