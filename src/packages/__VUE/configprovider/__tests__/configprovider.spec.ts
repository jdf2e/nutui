import { mount } from '@vue/test-utils';
import ConfigProvider from '../index.vue';
import { Close } from '@nutui/icons-vue';
import { h } from 'vue';

test('prop theme & tag', async () => {
  const wrapper = mount(ConfigProvider, {
    props: {
      theme: 'dark',
      tag: 'div'
    }
  });
  expect(wrapper.find('div.nut-theme-dark').exists()).toBeTruthy();
});

test('ConfigProvider prop: fontClassName & classPrefix', async () => {
  const wrapper = mount(ConfigProvider, {
    props: {
      theme: 'dark',
      tag: 'div',
      fontClassName: 'iconfont',
      classPrefix: 'icon'
    },
    slots: {
      default: h(Close)
    }
  });
  expect(wrapper.find('.nut-icon').exists()).toBeTruthy();
});
