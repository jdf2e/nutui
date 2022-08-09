<template>
  <view :class="classes">
    <view
      v-show="showNoticeBar"
      class="nut-noticebar-page"
      :class="{ withicon: closeMode, close: closeMode, wrapable: wrapable }"
      :style="barStyle"
      @click="handleClick"
      v-if="direction == 'across'"
    >
      <view class="left-icon" v-if="iconShow" :style="{ 'background-image': `url(${iconBg})` }">
        <slot name="left-icon"><nut-icon name="notice" size="16" :color="color" v-if="!iconBg"></nut-icon></slot>
      </view>
      <view ref="wrap" :class="`wrap wrap${id}`">
        <view
          ref="content"
          class="content"
          :class="[animationClass, { 'nut-ellipsis': isEllipsis }, `content${id}`]"
          :style="contentStyle"
          @animationend="onAnimationEnd"
          @webkitAnimationEnd="onAnimationEnd"
        >
          <slot>{{ text }}</slot>
        </view>
      </view>
      <view v-if="closeMode || rightIcon" class="right-icon" @click.stop="onClickIcon">
        <slot name="right-icon">
          <nut-icon v-bind="$attrs" :name="rightIcon ? rightIcon : 'close'" :color="color"></nut-icon
        ></slot>
      </view>
    </view>

    <view class="nut-noticebar-vertical" v-if="scrollList.length > 0 && direction == 'vertical'" :style="barStyle">
      <template v-if="slots.default">
        <view class="horseLamp_list" :style="horseLampStyle">
          <ScrollItem
            v-for="(item, index) in scrollList"
            v-bind:key="index"
            :style="{ height: height + 'px', 'line-height': height + 'px' }"
            :item="item"
          ></ScrollItem>
        </view>
      </template>

      <template v-else>
        <ul class="horseLamp_list" :style="horseLampStyle">
          <li
            class="horseLamp_list_item"
            v-for="(item, index) in scrollList"
            :key="index"
            :style="{ height: height }"
            @click="go(item)"
          >
            {{ item }}
          </li>
        </ul>
      </template>

      <view class="go" @click="!slots.rightIcon && handleClickIcon()">
        <template v-if="slots.rightIcon">
          <slot name="rightIcon"></slot>
        </template>
        <template v-else-if="closeMode">
          <nut-icon type="cross" :color="color" size="11px"></nut-icon>
        </template>
      </view>
    </view>
  </view>
</template>
<script lang="ts">
import {
  toRefs,
  onMounted,
  onUnmounted,
  reactive,
  computed,
  CSSProperties,
  onActivated,
  onDeactivated,
  ref,
  watch,
  h
} from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create } = createComponent('noticebar');
import Taro from '@tarojs/taro';

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
    leftIcon: { type: String, default: '' },
    rightIcon: { type: String, default: '' },
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
    }
  },
  emits: ['click', 'close'],

  setup(props, { emit, slots }) {
    // console.log('componentName', componentName);

    const wrap = ref<null | HTMLElement>(null);
    const content = ref<null | HTMLElement>(null);

    const state = reactive({
      wrapWidth: 0,
      firstRound: true,
      duration: 0,
      offsetWidth: 0,
      showNoticeBar: true,
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

    const iconShow = computed(() => {
      if (props.leftIcon == 'close') {
        return false;
      } else {
        return true;
      }
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

    const iconBg = computed(() => {
      let iconBg = '';
      if (props.leftIcon) {
        iconBg = props.leftIcon;
      }
      return iconBg;
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
      if (state.showNoticeBar == false) {
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
        state.showNoticeBar = !props.closeMode;
      }
      emit('close', event);
    };

    const onAnimationEnd = () => {
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
      iconShow,
      barStyle,
      contentStyle,
      iconBg,
      horseLampStyle,
      wrap,
      content,
      handleClick,
      onClickIcon,
      onAnimationEnd,
      go,
      handleClickIcon,
      slots
    };
  }
});
</script>
