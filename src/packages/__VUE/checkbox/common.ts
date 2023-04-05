import { h, computed, inject, getCurrentInstance, onMounted, reactive, watch, onBeforeUnmount } from 'vue';

export const component = (componentName: string, nutIcon: object) => {
  return {
    components: {
      nutIcon
    },
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
      iconName: {
        type: String,
        default: 'check-normal'
      },
      iconActiveName: {
        type: String,
        default: 'checked'
      },
      iconIndeterminateName: {
        type: String,
        default: 'check-disabled'
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
      },
      shape: {
        type: String,
        default: 'round' // button
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
        const { iconName, iconSize, iconActiveName, iconClassPrefix, iconFontClassName, iconIndeterminateName } = props;
        return h(nutIcon, {
          name: !pValue.value ? iconName : state.partialSelect ? iconIndeterminateName : iconActiveName,
          size: iconSize,
          class: color.value,
          classPrefix: iconClassPrefix,
          fontClassName: iconFontClassName
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

      const renderButton = () => {
        return h(
          'view',
          {
            class: `${componentName}__button ${pValue.value && `${componentName}__button--active`} ${
              pDisabled.value ? `${componentName}__button--disabled` : ''
            }`
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

      onBeforeUnmount(() => {
        hasParent.value && parent['relation'](getCurrentInstance(), true);
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
            class: `${componentName} ${componentName}--${props.shape} ${
              props.textPosition === 'left' ? `${componentName}--reverse` : ''
            }`,
            onClick: handleClick
          },
          [props.shape == 'button' ? renderButton() : [renderIcon(), renderLabel()]]
        );
      };
    }
  };
};
