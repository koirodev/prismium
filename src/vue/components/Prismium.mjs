import {
  h,
  defineComponent,
  ref,
  provide,
  inject,
  onMounted,
  onUnmounted,
  toRaw,
} from 'vue';
import { deepMerge } from '../../utils/deepMerge.mjs';
import PrismiumCore from '../../core/core.mjs';

/**
 * Injection key for Prismium context
 */
export const PRISMIUM_INJECTION_KEY = 'prismium';

/**
 * Main Prismium Vue component
 * Provides an accordion UI component with animation effects
 */
export const Prismium = defineComponent({
  name: 'Prismium',
  inheritAttrs: false,
  emits: [
    'before-init',
    'init',
    'after-init',
    'before-open',
    'open',
    'after-open',
    'before-close',
    'close',
    'after-close',
    'before-destroy',
    'destroy',
    'after-destroy',
    'effect-start',
    'effect-end',
  ],
  props: {
    /**
     * Configuration options for Prismium
     */
    options: {
      type: Object,
      default: () => ({}),
    },

    /**
     * Array of modules to use with Prismium
     */
    modules: {
      type: Array,
      default: () => [],
    },

    /**
     * HTML tag/selector to use for rendering the component
     */
    selector: {
      type: String,
      default: 'div',
    },

    /**
     * Additional attributes to apply to the root element
     */
    attributes: {
      type: Object,
      default: () => ({}),
    },
  },

  /**
   * Component setup function
   */
  setup(props, { slots, emit, attrs }) {
    const prismiumRef = ref(null);
    const instance = ref(null);

    if (props.modules && props.modules.length) {
      PrismiumCore.use(props.modules);
    }

    const parentOptions = inject('prismiumParentOptions', {});
    const mergedOptions = deepMerge({}, parentOptions, props.options);
    provide('prismiumParentOptions', mergedOptions);

    provide(PRISMIUM_INJECTION_KEY, {
      prismiumRef,
      instance,
    });

    onMounted(() => {
      if (prismiumRef.value) {
        const defaultEvents = {
          beforeInit: () => emit('before-init', instance.value),
          init: () => emit('init', instance.value),
          afterInit: () => emit('after-init', instance.value),

          beforeOpen: () => emit('before-open', instance.value),
          open: () => emit('open', instance.value),
          afterOpen: () => emit('after-open', instance.value),

          beforeClose: () => emit('before-close', instance.value),
          close: () => emit('close', instance.value),
          afterClose: () => emit('after-close', instance.value),

          beforeDestroy: () => emit('before-destroy', instance.value),
          destroy: () => emit('destroy', instance.value),
          afterDestroy: () => emit('after-destroy', instance.value),

          effectStart: () => emit('effect-start', instance.value),
          effectEnd: () => emit('effect-end', instance.value),
        };

        const providedEvents = {
          ...(mergedOptions.on || {}),
          ...(mergedOptions.events || {}),
        };
        const combinedEvents = { ...defaultEvents, ...providedEvents };

        const finalOptions = { ...mergedOptions, on: combinedEvents };

        try {
          instance.value = new PrismiumCore(prismiumRef.value, finalOptions);
        } catch (error) {
          console.error('Failed to initialize Prismium:', error);
        }
      }
    });

    onUnmounted(() => {
      try {
        const rawInstance = instance.value ? toRaw(instance.value) : null;
        if (rawInstance && !rawInstance.destroyed && rawInstance.destroy) {
          rawInstance.destroy();
        }
      } catch (error) {
        console.error('Error during destroy:', error);
      }
    });

    return () =>
      h(
        props.selector,
        {
          ref: prismiumRef,
          'data-prismium': '',
          ...attrs,
          ...props.attributes,
        },
        slots.default?.()
      );
  },
});
