import { Tag } from '@nutui/nutui';
import { mount } from '@vue/test-utils';

test('Tag: should emit close event when clicking the close icon', () => {
  const wrapper = mount(Tag, {
    props: {
      closeable: true
    }
  });

  wrapper.find('.nut-tag--close').trigger('click');
  expect(wrapper.emitted('close')!.length).toEqual(1);
});

test('Tag: should not trigger click event when clicking the close icon', () => {
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

test('Tag: color & textColor & plain', () => {
  const wrapper = mount(Tag, {
    props: {
      plain: true,
      color: 'red'
    }
  });
  const tag = wrapper.find('.nut-tag');
  expect(tag.attributes('style')).includes('color: red');
});

test('Tag: color & textColor', () => {
  const wrapper = mount(Tag, {
    props: {
      color: 'red',
      textColor: 'blue'
    }
  });
  const tag = wrapper.find('.nut-tag');
  expect(tag.attributes('style')).includes('color: blue');
  expect(tag.attributes('style')).includes('background: red');
});
