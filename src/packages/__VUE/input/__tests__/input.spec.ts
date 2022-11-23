import { config, mount } from '@vue/test-utils';
import Input from '../index.vue';
import NutIcon from '../../icon/index.vue';

beforeAll(() => {
  config.global.components = {
    NutIcon
  };
});

afterAll(() => {
  config.global.components = {};
});

test('base', () => {
  const wrapper = mount(Input, { props: { modelValue: 3 } });
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
  // expect(wrapper.find('.nut-input-clear').exists()).toBeTruthy();
  wrapper.find('.nut-input-clear').trigger('click');
  // expect((wrapper.emitted('update:modelValue') as any)[0][0]).toEqual('');
  // expect((wrapper.emitted('handleClear') as any)[0][0]).toBeTruthy();
});

test('should clear when event clear', () => {
  const wrapper = mount(Input, {
    props: {
      clearable: true,
      modelValue: 'test'
    }
  });
  const input = wrapper.find('input');
  const clear = wrapper.find('.nut-input-clear');
  wrapper.find('input').trigger('input');
  clear.trigger('click');
  expect(clear.exists()).toBe(true);
  setTimeout(() => {
    expect(input.element.value).toBe('');
  });
});
// 测试只能是数字
test('should format input value when type is number', () => {
  const wrapper = mount(Input, {
    props: {
      type: 'number',
      modelValue: ''
    }
  });
  const input = wrapper.find('input');

  input.element.value = '1';
  input.trigger('input');
  expect((wrapper.emitted('change') as any)[0][0]).toEqual('1');

  input.element.value = '1.1.';
  input.trigger('input');
  expect((wrapper.emitted('change') as any)[1][0]).toEqual('1.1');

  input.element.value = '111qwe';
  input.trigger('input');
  expect((wrapper.emitted('change') as any)[2][0]).toEqual('111');
});

// 测试小数
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
  expect((wrapper.emitted('change') as any)[0][0]).toEqual('1');

  // input.element.value = '1.1';
  // input.trigger('input');
  // expect((wrapper.emitted('change') as any)[1][0]).toEqual('11');
});

test('should no label', () => {
  const wrapper = mount(Input, {
    props: {}
  });
  const label = wrapper.find('.label-string');
  expect(label.exists()).toBe(false);
});

test('should label', () => {
  const wrapper = mount(Input, {
    props: {
      label: '文本'
    }
  });
  const label = wrapper.find('.label-string');
  expect(label.text()).toBe('文本');
});

test('should label-class', () => {
  const wrapper = mount(Input, {
    props: {
      label: '文本',
      labelClass: 'test-class'
    }
  });
  const label = wrapper.find('.nut-input-label');
  expect(label.classes()).toContain('test-class');
});

test('should colon', () => {
  const wrapper = mount(Input, {
    props: {
      label: 'test',
      colon: true
    }
  });
  expect(wrapper.find('.nut-input-label').html()).toMatchSnapshot();
});

test('should require', () => {
  const wrapper = mount(Input, {
    props: {
      required: true
    }
  });
  const input = wrapper.find('.nut-input');
  expect(input.classes()).toContain('nut-input-required');
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
  expect(wrapper.find('.nut-input-word-limit').html()).toMatchSnapshot();
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

test('should labelAlign', () => {
  const wrapper = mount(Input, {
    props: {
      label: '文本',
      labelAlign: 'right'
    }
  });
  const input: any = wrapper.find('.nut-input-label');
  expect(input.element.style.textAlign).toEqual('right');
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
