import React from 'react';

/**
 * Prismium Content component for React
 * Represents the collapsible content part of an accordion
 * 
 * @param {Object} props - Component props
 * @param {string} [props.selector='div'] - HTML tag to use for rendering
 * @param {Object} [props.attributes={}] - Additional attributes to apply to the element
 * @param {React.ReactNode} props.children - Child components
 * @returns {React.ReactElement} PrismiumContent component
 */
export const PrismiumContent = ({
  selector = 'div',
  attributes = {},
  children,
  ...restProps
}) => {
  return React.createElement(
    selector,
    {
      'data-prismium-content': '',
      ...restProps,
      ...attributes,
    },
    children
  );
};

export default PrismiumContent;
