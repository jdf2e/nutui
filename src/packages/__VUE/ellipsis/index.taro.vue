<template>
  <view>
    <view :class="classes" @click="handleClick" ref="root" :id="'root' + refRandomId">
      <view class="nut-ellipsis-wordbreak" v-if="!exceeded">{{ content }}</view>

      <view v-if="exceeded && !expanded" class="nut-ellipsis-wordbreak">
        {{ ellipsis.leading }}{{ ellipsis.leading && symbol
        }}<view class="nut-ellipsis-text" v-if="expandText" @click.stop="clickHandle(1)">{{ expandText }}</view
        >{{ ellipsis.tailing && symbol }}{{ ellipsis.tailing }}
      </view>
      <view v-if="exceeded && expanded">
        {{ content }}
        <span class="nut-ellipsis-text" v-if="expandText" @click.stop="clickHandle(2)">{{ collapseText }}</span>
      </view>
    </view>

    <view class="nut-ellipsis-copy" ref="rootContain" :id="'rootContain' + refRandomId" :style="{ width: widthRef }">
      <view>{{ contantCopy }}</view>
    </view>

    <!-- 省略号 symbol  -->
    <view class="nut-ellipsis-copy" ref="symbolContain" :id="'symbolContain' + refRandomId" style="display: inline">{{
      symbolText
    }}</view>

    <!-- 数字 9 英文 W  -->
  </view>
</template>

