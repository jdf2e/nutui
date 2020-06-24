import { shallowMount, mount } from '@vue/test-utils'
import avatar from '../avatar.vue'
import Vue from 'vue';


describe('Avatar.vue', () => {
    const wrapper = shallowMount(avatar, {
    });

    it('设置头像图片的地址', () => {
        wrapper.setProps({bgImage: "http://image.png" });
        return Vue.nextTick().then(function () {
            expect(wrapper.find('.icon').attributes('src')).toBe('http://image.png');
        })
    });

    it('设置头像图片的大小', () => {
        wrapper.setProps({sizeNum: "50" });
        return Vue.nextTick().then(function () {
            expect(wrapper.find('.nut-avatar').hasStyle('width','50px')).toBe(true);
        })
    });


});