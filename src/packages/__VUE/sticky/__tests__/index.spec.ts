import { mount, config, VueWrapper } from '@vue/test-utils';
import { trigger, mockScrollTop } from './../../../utils/unit';
import Sticky from '../index.vue';
import type { ComponentPublicInstance } from 'vue';
import NutButton from '../../button/index.vue';

beforeAll(() => {
  config.global.components = {
    NutButton
  };
});

afterAll(() => {
  config.global.components = {};
});

Object.defineProperty(window.HTMLElement.prototype, 'clientHeight', {
  value: 667
});

function mockStickyRect(wrapper: VueWrapper<ComponentPublicInstance<{}, any>>, rect: Partial<DOMRect>) {
  const mocked = jest.spyOn(wrapper.element, 'getBoundingClientRect').mockReturnValue(rect as DOMRect);

  return () => mocked.mockRestore();
}

test('should sticky to top after scroll', async () => {
  const wrapper = mount(Sticky, {});
  const restore = mockStickyRect(wrapper, {
    top: -100,
    bottom: -90
  });

  await mockScrollTop(1000);
  expect(wrapper.html()).toMatchSnapshot();

  restore();
});

test('should sticky to bottom after scroll', async () => {
  const wrapper = mount(Sticky);
  const restore = mockStickyRect(wrapper, {
    top: 667,
    bottom: 690
  });

  await mockScrollTop(0);
  expect(wrapper.html()).toMatchSnapshot();

  restore();
});