<script lang="ts">
import { ref, reactive, toRefs, computed, onMounted, PropType, watch, unref } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { useTaroRect } from '@/packages/utils/useTaroRect';
import Taro, { nextTick } from '@tarojs/taro';
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
    },
    lineHeight: {
      type: [Number, String],
      default: '20'
    }
  },
  emits: ['click', 'change'],

  setup(props, { emit }) {
    const root = ref(null);
    const rootContain = ref(null);
    const symbolContain = ref(null);
    let contantCopy = ref(props.content);
    let container: any = null;
    let maxHeight = 0; // 超出的最大高度
    let lineHeight = 0; // 当行的最大高度
    let originHeight = 0; // 原始高度
    const ellipsis = reactive<EllipsisedValue>({});
    const refRandomId = Math.random().toString(36).slice(-8);
    let widthRef = ref('auto');
    const state = reactive({
      exceeded: false, //是否超出
      expanded: false //是否折叠
    });

    let widthBase = [14, 10, 7, 8.4, 10]; // 中、英(大)、英(小)、数字、其他字符的基础宽度
    let symbolTextWidth = widthBase[0] * 0.7921;
    const chineseReg = /^[\u4e00-\u9fa5]+$/; // 汉字
    const digitReg = /^[0-9]+$/; // 数字
    const letterUpperReg = /^[A-Z]+$/; //字母
    const letterLowerReg = /^[a-z]+$/; //字母

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        ell: true,
        [prefixCls]: true
      };
    });

    const symbolText = computed(() => {
      if (props.direction == 'end' || props.direction == 'middle') {
        return `${props.symbol}${props.expandText}`;
      }
      return `${props.symbol}${props.expandText}${props.symbol}`;
    });

    onMounted(() => {
      setTimeout(() => {
        getSymbolInfo();
        getReference();
      }, 100);
    });
    // 获取省略号宽度
    const getSymbolInfo = async () => {
      const refe = await useTaroRect(symbolContain, Taro);
      symbolTextWidth = refe.width ? Math.ceil(refe.width) : Math.ceil(widthBase[0] * 0.7921);
    };

    const getReference = async () => {
      let element = unref(root);

      const query = Taro.createSelectorQuery();
      query.select(`#${(element as any).id}`) &&
        query
          .select(`#${(element as any).id}`)
          .fields(
            {
              computedStyle: ['width', 'height', 'lineHeight', 'paddingTop', 'paddingBottom', 'fontSize']
            },
            (res) => {
              console.log(res);
              lineHeight = pxToNumber(res.lineHeight === 'normal' ? props.lineHeight : res.lineHeight);
              maxHeight = Math.floor(
                lineHeight * (Number(props.rows) + 0.5) + pxToNumber(res.paddingTop) + pxToNumber(res.paddingBottom)
              );

              originHeight = pxToNumber(res.height);

              widthRef.value = res.width;

              // 设置基础字符
              const bsize = pxToNumber(res.fontSize);
              widthBase = [bsize, bsize * 0.72, bsize * 0.53, bsize * 0.4, bsize * 0.75];

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
        const rowNum = Math.floor(props.content.length / (originHeight / lineHeight - 1)); // 每行的字数

        if (props.direction === 'middle') {
          const end = props.content.length;
          ellipsis.leading = tailorContent(0, rowNum * (Number(props.rows) + 0.5), 'end');
          ellipsis.tailing = tailorContent(props.content.length - rowNum * (Number(props.rows) + 0.5), end, 'start');
        } else if (props.direction === 'end') {
          const end = rowNum * (Number(props.rows) + 0.5);
          ellipsis.leading = tailorContent(0, end);
        } else {
          const start = props.content.length - rowNum * (Number(props.rows) + 0.5) - 5;

          ellipsis.tailing = tailorContent(start, props.content.length);
        }

        // 进行兜底判断，是否符合要求
        assignContent();
        setTimeout(() => {
          verifyEllipsis();
        }, 100);
      }
    };

    // 验证省略号
    const verifyEllipsis = async () => {
      const refe = await useTaroRect(rootContain, Taro);
      if (refe && refe.height && refe.height > maxHeight) {
        if (props.direction == 'end') {
          ellipsis.leading = ellipsis.leading?.slice(0, ellipsis.leading.length - 1);
        } else {
          ellipsis.tailing = ellipsis.tailing?.slice(1, ellipsis.tailing.length);
        }

        assignContent();
        setTimeout(() => {
          verifyEllipsis();
        }, 100);
      }
    };

    const assignContent = () => {
      contantCopy.value = `${ellipsis.leading || ''}${ellipsis.leading ? props.symbol : ''}${props.expandText || ''}${
        ellipsis.tailing ? props.symbol : ''
      }${ellipsis.tailing || ''}`;
    };
    // 计算省略号
    const tailorContent = (left: number, right: number, type = '') => {
      const threeDotWidth = symbolTextWidth;

      const direc = props.direction === 'middle' && type ? type : props.direction;

      state.exceeded = true;

      let widthPart = -1;
      let start = left;
      let end = right;
      let cutoff = 0;
      let marking = 0;

      if (direc === 'end') {
        marking = start;
        cutoff = end;
      } else {
        marking = end;
        cutoff = start;
      }

      let contentWidth = pxToNumber(widthRef.value) * Number(props.rows) - threeDotWidth;
      let contentPartWidth = props.direction === 'middle' ? contentWidth / 2 : contentWidth;

      while (widthPart < contentPartWidth) {
        const zi = props.content[marking];
        if (chineseReg.test(zi)) {
          widthPart = Number(widthPart + widthBase[0]);
        } else if (letterUpperReg.test(zi)) {
          widthPart = Number(widthPart + widthBase[1]);
        } else if (letterLowerReg.test(zi)) {
          widthPart = Number(widthPart + widthBase[2]);
        } else if (digitReg.test(zi)) {
          widthPart = Number(widthPart + widthBase[3]);
        } else {
          widthPart = Number(widthPart + widthBase[4]);
        }
        cutoff = marking;

        direc === 'end' ? marking++ : marking--;
      }

      if (direc === 'end') {
        return props.content.slice(0, cutoff);
      } else {
        return props.content.slice(cutoff, end);
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
      symbolContain,
      ellipsis,
      classes,
      contantCopy,
      symbolText,
      clickHandle,
      handleClick,
      refRandomId,
      widthRef
    };
  }
});
</script>
