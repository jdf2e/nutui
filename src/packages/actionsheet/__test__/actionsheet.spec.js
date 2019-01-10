import { shallowMount, mount } from '@vue/test-utils'
import ActionSheet from '../actionsheet.vue'
import Vue from 'vue';


describe('ActionSheet.vue', () => {
    const wrapper = shallowMount(ActionSheet, {
        propsData:{
            menuItems: [
                {
                    'name': '男',
                    'value': 0
                },
                {
                    'name': '女',
                    'value': 1
                }
            ]
        }
    });

    it('测试条数', () => {
        return Vue.nextTick().then(function () {
            expect(wrapper.findAll('.nut-actionsheet-item').length).toBe(2);
        })
    });

    it('是否可见', () => {
        wrapper.setProps({isVisible: true });
        return Vue.nextTick().then(function () {
            expect(wrapper.find('.nut-actionsheet-mask').isVisible()).toBe(true);
            expect(wrapper.find('.nut-actionsheet-panel').isVisible()).toBe(true);
        })
    });

    it('显示取消', () => {
        wrapper.setProps({isVisible: true, cancelTxt: '取消' });
        return Vue.nextTick().then(function () {
            expect(wrapper.find('.nut-actionsheet-cancel').isVisible()).toBe(true);
            expect(wrapper.find('.nut-actionsheet-cancel').text()).toBe('取消');
        })
    });

    it('高亮显示', () => {
        wrapper.setProps({chooseTagValue: '男' });
        return Vue.nextTick().then(function () {
            expect(wrapper.findAll('.nut-actionsheet-item').at(0).contains('.nut-actionsheet-item-active')).toBe(true);
        })
    });

    it('设置列表项展示使用参数', () => {
        wrapper.setProps({optionTag: 'value' });
        return Vue.nextTick().then(function () {
            expect(wrapper.findAll('.nut-actionsheet-item').at(1).text()).toBe('1');
        })
    });
});