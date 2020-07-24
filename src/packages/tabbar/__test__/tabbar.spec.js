import { shallowMount, mount } from '@vue/test-utils';
import Tabbar from '../tabbar.vue';
import Vue from 'vue';

describe('Tabbar.vue', () => {
  const wrapper = mount(Tabbar);
  wrapper.setData({
    currIndex: 1,
    tabList: [
      {
        tabTitle: '定位',
        curr: false,
        href: 'http://nutui.jd.com/demo.html#/index',
        icon: require('../../../assets/img/address.png'),
        activeIcon: require('../../../assets/img/address-red.png'),
      },
      {
        tabTitle: '收藏',
        curr: false,
        isDot: true,
        href: 'http://nutui.jd.com/demo.html#/index',
        icon: require('../../../assets/img/collection.png'),
        activeIcon: require('../../../assets/img/collection-red.png'),
      },
      {
        tabTitle: '任务',
        curr: true,
        num: 9,
        href: 'http://nutui.jd.com/demo.html#/index',
        icon: require('../../../assets/img/task.png'),
        activeIcon: require('../../../assets/img/task-red.png'),
      },
      {
        tabTitle: '我的',
        curr: false,
        num: 100,
        href: 'http://nutui.jd.com/demo.html#/index',
        icon: require('../../../assets/img/myicon.png'),
        activeIcon: require('../../../assets/img/myicon-red.png'),
      },
    ],
  });

  it('页签位于页面底部', () => {
    wrapper.setProps({ bottom: true });
    return Vue.nextTick().then(function () {
      expect(wrapper.contains('.bottom')).toBe(true);
    });
  });

  it('设置tabbar标签标题', () => {
    return Vue.nextTick().then(function () {
      expect(wrapper.findAll('.tabbar-nav').at(1).find('.tabbar-nav-word').text()).toBe('收藏');
    });
  });

  it('当前tabbar标签激活状态是否正确', () => {
    return Vue.nextTick().then(function () {
      expect(wrapper.findAll('.tabbar-nav').at(1).contains('.curr')).toBe(true);
    });
  });

  it('点击切换tabbar标签', () => {
    return Vue.nextTick().then(function () {
      wrapper.findAll('.tabbar-nav').at(2).trigger('click');
      expect(wrapper.findAll('.tabbar-nav').at(2).contains('.curr')).toBe(true);
    });
  });

  it('当前tabbar标签显示的图片', () => {
    return Vue.nextTick().then(function () {
      expect(wrapper.findAll('.tabbar-nav').at(0).find('.icon').hasStyle('background-image', 'url(./img/address.png)')).toBe(true);
    });
  });
});
