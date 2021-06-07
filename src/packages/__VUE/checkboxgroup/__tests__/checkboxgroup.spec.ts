import { mount } from '@vue/test-utils';
import Checkboxgroup from '../index.vue';
import Checkbox from '../../checkbox/index.vue';
import { h } from '@vue/runtime-core';

test('prop label', () => {
  const wrapper = mount(Checkboxgroup, {
    props: {
      disabled: true
    }
  });
  expect(wrapper.html()).toMatchSnapshot();
});

// test('should emit "update:modelValue" event when checkbox is clicked', async () => {
//   const wrapper = mount(Checkboxgroup, {
//     slots: {
//       default: () => {
//         return h(
//           'nut-checkbox',
//           {
//             modelValue: 'false',
//             label: '1'
//           }
//         )
//       }
//     }
//   });

//   expect(wrapper.html()).toContain('abc');

// const items = wrapper.findAll('.nut-checkbox');
// console.log('blabla', wrapper)

// await items[0].trigger('click');
// expect(wrapper.vm).toContain('ballll')

// await items[1].trigger('click');
// expect(wrapper.vm.value).toEqual(['1', '2']);

// await items[0].trigger('click');
// expect(wrapper.vm.value).toEqual(['2']);
// });
