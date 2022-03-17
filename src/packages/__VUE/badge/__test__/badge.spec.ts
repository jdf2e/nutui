import Badge from '../index.vue';
import { mount } from '@vue/test-utils';

test('should render nothing when content is empty string', () => {
  const wrapper = mount(Badge, {
    props: {
      value: ''
    }
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should render nothing when content is undefined', () => {
  const wrapper = mount(Badge, {
    props: {
      value: undefined
    }
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should render nothing when content is zero', () => {
  const wrapper = mount(Badge, {
    props: {
      value: 0
    }
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should render content slot correctly', () => {
  const wrapper = mount(Badge, {
    slots: {
      default: () => 'Custom Content'
    }
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should change dot position when using offset prop', () => {
  const wrapper = mount(Badge, {
    props: {
      top: '4',
      right: '-2'
    }
  });

  const badge: any = wrapper.find('.nut-badge');
  expect(badge.element.style.top).toMatchSnapshot('4px');
  expect(badge.element.style.right).toMatchSnapshot('-2px');
});
