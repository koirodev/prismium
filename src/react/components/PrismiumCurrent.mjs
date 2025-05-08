import React from 'react';

/**
 * Prismium Current component for React
 * Represents the clickable header part of an accordion
 * 
 * @param {Object} props - Component props
 * @param {string} [props.selector='div'] - HTML tag to use for rendering
 * @param {Object} [props.attributes={}] - Additional attributes to apply to the element
 * @param {React.ReactNode} props.children - Child components
 * @returns {React.ReactElement} PrismiumCurrent component
 */
export const PrismiumCurrent = ({
  selector = 'div',
  attributes = {},
  children,
  ...restProps
}) => {
  return React.createElement(
    selector,
    {
      'data-prismium-current': '',
      ...restProps,
      ...attributes,
    },
    children
  );
};

export default PrismiumCurrent;
