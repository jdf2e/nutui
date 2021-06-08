<script lang="ts">
import { h, computed, inject, getCurrentInstance, onMounted } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { create, componentName } = createComponent('checkbox');
import nutIcon from '@/packages/__VUE/icon/index.vue';
import CheckboxGroup from '@/packages/__VUE/checkboxgroup/index.vue';

export default create({
  children: [CheckboxGroup],
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
      default: '18'
    },
    iconName: {
      type: String,
      default: 'check-normal'
    },
    iconActiveName: {
      type: String,
      default: 'checked'
    },
    label: {
      type: String,
      default: ''
    }
  },
  emits: ['change', 'update:modelValue'],
  setup(props, { emit, slots }) {
    const parent: any = inject('parent');

    const hasParent = computed(() => !!parent);

    const pValue = computed(() => {
      if (hasParent.value) {
        return parent.value.value.includes(props.label);
      } else {
        return props.modelValue;
      }
    });

    const pDisabled = computed(() => {
      return hasParent.value ? parent.disabled : props.disabled;
    });

    const checked = computed(() => !!props.modelValue);

    const color = computed(() => {
      return !pDisabled.value
        ? !pValue.value
          ? '#d6d6d6'
          : '#fa2c19'
        : '#f5f5f5';
    });

    const emitChange = (value: string | boolean, label?: string) => {
      emit('update:modelValue', value);
      emit('change', value, label);
    };

    const renderIcon = () => {
      const { iconName, iconSize, iconActiveName } = props;
      return h(nutIcon, {
        name: !pValue.value ? iconName : iconActiveName,
        size: iconSize,
        color: color.value
      });
    };

    const renderLabel = () => {
      return h(
        'view',
        {
          class: `${componentName}__label ${
            pDisabled.value ? `${componentName}__label--disabled` : ''
          }`
        },
        slots.default?.()
      );
    };

    const handleClick = (e: MouseEvent | TouchEvent) => {
      if (pDisabled.value) return;
      emitChange(!checked.value, slots.default?.()[0].children as string);
      if (hasParent.value) {
        let value = parent.value.value;
        let { label } = props;
        const index = value.indexOf(label);
        if (index > -1) {
          value.splice(index, 1);
        } else {
          value.push(label);
        }
        parent.updateValue(value);
      }
    };

    onMounted(() => {
      hasParent.value && parent['relation'](getCurrentInstance());
    });

    return () => {
      return h(
        'view',
        {
          class: `${componentName} ${
            props.textPosition === 'left' ? `${componentName}--reverse` : ''
          }`,
          onClick: handleClick
        },
        [renderIcon(), renderLabel()]
      );
    };
  }
});
</script>

<style lang="scss" scoped>
@import 'index.scss';
</style>
