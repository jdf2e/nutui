import { mount } from '@vue/test-utils';
import Empty from '../../empty/index.vue';

describe('Empty', () => {
  test('should be shown when passing image and description', () => {
    const wrapper = mount(Empty, {
      props: {
        image: 'empty',
        description: '这是文字描述'
      }
    });

    expect(wrapper.html()).toContain('img');
    expect(wrapper.html()).toContain('这是文字描述');
  });

  test('should be shown when passing slot image', () => {
    const wrapper = mount(Empty, {
      slots: {
        image: '<img src="https://abc.png"/>'
      }
    });

    expect(wrapper.html()).toContain('abc.png');
  });

  test('should be shown when passing slot description', () => {
    const wrapper = mount(Empty, {
      slots: {
        description: 'test'
      }
    });

    expect(wrapper.html()).toContain('test');
  });

  test('should be shown when passing slot defalut', () => {
    const wrapper = mount(Empty, {
      slots: {
        default: '加载失败，请刷新页面'
      }
    });

    expect(wrapper.html()).toContain('加载失败');
  });
});
