import { PrismiumError } from '../errors/PrismiumError.mjs';

/**
 * DOM Manager for Prismium
 * Manages DOM structure and interactions for the accordion
 */
export class DOMManager {
  /**
   * Set up the DOM manager with Prismium instance and element
   * @param {import('../../types/core').default} instance - Prismium instance
   * @param {HTMLElement} el - Root element
   * @returns {DOMManager} The DOMManager instance
   */
  setup(instance, el) {
    this.validateElement(el);
    this.instance = instance;
    this.createStructure(el);
    this.setClasses(el);
    this.setTheme(el);
    this.handleInitialState(el);
    return this;
  }

  /**
   * Validate that the element is valid for Prismium
   * @param {Element} el - Element to validate
   * @throws {PrismiumError} If the element is invalid
   */
  validateElement(el) {
    if (!el) {
      throw new PrismiumError('Element is required');
    }

    if (!(el instanceof Element)) {
      throw new PrismiumError('Invalid element type. Expected HTMLElement');
    }

    if (!el.children || !el.children.length) {
      throw new PrismiumError('Element must have children');
    }
  }

  /**
   * Create the accordion structure
   * @param {HTMLElement} el - Root element
   * @throws {Error} If required elements are not found
   */
  createStructure(el) {
    const content = el.querySelector(this.instance.options.contentSelector);
    const current = el.querySelector(this.instance.options.currentSelector);

    let hidden;

    if (!content || !current) {
      throw new Error('Required elements not found');
    }

    this.instance.$content = content;
    this.instance.$current = current;

    if (
      content.parentElement ===
      content.closest(this.instance.options.hiddenSelector)
    ) {
      hidden = content.parentElement;
    } else {
      hidden = document.createElement('div');
      hidden.appendChild(content);
      el.appendChild(hidden);
    }

    this.instance.$hidden = hidden;

    this.instance.$binding = this.instance.options.getParentHeight
      ? el
      : content;

    let containerSelectors = Array.isArray(
      this.instance.options.containerSelectors
    )
      ? this.instance.options.containerSelectors
      : [this.instance.options.containerSelectors];
    this.instance.$container = el.closest(
      containerSelectors.find((selector) => el.closest(selector))
    );
  }

  /**
   * Set CSS classes for elements
   * @param {HTMLElement} el - Root element
   */
  setClasses(el) {
    el.classList.add('prismium');
    this.instance.$current.classList.add('prismium__current');
    this.instance.$content.classList.add('prismium__content');
    this.instance.$hidden.classList.add('prismium__hidden');
  }

  /**
   * Apply theme classes to the element
   * @param {HTMLElement} el - Root element
   */
  setTheme(el) {
    const { theme } = this.instance.options;
    if (theme) {
      el.classList.add(`prismium_${theme}`);

      if (typeof theme === 'object') {
        Object.entries(theme).forEach(([key, value]) => {
          if (value) {
            el.classList.add(`prismium_${key}`);
          }
        });
      }
    }
  }

  /**
   * Handle the initial state of the accordion
   * @param {HTMLElement} el - Root element
   */
  handleInitialState(el) {
    if (
      el.classList.contains(this.instance.options.activeClass) ||
      this.instance.opened
    ) {
      el.classList.remove(this.instance.options.activeClass);
      this.instance.$hidden.classList.add(this.instance.options.openedClass);
      this.instance.on('afterInit', () => {
        this.instance.open(el, false);
      });
    } else {
      this.instance.opened = false;
    }

    if (
      el.classList.contains(this.instance.options.disabledClass) ||
      this.instance.disabled
    ) {
      this.instance.on('afterInit', () => {
        this.instance.disable(el);
      });
    }
  }

  /**
   * Clean up DOM elements
   * Removes dynamic elements and restores original structure
   */
  cleanup() {
    if (this.instance.$content && this.instance.$hidden) {
      this.instance.el.appendChild(this.instance.$content);
      this.instance.$hidden.remove();
    }
  }
}
