<template>
  <div class="nut-luckycard" :style="{ height: height + 'px', width: width + 'px' }">
    <div class="nut-content" v-html="content" :style="{ backgroundColor: backgroundColor, fontSize: fontSize + 'px' }"></div>
  </div>
</template>

<script>
import LuckyCard from './luckycard.js';
export default {
  name: 'nut-luckycard',
  props: {
    content: {
      type: String,
      default: ''
    },
    height: {
      type: [String, Number],
      default: 50
    },
    width: {
      type: [String, Number],
      default: 300
    },
    coverColor: {
      type: String,
      default: '#C5C5C5'
    },
    coverImg: {
      type: String,
      default: ''
    },
    fontSize: {
      type: [String, Number],
      default: 20
    },
    backgroundColor: {
      type: String,
      default: '#FFFFFF'
    },
    ratio: {
      type: [String, Number],
      default: 0.5
    }
  },
  data() {
    return {
      luckcard: null
    };
  },
  methods: {
    clearCover() {
      console.log(this.luckcard);
      this.luckcard.clearCover();
    }
  },
  mounted() {
    this.$nextTick(() => {
      const _vm = this;
      this.luckcard = LuckyCard({
        scratchDiv: this.$el,
        coverColor: this.coverColor,
        coverImg: this.coverImg,
        ratio: Number(this.ratio),
        callback: function() {
          //console.log(this);
          this.clearCover();
          _vm.$emit('open', this);
        }
      });
    });
  }
};
</script>
<style lang="scss">
.nut-luckycard {
  position: relative;
  .nut-cover {
    position: absolute;
    top: 0;
    left: 0;
  }
  .nut-content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    line-height: 100%;
    user-select: none;
  }
}
</style>
