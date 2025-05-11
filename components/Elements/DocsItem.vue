<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: null,
  },
  default: {
    type: String,
    default: null,
  },
  params: {
    type: Array,
    default: null,
  },
  return: {
    type: String,
    default: null,
  },
  args: {
    type: String,
    default: null,
  },
  id: {
    type: String,
    default: null,
  },
});

const propsDefault = ref(props.default);
const propsReturn = ref(props.return);
</script>

<template>
  <div
    class="flex-start !mb-8 w-full flex-col gap-5 border-b border-stroke-light !pb-8 max-mt:gap-3"
  >
    <h3 class="h4 !m-0 w-full" :id="id">
      <AppCode small>{{ title }}</AppCode>
    </h3>
    <div class="article w-full">
      <slot></slot>
    </div>
    <div class="local-item" v-if="type">
      <p class="local-title">Тип</p>
      <AppCode class="!text-base" small>{{ type }}</AppCode>
    </div>
    <div class="local-item" v-if="propsDefault">
      <p class="local-title">По умолчанию</p>
      <AppCode class="!text-base" small>{{ propsDefault }}</AppCode>
    </div>
    <div class="local-item" v-if="args">
      <p class="local-title">Аргументы</p>
      <AppCode class="!text-base" small>{{ args }}</AppCode>
    </div>
    <div class="local-item" v-if="params?.length">
      <p class="local-title">Параметры</p>
      <div class="flex-start flex-col gap-2">
        <AppCode class="!text-base" small v-for="item in params" :key="item">{{
          item
        }}</AppCode>
      </div>
    </div>
    <div class="local-item" v-if="propsReturn">
      <p class="local-title">Возвращает</p>
      <AppCode class="!text-base" small>{{ propsReturn }}</AppCode>
    </div>
    <div class="local-item" v-if="$slots.note">
      <p class="local-title">Примечание</p>
      <div class="article w-full"><slot name="note"></slot></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.local-item {
  @apply flex-start w-full flex-col gap-3 max-mt:gap-2;
}

.local-title {
  @apply text_xl font-medium text-light;
}
</style>
