import { mount, config } from '@vue/test-utils';
import Textarea from '../index.vue';
import { nextTick, ref } from 'vue';

// 所有的测试用例之前执行一次
beforeAll(() => {
  config.global.components = {
    NutTextarea: Textarea
  };
});
// 所有的测试用例之后执行一次
afterAll(() => {
  config.global.components = {};
});

test('props v-model', async () => {
  const component = {
    template: `<nut-textarea v-model="value" />`,
    setup() {
      const value = ref('618');
      return {
        value
      };
    }
  };
  const wrapper = mount(component);
  await nextTick();
  const txtWrapper = wrapper.find('.nut-textarea__textarea').element as HTMLTextAreaElement;
  expect(txtWrapper.value).toBe('618');
});

test('props placeholder	max-length rows limit-show', async () => {
  const component = {
    template: `<nut-textarea v-model="value" :placeholder="placeholder" :max-length="maxLength" :limit-show="limitShow" :rows="rows"/>`,
    setup() {
      const value = ref('123456');
      const placeholder = ref('test');
      const maxLength = ref(3);
      const limitShow = ref(true);
      const rows = ref('5');
      return {
        value,
        placeholder,
        maxLength,
        limitShow,
        rows
      };
    }
  };
  const wrapper = mount(component);
  await nextTick();
  const txtWrapper = wrapper.find('.nut-textarea__textarea').element as HTMLTextAreaElement;
  expect(txtWrapper.placeholder).toBe(wrapper.vm.placeholder);
  expect(txtWrapper.value).toBe('123');
  expect(wrapper.find('.nut-textarea__textarea').attributes('rows')).toBe(wrapper.vm.rows);
  expect(wrapper.findAll('.nut-textarea__limit')).toHaveLength(1);
});

test('props autosize text-align autofocus', async () => {
  const component = {
    template: `<nut-textarea v-model="value" :autosize="autosize" :text-align="textAlign" :autofocus="autofocus"/>`,
    setup() {
      const value = ref('123456');
      const autosize = ref(true);
      const textAlign = ref('right');
      const autofocus = ref(true);
      return {
        value,
        autosize,
        textAlign,
        autofocus
      };
    }
  };
  const wrapper = mount(component);
  await nextTick();
  const txtWrapper = wrapper.find('.nut-textarea__textarea').element as HTMLTextAreaElement;
  expect(txtWrapper.style.textAlign).toBe(wrapper.vm.textAlign);
  expect(wrapper.find('.nut-textarea__textarea').attributes('autofocus')).not.toBeUndefined();
});

test('props readonly disabled', async () => {
  const component = {
    template: `<nut-textarea v-model="value" readonly="readonly" :disabled="disabled"/>`,
    setup() {
      const value = ref('123456');
      const readonly = ref(true);
      const disabled = ref(true);
      return {
        value,
        readonly,
        disabled
      };
    }
  };
  const wrapper = mount(component);
  await nextTick();
  const txtWrapper = wrapper.find('.nut-textarea__textarea');
  expect(txtWrapper.attributes('readonly')).not.toBeUndefined();
  expect(txtWrapper.attributes('disabled')).not.toBeUndefined();
});

test('should emit change event when textarea is change', () => {
  const wrapper = mount(Textarea);
  wrapper.find('textarea').trigger('input');
  expect(wrapper.emitted('change')).toBeTruthy();
});

test('should emit focuse event when textarea is focus', () => {
  const wrapper = mount(Textarea);
  wrapper.find('textarea').trigger('focus');
  expect(wrapper.emitted('focus')).toBeTruthy();
});

test('should emit blur event when textarea is blur', () => {
  const wrapper = mount(Textarea);
  wrapper.find('textarea').trigger('blur');
  expect(wrapper.emitted('blur')).toBeTruthy();
});
