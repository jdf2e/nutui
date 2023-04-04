import { config, mount } from '@vue/test-utils';
import { nextTick } from 'vue';
import Progress from '../index.vue';

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
  const inner = wrapper.find<HTMLElement>('.nut-progress-inner');
  expect(inner.element.style.background).toEqual('blue');
  const outer = wrapper.find<HTMLElement>('.nut-progress-outer');
  const span = wrapper.find<HTMLElement>('.nut-progress-text span');
  expect(span.element.style.color).toEqual('red');
  expect(outer.element.style.height).toEqual('20px');
});

test('should hide percentage when use showText props', () => {
  const wrapper = mount(Progress, {
    props: {
      percentage: 50,
      showText: false
    }
  });
  const text = wrapper.find<HTMLElement>('.nut-progress-text');
  expect(text.exists()).toBe(false);
});

test('should render inside percentage when use textInside props', () => {
  const wrapper = mount(Progress, {
    props: {
      percentage: 50,
      textInside: true
    }
  });
  const text = wrapper.find<HTMLElement>('.nut-progress-insidetext');
  expect(text.exists()).toBe(true);
});

test('should render custom size when use size props', () => {
  const wrapper = mount(Progress, {
    props: {
      percentage: 50,
      size: 'large'
    }
  });
  const text = wrapper.find<HTMLElement>('.nut-progress-large');
  expect(text.exists()).toBe(true);
});
