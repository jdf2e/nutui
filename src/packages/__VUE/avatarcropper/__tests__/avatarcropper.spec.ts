import 'vitest-canvas-mock';
import { mount } from '@vue/test-utils';
import AvatarCropper from '../index.vue';
import { sleep } from '@/packages/utils/unit';

const mockFile = new File([new ArrayBuffer(10000)], 'test.jpg', {
  type: 'test'
});

test('layout default slot', () => {
  const wrapper = mount(AvatarCropper, {
    slots: {
      default: 'Main Content'
    }
  });

  expect(wrapper.find('.nut-avatar-cropper').html()).toContain('Main Content');
});

test('should render base cutAvatar and type', async () => {
  const wrapper = mount(AvatarCropper);
  const up_load = wrapper.find('.nut-avatar-cropper');
  expect(up_load.exists()).toBe(true);
  const up_load1 = wrapper.find('.nut-avatar-cropper__input');
  expect(up_load1.attributes().type).toBe('file');
});

test('AvatarCropper: Select the image to open the crop window', async () => {
  const wrapper = mount(AvatarCropper);
  const input: any = wrapper.find<HTMLInputElement>('.nut-avatar-cropper__input');
  expect(input.exists()).toBe(true);
  const smallFile = new File([new ArrayBuffer(100)], 'small.jpg');
  Object.defineProperty(input.element, 'files', {
    get: vi.fn().mockReturnValue([mockFile, smallFile])
  });
  expect(wrapper.find('.nut-cropper-popup').exists()).toBe(false);
  await input.trigger('change');
  expect(wrapper.emitted('change')).toBeTruthy();
  await sleep();
  expect(wrapper.find('.nut-cropper-popup').exists()).toBe(true);
  const canvas = wrapper.find('.nut-cropper-popup__canvas');
  expect(canvas.exists()).toBe(true);

  const btns = wrapper.findAll('.nut-cropper-popup__btns-item');
  expect(btns.length).toBe(4);

  const cancel = btns[0];
  cancel.trigger('click');
  expect(wrapper.emitted('cancel')).toBeTruthy();
  expect(input.element.value).toBe('');
  await sleep();
  expect(wrapper.find('.nut-cropper-popup').exists()).toBe(false);

  const resetAngle = btns[1];
  resetAngle.trigger('click');
  expect(wrapper.vm.angle).toBe(0);

  const setAngle = btns[2];
  setAngle.trigger('click');
  expect(wrapper.vm.angle).toBe(90);
  setAngle.trigger('click');
  expect(wrapper.vm.angle).toBe(180);
  setAngle.trigger('click');
  setAngle.trigger('click');
  expect(wrapper.vm.angle).toBe(0);

  const confirm = btns[3];
  confirm.trigger('click');
  expect(wrapper.emitted('confirm')).toBeTruthy();
});
