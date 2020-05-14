import { shallowMount, mount } from '@vue/test-utils'
import avatar from '../avatar.vue'
import Vue from 'vue';


describe('Avatar.vue', () => {
    const wrapper = shallowMount(avatar, {
    });
    it('尺寸规格', () => {
        wrapper.setProps({size: "small" });
        return Vue.nextTick().then(function () {
            expect(wrapper.find('.nut-avatar').contains('.avatar-small')).toBe(true);
        })
    });

    it('形状类型是否为square', () => {
        wrapper.setProps({shape: "square" });
        return Vue.nextTick().then(function () {
            expect(wrapper.find('.nut-avatar').contains('.avatar-square')).toBe(true);
        })
    });

    it('背景颜色是否为red', () => {
        wrapper.setProps({bgColor: "red" });
        return Vue.nextTick().then(function () {
            expect(wrapper.find('.nut-avatar').hasStyle('background-color','red')).toBe(true);
        })
    });

    it('背景图片是否为设置的bgImage', () => {
        wrapper.setProps({bgImage: "http://image.png" });
        return Vue.nextTick().then(function () {
            // console.log(wrapper.find('.nut-avatar').attributes('style'))
            expect(wrapper.find('.nut-avatar').hasStyle('background-image','url(http://image.png)')).toBe(true);
        })
    });

    it('头像图片是否为设置的bgIcon', () => {
        wrapper.setProps({bgIcon: "http://image.png" });
        return Vue.nextTick().then(function () {
            expect(wrapper.find('.icon').hasStyle('background-image','url(http://image.png)')).toBe(true);
        })
    });
});