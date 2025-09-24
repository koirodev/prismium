import { PrismiumError } from './errors/PrismiumError.mjs';
import { deepMerge } from '../utils/deepMerge.mjs';

import { DOMManager } from './managers/DOMManager.mjs';
import { IconManager } from './managers/IconManager.mjs';
import { TimerManager } from './managers/TimerManager.mjs';

import eventsEmitter from './methods/events-emitter.mjs';
import actions from './methods/actions.mjs';
import batchOperations from './methods/batch-operations.mjs';
import destroy from './methods/destroy.mjs';
import { publicMethods } from './methods/public-api.mjs';

import defaultOptions from './options.mjs';

// Method prototypes
const prototypes = {
  eventsEmitter,
  actions,
  batchOperations,
  destroy,
};

class Prismium {
  static __modules__ = new Map();
  static __instances__ = new Map();

  // Public methods as static
  static init = publicMethods.init;
  static getInstance = publicMethods.getInstance;
  static open = publicMethods.open;
  static openAll = publicMethods.openAll;
  static openEverything = publicMethods.openEverything;
  static close = publicMethods.close;
  static closeAll = publicMethods.closeAll;
  static closeEverything = publicMethods.closeEverything;
  static toggle = publicMethods.toggle;
  static disable = publicMethods.disable;
  static closeNested = publicMethods.closeNested;

  // Use a module
  static use(module) {
    if (Array.isArray(module)) {
      module.forEach((m) => this.use(m));
      return this;
    }

    if (!module || !module.name) {
      throw new PrismiumError('Module must have a name');
    }

    this.__modules__.set(module.name, module);
    return this;
  }

  constructor(...args) {
    let el, options;

    // Fix for requestAnimationFrame in old browsers
    window.requestAnimationFrame = function (callback) {
      return setTimeout(callback, 0);
    };

    // Check constructor arguments
    if (
      args.length === 1 &&
      args[0].constructor &&
      Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object'
    ) {
      options = args[0];
    } else {
      [el, options] = args;
    }

    if (!options) {
      options = {};
    }

    options = deepMerge({}, options);

    if (el && !options.el) {
      options.el = el;
    }

    if (!this.el) {
      this.el = options.el;
    }

    // Handle string selector
    if (this.el && typeof this.el === 'string') {
      const elements = document.querySelectorAll(this.el);
      const prismiumArray = Array.from(elements).map((el) => {
        // Check if instance is already initialized
        if (Prismium.__instances__.has(el)) {
          return Prismium.__instances__.get(el);
        }

        const newOptions = deepMerge({}, options, { el }); // Remove init: true
        const instance = new Prismium(newOptions);
        Prismium.__instances__.set(el, instance);
        return instance;
      });

      return new Proxy(prismiumArray, {
        get(target, prop) {
          if (Array.prototype[prop]) {
            return target[prop].bind(target);
          }

          const multiInstanceMethods = [
            'on',
            'once',
            'onAny',
            'off',
            'offAny',
            'emit',
            'init',
            'destroy',
          ];

          if (multiInstanceMethods.includes(prop)) {
            return (...args) => {
              const results = target.map((instance) => {
                return instance[prop].apply(instance, args);
              });
              return target;
            };
          }

          if (typeof target[0][prop] === 'function') {
            return target[0][prop].bind(target[0]);
          }

          return target[0][prop];
        },
      });
    }

    this.options = deepMerge({}, defaultOptions, options);
    this.__prismium__ = true;
    this.eventsListeners = {};
    this.eventsAnyListeners = [];
    this.__modules__ = new Map();

    if (this.options.modules) {
      if (Array.isArray(this.options.modules)) {
        this.options.modules.forEach((module) => {
          if (typeof module === 'object' && module.name) {
            this.constructor.use(module);
          }
        });
      }
    }

    // Register events
    if (this.options && this.options.on) {
      Object.keys(this.options.on).forEach((eventName) => {
        this.on(eventName, this.options.on[eventName]);
      });
    }
    if (this.options && this.options.onAny) {
      this.onAny(this.options.onAny);
    }

    this.destroyed = false;
    this.initialized = false;
    this.opened = this.options.opened || false;
    this.disabled = this.options.disabled || false;

    this.domManager = new DOMManager();
    this.iconManager = new IconManager();
    this.timerManager = new TimerManager();

    // Setup modules before mounting and initializing
    const moduleSetupPromise = Promise.resolve().then(() => {
      Prismium.__modules__.forEach((module, name) => {
        if (typeof module.install === 'function') {
          try {
            module.install(this);
            this.__modules__.set(name, module);
          } catch (error) {
            throw new PrismiumError(`Failed to install module ${name}`, error);
          }
        }
      });

      // Mount element only if el is specified
      if (this.options.el) {
        this.mount(this.options.el);
      }

      // Initialize only after modules are installed
      if (this.options.init === true) {
        this.init();
      }
    });

    // Save promise for possible initialization check
    this.__initPromise = moduleSetupPromise;
  }

