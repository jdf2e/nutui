import { shallowMount, mount } from '@vue/test-utils'
import Badge from '../badge.vue';
import Vue from 'vue';

describe('Badge.vue', () => {
    const wrapper = shallowMount(Badge, {});
    it('创建结构', () => {
        wrapper.setProps({ value: '9'});
        return Vue.nextTick().then(function () {
            expect(wrapper.contains('sup')).toBe(true);            
        })
    });
    it('字数设置', () => {
        wrapper.setProps({ value: '9'});
        return Vue.nextTick().then(function () {
            expect(wrapper.find('.nut-badge__content').text()).toBe('9');            
        })
    });

    it('最大值设置', () => {
        wrapper.setProps({ value: 200, max: 99 });
        return Vue.nextTick().then(function () {
            expect(wrapper.find('.nut-badge__content').text()).toBe('99+');
        })
    });
    it('文字设置',() => {
        wrapper.setProps({value: 'new'});
        return Vue.nextTick().then(function() {
            expect(wrapper.find('.nut-badge__content').text()).toBe('new');
        })
    })
    it('设置为点操作',() => {
        wrapper.setProps({value: 'new', isDot: true});
        return Vue.nextTick().then(function() {
            expect(wrapper.find('.nut-badge__content').text()).toBe('');
        })
    })
});