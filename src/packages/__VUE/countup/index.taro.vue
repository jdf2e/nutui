<template>
  <view class="nut-countup">
    <template v-if="customBgImg != ''">
      <template v-if="type == 'machine'">
        <view class="run-number-machine-img" :style="{ height: numHeight + 'px' }">
          <view
            class="run-number-machine-img-li"
            ref="run-number-machine-img-li"
            v-for="(val, index) of machineNum"
            :key="'mImg' + index"
            :style="{
              width: numWidth + 'px',
              height: numHeight + 'px',
              background: 'url(' + customBgImg + ') ',
              backgroundPosition: '0 ' + prizeY[index] + 'px'
            }"
          ></view>
          <!-- backgroundPositionY: prizeLevelTrun + 'px', -->
        </view>
      </template>
      <template v-else>
        <view class="run-number-img" :style="{ height: numHeight + 'px' }">
          <view
            class="run-number-img-li"
            v-for="(val, index) of num_total_len"
            :key="'cImg' + index"
            :style="{
              width: numWidth + 'px',
              height: numHeight + 'px',
              left:
                numWidth *
                  (index > num_total_len - pointNum - 1
                    ? index == num_total_len - pointNum
                      ? index * 1.5
                      : index * 1.3
                    : index) +
                'px',
              backgroundImage: 'url(' + customBgImg + ')',
              backgroundPosition:
                '0 ' + -(String(relNum)[index] * numHeight + customSpacNum * String(relNum)[index]) + 'px',
              transition: 'all linear ' + during / 10 + 'ms'
            }"
          ></view>
          <view
            v-if="pointNum > 0"
            class="pointstyl"
            :style="{
              width: numWidth / 2 + 'px',
              bottom: 0,
              left: numWidth * (num_total_len - pointNum) * 1.1 + 'px',
              fontSize: '30px'
            }"
            >.</view
          >
        </view>
      </template>
    </template>
    <template v-else>
      <view
        v-if="scrolling"
        class="run-number"
        :style="{
          width: numWidth * num_total_len + numWidth / 3 + 'px',
          height: numHeight + 'px',
          lineHeight: numHeight + 'px'
        }"
      >
        <view
          ref="numberItem"
          class="numberItem"
          v-for="(val, index) of num_total_len"
          :key="val"
          :style="{
            all: turnNumber(index),
            top: topNumber(index),
            left: numWidth * (index > num_total_len - pointNum - 1 ? index * 1.1 : index) + 'px'
          }"
          :turn-number="turnNumber(index)"
        >
          <view
            v-for="(item, idx) of to0_10"
            class="itemSpan"
            :key="'dote' + idx"
            :style="{
              width: numWidth + 'px',
              height: numHeight + 'px',
              lineHeight: numHeight + 'px'
            }"
          >
            {{ item }}
          </view>
        </view>
        <view
          v-if="pointNum > 0"
          class="pointstyl"
          :style="{
            width: numWidth / 3 + 'px',
            height: numHeight + 'px',
            lineHeight: numHeight + 'px',
            top: 0,
            left: numWidth * (num_total_len - pointNum) + 'px'
          }"
          >.</view
        >
      </view>
      <template v-else>
        {{ current }}
      </template>
    </template>
  </view>
</template>
<script lang="ts">
import { reactive, toRefs, ref, onMounted, onUnmounted, nextTick, watch } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { useExtend } from '@/packages/utils/useRelation/useRelation';
const { componentName, create } = createComponent('countup');

interface IData {
  valFlag: boolean;
  current: number;
  sortFlag: string;
  initDigit1: number;
  initDigit2: number;
  to0_10: number[];
  to10_0: Array<number>;
  timer: null | any;
  totalCount: number; //正整数
  pointNum: number; //小数位
  numberVal: number; //数字
  num_total_len: number; //数字长度
  relNum: number; //去除小数点
  customNumber: number;
  prizeLevelTrun: number;
  prizeY: Array<any>;
  prizeYPrev: Array<any>;
  // machineTransition: 'none',
  finshMachine: number;
  notPrize: Array<any>;
  typeMachine: string;
}

