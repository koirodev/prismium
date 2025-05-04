<script setup>
const isOldBrowser = useState('isOldBrowser');
const { $oldBrowserCookie } = useNuxtApp();

const ignore = () => {
  $oldBrowserCookie.value = true;
};

const close = () => {
  isOldBrowser.value = false;
};
</script>

<template>
  <teleport to="#teleports">
    <div class="_is-old-browser" v-if="isOldBrowser && !$oldBrowserCookie">
      <div class="_is-old-browser__backdrop" @click.prevent="close"></div>
      <div class="_is-old-browser__content">
        <button class="_is-old-browser__close">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            @click.prevent="close"
          >
            <path
              d="M23.7068 0.292786C23.5193 0.105315 23.2649 0 22.9998 0C22.7346 0 22.4803 0.105315 22.2928 0.292786L11.9998 10.5858L1.70679 0.292786C1.51926 0.105315 1.26495 0 0.999786 0C0.734622 0 0.480314 0.105315 0.292786 0.292786C0.105315 0.480314 0 0.734622 0 0.999786C0 1.26495 0.105315 1.51926 0.292786 1.70679L10.5858 11.9998L0.292786 22.2928C0.105315 22.4803 0 22.7346 0 22.9998C0 23.2649 0.105315 23.5193 0.292786 23.7068C0.480314 23.8943 0.734622 23.9996 0.999786 23.9996C1.26495 23.9996 1.51926 23.8943 1.70679 23.7068L11.9998 13.4138L22.2928 23.7068C22.4803 23.8943 22.7346 23.9996 22.9998 23.9996C23.2649 23.9996 23.5193 23.8943 23.7068 23.7068C23.8943 23.5193 23.9996 23.2649 23.9996 22.9998C23.9996 22.7346 23.8943 22.4803 23.7068 22.2928L13.4138 11.9998L23.7068 1.70679C23.8943 1.51926 23.9996 1.26495 23.9996 0.999786C23.9996 0.734622 23.8943 0.480314 23.7068 0.292786Z"
            />
          </svg>
        </button>
        <div class="_is-old-browser__wrapper">
          <div class="_is-old-browser__title">Ваш браузер устарел</div>
          <div class="_is-old-browser__text">
            Сайт может отображаться некорректно.
            <br />
            Рекомендуем обновить браузер до последней версии.
          </div>
        </div>
        <AppButton @click.prevent="ignore">Не показывать</AppButton>
      </div>
    </div>
  </teleport>
</template>

<style scoped>
/* ._is-old-browser {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99999;

  display: flex;
  align-items: center;
  justify-content: center;

  &__backdrop {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;

    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(5px);

    cursor: pointer;
  }

  &__close {
    position: absolute;
    top: 10px;
    right: 10px;

    width: 20px;
    height: 20px;

    background: transparent;
    border: none;
    border-radius: 0;

    cursor: pointer;

    svg {
      width: 100%;
      height: 100%;

      fill: #000;
    }
  }

  &__content {
    position: relative;
    z-index: 1;

    padding: 25px;
    max-width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 20px;

    background-color: #fff;
    border-radius: 10px;
  }

  &__wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
  }

  &__title {
    color: #000;
    font: 450 54px / 1.2 var(--font-primary);

    @media (width <= 2100px) {
      font-size: 44px;
    }

    @media (width <= 1600px) {
      font-size: 38px;
    }

    @media (width <= 1160px) {
      font-size: 28px;
    }

    @media (width <= 600px) {
      font-size: 22px;
    }
  }

  &__text {
    color: rgba(0, 0, 0, 0.698);
    font: 400 22px / 1.5 var(--font-primary);

    @media (width <= 2100px) {
      font-size: 18px;
    }

    @media (width <= 1600px) {
      font-size: 16px;
    }

    @media (width <= 1160px) {
      font-size: 14px;
    }
  }
} */
</style>
