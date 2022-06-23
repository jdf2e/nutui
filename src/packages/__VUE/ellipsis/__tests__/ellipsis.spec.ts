import { config, mount } from '@vue/test-utils';
import { h, nextTick } from 'vue';
import Ellipsis from '../index.vue';

const originGetComputedStyle = window.getComputedStyle;

const lineHeight = 19.5;

const content =
  'NutUI3.0上线后我们研发团队也在不断的优化、测试、使用、迭代 Vue3 的相关组件，但是在跨端小程序的开发过程中，发现没有合适的组件库可以支持多端开发。为了填补这一空白，同时为了优化开发者体验，让 NutUI 能够为更多的开发者带来便利，我们决定在 NutUI 中增加小程序多端适配的能力。';

beforeAll(() => {
  window.getComputedStyle = (el) => {
    const style = originGetComputedStyle(el);
    style.lineHeight = `${lineHeight}px`;
    return style;
  };
  Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
    get() {
      if (this.innerText.includes('...')) {
        const row = Math.ceil((this.innerText.replace(/\.\.\./g, '中').length / content.length) * 4);
        return lineHeight * row;
      }
      return lineHeight * 4;
    }
  });
});

afterAll(() => {
  window.getComputedStyle = originGetComputedStyle;
});

test('Ellipsis Props Direction Start', async () => {
  const wrapper = mount(Ellipsis, {
    props: {
      content: content,
      direction: 'start'
    }
  });
  await nextTick();
  expect(wrapper.html()).toMatchSnapshot();
});

test('Ellipsis Props Direction Middle', async () => {
  const wrapper = mount(Ellipsis, {
    props: {
      content: content,
      direction: 'middle'
    }
  });
  await nextTick();
  expect(wrapper.html()).toMatchSnapshot();
});

test('Ellipsis Props Rows', async () => {
  const wrapper = mount(Ellipsis, {
    props: {
      content: content,
      direction: 'start',
      rows: 3
    }
  });
  await nextTick();
  expect(wrapper.html()).toMatchSnapshot();
});
