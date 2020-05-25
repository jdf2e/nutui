import { shallowMount, mount } from '@vue/test-utils'
import Textbox from '../textbox.vue';
import Vue from 'vue';


describe('Textbox.vue', () => {
    const wrapper = shallowMount(Textbox);

    // it('字数限制', () => {
    //     wrapper.setData({ maxNum: '500'});

    //     return Vue.nextTick().then(function () {
    //         expect(wrapper.html()).toBe(true);
    //     });
    // });

   

    // it('模拟输入', () => {
    //     wrapper.setData({ msg: '测试文案', });

    //     return Vue.nextTick().then(function () {
    //         expect();
    //     });
    // });



});