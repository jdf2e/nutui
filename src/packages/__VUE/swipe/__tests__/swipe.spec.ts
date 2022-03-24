import { config, DOMWrapper, mount } from '@vue/test-utils';
import Swipe from '../index.vue';
import { nextTick } from 'vue';
import NutButton from '../../button/index.vue';
import NutCell from '../../cell/index.vue';
import NutIcon from '../../icon/index.vue';

beforeAll(() => {
  config.global.components = {
    NutButton,
    NutCell,
    NutIcon
  };
});

afterAll(() => {
  config.global.components = {};
});

test('base swipe', () => {
  const wrapper = mount(Swipe);
  const swipe: DOMWrapper<Element> = wrapper.find('.nut-swipe');
  expect(swipe.exists()).toBe(true);
});

test('base swipe props disabled', async () => {
  const wrapper = mount(Swipe, {
    props: {
      disabled: false
    },
    slots: {
      right: `<nut-button shape="square" style="height: 100%" type="danger"
      >删除</nut-button>`
    }
  });
  await nextTick();
  const swipe1: DOMWrapper<Element> = wrapper.find('.nut-swipe__right');
  const swipe2: DOMWrapper<Element> = wrapper.find('.nut-button');
  expect(swipe1.exists()).toBe(true);
  expect(swipe1.text()).toBe('删除');
  expect(swipe2.exists()).toBe(true);
});
test('base swipe Slots', async () => {
  const wrapper = mount(Swipe, {
    slots: {
      left: `<nut-button shape="square" style="height: 100%" type="success"
      >选择</nut-button>`
    }
  });
  await nextTick();
  const swipe: DOMWrapper<Element> = wrapper.find('.nut-swipe__left');
  const swipe2: DOMWrapper<Element> = wrapper.find('.nut-button');
  expect(swipe.exists()).toBe(true);
  expect(swipe.text()).toBe('选择');
  expect(swipe2.exists()).toBe(true);
});
test('base swipe content', async () => {
  const wrapper = mount(Swipe, {
    slots: {
      default: '<nut-cell round-radius="0" desc="左滑右滑都可以哦" />'
    }
  });
  await nextTick();
  const swipe2: DOMWrapper<Element> = wrapper.find('.nut-swipe__content');
  const swipe3: DOMWrapper<Element> = wrapper.find('.nut-cell');
  expect(swipe2.exists()).toBe(true);
  expect(swipe2.text()).toBe('左滑右滑都可以哦');
  expect(swipe3.exists()).toBe(true);
});
