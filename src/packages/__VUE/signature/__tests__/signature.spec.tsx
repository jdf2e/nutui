import { mount } from '@vue/test-utils';
import Signature from '../index.vue';
import { createCanvas } from '@napi-rs/canvas';

test('props custom-class', async () => {
  const wrapper = mount(() => {
    return <Signature customClass="test" line-lineWidth={5} strokeStyle="#333"></Signature>;
  });
  const signatureWrapper = wrapper.find('.nut-signature');
  expect(signatureWrapper.classes()).toContain('test');

  const canvas = createCanvas(400, 400);
  const ctx = canvas.getContext('2d');
  ctx.lineWidth = 5;
  ctx.strokeStyle = '#333';
  ctx.beginPath();
  ctx.lineTo(10, 50);
  ctx.lineTo(80, 120);
  ctx.stroke();
  const _img = document.createElement('img');
  _img.src = canvas.toDataURL();
  expect(canvas.toDataURL()).toMatchSnapshot();
});
