/**
 * @description
 * Композибл для определения компонента ссылки в зависимости от переданного свойства `to`.
 * Если `to` является строкой, которая начинается с `http`, возвращается компонент `<a>`.
 * Если `to` является строкой, которая не начинается с `http`, возвращается компонент `<NuxtLink>`.
 * Если `to` не является строкой, возвращается компонент `notLinkComponent`.
 * Также возвращаются свойства ссылки, которые можно использовать в компоненте.
 */

import { NuxtLink } from '#components';

export default function (props, notLinkComponent = 'span') {
  const component = computed(() => {
    if (!props.to || typeof props.to !== 'string') return notLinkComponent;

    return props.to.startsWith('http') ? 'a' : NuxtLink;
  });

  const linkProps = computed(() => {
    const localePath = useLocalePath();

    if (!props.to || typeof props.to !== 'string') return {};

    return props.to.startsWith('http')
      ? { href: props.to, target: '_blank' }
      : { to: localePath(props.to) };
  });

  return { component, linkProps };
}
