import { shallowMount, mount } from '@vue/test-utils'
import Switch from '../switch.vue';
import Vue from 'vue';


describe('Switch.vue', () => {
    const wrapper = shallowMount(Switch, {

    });

    it('打开状态', () => {
        wrapper.setProps({ active: true });

        return Vue.nextTick().then(function () {
            expect(wrapper.contains('.nut-switch-active')).toBe(true);
        })
    });

    it('关闭状态', () => {
        wrapper.setProps({ active: false });

        return Vue.nextTick().then(function () {
            expect(wrapper.contains('.nut-switch-active')).toBe(false);
        })
    });

    it('禁用状态', () => {
        wrapper.setProps({ disabled: true });

        return Vue.nextTick().then(function () {
            expect(wrapper.contains('.nut-switch-disabled')).toBe(true);
        })
    });

    it('非禁用状态', () => {
        wrapper.setProps({ disabled: false });

        return Vue.nextTick().then(function () {
            expect(wrapper.contains('.nut-switch-disabled')).toBe(false);
        })
    });
   
    it('尺寸设置为base', () => {
        wrapper.setProps({ size: 'base' });
        
        return Vue.nextTick().then(function () {
            expect(wrapper.contains('.nut-switch-base')).toBe(true);
        })
    });

    it('尺寸设置为small', () => {
        wrapper.setProps({ size: 'small' });

        return Vue.nextTick().then(function () {
            expect(wrapper.contains('.nut-switch-small')).toBe(true);
        })
    });

    it('尺寸设置为large', () => {
        wrapper.setProps({ size: 'large' });

        return Vue.nextTick().then(function () {
            expect(wrapper.contains('.nut-switch-large')).toBe(true);
        })
    });

    it('打开状态点击关闭', () => {
        wrapper.setProps({ active: true });
        wrapper.trigger('click');

        return Vue.nextTick().then(function () {
            expect(wrapper.contains('.nut-switch-active')).toBe(false);
        })
    });

    it('关闭状态点击打开', () => {
        wrapper.setProps({ active: false });
        wrapper.trigger('click');

        return Vue.nextTick().then(function () {
            setTimeout(() => {
                expect(wrapper.contains('.nut-switch-active')).toBe(true);
            }, 350);
        });
    });

});