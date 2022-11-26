import NumberKeyboard from '../index.vue';
import NutPopup from '../../popup/index.vue';
import { config, mount } from '@vue/test-utils';
import { trigger, mockScrollTop } from './../../../utils/unit';

beforeAll(() => {
  config.global.components = {
    NutPopup
  };
});

afterAll(() => {
  config.global.components = {};
});

function clickKey(key: Parameters<typeof trigger>[0]) {
  trigger(key, 'touchstart');
  trigger(key, 'touchend');
}

test('should emit input event after clicking number key', async () => {
  const wrapper = mount(NumberKeyboard, {
    props: {
      visible: true,
      teleportDisable: false
    }
  });
  clickKey(wrapper.findAll('.key')[0]);
  expect(wrapper.emitted('input')![0]).toEqual([1]);
  wrapper.unmount();
});
test('should shuffle key order when using random-key prop', async () => {
  const wrapper = mount(NumberKeyboard, {
    props: {
      visible: true,
      teleportDisable: false,
      randomKeys: true
    }
  });
  //随机数无法跑快照，每次生成都不同
  //   expect(wrapper.html()).toMatchSnapshot();
  const keys: number[] = [];
  const clickKeys: number[] = [];

  for (let i = 0; i < 9; i++) {
    keys.push(i + 1);
    clickKey(wrapper.findAll('.key')[i]);
    clickKeys.push(wrapper.emitted<number[]>('input')![i][0]);
  }

  expect(keys.every((v, k) => keys[k] === clickKeys[k])).toEqual(false);
});
test('should emit delete event after clicking delete key', () => {
  const wrapper = mount(NumberKeyboard, {
    props: {
      visible: true,
      teleportDisable: false
    }
  });
  clickKey(wrapper.findAll('.key')[11]);
  expect(wrapper.emitted('delete')).toBeTruthy();
});
test('should emit close event after clicking collapse key', () => {
  const wrapper = mount(NumberKeyboard, {
    props: {
      visible: true,
      teleportDisable: false
    }
  });
  clickKey(wrapper.findAll('.key')[9]);
  expect(wrapper.emitted('close')).toBeTruthy();
});

test('should emit close event after clicking close button', () => {
  const wrapper = mount(NumberKeyboard, {
    props: {
      visible: true,
      teleportDisable: false,
      type: 'rightColumn'
    }
  });
  clickKey(wrapper.find('.key-board-finish'));
  expect(wrapper.emitted('close')).toBeFalsy();
});

test('should render title and close button correctly', () => {
  const wrapper = mount(NumberKeyboard, {
    props: {
      visible: true,
      teleportDisable: false,
      title: '默认键盘'
    }
  });
  let title = wrapper.find('.tit');
  expect(title.html()).toContain('默认键盘');
});

test('should render finish button correctly', () => {
  const wrapper = mount(NumberKeyboard, {
    props: {
      visible: true,
      teleportDisable: false,
      type: 'rightColumn',
      confirmText: '支付'
    }
  });
  let title = wrapper.find('.finish');
  expect(title.html()).toContain('支付');
});

test('should emit "update:modelValue" event after clicking key', () => {
  const wrapper = mount(NumberKeyboard, {
    props: {
      visible: true,
      teleportDisable: false,
      maxlength: 6
    }
  });
  const keys = wrapper.findAll('.key');

  clickKey(keys[0]);
  expect(wrapper.emitted('update:value')![0]).toEqual(['1']);

  clickKey(keys[1]);
  expect(wrapper.emitted('update:value')![1]).toEqual(['2']);
});
