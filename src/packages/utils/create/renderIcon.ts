import { h, Component } from 'vue';

export const renderIcon = (icon: Component, props?: any) => {
  if (icon) return h(icon, props);
  return '';
};
