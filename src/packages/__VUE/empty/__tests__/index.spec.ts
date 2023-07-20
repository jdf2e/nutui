import { mount } from '@vue/test-utils';
import Empty from '../../empty/index.vue';

test('Empty: should be shown when passing image and description', () => {
  const wrapper = mount(Empty, {
    props: {
      image: 'empty',
      imageSize: '50',
      description: '这是文字描述'
    }
  });

  expect(wrapper.html()).toContain('img');
  expect(wrapper.html()).toContain('这是文字描述');
});

test('Empty: should be shown when passing slot image', () => {
  const wrapper = mount(Empty, {
    slots: {
      image: '<img src="https://abc.png"/>'
    }
  });

  expect(wrapper.html()).toContain('abc.png');
});

test('Empty: should be shown when passing slot description', () => {
  const wrapper = mount(Empty, {
    props: {
      image: 'https://abc.png'
    },
    slots: {
      description: 'test'
    }
  });

  expect(wrapper.html()).toContain('test');
});

test('Empty: should be shown when passing slot defalut', () => {
  const wrapper = mount(Empty, {
    slots: {
      default: '加载失败，请刷新页面'
    }
  });

  expect(wrapper.html()).toContain('加载失败');
});
