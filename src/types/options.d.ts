import {
  PrismiumEventCallback,
  PrismiumEventListeners,
  PrismiumTheme,
  PrismiumEffect,
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
   * Animation effect type
   */
  effect?: PrismiumEffect;

  /**
   * Animation effect selectors
   */
  effectSelectors?: string | string[];

  /**
   * Animation effect ignore selectors
   */
  effectIgnore?: string | string[];

  /**
   * Animation effect line by line
   */
  effectLineByLine?: {
    speed?: number;
    easing?: string;
    delay?: number;
    scale?: number;
    y?: number | string;
    x?: number | string;
    opacity?: number;
  };

  /**
   * Animation effect fade scale
   */
  effectFadeScale?: {
    speed?: number;
    easing?: string;
    scale?: number;
    opacity?: number;
  };

  /**
   * Animation effect slide
   */
  effectSlide?: {
    speed?: number;
    easing?: string;
    directions?: 'up' | 'down' | 'left' | 'right';
    distance?: number | string;
    opacity?: number;
  };

  /**
   * Animation effect stagger
   */
  effectStagger?: {
    speed?: number;
    easing?: string;
    delay?: number;
    directions?: Array<'up' | 'right' | 'down' | 'left'>;
    distance?: number | string;
    opacity?: number;
  };

  /**
   * Animation effect wave
   */
  effectWave?: {
    speed?: number;
    easing?: string;
    delay?: number;
    amplitude?: string | number;
    frequency?: number;
    opacity?: number;
  };

  /**
   * Animation effect flip
   */
  effectFlip?: {
    speed?: number;
    easing?: string;
    delay?: number;
    perspective?: number | string;
    rotation?: number | string;
    opacity?: number;
  };

  /**
   * Animation effect zoom
   */
  effectZoom?: {
    speed?: number;
    easing?: string;
    delay?: number;
    scale?: number;
    opacity?: number;
    origins?: string[];
  };

  /**
   * Animation effect cascade
   */
  effectCascade?: {
    speed?: number;
    easing?: string;
    delay?: number;
    rotation?: number;
    distance?: number | string;
    opacity?: number;
  };

  /**
   * Animation effect custom
   */
  effectCustom?: {
    speed?: number;
    delay?: number;
    setup?: (
      prismium: Prismium,
      child: HTMLElement,
      index: number,
      total: number,
      isOpening: boolean
    ) => void;
    open?: (
      prismium: Prismium,
      child: HTMLElement,
      index: number,
      total: number
    ) => void;
    close?: (
      prismium: Prismium,
      child: HTMLElement,
      index: number,
      total: number
    ) => void;
    cleanup?: (
      prismium: Prismium,
      child: HTMLElement,
      index: number,
      total: number,
      isOpening: boolean
    ) => void;
  };

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
