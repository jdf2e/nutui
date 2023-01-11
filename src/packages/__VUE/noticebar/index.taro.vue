<template>
  <view :class="classes">
    <view
      v-show="showNoticebar"
      class="nut-noticebar__page"
      :class="{
        'nut-noticebar__page--withicon': closeMode,
        'nut-noticebar__page--close': closeMode,
        'nut-noticebar__page--wrapable': wrapable
      }"
      :style="barStyle"
      @click="handleClick"
      v-if="direction == 'across'"
    >
      <view class="nut-noticebar__page-lefticon">
        <slot name="left-icon">
          <Notice v-if="leftIcon" size="16px"></Notice>
        </slot>
      </view>
      <view ref="wrap" :class="`nut-noticebar__page-wrap wrap${id}`">
        <view
          ref="content"
          :class="wrapContentClass"
          :style="contentStyle"
          @animationend="onAnimationEnd"
          @webkitAnimationEnd="onAnimationEnd"
        >
          <slot>{{ text }}</slot>
        </view>
      </view>
      <view v-if="closeMode || $slots['right-icon']" class="nut-noticebar__page-righticon" @click.stop="onClickIcon">
        <slot name="right-icon"> <CircleClose /> </slot>
      </view>
    </view>

    <view
      class="nut-noticebar__vertical"
      v-if="scrollList.length > 0 && direction == 'vertical' && showNoticebar"
      :style="barStyle"
    >
      <template v-if="slots.default">
        <view class="nut-noticebar__vertical-list" :style="horseLampStyle">
          <ScrollItem
            v-for="(item, index) in scrollList"
            v-bind:key="index"
            :style="{ height: height + 'px', 'line-height': height + 'px' }"
            :item="item"
          ></ScrollItem>
        </view>
      </template>

      <template v-else>
        <ul class="nut-noticebar__vertical-list" :style="horseLampStyle">
          <li
            class="nut-noticebar__vertical-item"
            v-for="(item, index) in scrollList"
            :key="index"
            :style="{ height: pxCheck(height) }"
            @click="go(item)"
          >
            {{ item }}
          </li>
        </ul>
      </template>

      <view class="go" @click="!slots.rightIcon && handleClickIcon()">
        <slot name="rightIcon">
          <CircleClose v-if="closeMode" :color="color" size="11px" />
        </slot>
      </view>
    </view>
  </view>
</template>
<script lang="ts">
import { toRefs, onMounted, onUnmounted, reactive, computed, onActivated, onDeactivated, ref, watch, h } from 'vue';
import { Notice, CircleClose } from '@nutui/icons-vue-taro';
import { createComponent, renderIcon } from '@/packages/utils/create';
import { pxCheck } from '@/packages/utils/pxCheck';
const { componentName, create } = createComponent('noticebar');
import Taro from '@tarojs/taro';

interface stateProps {
  wrapWidth: number;
  firstRound: boolean;
  duration: number;
  offsetWidth: number;
  showNoticebar: boolean;
  animationClass: string;
  animate: boolean;
  scrollList: never[];
  distance: number;
  timer: null;
  keepAlive: boolean;
  isCanScroll: null | boolean;
  id: number;
}

