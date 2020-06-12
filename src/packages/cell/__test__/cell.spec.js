import { shallowMount, mount } from '@vue/test-utils'
import Cell from '../cell.vue';
import Vue from 'vue';


describe('Cell.vue', () => {
    const wrapper = shallowMount(Cell, {
        
    });
    
    it('主标题文案展示', () => {
        wrapper.setProps({ title: '测试title'});

        return Vue.nextTick().then(function () {
            expect(wrapper.find('.nut-cell-title').text()).toBe('测试title');
        })
    });
    it('副标题文案展示', () => {
        wrapper.setProps({ subTitle: '测试subTitle'});

        return Vue.nextTick().then(function () {
            expect(wrapper.find('.nut-cell-sub-title').text()).toBe('测试subTitle');
        })
    });
    it('描述文案展示', () => {
        wrapper.setProps({ desc: '测试desc'});

        return Vue.nextTick().then(function () {
            expect(wrapper.find('.nut-cell-desc').text()).toBe('测试desc');
        })
    });

    it('是否显示右侧icon', () => {
        wrapper.setProps({ showIcon:true });
        return Vue.nextTick().then(function () {
            expect(wrapper.find('.nut-cell-icon').isEmpty()).toBe(false); 
        })
    });
    it('链接是否生效', () => {
        wrapper.setProps({ title: '测试title', subTitle: '测试subTitle', desc: '测试desc', showIcon: true, isLink: true, linkUrl:'http://m.jd.com' });
        return Vue.nextTick().then(function () {
            expect(wrapper.find('.nut-cell').attributes('href')).toBe('http://m.jd.com');
        })
    });
    it('背景颜色是否生效', () => {
        wrapper.setProps({ title: '测试title', subTitle: '测试subTitle', desc: '测试desc', showIcon: true, bgColor:'red'});
        return Vue.nextTick().then(function () {
            expect(wrapper.find('.nut-cell').hasStyle('background-color','red')).toBe(true);
        })
    });
    it('链接是否打开新页面', () => {
        wrapper.setProps({ title: '测试title', subTitle: '测试subTitle', desc: '测试desc', showIcon: true, isLink: true, target:"_target", linkUrl:'http://m.jd.com' });
        return Vue.nextTick().then(function () {
            expect(wrapper.find('.nut-cell').attributes('target')).toBe('_target');
        })
    });
});