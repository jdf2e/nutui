import { shallowMount } from '@vue/test-utils'
import Slider from '../slider.vue';
import Vue from 'vue';


describe('Slider.vue', () => {
    const wrapper = shallowMount(Slider, {
        propsData: {
            value: 5,
            range: [-10, 10]
        }
    });

    it('无标签', () => {
        return Vue.nextTick().then(function () {
            expect(wrapper.contains('.nut-slider-box')).toBe(true);
            expect(wrapper.contains('.nut-slider-Handle')).toBe(true);
            expect(wrapper.contains('.nut-slider-label')).toBe(false);
        })
    });

    it('有标签', () => {
        wrapper.setProps({ showLabel:true });

        return Vue.nextTick().then(function () {
            expect(wrapper.contains('.nut-slider-box')).toBe(true);
            expect(wrapper.contains('.nut-slider-Handle')).toBe(true);
            expect(wrapper.contains('.nut-slider-label')).toBe(true);
            expect(wrapper.find('.nut-slider-label').text()).toBe('5');
        })
    });

    it('两端展示可选范围', () => {
        wrapper.setProps({ showLabel: true, showRangeTxt:true });

        return Vue.nextTick().then(function () {
            expect(wrapper.contains('.nut-slider-box')).toBe(true);
            expect(wrapper.contains('.nut-slider-Handle')).toBe(true);
            expect(wrapper.contains('.nut-slider-label')).toBe(true);
            expect(wrapper.contains('.nut-slider-left-text')).toBe(true);
            expect(wrapper.contains('.nut-slider-right-text')).toBe(true);
            expect(wrapper.find('.nut-slider-left-text').text()).toBe('-10');
            expect(wrapper.find('.nut-slider-right-text').text()).toBe('10');
        })
    });

});