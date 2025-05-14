import { h, defineComponent } from 'vue';

/**
 * Prismium Current component for Vue
 * Represents the clickable header part of an accordion
 */
export const PrismiumCurrent = defineComponent({
  name: 'PrismiumCurrent',
  props: {
    /**
     * HTML tag/selector to use for rendering the component
     */
    selector: {
      type: String,
      default: 'div',
    },

    /**
     * Additional attributes to apply to the element
     */
    attributes: {
      type: Object,
      default: () => ({}),
    },
  },

  /**
   * Component setup function
   */
  setup(props, { slots, attrs }) {
    return () =>
      h(
        props.selector,
        {
          'data-prismium-current': '',
          ...attrs,
          ...props.attributes,
        },
        slots.default?.()
      );
  },
});

export default PrismiumCurrent;
