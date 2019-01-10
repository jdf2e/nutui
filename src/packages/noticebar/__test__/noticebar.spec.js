import { shallowMount } from '@vue/test-utils'
import NoticeBar from '../noticebar.vue'
import Vue from 'vue';

describe('noticebar.vue',() => {
    const wrapper = shallowMount(NoticeBar, {
        propsData:{
            text:"华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！"
        }
    });

    it('默认用法',() => {
        wrapper.setData({
            type:'simple'
        });

        return Vue.nextTick().then(function() {
            expect(wrapper.findAll('li').at(1).classes('selected')).toBe(true);
        })
    });

    // it('多选-style1',() => {
    //     wrapper.setProps({
    //         type:'multiple',
    //         mulstyle:'style1'
    //     });

    //     return Vue.nextTick().then(function() {
    //         expect(wrapper.find('.menu-multiple-style1').isVisible()).toBe(true);
    //     })
    // })

    // it('多选-style2',() => {
    //     wrapper.setProps({
    //         type:'multiple',
    //         mulstyle:'style2'
    //     });

    //     return Vue.nextTick().then(function() {
    //         expect(wrapper.find('.menu-multiple-style2').isVisible()).toBe(true);
    //     })
    // })

    // it('多选-style3',() => {
    //     wrapper.setProps({
    //         type:'multiple',
    //         mulstyle:'style3'
    //     });

    //     return Vue.nextTick().then(function() {
    //         expect(wrapper.find('.menu-multiple-style3').isVisible()).toBe(true);
    //     })
    // })
});