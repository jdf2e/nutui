import { shallowMount, mount } from '@vue/test-utils'
import Calendar from '../calendar.vue'
import Vue from 'vue';


describe('Calendar.vue', () => {
    const wrapper = shallowMount(Calendar, {
        propsData: { 
            defaultValue: '2019-02-22'
        }
    });

    it('是否可见', () => {
        wrapper.setProps({isVisible: true });
        return Vue.nextTick().then(function () {
            expect(wrapper.find('.nut-calendar').isVisible()).toBe(true);
        })
    });

    it('设置默认时间', () => {
        return Vue.nextTick().then(function () {
            expect(wrapper.findAll('.nut-calendar-month-title').at(0).text()).toBe('2019年02月');
            expect(wrapper.findAll('.nut-calendar-month-item').at(0).find('.nut-calendar-month-day-active').text()).toBe('22');
        })
    });

});
