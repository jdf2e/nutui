<template>
  <div :class="classes">
    <div class="nut-tour-masked" v-if="showTour"></div>
    <div v-for="(step, i) in steps" :key="i">
      <template v-if="i == active">
        <div
          class="nut-tour-mask"
          :class="[mask ? '' : 'nut-tour-mask-none']"
          :style="maskStyle"
          v-if="showTour"
          id="nut-tour-popid"
        ></div>
        <nut-popover
          v-model:visible="showPopup"
          :location="step.location || location"
          targetId="nut-tour-popid"
          :bgColor="bgColor"
          :theme="theme"
          :close-on-click-outside="false"
        >
          <template #content>
            <div class="nut-tour-content" v-if="type == 'step'">
              <div class="nut-tour-content-top">
                <div class="nut-tour-content-top-close" @click="close">
                  <Icon size="10" name="close"> </Icon>
                </div>
              </div>
              <div class="nut-tour-content-inner">
                {{ step.content }}
              </div>
              <div class="nut-tour-content-bottom">
                <div class="nut-tour-content-bottom-init">{{ active + 1 }}/{{ steps.length }}</div>
                <div class="nut-tour-content-bottom-operate">
                  <div class="nut-tour-content-bottom-operate-btn" @click="changeStep('prev')" v-if="active != 0">{{
                    prevStepTxt
                  }}</div>
                  <div
                    class="nut-tour-content-bottom-operate-btn active"
                    @click="close"
                    v-if="steps.length - 1 == active"
                    >{{ completeTxt }}</div
                  >
                  <div class="nut-tour-content-bottom-operate-btn active" @click="changeStep('next')" v-else>{{
                    nextStepTxt
                  }}</div>
                </div>
              </div>
            </div>

            <div class="nut-tour-content nut-tour-content-tile" v-if="type == 'tile'">
              <div class="nut-tour-content-inner">
                {{ step.content }}
              </div>
            </div>
          </template>
        </nut-popover>
      </template>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, watch, ref, reactive, toRefs, PropType, nextTick } from 'vue';
import { PopoverLocation } from '../popover/type';
import { createComponent } from '@/packages/utils/create';
import { useRect } from '@/packages/utils/useRect';
import { Icon } from '@nutui/icons-vue';

interface StepOptions {
  target: Element;
  content: String;
  location: PopoverLocation;
}
const { create } = createComponent('tour');
export default create({
  components: {
    Icon
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
    }
  },
  emits: ['update:visible', 'change', 'close'],
  setup(props, { emit }) {
    const state = reactive({
      showTour: props.visible,
      showPopup: false,
      active: 0
    });

    const maskRect = ref<any>({});

    const classes = computed(() => {
      const prefixCls = 'nut-tour';
      return `${prefixCls}`;
    });

    const maskStyle = computed(() => {
      const { offset } = props;
      const { width, height, left, top } = maskRect.value;
      const styles = {
        width: `${width + offset[1] * 2}px`,
        height: `${height + offset[0] * 2}px`,
        top: `${top - offset[0]}px`,
        left: `${left - offset[1]}px`
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
      emit('update:visible', false);
    };

    watch(
      () => props.visible,
      (val) => {
        state.showTour = val;

        if (val) {
          state.showPopup = true;
          getRootPosition();
        }
      }
    );

    return {
      ...toRefs(state),
      classes,
      maskStyle,
      changeStep,
      close
    };
  }
});
</script>
