<template>
  <div class="nut-signature" :class="customClass">
    <div class="nut-signature-inner" ref="wrap">
      <canvas ref="canvas" :height="canvasHeight" :width="canvasWidth" v-if="isCanvasSupported"></canvas>
      <p class="nut-signature-unsopport" v-else>{{ unSupportTpl }}</p>
    </div>
    <slot></slot>
    <nut-button type="red" shape="circle" small @click="clear()">重签</nut-button>
    <nut-button shape="circle" small @click="confirm()">确认</nut-button>
  </div>
</template>
<script>
import NutButton from '../button/button.vue';
import '../button/button.scss';
export default {
  name: 'nut-signature',
  props: {
    customClass: {
      type: String,
      default: ''
    },
    lineWidth: {
      type: Number,
      default: 2
    },
    strokeStyle: {
      type: String,
      default: '#000'
    },
    type: {
      type: String,
      default: 'png'
    },
    unSupportTpl: {
      type: String,
      default: '对不起，当前浏览器不支持Canvas，无法使用本控件！'
    }
  },
  data() {
    return {
      canvasHeight: 0,
      canvasWidth: 0,
      ctx: null,
      isSupportTouch: 'ontouchstart' in window,
      events: 'ontouchstart' in window ? ['touchstart', 'touchmove', 'touchend', 'touchleave'] : ['mousedown', 'mousemove', 'mouseup', 'mouseleave']
    };
  },
  components: {
    'nut-button': NutButton
  },
  computed: {
    isCanvasSupported() {
      let elem = document.createElement('canvas');
      return !!(elem.getContext && elem.getContext('2d'));
    }
  },

  methods: {
    addEvent() {
      (this.startEventHandler = this.startEventHandler.bind(this)), this.$refs.canvas.addEventListener(this.events[0], this.startEventHandler, false);
    },

    startEventHandler(event) {
      event.preventDefault();

      this.ctx.beginPath();
      this.ctx.lineWidth = this.lineWidth;
      this.ctx.strokeStyle = this.strokeStyle;
      (this.moveEventHandler = this.moveEventHandler.bind(this)),
        (this.leaveEventHandler = this.leaveEventHandler.bind(this)),
        (this.endEventHandler = this.endEventHandler.bind(this));

      this.$refs.canvas.addEventListener(this.events[1], this.moveEventHandler, false);
      this.$refs.canvas.addEventListener(this.events[2], this.endEventHandler, false);
      this.$refs.canvas.addEventListener(this.events[3], this.leaveEventHandler, false);
    },

    moveEventHandler(event) {
      event.preventDefault();

      let evt = this.isSupportTouch ? event.touches[0] : event;
      let coverPos = this.$refs.canvas.getBoundingClientRect();
      let mouseX = evt.clientX - coverPos.left;
      let mouseY = evt.clientY - coverPos.top;

      this.ctx.lineTo(mouseX, mouseY);
      this.ctx.stroke();
    },

    endEventHandler(event) {
      event.preventDefault();

      this.$refs.canvas.removeEventListener(this.events[1], this.moveEventHandler, false);
      this.$refs.canvas.removeEventListener(this.events[2], this.endEventHandler, false);
    },
    leaveEventHandler(event) {
      event.preventDefault();
      this.$refs.canvas.removeEventListener(this.events[1], this.moveEventHandler, false);
      this.$refs.canvas.removeEventListener(this.events[2], this.endEventHandler, false);
    },
    clear(isUnEmit) {
      this.$refs.canvas.addEventListener(this.events[2], this.endEventHandler, false);
      this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
      this.ctx.closePath();
      if (!isUnEmit) {
        this.$emit('clear');
      }
    },

    confirm() {
      this.onSave(this.$refs.canvas);
    },

    onSave(canvas) {
      let dataurl;
      switch (this.type) {
        case 'png':
          dataurl = canvas.toDataURL('image/png');
          break;
        case 'jpg':
          dataurl = canvas.toDataURL('image/jpeg', 0.8);
          break;
      }
      this.clear(true);
      this.$emit('confirm', canvas, dataurl);
    }
  },

  mounted() {
    if (this.isCanvasSupported) {
      this.ctx = this.$refs.canvas.getContext('2d');
      this.canvasWidth = this.$refs.wrap.offsetWidth;
      (this.canvasHeight = this.$refs.wrap.offsetHeight), this.addEvent();
    }
  }
};
</script>
