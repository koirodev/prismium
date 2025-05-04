<script setup>
const { isMobile } = useDevice();
const emit = defineEmits(['select-item']);

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  active: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  multiply: {
    type: Boolean,
    default: false,
  },
  selected: {
    type: [String, Number, Array],
    default: null,
  },
});

const isItemSelected = (item) => {
  if (props.multiply && Array.isArray(props.selected)) {
    return props.selected.includes(item.value);
  }

  return props.selected === item.value;
};

const dropdownListRef = ref(null);
const isScrollable = ref(false);

onMounted(() => {
  if (
    dropdownListRef.value.scrollHeight > dropdownListRef.value.clientHeight &&
    isMobile.value.any()
  ) {
    isScrollable.value = true;
  }
});
</script>

<template>
  <div :class="['dropdown', { dropdown_scrollable: isScrollable }]">
    <div class="dropdown__list" ref="dropdownListRef">
      <component
        :is="multiply ? 'div' : 'button'"
        :type="!multiply ? 'button' : null"
        :class="[
          'dropdown__item',
          {
            dropdown__item_checked: isItemSelected(item),
            disabled: item.disabled,
          },
        ]"
        :key="i"
        :tabindex="active && !disabled ? 0 : -1"
        @click="emit('select-item', item)"
        v-for="(item, i) in items"
      >
        <BaseCheckbox
          tabindex="-1"
          :disabled="item.disabled"
          :modelValue="isItemSelected(item)"
          v-if="multiply"
        />
        <span class="text" v-html="item.label"></span>
      </component>
    </div>
  </div>
</template>
