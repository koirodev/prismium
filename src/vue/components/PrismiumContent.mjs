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
     * @type {string}
     * @default 'div'
     */
    selector: {
      type: String,
      default: 'div',
    },

    /**
     * Additional attributes to apply to the element
     * @type {Object}
     */
    attributes: {
      type: Object,
      default: () => ({}),
    },
  },

  /**
   * Component setup function
   * @param {Object} props - Component props
   * @param {string} props.selector - HTML tag to render
   * @param {Object} props.attributes - Additional attributes
   * @param {Object} context - Setup context
   * @param {Object} context.slots - Component slots
   * @param {Object} context.attrs - Non-prop attributes
   * @returns {Function} Render function
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
