import { config, mount } from '@vue/test-utils';
import ConfigProvider from '../index.vue';
import NutIcon from '../../icon/index.vue';
import { h } from 'vue';

// 所有的测试用例之前执行一次
beforeAll(() => {
  config.global.components = {
    NutIcon
  };
});

test('ConfigProvider prop: theme & tag', async () => {
  const wrapper = mount(ConfigProvider, {
    props: {
      theme: 'dark',
      tag: 'div'
    }
  });
  const html = expect(wrapper.html());
  expect(wrapper.find<HTMLElement>('.nut-theme-dark'));
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
      default: h(NutIcon, {
        name: 'close'
      })
    }
  });
  expect(wrapper.find<HTMLElement>('.iconfont.icon-close'));
});
