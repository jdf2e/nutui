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
import { reactive, ref, computed, watch, toRefs, resolveComponent, openBlock, createBlock, withCtx, createElementVNode, renderSlot, withDirectives, createVNode, vShow, createTextVNode, toDisplayString, createElementBlock, Fragment, renderList, normalizeClass, createCommentVNode } from "vue";
import { Location, Location2, Check, Close, Left } from "@nutui/icons-vue-taro";
import { N as NutPopup, p as popupProps } from "../index.taro-V9Ta96_T.js";
import { c as createComponent } from "../component-DQf3CENX.js";
import NutElevator from "../elevator/Elevator.js";
import { _ as _sfc_main$1 } from "../index.taro.vue_vue_type_script_setup_true_lang-JJ7hr71Y.js";
import { u as useLocale } from "../index-IxPZmHlb.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
const cN = "NutAddress";
const { create } = createComponent("address");
const _sfc_main = create({
  components: {
    NutPopup,
    NutElevator,
    Location,
    Location2,
    Check,
    Close,
    Left,
    NutScrollView: _sfc_main$1
  },
  inheritAttrs: false,
  props: __spreadProps(__spreadValues({}, popupProps), {
    modelValue: {
      type: Array,
      default: () => []
    },
    visible: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "custom"
    },
    customAddressTitle: {
      type: String,
      default: ""
    },
    province: {
      type: Array,
      default: () => []
    },
    city: {
      type: Array,
      default: () => []
    },
    // 市
    country: {
      type: Array,
      default: () => []
    },
    // 县
    town: {
      type: Array,
      default: () => []
    },
    // 镇
    isShowCustomAddress: {
      type: Boolean,
      default: true
    },
    // 是否显示‘选择其他地区’按钮 type=‘exist’ 生效
    existAddress: {
      type: Array,
      default: () => []
    },
    // 现存地址列表
    existAddressTitle: {
      type: String,
      default: ""
    },
    customAndExistTitle: {
      type: String,
      default: ""
    },
    height: {
      type: [String, Number],
      default: "200"
    },
    columnsPlaceholder: {
      type: [String, Array],
      default: ""
    }
  }),
  emits: ["update:visible", "update:modelValue", "type", "change", "selected", "close", "closeMask", "switchModule"],
  setup(props, { emit }) {
    const translate = useLocale(cN);
    const tabItemRef = reactive({
      province: ref(null),
      city: ref(null),
      country: ref(null),
      town: ref(null)
    });
    const showPopup = ref(props.visible);
    const privateType = ref(props.type);
    const tabIndex = ref(0);
    const prevTabIndex = ref(0);
    const tabName = ref(["province", "city", "country", "town"]);
    const scrollDis = ref([0, 0, 0, 0]);
    const scrollTop = ref(0);
    const regionData = reactive([]);
    const regionList = computed(() => {
      switch (tabIndex.value) {
        case 0:
          return props.province;
        case 1:
          return props.city;
        case 2:
          return props.country;
        default:
          return props.town;
      }
    });
    const transformData = (data) => {
      if (!Array.isArray(data)) throw new TypeError("params muse be array.");
      if (!data.length) return [];
      data.forEach((item) => {
        if (!item.title) {
          console.warn("[NutUI] <Address> 请检查数组选项的 title 值是否有设置 ,title 为必填项 .");
          return;
        }
      });
      const newData = [];
      data = data.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
      data.forEach((item) => {
        const index = newData.findIndex((value) => value.title === item.title);
        if (index <= -1) {
          newData.push({
            title: item.title,
            list: [].concat(item)
          });
        } else {
          newData[index].list.push(item);
        }
      });
      return newData;
    };
    let selectedRegion = ref([]);
    let selectedExistAddress = reactive({});
    const closeWay = ref("self");
    const lineDistance = ref(20);
    const initCustomSelected = () => {
      regionData[0] = props.province || [];
      regionData[1] = props.city || [];
      regionData[2] = props.country || [];
      regionData[3] = props.town || [];
      const defaultValue = props.modelValue;
      const num = defaultValue.length;
      if (num > 0) {
        tabIndex.value = num - 1;
        if (regionList.value.length == 0) {
          tabIndex.value = 0;
          return;
        }
        for (let index = 0; index < num; index++) {
          let arr = regionData[index];
          selectedRegion.value[index] = arr.filter((item) => item.id == defaultValue[index])[0];
        }
        scrollTo();
      }
    };
    const getTabName = (item, index) => {
      if (item && item.name) return item.name;
      if (tabIndex.value < index && item) {
        return item.name;
      } else {
        return props.columnsPlaceholder[index] || translate("select");
      }
    };
    const handClose = (type = "self") => {
      closeWay.value = type == "cross" ? "cross" : "self";
      showPopup.value = false;
    };
    const clickOverlay = () => {
      closeWay.value = "mask";
    };
    const nextAreaList = (item) => {
      var _a;
      const tab = tabIndex.value;
      prevTabIndex.value = tabIndex.value;
      const callBackParams = {
        custom: tabName.value[tab]
      };
      selectedRegion.value[tab] = item;
      selectedRegion.value.splice(tab + 1, selectedRegion.value.length - (tab + 1));
      callBackParams.value = item;
      if (((_a = regionData[tab + 1]) == null ? void 0 : _a.length) > 0) {
        tabIndex.value = tab + 1;
        callBackParams.next = tabName.value[tabIndex.value];
        scrollTo();
      } else {
        handClose();
        emit("update:modelValue");
      }
      emit("change", callBackParams);
    };
    const changeRegionTab = (item, index) => {
      prevTabIndex.value = tabIndex.value;
      if (getTabName(item, index)) {
        tabIndex.value = index;
        scrollTo();
      }
    };
    const scrollChange = (e) => {
      scrollDis.value[tabIndex.value] = e.detail.scrollTop;
    };
    const scrollTo = () => {
      setTimeout(() => {
        scrollTop.value = scrollDis.value[tabIndex.value];
      });
    };
    const selectedExist = (item) => {
      const copyExistAdd = props.existAddress;
      let prevExistAdd = {};
      copyExistAdd.forEach((list) => {
        if (list && list.selectedAddress) prevExistAdd = list;
        list.selectedAddress = false;
      });
      item.selectedAddress = true;
      selectedExistAddress = item;
      emit("selected", prevExistAdd, item, copyExistAdd);
      handClose();
    };
    const initAddress = () => {
      selectedRegion.value = [];
      tabIndex.value = 0;
      scrollTo();
    };
    const close = () => {
      const data = {
        addressIdStr: "",
        addressStr: "",
        province: selectedRegion.value[0],
        city: selectedRegion.value[1],
        country: selectedRegion.value[2],
        town: selectedRegion.value[3]
      };
      const callBackParams = {
        data: {},
        type: privateType.value
      };
      if (["custom", "custom2"].includes(privateType.value)) {
        [0, 1, 2, 3].forEach((i) => {
          const item = selectedRegion.value[i];
          data.addressIdStr += `${i ? "_" : ""}${item && item.id || 0}`;
          data.addressStr += item && item.name || "";
        });
        callBackParams.data = data;
      } else {
        callBackParams.data = selectedExistAddress;
      }
      initAddress();
      if (closeWay.value == "self") {
        emit("close", callBackParams);
      } else {
        emit("closeMask", { closeWay });
      }
      emit("update:visible", false);
    };
    const switchModule = () => {
      const type = privateType.value;
      privateType.value = type == "exist" ? "custom" : "exist";
      initAddress();
      emit("switchModule", { type: privateType.value });
    };
    const handleElevatorItem = (key, item) => {
      nextAreaList(item);
    };
    watch(
      () => props.visible,
      (value) => {
        showPopup.value = value;
      }
    );
    watch(
      () => showPopup.value,
      (value) => {
        if (value) {
          initCustomSelected();
        }
      }
    );
    return __spreadProps(__spreadValues(__spreadValues({
      showPopup,
      privateType,
      tabIndex,
      tabName,
      regionList,
      selectedRegion,
      selectedExistAddress,
      switchModule,
      closeWay,
      close,
      getTabName,
      nextAreaList,
      lineDistance,
      changeRegionTab,
      selectedExist,
      clickOverlay,
      handClose,
      handleElevatorItem
    }, toRefs(props)), toRefs(tabItemRef)), {
      translate,
      transformData,
      scrollTop,
      scrollChange
    });
  }
});
const _hoisted_1 = { class: "nut-address" };
const _hoisted_2 = { class: "nut-address__header" };
const _hoisted_3 = { class: "nut-address__header__title" };
const _hoisted_4 = {
  key: 0,
  class: "nut-address__custom"
};
const _hoisted_5 = {
  ref: "tabRegion",
  class: "nut-address__region"
};
const _hoisted_6 = ["onClick"];
const _hoisted_7 = {
  key: 0,
  class: "active nut-address__region-item"
};
const _hoisted_8 = /* @__PURE__ */ createElementVNode("view", { class: "nut-address__region-line--mini active" }, null, -1);
const _hoisted_9 = {
  key: 0,
  class: "nut-address__detail"
};
const _hoisted_10 = { class: "nut-address__detail-list" };
const _hoisted_11 = ["onClick"];
const _hoisted_12 = {
  key: 1,
  class: "nut-address__elevator-group"
};
const _hoisted_13 = {
  key: 1,
  class: "nut-address__exist"
};
const _hoisted_14 = { class: "nut-address__exist-group" };
const _hoisted_15 = { class: "nut-address__exist-group-list" };
const _hoisted_16 = ["onClick"];
const _hoisted_17 = { class: "nut-address__exist-item-info" };
const _hoisted_18 = {
  key: 0,
  class: "nut-address__exist-item-info-top"
};
const _hoisted_19 = { class: "nut-address__exist-item-info-name" };
const _hoisted_20 = { class: "nut-address__exist-item-info-phone" };
const _hoisted_21 = { class: "nut-address__exist-item-info-bottom" };
const _hoisted_22 = { class: "nut-address__exist-choose-btn" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Left = resolveComponent("Left");
  const _component_Close = resolveComponent("Close");
  const _component_Check = resolveComponent("Check");
  const _component_nut_scroll_view = resolveComponent("nut-scroll-view");
  const _component_nut_elevator = resolveComponent("nut-elevator");
  const _component_Location2 = resolveComponent("Location2");
  const _component_nut_popup = resolveComponent("nut-popup");
  return openBlock(), createBlock(_component_nut_popup, {
    visible: _ctx.showPopup,
    "onUpdate:visible": _cache[3] || (_cache[3] = ($event) => _ctx.showPopup = $event),
    position: "bottom",
    "lock-scroll": _ctx.lockScroll,
    "catch-move": _ctx.lockScroll,
    round: _ctx.round,
    "z-index": _ctx.zIndex,
    onClose: _ctx.close,
    onClickOverlay: _ctx.clickOverlay,
    onOpen: _cache[4] || (_cache[4] = ($event) => _ctx.closeWay = "self")
  }, {
    default: withCtx(() => [
      createElementVNode("view", _hoisted_1, [
        createElementVNode("view", _hoisted_2, [
          createElementVNode("view", {
            class: "nut-address__header-back",
            onClick: _cache[0] || (_cache[0] = (...args) => _ctx.switchModule && _ctx.switchModule(...args))
          }, [
            renderSlot(_ctx.$slots, "back-icon", {}, () => [
              withDirectives(createVNode(_component_Left, { size: "14px" }, null, 512), [
                [vShow, _ctx.type == "exist" && _ctx.privateType == "custom"]
              ])
            ])
          ]),
          createTextVNode(),
          createElementVNode("view", _hoisted_3, toDisplayString(_ctx.privateType == "custom" ? _ctx.customAddressTitle || _ctx.translate("selectRegion") : _ctx.existAddressTitle || _ctx.translate("deliveryTo")), 1),
          createTextVNode(),
          createElementVNode("view", {
            class: "nut-address__header-close",
            onClick: _cache[1] || (_cache[1] = ($event) => _ctx.handClose("cross"))
          }, [
            renderSlot(_ctx.$slots, "close-icon", {}, () => [
              createVNode(_component_Close, {
                color: "#cccccc",
                size: "14px"
              })
            ])
          ])
        ]),
        createTextVNode(),
        ["custom", "custom2"].includes(_ctx.privateType) ? (openBlock(), createElementBlock("view", _hoisted_4, [
          createElementVNode("view", _hoisted_5, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.selectedRegion, (item, index) => {
              return openBlock(), createElementBlock("view", {
                key: index,
                class: normalizeClass(["nut-address__region-item", index == _ctx.tabIndex ? "active" : ""]),
                onClick: ($event) => _ctx.changeRegionTab(item, index)
              }, [
                createElementVNode("view", null, toDisplayString(_ctx.getTabName(item, index)), 1),
                createTextVNode(),
                createElementVNode("view", {
                  class: normalizeClass({ "nut-address__region-line--mini": true, active: index == _ctx.tabIndex })
                }, null, 2)
              ], 10, _hoisted_6);
            }), 128)),
            createTextVNode(),
            _ctx.tabIndex == _ctx.selectedRegion.length ? (openBlock(), createElementBlock("view", _hoisted_7, [
              createElementVNode("view", null, toDisplayString(_ctx.getTabName(null, _ctx.selectedRegion.length)), 1),
              createTextVNode(),
              _hoisted_8
            ])) : createCommentVNode("", true)
          ], 512),
          createTextVNode(),
          _ctx.privateType == "custom" ? (openBlock(), createElementBlock("view", _hoisted_9, [
            createElementVNode("div", _hoisted_10, [
              createVNode(_component_nut_scroll_view, {
                "scroll-y": true,
                style: { height: "100%" },
                "scroll-top": _ctx.scrollTop,
                onScroll: _ctx.scrollChange
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.regionList, (item, index) => {
                    var _a, _b;
                    return openBlock(), createElementBlock("div", {
                      key: index,
                      class: normalizeClass(["nut-address__detail-item", ((_a = _ctx.selectedRegion[_ctx.tabIndex]) == null ? void 0 : _a.id) == item.id ? "active" : ""]),
                      onClick: ($event) => _ctx.nextAreaList(item)
                    }, [
                      createElementVNode("div", null, [
                        ((_b = _ctx.selectedRegion[_ctx.tabIndex]) == null ? void 0 : _b.id) == item.id ? renderSlot(_ctx.$slots, "icon", { key: 0 }, () => [
                          createVNode(_component_Check, {
                            class: "nut-address-select-icon",
                            width: "13px"
                          })
                        ]) : createCommentVNode("", true),
                        createTextVNode(" " + toDisplayString(item.name), 1)
                      ])
                    ], 10, _hoisted_11);
                  }), 128))
                ]),
                _: 3
              }, 8, ["scroll-top", "onScroll"])
            ])
          ])) : (openBlock(), createElementBlock("view", _hoisted_12, [
            createVNode(_component_nut_elevator, {
              height: _ctx.height,
              "index-list": _ctx.transformData(_ctx.regionList),
              onClickItem: _ctx.handleElevatorItem
            }, null, 8, ["height", "index-list", "onClickItem"])
          ]))
        ])) : _ctx.privateType == "exist" ? (openBlock(), createElementBlock("view", _hoisted_13, [
          createElementVNode("div", _hoisted_14, [
            createElementVNode("ul", _hoisted_15, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.existAddress, (item, index) => {
                return openBlock(), createElementBlock("li", {
                  key: index,
                  class: normalizeClass(["nut-address__exist-group-item", [item.selectedAddress ? "active" : ""]]),
                  onClick: ($event) => _ctx.selectedExist(item)
                }, [
                  !item.selectedAddress ? renderSlot(_ctx.$slots, "unselected-icon", { key: 0 }, () => [
                    createVNode(_component_Location2, {
                      class: "nut-address-select-icon",
                      width: "13px"
                    })
                  ]) : createCommentVNode("", true),
                  createTextVNode(),
                  item.selectedAddress ? renderSlot(_ctx.$slots, "icon", { key: 1 }, () => [
                    createVNode(_component_Check, {
                      class: "nut-address-select-icon",
                      width: "13px"
                    })
                  ]) : createCommentVNode("", true),
                  createTextVNode(),
                  createElementVNode("div", _hoisted_17, [
                    item.name && item.phone ? (openBlock(), createElementBlock("div", _hoisted_18, [
                      createElementVNode("div", _hoisted_19, toDisplayString(item.name), 1),
                      createTextVNode(),
                      createElementVNode("div", _hoisted_20, toDisplayString(item.phone), 1)
                    ])) : createCommentVNode("", true),
                    createTextVNode(),
                    createElementVNode("div", _hoisted_21, [
                      createElementVNode("view", null, toDisplayString(item.provinceName + item.cityName + item.countyName + item.townName + item.addressDetail), 1)
                    ])
                  ])
                ], 10, _hoisted_16);
              }), 128))
            ])
          ]),
          createTextVNode(),
          _ctx.isShowCustomAddress ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "nut-address__exist-choose",
            onClick: _cache[2] || (_cache[2] = (...args) => _ctx.switchModule && _ctx.switchModule(...args))
          }, [
            createElementVNode("div", _hoisted_22, toDisplayString(_ctx.customAndExistTitle || _ctx.translate("chooseAnotherAddress")), 1)
          ])) : createCommentVNode("", true),
          createTextVNode(),
          !_ctx.isShowCustomAddress ? renderSlot(_ctx.$slots, "bottom", { key: 1 }) : createCommentVNode("", true)
        ])) : createCommentVNode("", true)
      ])
    ]),
    _: 3
  }, 8, ["visible", "lock-scroll", "catch-move", "round", "z-index", "onClose", "onClickOverlay"]);
}
const index_taro = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index_taro as default
};
