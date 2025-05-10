import React, { useRef, useEffect } from 'react';
import { deepMerge } from '../../utils/deepMerge.mjs';
import PrismiumCore from '../../core/core.mjs';

/**
 * Main Prismium React component
 * Provides an accordion UI component with animation effects
 *
 * @param {Object} props - Component props
 * @param {import('../../types/options').PrismiumOptions} [props.options={}] - Configuration options for Prismium
 * @param {import('../../types/index').PrismiumModule[]} [props.modules=[]] - Array of modules to use with Prismium
 * @param {React.ReactNode} props.children - Child components
 * @param {Function} [props.beforeInit] - Event handler for beforeInit event
 * @param {Function} [props.init] - Event handler for init event
 * @param {Function} [props.afterInit] - Event handler for afterInit event
 * @param {Function} [props.beforeOpen] - Event handler for beforeOpen event
 * @param {Function} [props.open] - Event handler for open event
 * @param {Function} [props.afterOpen] - Event handler for afterOpen event
 * @param {Function} [props.beforeClose] - Event handler for beforeClose event
 * @param {Function} [props.close] - Event handler for close event
 * @param {Function} [props.afterClose] - Event handler for afterClose event
 * @param {Function} [props.beforeDestroy] - Event handler for beforeDestroy event
 * @param {Function} [props.destroy] - Event handler for destroy event
 * @param {Function} [props.afterDestroy] - Event handler for afterDestroy event
 * @param {Function} [props.effectStart] - Event handler for effectStart event
 * @param {Function} [props.effectEnd] - Event handler for effectEnd event
 * @returns {React.ReactElement} Prismium component
 */
export const Prismium = ({
  options = {},
  modules = [],
  children,
  ...extraProps
}) => {
  const containerRef = useRef(null);
  const instanceRef = useRef(null);

  if (modules.length) {
    PrismiumCore.use(modules);
  }

  const mergedOptions = deepMerge({}, options);

  const eventNames = [
    'beforeInit',
    'init',
    'afterInit',
    'beforeOpen',
    'open',
    'afterOpen',
    'beforeClose',
    'close',
    'afterClose',
    'beforeDestroy',
    'destroy',
    'afterDestroy',
    'effectStart',
    'effectEnd',
  ];

  // Extract events from individual props
  const eventOverrides = eventNames.reduce((acc, eventName) => {
    if (extraProps[eventName]) acc[eventName] = extraProps[eventName];
    return acc;
  }, {});

  const defaultEvents = {
    beforeInit: () =>
      mergedOptions.emit &&
      mergedOptions.emit('beforeInit', instanceRef.current),
    init: () =>
      mergedOptions.emit && mergedOptions.emit('init', instanceRef.current),
    afterInit: () =>
      mergedOptions.emit &&
      mergedOptions.emit('afterInit', instanceRef.current),
    beforeOpen: () =>
      mergedOptions.emit &&
      mergedOptions.emit('beforeOpen', instanceRef.current),
    open: () =>
      mergedOptions.emit && mergedOptions.emit('open', instanceRef.current),
    afterOpen: () =>
      mergedOptions.emit &&
      mergedOptions.emit('afterOpen', instanceRef.current),
    beforeClose: () =>
      mergedOptions.emit &&
      mergedOptions.emit('beforeClose', instanceRef.current),
    close: () =>
      mergedOptions.emit && mergedOptions.emit('close', instanceRef.current),
    afterClose: () =>
      mergedOptions.emit &&
      mergedOptions.emit('afterClose', instanceRef.current),
    beforeDestroy: () =>
      mergedOptions.emit &&
      mergedOptions.emit('beforeDestroy', instanceRef.current),
    destroy: () =>
      mergedOptions.emit && mergedOptions.emit('destroy', instanceRef.current),
    afterDestroy: () =>
      mergedOptions.emit &&
      mergedOptions.emit('afterDestroy', instanceRef.current),
    effectStart: () =>
      mergedOptions.emit &&
      mergedOptions.emit('effectStart', instanceRef.current),
    effectEnd: () =>
      mergedOptions.emit &&
      mergedOptions.emit('effectEnd', instanceRef.current),
  };

  const providedEvents = {
    ...(mergedOptions.on || {}),
    ...(mergedOptions.events || {}),
    ...eventOverrides,
  };

  const combinedEvents = { ...defaultEvents, ...providedEvents };
  const finalOptions = { ...mergedOptions, on: combinedEvents };

  useEffect(() => {
    if (containerRef.current) {
      try {
        instanceRef.current = new PrismiumCore(
          containerRef.current,
          finalOptions
        );
      } catch (error) {
        console.error('Failed to initialize Prismium:', error);
      }
    }
    return () => {
      try {
        if (instanceRef.current && instanceRef.current.destroy) {
          instanceRef.current.destroy();
        }
      } catch (error) {
        console.error('Error during destroy:', error);
      }
    };
  }, []);

  return React.createElement(
    'div',
    {
      ref: containerRef,
      'data-prismium': '',
      ...extraProps,
    },
    children
  );
};

export default Prismium;
