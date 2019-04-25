<template>
  <div class="nut-slider">
    <div class="nut-slider-left-text" v-if="showRangeTxt">{{ range[0] }}</div>
    <div class="nut-slider-box" @click="onClick">
      <div
        :class="['nut-slider-Handle',{'nut-slider-ani':ani}]"
        @touchstart="onTouchStart"
        @touchmove="onTouchMove"
        @touchend="onTouchEnd"
        @click="onTouchEnd"
        @touchcancel="onTouchEnd"
        :style="{'left':posi+'px'}"
      >
        <span
          :class="['nut-slider-label',{'nut-slider-label-always':showLabelAlways}]"
          v-if="showLabel"
        >{{current}}</span>
      </div>
    </div>
    <div class="nut-slider-right-text" v-if="showRangeTxt">{{ range[1] }}</div>
  </div>
</template>
<script>
import requestAniFrame from '../../utils/raf.js';
export default {
  name: "nut-slider",
  props: {
    value: {
      type: [String, Number]
    },
    showLabel: {
      type: Boolean,
      default: false
    },
    showLabelAlways: {
      type: Boolean,
      default: false
    },
    showRangeTxt: {
      type: Boolean,
      default: false
    },
    range: {
      type: Array,
      validator: function(value) {
        return value.length === 2 && value[1] > value[0];
      },
      default() {
        return [0, 10];
      }
    },
    stage: {
      type: [String, Number]
    }
  },
  data() {
    return {
      box: null,
      boxLeft: 0,
      current: 0,
      handle: null,
      posi: null,
      level: null,
      ani: false,
      scheduledAnimationFrame:false
    };
  },
  computed: {
    total() {
      return this.range[1] - this.range[0];
    },
    cell() {
      return this.total / this.level;
    }
  },
  methods: {
    onTouchStart(event) {
      if (event.cancelable) {
        event.preventDefault();
      }
      this.ani = true;
    },
    onTouchMove(event) {
      if (event.cancelable) {
        event.preventDefault();
      }

      if (this.scheduledAnimationFrame) return;

      this.scheduledAnimationFrame = true;
      requestAniFrame(() => {
          this.scheduledAnimationFrame = false;
          const evt = event.touches[0];
          const pageScrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
          this.boxLeft = this.box.getBoundingClientRect().left;
          const posi = evt.pageX - this.boxLeft - pageScrollLeft;
          this.setPosi(posi);
      });
    },
    setVal(posi) {
      const trans = (posi / this.box.clientWidth) * this.total;
      this.current = Math.round(trans / this.cell) * this.cell + this.range[0];
      this.$emit("input", this.current);
    },
    valToPosi() {
      return (
        (this.current - this.range[0]) * (this.box.clientWidth / this.total)
      );
    },
    setPosi(posi) {
      if (posi < 0 || posi > this.box.clientWidth) return;
      this.posi = posi;
      this.setVal(posi);
    },
    onTouchEnd(event) {
      if (event.cancelable) {
        event.preventDefault();
      }
      this.posi = this.valToPosi();
      this.ani = false;
    },
    onClick(event) {
      if (event.cancelable) {
        event.preventDefault();
      }
      const pageScrollLeft =
        document.documentElement.scrollLeft || document.body.scrollLeft;
      this.boxLeft = this.box.getBoundingClientRect().left;
      const posi = event.pageX - this.boxLeft - pageScrollLeft;
      this.setVal(posi);
      this.posi = this.valToPosi();
    },
    propInit() {
      if (
        this.value !== "undefined" &&
        this.value >= this.range[0] &&
        this.value <= this.range[1]
      ) {
        this.current = this.value;
      } else {
        this.current = this.range[0];
      }
      if (!this.stage || this.stage > this.range[1] - this.range[0]) {
        this.level = this.range[1] - this.range[0];
      } else {
        this.level = this.stage;
      }
      this.posi = this.valToPosi();
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.box = this.$el.querySelector(".nut-slider-box");
      this.handle = this.box.querySelector(".nut-slider-Handle");
      this.propInit();
    });
  }
};
</script>
