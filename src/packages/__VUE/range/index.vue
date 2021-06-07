<template>
  <view class="nut-range-container">
    <view class="min" v-if="!hiddenRange">{{ +min }}</view>
    <view
      ref="root"
      :style="wrapperStyle"
      :class="classes"
      @click.stop="onClick"
    >
      <view class="nut-range-bar" :style="barStyle">
        <template v-if="range">
          <view
            v-for="index of [0, 1]"
            :key="index"
            role="slider"
            :class="{
              'nut-range-button-wrapper-left': index == 0,
              'nut-range-button-wrapper-right': index == 1
            }"
            :tabindex="disabled ? -1 : 0"
            :aria-valuemin="+min"
            :aria-valuenow="curValue(index)"
            :aria-valuemax="+max"
            aria-orientation="horizontal"
            @touchstart.stop.prevent="
              e => {
                if (typeof index === 'number') {
                  // 实时更新当前拖动的按钮索引
                  buttonIndex = index;
                }
                onTouchStart(e);
              }
            "
            @touchmove.stop.prevent="onTouchMove"
            @touchend.stop.prevent="onTouchEnd"
            @touchcancel.stop.prevent="onTouchEnd"
            @click="e => e.stopPropagation()"
          >
            <slot v-if="$slots.button" name="button"></slot>
            <view class="nut-range-button" v-else :style="buttonStyle">
              <view class="number" v-if="!hiddenTag">{{
                curValue(index)
              }}</view>
            </view>
          </view>
        </template>
        <template v-else>
          <view
            role="slider"
            class="nut-range-button-wrapper"
            :tabindex="disabled ? -1 : 0"
            :aria-valuemin="+min"
            :aria-valuenow="curValue()"
            :aria-valuemax="+max"
            aria-orientation="horizontal"
            @touchstart.stop.prevent="
              e => {
                onTouchStart(e);
              }
            "
            @touchmove.stop.prevent="onTouchMove"
            @touchend.stop.prevent="onTouchEnd"
            @touchcancel.stop.prevent="onTouchEnd"
            @click="e => e.stopPropagation()"
          >
            <slot v-if="$slots.button" name="button"></slot>
            <view class="nut-range-button" v-else :style="buttonStyle">
              <view class="number" v-if="!hiddenTag">{{
                curValue(index)
              }}</view>
            </view>
          </view>
        </template>
      </view>
    </view>
    <view class="max" v-if="!hiddenRange">{{ +max }}</view>
  </view>
</template>
<script lang="ts">
import { ref, toRefs, computed, PropType, CSSProperties } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { useTouch } from '@/packages/utils/useTouch';
import { useRect } from '@/packages/utils/useRect';
const { componentName, create } = createComponent('range');

type SliderValue = number | number[];

