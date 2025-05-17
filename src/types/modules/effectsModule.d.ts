import { PrismiumEffect, PrismiumModule } from '../index';
import Prismium from '../core';

/**
 * Options for the EffectsModule
 */
export interface EffectsModuleOptions {
  /**
   * Animation effect type
   */
  effect?: PrismiumEffect;

  /**
   * Animation effect selectors
   */
  effectSelectors?: string | string[];

  /**
   * Animation effect ignore selectors
   */
  effectIgnore?: string | string[];

  /**
   * Animation effect line by line
   */
  effectLineByLine?: {
    speed?: number;
    easing?: string;
    delay?: number;
    scale?: number;
    y?: number | string;
    x?: number | string;
    opacity?: number;
  };

  /**
   * Animation effect fade scale
   */
  effectFadeScale?: {
    speed?: number;
    easing?: string;
    scale?: number;
    opacity?: number;
  };

  /**
   * Animation effect slide
   */
  effectSlide?: {
    speed?: number;
    easing?: string;
    directions?: 'up' | 'down' | 'left' | 'right';
    distance?: number | string;
    opacity?: number;
  };

  /**
   * Animation effect stagger
   */
  effectStagger?: {
    speed?: number;
    easing?: string;
    delay?: number;
    directions?: Array<'up' | 'right' | 'down' | 'left'>;
    distance?: number | string;
    opacity?: number;
  };

  /**
   * Animation effect wave
   */
  effectWave?: {
    speed?: number;
    easing?: string;
    delay?: number;
    amplitude?: string | number;
    frequency?: number;
    opacity?: number;
  };

  /**
   * Animation effect flip
   */
  effectFlip?: {
    speed?: number;
    easing?: string;
    delay?: number;
    perspective?: number | string;
    rotation?: number | string;
    opacity?: number;
  };

  /**
   * Animation effect zoom
   */
  effectZoom?: {
    speed?: number;
    easing?: string;
    delay?: number;
    scale?: number;
    opacity?: number;
    origins?: string[];
  };

  /**
   * Animation effect cascade
   */
  effectCascade?: {
    speed?: number;
    easing?: string;
    delay?: number;
    rotation?: number;
    distance?: number | string;
    opacity?: number;
  };

  /**
   * Animation effect custom
   */
  effectCustom?: {
    speed?: number;
    delay?: number;
    setup?: (
      prismium: Prismium,
      child: HTMLElement,
      index: number,
      total: number,
      isOpening: boolean
    ) => void;
    open?: (
      prismium: Prismium,
      child: HTMLElement,
      index: number,
      total: number
    ) => void;
    close?: (
      prismium: Prismium,
      child: HTMLElement,
      index: number,
      total: number
    ) => void;
    cleanup?: (
      prismium: Prismium,
      child: HTMLElement,
      index: number,
      total: number,
      isOpening: boolean
    ) => void;
  };
}

/**
 * Effects module for Prismium
 * Adds animation effects to accordion content
 */
export interface EffectsModule extends PrismiumModule {
  /**
   * Module name
   */
  name: 'effects';

  /**
   * Default options for effects
   */
  defaultOptions: EffectsModuleOptions;

  /**
   * Install the effects module
   * @param instance - The Prismium instance
   */
  install(instance: Prismium): void;
}
