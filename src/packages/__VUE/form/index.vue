<template>
  <form class="nut-form" @submit="onSubmit">
    <nut-cell-group>
      <slot></slot>
    </nut-cell-group>
  </form>
</template>
<script lang="ts">
import { isPromise } from '@/packages/utils/util';
import { computed, provide, reactive, toRefs, VNode, watch } from 'vue';
import { createComponent } from '../../utils/create';
const { componentName, create } = createComponent('form');
import { FormItemRule } from '../formitem/types';
export type FormRule = {
  prop: string;
  rules: FormItemRule[];
};
export type ErrorMessage = {
  prop: string;
  message: string;
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

    const tipMessage = (errorMsg: ErrorMessage) => {
      formErrorTip.value[errorMsg.prop] = errorMsg.message;
    };

    const checkRule = (item: FormRule): Promise<ErrorMessage | boolean> => {
      const { rules, prop } = item;

      const _Promise = (errorMsg: ErrorMessage): Promise<ErrorMessage> => {
        return new Promise((resolve, reject) => {
          tipMessage(errorMsg);
          resolve(errorMsg);
        });
      };

      const value = props.modelValue[prop];
      // clear tips
      tipMessage({ prop, message: '' });

      while (rules.length) {
        const { required, validator, message } = rules.shift() as FormItemRule;
        const errorMsg = { prop, message };
        if (required) {
          if (!value) {
            return _Promise(errorMsg);
          }
        }
        if (validator) {
          const result = validator(value);
          if (isPromise(result)) {
            return new Promise((r, j) => {
              result.then((res) => {
                if (!res) {
                  tipMessage(errorMsg);
                  r(errorMsg);
                } else {
                  r(true);
                }
              });
            });
          } else {
            if (!result) {
              return _Promise(errorMsg);
            }
          }
        }
      }
      return Promise.resolve(true);
    };

    const validate = () => {
      return new Promise((resolve, reject) => {
        let task = findFormItem(slots.default());

        let errors = task.map((item) => {
          return checkRule(item);
        });

        Promise.all(errors).then((errorRes) => {
          errorRes = errorRes.filter((item) => item != true);
          const res = { valid: true, errors: [] };
          if (errorRes.length) {
            res.valid = false;
            res.errors = errorRes as any;
          }
          resolve(res);
        });
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
