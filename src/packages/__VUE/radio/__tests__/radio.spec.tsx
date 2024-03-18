import { mount } from '@vue/test-utils';
import { Radio, RadioGroup } from '@nutui/nutui';
import { ref } from 'vue';

test('Radio: v-model & change', async () => {
  const val = ref('');
  const onChange = vi.fn();
  const wrapper = mount(() => {
    return (
      <>
        <RadioGroup v-model={val.value} onChange={onChange}>
          <Radio label="1" />
          <Radio label="2" />
          <Radio label="3" />
          <Radio label="4" />
        </RadioGroup>
      </>
    );
  });

  const items = wrapper.findAll('.nut-radio');
  await items[0].trigger('click');
  expect(val.value).toEqual('1');
  expect(onChange).toBeCalledTimes(1);
  expect(onChange).toBeCalledWith('1');
});

test('Radio: text-position', () => {
  const wrapper = mount(() => {
    return (
      <>
        <RadioGroup textPosition="left">
          <Radio label="1" />
          <Radio label="2" />
          <Radio label="3" />
          <Radio label="4" />
        </RadioGroup>
      </>
    );
  });

  const items = wrapper.findAll('.nut-radio');
  expect(items[0].classes()).toContain('nut-radio--reverse');
});

test('Radio: direction', () => {
  const wrapper = mount(() => {
    return (
      <>
        <RadioGroup direction="horizontal">
          <Radio label="1" />
          <Radio label="2" />
          <Radio label="3" />
          <Radio label="4" />
        </RadioGroup>
      </>
    );
  });

  const item = wrapper.find('.nut-radio-group');
  expect(item.html()).toContain('nut-radio-group--horizontal');
});

test('Radio: disabled', async () => {
  const val = ref('4');
  const onChange = vi.fn();
  const wrapper = mount(() => {
    return (
      <>
        <RadioGroup v-model={val.value} onChange={onChange}>
          <Radio label="1" />
          <Radio label="2" disabled />
          <Radio label="3" />
          <Radio label="4" />
        </RadioGroup>
      </>
    );
  });

  const items = wrapper.findAll('.nut-radio');
  await items[1].trigger('click');
  expect(onChange).toBeCalledTimes(0);
  expect(val.value).toBe('4');
});

test('Radio: icon-size', async () => {
  const wrapper = mount(() => {
    return (
      <>
        <RadioGroup>
          <Radio label="1" iconSize={25} />
          <Radio label="2" iconSize={12} />
        </RadioGroup>
      </>
    );
  });

  const items = wrapper.findAll('.nut-radio');
  expect(items[0].findAll('svg')[0].element.style.width).toEqual('25px');
  expect(items[1].findAll('svg')[0].element.style.height).toEqual('12px');
});

test('Radio: shape', async () => {
  const wrapper = mount(() => {
    return (
      <>
        <RadioGroup>
          <Radio label="1" shape="button" />
          <Radio label="2" />
        </RadioGroup>
      </>
    );
  });

  const items = wrapper.findAll('.nut-radio');
  expect(items[0].classes()).toContain('nut-radio--button');
  expect(items[1].classes()).toContain('nut-radio--round');
});
