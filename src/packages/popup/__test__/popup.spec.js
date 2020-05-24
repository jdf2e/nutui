import { mount } from '@vue/test-utils';
import popup from '../popup.vue';
import Vue from 'vue';
import overlay from '../overlay.vue';
import Icon from '../../icon/icon.vue';
describe('Menu.vue', () => {
  const wrapper = mount(popup, {});

  it('1.判断是否显示内容', () => {
    wrapper.setData({
      value: true,
    });
    return Vue.nextTick().then(function () {
      expect(wrapper.classes()).toContain('popup-box');
    });
  });
  it('2.判断弹出位置', () => {
    wrapper.setData({
      position: 'top',
    });
    return Vue.nextTick().then(function () {
      expect(wrapper.classes()).toContain('popup-top');
    });
  });
  it('3.判断是否有关闭图标', () => {
    wrapper.setData({
      closeable: true,
    });
    Icon;
    let i = wrapper.find('.nutui-popup__close-icon');
    return Vue.nextTick().then(function () {
      expect(i.is(Icon)).toBe(true);
    });
  });
  // it('4.判断点击关闭按钮',() => {
  //     wrapper.setData({
  //         closeable:true
  //     });
  //     let i = wrapper.find('.nutui-popup__close-icon');
  //     i.trigger('click')
  //     console.log()
  //     return Vue.nextTick().then(function() {
  //         setTimeout(()=>{
  //             expect(wrapper.contains(popup)).toBe(false)
  //         },wrapper.duration*1000)
  //     })
  // });
});
