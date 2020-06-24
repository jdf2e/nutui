import { shallowMount, mount } from '@vue/test-utils'
import Card from '../card.vue';
import Vue from 'vue';

describe('Card.vue', () => {
  const wrapper = shallowMount(Card, {});
  it('不是通栏设置', () => {
    wrapper.setProps({ isFull: true });
    return Vue.nextTick().then(function () {
      expect(wrapper.find('.nut-card-container').contains('full-content')).toBe(true);
    })
  })
  it('设置卡片标题最大限度', () => {
    wrapper.setProps({ title: '哈哈哈哈哈我是标题啦啦啦啦啦' });
    return Vue.nextTick().then(function () {
      expect(wrapper.find('.nut-card-title').text()).toBe('哈哈哈哈哈我是标题啦啦啦啦啦');
    })
  })
  it('设置卡片内容', () => {
    wrapper.setProps({ content: '哈哈哈哈哈我是内容啦啦啦啦啦哈哈哈哈哈我是内容啦啦啦啦啦哈哈哈哈哈我是内容啦啦啦啦啦' });
    return Vue.nextTick().then(function () {
      expect(wrapper.find('.mut-card-content').text()).toBe('哈哈哈哈哈我是内容啦啦啦啦啦哈哈哈哈哈我是内容啦啦啦啦啦哈哈哈哈哈我是内容啦啦啦啦啦');
    })
  })
  it('设置卡片底部按钮', () => {
    wrapper.setProps({
      footerButtons: [
        { event: 'click1', clickName: '操作一' },
        { event: 'click2', clickName: '操作二' },
      ] });
    return Vue.nextTick().then(function () {
      expect(wrapper.find('.mut-card-bottom')).toBe([
        { event: 'click1', clickName: '操作一' },
        { event: 'click2', clickName: '操作二' },
      ]);
    })
  })
  it('设置自动配置content', () => {
    wrapper.setProps({ hasContent: true });
    return Vue.nextTick().then(function () {
      expect(wrapper.find('.mut-card-content')).toBe(true);
    })
  })
  it('设置自动配置footer', () => {
    wrapper.setProps({ hasFooter: true });
    return Vue.nextTick().then(function () {
      expect(wrapper.find('.mut-card-bottom')).toBe(true);
    })
  })
});