import Tag from '../index.vue';
import { mount, config } from '@vue/test-utils';
import { vi } from 'vitest';
import { Close } from '@nutui/icons-vue';

beforeAll(() => {
  config.global.components = {
    Close
  };
});

afterAll(() => {
  config.global.components = {};
});

test('should emit close event when clicking the close icon', () => {
  const wrapper = mount(Tag, {
    props: {
      closeable: true
    }
  });

  wrapper.find('.nut-tag--close').trigger('click');
  expect(wrapper.emitted('close')!.length).toEqual(1);
});

test('should hide tag when the show prop is false', () => {
  const wrapper = mount(Tag, {
    props: {
      show: false
    }
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('should not trigger click event when clicking the close icon', () => {
  const onClick = vi.fn();
  const wrapper = mount(Tag, {
    props: {
      onClick,
      closeable: true
    }
  });

  wrapper.find('.nut-tag--close').trigger('click');
  expect(onClick).toHaveBeenCalledTimes(0);

  wrapper.trigger('click');
  expect(onClick).toHaveBeenCalledTimes(1);
});

test('should render textColor correctly', () => {
  const wrapper = mount(Tag, {
    props: {
      plain: true,
      color: 'red',
      textColor: 'blue'
    }
  });

  expect(wrapper.html()).toMatchSnapshot();
});
