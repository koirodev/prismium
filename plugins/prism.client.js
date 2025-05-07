import Prism from 'prismjs';
import 'prism-themes/themes/prism-nord.css';
import 'prismjs/components/prism-javascript.js';
import 'prismjs/components/prism-css.js';
import 'prismjs/components/prism-scss.js';
import 'prismjs/components/prism-jsx.js';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('highlight', {
    mounted(el) {
      const { $stRefresh } = useNuxtApp();

      Prism.highlightAllUnder(el);

      Prism.hooks.add('after-highlight', (env) => {
        $stRefresh();
      });
    },
    updated(el) {
      Prism.highlightAllUnder(el);
    },
  });
});
