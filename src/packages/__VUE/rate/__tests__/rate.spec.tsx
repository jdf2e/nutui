import { mount } from '@vue/test-utils';
import Rate from '../index.vue';
import { h, nextTick, ref } from 'vue';
import { Check } from '@nutui/icons-vue';

const sleep = (delay = 0): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

test('base rate', () => {
  const wrapper = mount(Rate);
  const rate = wrapper.find('.nut-rate');
  expect(rate.exists()).toBe(true);
});

test('should have rate when v-model', () => {
  const wrapper = mount(Rate, { props: { modelValue: 4 } });
  const rate = wrapper.findAll('.nut-rate-item__icon--disabled');
  expect(rate.length).toBe(1);
});

test('should have the same count and activeColor', () => {
  const wrapper = mount(Rate, {
    props: { count: 10, activeColor: 'green', modelValue: 1 }
  });
  const rate = wrapper.findAll('.nut-rate-item');
  expect(rate.length).toBe(10);

  const i = wrapper.findAll('.nut-rate-item__icon');
  expect((i[0].element as HTMLElement).style.color).toBe('green');
  expect((i[1].element as HTMLElement).style.color).toBe('');
});

test('should have click', async () => {
  const wrapper = mount(Rate, {
    props: {
      modelValue: 1,
      'onUpdate:modelValue': (val: number) => wrapper.setProps({ modelValue: val })
    }
  });
  const rate = wrapper.findAll('.nut-rate-item svg');
  rate[2].trigger('click');
  await nextTick();
  const rateDis = wrapper.findAll('.nut-rate-item__icon--disabled');
  expect(rateDis.length).toBe(2);
  expect((wrapper.emitted('change') as any)[0][0]).toEqual(3);
});

test('should have disabled', async () => {
  const wrapper = mount(Rate, {
    props: {
      disabled: true,
      modelValue: 4,
      'onUpdate:modelValue': (val: number) => wrapper.setProps({ modelValue: val })
    }
  });
  const rate = wrapper.findAll('.nut-rate-item svg');
  rate[1].trigger('click');
  await nextTick();
  const rateDis = wrapper.findAll('.nut-rate-item__icon--disabled');
  expect(rateDis.length).toBe(5);
});

test('should have readonly', async () => {
  const wrapper = mount(Rate, { props: { readonly: true, modelValue: 4 } });
  const rate = wrapper.findAll('.nut-rate-item');
  rate[1].trigger('click');
  await nextTick();
  const rateDis = wrapper.findAll('.nut-rate-item__icon--disabled');
  expect(rateDis.length).toBe(1);
});

test('custom icon', async () => {
  const wrapper = mount(Rate, {
    props: {
      customIcon: h(Check)
    }
  });
  const icon = wrapper.find('.nut-icon');
  expect(icon.html()).toMatchSnapshot();
});
