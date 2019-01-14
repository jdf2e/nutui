import { shallowMount } from '@vue/test-utils'
import NoticeBar from '../noticebar.vue'
import Vue from 'vue';

describe('noticebar.vue',() => {
    const wrapper = shallowMount(NoticeBar, {
        propsData:{
            text:"华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！"
        }
    });

    it('禁用滚动',() => {
        wrapper.setProps({
            scrollable:false
        });

        return Vue.nextTick().then(function() {
            // console.log(wrapper.find('.content').classes('van-ellipsis'),'test');
            
            expect(wrapper.find('.content').classes('van-ellipsis')).toBe(true);
        })
    });

    it('通告栏模式--关闭模式',() => {
        wrapper.setProps({
            closeMode:true
        });

        return Vue.nextTick().then(function() {
            expect(wrapper.find('.right-icon').isVisible()).toBe(true);
        })
    })

    it('左边图标不显示',() => {
        wrapper.setProps({
            leftIcon:'close',
        });
        return Vue.nextTick().then(function() {
            expect(wrapper.find('.left-icon').exists()).toBe(false);
        })
    })
});