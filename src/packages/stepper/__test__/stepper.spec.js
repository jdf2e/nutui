import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Stepper from '../stepper.vue';

describe('Stepper.vue', () => {
    const wraper = shallowMount(Stepper, {
        propsData: {
            value: 0
        }
    });

    it('设置最大最小值', () => {
        const minVal = '10';
        const maxVal = '100';
        wraper.setProps({
            min: minVal,
            max: maxVal
        });
        const input = wraper.find('input');
        expect(wraper.contains('.nut-stepper-grey')).toBe(true);
        expect(input.attributes('min')).toBe('0');
        expect(input.attributes('max')).toBe(maxVal);
    });

    it('设置加减的步长', () => {
        const stepVal = 10;

        wraper.setProps({
            step: stepVal
        });
        wraper.findAll('span').at(1).trigger('click');
        const [min, max] = wraper.vm.animNum;
        expect(max - min).toBe(stepVal);
    });

    it('设置只读属性', () => {
        wraper.setProps({
            readonly: true
        });
        expect(wraper.find('input').attributes('readonly')).toBe('readonly');
    });
    
});