<template>
  <div>
    <div
      v-show="showNoticeBar"
      class="nut-noticebar"
      :class="{ withicon: closeMode, close: closeMode, wrapable: wrapable }"
      :style="barStyle"
      @click="handleClick"
      v-if="direction == 'across'"
    >
      <div class="left-icon" v-if="iconShow" :style="{ 'background-image': `url(${iconBg})` }">
        <nut-icon type="notice" :color="color" size="16px" v-if="!iconBg"></nut-icon>
      </div>
      <div ref="wrap" class="wrap">
        <div
          ref="content"
          class="content"
          :class="[animationClass, { 'nut-ellipsis': !scrollable && !wrapable }]"
          :style="contentStyle"
          @animationend="onAnimationEnd"
          @webkitAnimationEnd="onAnimationEnd"
        >
          <slot>{{ text }}</slot>
        </div>
      </div>
      <div v-if="closeMode" class="right-icon" @click.stop="onClickIcon">
        <nut-icon type="cross" :color="color" size="11px"></nut-icon>
      </div>
    </div>

    <div class="nut-noticebar-vertical" v-if="scrollList.length > 0 && direction == 'vertical'" :style="barStyle">
      <template v-if="$slots.default">
        <div class="horseLamp_list" :style="horseLampStyle">
          <ScrollItem v-for="(item, index) in scrollList" v-bind:key="index" :style="{ height: height }" :item="item"></ScrollItem>
        </div>
      </template>

      <template v-else>
        <ul class="horseLamp_list" :style="horseLampStyle">
          <li class="horseLamp_list_item" v-for="(item, index) in scrollList" :key="index" :style="{ height: height }" @click="go(item)">
            {{ item }}
          </li>
        </ul>
      </template>

      <div class="go" @click="!$slots.rightIcon && handleClickIcon()">
        <template v-if="$slots.rightIcon">
          <slot name="rightIcon"></slot>
        </template>
        <template v-else-if="closeMode">
          <nut-icon type="cross" :color="color" size="11px"></nut-icon>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import ScrollItem from './item';
export default {
  name: 'nut-noticebar',
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
    color: {
      type: String,
      default: '#F9911B'
    },
    background: {
      type: String,
      default: 'rgba(254,250,216,1)'
    },
    delay: {
      type: [String, Number],
      default: 1
    },
    scrollable: {
      type: Boolean,
      default: true
    },
    speed: {
      type: Number,
      default: 50
    }
  },
  data() {
    return {
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
      keepAlive: false
    };
  },
  components: {
    ScrollItem: ScrollItem
  },
  computed: {
    iconShow() {
      if (this.leftIcon == 'close') {
        return false;
      } else {
        return true;
      }
    },
    barStyle() {
      let style = {
        color: this.color,
        background: this.background
      };

      if (this.direction == 'vertical') {
        style.height = `${this.height}px`;
      }
      return style;
    },
    contentStyle() {
      return {
        paddingLeft: this.firstRound ? 0 : this.wrapWidth + 'px',
        animationDelay: (this.firstRound ? this.delay : 0) + 's',
        animationDuration: this.duration + 's'
      };
    },
    iconBg() {
      let iconBg = null;
      if (this.leftIcon) {
        iconBg = this.leftIcon;
      }
      return iconBg;
    },
    horseLampStyle() {
      let styles = {};
      if (this.complexAm) {
        styles = {
          transform: `translateY(${this.distance}px)`
        };
      } else {
        if (this.animate) {
          styles = {
            transition: `all ${~~(this.height / this.speed / 4)}s`,
            'margin-top': `-${this.height}px`
          };
        }
      }
      return styles;
    }
  },
  watch: {
    text: {
      handler(val, newVal) {
        // console.log(val, newVal, this.showNoticeBar == false, 'text');

        if (this.showNoticeBar == false) {
          return;
        }
        this.$nextTick(() => {
          const { wrap, content } = this.$refs;

          if (!wrap || !content) {
            return;
          }
          const wrapWidth = wrap.getBoundingClientRect().width;

          const offsetWidth = content.getBoundingClientRect().width;
          // console.log(wrapWidth, offsetWidth, 'text222');

          if (this.scrollable && offsetWidth > wrapWidth) {
            this.wrapWidth = wrapWidth;
            this.offsetWidth = offsetWidth;

            this.duration = offsetWidth / this.speed;
            this.animationClass = 'play';
          } else {
            this.animationClass = '';
          }
        });
      },
      immediate: true
    },
    list(newValue, oldValue) {
      this.scrollList = [].concat(newValue);
    }
  },
  mounted() {
    console.log(this.direction);
    if (this.direction == 'vertical') {
      if (this.$slots.default) {
        this.scrollList = [].concat(this.$slots.default);
      } else {
        this.scrollList = [].concat(this.list);
      }

      setTimeout(() => {
        this.complexAm ? this.startRoll() : this.startRollEasy();
      }, this.standTime);
    }
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event);
    },
    onClickIcon(event) {
      this.showNoticeBar = !this.closeMode;
      this.$emit('close', event);
    },
    onAnimationEnd() {
      this.firstRound = false;
      this.$nextTick(() => {
        this.duration = (this.offsetWidth + this.wrapWidth) / this.speed;
        this.animationClass = 'play-infinite';
      });
    },
    /**
     * 利益点滚动方式一
     */
    startRollEasy() {
      this.showhorseLamp();
      this.timer = setInterval(this.showhorseLamp, ~~(this.height / this.speed / 4) * 1000 + this.standTime);
    },
    showhorseLamp() {
      this.animate = true;
      setTimeout(() => {
        this.scrollList.push(this.scrollList[0]);
        this.scrollList.shift();
        this.animate = false;
      }, ~~(this.height / this.speed / 4) * 1000);
    },

    startRoll() {
      this.timer = setInterval(() => {
        let chunk = 100;
        for (let i = 0; i < chunk; i++) {
          this.scroll(i, i < chunk - 1 ? false : true);
        }
      }, this.standTime + 100 * this.speed);
    },
    scroll(n, last) {
      setTimeout(() => {
        this.distance -= this.height / 100;
        if (last) {
          this.scrollList.push(this.scrollList[0]);
          this.scrollList.shift();
          this.distance = 0;
        }
      }, n * this.speed);
    },

    /**
     * 点击滚动单元
     */
    go(item) {
      this.$emit('click', item);
    },

    handleClickIcon() {
      this.$emit('close', this.scrollList[0]);
    },

    activated() {
      if (this.keepAlive) {
        this.keepAlive = false;
      }
    },

    deactivated() {
      this.keepAlive = true;
      clearInterval(this.timer);
    },

    destroyed() {
      clearInterval(this.timer);
    }
  }
};
</script>
<style lang="scss">
@import 'noticebar.scss';
</style>