  // Mount element
  mount(el) {
    if (!el) {
      throw new PrismiumError('Element is required');
    }

    if (!(el instanceof Element)) {
      throw new PrismiumError('Invalid element type');
    }

    if (typeof el === 'string') {
      const elements = document.querySelectorAll(el);
      if (elements.length > 1) {
        return Array.from(elements).map(
          (el) => new this.constructor({ ...this.options, el })
        );
      }
      el = elements[0];
    }

    this.el = el;
    return this;
  }

  // Initialization
  init(el = this.el) {
    if (this.initialized) {
      return `this`;
    }

    if (!el) {
      throw new PrismiumError('Element is required');
    }

    if (!(el instanceof Element)) {
      throw new PrismiumError('Invalid element type');
    }

    this.destroyed = false;
    this.emit('beforeInit');

    const existingInstance =
      Prismium.__instances__.get(el) || this.getInstance(el);
    if (existingInstance) {
      if (existingInstance.destroyed) {
        Object.assign(this, {
          options: existingInstance.options,
          eventsListeners: existingInstance.eventsListeners,
          eventsAnyListeners: existingInstance.eventsAnyListeners,
          __modules__: existingInstance.__modules__,
        });

        Prismium.__instances__.set(el, this);
      } else if (existingInstance.initialized) {
        return existingInstance;
      }
    }

    try {
      this.domManager = new DOMManager();
      this.iconManager = new IconManager();
      this.timerManager = new TimerManager();

      // Restore options if they were cleared
      if (!this.options) {
        this.options = { ...defaultOptions };
      }

      // Restore event listeners if they were destroyed
      if (!this.eventsListeners) {
        this.eventsListeners = {};
      }
      if (!this.eventsAnyListeners) {
        this.eventsAnyListeners = [];
      }

      // If it's an existing instance, restore its listeners
      const existingInstance = this.getInstance(el);
      if (existingInstance && existingInstance.eventsListeners) {
        this.eventsListeners = { ...existingInstance.eventsListeners };
        this.eventsAnyListeners = [...existingInstance.eventsAnyListeners];
      }

      // Mount element
      if (!this.el || this.el !== el) {
        this.mount(el);
      }

      // Setup element
      el.classList.add('prismium');

      if (this.options.theme) {
        el.classList.add(`prismium_${this.options.theme}`);
      }

      // Initialize DOM and managers
      this.domManager.setup(this, el);

      if (this.$current) {
        this.iconManager = new IconManager();
        this.iconManager.setup(this, this.$current);
        this.bindEvents(el);
      }

      if (typeof this.options.speed === 'number') {
        this.setupSpeed(this.options.speed);
      } else if (typeof this.options.speed === 'object') {
        this.setupSpeed(this.options.speed.open, this.options.speed.close);
      }

      // Initialize modules
      this.__modules__.forEach((module) => {
        if (typeof module.init === 'function') {
          module.init(this);
        }
      });

      Prismium.__instances__.set(el, this);

      this.initialized = true;
      this.el.prismium = this;
      this.el.classList.add('prismium-initialized');
      this.emit('init');
    } catch (error) {
      console.error('Initialization error:', error);
      throw new PrismiumError('Initialization error', error);
    }

    this.emit('afterInit');
    return this;
  }

  // Setup speed
  setupSpeed(open, close) {
    this.speed = {
      open: open >= 0 ? open : 350,
      close: close >= 0 ? close : open >= 0 ? open : 350,
    };
  }

  // Get instance
  getInstance(el) {
    if (!el) return null;

    if (el && typeof el === 'string') {
      el = document.querySelector(el);
    }

    return el.prismium;
  }

  // Bind events
  bindEvents(el) {
    if (this.$current && !this.$current._hasClickHandler) {
      const handler = (event) => {
        event.preventDefault();

        const preventSelectors = Array.isArray(
          this.options.preventSelectors
        )
          ? this.options.preventSelectors
          : [this.options.preventSelectors];
        const isInPreventSelector = preventSelectors.some((selector) =>
          event.target.closest(selector)
        );
        if (isInPreventSelector) return;

        if (!this.destroyed) {
          this.toggle(el, true);
        }
      };

      this.$current.addEventListener('click', handler);
      this.$current._hasClickHandler = true;
      this.$current._clickHandler = handler;
    }
  }
}

// Add methods to prototype
Object.keys(prototypes).forEach((prototypeGroup) => {
  Object.keys(prototypes[prototypeGroup]).forEach((protoMethod) => {
    Prismium.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
  });
});

// Add static methods to global object
globalThis.Prismium = Prismium;
Object.assign(globalThis.Prismium, {
  openAll: Prismium.openAll.bind(Prismium),
  closeAll: Prismium.closeAll.bind(Prismium),
  openEverything: Prismium.openEverything.bind(Prismium),
  closeEverything: Prismium.closeEverything.bind(Prismium),
  disable: Prismium.disable.bind(Prismium),
});

export default Prismium;
