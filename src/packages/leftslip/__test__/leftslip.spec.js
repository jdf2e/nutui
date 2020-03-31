import {shallowMount} from '@vue/test-utils';
import LeftSlip from '../leftslip.vue';
import Vue from 'vue';

describe('LeftSlip.vue', () => {
    const wrapper = shallowMount(LeftSlip, {});
    it('设置单一删除键', () => {
        wrapper.setProps({
            onlyDelBtn: true
        });

        return Vue.nextTick().then(function() {
            expect(wrapper.find('.nut-delet-btn').isVisible()).toBe(true);
        });
    });
});
