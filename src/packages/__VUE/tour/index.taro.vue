<template>
  <view :class="classes">
    <view class="nut-tour-masked" v-if="showTour" @click="handleClickMask"></view>

    <view v-for="(step, i) in steps" :key="i" style="height: 0">
      <view
        class="nut-tour-mask"
        :class="[mask ? (showPopup[i] ? '' : 'nut-tour-mask-hidden') : 'nut-tour-mask-none']"
        :style="maskStyles[i]"
        v-if="showTour"
        :id="`nut-tour-popid${i}${refRandomId}`"
      ></view>
      <nut-popover
        v-model:visible="showPopup[i]"
        :location="step.location || location"
        :targetId="`nut-tour-popid${i}${refRandomId}`"
        :bgColor="bgColor"
        :theme="theme"
        :close-on-click-outside="false"
        :offset="step.popoverOffset || [0, 12]"
        :arrowOffset="step.arrowOffset || 0"
        :duration="0.2"
      >
        <template v-slot:content>
          <slot>
            <view class="nut-tour-content" v-if="type == 'step'">
              <view class="nut-tour-content-top" v-if="showTitleBar">
                <view @click="close">
                  <Close class="nut-tour-content-top-close" size="10px" />
                </view>
              </view>
              <view class="nut-tour-content-inner">
                {{ step.content }}
              </view>
              <view class="nut-tour-content-bottom">
                <view class="nut-tour-content-bottom-init">{{ active + 1 }}/{{ steps.length }}</view>
                <view class="nut-tour-content-bottom-operate">
                  <slot name="prev-step">
                    <view
                      class="nut-tour-content-bottom-operate-btn"
                      @click="changeStep('prev')"
                      v-if="active != 0 && showPrevStep"
                      >{{ prevStepTxt }}</view
                    >
                  </slot>
                  <view
                    class="nut-tour-content-bottom-operate-btn active"
                    @click="close"
                    v-if="steps.length - 1 == active"
                    >{{ completeTxt }}</view
                  >

                  <slot name="next-step">
                    <view
                      class="nut-tour-content-bottom-operate-btn active"
                      @click="changeStep('next')"
                      v-if="steps.length - 1 != active"
                      >{{ nextStepTxt }}</view
                    >
                  </slot>
                </view>
              </view>
            </view>

            <view class="nut-tour-content nut-tour-content-tile" v-if="type == 'tile'">
              <view class="nut-tour-content-inner">
                {{ step.content }}
              </view>
            </view>
          </slot>
        </template>
      </nut-popover>
    </view>
  </view>
</template>
<script lang="ts">
import { computed, watch, ref, reactive, toRefs, PropType, onMounted, Component, CSSProperties } from 'vue';
import { PopoverLocation } from '../popover/type';
import { createComponent } from '@/packages/utils/create';
import { useTaroRect, rectTaro } from '@/packages/utils/useTaroRect';
import { useRect } from '@/packages/utils/useRect';
import { Close } from '@nutui/icons-vue-taro';
import Taro from '@tarojs/taro';
import Popover from '../popover/index.taro.vue';

interface StepOptions {
  target: Element | string;
  content: string;
  location?: string;
  popoverOffset?: number[];
  arrowOffset?: number;
}

const { create } = createComponent('tour');
export default create({
  components: {
    [Popover.name]: Popover as Component,
    Close
  },
  props: {
    modelValue: { type: Boolean, default: false },
    type: {
      type: String,
      default: 'step' // tile
    },
    steps: {
      type: Array as PropType<StepOptions[]>,
      default: () => []
    },
    location: {
      type: String as PropType<PopoverLocation>,
      default: 'bottom'
    },
    current: {
      type: Number,
      default: 0
    },
    nextStepTxt: {
      type: String,
      default: '下一步'
    },
    prevStepTxt: {
      type: String,
      default: '上一步'
    },
    completeTxt: {
      type: String,
      default: '完成'
    },
    mask: {
      type: Boolean,
      default: true
    },
    offset: {
      type: Array as PropType<Number[]>,
      default: [8, 10]
    },
    bgColor: {
      type: String,
      default: ''
    },
    theme: {
      type: String,
      default: 'light'
    },
    maskWidth: {
      type: [Number, String],
      default: ''
    },
    maskHeight: {
      type: [Number, String],
      default: ''
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    showPrevStep: {
      type: Boolean,
      default: true
    },
    showTitleBar: {
      type: Boolean,
      default: true
    }
  },
  emits: ['update:modelValue', 'change', 'close'],
  setup(props, { emit }) {
    const state = reactive({
      showTour: props.modelValue,
      active: 0
    });

    const showPopup = ref([false]);

    let maskRect: rectTaro[] = [];

    let maskStyles = ref<any[]>([]);

    const classes = computed(() => {
      const prefixCls = 'nut-tour';
      return `${prefixCls}`;
    });

    const maskStyle = (index: number) => {
      const { offset, maskWidth, maskHeight } = props;

      if (!maskRect[index]) return {};
      const { width, height, left, top } = maskRect[index];

      const center = [left + width / 2, top + height / 2]; // 中心点 【横，纵】
      const w: number = Number(maskWidth ? maskWidth : width);
      const h: number = Number(maskHeight ? maskHeight : height);

      const styles = {
        width: `${w + +offset[1] * 2}px`,
        height: `${h + +offset[0] * 2}px`,
        top: `${center[1] - h / 2 - +offset[0]}px`,
        left: `${center[0] - w / 2 - +offset[1]}px`
      };
      maskStyles.value[index] = styles;
    };

    const changeStep = (type: string) => {
      const current = state.active;
      let next = current;

      if (type == 'next') {
        next = current + 1;
      } else {
        next = current - 1;
      }
      showPopup.value[current] = false;

      setTimeout(() => {
        showPopup.value[next] = true;
        state.active = next;
      }, 300);

      emit('change', state.active);
    };

    const getRootPosition = () => {
      props.steps.forEach(async (item, i) => {
        let rect;
        if (Taro.getEnv() === 'WEB') {
          const el = document.querySelector(`#${item.target}`) as Element;
          rect = await useRect(el);
        } else {
          rect = await useTaroRect(item.target, Taro);
        }
        maskRect[i] = rect;
        maskStyle(i);
      });
    };

    const close = () => {
      state.showTour = false;
      showPopup.value[state.active] = false;
      emit('close', state.active);
      emit('update:modelValue', false);
    };

    const handleClickMask = () => {
      props.closeOnClickOverlay && close();
    };

    onMounted(() => {
      setTimeout(() => {
        getRootPosition();
      }, 500);
    });

    watch(
      () => props.modelValue,
      (val) => {
        if (val) {
          state.active = 0;
          getRootPosition();
        }
        state.showTour = val;
        showPopup.value[state.active] = val;
      }
    );

    const refRandomId = Math.random().toString(36).slice(-8);

    return {
      ...toRefs(state),
      classes,
      maskStyle,
      changeStep,
      showPopup,
      close,
      handleClickMask,
      maskStyles,
      refRandomId
    };
  }
});
</script>
