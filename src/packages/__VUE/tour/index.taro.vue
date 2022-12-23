<template>
  <view :class="classes">
    <view class="nut-tour-masked" v-show="showTour" @click="handleClickMask"></view>

    <view v-for="(step, i) in steps" :key="i" style="height: 0">
      <template v-if="i == active">
        <view
          class="nut-tour-mask"
          :class="[mask ? '' : 'nut-tour-mask-none']"
          :style="maskStyle"
          v-if="showTour"
          id="nut-tour-popid"
        ></view>
        <nut-popover
          v-model:visible="showPopup"
          :location="step.location || location"
          targetId="nut-tour-popid"
          :bgColor="bgColor"
          :theme="theme"
          :close-on-click-outside="false"
          :offset="step.popoverOffset || [0, 12]"
          :arrowOffset="step.arrowOffset || 0"
        >
          <template v-slot:content>
            <slot>
              <view class="nut-tour-content" v-if="type == 'step'">
                <view class="nut-tour-content-top">
                  <view @click="close">
                    <Close class="nut-tour-content-top-close" />
                  </view>
                </view>
                <view class="nut-tour-content-inner">
                  {{ step.content }}
                </view>
                <view class="nut-tour-content-bottom">
                  <view class="nut-tour-content-bottom-init">{{ active + 1 }}/{{ steps.length }}</view>
                  <view class="nut-tour-content-bottom-operate">
                    <view class="nut-tour-content-bottom-operate-btn" @click="changeStep('prev')" v-if="active != 0">{{
                      prevStepTxt
                    }}</view>
                    <view
                      class="nut-tour-content-bottom-operate-btn active"
                      @click="close"
                      v-if="steps.length - 1 == active"
                      >{{ completeTxt }}</view
                    >
                    <view class="nut-tour-content-bottom-operate-btn active" @click="changeStep('next')" v-else>{{
                      nextStepTxt
                    }}</view>
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
      </template>
    </view>
  </view>
</template>
<script lang="ts">
import { computed, watch, ref, reactive, toRefs, PropType, nextTick, onMounted } from 'vue';
import { PopoverLocation } from '../popover/type';
import { createComponent } from '@/packages/utils/create';
import { useTaroRect } from '@/packages/utils/useTaroRect';
import { Close } from '@nutui/icons-vue-taro';
import Taro from '@tarojs/taro';

interface StepOptions {
  target: Element;
  content: String;
  location?: PopoverLocation;
  popoverOffset?: number[];
  arrowOffset?: number;
}
const { create } = createComponent('tour');
export default create({
  components: {
    Close
  },
  props: {
    visible: { type: Boolean, default: false },
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
    }
  },
  emits: ['update:visible', 'change', 'close'],
  setup(props, { emit }) {
    const state = reactive({
      showTour: props.visible,
      showPopup: false,
      active: 0
    });

    const maskRect = ref<{
      [props: string]: number;
    }>({});

    const classes = computed(() => {
      const prefixCls = 'nut-tour';
      return `${prefixCls}`;
    });

    const maskStyle = computed(() => {
      const { offset, maskWidth, maskHeight } = props;
      const { width, height, left, top } = maskRect.value;

      const center = [left + width / 2, top + height / 2]; // 中心点 【横，纵】
      const w: number = Number(maskWidth ? maskWidth : width);
      const h: number = Number(maskHeight ? maskHeight : height);

      const styles = {
        width: `${w + +offset[1] * 2}px`,
        height: `${h + +offset[0] * 2}px`,
        top: `${center[1] - h / 2 - +offset[0]}px`,
        left: `${center[0] - w / 2 - +offset[1]}px`
      };
      return styles;
    });

    const changeStep = (type: string) => {
      if (type == 'next') {
        state.active = state.active + 1;
      } else {
        state.active = state.active - 1;
      }

      state.showPopup = false;
      nextTick(() => {
        state.showPopup = true;
        getRootPosition();
      });

      emit('change', state.active);
    };

    const getRootPosition = async () => {
      const rect = await useTaroRect(props.steps[state.active].target, Taro);
      maskRect.value = rect;
    };

    const close = () => {
      state.showTour = false;
      state.showPopup = false;
      emit('close', state.active);
      emit('update:visible', false);
    };

    const handleClickMask = () => {
      props.closeOnClickOverlay && close();
    };

    onMounted(() => {
      setTimeout(() => {
        getRootPosition();
      }, 200);
    });

    watch(
      () => props.visible,
      (val) => {
        if (val) {
          state.active = 0;
          getRootPosition();
        }

        state.showTour = val;
        state.showPopup = val;
      }
    );

    return {
      ...toRefs(state),
      classes,
      maskStyle,
      changeStep,
      close,
      handleClickMask
    };
  }
});
</script>
