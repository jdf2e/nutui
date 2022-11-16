<template>
  <view :class="classes" @click="handleClick" ref="root">
    <view v-if="!exceeded">{{ content }}</view>
    <view v-if="exceeded && !expanded"
      >{{ ellipsis.leading
      }}<span class="nut-ellipsis-text" v-if="expandText" @click.stop="clickHandle(1)">{{ expandText }}</span
      >{{ ellipsis.tailing }}
    </view>
    <view v-if="exceeded && expanded">
      {{ content }}
      <span class="nut-ellipsis-text" v-if="expandText" @click.stop="clickHandle(2)">{{ collapseText }}</span>
    </view>
  </view>
</template>
<script lang="ts">
import { ref, reactive, toRefs, computed, onMounted, PropType, watch } from 'vue';
import { createComponent } from '@/packages/utils/create';
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
      default: 'end'
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
    },
    lineHeight: {
      type: [Number, String],
      default: '20'
    }
  },
  emits: ['click', 'change'],

  setup(props, { emit }) {
    const root = ref(null);
    let container: any = null;
    let maxHeight = 0; // 当行的最大高度
    const ellipsis = ref<EllipsisedValue>();
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
            document.body.appendChild(container);
          }
          createContainer();
        }
      }
    );

    onMounted(() => {
      createContainer();
    });

    // 创建虚拟 container，内容为 props.contant 的内容
    const createContainer = () => {
      if (!root.value) return;
      const originStyle = window.getComputedStyle(root.value);
      container = document.createElement('div');
      const styleNames: string[] = Array.prototype.slice.apply(originStyle);
      styleNames.forEach((name) => {
        container.style.setProperty(name, originStyle.getPropertyValue(name));
      });
      container.style.position = 'fixed';
      container.style.left = '999999px';
      container.style.top = '999999px';
      container.style.zIndex = '-1000';
      container.style.height = 'auto';
      container.style.minHeight = 'auto';
      container.style.maxHeight = 'auto';
      container.style.textOverflow = 'clip';
      container.style.whiteSpace = 'normal';
      container.style.webkitLineClamp = 'unset';
      container.style.display = 'block';
      const lineHeight = pxToNumber(originStyle.lineHeight === 'normal' ? props.lineHeight : originStyle.lineHeight);
      maxHeight = Math.floor(
        lineHeight * (Number(props.rows) + 0.5) +
          pxToNumber(originStyle.paddingTop) +
          pxToNumber(originStyle.paddingBottom)
      );

      container.innerText = props.content;
      document.body.appendChild(container);
      calcEllipse();
    };

    // 计算省略号的位置
    const calcEllipse = () => {
      if (container.offsetHeight <= maxHeight) {
        state.exceeded = false;
      } else {
        state.exceeded = true;
        const end = props.content.length;

        const middle = Math.floor((0 + end) / 2);

        const ellipsised = props.direction === 'middle' ? tailorMiddle([0, middle], [middle, end]) : tailor(0, end);

        (ellipsis as any).value = ellipsised;

        document.body.removeChild(container);
      }
    };
    // 计算 start/end 省略
    const tailor: (left: number, right: number) => EllipsisedValue = (left: number, right: number) => {
      const actionText = state.expanded ? props.collapseText : props.expandText;
      const end = props.content.length;

      if (right - left <= 1) {
        if (props.direction === 'end') {
          return {
            leading: props.content.slice(0, left) + props.symbol
          };
        } else {
          return {
            tailing: props.symbol + props.content.slice(right, end)
          };
        }
      }
      const middle = Math.round((left + right) / 2);
      if (props.direction === 'end') {
        container.innerText = props.content.slice(0, middle) + props.symbol + actionText;
      } else {
        container.innerText = actionText + props.symbol + props.content.slice(middle, end);
      }

      if (container.offsetHeight <= maxHeight) {
        if (props.direction === 'end') {
          return tailor(middle, right);
        } else {
          return tailor(left, middle);
        }
      } else {
        if (props.direction === 'end') {
          return tailor(left, middle);
        } else {
          return tailor(middle, right);
        }
      }
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

    const pxToNumber = (value: string | null | number) => {
      if (!value) return 0;
      const match = (value as string).match(/^\d*(\.\d*)?/);
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

    return { ...toRefs(state), root, ellipsis, classes, clickHandle, handleClick };
  }
});
</script>
