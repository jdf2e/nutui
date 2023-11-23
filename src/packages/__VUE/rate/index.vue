<template>
  <view class="nut-rate" @touchstart="onTouchStart" @touchmove="onTouchMove">
    <view
      v-for="n in Number(count)"
      :id="'rateRefs-' + refRandomId + n"
      :key="n"
      ref="rateRefs"
      class="nut-rate-item"
      :style="n < Number(count) ? { marginRight: pxCheck(spacing) } : {}"
    >
      <view class="nut-rate-item__icon--full">
        <component
          :is="
            renderIcon(customIcon, {
              width: size,
              height: size,
              size,
              color: n <= Number(modelValue) ? activeColor : voidColor
            })
          "
          class="nut-rate-item__icon"
          :class="{ 'nut-rate-item__icon--disabled': disabled || n > Number(modelValue) }"
          @click="onClick(1, n)"
        ></component>
      </view>
      <view v-if="allowHalf && Number(modelValue) + 1 > n" class="nut-rate-item__icon--half">
        <component
          :is="
            renderIcon(customIcon, {
              width: size,
              height: size,
              size,
              color: n <= Number(modelValue) + 1 ? activeColor : voidColor
            })
          "
          class="nut-rate-item__icon"
          @click="onClick(2, n)"
        ></component>
      </view>
      <view v-else-if="allowHalf && Number(modelValue) + 1 < n" class="nut-rate-item__icon--half">
        <component
          :is="renderIcon(customIcon, { width: size, height: size, size, color: voidColor })"
          class="nut-rate-item__icon nut-rate-item__icon--disabled"
          @click="onClick(2, n)"
        ></component>
      </view>
    </view>
  </view>
</template>
<script lang="ts">
import { Ref, ref } from 'vue';
import { StarFillN } from '@nutui/icons-vue';
import { createComponent, renderIcon } from '@/packages/utils/create';
import { pxCheck } from '@/packages/utils';
import { useTouch } from '@/packages/utils/useTouch';
const { create } = createComponent('rate');
export default create({
  props: {
    count: {
      type: [String, Number],
      default: 5
    },
    modelValue: {
      type: [String, Number],
      default: 0
    },
    customIcon: {
      type: Object,
      default: () => {
        return StarFillN;
      }
    },
    size: {
      type: [String, Number],
      default: undefined
    },
    activeColor: {
      type: String,
      default: ''
    },
    voidColor: {
      type: String,
      default: ''
    },
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    allowHalf: {
      type: Boolean,
      default: false
    },
    touchable: {
      type: Boolean,
      default: true
    },
    spacing: {
      type: [String, Number],
      default: undefined
    }
  },
  components: { StarFillN },
  emits: ['update:modelValue', 'change'],
  setup(props, { emit, slots }) {
    const rateRefs = ref<HTMLElement[]>([]);
    const updateVal = (value: number) => {
      emit('update:modelValue', value);
      emit('change', value);
    };
    const onClick = (e: number, index: number) => {
      if (props.disabled || props.readonly) return;
      let value = 0;
      if (index === 1 && props.modelValue === index) {
        value = 0;
      } else {
        value = index;
        if (props.allowHalf && e == 2) {
          value -= 0.5;
        }
      }
      updateVal(value);
    };
    const getScoreByPosition = (x: number, rateRefs: Ref<HTMLElement[]>, allowHalf: boolean) => {
      let v = 0;
      for (let index = rateRefs.value.length - 1; index >= 0; index--) {
        const item = rateRefs.value[index];
        if (x > item.offsetLeft) {
          if (allowHalf) {
            v = index + (x > item.offsetLeft + item.clientWidth / 2 ? 1 : 0.5);
          } else {
            v = index + 1;
          }
          break;
        }
      }
      return v;
    };
    const touch = useTouch();
    const touchMethods = {
      onTouchStart(event: TouchEvent) {
        if (!props.touchable || props.readonly) return;
        touch.start(event);
      },
      onTouchMove(event: TouchEvent) {
        if (!props.touchable) return;
        touch.move(event);
        if (touch.isHorizontal()) {
          if (rateRefs.value) {
            event.preventDefault();
            updateVal(getScoreByPosition(touch.moveX.value, rateRefs, props.allowHalf));
          }
        }
      }
    };
    const refRandomId = Math.random().toString(36).slice(-8);
    return {
      ...touchMethods,
      onClick,
      pxCheck,
      rateRefs,
      refRandomId,
      renderIcon,
      slots
    };
  }
});
</script>
