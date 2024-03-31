var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { getCurrentInstance, ref, reactive, watch, nextTick, onMounted, onUnmounted, toRefs, openBlock, createElementBlock, Fragment, normalizeStyle, renderList, createCommentVNode, toDisplayString, createTextVNode } from "vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
function useExtend(apis) {
  const instance = getCurrentInstance();
  if (instance) {
    Object.assign(instance.proxy, apis);
  }
}
const { create } = createComponent("countup");
const _sfc_main = create({
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
      default: 1e3
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
      default: ""
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
      default: ""
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
    machineTurnMore: {
      type: Number,
      default: 0
    }
  },
  components: {},
  emits: ["click", "scrollEnd"],
  setup(props, { emit }) {
    const runNumberImg = ref(null);
    const numberItemRef = ref([]);
    const setRef = (el) => {
      if (el) {
        numberItemRef.value.push(el);
      }
    };
    const data = reactive({
      valFlag: false,
      current: 0,
      sortFlag: "add",
      initDigit1: 0,
      initDigit2: 0,
      to0_10: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      to10_0: [0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1],
      timer: null,
      totalCount: 0,
      // 正整数
      pointNum: 0,
      // 小数位
      numberVal: 0,
      // 数字
      num_total_len: 0,
      // 数字长度
      relNum: 0,
      // 去除小数点
      customNumber: 1,
      prizeLevelTrun: 0,
      prizeY: [],
      prizeYPrev: [],
      // machineTransition: 'none',
      finshMachine: 0,
      notPrize: [],
      typeMachine: ""
    });
    const { startFlag, scrolling, customBgImg, type } = reactive(props);
    watch(
      () => props.customChangeNum,
      () => {
        clearIntervalTime();
        countGo(0);
      }
    );
    watch(
      () => props.machinePrizeLevel,
      (count) => {
        data.prizeLevelTrun = count;
      }
    );
    watch(
      () => props.initNum,
      (count) => {
        data.current = count;
        data.valFlag = false;
        valChange();
      }
    );
    watch(
      () => props.endNum,
      () => {
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
          if (type != "machine") {
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
    const clearIntervalTime = () => {
      clearInterval(Number(data.timer));
      data.timer = null;
    };
    const calculation = (num1, num2, type2) => {
      const num1Digits = (num1.toString().split(".")[1] || "").length;
      const num2Digits = (num2.toString().split(".")[1] || "").length;
      const baseNum = Math.pow(10, Math.max(num1Digits, num2Digits));
      if (type2 == "-") {
        const n = Number((num1 * baseNum - num2 * baseNum).toFixed(0));
        return n / baseNum;
      } else {
        const m = Number((num1 * baseNum + num2 * baseNum).toFixed(0));
        return m / baseNum;
      }
    };
    const topNumber = (index2) => {
      let { num_total_len, pointNum, initDigit1, initDigit2, sortFlag } = data;
      let idx1 = sortFlag == "add" || sortFlag == "equal" ? String(initDigit2)[index2 - (num_total_len - pointNum)] : 10 - Number(String(initDigit2)[index2 - (num_total_len - pointNum)]);
      let idx2 = sortFlag == "add" || sortFlag == "equal" ? String(initDigit1)[index2] : 10 - Number(String(initDigit1)[index2]);
      let num = index2 > num_total_len - pointNum - 1 ? -idx1 * 100 + "%" : index2 <= String(initDigit1).length - 1 ? -idx2 * 100 + "%" : 0;
      if (num == "-1000%") {
        num = 0;
      }
      return num;
    };
    const turnNumber = (index2) => {
      let { num_total_len, pointNum, initDigit1, initDigit2 } = data;
      let idx1 = String(initDigit2)[index2 - (num_total_len - pointNum)];
      let num = index2 > num_total_len - pointNum - 1 ? idx1 ? idx1 : 0 : index2 <= String(initDigit1).length - 1 ? String(initDigit1)[index2] : 0;
      return num;
    };
    const countChange = () => {
      let { endNum, initNum, speed, toFixed } = props;
      let countTimer = setInterval(() => {
        if (initNum > endNum) {
          if (Number(data.current) <= endNum || Number(data.current) <= speed) {
            data.current = endNum.toFixed(toFixed);
            clearInterval(countTimer);
            emit("scrollEnd");
            data.valFlag = false;
          } else {
            let num = parseFloat(String(data.current)) - parseFloat(String(speed));
            data.current = num.toFixed(toFixed);
          }
        } else {
          if (Number(data.current) >= endNum) {
            data.current = endNum.toFixed(toFixed);
            clearInterval(countTimer);
            emit("scrollEnd");
            data.valFlag = false;
          } else {
            let num = parseFloat(String(data.current)) + parseFloat(String(speed));
            data.current = num.toFixed(toFixed);
          }
        }
      }, props.during);
    };
    const countGo = (flag) => {
      let { initNum, endNum, toFixed, customBgImg: customBgImg2 } = props;
      if (customBgImg2) {
        initNum = props.customChangeNum;
      }
      let startNumber1, startNumber2, endNumber1, endNumber2;
      if (initNum != 0) {
        if (toFixed != 0) {
          initNum = Number(initNum.toFixed(toFixed));
        }
        if (String(initNum).indexOf(".") > -1) {
          startNumber1 = String(initNum).split(".")[0].length;
          startNumber2 = String(initNum).split(".")[1].length;
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
        if (String(endNum).indexOf(".") > -1) {
          endNumber1 = String(endNum).split(".")[0].length;
          endNumber2 = String(endNum).split(".")[1].length;
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
      if (initNum > endNum) {
        data.sortFlag = "reduce";
        data.to0_10 = [0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
        data.totalCount = calculation(initNum, endNum, "-");
        data.numberVal = Number(String(initNum));
      } else if (initNum < endNum) {
        data.sortFlag = "add";
        data.to0_10 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        data.totalCount = calculation(endNum, initNum, "-");
        data.numberVal = Number(String(endNum));
      } else {
        data.sortFlag = "equal";
      }
      var unit = 1;
      for (let i = 0; i < data.pointNum; i++) {
        unit *= 10;
      }
      var rel_big = data.numberVal * unit;
      data.relNum = rel_big;
      if (toFixed != 0) {
        data.pointNum = String(data.numberVal).split(".")[1] ? String(data.numberVal).split(".")[1].length : 0;
        data.num_total_len = String(rel_big).length;
      }
      if (String(initNum).indexOf(".") > -1) {
        let n = String(initNum).split(".");
        data.initDigit1 = Number(n[0]);
        data.initDigit2 = Number(n[1]);
      } else {
        data.initDigit1 = initNum;
        data.initDigit2 = 0;
      }
      if (scrolling && !customBgImg2) {
        nextTick(() => {
          if (data.sortFlag == "equal") {
            return false;
          }
          let element = numberItemRef.value[data.num_total_len - 1];
          runTurn(element);
        });
      } else {
        if (flag !== 0) {
          imgNumberScroll();
        }
      }
    };
    const runTurn = (el) => {
      clearIntervalTime();
      var m = 1;
      if (data.pointNum != 0) {
        m = 1 / Math.pow(10, data.pointNum);
      }
      data.timer = setInterval(() => {
        runStep(el);
        data.totalCount = calculation(data.totalCount, m, "-");
        if (data.totalCount <= 0) {
          clearIntervalTime();
          emit("scrollEnd");
          data.valFlag = false;
        }
      }, props.during);
    };
    const runStep = (el) => {
      let currentTurn = el.getAttribute("turn-number");
      let turningNum;
      if (data.sortFlag == "add") {
        turningNum = parseInt(String(currentTurn)) + 1;
      } else {
        turningNum = parseInt(String(currentTurn)) - 1 >= 0 ? parseInt(String(currentTurn)) - 1 : 9;
      }
      el.setAttribute("turn-number", String(turningNum));
      if (el.style.transition == "none 0s ease 0s" || turningNum == 1 || !el.style.transition) {
        el.style.transition = `all linear ${props.during}ms`;
      }
      if (turningNum == 10 || data.sortFlag == "reduce" && turningNum == 0) {
        var timeOut = null;
        el.style.top = `-${data.sortFlag == "add" ? turningNum * 100 : (10 - turningNum) * 100}%`;
        el.setAttribute("turn-number", "0");
        timeOut = setTimeout(() => {
          timeOut && clearTimeout(timeOut);
          el.style.transition = "none";
          el.style.top = "0";
          reset(el, turningNum);
        }, 0.975 * props.during);
      } else {
        el.style.top = `-${data.sortFlag == "add" ? turningNum * 100 : (10 - turningNum) * 100}%`;
      }
      if (el.style.top == "-100%" && data.sortFlag == "reduce") {
        runStep(el.previousSibling);
      }
    };
    const reset = (el, turningNum) => {
      setTimeout(() => {
        if (turningNum == 10) {
          if (el.previousSibling) {
            runStep(el.previousSibling);
          }
        }
      }, 200);
    };
    const imgNumberScroll = () => {
      nextTick(() => {
        runNumberImg.value.addEventListener("webkitTransitionEnd", () => {
          emit("scrollEnd");
          data.valFlag = false;
        });
      });
    };
    const generateRandom = () => {
      data.notPrize = [];
      while (data.notPrize.length < 3) {
        var rand = Math.floor(Math.random() * props.machinePrizeNum + 1);
        if (data.notPrize.indexOf(rand) == -1) {
          data.notPrize.push(rand);
        }
      }
    };
    const machineLuck = () => {
      const machineTurnMoreNum = props.machineTurnMore < 0 ? 0 : props.machineTurnMore;
      let distance = props.numHeight * props.machinePrizeNum;
      if (data.prizeLevelTrun < 0) {
        generateRandom();
      }
      for (let i = 0; i < props.machineNum; i++) {
        setTimeout(() => {
          let turn = distance * (i + 1 + parseFloat(String(machineTurnMoreNum)));
          if (data.prizeYPrev.length != 0) {
            data.prizeY[i] = data.prizeYPrev[i];
          }
          let local = data.prizeYPrev[i] ? data.prizeYPrev[i] : 0;
          let newLocation = turn + local + (props.machinePrizeNum - data.prizeLevelTrun + 1) * props.numHeight + (distance - local);
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
    const scrollTime = (index2, total, num) => {
      let t = setInterval(() => {
        if (num <= total) {
          num += 10;
          data.prizeY[index2] = parseFloat(String(num));
        } else {
          clearInterval(t);
          t = null;
          data.finshMachine += 1;
          data.prizeY[index2] = total;
          if (data.finshMachine == props.machineNum) {
            let distance = props.numHeight * props.machinePrizeNum;
            data.prizeYPrev = [];
            let prevAry = JSON.parse(JSON.stringify(data.prizeY));
            prevAry.forEach((item) => {
              let n = item;
              while (n > distance) {
                n -= distance;
              }
              data.prizeYPrev.push(n);
            });
            setTimeout(() => {
              data.finshMachine = 0;
              if (data.prizeLevelTrun < 0) {
                emit("scrollEnd", false);
                data.valFlag = false;
              } else {
                emit("scrollEnd", true);
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
    return __spreadProps(__spreadValues(__spreadValues({}, toRefs(data)), toRefs(reactive(props))), {
      runNumberImg,
      setRef,
      topNumber,
      turnNumber
    });
  }
});
const _hoisted_1 = { class: "nut-countup" };
const _hoisted_2 = ["turn-number"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", _hoisted_1, [
    _ctx.customBgImg != "" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
      _ctx.type == "machine" ? (openBlock(), createElementBlock("view", {
        key: 0,
        class: "nut-countup__machine",
        style: normalizeStyle({ height: _ctx.numHeight + "px" })
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.machineNum, (val, index2) => {
          return openBlock(), createElementBlock("view", {
            key: "mImg" + index2,
            class: "nut-countup__machine-item",
            style: normalizeStyle({
              width: _ctx.numWidth + "px",
              height: _ctx.numHeight + "px",
              backgroundImage: "url(" + _ctx.customBgImg + ")",
              backgroundPositionY: _ctx.prizeY[index2] + "px"
            })
          }, null, 4);
        }), 128))
      ], 4)) : (openBlock(), createElementBlock("view", {
        key: 1,
        ref: "runNumberImg",
        class: "nut-countup__numberimg",
        style: normalizeStyle({ height: _ctx.numHeight + "px" })
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.num_total_len, (val, index2) => {
          return openBlock(), createElementBlock("view", {
            key: "cImg" + index2,
            class: "nut-countup__numberimg__item",
            style: normalizeStyle({
              width: _ctx.numWidth + "px",
              height: _ctx.numHeight + "px",
              left: _ctx.numWidth * (index2 > _ctx.num_total_len - _ctx.pointNum - 1 ? index2 == _ctx.num_total_len - _ctx.pointNum ? index2 * 1.5 : index2 * 1.3 : index2) + "px",
              backgroundImage: "url(" + _ctx.customBgImg + ")",
              backgroundPositionX: "0",
              backgroundPositionY: -(+String(_ctx.relNum)[index2] * _ctx.numHeight + _ctx.customSpacNum * +String(_ctx.relNum)[index2]) + "px",
              transition: "all linear " + _ctx.during / 10 + "ms"
            })
          }, null, 4);
        }), 128)),
        _ctx.pointNum > 0 ? (openBlock(), createElementBlock("view", {
          key: 0,
          class: "nut-countup-pointstyl",
          style: normalizeStyle({
            width: _ctx.numWidth / 2 + "px",
            bottom: 0,
            left: _ctx.numWidth * (_ctx.num_total_len - _ctx.pointNum) * 1.1 + "px",
            fontSize: "30px"
          })
        }, " . ", 4)) : createCommentVNode("", true)
      ], 4))
    ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
      _ctx.scrolling ? (openBlock(), createElementBlock("view", {
        key: 0,
        class: "nut-countup__number",
        style: normalizeStyle({
          width: _ctx.numWidth * _ctx.num_total_len + _ctx.numWidth / 3 + "px",
          height: _ctx.numHeight + "px",
          lineHeight: _ctx.numHeight + "px"
        })
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.num_total_len, (val, index2) => {
          return openBlock(), createElementBlock("view", {
            ref_for: true,
            ref: (el) => _ctx.setRef(el),
            key: val,
            class: "nut-countup__number-item",
            style: normalizeStyle({
              top: _ctx.topNumber(index2),
              left: _ctx.numWidth * (index2 > _ctx.num_total_len - _ctx.pointNum - 1 ? index2 * 1.1 : index2) + "px"
            }),
            "turn-number": _ctx.turnNumber(index2)
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.to0_10, (item, idx) => {
              return openBlock(), createElementBlock("view", {
                key: "dote" + idx,
                class: "nut-countup__number-item__span",
                style: normalizeStyle({
                  width: _ctx.numWidth + "px",
                  height: _ctx.numHeight + "px",
                  lineHeight: _ctx.numHeight + "px"
                })
              }, toDisplayString(item), 5);
            }), 128))
          ], 12, _hoisted_2);
        }), 128)),
        _ctx.pointNum > 0 ? (openBlock(), createElementBlock("view", {
          key: 0,
          class: "nut-countup-pointstyl",
          style: normalizeStyle({
            width: _ctx.numWidth / 3 + "px",
            height: _ctx.numHeight + "px",
            lineHeight: _ctx.numHeight + "px",
            top: 0,
            left: _ctx.numWidth * (_ctx.num_total_len - _ctx.pointNum) + "px"
          })
        }, " . ", 4)) : createCommentVNode("", true)
      ], 4)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
        createTextVNode(toDisplayString(_ctx.current), 1)
      ], 64))
    ], 64))
  ]);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index as default
};
