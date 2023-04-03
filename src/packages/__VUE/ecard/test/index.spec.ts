import { DOMWrapper, mount } from '@vue/test-utils';
import Ecard from '../index.vue';
import { nextTick } from 'vue';

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
  const add = wrapper.find('.nut-icon');
  input.trigger('click');
  add.trigger('click');
  await nextTick();
  expect((wrapper.emitted('update:modelValue') as any)[0][0]).toBe('');
});
