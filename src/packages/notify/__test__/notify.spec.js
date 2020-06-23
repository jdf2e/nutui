import { shallowMount, mount } from '@vue/test-utils'
import Notify from '../notify.vue';
import Vue from 'vue';


describe('notify.vue', () => {
    const wrapper = shallowMount(Notify, {
        propsData: {
            type: 'warn',
            msg: "通知内容"
        }
    });

    it('自定义背景色和字体颜色', () => {
        wrapper.setProps({
            color: '#ad0000',
            background: '#ffe1e1'
        });
        return Vue.nextTick().then(function () {
            expect(wrapper.find('.nut-notify').hasStyle('color', '#ad0000')).toBe(true);
            expect(wrapper.find('.nut-notify').hasStyle('background', '#ffe1e1')).toBe(true);
        })
    });
    // it('自定义时长', () => {
    //     wrapper.setProps({
    //         color: '#ad0000',
    //         background: '#ffe1e1'
    //     });
    //     return Vue.nextTick().then(function () {
    //         expect(wrapper.find('.nut-notify').hasStyle('color', '#ad0000')).toBe(true);
    //         expect(wrapper.find('.nut-notify').hasStyle('background', '#ffe1e1')).toBe(true);
    //     })
    // });
});