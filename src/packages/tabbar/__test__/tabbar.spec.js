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
        icon: 'https://img14.360buyimg.com/imagetools/jfs/t1/118307/14/13356/6509/5f1f964eE49521709/01d7262779580eae.png',
        activeIcon: 'https://img13.360buyimg.com/imagetools/jfs/t1/144737/16/3979/6780/5f1f964eE1ea6a85c/f0884d425c08f817.png',
      },
      {
        tabTitle: '收藏',
        curr: false,
        icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/121804/37/8253/8253/5f1f964cE49319b40/e1013b7ecccddb9d.png',
        activeIcon: 'https://img14.360buyimg.com/imagetools/jfs/t1/147105/26/3919/8702/5f1f964cEa84ada31/49449b6837783b96.png',
      },
      {
        tabTitle: '任务',
        curr: true,
        icon: 'https://img13.360buyimg.com/imagetools/jfs/t1/135718/27/5479/4044/5f1f964cE2a855efc/be6cf14f8508d995.png',
        activeIcon: 'https://img11.360buyimg.com/imagetools/jfs/t1/134812/35/5525/4171/5f1f964cE87259d35/0c15597415912785.png',
      },
      {
        tabTitle: '我的',
        curr: false,
        icon: 'https://img10.360buyimg.com/imagetools/jfs/t1/134791/32/5470/6758/5f1f964cEa5ffb2c4/a001fcc43aebd555.png',
        activeIcon: 'https://img12.360buyimg.com/imagetools/jfs/t1/141460/22/3921/6967/5f1f964cE0f298049/1aa9437df6e5e747.png',
      },
    ],
  });

  it('页签位于页面底部', () => {
    wrapper.setProps({ bottom: true });
    return Vue.nextTick().then(function () {
      expect(wrapper.contains('.tabbar-bottom')).toBe(true);
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
});
