import { shallowMount, mount } from '@vue/test-utils';
import Tab from '../tab.vue';

import Vue from 'vue';

describe('Tab.vue', () => {
  const wrapper = mount(Tab);
  wrapper.setData({
    tabTitleList: [
      {
        tabTitle: '衣物',
        content: '<p>衣物内容</p>',
      },
      {
        tabTitle: '日用品',
        content: '<p>日用品内容</p>',
      },
      {
        tabTitle: '运动器材',
        content: '<p>运动器材内容</p>',
      },
      {
        tabTitle: '电影票',
        content: '<p>电影票内容</p>',
      },
    ],
  });
  it('当前tab的位置', () => {
    wrapper.setProps({ positionNav: 'left' });
    return Vue.nextTick().then(function () {
      expect(wrapper.contains('.nut-tab-title-leftnav')).toBe(true);
    });
  });
  it('当前tab是否可以滑动', () => {
    wrapper.setProps({ isScroll: 'true', positionNav: 'top' });
    return Vue.nextTick().then(function () {
      expect(wrapper.contains('.nut-title-nav-scroll')).toBe(true);
    });
  });
  it('当前tab包含滑动的底部导航条', () => {
    wrapper.setProps({ scrollLine: 'true', positionNav: 'top' });
    return Vue.nextTick().then(function () {
      expect(wrapper.contains('.nav-bar-top')).toBe(true);
    });
  });
  it('当前tab包含点击式的底部导航条', () => {
    wrapper.setProps({ tabLine: 'true', positionNav: 'top' });
    return Vue.nextTick().then(function () {
      expect(wrapper.contains('.tab-line')).toBe(true);
    });
  });
  it('当前tab默认活动的页签是否正确', () => {
    wrapper.setProps({ tabLine: 'true', positionNav: 'top' });
    wrapper.setData({ activeIndex: 1 });
    return Vue.nextTick().then(function () {
      expect(wrapper.findAll('.nut-title-nav').at(1).contains('.nut-tab-active')).toBe(true);
    });
  });
  it('当前tab设置高度是否生效', () => {
    wrapper.setProps({ wrapperHeight: '250', positionNav: 'left' });
    return Vue.nextTick().then(function () {
      expect(wrapper.findAll('.nut-tab-item').at(0).hasStyle('height', '250px')).toBe(true);
    });
  });
  it('点击tab事件', () => {
    wrapper.setProps({ positionNav: 'top' });
    return Vue.nextTick().then(function () {
      wrapper.findAll('.nut-title-nav').at(2).trigger('click');
      expect(wrapper.findAll('.nut-title-nav').at(1).contains('.nut-tab-active')).toBe(true);
    });
  });
});
