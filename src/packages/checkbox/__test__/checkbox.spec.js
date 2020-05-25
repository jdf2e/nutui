import { shallowMount, mount } from '@vue/test-utils'
import Checkbox from '../checkbox.vue';
import Vue from 'vue';


describe('Checkbox.vue', () => {
    const wrapper = shallowMount(Checkbox, {
        propsData:{
            value:true
        }
    });
    
    it('尺寸设置为base', () => {
        wrapper.setProps({ size: 'base' });

        return Vue.nextTick().then(function () {
            expect(wrapper.contains('.nut-checkbox-size-base')).toBe(true);
        })
    });
    it('尺寸设置为small', () => {
        wrapper.setProps({ size: 'small' });

        return Vue.nextTick().then(function () {
            expect(wrapper.contains('.nut-checkbox-size-small')).toBe(true);
        })
    });
    it('尺寸设置为large', () => {
        wrapper.setProps({ size: 'large' });

        return Vue.nextTick().then(function () {
            expect(wrapper.contains('.nut-checkbox-size-large')).toBe(true);
        })
    });

    it('禁用动效', () => {
        wrapper.setProps({ animation: true });

        return Vue.nextTick().then(function () {
            expect(wrapper.contains('.nut-checkbox-ani')).toBe(true);
        })
    });

    it('非禁用动效', () => {
        wrapper.setProps({ animation: false });

        return Vue.nextTick().then(function () {
            expect(wrapper.contains('.nut-checkbox-ani')).toBe(false);
        })
    });

    it('禁用状态', () => {
        wrapper.setProps({ disabled: true });

        return Vue.nextTick().then(function () {
            expect(wrapper.find('input').attributes('disabled')).toBe('disabled');
        })
    });

    it('非禁用状态', () => {
        wrapper.setProps({ disabled: false });

        return Vue.nextTick().then(function () {
            expect(wrapper.find('input').attributes('disabled')).not.toBe('disabled');
        })
    });
   
   

});