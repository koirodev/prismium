import { deepMerge } from '../utils/deepMerge.mjs';
import { EffectsManager } from '../core/managers/EffectsManager.mjs';

/**
 * Effects module for Prismium
 * Adds animation effects to accordion content
 * @type {import('../types/index').PrismiumModule}
 */
export default {
  /**
   * Module name
   */
  name: 'effects',

  /**
   * Default options for effects
   */
  defaultOptions: {
    /**
     * Effect type to use
     * @type {import('../types/index').PrismiumEffect|null}
     */
    effect: null,
    
    /**
     * Selectors for elements to ignore when applying effects
     * @type {string[]}
     */
    effectIgnore: ['[data-effect-ignore]'],
  },

  /**
   * Install the effects module
   * @param {import('../types/core').default} instance - Prismium instance
   */
  install(instance) {
    deepMerge({}, this.defaultOptions, instance.options);

    instance.effectsManager = new EffectsManager();
  },
};
