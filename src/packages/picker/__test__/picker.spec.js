import { shallowMount, mount } from '@vue/test-utils'
import Picker from '../picker.vue'
import PickerSlot from '../picker-slot.vue'
import Vue from 'vue';


describe('Picker.vue', () => {
    const wrapper = mount(Picker, {
        propsData:{
            listData: [
                ['2019', '2020', '2021', '2022', '2023' ],
                ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
            ],
        }
    });

    it('调用PickerSlot个数', () => {
        return Vue.nextTick().then(function () {
            expect(wrapper.findAll('.nut-picker-list').length).toBe(2)
        })
    });

    it('调用PickerSlot', () => {
        return Vue.nextTick().then(function () {
            expect(wrapper.contains(PickerSlot)).toBe(true)
        })
    });

    it('未调用PickerSlot', () => {
        wrapper.setProps({
            listData: []
        });
        return Vue.nextTick().then(function () {
            expect(wrapper.contains(PickerSlot)).toBe(false)
        })
    });

    it('自定义class', () => {
        wrapper.setProps({customClassName: 'nut-picker-test' });
        return Vue.nextTick().then(function () {
            expect(wrapper.find('.nut-picker').contains('.nut-picker-test')).toBe(true);
        })
    });

    it('标题', () => {
        wrapper.setProps({title: '选择年月'});
        return Vue.nextTick().then(function () {
            expect(wrapper.find('.nut-picker-title').text()).toBe('选择年月');
        })
    });
});

describe('PickerSlot.vue', () => {
    const wrapper = shallowMount(PickerSlot, {
        propsData:{
            listData: ['2019', '2020', '2021', '2022', '2023' ],
            defaultValue: '2020'
        }
    });

    it('展示个数', () => {
        return Vue.nextTick().then(function () {
            expect(wrapper.findAll('.nut-picker-item').length).toBe(5);
        })
    });

    it('设置默认值', () => {
        return Vue.nextTick().then(function () {
            expect(wrapper.find('.nut-picker-list-panel').attributes('style')).toContain('translate3d(0, -36px, 0)');
        })
    });
});