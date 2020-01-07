import { shallowMount, mount } from '@vue/test-utils'
import Calendar from '../calendar.vue'
import Vue from 'vue';


describe('Calendar.vue', () => {
    const wrapper = shallowMount(Calendar, {
        propsData: { 
            defaultValue: '2020-01-12'
        }
    });

    it('是否可见', () => {
        wrapper.setProps({isVisible: true });
        return Vue.nextTick().then(function () {
            expect(wrapper.find('.nut-calendar').isVisible()).toBe(true);
        })
    });

    it('设置默认日期', () => {
        return Vue.nextTick().then(function () {
            expect(wrapper.findAll('.nut-calendar-month-title').at(0).text()).toBe('2020年01月');
            expect(wrapper.findAll('.nut-calendar-month-item').at(0).find('.nut-calendar-month-day-active').text()).toBe('12');
        })
    });

    it('选择日期', () => {
        wrapper.findAll('.nut-calendar-month-item').at(0).findAll('.nut-calendar-month-day').at(10).trigger('click');
        return Vue.nextTick().then(function () {
            expect(wrapper.findAll('.nut-calendar-month-item').at(0).findAll('.nut-calendar-month-day-active').at(0).text()).toBe('8');

        })
    });
});
describe('Calendar.vue', () => {
    const wrapper = shallowMount(Calendar, {
        propsData: { 
            type: 'range',
            defaultValue: ['2020-02-22', '2020-02-25'],
            startDate: '2020-02-01',
            endDate:'2020-04-11'
        }
    });

    it('区间选择', () => {
        wrapper.setProps({isVisible: true });
        return Vue.nextTick().then(function () {
            expect(wrapper.findAll('.nut-calendar-month-day-active').length).toBe(2);
        })
    });
    it('设置开始结束日期', () => {
        return Vue.nextTick().then(function () {
            expect(wrapper.findAll('.nut-calendar-month-item').length).toBe(3);
        })
    });
    it('设置默认日期', () => {
        return Vue.nextTick().then(function () {
            expect(wrapper.findAll('.nut-calendar-month-title').at(0).text()).toBe('2020年02月');
            expect(wrapper.findAll('.nut-calendar-month-item').at(0).findAll('.nut-calendar-month-day-active').at(0).text()).toBe('22 开始');
            expect(wrapper.findAll('.nut-calendar-month-item').at(0).findAll('.nut-calendar-month-day-active').at(1).text()).toBe('25 结束');
        })
    });
    
    it('选择日期', () => {
        wrapper.findAll('.nut-calendar-month-item').at(1).findAll('.nut-calendar-month-day').at(14).trigger('click');
        wrapper.findAll('.nut-calendar-month-item').at(1).findAll('.nut-calendar-month-day').at(16).trigger('click');
        return Vue.nextTick().then(function () {
            expect(wrapper.findAll('.nut-calendar-month-item').at(1).findAll('.nut-calendar-month-day-active').at(0).text()).toBe('15 开始');
            expect(wrapper.findAll('.nut-calendar-month-item').at(1).findAll('.nut-calendar-month-day-active').at(1).text()).toBe('17 结束');
        })
    });
   
});