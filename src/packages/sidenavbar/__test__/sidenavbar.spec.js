import { shallowMount, Mount } from '@vue/test-utils';
import Vue from 'vue';
import SideNavBar from '../sidenavbar.vue';
import SubSideNavBar from '../../subsidenavbar/subsidenavbar.vue';
import SideNavBarItem from '../../sidenavbaritem/sidenavbaritem.vue';

describe('SideNavBar.vue', () => {
    // const wrapper = shallowMount(SideNavBar, {
    //     slots: {
    //         default: [SubSideNavBar, SubSideNavBar]
    //     },
    //     propsData: {
    //         offset: 30
    //     }
    // });

    // const sub = shallowMount(SubSideNavBar, {
    //     slots: {
    //         default: [SideNavBarItem, SideNavBarItem, SideNavBarItem]
    //     },
    //     propsData: {
    //         title: '菜单测试一',
    //         ikey: 12,
    //         open: false
    //     }
    // })

    // const item = shallowMount(SideNavBarItem, {
    //     propsData: {
    //         title: '子菜单测试一',
    //         ikey: 24
    //     }
    // })

    // it('sidenavbar slots', () => {
    //     return Vue.nextTick().then(function () {
    //         expect(wrapper.findAll(".nut-subsidenavbar").length).toBe(2)
    //     })
    // });

    // it('sidenavbar offset', () => {
    //     return Vue.nextTick().then(function () {
    //         expect(wrapper.findAll(".item-title").at(0).element.style.paddingLeft).toBe('30px')
    //     })
    // });

    // it('subsidenavbar slots', () => {
    //     return Vue.nextTick().then(function () {
    //         expect(sub.findAll(".nut-sidenavbaritem").length).toBe(3)
    //     })
    // });

    // it('subsidenavbar title', () => {
    //     return Vue.nextTick().then(function () {
    //         expect(sub.findAll(".sidenavbar-title").at(0).text()).toBe('菜单测试一')
    //     })
    // });

    // it('subsidenavbar ikey', () => {
    //     return Vue.nextTick().then(function () {
    //         expect(sub.attributes().ikey).toBe('12')
    //     })
    // });

    // it('subsidenavbar open', () => {
    //     return Vue.nextTick().then(function () {
    //         expect(sub.findAll(".sub-sidenavbar-list").at(0).element.style.height).toBe('0px')
    //     })
    // });

    // it('sidenavbaritem title', () => {
    //     return Vue.nextTick().then(function () {
    //         expect(item.findAll(".item-title").at(0).text()).toBe('子菜单测试一')
    //     })
    // });

    // it('sidenavbaritem ikey', () => {
    //     return Vue.nextTick().then(function () {
    //         expect(item.attributes().ikey).toBe('24')
    //     })
    // });

});