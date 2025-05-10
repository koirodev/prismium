import { processAccordions, getElementDepth } from '../../utils/base.mjs';

export default {
  // Open all accordions in the container
  openAll(container, selector = '.prismium') {
    if (container && typeof container === 'string') {
      container = document.querySelector(container);
    }

    if (!container) return;

    const accordions = Array.from(container.querySelectorAll(selector));

    // Сортировка аккордеонов по глубине | Sort accordions by depth
    accordions.sort((a, b) => {
      const depthA = getElementDepth(a, container);
      const depthB = getElementDepth(b, container);
      return depthB - depthA;
    });

    const rootAccordions = accordions.filter(
      (el) => !el.closest('.prismium__content')
    );
    const nestedAccordions = accordions.filter((el) =>
      el.closest('.prismium__content')
    );

    this._isOpeningAll = true;
    processAccordions(
      nestedAccordions,
      rootAccordions,
      this.getInstance.bind(this),
      this.open.bind(this)
    );
    this._isOpeningAll = false;
  },

  // Close all accordions in the container
  closeAll(container, selector = '.prismium') {
    if (typeof container === 'string') {
      container = document.querySelector(container);
    }

    container
      .querySelectorAll(`${selector}.${this.options.activeClass}`)
      .forEach((el) => {
        const instance = this.getInstance(el);
        this.close(el);
        if (instance && instance.iconManager) {
          instance.iconManager.updateIcon('close');
        }
      });
  },

  // Open all accordions on the page
  openEverything(selector = '.prismium') {
    const accordions = Array.from(document.querySelectorAll(selector));

    // Сортировка аккордеонов по глубине | Sort accordions by depth
    accordions.sort((a, b) => {
      const depthA = getElementDepth(a, document.body);
      const depthB = getElementDepth(b, document.body);
      return depthB - depthA;
    });

    const rootAccordions = accordions.filter(
      (el) => !el.closest('.prismium__content')
    );
    const nestedAccordions = accordions.filter((el) =>
      el.closest('.prismium__content')
    );

    this._isOpeningEverything = true;
    processAccordions(
      nestedAccordions,
      rootAccordions,
      this.getInstance.bind(this),
      this.open.bind(this)
    );
    this._isOpeningEverything = false;
  },

  // Close all accordions on the page
  closeEverything(selector = '.prismium') {
    document
      .querySelectorAll(`${selector}.${this.options.activeClass}`)
      .forEach((el) => {
        const instance = this.getInstance(el) || this;

        instance.close(el);
      });
  },

  // Close nested accordions
  closeNested(el = this.el) {
    el.querySelectorAll(`.${this.options.activeClass}`).forEach((nested) => {
      const instance = this.getInstance(nested);
      instance.close(nested);
    });
  },

  // Disables the ability to interact with the accordion
  disable(el = this.el) {
    if (el && typeof el === 'string') {
      el = document.querySelector(el);
    }

    const instance = this.getInstance(el);
    if (!instance) return;

    const tagName = instance.$current.tagName.toLowerCase();

    instance.el.classList.add(instance.options.disabledClass);
    instance.$current.setAttribute('tabindex', '-1');

    if (tagName === 'button') {
      instance.$current.setAttribute('disabled', 'true');
    }

    instance.disabled = true;
  },

  // Enables interaction with the accordion.
  enable(el = this.el) {
    if (el && typeof el === 'string') {
      el = document.querySelector(el);
    }

    const instance = this.getInstance(el);
    if (!instance) return;

    instance.el.classList.remove(instance.options.disabledClass);
    instance.$current.removeAttribute('disabled');
    instance.$current.removeAttribute('tabindex');
    instance.disabled = false;
  },
};
