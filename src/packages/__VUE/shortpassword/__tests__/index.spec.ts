import { config, DOMWrapper, mount } from '@vue/test-utils';
import ShortPassword from '../index.vue';
import { nextTick } from 'vue';
import NutIcon from '../../icon/index.vue';
import NutPopup from '../../popup/index.vue';

beforeAll(() => {
  config.global.components = {
    NutIcon,
    NutPopup
  };
});

afterAll(() => {
  config.global.components = {};
});

test('should render shortpassword when visible is true', async () => {
  const wrapper = mount(ShortPassword, {
    props: {
      visible: false,
      modelValue: '123',
      teleportDisable: false
    }
  });
  const input: DOMWrapper<Element> = wrapper.find('.nut-input-real');
  expect(input.exists()).toBe(true);
  expect(input.attributes('maxlength')).toBe('6');
  const psdLength = wrapper.findAll('.nut-shortpsd-li');
  expect(psdLength.length).toBe(6);
  expect((input.element as HTMLInputElement).value).toBe('123');
});
test('should render buttonShortpassword and error msg when noButton is false ', () => {
  const wrapper = mount(ShortPassword, {
    props: {
      visible: true,
      errorMsg: '错误信息',
      length: 4,
      modelValue: '123',
      noButton: false,
      teleportDisable: false
    }
  });
  const input = wrapper.find('.nut-input-real');
  expect(input.exists()).toBe(true);
  const psdLength = wrapper.findAll('.nut-shortpsd-li');
  expect(psdLength.length).toBe(4);
  const error = wrapper.find('.nut-shortpsd-error');
  expect(error.exists()).toBe(true);
  expect(error.text()).toBe('错误信息');
  const cancle = wrapper.find('.nut-shortpsd-cancle');
  expect(cancle.exists()).toBe(true);
  const sure = wrapper.find('.nut-shortpsd-sure');
  expect(sure.exists()).toBe(true);
  cancle.trigger('click');
  expect(wrapper.emitted('cancel')).toBeTruthy();
  sure.trigger('click');
  expect((wrapper.emitted('ok') as any)[0][0]).toBe('123');
});

test('should change  value when prop changed', async () => {
  const wrapper = mount(ShortPassword, {
    props: {
      visible: true,
      modelValue: '777',
      teleportDisable: false
    }
  });
  expect((wrapper.emitted('update:modelValue') as any)[0][0]).toEqual('777');
  await wrapper.setProps({ modelValue: '456' });
  expect((wrapper.emitted('update:modelValue') as any)[1][0]).toEqual('456');
});

test('should format input value when input', async () => {
  const wrapper = mount(ShortPassword, {
    props: {
      visible: true,
      modelValue: '',
      teleportDisable: false
    }
  });
  const div: DOMWrapper<Element> = wrapper.find('.nut-shortpsd-fake');
  const input: DOMWrapper<Element> = wrapper.find('.nut-input-real');
  (input.element as HTMLInputElement).value = '123';
  div.trigger('click');
  input.trigger('input');
  await nextTick();
  expect((wrapper.emitted('update:modelValue') as any)[0][0]).toEqual('');
  expect((wrapper.emitted('update:modelValue') as any)[1][0]).toEqual('123');
  (input.element as HTMLInputElement).value = '456';
  input.trigger('input');
  expect((wrapper.emitted('update:modelValue') as any)[2][0]).toEqual('456');
  (input.element as HTMLInputElement).value = 'abc';
  input.trigger('input');
  expect((wrapper.emitted('update:modelValue') as any)[3][0]).toEqual('');
});

test('should output input value when finish', async () => {
  const wrapper = mount(ShortPassword, {
    props: {
      visible: true,
      modelValue: '',
      teleportDisable: false
    }
  });
  const div: DOMWrapper<Element> = wrapper.find('.nut-shortpsd-fake');
  const input: DOMWrapper<Element> = wrapper.find('.nut-input-real');
  (input.element as HTMLInputElement).value = '321123';
  div.trigger('click');
  input.trigger('input');
  await nextTick();
  expect((wrapper.emitted('complete') as any)[0][0]).toEqual('321123');
});
