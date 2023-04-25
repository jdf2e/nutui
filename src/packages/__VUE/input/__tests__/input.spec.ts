import { mount } from '@vue/test-utils';
import Input from '../index.vue';

test('base', () => {
  const wrapper = mount(Input, { props: { modelValue: '3' } });
  const input = wrapper.find('input');
  expect(input.exists()).toBe(true);
  expect(input.element.value).toBe('3');
});
test('should emit focuse event when input is focus', () => {
  const wrapper = mount(Input);
  wrapper.find('input').trigger('focus');
  expect(wrapper.emitted('focus')).toBeTruthy();
});
test('should emit blur event when input is blur', () => {
  const wrapper = mount(Input);
  wrapper.find('input').trigger('blur');
  expect(wrapper.emitted('blur')).toBeTruthy();
});

test('should render clear icon when using clearable prop', async () => {
  const wrapper = mount(Input, {
    props: {
      clearable: true,
      modelValue: 'test'
    }
  });
  const input = wrapper.find('input');
  await input.trigger('focus');
  wrapper.find('.nut-input-clear').trigger('click');
  expect((wrapper.emitted('update:modelValue') as any)[0][0]).toEqual('');
  expect((wrapper.emitted('clear') as any)[0][0]).toBe('');
});

test('should clear when event clear', async () => {
  const wrapper = mount(Input, {
    props: {
      clearable: true,
      modelValue: 'test'
    }
  });
  const input = wrapper.find('input');
  const clear: any = wrapper.find('.nut-input-clear-box');
  wrapper.find('input').trigger('input');
  expect(input.element.value).toBe('test');
  clear.trigger('click');
  expect(clear.element.style.display).toBe('none');
  expect((wrapper.emitted('update:modelValue') as any)[0][0]).toEqual('');
});
// 测试只能是数字
test('should format input value when type is number', async () => {
  const wrapper = mount(Input, {
    props: {
      type: 'number',
      modelValue: ''
    }
  });
  const input = wrapper.find('input');

  input.element.value = '1';
  input.trigger('input');
  expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['1']);

  input.element.value = '1.1.';
  input.trigger('input');
  expect(wrapper.emitted()['update:modelValue'][1]).toEqual(['1.1']);

  input.element.value = '111qwe';
  input.trigger('input');
  expect(wrapper.emitted()['update:modelValue'][2]).toEqual(['111']);
});

// 测试整数
test('should format input value when type is digit', () => {
  const wrapper = mount(Input, {
    props: {
      type: 'digit',
      modelValue: ''
    }
  });
  const input = wrapper.find('input');

  input.element.value = '1';
  input.trigger('input');
  expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['1']);

  input.element.value = '1.1';
  input.trigger('input');
  expect(wrapper.emitted()['update:modelValue'][1]).toEqual(['1']);
});

test('should require', () => {
  const wrapper = mount(Input, {
    props: {
      required: true
    }
  });
  const input = wrapper.find('.nut-input');
  expect(input.classes()).toContain('nut-input--required');
});

test('should disabled', () => {
  const wrapper = mount(Input, {
    props: {
      disabled: true
    }
  });
  const input = wrapper.find('input');
  expect(input.attributes('disabled')).toBe('');
});

test('should readonly', () => {
  const wrapper = mount(Input, {
    props: {
      readonly: true
    }
  });
  const input = wrapper.find('input');
  expect(input.attributes('readonly')).toBe('');
});

test('should render word limit correctly', () => {
  const wrapper = mount(Input, {
    props: {
      modelValue: '123',
      maxlength: 3,
      showWordLimit: true
    }
  });
  expect(wrapper.find('.nut-input-box').html()).toMatchSnapshot();
});

test('should render word limit correctly when modelValue is null', () => {
  const wrapper = mount(Input, {
    props: {
      modelValue: undefined,
      maxlength: 3,
      showWordLimit: true
    }
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('should inputAlign', () => {
  const wrapper = mount(Input, {
    props: {
      label: '文本',
      inputAlign: 'right'
    }
  });
  const input: any = wrapper.find('.input-text');
  expect(input.element.style.textAlign).toEqual('right');
});
