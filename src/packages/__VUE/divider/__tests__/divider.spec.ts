import { mount } from '@vue/test-utils';
import { Divider } from '@nutui/nutui';

test('Divider: default slot', () => {
  const wrapper = mount(Divider, {
    slots: {
      default: 'custom text'
    }
  });
  expect(wrapper.html()).toContain('custom text');
  expect(wrapper.html()).toMatchSnapshot();
});

test('Divider: content-position props', () => {
  const wrapper = mount(Divider, {
    props: {
      contentPosition: 'left'
    },
    slots: {
      default: 'custom text'
    }
  });
  const divider: any = wrapper.find('.nut-divider');
  expect(divider.classes()).toContain('nut-divider-left');
});

test('Divider: dashed props', () => {
  const wrapper = mount(Divider, {
    props: {
      dashed: true
    },
    slots: {
      default: 'custom text'
    }
  });

  const divider: any = wrapper.find('.nut-divider');
  expect(divider.classes()).toContain('nut-divider-dashed');
});

test('Divider: custom style', () => {
  const wrapper = mount(Divider, {
    props: {
      style: { color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }
    }
  });
  const _html = wrapper.find('.nut-divider');
  expect((_html.element as HTMLElement).style.color).toBe('#1989fa');
  expect((_html.element as HTMLElement).style.borderColor).toBe('#1989fa');
  expect((_html.element as HTMLElement).style.padding).toBe('0px 16px');
});

test('Divider: hairline props', async () => {
  const wrapper = mount(Divider);

  const divider: any = wrapper.find('.nut-divider');
  expect(divider.classes()).toContain('nut-divider-hairline');
  await wrapper.setProps({ hairline: false });
  expect(wrapper.classes('nut-divider-hairline')).toBe(false);
});

test('Divider: direction props', () => {
  const wrapper = mount(Divider, {
    props: {
      direction: 'vertical'
    }
  });
  const divider: any = wrapper.find('.nut-divider');
  expect(divider.classes()).toContain('nut-divider-vertical');
});
