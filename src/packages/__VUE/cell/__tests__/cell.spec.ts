import { mount } from '@vue/test-utils';
import Cell from '../index.vue';
import Icon from '../../icon/index.vue';

test('prop title desc', () => {
  const wrapper = mount(Cell, {
    props: {
      title: '标题1',
      desc: '描述1'
    }
  });

  expect(wrapper.html()).toContain('标题1');
  expect(wrapper.html()).toContain('描述1');
});

test('prop title subtitle', () => {
  const wrapper = mount(Cell, {
    props: {
      title: '标题1',
      subTitle: '副标题1'
    }
  });

  expect(wrapper.html()).toContain('标题1');
  expect(wrapper.html()).toContain('副标题1');
});

test('emit click event', () => {
  const wrapper = mount(Cell);

  wrapper.trigger('click');
  expect(wrapper.emitted('click')!.length).toEqual(1);
});

test('slot test', () => {
  const wrapper = mount(Cell, {
    slots: {
      default: '自定义内容'
    }
  });
  expect(wrapper.html()).toContain('自定义内容');
});
