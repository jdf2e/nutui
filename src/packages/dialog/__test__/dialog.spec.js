import { shallowMount, mount } from '@vue/test-utils';
import Dialog from '../dialog.vue';
import Vue from 'vue';

describe('Dialog.vue', () => {
  const wrapper = shallowMount(Dialog, {});

  it('展示', () => {
    wrapper.setProps({ title: '测试标题', visible: true });

    return Vue.nextTick().then(function () {
      expect(wrapper.find('.nut-dialog-wrapper').isVisible()).toBe(true);
    });
  });

  it('内容文案展示', () => {
    wrapper.setProps({ content: '测试文案', visible: true });

    return Vue.nextTick().then(function () {
      expect(wrapper.find('.nut-dialog-content').exists()).toBe(true);
    });
  });

  it('标题文案展示-标题-内容', () => {
    wrapper.setProps({ title: '测试标题', content: '测试内容', visible: true });

    return Vue.nextTick().then(function () {
      expect(wrapper.find('.nut-dialog-title').exists()).toBe(true);
    });
  });

  it('隐藏底栏', () => {
    wrapper.setProps({ title: '测试标题', visible: true, noFooter: true });

    return Vue.nextTick().then(function () {
      expect(wrapper.find('.nut-dialog-footer').exists()).toBe(false);
    });
  });

  it('隐藏确定键', () => {
    wrapper.setProps({ title: '测试标题', visible: true, noOkBtn: true });

    return Vue.nextTick().then(function () {
      expect(wrapper.find('.nut-dialog-ok').exists()).toBe(false);
    });
  });
  it('多行按钮', () => {
    wrapper.setProps({
      content: '内容',
      visible: true,
      multiButton: true,
      multiButtonText: [
        {
          name: '主要操作1(禁止)',
          value: 0,
          disabled: true,
        },
        {
          name: '主要操作2',
          value: 1,
          disabled: false,
        },
      ],
    });

    return Vue.nextTick().then(function () {
      expect(wrapper.find('.nut-dialog-multi-button').exists()).toBe(false);
      //  expect(wrapper.findAll('.nut-dialog-multi-button').length).toBe(2);
      //expect(wrapper.findAll('.nut-dialog-multi-button').at(0).contains('.nut-dialog-multi-disabled')).toBe(true);
    });
  });
  it('图片弹窗', () => {
    wrapper.setProps({
      visible: true,
      type: 'image',
      link: 'http://m.jd.com',
      imgSrc: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/4875/23/1968/285655/5b9549eeE4997a18c/070eaf5bddf26be8.jpg',
    });

    return Vue.nextTick().then(function () {
      expect(wrapper.find('.nut-dialog-wrapper').exists()).toBe(true);
      expect(wrapper.find('.nut-dialog-link').exists()).toBe(true);
      expect(wrapper.find('.nut-dialog-image').attributes('src')).toBe(
        'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/4875/23/1968/285655/5b9549eeE4997a18c/070eaf5bddf26be8.jpg'
      );
    });
  });
});
