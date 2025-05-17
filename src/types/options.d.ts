import {
  PrismiumEventCallback,
  PrismiumEventListeners,
  PrismiumTheme,
} from './index';
import Prismium from './core';

/**
 * Default options for Prismium
 */
export interface PrismiumOptions {
  /**
   * Root element for the accordion
   */
  el?: HTMLElement | string;

  /**
   * Whether to automatically initialize on creation
   * @default true
   */
  init?: boolean;

  /**
   * Determines whether the accordion can be interacted with after initialization.
   * @default false
   */
  disabled?: boolean;

  /**
   * Determines the state of the accordion after initialization.
   * @default false
   */
  opened?: boolean;

  /**
   * Theme for the accordion
   * @default 'clear'
   */
  theme?: PrismiumTheme;

  /**
   * Animation speed in milliseconds or object with open/close speeds
   * @default 350
   */
  speed?:
    | number
    | {
        open?: number;
        close?: number;
      };

  /**
   * Automatically close other accordions when one is opened
   * @default false
   */
  autoClose?: boolean;

  /**
   * Automatically close nested accordions when parent is closed
   * @default false
   */
  autoCloseNested?: boolean;

  /**
   * Use parent element height for animations
   * @default false
   */
  getParentHeight?: boolean;

  /**
   * Scroll to accordion after opening
   * @default false
   */
  scrollTo?:
    | boolean
    | {
        offset?: number;
        behavior?: ScrollBehavior;
      };

  /**
   * Path to SVG sprite file
   * @default 'sprite.svg'
   */
  spritePath?: string;

  /**
   * Attribute for icon elements
   * @default 'data-prismium-icon'
   */
  iconAttribute?: string;

  /**
   * Selectors for container elements
   * @default ['[data-prismium-container]']
   */
  containerSelectors?: string | string[];

  /**
   * Selector for the clickable element (header)
   * @default '[data-prismium-current]'
   */
  currentSelector?: string;

  /**
   * Selector for the content element
   * @default '[data-prismium-content]'
   */
  contentSelector?: string;

  /**
   * Selector for the hidden container element
   * @default '[data-prismium-hidden]'
   */
  hiddenSelector?: string;

  /**
   * CSS class for active accordion
   * @default 'prismium-active'
   */
  activeClass?: string;

  /**
   * CSS class for opened content
   * @default 'prismium-opened'
   */
  openedClass?: string;

  /**
   * CSS class for disabled accordion
   * @default 'prismium-disabled'
   */
  disabledClass?: string;

  /**
   * Event listeners
   */
  on?: PrismiumEventListeners;

  /**
   * Alternative way to register event listeners
   */
  events?: PrismiumEventListeners;

  /**
   * Global event listener for all events
   */
  onAny?: PrismiumEventCallback;

  /**
   * Any additional custom options
   */
  [key: string]: any;
}
