<script setup>
const props = defineProps({
  isAnimation: {
    type: Boolean,
    default: true,
  },
});

const removeDiv = (article) => {
  if (article.children.length === 1 && article.children[0].tagName === 'DIV') {
    const container = article.children[0];
    while (container.firstChild) {
      article.appendChild(container.firstChild);
    }
    article.removeChild(container);
  }
};

const removeBlankElements = (article) => {
  if (!article) return;

  const children = Array.from(article.children);
  children?.forEach((el) => {
    if (
      !el.src ||
      !el.tagName === 'BR' ||
      !el.tagName === 'HR' ||
      !el.tagName === 'SVG' ||
      !el.tagName === 'INPUT' ||
      !el.tagName === 'SOURCE'
    ) {
      if (el?.innerHTML === '') {
        el.remove();
      }
    }
  });
};

const processLink = (article) => {
  article.querySelectorAll('a').forEach((el) => {
    processUserLink(el);
  });
};

const processTable = (article) => {
  article.querySelectorAll('table').forEach((el) => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('table');
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
  });
};

const { $gsap } = useNuxtApp();
const { itemSettings, defaultTrigger } = useAnimation();
const isOldBrowser = useState('isOldBrowser');

const animation = (article) => {
  if (isOldBrowser.value) return;
  
  const collection = article.children;
  const length = collection.length;

  if (length === 0) return;

  for (let i = 0; i < length; i++) {
    const el = collection[i];

    $gsap.from(el, {
      ...itemSettings,
      scrollTrigger: {
        trigger: el,
        ...defaultTrigger,
      },
    });
  }
};

onMounted(() => {
  const { proxy } = getCurrentInstance();
  const article = proxy.$el;

  removeDiv(article);
  removeBlankElements(article);
  processLink(article);
  processTable(article);

  if (props.isAnimation) {
    nextTick(() => {
      animation(article);
    });
  }
});
</script>

<template>
  <div class="article">
    <slot></slot>
  </div>
</template>
