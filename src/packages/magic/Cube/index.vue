<template>
  <div class="cube">
    <div class="adjust-position cube-container" ref="container">
      <div class="cube-wrapper" ref="wrapper" @transitionend="transitionEndHandler">
        <div class="cube-col" v-for="i in clone" :key="'clone-prev-' + i">
          <CubeItem @clickEvent="clickEvent" class="cube-item-wrap" :item="data_top[i + data_bottom.length - clone - 1]" />
          <CubeItem @clickEvent="clickEvent" class="cube-item-wrap" :item="data_bottom[i + data_bottom.length - clone - 1]" />
        </div>
        <div class="cube-col cube-col--anime" v-for="(item, i) in data_bottom" :key="i">
          <CubeItem @clickEvent="clickEvent" class="cube-item-wrap" :item="data_top[i]" />
          <CubeItem @clickEvent="clickEvent" class="cube-item-wrap" :item="data_bottom[i]" />
        </div>
        <div class="cube-col" v-for="(item, i) in data_bottom.slice(0, clone)" :key="'clone-next-' + i">
          <CubeItem @clickEvent="clickEvent" class="cube-item-wrap" :item="data_top[i]" />
          <CubeItem @clickEvent="clickEvent" class="cube-item-wrap" :item="data_bottom[i]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CubeItem from './CubeItem';
