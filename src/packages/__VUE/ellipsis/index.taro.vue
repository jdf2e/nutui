<template>
  <view :class="classes" @click="handleClick" ref="root" id="root">
    <view v-if="!exceeded">{{ content }}</view>

    <view v-if="exceeded && !expanded"> {{ ellipsis.leading }}{{ ellipsis.tailing }} </view>
    <!-- <view v-if="exceeded && expanded">
      {{ content }}
      <span class="nut-ellipsis-text" v-if="expandText" @click.stop="clickHandle(2)">{{ collapseText }}</span>
    </view> -->
  </view>

  <view class="nut-ellipsis-copy" @click="handleClick" ref="rootContain" id="rootContain">
    <view>{{ contantCopy }}</view>
  </view>
</template>

<script lang="ts">
import { ref, reactive, toRefs, computed, onMounted, PropType, watch } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { useTaroRect } from '@/packages/utils/useTaroRect';
import Taro from '@tarojs/taro';
const { componentName, create } = createComponent('ellipsis');
export type Direction = 'start' | 'end' | 'middle';

type EllipsisedValue = {
  leading?: string;
  tailing?: string;
};

export default create({
  props: {
    content: {
      type: String,
      default: ''
    },
    direction: {
      type: String as PropType<Direction>,
      default: 'start'
    },
    rows: {
      type: [Number, String],
      default: 1
    },
    expandText: {
      type: String,
      default: ''
    },
    collapseText: {
      type: String,
      default: ''
    },
    symbol: {
      type: String,
      default: '...'
    }
  },
  emits: ['click', 'change'],

  setup(props, { emit }) {
    const root = ref(null);
    const rootContain = ref(null);
    let contantCopy = ref(props.content);
    let container: any = null;
    let maxHeight = 0; // 超出的最大高度
    let lineHeight = 0; // 当行的最大高度
    let originHeight = 0; // 原始高度
    const ellipsis = ref<EllipsisedValue>();
    const refRandomId = Math.random().toString(36).slice(-8);
    const state = reactive({
      exceeded: false, //是否超出
      expanded: false //是否折叠
    });

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });

    watch(
      () => props.content,
      (newV, oldVal) => {
        if (newV != oldVal) {
          if (container) {
            // document.body.appendChild(container);
          }
          // createContainer();
        }
      }
    );

    onMounted(() => {
      setTimeout(() => {
        getReference();
      }, 500);
    });

    const getReference = async () => {
      const refe = await useTaroRect(root, Taro);

      Taro.createSelectorQuery()
        .select('#root')
        .fields(
          {
            computedStyle: ['height', 'lineHeight', 'paddingTop', 'paddingBottom']
          },
          (res) => {
            console.log(11, res);
            lineHeight = pxToNumber(res.lineHeight);
            maxHeight = Math.floor(
              lineHeight * (Number(props.rows) + 0.5) + pxToNumber(res.paddingTop) + pxToNumber(res.paddingBottom)
            );

            originHeight = pxToNumber(res.height);

            calcEllipse();
          }
        )
        .exec();
    };

    // 计算省略号的位置
    const calcEllipse = async () => {
      const refe = await useTaroRect(rootContain, Taro);

      if (refe.height <= maxHeight) {
        state.exceeded = false;
      } else {
        const end = Math.floor(props.content.length / (originHeight / lineHeight - 1) + 5);

        const middle = Math.floor((0 + end) / 2);

        if (props.direction === 'middle') {
          tailorMiddle([0, middle], [middle, end]);
        } else {
          tailor(0, end);
        }

        // const ellipsised = props.direction === 'middle' ? tailorMiddle([0, middle], [middle, end]) : await tailor(0, end);

        // (ellipsis as any).value = ellipsised;
      }
    };
    // 计算 start/end 省略
    const tailor = async (left: number, right: number) => {
      console.log(left, right);
      const actionText = state.expanded ? props.collapseText : props.expandText;
      const end = props.content.length;

      if (right - left <= 1) {
        state.exceeded = true;
        if (props.direction === 'end') {
          console.log('结果');
          (ellipsis as any).value = {
            leading: props.content.slice(0, left) + props.symbol
          };
          console.log(ellipsis.value);
          return false;
        } else {
          return {
            tailing: props.symbol + props.content.slice(right, end)
          };
        }
      }
      const middle = Math.round((left + right) / 2);

      if (props.direction === 'end') {
        contantCopy.value = props.content.slice(0, middle) + props.symbol + actionText;
      } else {
        contantCopy.value = actionText + props.symbol + props.content.slice(middle, end);
      }

      console.log(contantCopy.value);
      setTimeout(async () => {
        const refe = await useTaroRect(rootContain, Taro);
        if (refe.height <= maxHeight) {
          if (props.direction === 'end') {
            tailor(middle, right);
          } else {
            tailor(left, middle);
          }
        } else {
          if (props.direction === 'end') {
            tailor(left, middle);
          } else {
            tailor(middle, right);
          }
        }
      }, 10);
    };
    // 计算 middle 省略
    const tailorMiddle: (leftPart: [number, number], rightPart: [number, number]) => EllipsisedValue = (
      leftPart: [number, number],
      rightPart: [number, number]
    ) => {
      const actionText = state.expanded ? props.collapseText : props.expandText;
      const end = props.content.length;
      if (leftPart[1] - leftPart[0] <= 1 && rightPart[1] - rightPart[0] <= 1) {
        return {
          leading: props.content.slice(0, leftPart[0]) + props.symbol,
          tailing: props.symbol + props.content.slice(rightPart[1], end)
        };
      }
      const leftPartMiddle = Math.floor((leftPart[0] + leftPart[1]) / 2);
      const rightPartMiddle = Math.ceil((rightPart[0] + rightPart[1]) / 2);

      container.innerText =
        props.content.slice(0, leftPartMiddle) +
        props.symbol +
        actionText +
        props.symbol +
        props.content.slice(rightPartMiddle, end);

      if (container.offsetHeight <= maxHeight) {
        return tailorMiddle([leftPartMiddle, leftPart[1]], [rightPart[0], rightPartMiddle]);
      } else {
        return tailorMiddle([leftPart[0], leftPartMiddle], [rightPartMiddle, rightPart[1]]);
      }
    };

    const pxToNumber = (value: string | null) => {
      if (!value) return 0;
      const match = value.match(/^\d*(\.\d*)?/);
      return match ? Number(match[0]) : 0;
    };

    // 展开收起
    const clickHandle = (type: number) => {
      if (type == 1) {
        state.expanded = true;
        emit('change', 'expand');
      } else {
        state.expanded = false;
        emit('change', 'collapse');
      }
    };

    // 文本点击
    const handleClick = () => {
      emit('click');
    };

    return {
      ...toRefs(state),
      root,
      rootContain,
      ellipsis,
      classes,
      contantCopy,
      clickHandle,
      handleClick,
      refRandomId
    };
  }
});
</script>
