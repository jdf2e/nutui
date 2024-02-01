<script lang="ts">
import { h, computed, inject, getCurrentInstance, onMounted, reactive, watch, onBeforeUnmount, toRef } from 'vue';
import type { Component, PropType } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { CheckNormal, Checked, CheckDisabled } from '@nutui/icons-vue-taro';
import { pxCheck } from '@/packages/utils/pxCheck';
import { CHECKBOX_KEY, CheckboxTextPosition, CheckboxShape } from './types';
import { useFormDisabled } from '../form/common';
const { create, componentName } = createComponent('checkbox');

export default create({
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
      type: String as PropType<CheckboxTextPosition>,
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
    indeterminate: {
      type: Boolean,
      default: false
    },
    shape: {
      type: String as PropType<CheckboxShape>,
      default: 'round' // button
    }
  },
  emits: ['change', 'update:modelValue'],
  setup(props, { emit, slots }) {
    const disabled = useFormDisabled(toRef(props, 'disabled'));
    const parent: any = inject(CHECKBOX_KEY, null);
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
      return hasParent.value ? (parent.disabled.value ? parent.disabled.value : disabled.value) : disabled.value;
    });

    const checked = computed(() => !!props.modelValue);

    const color = computed(() => {
      return !pDisabled.value
        ? state.partialSelect
          ? 'nut-checkbox__icon--indeterminate'
          : !pValue.value
            ? 'nut-checkbox__icon--unchecked'
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
        CheckNormal: slots.icon ? slots.icon : CheckNormal,
        Checked: slots.checkedIcon ? slots.checkedIcon : Checked,
        CheckDisabled: slots.indeterminate ? slots.indeterminate : CheckDisabled
      };
      const iconNode: Component = state.partialSelect
        ? iconNodeMap.CheckDisabled
        : !pValue.value
          ? iconNodeMap.CheckNormal
          : iconNodeMap.Checked;
      const size = pxCheck(iconSize);
      return h(iconNode, {
        width: size,
        height: size,
        size: size,
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

    const handleClick = () => {
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
      hasParent.value && parent.link(getCurrentInstance());
    });

    onBeforeUnmount(() => {
      hasParent.value && parent.unlink(getCurrentInstance());
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
});
</script>
