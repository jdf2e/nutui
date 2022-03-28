import { mount } from '@vue/test-utils';
import { nextTick, reactive, toRefs } from 'vue';
import Range from '../index.vue';
import { trigger, triggerDrag } from '../../../utils/test/event';

test('should render range when used ', async () => {
  const wrapper = mount(Range, {
    props: {
      modelValue: 30
    }
  });
  let inner = wrapper.find<HTMLElement>('.nut-range-button .number');
  expect(inner.text()).toBe('30');
});

test('should render two buttons when use range props', async () => {
  const wrapper = mount(Range, {
    props: {
      modelValue: [30, 70],
      range: true
    }
  });
  let left = wrapper.find<HTMLElement>('.nut-range-button-wrapper-left .number');
  let right = wrapper.find<HTMLElement>('.nut-range-button-wrapper-right .number');
  expect(left.text()).toBe('30');
  expect(right.text()).toBe('70');
});

test('should set min and max when use min and max props', async () => {
  const wrapper = mount(Range, {
    props: {
      modelValue: 0,
      max: 10,
      min: -10,
      range: true
    }
  });

  let min = wrapper.find<HTMLElement>('.min');
  let max = wrapper.find<HTMLElement>('.max');
  let btn = wrapper.find<HTMLElement>('.nut-range-button-wrapper-left .number');
  expect(min.text()).toBe('-10');
  expect(max.text()).toBe('10');
  expect(btn.text()).toBe('');
});

test('should change color template when use color props', async () => {
  const wrapper = mount(Range, {
    props: {
      modelValue: 10,
      inactiveColor: 'rgb(163,184,255)',
      buttonColor: 'rgb(52,96,250)',
      activeColor: 'rgb(238, 238, 238)'
    }
  });
  await nextTick();
  let root = wrapper.find<HTMLElement>('.nut-range');
  let bar = wrapper.find<HTMLElement>('.nut-range-bar');
  let btn = wrapper.find<HTMLElement>('.nut-range-button');
  expect(root.element.style.backgroundColor).toEqual('rgb(163, 184, 255)');
  expect(bar.element.style.background).toEqual('rgb(238, 238, 238)');
  expect(btn.element.style.borderColor).toEqual('rgb(52,96,250)');
});

test('should render slots template when use slots', async () => {
  const wrapper = mount(Range, {
    props: {
      modelValue: 10
    },
    slots: {
      button: '<div class="test_div">btn</div>'
    }
  });
  let btn = wrapper.find<HTMLElement>('.nut-range-button-wrapper');
  expect(btn.html()).toContain('<div class="test_div">btn</div>');
});

test('should not render elements  when use hidden elements props', async () => {
  const wrapper = mount(Range, {
    props: {
      modelValue: 10,
      hiddenRange: true,
      hiddenTag: true
    }
  });
  expect(wrapper.find<HTMLElement>('.nut-range-button').exists()).toBe(true);
  expect(wrapper.find<HTMLElement>('.min').exists()).toBe(false);
  expect(wrapper.find<HTMLElement>('.max').exists()).toBe(false);
  expect(wrapper.find<HTMLElement>('.nut-range-button .number').exists()).toBe(false);
});

test('should not allow to click slider when disabled', async () => {
  const wrapper = mount(Range, {
    props: {
      modelValue: 10,
      disabled: true
    }
  });
  let range = wrapper.find('.nut-range');
  trigger(range, 'click', 100, 0);
  expect(wrapper.emitted('change')).toBeFalsy();
});

test('should emit "change" event after dragging button', () => {
  const wrapper = mount(Range, {
    props: {
      modelValue: 10
    }
  });

  const button = wrapper.find('.nut-range-button');
  triggerDrag(button, 50, 0);
  expect(wrapper.emitted('change')!.pop()).toEqual([100]);
});
test('should emit "update:modelValue" event after dragging button', () => {
  const wrapper = mount(Range, {
    props: {
      modelValue: 10
    }
  });

  const button = wrapper.find('.nut-range-button');
  triggerDrag(button, 50, 0);
  expect(wrapper.emitted('update:modelValue')!.pop()).toEqual([100]);
});
