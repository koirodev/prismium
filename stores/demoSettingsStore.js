export const useDemoSettings = defineStore('demoSettings', {
  state: () => ({
    theme: 'light',
    direction: 'ltr',
    animation: 'line-by-line',
  }),
  actions: {
    setTheme(theme) {
      this.theme = theme;
    },
    setDirection(direction) {
      this.direction = direction;
    },
    setAnimation(animation) {
      this.animation = animation;
    },
  },
});
