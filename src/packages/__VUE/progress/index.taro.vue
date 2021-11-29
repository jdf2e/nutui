<template>
  <div class="nut-progress">
    <div
      class="nut-progress-outer"
      ref="progressOuter"
      :class="[
        showText && !textInside ? 'nut-progress-outer-part' : '',
        size ? 'nut-progress-' + size : ''
      ]"
      :style="{ height: height }"
    >
      <div
        :class="['nut-progress-inner', status == 'active' ? 'nut-active' : '']"
        :style="bgStyle"
      >
        <div
          class="nut-progress-text nut-progress-insidetext"
          :style="{ lineHeight: height, left: left }"
          v-if="showText && textInside"
        >
          <span :style="textStyle">{{ percentage }}%</span>
        </div>
      </div>
    </div>
    <div
      class="nut-progress-text"
      :style="{ lineHeight: height }"
      v-if="showText && !textInside"
    >
      <template v-if="status == 'text' || status == 'active'">
        <span :style="textStyle">{{ percentage }}%</span>
      </template>
      <template v-else-if="status == 'icon'">
        <nut-icon size="16px" :name="iconName" :color="iconColor"></nut-icon>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  onMounted,
  provide,
  reactive,
  nextTick,
  ref,
  getCurrentInstance,
  watch
} from 'vue';
import { createComponent } from '../../utils/create';
import Taro, { eventCenter } from '@tarojs/taro';
const { create } = createComponent('progress');
export default create({
  props: {
    percentage: {
      type: [Number, String],
      default: 0,
      required: true
    },
    size: {
      type: String,
      default: 'base'
    },
    status: {
      type: String,
      default: 'text'
    },
    strokeWidth: {
      type: [Number, String],
      default: ''
    },
    textInside: {
      type: Boolean,
      default: false
    },
    showText: {
      type: Boolean,
      default: true
    },
    strokeColor: {
      type: String,
      default: ''
    },
    textColor: {
      tyep: String,
      default: ''
    },
    iconName: {
      type: String,
      default: 'checked'
    },
    iconColor: {
      type: String,
      default: '#439422'
    }
  },
  setup(props, { emit }) {
    const height = ref(props.strokeWidth + 'px');
    const progressOuter = ref<any>();
    const left = ref();
    const bgStyle = computed(() => {
      return {
        width: props.percentage + '%',
        background: props.strokeColor || ''
      };
    });
    const textStyle = computed(() => {
      return {
        color: props.textColor || ''
      };
    });
    const slideLeft = async (values: String | Number) => {
      if (Taro.getEnv() === 'WEB') {
        setTimeout(() => {
          left.value =
            progressOuter.value.offsetWidth * Number(values) * 0.01 - 4 + 'px';
        }, 200);
      } else {
        setTimeout(() => {
          const query = Taro.createSelectorQuery() as any;
          query
            .select('.nut-progress-outer')
            .boundingClientRect((rec: any) => {
              left.value = rec.width * Number(values) * 0.01 - 4 + 'px';
            })
            .exec();
        }, 200);
      }
    };
    watch(
      () => props.percentage,
      (values) => {
        slideLeft(values);
      },
      { immediate: true }
    );
    onMounted(() => {});
    return {
      height,
      bgStyle,
      textStyle,
      progressOuter,
      left
    };
  }
});
</script>
