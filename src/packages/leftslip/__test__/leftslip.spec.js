import { shallowMount } from '@vue/test-utils';
import Leftslip from '../leftslip.vue';
import Vue from 'vue';

describe('Leftslip.vue', () => {
  const wrapper = shallowMount(Leftslip, {});

  it('禁用操作', () => {
    wrapper.setProps({ disabled: true });

    return Vue.nextTick().then(function () {
      expect(wrapper.contains('.nut-leftslip-disabled')).toBe(true);
    });
  });
});
