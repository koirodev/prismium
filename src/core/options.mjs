export default {
  init: true,
  theme: 'clear',
  speed: 350,
  autoClose: false,
  autoCloseNested: false,
  getParentHeight: false,
  scrollTo: false,
  spritePath: 'sprite.svg',

  // NS
  iconAttribute: 'data-prismium-icon',
  containerSelectors: ['[data-prismium-container]'],
  currentSelector: '[data-prismium-current]',
  contentSelector: '[data-prismium-content]',
  hiddenSelector: '[data-prismium-hidden]',

  // Classes
  activeClass: 'prismium-active',
  openedClass: 'prismium-opened',
  disabledClass: 'prismium-disabled',
};
