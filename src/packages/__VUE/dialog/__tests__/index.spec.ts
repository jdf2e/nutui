import { config, mount } from '@vue/test-utils';
import DialogTemplate from '../index.vue';
import Overlay from '../../overlay/index.vue';

beforeAll(() => {
  config.global.components = {
    [Overlay.name]: Overlay
  };
});

beforeEach(() => {
  // create teleport target
  const el = document.createElement('div');
  el.id = 'app';
  document.body.appendChild(el);
});

afterEach(() => {
  // clean up
  document.body.outerHTML = '';
});

test('should render dialog template', async () => {
  const wrapper = mount(DialogTemplate, {
    props: {
      title: 't1',
      content: 'c1'
    }
  });

  const overLay = wrapper.getComponent(Overlay);
  expect(await overLay.find('.nut-dialog__content'));
});

test('header slot', async () => {
  const wrapper = mount(DialogTemplate, {
    slots: {
      header: 'test-title'
    }
  });

  const overLay = wrapper.getComponent(Overlay);
  expect(await overLay.find('.nut-dialog__header'));
});

// test('should render dialog methods', async () => {
// Dialog({
//   title: '基础弹框',
//   content: '支持函数调用和组件调用两种方式。',
//   onCancel,
//   onOk
// });
// const overLay = wrapper.getComponent(Overlay);
// expect(await overLay.find('.nut-dialog__content'))
// });
