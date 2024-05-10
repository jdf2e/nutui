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
import { ref, reactive, computed, watch, toRefs, nextTick, resolveComponent, openBlock, createBlock, withCtx, createElementVNode, renderSlot, withDirectives, createVNode, vShow, toDisplayString, createElementBlock, Fragment, renderList, normalizeClass, createCommentVNode, normalizeStyle, createTextVNode } from "vue";
import { Location, Location2, Check, Close, Left } from "@nutui/icons-vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import { N as NutPopup, p as popupProps } from "../index-wLaOjIn1.js";
import NutElevator from "../elevator/Elevator.js";
import { u as useLocale } from "../index-CFigyH92.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
const { create } = createComponent("address");
const cN = "NutAddress";
const _sfc_main = create({
  components: {
    NutPopup,
    NutElevator,
    Location,
    Location2,
    Check,
    Close,
    Left
  },
  inheritAttrs: false,
  props: __spreadProps(__spreadValues({}, popupProps), {
    modelValue: {
      type: Array,
      default: () => []
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
    existAddress: {
      type: Array,
      default: () => []
    },
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
      default: "200px"
    },
    columnsPlaceholder: {
      type: [String, Array],
      default: ""
    }
  }),
  emits: ["update:visible", "update:modelValue", "type", "change", "selected", "close", "closeMask", "switchModule"],
  setup(props, { emit }) {
    const translate = useLocale(cN);
    const regionLine = ref(null);
    const tabRegion = ref(null);
    const showPopup = ref(props.visible);
    const privateType = ref(props.type);
    const tabIndex = ref(0);
    const prevTabIndex = ref(0);
    const tabName = ref(["province", "city", "country", "town"]);
    const scrollDom = ref(null);
    const scrollDis = ref([0, 0, 0, 0]);
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
      if (!Array.isArray(data))
        throw new TypeError("params muse be array.");
      if (!data.length)
        return [];
      data.forEach((item) => {
        if (!item.title) {
          console.warn("[NutUI] <Address> 请检查数组选项的 title 值是否有设置 ,title 为必填项 .");
          return;
        }
      });
      const newData = [];
      data = data.sort((a, b) => a.title.localeCompare(b.title));
      data.forEach((item) => {
        const index2 = newData.findIndex((value) => value.title === item.title);
        if (index2 <= -1) {
          newData.push({
            title: item.title,
            list: [].concat(item)
          });
        } else {
          newData[index2].list.push(item);
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
        for (let index2 = 0; index2 < num; index2++) {
          let arr = regionData[index2];
          selectedRegion.value[index2] = arr.filter((item) => item.id == defaultValue[index2])[0];
        }
        lineAnimation();
      }
    };
    const getTabName = (item, index2) => {
      if (item && item.name)
        return item.name;
      if (tabIndex.value < index2 && item) {
        return item.name;
      } else {
        return props.columnsPlaceholder[index2] || translate("select");
      }
    };
    const lineAnimation = () => {
      scrollTo();
      nextTick(() => {
        const name = tabRegion.value && tabRegion.value.getElementsByClassName("active")[0];
        if (name) {
          const distance = name.offsetLeft;
          lineDistance.value = distance ? distance : 20;
        }
      });
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
        lineAnimation();
        callBackParams.next = tabName.value[tabIndex.value];
      } else {
        handClose();
        emit("update:modelValue");
      }
      emit("change", callBackParams);
    };
    const changeRegionTab = (item, index2) => {
      prevTabIndex.value = tabIndex.value;
      if (getTabName(item, index2)) {
        tabIndex.value = index2;
        lineAnimation();
      }
    };
    const scrollTo = () => {
      const dom = scrollDom.value;
      const prev = prevTabIndex.value;
      const cur = scrollDis.value[tabIndex.value];
      (dom == null ? void 0 : dom.scrollTop) && (scrollDis.value[prev] = dom == null ? void 0 : dom.scrollTop);
      nextTick(() => {
        dom == null ? void 0 : dom.scrollTo({
          top: cur,
          behavior: "auto"
        });
      });
    };
    const selectedExist = (item) => {
      const copyExistAdd = props.existAddress;
      let prevExistAdd = {};
      copyExistAdd.forEach((list) => {
        if (list && list.selectedAddress)
          prevExistAdd = list;
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
      lineAnimation();
    };
    const handClose = (type = "self") => {
      closeWay.value = type == "cross" ? "cross" : "self";
      showPopup.value = false;
    };
    const clickOverlay = () => {
      closeWay.value = "mask";
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
    return __spreadProps(__spreadValues({
      showPopup,
      privateType,
      tabIndex,
      tabName,
      selectedRegion,
      switchModule,
      closeWay,
      close,
      getTabName,
      nextAreaList,
      regionLine,
      tabRegion,
      lineDistance,
      changeRegionTab,
      selectedExist,
      clickOverlay,
      handClose,
      handleElevatorItem,
      initCustomSelected
    }, toRefs(props)), {
      translate,
      regionList,
      transformData,
      scrollDom
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
const _hoisted_8 = {
  key: 0,
  class: "nut-address__detail"
};
const _hoisted_9 = {
  ref: "scrollDom",
  class: "nut-address__detail-list"
};
const _hoisted_10 = ["onClick"];
const _hoisted_11 = {
  key: 1,
  class: "nut-address__elevator-group"
};
const _hoisted_12 = {
  key: 1,
  class: "nut-address__exist"
};
const _hoisted_13 = { class: "nut-address__exist-group" };
const _hoisted_14 = { class: "nut-address__exist-group-list" };
const _hoisted_15 = ["onClick"];
const _hoisted_16 = { class: "nut-address__exist-item-info" };
const _hoisted_17 = {
  key: 0,
  class: "nut-address__exist-item-info-name"
};
const _hoisted_18 = {
  key: 1,
  class: "nut-address__exist-item-info-phone"
};
const _hoisted_19 = { class: "nut-address__exist-item-info-bottom" };
const _hoisted_20 = { class: "nut-address__exist-choose-btn" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Left = resolveComponent("Left");
  const _component_Close = resolveComponent("Close");
  const _component_Check = resolveComponent("Check");
  const _component_nut_elevator = resolveComponent("nut-elevator");
  const _component_Location2 = resolveComponent("Location2");
  const _component_nut_popup = resolveComponent("nut-popup");
  return openBlock(), createBlock(_component_nut_popup, {
    visible: _ctx.showPopup,
    "onUpdate:visible": _cache[3] || (_cache[3] = ($event) => _ctx.showPopup = $event),
    position: "bottom",
    "lock-scroll": _ctx.lockScroll,
    round: _ctx.round,
    "teleport-disable": _ctx.teleportDisable,
    teleport: _ctx.teleport,
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
          createElementVNode("view", _hoisted_3, toDisplayString(_ctx.privateType == "custom" ? _ctx.customAddressTitle || _ctx.translate("selectRegion") : _ctx.existAddressTitle || _ctx.translate("deliveryTo")), 1),
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
        ["custom", "custom2"].includes(_ctx.privateType) ? (openBlock(), createElementBlock("view", _hoisted_4, [
          createElementVNode("view", _hoisted_5, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.selectedRegion, (item, index2) => {
              return openBlock(), createElementBlock("view", {
                key: index2,
                class: normalizeClass(["nut-address__region-item", index2 == _ctx.tabIndex ? "active" : ""]),
                onClick: ($event) => _ctx.changeRegionTab(item, index2)
              }, [
                createElementVNode("view", null, toDisplayString(_ctx.getTabName(item, index2)), 1)
              ], 10, _hoisted_6);
            }), 128)),
            _ctx.tabIndex == _ctx.selectedRegion.length ? (openBlock(), createElementBlock("view", _hoisted_7, [
              createElementVNode("view", null, toDisplayString(_ctx.getTabName(null, _ctx.selectedRegion.length)), 1)
            ])) : createCommentVNode("", true),
            createElementVNode("view", {
              ref: "regionLine",
              class: "nut-address__region-line",
              style: normalizeStyle({ left: _ctx.lineDistance + "px" })
            }, null, 4)
          ], 512),
          _ctx.privateType == "custom" ? (openBlock(), createElementBlock("view", _hoisted_8, [
            createElementVNode("ul", _hoisted_9, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.regionList, (item, index2) => {
                var _a, _b;
                return openBlock(), createElementBlock("li", {
                  key: index2,
                  class: normalizeClass(["nut-address__detail-item", ((_a = _ctx.selectedRegion[_ctx.tabIndex]) == null ? void 0 : _a.id) == item.id ? "active" : ""]),
                  onClick: ($event) => _ctx.nextAreaList(item)
                }, [
                  createElementVNode("div", null, [
                    ((_b = _ctx.selectedRegion[_ctx.tabIndex]) == null ? void 0 : _b.id) == item.id ? renderSlot(_ctx.$slots, "icon", { key: 0 }, () => [
                      createVNode(_component_Check, {
                        class: "nut-address-select-icon",
                        size: "13px"
                      })
                    ]) : createCommentVNode("", true),
                    createTextVNode(" " + toDisplayString(item.name), 1)
                  ])
                ], 10, _hoisted_10);
              }), 128))
            ], 512)
          ])) : (openBlock(), createElementBlock("view", _hoisted_11, [
            createVNode(_component_nut_elevator, {
              height: _ctx.height,
              "index-list": _ctx.transformData(_ctx.regionList),
              onClickItem: _ctx.handleElevatorItem
            }, null, 8, ["height", "index-list", "onClickItem"])
          ]))
        ])) : (openBlock(), createElementBlock("view", _hoisted_12, [
          createElementVNode("div", _hoisted_13, [
            createElementVNode("ul", _hoisted_14, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.existAddress, (item, index2) => {
                return openBlock(), createElementBlock("li", {
                  key: index2,
                  class: normalizeClass(["nut-address__exist-group-item", item.selectedAddress ? "active" : ""]),
                  onClick: ($event) => _ctx.selectedExist(item)
                }, [
                  !item.selectedAddress ? renderSlot(_ctx.$slots, "unselected-icon", { key: 0 }, () => [
                    createVNode(_component_Location2, {
                      class: "nut-address-select-icon",
                      size: "13px"
                    })
                  ]) : createCommentVNode("", true),
                  item.selectedAddress ? renderSlot(_ctx.$slots, "icon", { key: 1 }, () => [
                    createVNode(_component_Check, {
                      class: "nut-address-select-icon",
                      size: "13px"
                    })
                  ]) : createCommentVNode("", true),
                  createElementVNode("div", _hoisted_16, [
                    item.name ? (openBlock(), createElementBlock("div", _hoisted_17, toDisplayString(item.name), 1)) : createCommentVNode("", true),
                    item.phone ? (openBlock(), createElementBlock("div", _hoisted_18, toDisplayString(item.phone), 1)) : createCommentVNode("", true),
                    createElementVNode("div", _hoisted_19, [
                      createElementVNode("view", null, toDisplayString(item.provinceName + item.cityName + item.countyName + item.townName + item.addressDetail), 1)
                    ])
                  ])
                ], 10, _hoisted_15);
              }), 128))
            ])
          ]),
          _ctx.isShowCustomAddress ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "nut-address__exist-choose",
            onClick: _cache[2] || (_cache[2] = (...args) => _ctx.switchModule && _ctx.switchModule(...args))
          }, [
            createElementVNode("div", _hoisted_20, toDisplayString(_ctx.customAndExistTitle || _ctx.translate("chooseAnotherAddress")), 1)
          ])) : createCommentVNode("", true)
        ])),
        renderSlot(_ctx.$slots, "bottom")
      ])
    ]),
    _: 3
  }, 8, ["visible", "lock-scroll", "round", "teleport-disable", "teleport", "z-index", "onClose", "onClickOverlay"]);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index as default
};
