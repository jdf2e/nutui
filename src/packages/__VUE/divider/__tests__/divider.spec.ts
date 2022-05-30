import { mount } from '@vue/test-utils';
import Divider from '../index.vue';

test('slot: html should contain custom text', () => {
  const wrapper = mount(Divider, {
    slots: {
      default: 'custom text'
    }
  });
  expect(wrapper.html()).toContain('custom text');
  expect(wrapper.html()).toMatchSnapshot();
});

test('content-position props: classes should contain nut-divider-left', () => {
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

test('dashed props: classes should contain nut-divider-dashed', () => {
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

test('custom style: element color should be rgb(25, 137, 250) etc', () => {
  const wrapper = mount(Divider, {
    props: {
      style: { color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }
    }
  });
  const _html = wrapper.find('.nut-divider');
  expect((_html.element as HTMLElement).style.color).toBe('rgb(25, 137, 250)');
  expect((_html.element as HTMLElement).style.borderColor).toBe('#1989fa');
  expect((_html.element as HTMLElement).style.padding).toBe('0px 16px');
});

test('hairline props: classes should contain nut-divider-hairline default, after set hairline false, nut-divider-hairline disappear', async () => {
  const wrapper = mount(Divider);

  const divider: any = wrapper.find('.nut-divider');
  expect(divider.classes()).toContain('nut-divider-hairline');
  await wrapper.setProps({ hairline: false });
  expect(wrapper.classes('nut-divider-hairline')).toBe(false);
});

test('direction props: classes should contain nut-divider-vertical', () => {
  const wrapper = mount(Divider, {
    props: {
      direction: 'vertical'
    }
  });
  const divider: any = wrapper.find('.nut-divider');
  expect(divider.classes()).toContain('nut-divider-vertical');
});
