import { PrismiumOptions } from './options';

/**
 * Main type definitions for Prismium
 */

/**
 * Global declaration for the Prismium class
 */
export as namespace Prismium;

/**
 * Prismium event names
 */
export type PrismiumEventName =
  | 'beforeInit'
  | 'init'
  | 'afterInit'
  | 'beforeOpen'
  | 'open'
  | 'afterOpen'
  | 'beforeClose'
  | 'close'
  | 'afterClose'
  | 'beforeDestroy'
  | 'destroy'
  | 'afterDestroy'
  | 'effectStart'
  | 'effectEnd';

/**
 * Prismium event callback function
 */
export type PrismiumEventCallback = (instance?: Prismium) => void;

/**
 * Prismium event listeners object
 */
export interface PrismiumEventListeners {
  [event: string]: PrismiumEventCallback | PrismiumEventCallback[];
}

/**
 * Prismium module definition
 */
export interface PrismiumModule {
  /**
   * Module name
   */
  name: string;

  /**
   * Called when the module is installed into Prismium
   */
  install?: (instance: Prismium) => void;

  /**
   * Called when Prismium is initialized
   */
  init?: (instance: Prismium) => void;
}

/**
 * Prismium speed configuration
 */
export interface PrismiumSpeed {
  /**
   * Opening speed in milliseconds
   */
  open?: number;

  /**
   * Closing speed in milliseconds
   */
  close?: number;
}

/**
 * Prismium theme type
 */
export type PrismiumTheme =
  | 'clear'
  | 'light'
  | 'dark'
  | 'light-contrast'
  | 'dark-contrast'
  | 'forest'
  | 'ocean'
  | 'sunset'
  | { [key: string]: boolean };

/**
 * Main Prismium class
 */
declare class Prismium {
  constructor(
    selector?: string | HTMLElement | null,
    options?: PrismiumOptions
  );

  init(el?: HTMLElement): void;
  destroy(el?: HTMLElement): Prismium;
  setupSpeed(open: number, close?: number): void;
  open(): void;
  close(): void;
  toggle(): void;

  on(
    event: PrismiumEventName | PrismiumEventName[],
    handler: PrismiumEventCallback | PrismiumEventCallback[]
  ): Prismium;
  once(
    event: PrismiumEventName | PrismiumEventName[],
    handler: PrismiumEventCallback | PrismiumEventCallback[]
  ): Prismium;
  onAny(handler: PrismiumEventCallback | PrismiumEventCallback[]): Prismium;
  off(
    event: PrismiumEventName | PrismiumEventName[],
    handler?: PrismiumEventCallback | PrismiumEventCallback[]
  ): Prismium;
  offAny(handler: PrismiumEventCallback | PrismiumEventCallback[]): Prismium;

  static unit(el: HTMLElement): Prismium;
  static use(module: PrismiumModule): void;
  static getInstance(selector: HTMLElement | string): Prismium;
  static open(selector: HTMLElement | string): Prismium;
  static openAll(container: HTMLElement | string, selector?: string): void;
  static openEverything(selector?: string): void;
  static toggle(selector: HTMLElement | string): void;
  static close(selector: HTMLElement | string): Prismium;
  static closeAll(container: HTMLElement | string, selector?: string): void;
  static closeEverything(selector?: string): void;
  static closeNested(selector: HTMLElement | string): void;
  static disable(selector: HTMLElement | string): void;
  static enable(selector: HTMLElement | string): void;
}

export default Prismium;
