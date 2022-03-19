import { config, mount } from '@vue/test-utils';
import Price from '../index.vue';
import NutIcon from '../../icon/index.vue';

beforeAll(() => {
  config.global.components = {
    NutIcon
  };
});

afterAll(() => {
  config.global.components = {};
});

test('size props', () => {
  const wrapper = mount(Price, {
    props: {
      size: 'small'
    }
  });
  const avatar: any = wrapper.find('.nut-avatar');
  expect(avatar.classes()).toContain('avatar-small');
  expect(avatar.classes());
});

test('shape props', () => {
  const wrapper = mount(Price, {
    props: {
      bgColor: '#000000'
    }
  });
  const avatar: any = wrapper.find('.nut-avatar');
  expect(avatar.element.style.backgroundColor).toBe('rgb(0, 0, 0)');
});
