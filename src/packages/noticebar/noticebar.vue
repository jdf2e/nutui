<template>
  <div
    v-show="showNoticeBar"
    class="nut-noticebar"
    :class="{ withicon: closeMode, close: closeMode, wrapable: wrapable }"
    :style="barStyle"
    @click="handleClick"
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
</template>

<script>
export default {
  name: 'nut-noticebar',
  props: {
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
      animationClass: ''
    };
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
      return {
        color: this.color,
        background: this.background
      };
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
    }
  }
};
</script>
