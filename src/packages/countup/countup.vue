<template>
  <div class="nut-countup">
    <template v-if="customBgImg != ''">
      <template v-if="type == 'machine'">
        <ul class="run-number-machine-img" :style="{ height: numHeight + 'px' }">
          <li
            class="run-number-machine-img-li"
            ref="run-number-machine-img-li"
            v-for="(val, index) of machineNum"
            :key="'mImg' + index"
            :style="{
              width: numWidth + 'px',
              height: numHeight + 'px',
              backgroundImage: 'url(' + customBgImg + ')',
              backgroundPositionY: prizeY[index] + 'px'
            }"
          ></li>
          <!-- backgroundPositionY: prizeLevelTrun + 'px', -->
        </ul>
      </template>
      <template v-else>
        <ul class="run-number-img" :style="{ height: numHeight + 'px' }">
          <li
            class="run-number-img-li"
            v-for="(val, index) of num_total_len"
            :key="'cImg' + index"
            :style="{
              width: numWidth + 'px',
              height: numHeight + 'px',
              left:
                numWidth * (index > num_total_len - pointNum - 1 ? (index == num_total_len - pointNum ? index * 1.5 : index * 1.3) : index) + 'px',
              backgroundImage: 'url(' + customBgImg + ')',
              backgroundPosition: '0 ' + -(String(relNum)[index] * numHeight + customSpacNum * String(relNum)[index]) + 'px',
              transition: 'all linear ' + during / 10 + 'ms'
            }"
          ></li>
          <div
            v-if="pointNum > 0"
            class="pointstyl"
            :style="{
              width: numWidth / 2 + 'px',
              bottom: 0,
              left: numWidth * (num_total_len - pointNum) * 1.1 + 'px',
              fontSize: '30px'
            }"
            >.</div
          >
        </ul>
      </template>
    </template>
    <template v-else>
      <ul v-if="scrolling" class="run-number" :style="{ height: numHeight + 'px', lineHeight: numHeight + 'px' }">
        <li
          ref="numberItem"
          v-for="(val, index) of num_total_len"
          :key="val"
          :style="{
            top: topNumber(index),
            left: numWidth * (index > num_total_len - pointNum - 1 ? index * 1.1 : index) + 'px'
          }"
          :turn-number="turnNumber(index)"
        >
          <span
            v-for="(item, idx) of to0_10"
            :key="'dote' + idx"
            :style="{ width: numWidth + 'px', height: numHeight + 'px', lineHeight: numHeight + 'px' }"
          >
            {{ item }}
          </span>
        </li>
        <div
          v-if="pointNum > 0"
          class="pointstyl"
          :style="{
            width: numWidth / 3 + 'px',
            height: numHeight + 'px',
            lineHeight: numHeight + 'px',
            top: 0,
            left: numWidth * (num_total_len - pointNum) + 'px'
          }"
          >.</div
        >
      </ul>
      <template v-else>
        {{ current }}
      </template>
    </template>
  </div>
