import Prismium from './core';

/**
 * DOM Manager for Prismium
 * Manages the DOM structure and interactions
 */
export class DOMManager {
  /**
   * Reference to the Prismium instance
   */
  instance: Prismium;

  /**
   * Set up the DOM manager with Prismium instance and element
   * @param instance - Prismium instance
   * @param el - Root element
   * @returns The DOMManager instance
   */
  setup(instance: Prismium, el: HTMLElement): DOMManager;

  /**
   * Validate that the element is valid for Prismium
   * @param el - Element to validate
   * @throws PrismiumError if the element is invalid
   */
  validateElement(el: Element): void;

  /**
   * Create the accordion structure
   * @param el - Root element
   */
  createStructure(el: HTMLElement): void;

  /**
   * Set CSS classes for elements
   * @param el - Root element
   */
  setClasses(el: HTMLElement): void;

  /**
   * Apply theme classes to the element
   * @param el - Root element
   */
  setTheme(el: HTMLElement): void;

  /**
   * Handle the initial state of the accordion
   * @param el - Root element
   */
  handleInitialState(el: HTMLElement): void;
}

/**
 * Icon Manager for Prismium
 * Manages SVG icons in accordion
 */
export class IconManager {
  /**
   * Reference to the Prismium instance
   */
  instance: Prismium;

  /**
   * Set up the Icon manager with Prismium instance and element
   * @param instance - Prismium instance
   * @param current - Current element where icon is placed
   * @returns The IconManager instance
   */
  setup(instance: Prismium, current: HTMLElement): IconManager;

  /**
   * Check if icon is needed
   * @returns Boolean indicating if icon is needed
   */
  isIconNeeded(): boolean;

  /**
   * Create icon element
   * @returns SVG icon element
   */
  createIcon(): SVGElement;

  /**
   * Get icon ID from attribute or default
   * @returns Icon ID string
   */
  getIconId(): string;

  /**
   * Append icon to current element
   * @param icon - Icon element
   * @param current - Current element
   */
  appendIcon(icon: SVGElement, current: HTMLElement): void;
}

/**
 * Timer Manager for Prismium
 * Manages animation timers
 */
export class TimerManager {
  /**
   * Set timeout for a function
   * @param callback - Function to call
   * @param delay - Delay in milliseconds
   * @returns Timeout ID
   */
  setTimeout(callback: () => void, delay: number): number;

  /**
   * Set interval for a function
   * @param callback - Function to call
   * @param delay - Delay in milliseconds
   * @returns Interval ID
   */
  setInterval(callback: () => void, delay: number): number;

  /**
   * Clear a timeout
   * @param id - Timeout ID
   */
  clearTimeout(id: number): void;

  /**
   * Clear an interval
   * @param id - Interval ID
   */
  clearInterval(id: number): void;

  /**
   * Clear all timers
   */
  clearAllTimers(): void;
}

/**
 * Effects Manager for Prismium
 * Manages animation effects
 */
export class EffectsManager {
  /**
   * Reference to the Prismium instance
   */
  instance: Prismium;

  /**
   * Set up the Effects manager with Prismium instance
   * @param instance - Prismium instance
   * @returns The EffectsManager instance
   */
  setup(instance: Prismium): EffectsManager;

  /**
   * Apply effect when opening
   * @param content - Content element
   * @returns Promise that resolves when effect is complete
   */
  applyOpenEffect(content: HTMLElement): Promise<void>;

  /**
   * Apply effect when closing
   * @param content - Content element
   * @returns Promise that resolves when effect is complete
   */
  applyCloseEffect(content: HTMLElement): Promise<void>;

  /**
   * Get elements to animate
   * @param content - Content element
   * @returns Array of elements to animate
   */
  getElementsToAnimate(content: HTMLElement): Element[];

  /**
   * Process animation for each element
   * @param elements - Elements to animate
   * @param isOpening - Whether accordion is opening
   * @returns Promise that resolves when all animations are complete
   */
  processAnimation(elements: Element[], isOpening: boolean): Promise<void>;
}
