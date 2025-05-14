import React from 'react';

/**
 * Prismium Current component for React
 * Represents the clickable header part of an accordion
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
