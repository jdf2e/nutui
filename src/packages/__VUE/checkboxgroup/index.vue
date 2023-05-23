<script lang="ts">
import { h, watch, provide, computed, ComponentInternalInstance, reactive, ComponentPublicInstance } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { useExpose } from '@/packages/utils/useExpose/index';
const { create, componentName } = createComponent('checkbox-group');

export default create({
  props: {
    modelValue: {
      type: Array,
      default: () => []
    },
    disabled: {
      type: Boolean,
      default: false
    },
    max: {
      type: Number,
      default: 0
    }
  },
  emits: ['change', 'update:modelValue'],
  setup(props, { slots, emit }) {
    const state = reactive({
      children: [] as ComponentPublicInstance[]
    });

    const link = (child: ComponentInternalInstance) => {
      child.proxy && state.children.push(child.proxy);
    };

    const unlink = (child: ComponentInternalInstance) => {
      child.proxy && (state.children = state.children.filter((p) => p !== child.proxy));
    };

    const updateValue = (value: string[]) => {
      emit('update:modelValue', value);
      emit('change', value);
    };

    const toggleAll = (checked: boolean) => {
      const values: string[] = [];
      if (checked) {
        state.children.forEach((item: any) => {
          if (!item?.disabled) {
            values.push(item?.label);
          }
        });
      }
      emit('update:modelValue', values);
    };

    const toggleReverse = () => {
      const value = state.children
        .filter((item: any) => {
          if (item?.disabled) {
            return false;
          } else {
            return !props.modelValue.includes(item.label);
          }
        })
        .map((item: any) => item.label);
      emit('update:modelValue', value);
    };

    provide('parent', {
      value: computed(() => props.modelValue),
      disabled: computed(() => props.disabled),
      max: computed(() => props.max),
      updateValue,
      link,
      unlink
    });

    watch(
      () => props.modelValue,
      (value) => {
        emit('change', value);
      }
    );

    useExpose({ toggleAll, toggleReverse });

    return () => {
      return h(
        'view',
        {
          class: componentName
        },
        slots.default?.()
      );
    };
  }
});
</script>
