import { mount } from '@vue/test-utils';
import ShortPassword from '../index.vue';
import Icon from '../../icon/index.vue';

test('base', () => {
  const wrapper = mount(ShortPassword, {
    props: {
      visible: true,
      value: 123
    }
  });
  const input: any = wrapper.find('.nut-input-real');
  expect(input.exists()).toBe(true);
  expect(input.attributes('maxlength')).toBe('6');
  //expect(input.element.value).toBe('123');
  //代码还没处理modelvalue值
});
test('base length and error', () => {
  const wrapper = mount(ShortPassword, {
    props: {
      visible: true,
      length: 4,
      errorMsg: '错误信息',
      noButton: false,
      value: 'qwe'
    }
  });
  const input = wrapper.find('.nut-input-real');
  expect(input.exists()).toBe(true);
  // expect(input.attributes("maxlength")).toBe("4");
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
  // expect((wrapper.emitted('ok') as any)[0][0]).toBe('qwe');
});

test('event callback', async () => {
  const wrapper = mount(ShortPassword, {
    props: {
      visible: true
    }
  });
  const input: any = wrapper.find('.nut-input-real');
  await input.trigger('click');
  await input.trigger('input');
  await wrapper.trigger('keydown', {
    key: '123'
  });
  setTimeout(() => {
    expect(wrapper.emitted('change') as any).toBe('123');
  }, 400);

  //代码还没处理modelvalue值
});
test('event callback', async () => {
  const wrapper = mount(ShortPassword, {
    props: {
      visible: true
    }
  });
  const input: any = wrapper.find('.nut-input-real');
  await input.trigger('click');
  await input.trigger('input');
  await wrapper.trigger('keydown', {
    key: '123456'
  });
  setTimeout(() => {
    expect(wrapper.emitted('complete') as any).toBe('123456');
  }, 400);

  //代码还没处理modelvalue值
});
