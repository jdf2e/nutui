import { shallowMount } from '@vue/test-utils'
import Menu from '../menu.vue'
import Vue from 'vue';

describe('Menu.vue',() => {
    const wrapper = shallowMount(Menu, {
        propsData:{
            list:[
                {id:1,text:'综合',selected:false},
                {id:1,text:'最新上架',selected:true},
                {id:2,text:'价格最低',selected:false},
                {id:3,text:'价格最高',selected:false},
                {id:4,text:'评价最多',selected:false}
            ],
            isVisible:true
        }
    });

    it('单选',() => {
        wrapper.setData({
            type:'simple'
        });

        return Vue.nextTick().then(function() {
            expect(wrapper.findAll('li').at(1).classes('selected')).toBe(true);
        })
    });

    it('多选-style1',() => {
        wrapper.setProps({
            type:'multiple',
            mulstyle:'style1'
        });

        return Vue.nextTick().then(function() {
            expect(wrapper.find('.menu-multiple-style1').isVisible()).toBe(true);
        })
    })

    it('多选-style2',() => {
        wrapper.setProps({
            type:'multiple',
            mulstyle:'style2'
        });

        return Vue.nextTick().then(function() {
            expect(wrapper.find('.menu-multiple-style2').isVisible()).toBe(true);
        })
    })

    it('多选-style3',() => {
        wrapper.setProps({
            type:'multiple',
            mulstyle:'style3'
        });

        return Vue.nextTick().then(function() {
            expect(wrapper.find('.menu-multiple-style3').isVisible()).toBe(true);
        })
    })
});