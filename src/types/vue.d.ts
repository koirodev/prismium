import { EffectsModule } from './modules/index';
import { PrismiumModule } from './index';
import { PrismiumOptions } from './options';
import Prismium from './core';
import { DefineComponent, InjectionKey, Ref } from 'vue';

/**
 * Interface for the Prismium injection context
 */
export interface PrismiumInjection {
  /**
   * Reference to Prismium root element
   */
  prismiumRef: Ref<HTMLElement | null>;

  /**
   * Reference to Prismium instance
   */
  instance: Ref<Prismium | null>;
}

/**
 * Vue injection key for Prismium context
 */
export const PRISMIUM_INJECTION_KEY: InjectionKey<PrismiumInjection>;

/**
 * Props for the Prismium Vue component
 */
export interface PrismiumProps {
  /**
   * Options for configuring the Prismium instance
   */
  options?: PrismiumOptions;

  /**
   * Modules to register with Prismium
   */
  modules?: PrismiumModule[];

  /**
   * Additional attributes to apply to the element
   */
  attributes?: Record<string, any>;
}

/**
 * Props for PrismiumCurrent component
 */
export interface PrismiumCurrentProps {
  /**
   * HTML selector to use for rendering the component
   * @default 'div'
   */
  selector?: string;

  /**
   * Additional attributes to apply to the element
   */
  attributes?: Record<string, any>;
}

/**
 * Props for PrismiumContent component
 */
export interface PrismiumContentProps {
  /**
   * HTML selector to use for rendering the component
   * @default 'div'
   */
  selector?: string;

  /**
   * Additional attributes to apply to the element
   */
  attributes?: Record<string, any>;
}

/**
 * Prismium main Vue component
 */
export const Prismium: DefineComponent<PrismiumProps>;

/**
 * Prismium current (clickable header) Vue component
 */
export const PrismiumCurrent: DefineComponent<PrismiumCurrentProps>;

/**
 * Prismium content (collapsible content) Vue component
 */
export const PrismiumContent: DefineComponent<PrismiumContentProps>;

/**
 * Vue plugin that registers all Prismium components
 */
export default {
  /**
   * Install Prismium plugin in Vue application
   * @param app - Vue application instance
   */
  install(app: any): void {},
};
