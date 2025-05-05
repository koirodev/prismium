<script setup>
const { locales, setLocale, setLocaleCookie } = useI18n();

const burgerStore = useBurgerStore();
const { isBurgerOpen } = storeToRefs(burgerStore);
const isMobile = ref(false);

const starsCount = ref(21);

const close = () => {
  if (isBurgerOpen.value) {
    burgerStore.closeBurger();
  }
};

const closeEvent = (e) => {
  if (e.target.closest('.nav')) return;
  if (e.target.closest('.burger-button')) return;

  close();
};

const checkWindowSize = () => {
  if (window.innerWidth > 780) {
    isMobile.value = false;
    return;
  }

  isMobile.value = true;
};

onMounted(() => {
  window.addEventListener('resize', checkWindowSize);
  document.addEventListener('click', (e) => closeEvent(e));
  document.addEventListener('touchstart', (e) => closeEvent(e));
});

onUnmounted(() => {
  window.removeEventListener('resize', checkWindowSize);
  document.removeEventListener('click', (e) => closeEvent(e));
  document.removeEventListener('touchstart', (e) => closeEvent(e));
});

onMounted(async () => {
  try {
    const { data } = await useFetch(
      'https://api.github.com/repos/koirodev/prismium'
    );

    if (data.value) starsCount.value = data.value.stargazers_count;
  } catch (error) {
    console.error('Failed to fetch GitHub stars:', error);
  }
});
</script>

<template>
  <nav
    :class="[
      'nav',
      { 'pointer-events-auto visible opacity-100': isBurgerOpen },
    ]"
  >
    <ul class="nav__list">
      <li class="nav__item">
        <span class="nav__link">{{ $t('docs') }}</span>
        <ul class="nav__list">
          <li class="nav__item">
            <AppLink class="nav__link" to="/get-started">
              <SvgFiRrRocket class="nav__icon icon" />
              {{ $t('getStarted') }}
            </AppLink>
          </li>
          <hr />
          <li class="nav__item">
            <AppLink class="nav__link" to="/prismium-core">
              Prismium core / API
            </AppLink>
          </li>
          <li class="nav__item">
            <AppLink class="nav__link" to="/prismium-react">
              Prismium React
            </AppLink>
          </li>
          <li class="nav__item">
            <AppLink class="nav__link" to="/prismium-vue">Prismium Vue</AppLink>
          </li>
          <hr />
          <li class="nav__item">
            <AppLink class="nav__link" to="/changelog">
              <SvgFiRrNotebook class="nav__icon icon" />
              {{ $t('changelog') }}
            </AppLink>
          </li>
        </ul>
      </li>
      <hr />
      <li class="nav__item">
        <AppLink class="nav__link" to="/demos">
          {{ $t('demos') }}
        </AppLink>
      </li>
      <hr />
      <li class="nav__item">
        <AppLink
          class="nav__link nav__link_github"
          to="https://github.com/koirodev/prismium/"
        >
          <SvgGithub class="nav__icon icon" />
          <span class="text">
            {{ starsCount }}
            {{
              toCaseCount(starsCount, [$t('star'), $t('stars2'), $t('stars')])
            }}
          </span>
        </AppLink>
      </li>
      <li class="nav__item">
        <span class="nav__link">
          <SvgFiRrWorld class="nav__icon icon icon-speed" />
          {{ isMobile ? $t('language') : $t('languageName') }}
        </span>
        <ul class="nav__list right-0">
          <li class="nav__item" v-for="loc in locales" :key="loc.value">
            <button
              class="nav__link"
              @click="
                setLocale(loc.code);
                setLocaleCookie(loc.code);
              "
            >
              {{ loc.name }}
            </button>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
