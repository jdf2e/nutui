import { mount } from '@vue/test-utils';
import ConfigProvider from '../index.vue';
import { Close } from '@nutui/icons-vue';
import { h } from 'vue';

test('ConfigProvider: props theme & tag', async () => {
  const wrapper = mount(ConfigProvider, {
    props: {
      theme: 'dark',
      tag: 'div'
    }
  });
  expect(wrapper.find('div.nut-theme-dark').exists()).toBeTruthy();
});

test('ConfigProvider: props themeVars', async () => {
  const wrapper = mount(ConfigProvider, {
    props: {
      themeVars: {
        primaryColor: '#fff',
        titleColor: 'blue',
        helpColor: '#f5f5f5'
      }
    },
    slots: {
      default: h(Close)
    }
  });
  expect(wrapper.html()).toMatchSnapshot();

  await wrapper.setProps({
    themeVars: {
      primaryColor: '#ff'
    }
  });
  expect(wrapper.html()).toMatchSnapshot();
});
