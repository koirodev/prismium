import { PrismiumEventCallback, PrismiumEventListeners, PrismiumTheme, PrismiumEffect } from './index';
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
   * Theme for the accordion
   * @default 'clear'
   */
  theme?: PrismiumTheme;

  /**
   * Animation speed in milliseconds or object with open/close speeds
   * @default 350
   */
  speed?: number | {
    open: number;
    close: number;
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
  scrollTo?: boolean | {
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
   * @default ['[data-prismium-container]', '.section']
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
   * CSS class for hidden elements
   * @default 'js-prismium-hidden'
   */
  hiddenClass?: string;

  /**
   * CSS class for active accordion
   * @default 'js-prismium-active'
   */
  activeClass?: string;

  /**
   * CSS class for opened content
   * @default 'js-prismium-opened'
   */
  openedClass?: string;

  /**
   * CSS class for disabled accordion
   * @default 'js-prismium-disabled'
   */
  disabledClass?: string;

  /**
   * Animation effect type
   */
  effect?: PrismiumEffect;

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
   * Emit function for events
   */
  emit?: (event: string, instance?: Prismium) => void;

  /**
   * Any additional custom options
   */
  [key: string]: any;
}
