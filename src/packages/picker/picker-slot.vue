<template>
  <div class="nut-picker-list">
    <div class="nut-picker-roller" ref="roller">
      <div
        class="nut-picker-roller-item"
        :class="{ 'nut-picker-roller-item-hidden': isHidden(index + 1) }"
        v-for="(item, index) in listData"
        :style="setRollerStyle(index + 1)"
        :key="item.label ? item.label : index"
      >
        {{ item.value ? item.value : item }}
      </div>
    </div>
    <div class="nut-picker-content">
      <div class="nut-picker-list-panel" ref="list">
        <div class="nut-picker-item" v-for="(item, index) in listData" :key="item.label ? item.label : index"
          >{{ item.value ? item.value : item }}
        </div>
        <div class="nut-picker-placeholder" v-if="listData && listData.length === 1"></div>
      </div>
    </div>
    <div class="nut-picker-mask"></div>
    <div class="nut-picker-indicator"></div>
  </div>
</template>
<script>
export default {
  name: 'nut-picker-slot',
  props: {
    listData: {
      type: Array,
      required: true
    },
    defaultValue: {
      type: String | Number
    },
    keyIndex: {
      type: Number,
      default: 0
    },
    isUpdate: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      touchParams: {
        startY: 0,
        endY: 0,
        startTime: 0,
        endTime: 0
      },
      currIndex: 1,
      transformY: 0,
      scrollDistance: 0,
      lineSpacing: 36,
      rotation: 20,
      timer: null
    };
  },
  watch: {
    isUpdate: function() {
      this.transformY = 0;
      this.modifyStatus();
    },
    defaultValue: function() {
      this.transformY = 0;
      this.modifyStatus();
    }
  },
  methods: {
    updateTransform(value) {
      if (value) {
        this.transformY = 0;
        this.timer = setTimeout(() => {
          this.modifyStatus(null, value);
        }, 10);
      }
    },

    setRollerStyle(index) {
      return `transform: rotate3d(1, 0, 0, ${-this.rotation * index}deg) translate3d(0px, 0px, 104px)`;
    },

    isHidden(index) {
      if (index >= this.currIndex + 8 || index <= this.currIndex - 8) {
        return true;
      } else {
        return false;
      }
    },

    setTransform(translateY = 0, type, time = 1000, deg) {
      if (type === 'end') {
        this.$refs.list.style.webkitTransition = `transform ${time}ms cubic-bezier(0.19, 1, 0.22, 1)`;
        this.$refs.roller.style.webkitTransition = `transform ${time}ms cubic-bezier(0.19, 1, 0.22, 1)`;
      } else {
        this.$refs.list.style.webkitTransition = '';
        this.$refs.roller.style.webkitTransition = '';
      }
      this.$refs.list.style.webkitTransform = `translate3d(0, ${translateY}px, 0)`;
      this.$refs.roller.style.webkitTransform = `rotate3d(1, 0, 0, ${deg})`;
      this.scrollDistance = translateY;
    },

    setMove(move, type, time) {
      let updateMove = move + this.transformY;
      if (type === 'end') {
        // 限定滚动距离
        if (updateMove > 0) {
          updateMove = 0;
        }
        if (updateMove < -(this.listData.length - 1) * this.lineSpacing) {
          updateMove = -(this.listData.length - 1) * this.lineSpacing;
        }

        // 设置滚动距离为lineSpacing的倍数值
        let endMove = Math.round(updateMove / this.lineSpacing) * this.lineSpacing;
        let deg = `${(Math.abs(Math.round(endMove / this.lineSpacing)) + 1) * this.rotation}deg`;
        this.setTransform(endMove, type, time, deg);
        this.timer = setTimeout(() => {
          this.setChooseValue(endMove);
        }, time / 2);

        this.currIndex = Math.abs(Math.round(endMove / this.lineSpacing)) + 1;
      } else {
        let deg = '0deg';
        if (updateMove < 0) {
          deg = `${(Math.abs(updateMove / this.lineSpacing) + 1) * this.rotation}deg`;
        } else {
          deg = `${(-updateMove / this.lineSpacing + 1) * this.rotation}deg`;
        }

        this.setTransform(updateMove, null, null, deg);
        this.currIndex = Math.abs(Math.round(updateMove / this.lineSpacing)) + 1;
      }
    },

    setChooseValue(move) {
      this.$emit('chooseItem', this.listData[Math.round(-move / this.lineSpacing)], this.keyIndex);
    },

    touchStart(event) {
      event.preventDefault();

      let changedTouches = event.changedTouches[0];
      this.touchParams.startY = changedTouches.pageY;
      this.touchParams.startTime = event.timestamp || Date.now();
      this.transformY = this.scrollDistance;
    },

    touchMove(event) {
      event.preventDefault();

      let changedTouches = event.changedTouches[0];
      this.touchParams.lastY = changedTouches.pageY;
      this.touchParams.lastTime = event.timestamp || Date.now();
      let move = this.touchParams.lastY - this.touchParams.startY;

      this.setMove(move);
    },

    touchEnd(event) {
      event.preventDefault();

      let changedTouches = event.changedTouches[0];
      this.touchParams.lastY = changedTouches.pageY;
      this.touchParams.lastTime = event.timestamp || Date.now();
      let move = this.touchParams.lastY - this.touchParams.startY;

      let moveTime = this.touchParams.lastTime - this.touchParams.startTime;
      if (moveTime <= 300) {
        move = move * 2;
        moveTime = moveTime + 1000;
        this.setMove(move, 'end', moveTime);
      } else {
        this.setMove(move, 'end');
      }
    },

    modifyStatus(type, defaultValue) {
      defaultValue = defaultValue ? defaultValue : this.defaultValue;
      let index = -1;
      if (defaultValue && defaultValue.value) {
        this.listData.some((item, idx) => {
          if (item.value == defaultValue.value) {
            index = idx;
            return true;
          }
        });
      } else {
        index = this.listData.indexOf(defaultValue);
      }
      this.currIndex = index === -1 ? 1 : index + 1;
      let move = index === -1 ? 0 : index * this.lineSpacing;
      type && this.setChooseValue(-move);
      this.setMove(-move);
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.modifyStatus(true);
      // 监听
      this.$el.addEventListener('touchstart', this.touchStart);
      this.$el.addEventListener('touchmove', this.touchMove);
      this.$el.addEventListener('touchend', this.touchEnd);
    });
  },
  beforeDestroy() {
    // 移除监听
    this.$el.removeEventListener('touchstart', this.touchStart);
    this.$el.removeEventListener('touchmove', this.touchMove);
    this.$el.removeEventListener('touchend', this.touchEnd);
    clearTimeout(this.timer);
  }
};
</script>