export default create({
  props: {
    // 滚动方向  across 横向 vertical 纵向
    direction: {
      type: String,
      default: 'across'
    },
    list: {
      type: Array,
      default: () => {
        return [];
      }
    },
    standTime: {
      type: Number,
      default: 1000
    },
    complexAm: {
      type: Boolean,
      default: false
    },
    height: {
      type: Number,
      default: 40
    },
    text: {
      type: String,
      default: ''
    },
    closeMode: {
      type: Boolean,
      default: false
    },
    wrapable: {
      type: Boolean,
      default: false
    },
    leftIcon: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: '#F9911B'
    },
    background: {
      type: String,
      default: ''
    },
    delay: {
      type: [String, Number],
      default: 1
    },
    scrollable: {
      type: Boolean,
      default: null
    },
    speed: {
      type: Number,
      default: 50
    }
  },
  components: {
    ScrollItem: function (props) {
      props.item.props.style = props.style;
      return h(props.item);
    },
    Notice,
    CircleClose
  },
  emits: ['click', 'close'],

  setup(props, { emit, slots }) {
    const wrap = ref<null | HTMLElement>(null);
    const content = ref<null | HTMLElement>(null);

    const state = reactive<stateProps>({
      wrapWidth: 0,
      firstRound: true,
      duration: 0,
      offsetWidth: 0,
      showNoticebar: true,
      animationClass: '',

      animate: false,
      scrollList: [],
      distance: 0,
      timer: null,
      keepAlive: false,
      isCanScroll: null,
      id: Math.round(Math.random() * 100000)
    });

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });

    const isEllipsis = computed(() => {
      if (state.isCanScroll == null) {
        return false && !props.wrapable;
      } else {
        return !state.isCanScroll && !props.wrapable;
      }
    });

    const wrapContentClass = computed(() => {
      return {
        'nut-noticebar__page-wrap-content': true,
        'nut-ellipsis': isEllipsis.value,
        [`content${state.id}`]: true,
        [state.animationClass]: true
      };
    });

    const barStyle = computed(() => {
      let style: {
        [props: string]: any;
      } = {
        color: props.color,
        background: props.background
      };

      if (props.direction == 'vertical') {
        style.height = `${props.height}px`;
      }
      return style;
    });

    const contentStyle = computed(() => {
      return {
        animationDelay: (state.firstRound ? props.delay : 0) + 's',
        animationDuration: state.duration + 's',
        transform: `translateX(${state.firstRound ? 0 : state.wrapWidth + 'px'})`
      };
    });
    const horseLampStyle = computed(() => {
      let styles = {};
      if (props.complexAm) {
        styles = {
          transform: `translateY(${state.distance}px)`
        };
      } else {
        if (state.animate) {
          styles = {
            transition: `all ${~~(props.height / props.speed / 4)}s`,
            'margin-top': `-${props.height}px`
          };
        }
      }
      return styles;
    });

    watch(
      () => props.text,
      (value) => {
        initScrollWrap(value);
      }
    );

    watch(
      () => props.list,
      (value) => {
        state.scrollList = [].concat(value as any);
      }
    );

    const initScrollWrap = (value: string) => {
      if (state.showNoticebar == false) {
        return;
      }
      setTimeout(() => {
        if (!wrap.value || !content.value) {
          return;
        }

        let wrapWidth = 0;
        let offsetWidth = 0;

        Taro.createSelectorQuery()
          .select(`.wrap${state.id}`)
          .boundingClientRect((rect) => {
            if (rect.width > 0) wrapWidth = rect.width;
          })
          .exec();
        Taro.createSelectorQuery()
          .select(`.content${state.id}`)
          .boundingClientRect((rect) => {
            if (rect.width > 0) offsetWidth = rect.width;

            state.isCanScroll = props.scrollable == null ? offsetWidth > wrapWidth : props.scrollable;
            console.log(11, state.isCanScroll);
            if (state.isCanScroll) {
              state.wrapWidth = wrapWidth;
              state.offsetWidth = offsetWidth;

              state.duration = offsetWidth / props.speed;
              state.animationClass = 'play';
            } else {
              state.animationClass = '';
            }
          })
          .exec();
      }, 100);
    };
    const handleClick = (event: Event) => {
      emit('click', event);
    };

    const onClickIcon = (event: Event) => {
      if (props.closeMode) {
        state.showNoticebar = !props.closeMode;
      }
      emit('close', event);
    };

    const onAnimationEnd = () => {
      console.log('运动');
      state.firstRound = false;

      setTimeout(() => {
        state.duration = (state.offsetWidth + state.wrapWidth) / props.speed;
        state.animationClass = 'play-infinite';
      }, 0);
    };

    /**
     * 利益点滚动方式一
     */
    const startRollEasy = () => {
      showhorseLamp();
      (state.timer as any) = setInterval(showhorseLamp, ~~(props.height / props.speed / 4) * 1000 + props.standTime);
    };
    const showhorseLamp = () => {
      state.animate = true;
      setTimeout(() => {
        state.scrollList.push(state.scrollList[0]);
        state.scrollList.shift();
        state.animate = false;
      }, ~~(props.height / props.speed / 4) * 1000);
    };

    const startRoll = () => {
      (state.timer as any) = setInterval(() => {
        let chunk = 100;
        for (let i = 0; i < chunk; i++) {
          scroll(i, i < chunk - 1 ? false : true);
        }
      }, props.standTime + 100 * props.speed);
    };
    const scroll = (n: number, last: boolean) => {
      setTimeout(() => {
        state.distance -= props.height / 100;
        if (last) {
          state.scrollList.push(state.scrollList[0]);
          state.scrollList.shift();
          state.distance = 0;
        }
      }, n * props.speed);
    };
    /**
     * 点击滚动单元
     */
    const go = (item: any) => {
      emit('click', item);
    };

    const handleClickIcon = () => {
      if (props.closeMode) {
        state.showNoticebar = !props.closeMode;
      }
      emit('close', state.scrollList[0]);
    };

    onMounted(() => {
      if (props.direction == 'vertical') {
        if (slots.default) {
          state.scrollList = [].concat(slots.default()[0].children as any);
        } else {
          state.scrollList = [].concat(props.list as any);
        }

        setTimeout(() => {
          props.complexAm ? startRoll() : startRollEasy();
        }, props.standTime);
      } else {
        initScrollWrap(props.text);
      }
    });

    onActivated(() => {
      if (state.keepAlive) {
        state.keepAlive = false;
      }
    });

    onDeactivated(() => {
      state.keepAlive = true;
      clearInterval(state.timer as any);
    });

    onUnmounted(() => {
      clearInterval(state.timer as any);
    });

    return {
      ...toRefs(props),
      ...toRefs(state),
      isEllipsis,
      classes,
      barStyle,
      contentStyle,
      horseLampStyle,
      wrap,
      content,
      handleClick,
      onClickIcon,
      onAnimationEnd,
      go,
      handleClickIcon,
      slots,
      pxCheck,
      wrapContentClass,
      renderIcon
    };
  }
});
</script>
