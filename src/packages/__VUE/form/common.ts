import { getPropByPath, isFunction, isObject, isPromise } from '@/packages/utils/util';
import { computed, provide, reactive, VNode, watch } from 'vue';
import { FormItemRule } from '../formitem/types';
import { ErrorMessage, FormRule } from './types';

export const component = {
  props: {
    modelValue: {
      type: Object,
      default: {}
    }
  },
  components: {},
  emits: ['validate'],

  setup(props: any, { emit, slots }: any) {
    const formErrorTip = computed(() => reactive<any>({}));
    provide('formErrorTip', formErrorTip);
    const clearErrorTips = (value = props.modelValue) => {
      Object.keys(formErrorTip.value).forEach((item) => {
        formErrorTip.value[item] = '';
      });
    };

    const reset = () => {
      clearErrorTips();
    };

    watch(
      () => props.modelValue,
      (value: any) => {
        clearErrorTips(value);
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
        } else if (Array.isArray(vnode.children) && vnode.children?.length) {
          task = task.concat(findFormItem(vnode.children as VNode[]));
        } else if (isObject(vnode.children) && Object.keys(vnode.children)) {
          // 异步节点获取
          if ((vnode.children as any)?.default) {
            vnode.children = (vnode.children as any).default();
            task = task.concat(findFormItem(vnode.children as VNode[]));
          }
        }
      });
      return task;
    };

    const tipMessage = (errorMsg: ErrorMessage) => {
      if (errorMsg.message) {
        emit('validate', errorMsg);
      }
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

      if (!prop) {
        console.warn('[NutUI] <FormItem> 使用 rules 校验规则时 , 必须设置 prop 参数');
      }

      let value = getPropByPath(props.modelValue, prop || '');

      // clear tips
      tipMessage({ prop, message: '' });
      let _rules = [...rules];
      while (_rules.length) {
        const { required, validator, regex, message } = _rules.shift() as FormItemRule;
        const errorMsg = { prop, message };
        if (required) {
          if (value === '' || value === undefined || value === null) {
            return _Promise(errorMsg);
          }
        }
        if (regex && !regex.test(String(value))) {
          return _Promise(errorMsg);
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

    /**
     * 校验
     * @param customProp 指定校验，用于用户自定义场景时触发，例如 blur、change 事件
     * @returns
     */
    const validate = (customProp: string = '') => {
      return new Promise((resolve, reject) => {
        let task = findFormItem(slots.default());

        let errors = task.map((item) => {
          if (customProp) {
            if (customProp == item.prop) {
              return checkRule(item);
            } else {
              return Promise.resolve(true);
            }
          } else {
            return checkRule(item);
          }
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
};
