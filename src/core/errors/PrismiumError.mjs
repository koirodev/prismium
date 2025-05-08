/**
 * Class for handling Prismium errors
 * @extends Error
 */
export class PrismiumError extends Error {
  /**
   * Creates a new Prismium error
   * @param {string} message - Error message
   * @param {Error} [originalError] - Original error that was caught
   */
  constructor(message, originalError) {
    super(message);
    this.name = 'PrismiumError';
    this.originalError = originalError;
  }
}
