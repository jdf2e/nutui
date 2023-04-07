import { mount } from '@vue/test-utils';
import FixedNav from '../index.vue';
import { nextTick } from 'vue';

describe('FixedNav', () => {
  test('base nut-fixed-nav', () => {
    const wrapper = mount(FixedNav);
    const rate = wrapper.find('.nut-fixed-nav');
    expect(rate.exists()).toBe(true);
  });

  test('should be displayed after setting the visible', () => {
    const wrapper = mount(FixedNav, {
      props: {
        visible: true,
        overlay: true
      }
    });
    const list = wrapper.find('.nut-fixed-nav__list');
    expect(list.exists()).toBe(true);
  });
  test('should be displayed after setting the type', () => {
    const wrapper = mount(FixedNav, {
      props: {
        type: 'left'
      }
    });
    const left = wrapper.find('.left');
    expect(left.exists()).toBe(true);
  });

  test('should be displayed after setting the un-active-text', async () => {
    const wrapper = mount(FixedNav, {
      props: {
        'un-active-text': '展开',
        'active-text': '收起'
      }
    });
    const overlay = wrapper.find('.nut-overlay');
    expect(overlay.exists()).toBe(true);
    const button = wrapper.find('.nut-fixed-nav__btn');
    expect(button.html()).toContain('展开');
    wrapper.find('.nut-fixed-nav__btn').trigger('click');
    await nextTick();
    expect(wrapper.emitted()['update:visible'][0]).toEqual([true]);
  });

  test('should be displayed after setting the position', () => {
    const wrapper = mount(FixedNav, {
      props: {
        position: { top: '210px' }
      }
    });
    const fixedNav = wrapper.find('.nut-fixed-nav');
    expect(fixedNav.html()).toContain('top: 210px');
  });
});