export default create({
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
  components: {},
  emits: ['click', 'scroll-end'],
  setup(props, { emit }) {
    const data: IData = reactive({
      valFlag: false,
      current: 0,
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
    });
    const { startFlag, scrolling, customBgImg, type } = reactive(props);
    watch(
      () => props.customChangeNum,
      (count, prevCount) => {
        clearIntervalTime();
        // data.customNumber = count;
        countGo(0);
      }
    );
    watch(
      () => props.machinePrizeLevel,
      (count, prevCount) => {
        data.prizeLevelTrun = count;
      }
    );
    watch(
      () => props.initNum,
      (count, prevCount) => {
        data.current = count;
        data.valFlag = false;
        valChange();
      }
    );
    watch(
      () => props.endNum,
      (count, prevCount) => {
        data.current = props.initNum;
        data.valFlag = false;
        valChange();
      }
    );
    const valChange = () => {
      if (data.valFlag) {
        return false;
      }
      if (startFlag) {
        if (scrolling || customBgImg) {
          if (type != 'machine') {
            countGo();
          }
        } else {
          countChange();
          setTimeout(() => {
            data.valFlag = true;
          }, 300);
        }
      }
    };
    // 清空定时器
    const clearIntervalTime = () => {
      clearInterval(Number(data.timer));
      data.timer = null;
    };
    // 精确计算
    const calculation = (num1: number, num2: number, type: string) => {
      const num1Digits = (num1.toString().split('.')[1] || '').length;
      const num2Digits = (num2.toString().split('.')[1] || '').length;
      const baseNum = Math.pow(10, Math.max(num1Digits, num2Digits));
      if (type == '-') {
        const n = Number((num1 * baseNum - num2 * baseNum).toFixed(0));
        return n / baseNum;
      } else {
        const m = Number((num1 * baseNum + num2 * baseNum).toFixed(0));
        return m / baseNum;
      }
    };
    // 数字滚动-top值
    const topNumber = (index: number) => {
      let { num_total_len, pointNum, initDigit1, initDigit2, sortFlag } = data;
      let idx1 =
        sortFlag == 'add' || sortFlag == 'equal'
          ? String(initDigit2)[index - (num_total_len - pointNum)]
          : 10 - Number(String(initDigit2)[index - (num_total_len - pointNum)]);
      let idx2 =
        sortFlag == 'add' || sortFlag == 'equal' ? String(initDigit1)[index] : 10 - Number(String(initDigit1)[index]);
      let num =
        index > num_total_len - pointNum - 1
          ? -idx1 * 100 + '%'
          : index <= String(initDigit1).length - 1
          ? -idx2 * 100 + '%'
          : 0;
      if (num == '-1000%') {
        num = 0;
      }
      return num;
    };
    // 数字滚动-到哪里了
    const turnNumber = (index: number) => {
      let { num_total_len, pointNum, initDigit1, initDigit2, sortFlag } = data;
      let idx1 = String(initDigit2)[index - (num_total_len - pointNum)];
      let num =
        index > num_total_len - pointNum - 1
          ? idx1
            ? idx1
            : 0
          : index <= String(initDigit1).length - 1
          ? String(initDigit1)[index]
          : 0;
      return num;
    };
    // 基本用法
    const countChange = () => {
      let { endNum, initNum, speed, toFixed } = props;
      let countTimer = setInterval(() => {
        if (initNum > endNum) {
          //减少
          if (data.current <= endNum || data.current <= speed) {
            //数字减小，有可能导致current小于speed
            data.current = Number(endNum.toFixed(toFixed));
            clearInterval(countTimer);
            emit('scroll-end');
            data.valFlag = false;
          } else {
            data.current = Number((parseFloat(String(data.current)) - parseFloat(String(speed))).toFixed(toFixed));
          }
        } else {
          //增加
          if (data.current >= endNum) {
            data.current = Number(endNum.toFixed(toFixed));
            clearInterval(countTimer);
            emit('scroll-end');
            data.valFlag = false;
          } else {
            data.current = Number((parseFloat(String(data.current)) + parseFloat(String(speed))).toFixed(toFixed));
          }
        }
      }, props.during);
    };
    const countGo = (flag?: number): void => {
      let { initNum, endNum, toFixed, customBgImg } = props;
      if (customBgImg) {
        initNum = props.customChangeNum;
      }
      // --------------
      let startNumber1, startNumber2, endNumber1, endNumber2;
      if (initNum != 0) {
        if (toFixed != 0) {
          initNum = Number(initNum.toFixed(toFixed));
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
          endNum = Number(endNum.toFixed(toFixed));
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
      data.num_total_len = len1 + len2;

      data.pointNum = len2;

      // --------------
      if (initNum > endNum) {
        //减少
        data.sortFlag = 'reduce';
        data.to0_10 = [0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
        data.totalCount = calculation(initNum, endNum, '-');
        data.numberVal = Number(String(initNum));
      } else if (initNum < endNum) {
        //增加
        data.sortFlag = 'add';
        data.to0_10 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        data.totalCount = calculation(endNum, initNum, '-');
        data.numberVal = Number(String(endNum));
      } else {
        data.sortFlag = 'equal';
      }
      //将小数位数计算后，补0
      var unit = 1;
      for (let i = 0; i < data.pointNum; i++) {
        unit *= 10;
      }
      var rel_big = data.numberVal * unit; // 去除小数点后的数，unit几个零表示有几个小数
      data.relNum = rel_big;
      // this.totalCount = rel_big;
      if (toFixed != 0) {
        //计算小数点后的位数，小数位
        data.pointNum = String(data.numberVal).split('.')[1] ? String(data.numberVal).split('.')[1].length : 0;
        //数字长度
        data.num_total_len = String(rel_big).length;
      }
      if (String(initNum).indexOf('.') > -1) {
        let n = String(initNum).split('.');
        data.initDigit1 = Number(n[0]);
        data.initDigit2 = Number(n[1]);
      } else {
        data.initDigit1 = initNum;
        data.initDigit2 = 0;
      }
      if (scrolling && !customBgImg) {
        // 数字都是从小加到大的，所以我们循环转动最后一个数字，传入最后一个数字的DOM
        nextTick(() => {
          if (data.sortFlag == 'equal') {
            return false;
          }
          let refsDom: HTMLCollectionOf<Element> = document.getElementsByClassName('numberItem');
          let element = refsDom[data.num_total_len - 1];
          runTurn(element);
        });
      } else {
        if (flag !== 0) {
          imgNumberScroll();
        }
      }
    };
    const runTurn = (el: Element) => {
      clearIntervalTime();
      var m = 1;
      if (data.pointNum != 0) {
        m = 1 / Math.pow(10, data.pointNum);
      }
      //设置定时器
      (data.timer as any) = setInterval(() => {
        runStep(el);
        data.totalCount = calculation(data.totalCount, m, '-');
        // that.totalCount--;
        if (data.totalCount <= 0) {
          clearIntervalTime();
          emit('scroll-end');
          data.valFlag = false;
        }
      }, props.during);
    };

    const runStep = (el: any) => {
      // let currentTurn = el.getAttribute('turn-number');
      let currentTurn = el.style.all;
      let turningNum: number;
      if (data.sortFlag == 'add') {
        turningNum = parseInt(String(currentTurn)) + 1;
      } else {
        turningNum = parseInt(String(currentTurn)) - 1 >= 0 ? parseInt(String(currentTurn)) - 1 : 9;
      }
      // el.setAttribute('turn-number', String(turningNum));
      el.style.all = String(turningNum);

      if (el.style.transition == 'none' || turningNum == 1 || !el.style.transition) {
        el.style.transition = `all linear ${props.during}ms`;
      }

      if (turningNum == 10 || (data.sortFlag == 'reduce' && turningNum == 0)) {
        var timeOut: any = null;
        // el.style.top = `-${turningNum * 100}%`;
        el.style.top = `-${data.sortFlag == 'add' ? turningNum * 100 : (10 - turningNum) * 100}%`;
        // el.setAttribute('turn-number', '0');
        el.style.all = '0';
        timeOut = setTimeout(() => {
          timeOut && clearTimeout(timeOut);
          el.style.transition = 'none';
          el.style.top = '0';
          // 前面数字的滚动，用于递增
          if (turningNum == 10) {
            if (el.previousSibling) {
              runStep(el.previousSibling as HTMLElement);
            }
          }
        }, 0.975 * props.during);
      } else {
        // el.style.top = `-${(10-turningNum)*100}%`;
        el.style.top = `-${data.sortFlag == 'add' ? turningNum * 100 : (10 - turningNum) * 100}%`;
      }
      // 用于递减的时候
      if (el.style.top == '-100%' && data.sortFlag == 'reduce') {
        runStep(el.previousSibling as HTMLElement);
      }
    };
    // 自定义图片
    const imgNumberScroll = () => {
      let m = 1;
      if (data.pointNum != 0) {
        m = Math.pow(10, data.pointNum);
      }
      nextTick(() => {
        let f = document.getElementsByClassName('run-number-img')[0];
        // setTimeout(() => {
        //   data.relNum = calculation(data.relNum, m * props.speed, '+');
        // }, props.during);
        f.addEventListener('webkitTransitionEnd', () => {
          emit('scroll-end');
          data.valFlag = false;
          // setTimeout(() => {
          //   data.relNum = calculation(data.relNum, m * props.speed, '+');
          // }, props.during);
        });
      });
    };
    // 不中奖设置随机数
    const generateRandom = () => {
      data.notPrize = [];
      while (data.notPrize.length < 3) {
        var rand: number = Math.floor(Math.random() * props.machinePrizeNum + 1);
        if (data.notPrize.indexOf(rand) == -1) {
          data.notPrize.push(rand);
        }
      }
    };
    // 抽奖
    const machineLuck = () => {
      const machineTrunMoreNum = props.machineTrunMore < 0 ? 0 : props.machineTrunMore;
      let distance = props.numHeight * props.machinePrizeNum; // 所有奖品的高度，雪碧图的高度
      if (data.prizeLevelTrun < 0) {
        generateRandom();
      }

      for (let i = 0; i < props.machineNum; i++) {
        setTimeout(() => {
          let turn = distance * (i + 1 + parseFloat(String(machineTrunMoreNum)));
          if (data.prizeYPrev.length != 0) {
            // this.machineTransition = 'none';
            // console.log(this.prizeYPrev[i]-(this.numHeight * this.machinePrizeNum));
            // this.$set(data.prizeY, i, data.prizeYPrev[i]);
            data.prizeY[i] = data.prizeYPrev[i];
          }
          let local = data.prizeYPrev[i] ? data.prizeYPrev[i] : 0;
          let newLocation =
            turn + local + (props.machinePrizeNum - data.prizeLevelTrun + 1) * props.numHeight + (distance - local);
          if (data.prizeLevelTrun < 0) {
            newLocation += props.numHeight * data.notPrize[i];
          }
          scrollTime(
            i,
            // parseFloat((this.machinePrizeNum-(this.prizeLevelTrun-1))*this.numHeight + turn + local),
            newLocation,
            local
          );
        }, 500 * i);
      }
    };
    useExtend({ machineLuck });
    const scrollTime = (index: number, total: number, num: number) => {
      // this.machineTransition = `all linear ${this.during/this.machinePrizeNum}ms`;
      let t: any = setInterval(() => {
        if (num <= total) {
          num += 10;
          data.prizeY[index] = parseFloat(String(num));
        } else {
          clearInterval(t);
          t = null;
          data.finshMachine += 1;
          data.prizeY[index] = total;
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
          if (data.finshMachine == props.machineNum) {
            let distance = props.numHeight * props.machinePrizeNum;
            data.prizeYPrev = [];
            let prevAry = JSON.parse(JSON.stringify(data.prizeY));
            prevAry.forEach((item: any) => {
              let n = item;
              while (n > distance) {
                n -= distance;
              }
              data.prizeYPrev.push(n);
            });
            setTimeout(() => {
              data.finshMachine = 0;
              if (data.prizeLevelTrun < 0) {
                emit('scroll-end', false);
                data.valFlag = false;
              } else {
                emit('scroll-end', true);
                data.valFlag = false;
              }
            }, 130);
          }
        }
      }, 30);
    };

    onMounted(() => {
      data.current = props.initNum;
      nextTick(() => {
        valChange();
      });
    });

    onUnmounted(() => {
      clearIntervalTime();
      data.timer = null;
    });

    return {
      ...toRefs(data),
      ...toRefs(reactive(props)),
      topNumber,
      turnNumber
    };
  }
});
</script>
