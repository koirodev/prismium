import { EffectsModule } from './modules/index';
import { PrismiumModule } from './index';
import { PrismiumOptions } from './options';
import Prismium from './core';
import * as React from 'react';

/**
 * Props for the Prismium React component
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
   * Children components
   */
  children?: React.ReactNode;

  /**
   * Event handler for beforeInit event
   */
  beforeInit?: (instance: Prismium) => void;

  /**
   * Event handler for init event
   */
  init?: (instance: Prismium) => void;

  /**
   * Event handler for afterInit event
   */
  afterInit?: (instance: Prismium) => void;

  /**
   * Event handler for beforeOpen event
   */
  beforeOpen?: (instance: Prismium) => void;

  /**
   * Event handler for open event
   */
  open?: (instance: Prismium) => void;

  /**
   * Event handler for afterOpen event
   */
  afterOpen?: (instance: Prismium) => void;

  /**
   * Event handler for beforeClose event
   */
  beforeClose?: (instance: Prismium) => void;

  /**
   * Event handler for close event
   */
  close?: (instance: Prismium) => void;

  /**
   * Event handler for afterClose event
   */
  afterClose?: (instance: Prismium) => void;

  /**
   * Event handler for beforeDestroy event
   */
  beforeDestroy?: (instance: Prismium) => void;

  /**
   * Event handler for destroy event
   */
  destroy?: (instance: Prismium) => void;

  /**
   * Event handler for afterDestroy event
   */
  afterDestroy?: (instance: Prismium) => void;

  /**
   * Event handler for effectStart event
   */
  effectStart?: (instance: Prismium) => void;

  /**
   * Event handler for effectEnd event
   */
  effectEnd?: (instance: Prismium) => void;

  /**
   * Additional props to spread to the component
   */
  [key: string]: any;
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

  /**
   * Children components
   */
  children?: React.ReactNode;

  /**
   * Additional props to spread to the component
   */
  [key: string]: any;
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

  /**
   * Children components
   */
  children?: React.ReactNode;

  /**
   * Additional props to spread to the component
   */
  [key: string]: any;
}

/**
 * Prismium main React component
 */
export const Prismium: React.FC<PrismiumProps>;

/**
 * Prismium current (clickable header) React component
 */
export const PrismiumCurrent: React.FC<PrismiumCurrentProps>;

/**
 * Prismium content (collapsible content) React component
 */
export const PrismiumContent: React.FC<PrismiumContentProps>;
