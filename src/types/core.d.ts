import {
  PrismiumEventCallback,
  PrismiumEventListeners,
  PrismiumModule,
} from './index';
import { PrismiumOptions } from './options';

/**
 * Main Prismium class
 */
declare class Prismium {
  /**
   * Map of registered modules
   */
  static __modules__: Map<string, PrismiumModule>;

  /**
   * Map of instantiated Prismium instances
   */
  static __instances__: Map<Element, Prismium>;

  /**
   * Initialize the Prismium instance
   * @param el - Element to initialize with
   * @returns The Prismium instance
   */
  static init(el: HTMLElement): Prismium;

  /**
   * Register a module to be used with Prismium
   * @param module - Module or array of modules to register
   * @returns Prismium constructor for chaining
   */
  static use(module: PrismiumModule | PrismiumModule[]): typeof Prismium;

  /**
   * Get a Prismium instance from an element
   * @param el - Element or CSS selector
   * @returns The Prismium instance or null
   */
  static getInstance(el: HTMLElement | string): Prismium | null;

  /**
   * Open a specific accordion by selector or element
   * @param selector - CSS selector or DOM element
   * @returns Promise that resolves when the accordion is opened
   */
  static open(selector: string | HTMLElement): Promise<Prismium>;

  /**
   * Open all accordions that match the selector
   * @param container - CSS selector or DOM element
   * @param selector - CSS selector
   * @returns Promise that resolves when all accordions are opened
   */
  static openAll(
    container: string | HTMLElement,
    selector?: string
  ): Promise<Prismium[]>;

  /**
   * Open all accordions in the document
   * @param selector - CSS selector
   * @returns Promise that resolves when all accordions are opened
   */
  static openEverything(selector?: string): Promise<Prismium[]>;

  /**
   * Close a specific accordion by selector or element
   * @param selector - CSS selector or DOM element
   * @returns Promise that resolves when the accordion is closed
   */
  static close(selector: string | Element): Promise<Prismium>;

  /**
   * Close all accordions that match the selector
   * @param selector - CSS selector
   * @returns Promise that resolves when all accordions are closed
   */
  static closeAll(selector?: string): Promise<Prismium[]>;

  /**
   * Close all accordions in the document
   * @returns Promise that resolves when all accordions are closed
   */
  static closeEverything(): Promise<Prismium[]>;

  /**
   * Toggle a specific accordion by selector or element
   * @param selector - CSS selector or DOM element
   * @returns Promise that resolves when the accordion is toggled
   */
  static toggle(selector: string | Element): Promise<Prismium>;

  /**
   * Closes nested accordions
   * @param selector - CSS selector or DOM element
   * @returns Promise that resolves when all accordions are toggled
   */
  static closeNested(selector: string | Element): Promise<Prismium>;

  /**
   * Disables the ability to interact with the accordion
   * @param selector - CSS selector or DOM element
   * @returns Promise that resolves when the disabled state is set
   */
  static disable(selector: string | Element): Promise<Prismium>;

  /**
   * Enables interaction with the accordion.
   * @param selector - CSS selector or DOM element
   * @returns Promise that resolves when the enabled state is set
   */
  static enable(selector: string | Element): Promise<Prismium>;

  /**
   * Constructor for Prismium
   * @param el - Element or CSS selector
   * @param options - Configuration options
   */
  constructor(
    el?: HTMLElement | string | PrismiumOptions,
    options?: PrismiumOptions
  );

  /**
   * Root element of the Prismium instance
   */
  el: HTMLElement | null;

  /**
   * Options for the Prismium instance
   */
  options: PrismiumOptions;

  /**
   * The current clickable element
   */
  $current: HTMLElement | null;

  /**
   * The content container element
   */
  $content: HTMLElement | null;

  /**
   * The hidden container element
   */
  $hidden: HTMLElement | null;

  /**
   * Whether the accordion is opened
   */
  opened: boolean;

