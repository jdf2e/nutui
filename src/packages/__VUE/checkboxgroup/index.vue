<script lang="ts">
import {
  h,
  watch,
  provide,
  computed,
  ComponentInternalInstance,
  reactive,
  ComponentPublicInstance
} from 'vue';
import { createComponent } from '@/packages/utils/create';
import { useExpose } from '@/packages/utils/useExpose/index';
const { create, componentName } = createComponent('checkboxgroup');

export default create({
  props: {
    modelValue: {
      type: Array,
      default: () => []
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['change', 'update:modelValue'],
  setup(props, { slots, emit }) {
    const state = reactive({
      children: [] as ComponentPublicInstance[]
    });

    const relation = (child: ComponentInternalInstance) => {
      if (child.proxy) {
        state.children.push(child.proxy);
      }
    };

    const updateValue = (value: any[]) => {
      emit('update:modelValue', value);
    };

    const toggleAll = (checked: boolean) => {
      let values: any[] = [];
      if (!!checked) {
        state.children.forEach((item: any) => {
          values.push(item?.label);
        });
      }
      emit('update:modelValue', values);
    };

    provide('parent', {
      value: computed(() => props.modelValue),
      disabled: props.disabled,
      updateValue,
      relation
    });

    watch(
      () => props.modelValue,
      value => {
        emit('change', value);
      }
    );

    useExpose({ toggleAll });

    return () => {
      return h(
        'view',
        {
          class: `${componentName}`
        },
        slots.default?.()
      );
    };
  }
});
</script>