</template>
<script>
export default {
  name: 'nut-countup',
  props: {
    initNum: {
      type: Number,
      default: 0
    },
    endNum: {
      type: Number,
      default: 0
    },
    speed: {
      type: Number,
      default: 1
    },
    toFixed: {
      type: Number,
      default: 0
    },
    during: {
      type: Number,
      default: 1000
    },
    startFlag: {
      type: Boolean,
      default: true
    },
    // 数字滚动
    numWidth: {
      type: Number,
      default: 20
    },
    numHeight: {
      type: Number,
      default: 20
    },
    scrolling: {
      type: Boolean,
      default: false
    },
    // 自定义图片
    customBgImg: {
      type: String,
      default: ''
    },
    customSpacNum: {
      type: Number,
      default: 0
    },
    customChangeNum: {
      type: Number,
      default: 1
    },
    // 抽奖
    type: {
      type: String,
      default: ''
    },
    machineNum: {
      type: Number,
      default: 3
    },
    machinePrizeNum: {
      type: Number,
      default: 0
    },
    machinePrizeLevel: {
      type: Number,
      default: 0
    },
    machineTrunMore: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      current: this.initNum,
      sortFlag: 'add',
      initDigit1: 0,
      initDigit2: 0,
      to0_10: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      to10_0: [0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1],
      timer: null,
      totalCount: 0, //正整数
      pointNum: 0, //小数位
      numberVal: 0, //数字
      num_total_len: 0, //数字长度
      relNum: 0, //去除小数点
      customNumber: 1,
      prizeLevelTrun: 0,
      prizeY: [],
      prizeYPrev: [],
      // machineTransition: 'none',
      finshMachine: 0,
      notPrize: [],
      typeMachine: ''
    };
  },
  computed: {},
  watch: {
    customChangeNum: function(n, o) {
      this.customNumber = n;
      this.countGo();
    },
    machinePrizeLevel: function(n, o) {
      this.prizeLevelTrun = n;
    }
  },
  mounted() {
    if (this.startFlag) {
      if (this.scrolling || this.customBgImg) {
        if (this.type != 'machine') {
          this.countGo();
        }
      } else {
        this.countChange();
      }
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  },
  methods: {
    // 清空定时器
    clearInterval() {
      clearInterval(this.timer);
      this.timer = null;
    },
    // 精确计算
    calculation(num1, num2, type) {
      const num1Digits = (num1.toString().split('.')[1] || '').length;
      const num2Digits = (num2.toString().split('.')[1] || '').length;
      const baseNum = Math.pow(10, Math.max(num1Digits, num2Digits));
      if (type == '-') {
        return (num1 * baseNum - num2 * baseNum).toFixed(0) / baseNum;
      } else {
        return (num1 * baseNum + num2 * baseNum).toFixed(0) / baseNum;
      }
    },
    // 基本用法
    countChange() {
      let { endNum, initNum, speed, toFixed } = this;
      let countTimer = setInterval(() => {
        if (initNum > endNum) {
          //减少
          if (this.current <= endNum || this.current <= speed) {
            //数字减小，有可能导致current小于speed
            this.current = endNum.toFixed(toFixed);
            clearInterval(countTimer);
            this.$emit('scroll-end');
          } else {
            this.current = (parseFloat(this.current) - parseFloat(speed)).toFixed(toFixed);
          }
        } else {
          //增加
          if (this.current >= endNum) {
            this.current = endNum.toFixed(toFixed);
            clearInterval(countTimer);
            this.$emit('scroll-end');
          } else {
            this.current = (parseFloat(this.current) + parseFloat(speed)).toFixed(toFixed);
          }
        }
      }, this.during);
    },
    // 数字滚动-top值
    topNumber(index) {
      let { num_total_len, pointNum, initDigit1, initDigit2, sortFlag } = this;
      let idx1 = sortFlag == 'add' ? initDigit2[index - (num_total_len - pointNum)] : 10 - initDigit2[index - (num_total_len - pointNum)];
      let idx2 = sortFlag == 'add' ? initDigit1[index] : 10 - initDigit1[index];
      let num = index > num_total_len - pointNum - 1 ? -idx1 * 100 + '%' : index <= initDigit1.length - 1 ? -idx2 * 100 + '%' : 0;
      if (num == '-1000%') {
        num = 0;
      }
      return num;
    },
    // 数字滚动-到哪里了
    turnNumber(index) {
      let { num_total_len, pointNum, initDigit1, initDigit2, sortFlag } = this;
      let idx1 = initDigit2[index - (num_total_len - pointNum)];
      let num = index > num_total_len - pointNum - 1 ? (idx1 ? idx1 : 0) : index <= initDigit1.length - 1 ? initDigit1[index] : 0;
      return num;
    },
    countGo() {
      let val = null;
      if (this.toFixed != 0) {
        // val = this.endNum.toFixed(this.toFixed);
        // this.initNum = this.initNum.toFixed(this.toFixed);
        // this.endNum = this.endNum.toFixed(this.toFixed);
      }
      let { initNum, endNum, toFixed, customBgImg } = this;

      if (customBgImg) {
        initNum = this.customNumber;
      }
      // --------------
      let startNumber1, startNumber2, endNumber1, endNumber2;
      if (initNum != 0) {
        if (toFixed != 0) {
          initNum = initNum.toFixed(toFixed);
        }
        if (String(initNum).indexOf('.') > -1) {
          startNumber1 = String(initNum).split('.')[0].length;
          startNumber2 = String(initNum).split('.')[1].length;
        } else {
          startNumber1 = String(initNum).length;
          startNumber2 = 0;
        }
      } else {
        startNumber1 = 1;
        startNumber2 = 0;
      }
      if (endNum != 0) {
        if (toFixed != 0) {
          endNum = endNum.toFixed(toFixed);
        }
        if (String(endNum).indexOf('.') > -1) {
          endNumber1 = String(endNum).split('.')[0].length;
          endNumber2 = String(endNum).split('.')[1].length;
        } else {
          endNumber1 = String(endNum).length;
          endNumber2 = 0;
        }
      } else {
        endNumber1 = 1;
        endNumber2 = 0;
      }
      let len1 = startNumber1 >= endNumber1 ? startNumber1 : endNumber1;
      let len2 = startNumber2 >= endNumber2 ? startNumber2 : endNumber2;
      this.num_total_len = len1 + len2;
      this.pointNum = len2;
      // --------------
      if (initNum > endNum) {
        //减少
        this.sortFlag = 'reduce';
        this.to0_10 = [0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
        this.totalCount = this.calculation(initNum, endNum, '-');
        this.numberVal = String(initNum);
      } else {
        //增加
        this.sortFlag = 'add';
        this.to0_10 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        this.totalCount = this.calculation(endNum, initNum, '-');
        this.numberVal = String(endNum);
      }
      //将小数位数计算后，补0
      var unit = 1;
      for (let i = 0; i < this.pointNum; i++) {
        unit *= 10;
      }
      var rel_big = this.numberVal * unit; // 去除小数点后的数，unit几个零表示有几个小数
      this.relNum = rel_big;
      // this.totalCount = rel_big;
      if (toFixed != 0) {
        //计算小数点后的位数，小数位
        this.pointNum = this.numberVal.split('.')[1] ? this.numberVal.split('.')[1].length : 0;
        //数字长度
        this.num_total_len = String(rel_big).length;
      }
      if (String(initNum).indexOf('.') > -1) {
        let n = String(initNum).split('.');
        this.initDigit1 = n[0];
        this.initDigit2 = n[1];
      } else {
        this.initDigit1 = String(initNum);
        this.initDigit2 = '0';
      }
      if (this.scrolling && !customBgImg) {
        this.$nextTick(() => {
          // 数字都是从小加到大的，所以我们循环转动最后一个数字，传入最后一个数字的DOM
          let element = this.$refs.numberItem[this.num_total_len - 1];
          this.runTurn(element);
        });
      } else {
        this.imgNumberScroll();
      }
    },
    runTurn(el) {
      let that = this;
      that.clearInterval();
      var m = 1;
      if (this.pointNum != 0) {
        m = 1 / Math.pow(10, this.pointNum);
      }
      //设置定时器
      that.timer = setInterval(() => {
        that.runStep(el);
        that.totalCount = that.calculation(that.totalCount, m, '-');
        // that.totalCount--;
        if (that.totalCount <= 0) {
          that.clearInterval();
          this.$emit('scroll-end');
        }
      }, that.during);
    },
    runStep(el) {
      let that = this;
      let currentTurn = el.getAttribute('turn-number');
      let turningNum = null;
      if (that.sortFlag == 'add') {
        turningNum = parseInt(currentTurn) + 1;
      } else {
        turningNum = parseInt(currentTurn) - 1 >= 0 ? parseInt(currentTurn) - 1 : 9;
      }
      // if(el.getAttribute('flag')) {el.removeAttribute('flag');}
      // let flag = parseInt(currentTurn) - 1;
      // el.setAttribute('flag', flag);
      // if(turningNum == 0) {
      //     el.setAttribute('flag', -1);
      // }
      el.setAttribute('turn-number', turningNum);
      if (el.style.transition == 'none 0s ease 0s' || turningNum == 1 || !el.style.transition) {
        el.style.transition = `all linear ${that.during}ms`;
      }
      if (turningNum == 10 || (that.sortFlag == 'reduce' && turningNum == 0)) {
        var timeOut = null;
        // el.style.top = `-${turningNum * 100}%`;
        el.style.top = `-${that.sortFlag == 'add' ? turningNum * 100 : (10 - turningNum) * 100}%`;
        el.setAttribute('turn-number', 0);
        timeOut = setTimeout(() => {
          timeOut && clearTimeout(timeOut);
          el.style.transition = 'none';
          el.style.top = 0;
          // 前面数字的滚动，用于递增
          if (turningNum == 10) {
            if (el.previousSibling) {
              that.runStep(el.previousSibling);
            }
          }
        }, 0.975 * that.during);
      } else {
        // el.style.top = `-${(10-turningNum)*100}%`;
        el.style.top = `-${that.sortFlag == 'add' ? turningNum * 100 : (10 - turningNum) * 100}%`;
      }
      // 用于递减的时候
      if (el.style.top == '-100%' && that.sortFlag == 'reduce') {
        that.runStep(el.previousSibling);
      }
    },
    // 自定义图片
    imgNumberScroll() {
      let that = this;
      var m = 1;
      if (that.pointNum != 0) {
        m = Math.pow(10, that.pointNum);
      }
      this.$nextTick(() => {
        var f = that.$el.querySelector('.run-number-img');
        setTimeout(() => {
          that.relNum = that.calculation(that.relNum, m * that.speed, '+');
        }, that.during);
        f.addEventListener('webkitTransitionEnd', () => {
          this.$emit('scroll-end');
          setTimeout(() => {
            that.relNum = that.calculation(that.relNum, m * that.speed, '+');
          }, that.during);
        });
      });
    },
    // 不中奖设置随机数
    generateRandom() {
      this.notPrize = [];
      while (this.notPrize.length < 3) {
        var rand = Math.floor(Math.random() * this.machinePrizeNum + 1);
        if (this.notPrize.indexOf(rand) == -1) {
          this.notPrize.push(rand);
        }
      }
    },
    // 抽奖
    machineLuck() {
      this.machineTrunMore = this.machineTrunMore < 0 ? 0 : this.machineTrunMore;
      let distance = this.numHeight * this.machinePrizeNum; // 所有奖品的高度，雪碧图的高度
      if (this.prizeLevelTrun < 0) {
        this.generateRandom();
      }
      for (let i = 0; i < this.machineNum; i++) {
        setTimeout(() => {
          let turn = distance * (i + 1 + parseFloat(this.machineTrunMore));
          if (this.prizeYPrev.length != 0) {
            // this.machineTransition = 'none';
            // console.log(this.prizeYPrev[i]-(this.numHeight * this.machinePrizeNum));
            this.$set(this.prizeY, i, this.prizeYPrev[i]);
          }
          let local = this.prizeYPrev[i] ? this.prizeYPrev[i] : 0;
          let newLocation = turn + local + (this.machinePrizeNum - this.prizeLevelTrun + 1) * this.numHeight + (distance - local);
          if (this.prizeLevelTrun < 0) {
            newLocation += this.numHeight * this.notPrize[i];
          }
          this.scrollTime(
            i,
            // parseFloat((this.machinePrizeNum-(this.prizeLevelTrun-1))*this.numHeight + turn + local),
            newLocation,
            local
          );
        }, 500 * i);
      }
    },
    scrollTime(index, total, num) {
      // this.machineTransition = `all linear ${this.during/this.machinePrizeNum}ms`;
      let t = setInterval(() => {
        if (num <= total) {
          num += 10;
          this.$set(this.prizeY, index, parseFloat(num));
        } else {
          clearInterval(t);
          t = null;
          this.finshMachine += 1;
          this.$set(this.prizeY, index, total);
          // 动画未完成的时候触发了判断，需要加个延时或者监听最后一个动画执行结束，保证在动画执行结束
          // this.$nextTick(() => {
          //     var f = document.getElementsByClassName('run-number-machine-img-li');
          //     f[f.length-1].addEventListener('webkitTransitionEnd', () => {
          //         setTimeout(() => {
          //             if(this.finshMachine == this.machineNum) {
          //                 this.finshMachine = 0;
          //             }
          //         },200)
          //     });
          // })
          if (this.finshMachine == this.machineNum) {
            let distance = this.numHeight * this.machinePrizeNum;
            this.prizeYPrev = [];
            let prevAry = JSON.parse(JSON.stringify(this.prizeY));
            prevAry.forEach(item => {
              let n = item;
              while (n > distance) {
                n -= distance;
              }
              this.prizeYPrev.push(n);
            });
            setTimeout(() => {
              this.finshMachine = 0;
              if (this.prizeLevelTrun < 0) {
                this.$emit('scroll-end', false);
              } else {
                this.$emit('scroll-end', true);
              }
            }, 130);
          }
        }
      }, 30);
    }
  }
};
</script>
