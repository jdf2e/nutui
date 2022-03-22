import { config, mount } from '@vue/test-utils';
import Price from '../index.vue';
import NutIcon from '../../icon/index.vue';

beforeAll(() => {
  config.global.components = {
    NutIcon
  };
});

afterAll(() => {
  config.global.components = {};
});

test('base price', () => {
  const wrapper = mount(Price, {
    props: {
      price: '199.99'
    }
  });
  const price: any = wrapper.find('.nut-price');
  expect(price.text()).toBe('¥199.99');
});

test('decimalDigits price', () => {
  const wrapper = mount(Price, {
    props: {
      price: '299.95',
      decimalDigits: '1'
    }
  });
  const price: any = wrapper.find('.nut-price');
  expect(price.text()).toBe('¥299.9');
});

test('default needSymbol props', () => {
  const wrapper = mount(Price);
  const price: any = wrapper.find('.nut-price');
  expect(price.find('.nut-price--symbol').text()).toBe('¥');
});
test('needSymbol props', () => {
  const wrapper = mount(Price, {
    props: {
      needSymbol: false
    }
  });
  const price: any = wrapper.find('.nut-price');
  expect(price.find('.nut-price--symbol').exists()).toBe(false);
});
test('symbol props', () => {
  const wrapper = mount(Price, {
    props: {
      symbol: '$'
    }
  });
  const price: any = wrapper.find('.nut-price');
  expect(price.find('.nut-price--symbol').text()).toBe('$');
});

test('size props', () => {
  const wrapper = mount(Price, {
    props: {
      size: 'small'
    }
  });
  const price: any = wrapper.find('.nut-price');
  expect(price.html()).toContain('nut-price--small');
});
