import { mount } from '@vue/test-utils';
import { Checkbox } from '@nutui/nutui';
import { ref } from 'vue';

test('basic usage', () => {
  const wrapper = mount(Checkbox, {
    props: {
      modelValue: true,
      label: '复选框'
    }
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('Checkbox: disabled', async () => {
  const val = ref(true);
  const wrapper = mount(() => {
    return <Checkbox v-model={val.value} disabled></Checkbox>;
  });

  const items = wrapper.findAll('.nut-checkbox');
  await items[0].trigger('click');
  expect(val.value).toEqual(true);
  expect(wrapper.find('.nut-checkbox__icon--disable')).toBeTruthy();
});

test('Checkbox: text-position', () => {
  const val = ref(true);
  const wrapper = mount(() => {
    return <Checkbox v-model={val.value} textPosition="left"></Checkbox>;
  });
  const item = wrapper.find('.nut-checkbox');
  expect(item.classes()).toContain('nut-checkbox--reverse');
});

test('Checkbox: icon-size', () => {
  const wrapper = mount(() => {
    return (
      <>
        <Checkbox iconSize={25}></Checkbox>
        <Checkbox iconSize={12}></Checkbox>
      </>
    );
  });

  const items = wrapper.findAll('.nut-checkbox');
  expect(items[0].find('svg').element.style.width).toEqual('25px');
  expect(items[1].find('svg').element.style.height).toEqual('12px');
});

test('Checkbox: click', async () => {
  const wrapper = mount(Checkbox);

  wrapper.trigger('click');
  expect(wrapper.emitted('update:modelValue')![0]).toEqual([true]);

  await wrapper.setProps({ modelValue: true });
  wrapper.trigger('click');
  expect(wrapper.emitted('update:modelValue')![1]).toEqual([false]);
});

test('Checkbox: shape', async () => {
  const wrapper = mount(() => {
    return (
      <>
        <Checkbox shape="button"></Checkbox>
        <Checkbox></Checkbox>
      </>
    );
  });

  const items = wrapper.findAll('.nut-checkbox');
  expect(items[0].find('.nut-checkbox__button').exists()).toBeTruthy();
  expect(items[1].find('.nut-checkbox__button').exists()).toBeFalsy();
});
