import { shallowMount } from '@vue/test-utils'
import LeftSlip from "../leftslip.vue"
import Vue from 'vue';

describe('LeftSlip.vue', () => {
    const wrapper = shallowMount(LeftSlip, {});
    it('一键删除设置', () => {
        wrapper.setProps({
            onlyDel: true,
        });

        return Vue.nextTick().then(function() {
            expect(wrapper.find('.delbtn').isVisible()).toBe(true);
        })
    })


});