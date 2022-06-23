import { config, DOMWrapper, mount } from '@vue/test-utils';
import Ecard from '../index.vue';
import NutInputnumber from '../../inputnumber/index.vue';
// inputnumber中有使用icon
import NutIcon from '../../icon/index.vue';
import { nextTick } from 'vue';

function sleep(delay = 0): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}
// 所有的测试用例之前执行一次
beforeAll(() => {
  config.global.components = {
    NutInputnumber,
    NutIcon
  };
});
// 所有的测试用例之后执行一次
afterAll(() => {
  config.global.components = {};
});

const data = [
  {
    price: 10
  },
  {
    price: 20
  },
  {
    price: 30
  },
  {
    price: 40
  }
];
test('should render ecard', async () => {
  const wrapper = mount(Ecard, {
    props: {
      dataList: data
    }
  });
  // expect(wrapper.html()).toMatchSnapshot();
});
test('should render correct money', async () => {
  const wrapper = mount(Ecard, {
    props: {
      dataList: data,
      modelValue: 0
    }
  });
  const item = wrapper.findAll('.nut-ecard__list__item');

  item[0].trigger('click');
  await nextTick();
  expect((wrapper.emitted('update:modelValue') as any)[0][0]).toBe(10);
});

test('input change when more than maxValue', async () => {
  const wrapper = mount(Ecard, {
    props: {
      dataList: data,
      modelValue: 0,
      cardAmountMax: 100
    }
  });
  const input: DOMWrapper<Element> = wrapper.find('.nut-ecard__list__input--input');
  (input.element as HTMLInputElement).value = '123';
  input.trigger('input');
  await nextTick();
  expect((wrapper.emitted('update:modelValue') as any)[0][0]).toEqual(100);
});

test('input change when less than maxValue', async () => {
  const wrapper = mount(Ecard, {
    props: {
      dataList: data,
      modelValue: 0,
      cardAmountMin: 100
    }
  });
  const input: DOMWrapper<Element> = wrapper.find('.nut-ecard__list__input--input');
  (input.element as HTMLInputElement).value = '90';
  input.trigger('input');
  await nextTick();
  expect((wrapper.emitted('update:modelValue') as any)[0][0]).toEqual(100);
});
test('input change when less than maxValue', async () => {
  const wrapper = mount(Ecard, {
    props: {
      dataList: data,
      modelValue: 10,
      cardAmountMin: 100
    }
  });
  const input: DOMWrapper<Element> = wrapper.find('.nut-ecard__list__input');
  const add = wrapper.find('.nut-icon-plus');
  input.trigger('click');
  add.trigger('click');
  await nextTick();
  expect((wrapper.emitted('update:modelValue') as any)[0][0]).toBe('');
});
