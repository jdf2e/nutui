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
import { reactive, computed, ref, watch, toRefs, onMounted, openBlock, createElementBlock, createElementVNode, normalizeStyle, Fragment, renderList, normalizeClass, toDisplayString, createCommentVNode, resolveComponent, renderSlot, createVNode } from "vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import { d as preventDefault, e as clamp } from "../util-D1pvnUYu.js";
import { p as pxCheck } from "../pxCheck-DN6FYV6q.js";
import { u as useTouch } from "../index-I8tfW3Kf.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
import { u as useLocale } from "../index-BOB4ytqZ.js";
const DEFAULT_FILED_NAMES = {
  text: "text",
  value: "value",
  children: "children",
  className: "className"
};
const usePicker = (props, emit) => {
  const state = reactive({
    formattedColumns: props.columns
  });
  const columnFieldNames = computed(() => {
    return __spreadValues(__spreadValues({}, DEFAULT_FILED_NAMES), props.fieldNames);
  });
  const defaultValues = ref([]);
  const defaultIndexes = computed(() => {
    const fields = columnFieldNames.value;
    return columnsList.value.map((column, index) => {
      const targetIndex = column.findIndex((item) => item[fields.value] === defaultValues.value[index]);
      return targetIndex === -1 ? 0 : targetIndex;
    });
  });
  const pickerColumn = ref([]);
  const swipeRef = (el) => {
    if (el && pickerColumn.value.length < columnsList.value.length) {
      pickerColumn.value.push(el);
    }
  };
  const selectedOptions = computed(() => {
    const fields = columnFieldNames.value;
    return columnsList.value.map((column, index) => {
      return column.find((item) => item[fields.value] === defaultValues.value[index]) || column[0];
    });
  });
  const columnsType = computed(() => {
    const firstColumn = state.formattedColumns[0];
    const fields = columnFieldNames.value;
    if (firstColumn) {
      if (Array.isArray(firstColumn)) {
        return "multiple";
      }
      if (fields.children in firstColumn) {
        return "cascade";
      }
    }
    return "single";
  });
  const columnsList = computed(() => {
    let result = [];
    switch (columnsType.value) {
      case "multiple":
        result = state.formattedColumns;
        break;
      case "cascade":
        result = formatCascade(state.formattedColumns, defaultValues.value ? defaultValues.value : []);
        break;
      default:
        result = [state.formattedColumns];
        break;
    }
    return result;
  });
  const formatCascade = (columns, defaultValues2) => {
    const formatted = [];
    const fields = columnFieldNames.value;
    let cursor = {
      text: "",
      value: "",
      [fields.children]: columns
    };
    let columnIndex = 0;
    while (cursor && cursor[fields.children]) {
      const options = cursor[fields.children];
      const value = defaultValues2[columnIndex];
      let index = options.findIndex((columnItem) => columnItem[fields.value] === value);
      if (index === -1) index = 0;
      cursor = cursor[fields.children][index];
      columnIndex++;
      formatted.push(options);
    }
    return formatted;
  };
  const cancel = () => {
    emit("cancel", {
      selectedValue: defaultValues.value,
      selectedOptions: selectedOptions.value
    });
  };
  const changeHandler = (columnIndex, option) => {
    var _a;
    const fields = columnFieldNames.value;
    if (option && Object.keys(option).length) {
      defaultValues.value = defaultValues.value ? defaultValues.value : [];
      if (columnsType.value === "cascade") {
        defaultValues.value[columnIndex] = (_a = option[fields.value]) != null ? _a : "";
        let index = columnIndex;
        let cursor = option;
        while (cursor && cursor[fields.children] && cursor[fields.children][0]) {
          defaultValues.value[index + 1] = cursor[fields.children][0][fields.value];
          index++;
          cursor = cursor[fields.children][0];
        }
        if (cursor && cursor[fields.children] && cursor[fields.children].length === 0) {
          defaultValues.value = defaultValues.value.slice(0, index + 1);
        }
      } else {
        defaultValues.value[columnIndex] = Object.prototype.hasOwnProperty.call(option, fields.value) ? option[fields.value] : "";
      }
      emit("change", {
        columnIndex,
        selectedValue: defaultValues.value,
        selectedOptions: selectedOptions.value
      });
    }
  };
  const confirm = () => {
    const fields = columnFieldNames.value;
    if (defaultValues.value && !defaultValues.value.length) {
      columnsList.value.forEach((columns) => {
        defaultValues.value.push(columns[0][fields.value]);
      });
    }
    emit("confirm", {
      selectedValue: defaultValues.value,
      selectedOptions: selectedOptions.value
    });
  };
  const isSameValue = (valA, valB) => JSON.stringify(valA) === JSON.stringify(valB);
  watch(
    () => props.modelValue,
    (newValues) => {
      if (!isSameValue(newValues, defaultValues.value)) {
        defaultValues.value = newValues;
      }
    },
    { deep: true, immediate: true }
  );
  watch(
    defaultValues,
    (newValues) => {
      if (!isSameValue(newValues, props.modelValue)) {
        emit("update:modelValue", newValues);
      }
    },
    { deep: true }
  );
  watch(
    () => props.columns,
    (val) => {
      state.formattedColumns = val;
    }
  );
  return __spreadProps(__spreadValues({}, toRefs(state)), {
    columnsType,
    columnsList,
    columnFieldNames,
    cancel,
    changeHandler,
    confirm,
    defaultValues,
    defaultIndexes,
    pickerColumn,
    swipeRef,
    selectedOptions,
    isSameValue
  });
};
const { create: create$1 } = createComponent("picker-column");
const _sfc_main$1 = create$1({
  props: {
    // 当前选中项
    value: [String, Number],
    columnsType: String,
    column: {
      type: Array,
      default: () => []
    },
    // 是否开启3D效果
    threeDimensional: {
      type: Boolean,
      default: true
    },
    swipeDuration: {
      type: [Number, String],
      default: 1e3
    },
    visibleOptionNum: {
      type: [Number, String],
      default: 7
    },
    optionHeight: {
      type: [Number, String],
      default: 36
    },
    fieldNames: {
      type: Object,
      default: () => ({})
    },
    // 特殊环境判断
    taro: {
      type: Boolean,
      default: false
    }
  },
  emits: ["click", "change"],
  setup(props, { emit }) {
    const touch = useTouch();
    const state = reactive({
      touchParams: {
        startY: 0,
        endY: 0,
        startTime: 0,
        endTime: 0,
        lastY: 0,
        lastTime: 0
      },
      currIndex: 1,
      transformY: 0,
      scrollDistance: 0,
      rotation: 20
    });
    const roller = ref(null);
    const moving = ref(false);
    const touchDeg = ref(0);
    const touchTime = ref(0);
    const DEFAULT_DURATION = 200;
    const INERTIA_TIME = 300;
    const INERTIA_DISTANCE = 15;
    const touchRollerStyle = computed(() => {
      return {
        transition: `transform ${touchTime.value}ms cubic-bezier(0.17, 0.89, 0.45, 1)`,
        transform: `rotate3d(1, 0, 0, ${touchDeg.value})`,
        top: `calc(50% - ${+props.optionHeight / 2}px)`
      };
    });
    const touchTileStyle = computed(() => {
      const { optionHeight } = props;
      return {
        transition: `transform ${touchTime.value}ms cubic-bezier(0.17, 0.89, 0.45, 1)`,
        transform: `translate3d(0, ${state.scrollDistance}px, 0)`,
        top: `calc(50% - ${+optionHeight / 2}px)`,
        height: `${optionHeight}px`
      };
    });
    const setRollerStyle = (index) => {
      return `transform: rotate3d(1, 0, 0, ${-state.rotation * index}deg) translate3d(0px, 0px, 104px)`;
    };
    const maskStyles = computed(() => {
      return {
        backgroundSize: `100% ${(+props.visibleOptionNum - 1) * +props.optionHeight / 2}px`
      };
    });
    const onTouchStart = (event) => {
      touch.start(event);
      if (moving.value && !props.taro) {
        const dom = roller.value;
        const { transform } = window.getComputedStyle(dom);
        if (props.threeDimensional) {
          const circle = Math.floor(parseInt(touchDeg.value) / 360);
          const cos = +transform.split(", ")[5];
          const sin = +transform.split(", ")[6] < 0 ? 180 : 0;
          const endDeg = circle * 360 + Math.acos(cos) / Math.PI * 180 + sin;
          state.scrollDistance = -Math.abs((endDeg / state.rotation - 1) * +props.optionHeight);
        } else {
          state.scrollDistance = +transform.slice(7, transform.length - 1).split(", ")[5];
        }
      }
      preventDefault(event, true);
      state.touchParams.startY = touch.deltaY.value;
      state.touchParams.startTime = Date.now();
      state.transformY = state.scrollDistance;
    };
    const onTouchMove = (event) => {
      touch.move(event);
      if (touch.isVertical()) {
        moving.value = true;
        preventDefault(event, true);
      }
      state.touchParams.lastY = touch.deltaY.value;
      let move = state.touchParams.lastY - state.touchParams.startY;
      setMove(move);
    };
    const onTouchEnd = () => {
      state.touchParams.lastY = touch.deltaY.value;
      state.touchParams.lastTime = Date.now();
      let move = state.touchParams.lastY - state.touchParams.startY;
      let moveTime = state.touchParams.lastTime - state.touchParams.startTime;
      if (moveTime <= INERTIA_TIME && Math.abs(move) > INERTIA_DISTANCE) {
        const distance = momentum(move, moveTime);
        setMove(distance, "end", +props.swipeDuration);
        return;
      } else {
        setMove(move, "end");
      }
      setTimeout(() => {
        touch.reset();
        moving.value = false;
      }, 0);
    };
    const momentum = (distance, duration) => {
      const speed = Math.abs(distance / duration);
      distance = speed / 3e-3 * (distance < 0 ? -1 : 1);
      return distance;
    };
    const isHidden = (index) => {
      if (index >= state.currIndex + 8 || index <= state.currIndex - 8) {
        return true;
      } else {
        return false;
      }
    };
    const setTransform = (translateY = 0, type, time = DEFAULT_DURATION, deg) => {
      if (type === "end") {
        touchTime.value = time;
      } else {
        touchTime.value = 0;
      }
      touchDeg.value = deg;
      state.scrollDistance = translateY;
    };
    const setMove = (move, type, time) => {
      const { optionHeight } = props;
      let updateMove = move + state.transformY;
      if (type === "end") {
        if (updateMove > 0) {
          updateMove = 0;
        }
        if (updateMove < -(props.column.length - 1) * +optionHeight) {
          updateMove = -(props.column.length - 1) * +optionHeight;
        }
        let endMove = Math.round(updateMove / +optionHeight) * +optionHeight;
        let deg = `${(Math.abs(Math.round(endMove / +optionHeight)) + 1) * state.rotation}deg`;
        setTransform(endMove, type, time, deg);
        state.currIndex = Math.abs(Math.round(endMove / +optionHeight)) + 1;
      } else {
        let deg = 0;
        let currentDeg = (-updateMove / +optionHeight + 1) * state.rotation;
        const maxDeg = (props.column.length + 1) * state.rotation;
        const minDeg = 0;
        deg = clamp(currentDeg, minDeg, maxDeg);
        if (minDeg < deg && deg < maxDeg) {
          setTransform(updateMove, null, void 0, deg + "deg");
          state.currIndex = Math.abs(Math.round(updateMove / +optionHeight)) + 1;
        }
      }
    };
    const setChooseValue = () => {
      emit("change", props.column[state.currIndex - 1]);
    };
    const modifyStatus = (type) => {
      const { column } = props;
      let index = column.findIndex((columnItem) => columnItem[props.fieldNames.value] === props.value);
      state.currIndex = index === -1 ? 1 : index + 1;
      let move = index === -1 ? 0 : index * +props.optionHeight;
      type && setChooseValue();
      setMove(-move);
    };
    const stopMomentum = () => {
      moving.value = false;
      touchTime.value = 0;
      setChooseValue();
    };
    watch(
      () => props.column,
      () => {
        if (props.column && props.column.length > 0) {
          state.transformY = 0;
          modifyStatus(false);
        }
      },
      {
        deep: true
      }
    );
    watch(
      () => props.value,
      () => {
        state.transformY = 0;
        modifyStatus(false);
      },
      {
        deep: true
      }
    );
    onMounted(() => {
      modifyStatus(true);
    });
    return __spreadProps(__spreadValues(__spreadValues({}, toRefs(state)), toRefs(props)), {
      setRollerStyle,
      isHidden,
      roller,
      onTouchStart,
      onTouchMove,
      onTouchEnd,
      touchRollerStyle,
      touchTileStyle,
      setMove,
      stopMomentum,
      pxCheck,
      maskStyles
    });
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: "nut-picker__list",
    onTouchstart: _cache[1] || (_cache[1] = (...args) => _ctx.onTouchStart && _ctx.onTouchStart(...args)),
    onTouchmove: _cache[2] || (_cache[2] = (...args) => _ctx.onTouchMove && _ctx.onTouchMove(...args)),
    onTouchend: _cache[3] || (_cache[3] = (...args) => _ctx.onTouchEnd && _ctx.onTouchEnd(...args))
  }, [
    createElementVNode("view", {
      ref: "roller",
      class: "nut-picker-roller",
      style: normalizeStyle(_ctx.threeDimensional ? _ctx.touchRollerStyle : _ctx.touchTileStyle),
      onTransitionend: _cache[0] || (_cache[0] = (...args) => _ctx.stopMomentum && _ctx.stopMomentum(...args))
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.column, (item, index) => {
        var _a;
        return openBlock(), createElementBlock(Fragment, {
          key: (_a = item[_ctx.fieldNames.value]) != null ? _a : index
        }, [
          item && item[_ctx.fieldNames.text] && _ctx.threeDimensional ? (openBlock(), createElementBlock("view", {
            key: 0,
            class: normalizeClass(["nut-picker-roller-item", {
              "nut-picker-roller-item-hidden": _ctx.isHidden(index + 1),
              [item[_ctx.fieldNames.className]]: item[_ctx.fieldNames.className]
            }]),
            style: normalizeStyle(_ctx.setRollerStyle(index + 1))
          }, toDisplayString(item[_ctx.fieldNames.text]), 7)) : createCommentVNode("", true),
          item && item[_ctx.fieldNames.text] && !_ctx.threeDimensional ? (openBlock(), createElementBlock("view", {
            key: 1,
            class: normalizeClass(["nut-picker-roller-item-tile", {
              [item[_ctx.fieldNames.className]]: item[_ctx.fieldNames.className]
            }]),
            style: normalizeStyle({ height: _ctx.pxCheck(_ctx.optionHeight), lineHeight: _ctx.pxCheck(_ctx.optionHeight) })
          }, toDisplayString(item[_ctx.fieldNames.text]), 7)) : createCommentVNode("", true)
        ], 64);
      }), 128))
    ], 36),
    createElementVNode("view", {
      class: "nut-picker-roller-mask",
      style: normalizeStyle(_ctx.maskStyles)
    }, null, 4)
  ], 32);
}
const NutPickerColumn = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const baseProps = {
  modelValue: {
    type: Array,
    default: () => []
  },
  title: {
    type: String,
    default: ""
  },
  cancelText: {
    type: String,
    default: ""
  },
  okText: {
    type: String,
    default: ""
  },
  columns: {
    type: Array,
    default: () => {
      return [];
    }
  },
  threeDimensional: {
    type: Boolean,
    default: false
  },
  swipeDuration: {
    type: [Number, String],
    default: 1e3
  },
  showToolbar: {
    type: Boolean,
    default: true
  },
  visibleOptionNum: {
    type: [Number, String],
    default: 7
  },
  optionHeight: {
    type: [Number, String],
    default: 36
  },
  fieldNames: {
    type: Object,
    default: () => ({})
  }
};
const { create } = createComponent("picker");
const cN = "NutPicker";
const _sfc_main = create({
  components: {
    NutPickerColumn
  },
  props: baseProps,
  emits: ["cancel", "change", "confirm", "update:modelValue"],
  setup(props, { emit }) {
    const translate = useLocale(cN);
    const { changeHandler, confirm, defaultValues, columnsList, columnsType, columnFieldNames, cancel } = usePicker(
      props,
      emit
    );
    const pickerColumn = ref([]);
    const swipeRef = (el) => {
      if (el && pickerColumn.value.length < columnsList.value.length) {
        pickerColumn.value.push(el);
      }
    };
    const columnStyle = computed(() => {
      const styles = {};
      styles.height = `${+props.visibleOptionNum * +props.optionHeight}px`;
      styles["--lineHeight"] = `${+props.optionHeight}px`;
      return styles;
    });
    const confirmHandler = () => {
      pickerColumn.value.length > 0 && pickerColumn.value.forEach((column) => {
        column.stopMomentum();
      });
      confirm();
    };
    return {
      columnsType,
      columnsList,
      columnFieldNames,
      cancel,
      changeHandler,
      confirmHandler,
      defaultValues,
      translate,
      pickerColumn,
      swipeRef,
      columnStyle
    };
  }
});
const _hoisted_1 = { class: "nut-picker" };
const _hoisted_2 = {
  key: 0,
  class: "nut-picker__bar"
};
const _hoisted_3 = { class: "nut-picker__title" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_nut_picker_column = resolveComponent("nut-picker-column");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _ctx.showToolbar ? (openBlock(), createElementBlock("view", _hoisted_2, [
      createElementVNode("view", {
        class: "nut-picker__left",
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.cancel && _ctx.cancel(...args))
      }, toDisplayString(_ctx.cancelText || _ctx.translate("cancel")), 1),
      createElementVNode("view", _hoisted_3, toDisplayString(_ctx.title), 1),
      createElementVNode("view", {
        class: "nut-picker__right",
        onClick: _cache[1] || (_cache[1] = (...args) => _ctx.confirmHandler && _ctx.confirmHandler(...args))
      }, toDisplayString(_ctx.okText || _ctx.translate("confirm")), 1)
    ])) : createCommentVNode("", true),
    renderSlot(_ctx.$slots, "top"),
    createElementVNode("view", {
      class: "nut-picker__column",
      style: normalizeStyle(_ctx.columnStyle)
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.columnsList, (column, columnIndex) => {
        return openBlock(), createElementBlock("view", {
          key: columnIndex,
          class: "nut-picker__columnitem"
        }, [
          createVNode(_component_nut_picker_column, {
            ref_for: true,
            ref: _ctx.swipeRef,
            column,
            "columns-type": _ctx.columnsType,
            "field-names": _ctx.columnFieldNames,
            value: _ctx.defaultValues && _ctx.defaultValues[columnIndex],
            "three-dimensional": _ctx.threeDimensional,
            "swipe-duration": _ctx.swipeDuration,
            "visible-option-num": _ctx.visibleOptionNum,
            "option-height": _ctx.optionHeight,
            onChange: (option) => {
              _ctx.changeHandler(columnIndex, option);
            }
          }, null, 8, ["column", "columns-type", "field-names", "value", "three-dimensional", "swipe-duration", "visible-option-num", "option-height", "onChange"])
        ]);
      }), 128))
    ], 4),
    renderSlot(_ctx.$slots, "default")
  ]);
}
const NutPicker = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  NutPicker as default
};
