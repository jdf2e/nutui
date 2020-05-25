import {shallowMount} from '@vue/test-utils';
import CountDown, {restTime, fill2} from '../countdown.vue';

describe('CountDown.vue', () => {
    const end = 1559334689373;
    const wrapper = shallowMount(CountDown, {
        propsData: {
            endTime: end 
        }
    });
    it('默认显示时分秒', () => {
        const rest = restTime(end - Date.now());
        const h = fill2(Number(rest.d) * 24 + Number(rest.h));
        const text_h = wrapper.findAll('.nut-cd-block').at(0).text();
        expect(h).toBe(text_h);
        expect(h).toBe(wrapper.vm.resttime.h);
    });

    it('显示天', () => {
        wrapper.setProps({
            showDays: true
        });
        const rest = restTime(end - Date.now());
        expect(rest.d).toBe(wrapper.find('.nut-cd-block').text());
    });

});