import { shallowMount, mount } from '@vue/test-utils'
import Dialog from '../dialog.vue';
import Vue from 'vue';


describe('Dialog.vue', () => {
    const wrapper = shallowMount(Dialog, {
    });

    it('可见', () => {
        wrapper.setProps({ title: '测试标题', visible: true });

        return Vue.nextTick().then(function () {
            expect(wrapper.find('.nut-dialog-mask').isVisible()).toBe(true);
            expect(wrapper.find('.nut-dialog-box').isVisible()).toBe(true);
        })
    });

    it('隐藏', () => {
        wrapper.setProps({ title: '测试标题', visible: false });

        return Vue.nextTick().then(function () {
            expect(wrapper.find('.nut-dialog-box').isVisible()).toBe(false);
        })
    });

    it('内容文案展示', () => {
        wrapper.setProps({ content: '测试文案', visible:true });

        return Vue.nextTick().then(function () {
            expect(wrapper.find('.nut-dialog-content').exists()).toBe(true);
        })
    });

    it('标题文案展示', () => {
        wrapper.setProps({ title: '测试标题', visible: true });

        return Vue.nextTick().then(function () {
            expect(wrapper.find('.nut-dialog-title').exists()).toBe(true);
        })
    });

    it('隐藏底栏', () => {
        wrapper.setProps({ title: '测试标题', visible: true, noFooter:true });

        return Vue.nextTick().then(function () {
            expect(wrapper.find('.nut-dialog-footer').exists()).toBe(false);
        })
    }); 

    it('隐藏确定键', () => {
        wrapper.setProps({ title: '测试标题', visible: true, noOkBtn: true });

        return Vue.nextTick().then(function () {
            expect(wrapper.find('.nut-dialog-ok').exists()).toBe(false);
        })
    });

    it('图片弹窗', () => {
        wrapper.setProps({
            visible: true, 
            type: 'image', 
            link: "http://m.jd.com",
            imgSrc: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/4875/23/1968/285655/5b9549eeE4997a18c/070eaf5bddf26be8.jpg", });

        return Vue.nextTick().then(function () {
            expect(wrapper.find('.nut-dialog-link').exists()).toBe(true);
            expect(wrapper.find('.nut-dialog-image').exists()).toBe(true);
            expect(wrapper.find('.nut-dialog-image').attributes('src')).toBe('https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/4875/23/1968/285655/5b9549eeE4997a18c/070eaf5bddf26be8.jpg');
            expect(wrapper.find('.nut-dialog-body').exists()).toBe(false);
            
        })
    });
});