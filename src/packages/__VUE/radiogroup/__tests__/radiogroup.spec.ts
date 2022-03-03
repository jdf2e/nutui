import { mount } from '@vue/test-utils';
import RadioGroup from '../index.vue';
import { h, ref } from 'vue';

test('prop modelValue', () => {
  const wrapper = mount(RadioGroup, {
    props: {
      modelValue: '1'
    }
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('should emit "update:modelValue" and "change" event when radio is clicked', async () => {
  const wrapper = mount({
    emits: ['change'],
    setup(props, { emit }) {
      return {
        result: ref('一'),
        list: ['一', '二', '三'],
        emit,
        change(value: string) {
          emit('change', value);
        }
      };
    },
    render: () => {
      return h(RadioGroup, {
        onChange: (value: string) => (this as any).emit('change', value)
      });
    }
  });
});
