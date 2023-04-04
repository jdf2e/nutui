import NumberKeyboard from '../index.vue';
import { mount } from '@vue/test-utils';
import { nextTick } from 'vue';

test('should emit input event after clicking number key', async () => {
  const wrapper = mount(NumberKeyboard, {
    props: {
      visible: true
    }
  });
  const key = wrapper.findAll('.nut-key')[0];
  key.trigger('touchstart');
  expect(wrapper.emitted().input[0]).toEqual([1]);
});

// test('should shuffle key order when using random-key prop', async () => {
//   const wrapper = mount(NumberKeyboard, {
//     props: {
//       visible: true
//       randomKeys: true
//     }
//   });
// });

test('should emit delete event after clicking delete key', async () => {
  const wrapper = mount(NumberKeyboard, {
    props: {
      visible: true
    }
  });
  const key = wrapper.findAll('.nut-key')[11];
  key.trigger('touchstart');
  await nextTick();
  expect(wrapper.emitted().delete[0]).toBeTruthy();
});

test('should emit close event after clicking collapse key', () => {
  const wrapper = mount(NumberKeyboard, {
    props: {
      visible: true
    }
  });
  const key = wrapper.findAll('.nut-key')[9];
  key.trigger('touchstart');
  expect(wrapper.emitted().close[0]).toBeTruthy();
});

test('should emit close event after clicking close button', async () => {
  const wrapper = mount(NumberKeyboard, {
    props: {
      title: '标题',
      visible: true,
      type: 'default'
    }
  });
  const close = wrapper.find('.nut-number-keyboard__close');
  close.trigger('click');
  expect(wrapper.emitted().close[0]).toBeTruthy();
});

test('should render title and close button correctly', () => {
  const wrapper = mount(NumberKeyboard, {
    props: {
      visible: true,
      title: '默认键盘'
    }
  });
  const title = wrapper.find('.nut-number-keyboard__title');
  expect(title.element.innerHTML).toEqual('默认键盘');
});

test('should render finish button correctly', () => {
  const wrapper = mount(NumberKeyboard, {
    props: {
      visible: true,
      type: 'rightColumn',
      confirmText: '支付'
    }
  });
  const title = wrapper.find('.nut-key--finish');
  expect(title.html()).toContain('支付');
});

test('should emit "update:modelValue" event after clicking key', () => {
  const wrapper = mount(NumberKeyboard, {
    props: {
      visible: true,
      maxlength: 6
    }
  });
  const keys = wrapper.findAll('.nut-key');
  keys[0].trigger('touchstart');
  expect(wrapper.emitted().input[0]).toEqual([1]);

  keys[1].trigger('touchstart');
  expect(wrapper.emitted().input[1]).toEqual([2]);
});
