import { mount } from '@vue/test-utils';
import { Button, Space } from '@nutui/nutui';
import { h } from 'vue';

const prefixCls = 'nut-space';

test('space: should match snapshot', () => {
  const wrapper = mount(Space, {
    slots: {
      default: [h(Button, () => '按钮'), h(Button, () => '按钮'), h(Button, () => '按钮')]
    }
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('space: with props direction', () => {
  const wrapper = mount(Space, {
    props: {
      direction: 'vertical'
    },
    slots: {
      default: [h(Button, () => '按钮'), h(Button, () => '按钮'), h(Button, () => '按钮')]
    }
  });
  expect(wrapper.classes()).toContain(`${prefixCls}-vertical`);
});

test('space: with props align', () => {
  const wrapper = mount(Space, {
    props: {
      align: 'end'
    },
    slots: {
      default: [h(Button, () => '按钮'), h(Button, () => '按钮'), h(Button, () => '按钮')]
    }
  });
  expect(wrapper.classes()).toContain(`${prefixCls}-align-end`);
});

test('space: with props justify', () => {
  const wrapper = mount(Space, {
    props: {
      justify: 'center'
    },
    slots: {
      default: [h(Button, () => '按钮'), h(Button, () => '按钮'), h(Button, () => '按钮')]
    }
  });
  expect(wrapper.classes()).toContain(`${prefixCls}-justify-center`);
});

test('space: with props wrap', () => {
  const wrapper = mount(Space, {
    props: {
      wrap: true
    },
    slots: {
      default: [h(Button, () => '按钮'), h(Button, () => '按钮'), h(Button, () => '按钮')]
    }
  });
  expect(wrapper.classes()).toContain(`${prefixCls}-wrap`);
});

test('space: with props fill', () => {
  const wrapper = mount(Space, {
    props: {
      fill: true
    },
    slots: {
      default: [h(Button, () => '按钮'), h(Button, () => '按钮'), h(Button, () => '按钮')]
    }
  });
  expect(wrapper.classes()).toContain(`${prefixCls}-fill`);
});

test('space: with props gutter number', () => {
  const wrapper = mount(Space, {
    props: {
      gutter: 20
    },
    slots: {
      default: [h(Button, () => '按钮'), h(Button, () => '按钮'), h(Button, () => '按钮')]
    }
  });
  const nutSpaceItem = wrapper.find('.nut-space-item');
  expect(nutSpaceItem.attributes('style')).toBe('margin-right: 20px;');
});

test('space: with props gutter string', () => {
  const wrapper = mount(Space, {
    props: {
      gutter: '1rem'
    },
    slots: {
      default: [h(Button, () => '按钮'), h(Button, () => '按钮'), h(Button, () => '按钮')]
    }
  });
  const nutSpaceItem = wrapper.find('.nut-space-item');
  expect(nutSpaceItem.attributes('style')).toBe('margin-right: 1rem;');
});
