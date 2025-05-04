/**
 * @description
 * Композиция для работы с селектами.
 * Содержит логику для обработки событий, управления состоянием и отображения элементов.
 * Используется в компоненте <FormSelect>.
 */

export default function (props, emit, inputRef) {
  const internalValue = computed({
    get() {
      return props.modelValue;
    },
    set(val) {
      emit('update:modelValue', val);
    },
  });

  const realValue = ref([]);

  const itemList = ref([]);
  props.items.forEach((item) => {
    if (typeof item === 'string') {
      if (item.trim() !== '') {
        itemList.value.push({ label: item, value: item, disabled: false });
      }
    } else if (typeof item === 'object') {
      const label =
        typeof item.label === 'string' ? item.label.trim() : item.label;
      const value =
        typeof item.value === 'string' ? item.value.trim() : item.value;
      if (label || value) {
        itemList.value.push({
          label: label || value,
          value: value || label,
          disabled: item.disabled ?? false,
        });
      } else {
        console.error('Select: item must have a label or value');
      }
    }
  });

  watch(
    () => props.modelValue,
    (newVal) => {
      const validValues = itemList.value.map((item) => item.value);

      if (props.multiple) {
        const filtered = Array.isArray(newVal)
          ? newVal.filter((val) => validValues.includes(val))
          : [];
        if (JSON.stringify(filtered) !== JSON.stringify(newVal)) {
          emit('update:modelValue', filtered);
        }
      } else {
        if (newVal && !validValues.includes(newVal)) {
          emit('update:modelValue', null);
        }
      }
    },
    { immediate: true }
  );

  const isOpen = ref(false);
  const selectReverse = ref(false);
  const selectRight = ref(false);

  const checkOverflow = (el) => {
    let parent = el.parentElement;

    while (parent) {
      const style = window.getComputedStyle(parent);

      if (style.overflow === 'hidden') {
        const dropdown = el.querySelector('.dropdown');
        const parentRect = parent.getBoundingClientRect();
        const selectRect = dropdown.getBoundingClientRect();

        if (selectRect.bottom > parentRect.bottom) {
          selectReverse.value = true;
        }
        if (selectRect.right > parentRect.right) {
          selectRight.value = true;
        }
        if (selectRect.left < parentRect.left) {
          selectRight.value = false;
        }
        return;
      }

      parent = parent.parentElement;
    }
  };

  const scrollTop = () => {
    if (inputRef?.value?.querySelector('.dropdown__list') && isOpen.value) {
      const dropdown = inputRef.value.querySelector('.dropdown__list');
      dropdown.scrollTop = 0;
    }
  };

  const toggle = () => {
    isOpen.value = !isOpen.value;
    scrollTop();
    if (isOpen.value) checkOverflow(inputRef.value);
  };

  const handleDocumentClick = (e) => {
    if (e.target.closest('.select-input') !== inputRef.value) {
      isOpen.value = false;
    }
  };

  const select = (item) => {
    const value = item.value;
    const label = item.label;

    if (props.multiple) {
      let newVal = Array.isArray(internalValue.value)
        ? [...internalValue.value]
        : [];
      let realVal = Array.isArray(realValue.value) ? [...realValue.value] : [];
      const index = newVal.indexOf(value);

      if (index === -1) {
        newVal.push(value);
        realVal.push(label);
      } else {
        newVal.splice(index, 1);
        realVal.splice(index, 1);
      }

      internalValue.value = newVal;
      realValue.value = realVal;
    } else {
      internalValue.value = value;
      realValue.value = label;
      isOpen.value = false;
    }
  };

  const classes = computed(() => [
    {
      'select-input_disabled': props.disabled,
      'select-input_show': isOpen.value,
      'select-input_reverse': selectReverse.value,
      'select-input_right': selectRight.value,
      'input-error': props.error,
    },
  ]);

  return {
    internalValue,
    realValue,
    itemList,
    isOpen,
    selectReverse,
    toggle,
    select,
    classes,
  };
}
