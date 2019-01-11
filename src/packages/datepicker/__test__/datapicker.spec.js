import { shallowMount, mount } from '@vue/test-utils'
import DatePicker from '../datepicker.vue'
import Vue from 'vue';


describe('DatePicker.vue', () => {
    const wrapper = mount(DatePicker, {
        propsData: { startDate: '1991-11-10', endDate:'2019-10-05'}
    });

    it('日期', () => {
        wrapper.setProps({type: 'date' });
        return Vue.nextTick().then(function () {
            expect(wrapper.findAll('.nut-picker-list').length).toBe(3)
        })
    });

    // it('日期时间', () => {
    //     wrapper.setProps({type: 'datetime'});
    //     return Vue.nextTick().then(function () {
    //         expect(wrapper.findAll('.nut-picker-list').length).toBe(5)
    //     })
    // });

    // it('时间', () => {
    //     wrapper.setProps({type: 'time'});
    //     return Vue.nextTick().then(function () {
    //         expect(wrapper.findAll('.nut-picker-list').length).toBe(2)
    //     })
    // });

    // it('12小时制', () => {
    //     wrapper.setProps({type: 'time', isUse12Hours: true});
    //     return Vue.nextTick().then(function () {
    //         expect(wrapper.findAll('.nut-picker-list').length).toBe(3)
    //     })
    // });

    // it('未调用PickerSlot', () => {
    //     wrapper.setProps({
    //         type: 'date'
    //     });
    //     return Vue.nextTick().then(function () {
    //         expect(wrapper.find('.nut-picker-panel').html()).toBe(false)
    //     })
    // });

    // it('自定义class', () => {
    //     wrapper.setProps({customClassName: 'nut-picker-test' });
    //     return Vue.nextTick().then(function () {
    //         expect(wrapper.find('.nut-picker').contains('.nut-picker-test')).toBe(true);
    //     })
    // });

    // it('标题', () => {
    //     wrapper.setProps({title: '选择年月'});
    //     return Vue.nextTick().then(function () {
    //         expect(wrapper.find('.nut-picker-title').text()).toBe('选择年月');
    //     })
    // });
});
