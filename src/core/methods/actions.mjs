export default {
  open(el = this.el, scrollTo = false) {
    // Check if el is a string and get the element if it is
    if (el && typeof el === 'string') {
      el = document.querySelector(el);
    }

    // Exit the function if the element is not found
    if (!el) return;

    // Get the exact instance that is bound to the element
    const instance = this.getInstance(el);

    if (!instance || instance.opened) return;
    if (instance.disabled) return;

    instance.emit('beforeOpen');

    // Set the speed
    instance.el.style.setProperty('--pr-speed', `${instance.speed.open}ms`);

    // If there is an effects manager and an effect is set, start the effect event
    if (instance.effectsManager && instance.options.effect) {
      instance.emit('effectStart', 'open');
    }

    instance.opened = true;

    // If the element has child elements and all elements are opened, add classes
    if (
      instance.hasChildren &&
      (this._isOpeningAll || this._isOpeningEverything)
    ) {
      el.classList.add(instance.options.activeClass);
      instance.$hidden.classList.add(instance.options.openedClass);

      this.iconManager?.updateIcon('open');

      this.emit('open');
      this.emit('afterOpen');
      return;
    }

    // Scroll to the element if set in the options
    // scrollTo - a flag that indicates that you need to scroll to the element
    // done to prevent scrolling to the element when opening all elements
    // or when opening when the page is loaded
    if (instance.options.scrollTo && scrollTo) {
      let startTime = null;
      const duration = instance.speed.open;

      const offset =
        typeof instance.options.scrollTo === 'object' &&
        instance.options.scrollTo.offset
          ? instance.options.scrollTo.offset
          : 0;
      const behavior =
        typeof instance.options.scrollTo === 'object' &&
        instance.options.scrollTo.behavior
          ? instance.options.scrollTo.behavior
          : 'auto';

      // Function to cancel animation
      const cancelFollow = () => {
        if (instance.__followAnimation) {
          cancelAnimationFrame(instance.__followAnimation);
          instance.__followAnimation = null;
        }
      };

      // Clear the previous animation if it exists
      cancelFollow();

      const followElement = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;

        const elementRect = instance.$current.getBoundingClientRect();

        window.scrollTo({
          top: window.scrollY + elementRect.top - offset,
          behavior: behavior,
        });

        if (elapsed < duration) {
          instance.__followAnimation = requestAnimationFrame(followElement);
        } else {
          cancelFollow();
        }
      };

      instance.__followAnimation = requestAnimationFrame(followElement);

      // Clear the animation when closing
      instance.__animationTimer = this.timerManager.setTimeout(() => {
        cancelFollow();
      }, instance.speed.open);
    }

    // Apply opening effects if set
    if (instance.effectsManager && instance.options.effect) {
      instance.effectsManager.applyOpenEffects(instance);
    }

    // Set the maximum height for the animation
    const height = instance.$binding.clientHeight || 0;
    instance.$hidden.style.maxHeight = `${height}px`;
    el.classList.add(instance.options.activeClass);

    // Clear timers and set new ones for icons and animations
    instance.__iconTimer &&
      this.timerManager.clearTimeout(instance.__iconTimer);
    instance.__animationTimer &&
      this.timerManager.clearTimeout(instance.__animationTimer);
    instance.__iconTimer = this.timerManager.setTimeout(() => {
      this.iconManager?.updateIcon('open');
      this.emit('open');
    }, instance.speed.open / 2);

    instance.__animationTimer = this.timerManager.setTimeout(() => {
      instance.$hidden.style.removeProperty('max-height');
      instance.el.style.removeProperty('--pr-speed');
      instance.$hidden.classList.add(instance.options.openedClass);

      this.emit('afterOpen');
    }, instance.speed.open);

    // Apply opening effects and set a timer to finish the effect
    if (instance.effectsManager && instance.options.effect) {
      instance.effectsManager.applyOpenEffects(instance);
      const duration = instance.effectsManager.getEffectsDuration(instance);

      instance.__effectTimer &&
        instance.timerManager.clearTimeout(instance.__effectTimer);
      instance.__effectTimer = instance.timerManager.setTimeout(() => {
        instance.emit('effectEnd', 'open');
      }, duration);
    }
  },

  close(el = this.el) {
    // Check if el is a string and get the element if it is
    if (el && typeof el === 'string') {
      el = document.querySelector(el);
    }

    // Exit the function if the element is not found
    if (!el) return;

    // Get the exact instance that is bound to the element
    const instance = this.getInstance(el);
    if (!instance || !instance.opened) return;
    if (instance.disabled) return;

    instance.emit('beforeClose');

    // Set the speed
    instance.el.style.setProperty('--pr-speed', `${instance.speed.close}ms`);

    // If there is an effects manager and an effect is set, start the effect event
    if (instance.effectsManager && instance.options.effect) {
      instance.emit('effectStart', 'close');
    }

    instance.opened = false;

    // Close all child elements if they exist
    if (instance.hasChildren) {
      const nestedItems = el.querySelectorAll(
        `.${instance.options.activeClass}`
      );
      nestedItems.forEach((nested) => this.close(nested));
    }

    // Apply closing effects if set
    if (instance.effectsManager && instance.options.effect) {
      instance.effectsManager.applyCloseEffects(instance);
    }

    // Set the maximum height for the animation
    const height = instance.$binding.clientHeight;
    instance.$hidden.style.maxHeight = `${height}px`;

    instance.$hidden.classList.remove(instance.options.openedClass);
    el.classList.remove(instance.options.activeClass);

    // Clear timers and set new ones for icons and animations
    instance.__iconTimer &&
      this.timerManager.clearTimeout(instance.__iconTimer);
    instance.__animationTimer &&
      this.timerManager.clearTimeout(instance.__animationTimer);

    requestAnimationFrame(() => {
      instance.$hidden.style.maxHeight = '0px';

      // Apply closing effects if set
      if (instance.effectsManager && instance.options.effect) {
        instance.effectsManager.applyCloseEffects(instance);
      }

      setTimeout(() => {
        this.iconManager?.updateIcon('close');
        this.emit('close');
      }, instance.speed.close / 2);

      instance.__animationTimer = this.timerManager.setTimeout(() => {
        instance.$hidden.style.removeProperty('max-height');
        instance.el.style.removeProperty('--pr-speed');

        // Clear styles for child elements
        if (instance.$content) {
          Array.from(instance.$content.children).forEach((child) => {
            child.style.removeProperty('transform');
            child.style.removeProperty('opacity');
            child.style.removeProperty('transition');
            child.style.removeProperty('transform-origin');
          });
        }

        // Finish the closing effect and start the after closing event
        if (instance.effectsManager && instance.options.effect) {
          this.emit('effectEnd', 'close');
        }

        this.emit('afterClose');
      }, instance.speed.close);
    });
  },

  toggle(el = this.el, scrollTo = false) {
    if (el && typeof el === 'string') {
      el = document.querySelector(el);
    }

    const instance = this.getInstance(el);

    if (!instance) return;

    // Use context of the specific instance
    if (instance.options.autoClose && instance.$container) {
      const openedItems = instance.$container.querySelectorAll(
        `.${instance.options.activeClass}`
      );

      openedItems.forEach((item) => {
        const itemInstance = instance.getInstance(item);

        if (itemInstance && !el.contains(item) && !item.contains(el)) {
          itemInstance.close(item);
        }
      });
    }

    if (instance.options.autoCloseNested) {
      const containerEl = instance.$current.closest(
        `.${instance.options.activeClass}`
      );

      if (containerEl) {
        const nestedItems = containerEl.querySelectorAll(
          `.${instance.options.activeClass}`
        );

        nestedItems.forEach((nested) => {
          const nestedInstance = instance.getInstance(nested);

          if (nestedInstance && nested !== el && !nested.contains(el)) {
            nestedInstance.close(nested);
          }
        });
      }
    }

    if (instance.$current.closest(`.${instance.options.content}`)) {
      return;
    }

    if (instance.opened) {
      instance.close(el);
    } else {
      instance.open(el, scrollTo);
    }
  },
};