export default create({
  props: {
    range: {
      type: Boolean,
      default: false
    },
    disabled: Boolean,
    activeColor: String,
    inactiveColor: String,
    buttonColor: String,
    hiddenRange: {
      type: Boolean,
      default: false
    },
    hiddenTag: {
      type: Boolean,
      default: false
    },
    min: {
      type: [Number, String],
      default: 0
    },
    max: {
      type: [Number, String],
      default: 100
    },
    step: {
      type: [Number, String],
      default: 1
    },
    modelValue: {
      type: [Number, Array] as PropType<SliderValue>,
      default: 0
    }
  },

  emits: ['change', 'drag-end', 'drag-start', 'update:modelValue'],

  setup(props, { emit, slots }) {
    const buttonIndex = ref(0);
    let startValue: SliderValue;
    let currentValue: SliderValue;

    const root = ref<HTMLElement>();
    const dragStatus = ref<'start' | 'draging' | ''>();
    const touch = useTouch();

    const scope = computed(() => Number(props.max) - Number(props.min));

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [`${prefixCls}-disabled`]: props.disabled,
        [`${prefixCls}-show-number`]: !props.hiddenRange
      };
    });

    const wrapperStyle = computed(() => {
      return {
        background: props.inactiveColor
      };
    });

    const buttonStyle = computed(() => {
      return {
        borderColor: props.buttonColor
      };
    });

    const isRange = (val: unknown): val is number[] =>
      !!props.range && Array.isArray(val);

    const calcMainAxis = () => {
      const { modelValue, min } = props;
      if (isRange(modelValue)) {
        return `${((modelValue[1] - modelValue[0]) * 100) / scope.value}%`;
      }
      return `${((modelValue - Number(min)) * 100) / scope.value}%`;
    };

    const calcOffset = () => {
      const { modelValue, min } = props;
      if (isRange(modelValue)) {
        return `${((modelValue[0] - Number(min)) * 100) / scope.value}%`;
      }
      return `0%`;
    };

    const barStyle = computed<CSSProperties>(() => {
      return {
        width: calcMainAxis(),
        left: calcOffset(),
        background: props.activeColor,
        transition: dragStatus.value ? 'none' : undefined
      };
    });

    const format = (value: number) => {
      const { min, max, step } = props;
      value = Math.max(+min, Math.min(value, +max));
      return Math.round(value / +step) * +step;
    };

    const isSameValue = (newValue: SliderValue, oldValue: SliderValue) =>
      JSON.stringify(newValue) === JSON.stringify(oldValue);

    const handleOverlap = (value: number[]) => {
      if (value[0] > value[1]) {
        return value.slice(0).reverse();
      }
      return value;
    };

    const updateValue = (value: SliderValue, end?: boolean) => {
      if (isRange(value)) {
        value = handleOverlap(value).map(format);
      } else {
        value = format(value);
      }

      if (!isSameValue(value, props.modelValue)) {
        emit('update:modelValue', value);
      }

      if (end && !isSameValue(value, startValue)) {
        emit('change', value);
      }
    };

    const onClick = (event: MouseEvent) => {
      if (props.disabled) {
        return;
      }

      const { min, modelValue } = props;
      const rect = useRect(root);
      const delta = event.clientX - rect.left;
      const total = rect.width;
      const value = Number(min) + (delta / total) * scope.value;
      if (isRange(modelValue)) {
        const [left, right] = modelValue;
        const middle = (left + right) / 2;
        if (value <= middle) {
          updateValue([value, right], true);
        } else {
          updateValue([left, value], true);
        }
      } else {
        updateValue(value, true);
      }
    };

    const onTouchStart = (event: TouchEvent) => {
      if (props.disabled) {
        return;
      }

      touch.start(event);
      currentValue = props.modelValue;

      if (isRange(currentValue)) {
        startValue = currentValue.map(format);
      } else {
        startValue = format(currentValue);
      }

      dragStatus.value = 'start';
    };

    const onTouchMove = (event: TouchEvent) => {
      if (props.disabled) {
        return;
      }

      if (dragStatus.value === 'start') {
        emit('drag-start');
      }

      touch.move(event);
      dragStatus.value = 'draging';

      const rect = useRect(root);
      const delta = touch.deltaX.value;
      const total = rect.width;
      const diff = (delta / total) * scope.value;

      if (isRange(startValue)) {
        (currentValue as number[])[buttonIndex.value] =
          startValue[buttonIndex.value] + diff;
      } else {
        currentValue = startValue + diff;
      }
      updateValue(currentValue);
    };

    const onTouchEnd = () => {
      if (props.disabled) {
        return;
      }
      if (dragStatus.value === 'draging') {
        updateValue(currentValue, true);
        emit('drag-end');
      }
      dragStatus.value = '';
    };

    const curValue = (idx?: number) => {
      const value =
        typeof idx === 'number'
          ? (props.modelValue as number[])[idx]
          : props.modelValue;
      return value;
    };

    return {
      root,
      classes,
      wrapperStyle,
      buttonStyle,
      onClick,
      onTouchStart,
      onTouchMove,
      onTouchEnd,
      ...toRefs(props),
      barStyle,
      curValue,
      buttonIndex
    };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
