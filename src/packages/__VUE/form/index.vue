<template>
  <form class="nut-form" @submit="onSubmit">
    <nut-cell-group>
      <slot></slot>
    </nut-cell-group>
  </form>
</template>
<script lang="ts">
import { toRefs, VNode, watch } from 'vue';
import { createComponent } from '../../utils/create';
const { componentName, create } = createComponent('form');

export default create({
  props: {
    modelValue: {
      type: Object,
      default: {}
    }
  },
  components: {},
  emits: ['submit', 'failed'],

  setup(props, { emit, slots }) {
    console.log('componentName', componentName);
    const onSubmit = () => {
      emit('submit');
      return false;
    };

    const findFormItem = (vnodes: VNode[]) => {
      vnodes.forEach((vnode: VNode, index: number) => {
        let type = vnode.type;
        type = (type as any).name || type;
        if (type == 'nut-form-item') {
          console.log(vnode.props?.['prop'], vnode.props?.['rules'] || []);
        }
      });
    };

    watch(
      () => slots.default(),
      (vnodes: VNode[]) => {
        findFormItem(vnodes);
      }
    );
    const validate = () => {
      debugger;
    };
    const reset = () => {
      debugger;
    };

    findFormItem(slots.default());

    return { validate, reset, onSubmit };
  }
});
</script>
