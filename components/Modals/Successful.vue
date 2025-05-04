<script setup></script>

<template>
  <div class="modal-window modal-window_successful">
    <div class="modal-window__container">
      <div class="modal-window__head">
        <span class="modal-window__title text">Заявка отправлена</span>
        <span class="modal-window__description text">
          В ближайшее время с вами свяжется наш менеджер.
        </span>
      </div>
      <AppButton data-fancybox-close type="button" :is-icon-speed="true">
        Закрыть
      </AppButton>
    </div>
  </div>
</template>
