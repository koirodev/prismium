/**
 * Class for handling Prismium errors
 */
export class PrismiumError extends Error {
  /**
   * Creates a new Prismium error
   */
  constructor(message, originalError) {
    super(message);
    this.name = 'PrismiumError';
    this.originalError = originalError;
  }
}
