/**
 * @description Композибл для работы с кнопками.
 */

export default function (props) {
  const { component, linkProps } = useAppLink(props, 'button');

  const icon = computed(() => 'svg-' + props.icon);

  return { component, linkProps, icon };
}
