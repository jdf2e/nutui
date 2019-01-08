import { shallowMount, mount } from '@vue/test-utils'
import Button from '../button.vue';
import Vue from 'vue';

describe('Button.vue', () => {
    it('设置type', () => {
        let wrapper = shallowMount(Button, {
            slots: {
                default: '去结算'
            },
            propsData:{
                type: 'light'
            }
        });
        return Vue.nextTick().then(function () {
            expect(wrapper.attributes('class')).toContain('light');
        })
    });
    it('设置slot', () => {
        let wrapper = shallowMount(Button, {
            slots: {
                default: '去结算'
            }
        });
        return Vue.nextTick().then(function () {
            expect(wrapper.text()).toBe('去结算');
        })
    });
    it('设置disabled', () => {
        let wrapper = shallowMount(Button, {
            slots: {
                default: '去结算'
            },
            propsData:{
                disabled: true
            }
        });
        return Vue.nextTick().then(function () {
            expect(wrapper.text()).toBe('去结算');
            expect(wrapper.attributes('disabled')).toContain('disabled');
        })
    });
    it('设置shape', () => {
        let wrapper = shallowMount(Button, {
            slots: {
                default: '去结算'
            },
            propsData:{
                shape: 'circle'
            }
        });
        return Vue.nextTick().then(function () {
            expect(wrapper.text()).toBe('去结算');
            expect(wrapper.attributes('class')).toContain('circle');
        })
    });
    it('设置small', () => {
        let wrapper = shallowMount(Button, {
            slots: {
                default: '去结算'
            },
            propsData:{
                small: true
            }
        });
        return Vue.nextTick().then(function () {
            expect(wrapper.text()).toBe('去结算');
            expect(wrapper.attributes('class')).toContain('small');
        })
    });
    it('设置icon', () => {
        let wrapper = shallowMount(Button, {
            slots: {
                default: '全部100万'
            },
            propsData:{
                type: 'actived',
                icon: 'tick'
            }
        });
        return Vue.nextTick().then(function () {
            expect(wrapper.text()).toBe('全部100万');
            expect(wrapper.contains('.txt-icon')).toBe(true);
            expect(wrapper.find('.txt-icon').attributes('type')).toBe('tick');            
            expect(wrapper.find('span').text()).toBe('全部100万');
        })
    });
    it('设置color', () => {
        let wrapper = shallowMount(Button, {
            slots: {
                default: '去结算'
            },
            propsData:{
                icon: 'tick',
                color: '#fff'
            }
        });
        return Vue.nextTick().then(function () {
            expect(wrapper.text()).toBe('去结算');
            expect(wrapper.find('span').attributes('style')).toBe('color: rgb(255, 255, 255);');
            expect(wrapper.find('.txt-icon').attributes('color')).toBe('#fff');
        })
    });

});