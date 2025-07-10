/**
 * Main type definitions for Prismium
 */

/**
 * Global declaration for the Prismium class
 */
export as namespace Prismium;

/**
 * Prismium event names
 */
export type PrismiumEventName =
  | 'beforeInit'
  | 'init'
  | 'afterInit'
  | 'beforeOpen'
  | 'open'
  | 'afterOpen'
  | 'beforeClose'
  | 'close'
  | 'afterClose'
  | 'beforeDestroy'
  | 'destroy'
  | 'afterDestroy'
  | 'effectStart'
  | 'effectEnd';

/**
 * Prismium event callback function
 */
export type PrismiumEventCallback = (instance?: Prismium) => void;

/**
 * Prismium event listeners object
 */
export interface PrismiumEventListeners {
  [event: string]: PrismiumEventCallback | PrismiumEventCallback[];
}

/**
 * Prismium module definition
 */
export interface PrismiumModule {
  /**
   * Module name
   */
  name: string;

  /**
   * Called when the module is installed into Prismium
   */
  install?: (instance: Prismium) => void;

  /**
   * Called when Prismium is initialized
   */
  init?: (instance: Prismium) => void;
}

/**
 * Prismium speed configuration
 */
export interface PrismiumSpeed {
  /**
   * Opening speed in milliseconds
   */
  open?: number;

  /**
   * Closing speed in milliseconds
   */
  close?: number;
}

/**
 * Prismium theme type
 */
export type PrismiumTheme =
  | 'clear'
  | 'light'
  | 'dark'
  | 'light-contrast'
  | 'dark-contrast'
  | 'forest'
  | 'ocean'
  | 'sunset'
  | { [key: string]: boolean };

export default Prismium;
