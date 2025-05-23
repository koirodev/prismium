export const publicMethods = {
  getInstance(el) {
    const instance = new this(undefined, { init: false });
    return instance.getInstance(el);
  },

  init(el) {
    const instance = new this(undefined, { init: false });
    return instance.init(el);
  },

  open(el, scrollTo = true) {
    const instance = new this(undefined, { init: false });
    return instance.open(el, scrollTo);
  },

  openAll(container, selector = '.prismium') {
    const instance = new this(undefined, { init: false });
    return instance.openAll(container, selector);
  },

  close(el) {
    const instance = new this(undefined, { init: false });
    return instance.close(el);
  },

  closeAll(container) {
    const instance = new this(undefined, { init: false });
    return instance.closeAll(container);
  },

  openEverything(selector = '.prismium') {
    const instance = new this(undefined, { init: false });
    return instance.openEverything(selector);
  },

  closeEverything(selector = '.prismium') {
    const instance = new this(undefined, { init: false });
    return instance.closeEverything(selector);
  },

  toggle(el, scrollTo = true) {
    const instance = new this(undefined, { init: false });
    return instance.toggle(el, scrollTo);
  },

  closeNested(el) {
    const instance = new this(undefined, { init: false });
    return instance.closeNested(el);
  },

  disable(el) {
    const instance = new this(undefined, { init: false });
    return instance.disable(el);
  },

  enable(el) {
    const instance = new this(undefined, { init: false });
    return instance.enable(el);
  },
};
