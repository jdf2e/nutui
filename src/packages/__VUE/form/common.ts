import { getPropByPath, isPromise } from '@/packages/utils/util';
import { computed, PropType, provide, reactive, watch } from 'vue';
import { FormItemRule } from '../formitem/types';
import { ErrorMessage, FormRule, FormRules } from './types';

export const component = (components: any) => {
  return {
    props: {
      modelValue: {
        type: Object,
        default: () => ({})
      },
      rules: {
        type: Object as PropType<FormRules>,
        default: () => ({})
      }
    },
    components,
    emits: ['validate'],

    setup(props: any, { emit }: any) {
      const useChildren = () => {
        const publicChildren: any[] = reactive([]);
        const internalChildren: any[] = reactive([]);

        const linkChildren = (value?: any) => {
          const link = (child: any) => {
            if (child.proxy) {
              internalChildren.push(child);
              publicChildren.push(child.proxy as any);
            }
          };

          const removeLink = (child: any) => {
            if (child.proxy) {
              let internalIndex = internalChildren.indexOf(child);
              if (internalIndex > -1) {
                internalChildren.splice(internalIndex, 1);
              }

              let publicIndex = publicChildren.indexOf(child.proxy);
              if (internalIndex > -1) {
                publicChildren.splice(publicIndex, 1);
              }
            }
          };

          provide(
            'NutFormParent',
            Object.assign(
              {
                removeLink,
                link,
                children: publicChildren,
                internalChildren
              },
              value
            )
          );
        };

        return {
          children: publicChildren,
          linkChildren
        };
      };

      const { children, linkChildren } = useChildren();
      linkChildren({ props });

      const formErrorTip = computed(() => reactive<any>({}));
      provide('formErrorTip', formErrorTip);
      const clearErrorTips = () => {
        Object.keys(formErrorTip.value).forEach((item) => {
          formErrorTip.value[item] = '';
        });
      };

      const reset = () => {
        clearErrorTips();
      };

      watch(
        () => props.modelValue,
        () => {
          clearErrorTips();
        },
        { immediate: true }
      );

      const getTaskFromChildren = () => {
        const task: FormRule[] = [];
        children.forEach((item) => {
          task.push({
            prop: item?.['prop'],
            rules: item?.['rules'] || []
          });
        });
        return task;
      };

      const tipMessage = (errorMsg: ErrorMessage) => {
        if (errorMsg.message) {
          emit('validate', errorMsg);
        }
        formErrorTip.value[errorMsg.prop] = errorMsg.message;
      };

      const checkRule = async (item: FormRule): Promise<ErrorMessage | boolean> => {
        const { rules, prop } = item;

        const _Promise = (errorMsg: ErrorMessage): Promise<ErrorMessage> => {
          return new Promise((resolve, reject) => {
            try {
              tipMessage(errorMsg);
              resolve(errorMsg);
            } catch (error) {
              reject(error);
            }
          });
        };

        if (!prop) {
          console.warn('[NutUI] <FormItem> 使用 rules 校验规则时 , 必须设置 prop 参数');
        }

        const value = getPropByPath(props.modelValue, prop || '');

        // clear tips
        tipMessage({ prop, message: '' });
        const formRules: FormRules = props.rules || {};
        const _rules = [...(formRules?.[prop] || []), ...rules];
        while (_rules.length) {
          const rule = _rules.shift() as FormItemRule;
          const { validator, ...ruleWithoutValidator } = rule;
          const { required, regex, message } = ruleWithoutValidator;
          const errorMsg = { prop, message };
          if (required) {
            if (!value && value !== 0) {
              return _Promise(errorMsg);
            }
          }
          if (regex && !regex.test(String(value))) {
            return _Promise(errorMsg);
          }
          if (validator) {
            const result = validator(value, ruleWithoutValidator);
            if (isPromise(result)) {
              try {
                const value = await result;
                if (value === false) {
                  return _Promise(errorMsg);
                }
              } catch (error) {
                const validateErrorMsg = { prop, message: error as string };
                return _Promise(validateErrorMsg);
              }
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
      const validate = (customProp = '') => {
        return new Promise((resolve, reject) => {
          try {
            const task = getTaskFromChildren();

            const errors = task.map((item) => {
              if (customProp && customProp !== item.prop) {
                return Promise.resolve(true);
              }
              return checkRule(item);
            });

            Promise.all(errors).then((errorRes) => {
              errorRes = errorRes.filter((item) => item !== true);
              const res = { valid: true, errors: [] };
              if (errorRes.length) {
                res.valid = false;
                res.errors = errorRes as any;
              }
              resolve(res);
            });
          } catch (error) {
            reject(error);
          }
        });
      };
      const submit = () => {
        validate();
        return false;
      };
      return { validate, reset, submit, formErrorTip };
    }
  };
};
