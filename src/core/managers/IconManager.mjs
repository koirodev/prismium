/**
 * Icon Manager for Prismium
 * Manages SVG icons and their behavior in the accordion
 */
export class IconManager {
  /**
   * Set up the Icon manager with Prismium instance and current element
   * @param {import('../../types/core').default} instance - Prismium instance
   * @param {HTMLElement} $current - Current element where icon is placed
   * @returns {IconManager} The IconManager instance
   */
  setup(instance, $current) {
    this.instance = instance;
    this.$icons = $current.querySelectorAll(
      `[${instance.options.iconAttribute}]`
    );

    if (this.$icons.length) {
      this.setupIcons();
      this.instance.$icons = this.$icons;
      this.instance.icon = this.icon;
    }
  }

  /**
   * Update icon based on accordion state
   * @param {'open'|'close'} state - Current accordion state
   */
  updateIcon(state) {
    if (!this.$icons || !this.icon) return;

    if (!this.icon.type || !this.icon.open || !this.icon.close) return;

    if (this.icon.type === 'single') {
      const useTag = this.$icons[0].querySelector('use');
      if (!useTag) return;

      const icon = state === 'open' ? this.icon.close : this.icon.open;
      useTag.setAttributeNS(
        'http://www.w3.org/1999/xlink',
        'xlink:href',
        `${this.instance.options.spritePath}#${icon}`
      );
    }

    if (this.icon.type === 'multiple') {
      const [show, hide] =
        state === 'open'
          ? [this.icon.close, this.icon.open]
          : [this.icon.open, this.icon.close];

      show.classList.remove(this.icon.hiddenClass);
      hide.classList.add(this.icon.hiddenClass);
    }
  }

  /**
   * Initialize and configure icons
   * Sets up single or multiple icon configurations
   */
  setupIcons() {
    if (!this.$icons || !this.$icons.length) return;

    this.icon = {
      type: this.$icons.length > 1 ? 'multiple' : 'single',
      hiddenClass: 'prismium__icon_hidden',
    };

    if (this.icon.type === 'single') {
      const icon = this.$icons[0];
      this.icon.spritePath = this.instance.options.spritePath;

      let iconList = icon
        .getAttribute(this.instance.options.iconAttribute)
        .replace(/^\[|\]$/g, '');
      const iconArray = iconList.split(',').map((i) => i.trim());

      [this.icon.open, this.icon.close = iconArray[0]] = iconArray;
    }

    if (this.icon.type === 'multiple') {
      this.$icons.forEach((icon) => {
        const iconType = icon.getAttribute(this.instance.options.iconAttribute);

        if (iconType === 'open') {
          this.icon.open = icon;
        } else if (iconType === 'close') {
          this.icon.close = icon;
          icon.classList.add(this.icon.hiddenClass);
        } else {
          icon.style.display = 'none';
        }
      });

      if (!this.icon.open || !this.icon.close) {
        this.icon.open = this.icon.open || this.icon.close;
        this.icon.close = this.icon.close || this.icon.open;
      }
    }

    this.$icons.forEach((icon) => {
      icon.classList.add('prismium__icon');
      icon.addEventListener('click', (e) => e.preventDefault());
    });
  }
}