// 贝赛尔缓冲曲线计算公式
function sineEaseOut(t, b, c, d) {
  return c * Math.sin((t / d) * (Math.PI / 2)) + b;
}
function cubicEaseOut(t, b, c, d) {
  return -c * (t /= d) * (t - 2) + b;
}
// 获取计算属性
function getPropertyValue(el, attr) {
  const st = window.getComputedStyle(el, null);
  const tr =
    st.getPropertyValue('-webkit-' + attr) ||
    st.getPropertyValue('-moz-' + attr) ||
    st.getPropertyValue('-ms-' + attr) ||
    st.getPropertyValue('-o-' + attr) ||
    st.getPropertyValue(attr);
  if (tr && tr != 'none') {
    return tr;
  }
  return null;
}
export default {
  props: {
    dataMagic: {
      type: [Object, Array],
      default: null
    },
    type: {
      type: String,
      default: 'rank'
    },
    // 溢出可滑动的倍数
    overflow: {
      type: [String, Number],
      default: 1.4,
      validator: value => {
        return value >= 1 && value < 1.5;
      }
    },
    autoplay: {
      type: Boolean,
      default: false
    },
    interval: {
      type: [String, Number],
      default: 3000
    }
  },
  components: {
    CubeItem
  },
  data() {
    return {
      // 克隆数目
      clone: 4
    };
  },
  computed: {
    data_top() {
      return this.dataMagic.filter((item, i) => i % 2 == 0);
    },
    data_bottom() {
      return this.dataMagic.filter((item, i) => i % 2 == 1);
    }
  },
  watch: {
    autoplay(value) {
      value ? this.startPlay() : this.clearPlayer();
    }
  },
  // computed: {
  //   ...mapGetters([
  //     'xHeight'
  //   ]),
  //   styleTop() {
  //     let top = (this.xHeight * 0.244) + 12
  //     return {
  //       marginTop: `${this.xHeight}px`,
  //     }
  //   }
  // },
  mounted() {
    this.$nextTick(() => {
      this.canMove = true;
      this.$wrapper = this.$refs.wrapper;
      this.$cubes = [...this.$wrapper.children];
      // 单元大小
      this.ITEM_WIDTH = this.$wrapper.clientWidth / 4;
      this.computeWidth = {
        '-2': -this.ITEM_WIDTH * 2,
        '-1': -this.ITEM_WIDTH,
        '0': 0,
        '1': this.ITEM_WIDTH,
        '2': this.ITEM_WIDTH * 2,
        '3': this.ITEM_WIDTH * 3,
        '4': this.ITEM_WIDTH * 4,
        '5': this.ITEM_WIDTH * 5
      };
      // 起始索引
      this.current = this.clone;
      // 起始位置
      this.endX = -this.ITEM_WIDTH * this.current;
      this.offsetX = this.endX;
      // 设置魔方样式
      this.$wrapper.style.transitionDuration = null;
      this.$cubes.forEach((cube, idx) => {
        cube.style.transition && (cube.style.transition = null);
      });
      this.setWrapper(this.endX);
      this.setCube(this.endX);
      this.$wrapper.style.webkitPerspectiveOrigin = `${this.current * this.ITEM_WIDTH + this.$wrapper.clientWidth / 2}px center`;
      // 自动播放
      setTimeout(() => {
        this.startPlay();
        this.$wrapper.classList.add('cube-wrapper--inited');
      }, 1000);
      this.bindEvent();
    });

    this.initWQVisibleEvent();
    // 防止关闭屏幕/跳出时仍在执行动画
    document.addEventListener('visibilitychange', e => {
      e.hidden ? this.clearPlayer() : this.startPlay();
    });
  },
  methods: {
    clickEvent(item) {
      this.$emit('clickItem', item);
    },
    bindEvent() {
      this.$wrapper.addEventListener('touchstart', this.touchStartHandler);
      this.$wrapper.addEventListener('touchmove', this.touchMoveHandler);
      this.$wrapper.addEventListener('touchend', this.touchEndHandler);
    },
    // 初始化微信手q的展示隐藏事件
    initWQVisibleEvent() {
      document.addEventListener(
        'qbrowserVisibilityChange',
        function(e) {
          var evt = document.createEvent('HTMLEvents');
          evt.initEvent('visibilitychange', false, false);
          evt.hidden = e.hidden;
          document.dispatchEvent(evt);
        },
        true
      );
      document.addEventListener(
        'visibilitychange',
        function(e) {
          e.hidden = e.hidden === undefined ? document.hidden : e.hidden;
        },
        true
      );
    },
    // 播放
    startPlay() {
      if (!this.autoplay) return;
      this.clearPlayer();
      this.player = setInterval(() => {
        // 防止关闭屏幕/跳出时仍在执行
        this.canMove = true;
        this.goto(this.current + 1, 600, true);
      }, this.interval);
    },
    clearPlayer() {
      clearInterval(this.player);
      this.player = null;
    },
    touchStartHandler(e) {
      if (!this.canMove) return;
      this.clearPlayer();
      this.touching = true;

      // 追随到当前过渡位置
      if (this.$wrapper.style.transitionDuration) {
        // 正在过渡
        // this.continueTransition()
      }

      // 记录起始坐标
      this.startX = e.touches[0].pageX;
      this.startY = e.touches[0].pageY;

      this.$wrapper.style.transitionDuration = null;
      this.$cubes.forEach((cube, idx) => {
        cube.style.transition && (cube.style.transition = null);
      });
    },
    touchMoveHandler(e) {
      if (!this.canMove || !this.touching) return;

      let moveX = e.touches[0].pageX - this.startX;
      let moveY = e.touches[0].pageY - this.startY;
      // 防止上下滑动对影响魔方水平滚动的影响
      if (!(Math.abs(moveY) > Math.abs(moveX) * 1.5)) {
        e.cancelable && e.preventDefault();
      }
      // sineEaseOut曲线: 当前x、 起始x、目标y、目标x
      moveX = moveX / 3;
      if (moveX > 0) {
        // moveX = sineEaseOut(moveX, 0, this.ITEM_WIDTH * this.overflow , this.ITEM_WIDTH * 6)
        this.direction = -1;
      } else if (moveX < 0) {
        // moveX = -sineEaseOut(-moveX, 0, this.ITEM_WIDTH * this.overflow , this.ITEM_WIDTH * 6)
        this.direction = 1;
      } else {
        return;
      }
      // 滑动偏移量
      this.offsetX = moveX + this.endX;
      // 设置魔方样式

      let rotate = this.getMiddleRotate(moveX);
      this.setWrapper(this.offsetX);
      this.setCube(this.offsetX, this.offsetX > 0 ? moveX : -moveX);
    },
    touchEndHandler(e) {
      if (!this.canMove || !this.touching) return;
      let cur;
      let overX = (this.offsetX % this.ITEM_WIDTH) * this.direction;
      // 计算目标索引
      if (overX == 0) {
        cur = this.offsetX / this.ITEM_WIDTH;
      } else if ((overX > 0 && overX < this.ITEM_WIDTH * (3 / 4)) || (overX < 0 && overX >= -this.ITEM_WIDTH * (1 / 4))) {
        cur = Math.ceil(this.offsetX / this.ITEM_WIDTH);
      } else {
        cur = Math.floor(this.offsetX / this.ITEM_WIDTH);
      }
      cur = -cur;
      // 达到循环边界了，需要禁止滑动，等切换结束才允许继续滑
      if (cur >= this.data_bottom.length + this.clone || cur <= this.clone - 1) {
        this.canMove = false;
      }

      // 调整到边界目标距离
      this.goto(cur, 400);
      // this.goto(cur, Math.abs(cur * this.ITEM_WIDTH - Math.abs(this.offsetX)) / this.ITEM_WIDTH * 400)

      // 继续自动播放
      this.startPlay();
      this.touching = false;
    },
    /**
     * 中断过渡
     */
    continueTransition() {
      let _wrapperTr = getPropertyValue(this.$wrapper, 'transform');
      let _wrapperPo = getPropertyValue(this.$wrapper, 'perspective-origin');
      if (_wrapperTr && this.$wrapper.style.transitionDuration) {
        (this.$wrapper.style.transform = _wrapperTr), (this.$wrapper.style.perspectiveOrigin = _wrapperPo);
        this.$cubes.forEach(cube => {
          cube.style.transform = getPropertyValue(cube, 'transform');
          cube.style.opacity = +getPropertyValue(cube, 'opacity');
          cube.style.transformOrigin = getPropertyValue(cube, 'transform-origin');
        });
        // 记录当前位置
        this.endX = 0;
      }
    },
    /**
     * 设置容器滚动
     * nowX: 目标位置
     * time: 过渡时长
     * wait: 运动是否需要滞后
     */
    setWrapper(nowX, time, wait) {
      this.offsetX = nowX;
      if (time > 0) {
        this.$wrapper.style.transitionDuration = `${time}ms`;
      }
      if (wait) {
        setTimeout(() => {
          this.$wrapper.style.transform = `translate3d(${nowX}px, 0, 0)`;
        }, 0);
      } else {
        this.$wrapper.style.transform = `translate3d(${nowX}px, 0, 0)`;
      }
    },
    /**
     * 设置魔方样式
     * nowX: 目标位置
     * rotate: 角度正负
     */
    setCube(nowX, rotate = 0) {
      // 关闭所有过渡
      this.$cubes.forEach((cube, idx) => {
        cube.style.transition && (cube.style.transition = null);
        let _offset = idx * this.ITEM_WIDTH + nowX;
        if (_offset > this.computeWidth[-1] && _offset < this.computeWidth[0]) {
          // 左边元素
          let bezier_offset = cubicEaseOut(_offset % this.ITEM_WIDTH, 0, -this.ITEM_WIDTH, -this.ITEM_WIDTH);
          cube.style.transform = `rotateY(${this.getBetweenRotate(_offset)}deg) translate3d(0, ${this.getTranslate(_offset)}px, 0)`;
          cube.style.opacity = this.getOpacity(bezier_offset);
        } else if (_offset > this.computeWidth[3] && _offset < this.computeWidth[4]) {
          // 右边元素
          let bezier_offset = cubicEaseOut(_offset % this.ITEM_WIDTH, 0, this.ITEM_WIDTH, this.ITEM_WIDTH);
          cube.style.transform = `rotateY(${this.getBetweenRotate(_offset)}deg) translate3d(0, ${this.getTranslate(_offset)}px, 0)`;
          cube.style.opacity = this.getOpacity(bezier_offset);
        } else if (_offset >= this.computeWidth[4] && _offset < this.computeWidth[5]) {
          // 最右边元素（自动播放时的预备状态）
          cube.style.transform = `rotateY(60deg) translate3d(0, ${this.getTranslate(_offset)}px, 0)`;
          cube.style.opacity = 0;
        } else if (_offset > this.computeWidth[-2] && _offset <= this.computeWidth[-1]) {
          // 最左边元素（自动播放时的预备状态）
          cube.style.transform = `rotateY(-60deg) translate3d(0, ${this.getTranslate(_offset)}px, 0)`;
          cube.style.opacity = 0;
        } else if (_offset >= this.computeWidth[0] && _offset <= this.computeWidth[3]) {
          // 中间元素
          cube.style.transform = `rotateY(${this.getMiddleRotate(rotate)}deg) translate3d(0, ${this.getTranslate(_offset)}px, 0)`;
          cube.style.opacity = 1;
        }
        cube.style.transformOrigin = this.getTransformOrigin(_offset);
      });
    },
    // 设置魔方的变化基准点
    getTransformOrigin(d, overflow) {
      if (d >= this.computeWidth[-1] && d <= this.computeWidth[4]) {
        let to = this.ITEM_WIDTH - d / 3;
        if (to < this.computeWidth[0]) {
          to = this.computeWidth[0];
        } else if (to > this.computeWidth[1]) {
          to = this.computeWidth[1];
        }
        return `${to}px center`;
      }
    },
    // 设置两侧魔方的旋转
    getBetweenRotate(d) {
      return ((d % this.ITEM_WIDTH) * (360 / this.$wrapper.clientWidth) * 70) / 90;
    },
    // 设置中间魔方的旋转， 假设临界值交点为5 * 魔方宽度，减缓数率a为0.4
    getMiddleRotate(d) {
      let mid = 5;
      let a = 0.35;
      // 下降曲线：y2 = bx + k  得出 b = -7/3、k = 7/3 所以：y2 = -7/3x + 7/3w
      if (d > (this.ITEM_WIDTH * mid) / 10) {
        return ((a * mid) / (10 - mid)) * (this.ITEM_WIDTH - d);
      } else if (d < (-this.ITEM_WIDTH * mid) / 10) {
        return ((-a * mid) / (10 - mid)) * (this.ITEM_WIDTH + d);
      } else {
        // 上升曲线：y1 = ax 设 a = 0.2
        return a * d;
      }
    },
    // 设置透明度
    getOpacity(d) {
      return 1 - ((Math.abs(d) / this.ITEM_WIDTH) % 1);
    },
    // 设置偏移量
    getTranslate(d) {
      const slow = 7; // 减缓倍率
      if (d > this.computeWidth[2]) {
        if (d > this.computeWidth[3]) {
          return (this.computeWidth[3] - d) / 5;
        }
        return (this.computeWidth[3] - d) / slow;
      } else if (d < this.computeWidth[1]) {
        if (d < 0) {
          return d / 5;
        }
        return d / slow;
      } else {
        return this.ITEM_WIDTH / slow;
      }
    },
    // 检测无限循环
    transitionEndHandler(event) {
      if (event.target === this.$wrapper) {
        this.$wrapper.style.transitionDuration = null;
        this.$cubes.forEach((cube, idx) => {
          cube.style.transition && (cube.style.transition = null);
        });
        this.$wrapper.style.webkitPerspectiveOrigin = `${this.current * this.ITEM_WIDTH + this.$wrapper.clientWidth / 2}px center`;
        if (this.current >= this.data_bottom.length + this.clone) {
          this.goto(this.current % this.data_bottom.length, 0);
          setTimeout(() => {
            this.canMove = true;
          }, 0);
        } else if (this.current <= this.clone - 1) {
          this.goto(this.data_bottom.length + this.current, 0);
          setTimeout(() => {
            this.canMove = true;
          }, 0);
        }
      }
    },
    /**
     * 跳转到某个索引的位置
     * cur: 目标魔方索引
     * duration: 过渡时长
     */
    goto(cur, duration = 400, isAutoPlay) {
      let nextCur = isAutoPlay ? cur - 0.5 : cur;
      this.$wrapper.style.webkitPerspectiveOrigin = `${nextCur * this.ITEM_WIDTH + this.$wrapper.clientWidth / 2}px center`;

      this.current = cur;
      this.endX = -cur * this.ITEM_WIDTH;
      if (!duration) {
        this.$wrapper.style.transitionDuration = null;

        this.$wrapper.style.transitionDuration = null;
        this.$cubes.forEach((cube, idx) => {
          cube.style.transition && (cube.style.transition = null);
        });
        this.setCube(this.endX, 0);
        this.setWrapper(this.endX, 0, true);
      } else {
        // 执行过渡
        this.setWrapper(this.endX, duration);
        this.$cubes.forEach((cube, idx) => {
          let _offset = idx * this.ITEM_WIDTH + this.endX;
          cube.style.transformOrigin = this.getTransformOrigin(_offset);
          if (cur - 1 == idx) {
            // 左边过渡
            cube.style.transition = `all ${duration}ms cubic-bezier(0.215, 0.610, 0.355, 1.000)`;
            cube.style.transform = `rotateY(-60deg) translate3d(0, ${this.getTranslate(cube.offsetLeft + this.endX)}px, 0)`;
            cube.style.opacity = 0;
          } else if (cur + 4 == idx) {
            // 右边过渡
            cube.style.transition = `all ${duration}ms cubic-bezier(0.215, 0.610, 0.355, 1.000)`;
            cube.style.transform = `rotateY(60deg) translate3d(0, ${this.getTranslate(cube.offsetLeft + this.endX)}px, 0)`;
            cube.style.opacity = 0;
          } else if (idx > cur - 1 && idx < cur + 4) {
            // 中间过渡
            if (isAutoPlay) {
              cube.style.transition = `transform ${duration}ms cubic-bezier(0.22, 0.01, 0.68, 1.00), opacity ${duration *
                0.9}ms cubic-bezier(0.62, 0.02, 0.68, 1.00)`;
            } else {
              cube.style.transition = `all ${duration}ms cubic-bezier(0.390, 0.575, 0.565, 1.000)`;
            }
            cube.style.transform = `rotateY(0.1deg) translate3d(0, ${this.getTranslate(cube.offsetLeft + this.endX)}px, 0)`;
            cube.style.opacity = 1;
          } else {
            cube.style.transition = null;
            cube.style.transform = null;
            cube.style.opacity = null;
            cube.style.transformOrigin = null;
          }
        });
      }
    }
  }
};
</script>

<style lang="scss"></style>
