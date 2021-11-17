<template>
  <form class="nut-form" @submit="onSubmit">
    <nut-cell-group>
      <slot></slot>
    </nut-cell-group>
  </form>
</template>
<script lang="ts">
import { isFunction, isPromise } from '@/packages/utils/util';
import { computed, provide, reactive, toRefs, VNode, watch } from 'vue';
import { createComponent } from '../../utils/create';
const { componentName, create } = createComponent('form');
import { FormItemRule } from '../formitem/types';
export type FormRule = {
  prop: string;
  rules: FormItemRule[];
};
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
    const formErrorTip = computed(() => reactive<any>({}));
    provide('formErrorTip', formErrorTip);

    const init = (value = props.modelValue) => {
      Object.keys(value).forEach((item) => {
        formErrorTip.value[item] = '';
      });
    };

    const reset = () => {
      init();
    };

    watch(
      () => props.modelValue,
      (value: any) => {
        init(value);
      },
      { immediate: true }
    );

    const findFormItem = (vnodes: VNode[]) => {
      let task: FormRule[] = [];
      vnodes.forEach((vnode: VNode, index: number) => {
        let type = vnode.type;
        type = (type as any).name || type;
        if (type == 'nut-form-item') {
          task.push({
            prop: vnode.props?.['prop'],
            rules: vnode.props?.['rules'] || []
          });
        }
      });
      return task;
    };
    const tipMessage = (prop: string, message: string) => {
      console.log(prop, message);
      formErrorTip.value[prop] = message;
    };

    const validate = () => {
      return new Promise((resolve, reject) => {
        let task = findFormItem(slots.default());
        let error = 0;
        task.forEach(({ rules, prop }: FormRule) => {
          let value = props.modelValue[prop];
          tipMessage(prop, '');
          for (let index = 0; index < rules.length; index++) {
            const { required, validator, message } = rules[index];
            if (required) {
              if (!value) {
                error++;
                tipMessage(prop, message);
                return;
              }
            }
            if (validator) {
              let result = validator(value);
              if (isPromise(result)) {
                result.then((res) => {
                  if (!res) {
                    error++;
                    tipMessage(prop, message);
                    return;
                  }
                });
              } else {
                if (!result) {
                  error++;
                  tipMessage(prop, message);
                  return;
                }
              }
            }
          }
        });
        // 控制异步的校验，bug
        resolve(!error);
      });
    };
    const onSubmit = () => {
      validate();
      return false;
    };
    return { validate, reset, onSubmit, formErrorTip };
  }
});
</script>
