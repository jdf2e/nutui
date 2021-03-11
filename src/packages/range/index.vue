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
import { createComponent } from '@/utils/create';
import { useTouch } from '@/utils/useTouch';
import { useRect } from '@/utils/useRect';
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
    console.log(slots.button && slots.button());

    const buttonIndex = ref(0);
    let startValue: SliderValue;
    let currentValue: SliderValue;

    const root = ref<HTMLElement>();
    const dragStatus = ref<'start' | 'draging' | ''>();
    const touch = useTouch();

    // 滑动范围计算
    const scope = computed(() => Number(props.max) - Number(props.min));

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [`${prefixCls}-disabled`]: props.disabled,
        [`${prefixCls}-show-number`]: !props.hiddenRange
      };
    });

    // 滑轨样式
    const wrapperStyle = computed(() => {
      return {
        background: props.inactiveColor
      };
    });

    // 按钮样式
    const buttonStyle = computed(() => {
      return {
        borderColor: props.buttonColor
      };
    });

    // 判断是否是双滑块
    const isRange = (val: unknown): val is number[] =>
      !!props.range && Array.isArray(val);

    // 组件核心：拖动效果主要是通过计算选中条长度百分比、开始位置偏移量来实现
    // 计算选中条的长度百分比
    const calcMainAxis = () => {
      const { modelValue, min } = props;
      // 双滑块时，拖动滑块，通过实时变化滑动条的宽度，间接让滑块移动
      // 如果拖动右滑块，则只会改变滑动条的宽度，开始位置偏移量不会变化
      if (isRange(modelValue)) {
        return `${((modelValue[1] - modelValue[0]) * 100) / scope.value}%`;
      }
      // 单滑块时，通过实时变化滑动条宽度，来让滑块移动
      return `${((modelValue - Number(min)) * 100) / scope.value}%`;
    };

    // 计算选中条的开始位置的偏移量
    const calcOffset = () => {
      const { modelValue, min } = props;
      // 双滑块时，如果拖动左滑块，则不仅会改变滑动条宽度，还要改变滑动条的开始位置
      if (isRange(modelValue)) {
        return `${((modelValue[0] - Number(min)) * 100) / scope.value}%`;
      }
      // 单滑块时，开始位置永远是最左侧
      return `0%`;
    };

    // 选中条样式
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
      value = Math.max(+min, Math.min(value, +max)); // 拖动范围限制
      return Math.round(value / +step) * +step; // 每一步四舍五入
    };

    const isSameValue = (newValue: SliderValue, oldValue: SliderValue) =>
      JSON.stringify(newValue) === JSON.stringify(oldValue);

    // 处理两个滑块交错之后的情况
    // 例如左滑块移动到右滑块右边，这个时候需要将两个滑块值进行交换
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

        // 靠左边点击移动左按钮，靠右边点击移动右按钮
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

    const curValue = (idx?) => {
      const value =
        typeof idx === 'number'
          ? (props.modelValue as number[])[idx]
          : (props.modelValue as number);
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
