import { config, mount } from '@vue/test-utils';
import Picker from '../index.vue';
import NutIcon from '../../icon/index.vue';
import NutPupup from '../../popup/index.vue';
import NutPickerColumn from '../Column.vue';
import { nextTick, toRefs, reactive, ref, onMounted } from 'vue';

beforeAll(() => {
  config.global.components = {
    NutIcon,
    NutPupup,
    NutPickerColumn
  };
});

afterAll(() => {
  config.global.components = {};
});

// const simpleColumn = ['1990', '1991', '1992', '1993', '1994', '1995'];
// const columns = [
//   {
//     values: ['vip', 'normal'],
//     className: 'column1'
//   },
//   {
//     values: simpleColumn,
//     className: 'column2'
//   }
// ];

// test('base', async () => {
//   const wrapper = mount(Picker, {
//     props: {
//       modelVisible: true,
//       listData: []
//     }
//   });
//   await nextTick();
// });
