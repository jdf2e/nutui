import { config, mount } from '@vue/test-utils';
import Avatar from '../index.vue';
import NutIcon from '../../icon/index.vue';

beforeAll(() => {
  config.global.components = {
    NutIcon
  };
});

afterAll(() => {
  config.global.components = {};
});

test('size props', async () => {
  const wrapper = mount(Avatar, {
    props: {
      size: 'small'
    }
  });
  const avatar: any = wrapper.find('.nut-avatar');
  expect(avatar.classes()).toContain('avatar-small');
  await wrapper.setProps({ size: 'large' });
  expect(avatar.classes()).toContain('avatar-large');
});

test('shape props', () => {
  const wrapper = mount(Avatar, {
    props: {
      shape: 'square'
    }
  });
  const avatar: any = wrapper.find('.nut-avatar');
  expect(avatar.classes()).toContain('avatar-square');
});

test('shape props', () => {
  const wrapper = mount(Avatar, {
    props: {
      bgColor: '#000000'
    }
  });
  const avatar: any = wrapper.find('.nut-avatar');
  expect(avatar.element.style.backgroundColor).toBe('rgb(0, 0, 0)');
});

test('icon props', () => {
  const wrapper = mount(Avatar, {
    props: {
      icon: 'my'
    }
  });
  const icon: any = wrapper.find('.nut-icon');
  expect(icon.classes()).toContain('nut-icon-my');
});

// 点击事件
test('should emit active-avatarror event', () => {
  const wrapper = mount(Avatar);
  wrapper.trigger('click');
  expect(wrapper.emitted('click')).toHaveLength(1);
});
