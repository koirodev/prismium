import { h, defineComponent } from 'vue';

/**
 * Prismium Content component for Vue
 * Represents the collapsible content part of an accordion
 */
export const PrismiumContent = defineComponent({
  name: 'PrismiumContent',
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
          'data-prismium-content': '',
          ...attrs,
          ...props.attributes,
        },
        slots.default?.()
      );
  },
});

export default PrismiumContent;
