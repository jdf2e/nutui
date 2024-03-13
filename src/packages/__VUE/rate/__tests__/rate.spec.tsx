import { mount } from '@vue/test-utils';
import Rate from '..';
import { h, nextTick, ref } from 'vue';
import { Check } from '@nutui/icons-vue';
import { triggerDrag } from '@/packages/utils/unit';

test('Icon: base rate', () => {
  const wrapper = mount(Rate);
  const rate = wrapper.find('.nut-rate');
  expect(rate.exists()).toBe(true);
});

test('Icon: should have rate when v-model', () => {
  const wrapper = mount(Rate, { props: { modelValue: 4 } });
  const rate = wrapper.findAll('.nut-rate-item__icon--disabled');
  expect(rate.length).toBe(1);
});

test('Icon: should have the same count and active-color', () => {
  const wrapper = mount(Rate, {
    props: { count: 10, activeColor: 'green', modelValue: 1 }
  });
  const rate = wrapper.findAll('.nut-rate-item');
  expect(rate.length).toBe(10);

  const i = wrapper.findAll('.nut-rate-item__icon');
  expect((i[0].element as HTMLElement).style.color).toBe('green');
  expect((i[1].element as HTMLElement).style.color).toBe('');
});

test('Icon: should have click', async () => {
  const wrapper = mount(Rate, {
    props: {
      modelValue: 1,
      'onUpdate:modelValue': (val: number) => wrapper.setProps({ modelValue: val })
    }
  }) as any;
  const rate = wrapper.findAll('.nut-rate-item svg');
  rate[2].trigger('click');
  await nextTick();
  const rateDis = wrapper.findAll('.nut-rate-item__icon--disabled');
  expect(rateDis.length).toBe(2);
  expect((wrapper.emitted('change') as any)[0][0]).toEqual(3);
});

test('Icon: should have disabled', async () => {
  const wrapper = mount(Rate, {
    props: {
      disabled: true,
      modelValue: 4,
      'onUpdate:modelValue': (val: number) => wrapper.setProps({ modelValue: val })
    }
  }) as any;
  const rate = wrapper.findAll('.nut-rate-item svg');
  rate[1].trigger('click');
  await nextTick();
  const rateDis = wrapper.findAll('.nut-rate-item__icon--disabled');
  expect(rateDis.length).toBe(5);
});

test('Icon: should have readonly', async () => {
  const wrapper = mount(Rate, { props: { readonly: true, modelValue: 4 } });
  const rate = wrapper.findAll('.nut-rate-item');
  rate[1].trigger('click');
  await nextTick();
  const rateDis = wrapper.findAll('.nut-rate-item__icon--disabled');
  expect(rateDis.length).toBe(1);
});

test('Icon: custom icon', async () => {
  const wrapper = mount(Rate, {
    props: {
      customIcon: h(Check)
    }
  });
  const icon = wrapper.find('.nut-icon');
  expect(icon.html()).toMatchSnapshot();
});

test('Icon: allow-half', async () => {
  const val = ref(1.5);
  const fn = vi.fn();
  const wrapper = mount(() => {
    return <Rate v-model={val.value} allowHalf onChange={fn} />;
  });
  const halfIcons = wrapper.findAll('.nut-rate-item__icon--half .nut-rate-item__icon');
  expect(halfIcons.length).toBe(5);
  halfIcons[3].trigger('click');
  await nextTick();
  expect(fn).toBeCalledWith(3.5);
  expect(val.value).toBe(3.5);
});

test('Icon: touchable', async () => {
  const val = ref(1);
  const fn = vi.fn();
  const wrapper = mount(() => {
    return <Rate v-model={val.value} touchable onChange={fn} />;
  });
  const rate = wrapper.find('.nut-rate');

  triggerDrag(rate, 20, 0);
  await nextTick();
  expect(val.value).toBe(5);

  triggerDrag(rate, -20, 0);
  await nextTick();
  expect(val.value).toBe(0);
});
