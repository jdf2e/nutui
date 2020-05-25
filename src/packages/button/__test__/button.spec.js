import { shallowMount, mount } from '@vue/test-utils'
import Button from '../button.vue';
import Vue from 'vue';

describe('Button.vue', () => {
    let wrapper = shallowMount(Button, {
        slots: {
            default: '去结算'
        }
    });
    it('设置type', () => {
        wrapper.setProps({
            type: 'light'
        })
        return Vue.nextTick().then(function () {
            expect(wrapper.attributes('class')).toContain('light');
        })
    });
    it('设置slot', () => {
        return Vue.nextTick().then(function () {
            expect(wrapper.text()).toBe('去结算');
        })
    });
    it('设置disabled', () => {
        wrapper.setProps({
            disabled: true
        })
        return Vue.nextTick().then(function () {
            expect(wrapper.text()).toBe('去结算');
            expect(wrapper.attributes('disabled')).toContain('disabled');
        })
    });
    it('设置shape', () => {
        wrapper.setProps({
            shape: 'circle'
        })
        return Vue.nextTick().then(function () {
            expect(wrapper.text()).toBe('去结算');
            expect(wrapper.attributes('class')).toContain('circle');
        })
    });
    it('设置small', () => {
        wrapper.setProps({
            small: true
        })
        return Vue.nextTick().then(function () {
            expect(wrapper.text()).toBe('去结算');
            expect(wrapper.attributes('class')).toContain('small');
        })
    });
    it('设置icon', () => {
        wrapper.setProps({
            type: 'actived',
            icon: 'tick'
        })
        return Vue.nextTick().then(function () {
            expect(wrapper.text()).toBe('去结算');
            expect(wrapper.contains('.txt-icon')).toBe(true);
            expect(wrapper.find('.txt-icon').attributes('type')).toBe('tick');            
            expect(wrapper.find('span').text()).toBe('去结算');
        })
    });
    it('设置color', () => {
        wrapper.setProps({
            icon: 'tick',
            color: '#fff'
        })
        return Vue.nextTick().then(function () {
            expect(wrapper.text()).toBe('去结算');
            expect(wrapper.find('span').attributes('style')).toBe('color: rgb(255, 255, 255);');
            expect(wrapper.find('.txt-icon').attributes('color')).toBe('#fff');
        })
    });
});