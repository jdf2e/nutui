import { mount } from '@vue/test-utils';
import ConfigProvider from '../index.vue';

test('prop theme & tag', async () => {
  const wrapper = mount(ConfigProvider, {
    props: {
      theme: 'dark',
      tag: 'div'
    }
  });
  const html = expect(wrapper.html());
  expect(wrapper.find<HTMLElement>('.nut-theme-dark'));
});
