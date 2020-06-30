import { shallowMount, mount } from '@vue/test-utils'
import Navbar from '../navbar.vue';
import Vue from 'vue';


describe('Navbar.vue', () => {
    const wrapper = shallowMount(Navbar, {
        
    });
    
    it('主标题文案展示', () => {
        wrapper.setProps({ title: '测试title'});
        return Vue.nextTick().then(function () {
            expect(wrapper.find('.nav-title span').text()).toBe('测试title');
        })
    });

    it('左侧返回按钮是否展示', () => {
        wrapper.setProps({ backShow: true});
        return Vue.nextTick().then(function () {
            expect(wrapper.find('.back').contains('.back-icon')).toBe(true); 
        })
    });
    
    it('左侧关闭按钮是否展示', () => {
        wrapper.setProps({ backShow: true});
        return Vue.nextTick().then(function () {
            expect(wrapper.find('.close').contains('.close-icon')).toBe(true); 
        })
    });

    it('右侧搜索按钮是否展示', () => {
        wrapper.setProps({ backShow: true});
        return Vue.nextTick().then(function () {
            expect(wrapper.find('.search').contains('.search-icon')).toBe(true); 
        })
    });

    it('右侧更多按钮是否展示', () => {
        wrapper.setProps({ backShow: true});
        return Vue.nextTick().then(function () {
            expect(wrapper.find('.more').contains('.more-icon')).toBe(true); 
        })
    });
    
});