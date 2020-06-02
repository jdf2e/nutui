import { shallowMount, mount } from '@vue/test-utils'
import Tag from '../tag.vue';
import Vue from 'vue';

describe('Tag.vue', () => {
    let wrapper = shallowMount(Tag, {
        slots: {
            default: '标签'
        }
    });
    it('设置 color 基础样式: blue', () => {
        wrapper.setProps({
            color: 'blue'
        })
        return Vue.nextTick().then(function () {
            expect(wrapper.attributes('class')).toContain('blue');
        })
    });
    it('设置 color 基础样式: green', () => {
        wrapper.setProps({
            color: 'green'
        })
        return Vue.nextTick().then(function () {
            expect(wrapper.attributes('class')).toContain('green');
        })
    });
    it('设置 color 基础样式: jc-blue', () => {
        wrapper.setProps({
            color: 'jc-blue'
        })
        return Vue.nextTick().then(function () {
            expect(wrapper.attributes('class')).toContain('jc-blue');
        })
    });
    it('设置 color 基础样式: orange', () => {
        wrapper.setProps({
            color: 'orange'
        })
        return Vue.nextTick().then(function () {
            expect(wrapper.attributes('class')).toContain('orange');
        })
    });
    it('设置slot', () => {
        return Vue.nextTick().then(function () {
            expect(wrapper.text()).toBe('标签');
        })
    });
    it('设置disabled', () => {
        wrapper.setProps({
            disabled: true
        })
        return Vue.nextTick().then(function () {
            expect(wrapper.text()).toBe('标签');
            expect(wrapper.attributes('class')).toContain('disabled');
        })
    });
    it('设置circle', () => {
        wrapper.setProps({
            circle: true
        })
        return Vue.nextTick().then(function () {
            expect(wrapper.text()).toBe('标签');
            expect(wrapper.attributes('class')).toContain('circle');
        })
    });
    it('设置hollow', () => {
        wrapper.setProps({
            hollow: true
        })
        return Vue.nextTick().then(function () {
            expect(wrapper.text()).toBe('标签');
            expect(wrapper.attributes('class')).toContain('hollow');
        })
    });
    it('设置 size: big', () => {
        wrapper.setProps({
            size: 'big'
        })
        return Vue.nextTick().then(function () {
            expect(wrapper.text()).toBe('标签');
            expect(wrapper.attributes('class')).toContain('big');
        })
    });
    it('设置 size: middle', () => {
        wrapper.setProps({
            size: 'middle'
        })
        return Vue.nextTick().then(function () {
            expect(wrapper.text()).toBe('标签');
            expect(wrapper.attributes('class')).toContain('middle');
        })
    });
});