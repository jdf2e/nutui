import { mount, config } from '@vue/test-utils';
import Signature from '../index.vue';
import NutIcon from '../../icon/index.vue';
import NutButton from '../../button/index.vue';
import { nextTick, reactive, toRefs } from 'vue';
import { Canvas, createCanvas } from 'canvas';

// 所有的测试用例之前执行一次
beforeAll(() => {
  config.global.components = {
    NutSignature: Signature,
    NutIcon,
    NutButton
  };
});
// 所有的测试用例之后执行一次
afterAll(() => {
  config.global.components = {};
});

test('props custom-class', async () => {
  const component = {
    template: `<nut-signature :custom-class="customClass" :line-width="lineWidth" :stroke-style="strokeStyle"></nut-signature>`,
    setup() {
      const data = reactive({
        customClass: 'test',
        lineWidth: 5,
        strokeStyle: '#333',
        imgUrl: ''
      });

      const confirm = (canvas: any, url: string) => {
        const img = document.createElement('img');
        img.src = url;
        data.imgUrl = url;
        (document.querySelector('.test') as Element).appendChild(img);
      };
      const clear = () => {
        const img = document.querySelector('.test img');
        if (img) {
          img.remove();
        }
      };
      return {
        ...toRefs(data),
        confirm,
        clear
      };
    }
  };
  const wrapper = mount(component);
  await nextTick();
  const signatureWrapper = wrapper.findAll('.nut-signature');
  expect(signatureWrapper[0].classes()).toContain(wrapper.vm.customClass);

  const canvas = createCanvas(200, 200);
  const ctx = canvas.getContext('2d');
  ctx.lineWidth = wrapper.vm.lineWidth;
  ctx.strokeStyle = wrapper.vm.strokeStyle;
  ctx.beginPath();
  ctx.lineTo(10, 50);
  ctx.lineTo(80, 120);
  ctx.stroke();
  const _img = document.createElement('img');
  _img.src = canvas.toDataURL();
  expect(canvas.toDataURL()).not.toBeNull();
  expect(wrapper.html()).toMatchSnapshot();
});
