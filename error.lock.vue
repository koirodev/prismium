<script setup>
const error = useError();

const headTitle = computed(() => {
  if (!error.value) return 'Неизвестная ошибка';
  if (error.value.statusCode === 404) return 'Страница не найдена';
  if (error.value.statusCode === 500) return 'Внутренняя ошибка сервера';
  return `Ошибка ${error.value.statusCode}`;
});

onMounted(() => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'instant',
  });
});

useHead({
  title: headTitle.value,
  meta: [
    {
      name: 'robots',
      content: 'noindex, nofollow',
    },
  ],
});
</script>

<template>
  <NuxtLayout name="default">
    <div class="error-section section">
      <div class="container">
        <div
          class="error-section__content"
          v-if="!error || error?.statusCode === 404"
        >
          <div class="error-section__description">
            <h1 class="h1">
              Ошибка 404. <br />
              Такой страницы не существует
            </h1>
            <p class="text text_body_L">
              К сожалению, такой страницы не существует. Вероятно был
              неправильно набран адрес или страница была удалена.
            </p>
          </div>
          <AppLink to="/">Вернуться на главную</AppLink>
        </div>
        <div
          class="error-section__content"
          v-else-if="error?.statusCode === 500"
        >
          <div class="error-section__description">
            <h1 class="h1">
              Ошибка 500. <br />
              Внутренняя ошибка сервера
            </h1>
            <p class="text text_body_L">
              К сожалению, произошла внутренняя ошибка сервера. Мы уже работаем
              над её устранением. Пожалуйста, попробуйте обновить страницу
              позже.
            </p>
          </div>
          <AppLink to="/">Вернуться на главную</AppLink>
        </div>
        <div class="error-section__content" v-else>
          <div class="error-section__description">
            <h1 class="h1">
              Ошибка {{ error?.statusCode || 500 }}. <br />
              Что-то пошло не так
            </h1>
            <p class="text text_body_L">
              К сожалению, что-то пошло не так. Попробуйте обновить страницу или
              вернуться на главную.
            </p>
          </div>
          <AppLink to="/">Вернуться на главную</AppLink>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
