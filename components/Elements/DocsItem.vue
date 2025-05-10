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
  id: {
    type: String,
    default: null,
  },
});

const propsDefault = ref(props.default);
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
    <div class="flex-start w-full flex-col gap-3 max-mt:gap-2" v-if="type">
      <p class="text_xl font-medium text-light">Тип</p>
      <AppCode class="!text-base" small>{{ type }}</AppCode>
    </div>
    <div
      class="flex-start w-full flex-col gap-3 max-mt:gap-2"
      v-if="propsDefault"
    >
      <p class="text_xl font-medium text-light">По умолчанию</p>
      <AppCode class="!text-base" small>{{ propsDefault }}</AppCode>
    </div>
    <div
      class="flex-start w-full flex-col gap-3 max-mt:gap-2"
      v-if="$slots.note"
    >
      <p class="text_xl font-medium text-light">Примечание</p>
      <div class="article w-full"><slot name="note"></slot></div>
    </div>
  </div>
</template>
