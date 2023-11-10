<template>
  <div :class="classes">
    <div v-show="showTour" class="nut-tour-masked" @click="handleClickMask"></div>

    <div v-for="(step, i) in steps" :key="i" style="height: 0">
      <template v-if="i == active">
        <div
          v-if="showTour"
          id="nut-tour-popid"
          class="nut-tour-mask"
          :class="[mask ? '' : 'nut-tour-mask-none']"
          :style="maskStyle"
        ></div>
        <nut-popover
          v-model:visible="showPopup"
          :location="step.location || location"
          target-id="nut-tour-popid"
          :bg-color="bgColor"
          :theme="theme"
          :close-on-click-outside="false"
          :offset="step.popoverOffset || [0, 12]"
          :arrow-offset="step.arrowOffset || 0"
        >
          <template #content>
            <slot>
              <div v-if="type == 'step'" class="nut-tour-content">
                <div v-if="showTitleBar" class="nut-tour-content-top">
                  <div @click="close">
                    <Close class="nut-tour-content-top-close" />
                  </div>
                </div>
                <div class="nut-tour-content-inner">
                  {{ step.content }}
                </div>
                <div class="nut-tour-content-bottom">
                  <div class="nut-tour-content-bottom-init">{{ active + 1 }}/{{ steps.length }}</div>
                  <div class="nut-tour-content-bottom-operate">
                    <slot name="prev-step">
                      <div
                        v-if="active != 0 && showPrevStep"
                        class="nut-tour-content-bottom-operate-btn"
                        @click="changeStep('prev')"
                        >{{ prevStepTxt }}</div
                      >
                    </slot>

                    <div
                      v-if="steps.length - 1 == active"
                      class="nut-tour-content-bottom-operate-btn active"
                      @click="close"
                      >{{ completeTxt }}</div
                    >
                    <slot name="next-step">
                      <div
                        v-if="steps.length - 1 != active"
                        class="nut-tour-content-bottom-operate-btn active"
                        @click="changeStep('next')"
                        >{{ nextStepTxt }}</div
                      >
                    </slot>
                  </div>
                </div>
              </div>

              <div v-if="type == 'tile'" class="nut-tour-content nut-tour-content-tile">
                <div class="nut-tour-content-inner">
                  {{ step.content }}
                </div>
              </div>
            </slot>
          </template>
        </nut-popover>
      </template>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, watch, ref, reactive, toRefs, PropType, nextTick, onMounted } from 'vue';
import { PopoverLocation, PopoverTheme } from '../popover/type';
import { createComponent } from '@/packages/utils/create';
import { useRect } from '@/packages/utils/useRect';
import { Close } from '@nutui/icons-vue';
import NutPopover from '../popover/index.vue';

interface StepOptions {
  target: Element | string;
  content: string;
  location?: PopoverLocation;
  popoverOffset?: number[];
  arrowOffset?: number;
}
const { create } = createComponent('tour');
export default create({
  components: {
    NutPopover,
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
      type: String as PropType<PopoverTheme>,
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
      showPopup: false,
      active: 0
    });

    const maskRect = ref<
      | DOMRect
      | {
          [props: string]: number;
        }
    >({});

    const classes = computed(() => {
      const prefixCls = 'nut-tour';
      return `${prefixCls}`;
    });

    // const maskClasses = computed(() => {
    //   const prefixCls = 'nut-tour';
    //   return {
    //     [`${prefixCls}-mask`]:true,
    //     [`${prefixCls}-mask-none`]:
    //   }
    // });

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

    const getRootPosition = () => {
      const el: any = document.querySelector(`#${props.steps[state.active].target}`);
      const rect = useRect(el);
      maskRect.value = rect;
    };

    const close = () => {
      state.showTour = false;
      state.showPopup = false;
      emit('close', state.active);
      emit('update:modelValue', false);
    };

    const handleClickMask = () => {
      props.closeOnClickOverlay && close();
    };

    onMounted(() => {
      state.active = 0;
      getRootPosition();
    });
    watch(
      () => props.modelValue,
      (val) => {
        if (val) {
          getRootPosition();
        }
        state.active = 0;
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
