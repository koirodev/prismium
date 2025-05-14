import React from 'react';

/**
 * Prismium Content component for React
 * Represents the collapsible content part of an accordion
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
