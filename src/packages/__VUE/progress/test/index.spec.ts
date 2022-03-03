import { config, mount } from '@vue/test-utils';
import { nextTick } from 'vue';
import NutIcon from '../../icon/index.vue';
import Progress from '../index.vue';

beforeAll(() => {
  config.global.components = {
    NutIcon
  };
});

afterAll(() => {
  config.global.components = {};
});

test('should render progress when use props', async () => {
  const wrapper = mount(Progress, {
    props: {
      percentage: 100
    }
  });
  expect(wrapper.html()).toMatchSnapshot();
});
test('should render different height and color when use color height props', async () => {
  const wrapper = mount(Progress, {
    props: {
      percentage: 50,
      strokeColor: 'blue',
      strokeWidth: '20',
      textColor: 'red'
    }
  });
  await nextTick();
  let inner = wrapper.find<HTMLElement>('.nut-progress-inner');
  expect(inner.element.style.background).toEqual('blue');
  let text = wrapper.find<HTMLElement>('.nut-progress-text');
  let span = wrapper.find<HTMLElement>('.nut-progress-text span');
  expect(span.element.style.color).toEqual('red');
  expect(text.element.style.lineHeight).toEqual('20px');
});

test('should hide percentage when use showText props', () => {
  const wrapper = mount(Progress, {
    props: {
      percentage: 50,
      showText: false
    }
  });
  let text = wrapper.find<HTMLElement>('.nut-progress-text');
  expect(text.exists()).toBe(false);
});

test('should render inside percentage when use textInside props', () => {
  const wrapper = mount(Progress, {
    props: {
      percentage: 50,
      textInside: true
    }
  });
  let text = wrapper.find<HTMLElement>('.nut-progress-insidetext');
  expect(text.exists()).toBe(true);
});

test('should render custom size when use size props', () => {
  const wrapper = mount(Progress, {
    props: {
      percentage: 50,
      size: 'large'
    }
  });
  let text = wrapper.find<HTMLElement>('.nut-progress-large');
  expect(text.exists()).toBe(true);
});
