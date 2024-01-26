import { mount } from '@vue/test-utils';
import CheckboxGroup from '../index.vue';
import Checkbox from '../../checkbox/index.vue';
import { ref } from 'vue';

test('CheckboxGroup: v-model & change', async () => {
  const val = ref([]);
  const onChange = vi.fn();
  const wrapper = mount(() => {
    return (
      <CheckboxGroup v-model={val.value} onChange={onChange}>
        <Checkbox label="1"></Checkbox>
        <Checkbox label="2"></Checkbox>
        <Checkbox label="3"></Checkbox>
        <Checkbox label="4"></Checkbox>
      </CheckboxGroup>
    );
  });
  const items = wrapper.findAll('.nut-checkbox');
  await items[0].trigger('click');
  expect(val.value).toEqual(['1']);
  expect(onChange).toBeCalledTimes(1);
  expect(onChange).toBeCalledWith(['1']);
});

test('CheckboxGroup: disabled', async () => {
  const val = ref([]);
  const wrapper = mount(() => {
    return (
      <CheckboxGroup v-model={val.value} disabled>
        <Checkbox label="1"></Checkbox>
        <Checkbox label="2"></Checkbox>
        <Checkbox label="3"></Checkbox>
        <Checkbox label="4"></Checkbox>
      </CheckboxGroup>
    );
  });
  const items = wrapper.findAll('.nut-checkbox');
  await items[0].trigger('click');
  expect(val.value).toEqual([]);
  expect(wrapper.find('.nut-checkbox__icon--disable')).toBeTruthy();
});
