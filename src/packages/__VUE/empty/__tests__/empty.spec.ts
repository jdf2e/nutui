import { mount } from '@vue/test-utils';
import Empty from '../../empty/index.vue';

test('prop image description', () => {
  const wrapper = mount(Empty, {
    props: {
      image: 'empty',
      description: '文字描述'
    }
  });

  expect(wrapper.html()).toContain('img');
  expect(wrapper.html()).toContain('文字描述');
});

test('slot image', () => {
  const wrapper = mount(Empty, {
    slots: {
      image: '<img src="https://xxx.png"/>'
    }
  });

  expect(wrapper.html()).toContain('xxx.png');
});

test('slot description', () => {
  const wrapper = mount(Empty, {
    slots: {
      description: 'jest'
    }
  });

  expect(wrapper.html()).toContain('jest');
});

test('slot defalut', () => {
  const wrapper = mount(Empty, {
    slots: {
      default: '加载失败，请刷新页面'
    }
  });
  expect(wrapper.html()).toContain('请刷新页面');
});
