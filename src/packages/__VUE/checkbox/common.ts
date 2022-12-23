import { h, computed, inject, getCurrentInstance, onMounted, reactive, watch, Component } from 'vue';
export const component = (componentName: string, components: Record<string, Component>): any => {
  return {
    components: components,
    props: {
      modelValue: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      textPosition: {
        type: String,
        default: 'right'
      },
      iconSize: {
        type: [String, Number],
        default: ''
      },
      label: {
        type: String,
        default: ''
      },
      iconClassPrefix: {
        type: String,
        default: 'nut-icon'
      },
      iconFontClassName: {
        type: String,
        default: 'nutui-iconfont'
      },
      indeterminate: {
        type: Boolean,
        default: false
      }
    },
    emits: ['change', 'update:modelValue'],
    setup(props: any, { emit, slots }: any) {
      const parent: any = inject('parent', null);
      const state = reactive({
        partialSelect: props.indeterminate
      });

      const hasParent = computed(() => !!parent);

      const pValue = computed(() => {
        if (hasParent.value) {
          return parent.value.value.includes(props.label);
        } else {
          return props.modelValue;
        }
      });

      const pDisabled = computed(() => {
        return hasParent.value ? (parent.disabled.value ? parent.disabled.value : props.disabled) : props.disabled;
      });

      const checked = computed(() => !!props.modelValue);

      const color = computed(() => {
        return !pDisabled.value
          ? !pValue.value
            ? 'nut-checkbox__icon--unchecked'
            : state.partialSelect
            ? 'nut-checkbox__icon--indeterminate'
            : 'nut-checkbox__icon'
          : 'nut-checkbox__icon--disable';
      });

      let updateType = '';

      const emitChange = (value: string | boolean, label?: string) => {
        updateType = 'click';
        emit('update:modelValue', value);
        emit('change', value, label);
      };

      watch(
        () => props.modelValue,
        (v) => {
          if (updateType == 'click') {
            updateType = '';
          } else {
            emit('change', v);
          }
        }
      );

      const renderIcon = () => {
        const { iconSize } = props;
        const iconNodeMap = {
          CheckNormal: slots.icon ? slots.icon : components.CheckNormal,
          Checked: slots.checkedIcon ? slots.checkedIcon : components.Checked,
          CheckDisabled: slots.indeterminate ? slots.indeterminate : components.CheckDisabled
        };
        const iconNode = !pValue.value
          ? iconNodeMap.CheckNormal
          : state.partialSelect
          ? iconNodeMap.CheckDisabled
          : iconNodeMap.Checked;
        return h(iconNode, {
          size: iconSize,
          class: color.value
        });
      };

      const renderLabel = () => {
        return h(
          'view',
          {
            class: `${componentName}__label ${pDisabled.value ? `${componentName}__label--disabled` : ''}`
          },
          slots.default?.()
        );
      };

      const handleClick = (e: MouseEvent | TouchEvent) => {
        if (pDisabled.value) return;
        if (checked.value && state.partialSelect) {
          state.partialSelect = false;
          emitChange(checked.value, slots.default?.()[0].children as string);
          return;
        }
        emitChange(!checked.value, slots.default?.()[0].children as string);
        if (hasParent.value) {
          const value = parent.value.value;
          const max = parent.max.value;
          const { label } = props;
          const index = value.indexOf(label);
          if (index > -1) {
            value.splice(index, 1);
          } else if (index <= -1 && (value.length < max || !max)) {
            value.push(label);
          }
          parent.updateValue(value);
        }
      };

      onMounted(() => {
        hasParent.value && parent['relation'](getCurrentInstance());
      });

      watch(
        () => props.indeterminate,
        (newVal) => {
          state.partialSelect = newVal;
        }
      );

      return () => {
        return h(
          'view',
          {
            class: `${componentName} ${props.textPosition === 'left' ? `${componentName}--reverse` : ''}`,
            onClick: handleClick
          },
          [renderIcon(), renderLabel()]
        );
      };
    }
  };
};