  /**
   * Whether the Prismium instance has been initialized
   */
  initialized: boolean;

  /**
   * Whether the Prismium instance has been destroyed
   */
  destroyed: boolean;

  /**
   * DOM manager for the Prismium instance
   */
  domManager: any;

  /**
   * Icon manager for the Prismium instance
   */
  iconManager: any;

  /**
   * Timer manager for the Prismium instance
   */
  timerManager: any;

  /**
   * Speed configuration for animations
   */
  speed: {
    open: number;
    close: number;
  };

  /**
   * Map of installed modules
   */
  __modules__: Map<string, PrismiumModule>;

  /**
   * Promise that resolves when initialization is complete
   */
  __initPromise: Promise<void>;

  /**
   * Event listeners registered for the instance
   */
  eventsListeners: PrismiumEventListeners;

  /**
   * Event listeners that receive all events
   */
  eventsAnyListeners: PrismiumEventCallback[];

  /**
   * Mount the Prismium instance to a DOM element
   * @param el - Element or CSS selector
   * @returns The Prismium instance
   */
  mount(el: HTMLElement | string): Prismium;

  /**
   * Initialize the Prismium instance
   * @param el - Optional element to initialize with
   * @returns The Prismium instance
   */
  init(el?: HTMLElement): Prismium;

  /**
   * Destroy the Prismium instance
   */
  destroy(): void;

  /**
   * Configure animation speeds
   * @param open - Opening animation speed in ms
   * @param close - Closing animation speed in ms (defaults to open speed)
   */
  setupSpeed(open: number, close?: number): void;

  /**
   * Get a Prismium instance from an element
   * @param el - Element or CSS selector
   * @returns The Prismium instance or null
   */
  getInstance(el: HTMLElement | string): Prismium | null;

  /**
   * Set up event handlers for the accordion
   * @param el - The root element
   */
  bindEvents(el: HTMLElement): void;

  /**
   * Open the accordion
   * @param el - Optional element reference
   * @param animated - Whether to animate the opening
   * @returns Promise that resolves when the opening is complete
   */
  open(el?: HTMLElement, animated?: boolean): Promise<Prismium>;

  /**
   * Close the accordion
   * @param el - Optional element reference
   * @param animated - Whether to animate the closing
   * @returns Promise that resolves when the closing is complete
   */
  close(el?: HTMLElement, animated?: boolean): Promise<Prismium>;

  /**
   * Toggle the accordion state
   * @param el - Optional element reference
   * @param animated - Whether to animate the toggle
   * @returns Promise that resolves when the toggle is complete
   */
  toggle(el?: HTMLElement, animated?: boolean): Promise<Prismium>;

  /**
   * Clean up resources and references
   */
  cleanup(): void;

  /**
   * Register an event listener
   * @param events - Event name or array of event names
   * @param handler - Event handler function
   * @returns The Prismium instance
   */
  on(events: string | string[], handler: PrismiumEventCallback): Prismium;

  /**
   * Register a one-time event listener
   * @param events - Event name or array of event names
   * @param handler - Event handler function
   * @returns The Prismium instance
   */
  once(events: string | string[], handler: PrismiumEventCallback): Prismium;

  /**
   * Register a listener for all events
   * @param handler - Event handler function
   * @returns The Prismium instance
   */
  onAny(handler: PrismiumEventCallback): Prismium;

  /**
   * Remove an event listener
   * @param events - Event name or array of event names
   * @param handler - Event handler function
   * @returns The Prismium instance
   */
  off(events: string | string[], handler?: PrismiumEventCallback): Prismium;

  /**
   * Remove a listener for all events
   * @param handler - Event handler function
   * @returns The Prismium instance
   */
  offAny(handler?: PrismiumEventCallback): Prismium;

  /**
   * Emit an event
   * @param event - Event name
   * @param args - Arguments to pass to the event handler
   * @returns The Prismium instance
   */
  emit(event: string, ...args: any[]): Prismium;
}

export default Prismium;
