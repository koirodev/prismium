import { deepMerge } from '../utils/deepMerge.mjs';
import { EffectsManager } from '../core/managers/EffectsManager.mjs';

/**
 * Effects module for Prismium
 * Adds animation effects to accordion content
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
     */
    effect: null,

    /**
     * Selectors for elements to ignore when applying effects
     */
    effectIgnore: ['[data-effect-ignore]'],
  },

  /**
   * Install the effects module
   */
  install(instance) {
    deepMerge({}, this.defaultOptions, instance.options);

    instance.effectsManager = new EffectsManager();
  },
};
