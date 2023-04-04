import { mount } from '@vue/test-utils';
import Watermark from '../index.vue';
import { nextTick } from 'vue';

test('render fullPage props ', async () => {
  const wrapper = mount(() => {
    return <Watermark font-color="#fa2c19" content="nut-ui"></Watermark>;
  });
  await nextTick();

  expect(wrapper.findAll('.nut-watermark').length).toBe(1);
  expect(wrapper.findAll('.nut-watermark-full-page').length).toBe(1);
});
// test('should render watermark', () => {
//   const wrapper = mount({
//     components: {
//       'nut-cell': Cell,
//       'nut-watermark': Watermark
//     },
//     template: `
//       <nut-cell>
//         <nut-watermark :fullPage="false" font-color="#fa2c19" content="nut-ui"></nut-watermark>
//       </nut-cell>
//     `,
//     setup() {}
//   });
//   expect(wrapper.html()).toMatchSnapshot();
// });
