import { shallowMount, mount } from '@vue/test-utils'
import Rating from '../actionsheet.vue'
import Vue from 'vue';


describe('actionsheet.vue', () => {
    const wrapper = shallowMount(Rating, {
        propsData: {
        }
    });

    it('可见', () => {
        wrapper.setProps({visible: true });

        return Vue.nextTick().then(function () {
            expect(wrapper.isVisible()).toBe(true);
        })
    });


    it('点击mask关闭', () => {
        wrapper.setProps({isClickCloseMask: true });
        wrapper.findAll('.nut-actionsheet-mask').at(1).trigger('click');
        return Vue.nextTick().then(function () {
            expect(wrapper.isVisible()).toBe(false);
        })
    });

});