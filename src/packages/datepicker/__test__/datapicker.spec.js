import { shallowMount, mount } from '@vue/test-utils'
import DatePicker from '../datepicker.vue'
import Vue from 'vue';


describe('DatePicker.vue', () => {
    it('日期', () => {
        const wrapper = mount(DatePicker, {
            propsData: { 
                type: 'date' 
            }
        });
        wrapper.setProps({type: 'date' });
        return Vue.nextTick().then(function () {
            expect(wrapper.findAll('.nut-picker-list').length).toBe(3)
        })
    });

    it('日期时间', () => {
        const wrapper = mount(DatePicker, {
            propsData: { 
                type: 'datetime' 
            }
        });
        return Vue.nextTick().then(function () {
            expect(wrapper.findAll('.nut-picker-list').length).toBe(5)
        })
    });

    it('时间', () => {
        const wrapper = mount(DatePicker, {
            propsData: { 
                type: 'time',
                minuteStep: 15,
                startHour: 10,
                endHour: 16
            }
        });
        return Vue.nextTick().then(function () {
            expect(wrapper.findAll('.nut-picker-list').length).toBe(2)
            expect(wrapper.findAll('.nut-picker-list').at(1).findAll('.nut-picker-item').at(1).text()).toBe('15分')
            expect(wrapper.findAll('.nut-picker-list').at(0).findAll('.nut-picker-item').at(1).text()).toBe('11时')
            expect(wrapper.findAll('.nut-picker-list').at(0).findAll('.nut-picker-item').length).toBe(7)
        })
    });

    it('12小时制', () => {
        const wrapper = mount(DatePicker, {
            propsData: { 
                type: 'time',
                isUse12Hours: true,
                isAm: false
            }
        });
        return Vue.nextTick().then(function () {
            expect(wrapper.findAll('.nut-picker-list').length).toBe(3)
            expect(wrapper.findAll('.nut-picker-list').at(0).findAll('.nut-picker-item').at(0).text()).toBe('12时')
            expect(wrapper.findAll('.nut-picker-list-panel').at(2).attributes('style')).toContain('translate3d(0, -36px, 0)');
        })
    });
    
    it('标题', () => {
        const wrapper = mount(DatePicker, {
            propsData: { 
                title: '选择年月'
            }
        });
        return Vue.nextTick().then(function () {
            expect(wrapper.find('.nut-picker-title').text()).toBe('选择年月');
        })
    });
});
