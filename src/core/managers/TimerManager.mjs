/**
 * Timer Manager for Prismium
 * Manages animation timers and ensures proper cleanup
 */
export class TimerManager {
  /**
   * Creates a new TimerManager
   */
  constructor() {
    this.#timers = new Set();
  }

  /**
   * Set of active timers
   */
  #timers;

  /**
   * Set timeout for a function
   */
  setTimeout(callback, delay) {
    const timer = setTimeout(() => {
      this.#timers.delete(timer);
      callback();
    }, delay);

    this.#timers.add(timer);
    return timer;
  }

  /**
   * Clear a timeout
   */
  clearTimeout(timer) {
    if (timer) {
      clearTimeout(timer);
      this.#timers.delete(timer);
    }
  }

  /**
   * Clear all active timers
   */
  clearAll() {
    this.#timers.forEach((timer) => {
      clearTimeout(timer);
    });
    this.#timers.clear();
  }

  /**
   * Destroy the timer manager
   * Clears all timers and nullifies references
   */
  destroy() {
    this.clearAll();
    this.#timers = null;
  }
}
