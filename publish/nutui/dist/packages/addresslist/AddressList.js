import { resolveComponent, openBlock, createElementBlock, createElementVNode, renderSlot, toDisplayString, createCommentVNode, createVNode, createTextVNode, ref, h, createBlock, resolveDynamicComponent, withCtx, reactive, watch, onMounted, Fragment, renderList, createSlots } from "vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import { l as floatData } from "../util-D1pvnUYu.js";
import { u as useLocale } from "../index-BOB4ytqZ.js";
import { Del, Edit } from "@nutui/icons-vue";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
import { Button as _sfc_main$3 } from "../button/Button.js";
import { Swipe as _sfc_main$4 } from "../swipe/Swipe.js";
const { create: create$2 } = createComponent("address-list-item");
const cN$1 = "NutAddressList";
const _sfc_main$2 = create$2({
  components: { Del, Edit },
  props: {
    item: {
      type: Object,
      default: {}
    }
  },
  emits: ["delIcon", "editIcon", "clickItem"],
  setup(props, { emit }) {
    const translate = useLocale(cN$1);
    const delClick = (event) => {
      emit("delIcon", event, props.item);
      event.stopPropagation();
    };
    const editClick = (event) => {
      emit("editIcon", event, props.item);
      event.stopPropagation();
    };
    const contentsClick = (event) => {
      emit("clickItem", event, props.item);
      event.stopPropagation();
    };
    return {
      delClick,
      editClick,
      contentsClick,
      translate
    };
  }
});
const _hoisted_1$2 = { class: "nut-address-list-item__info" };
const _hoisted_2$1 = { class: "nut-address-list-item__info-contact" };
const _hoisted_3 = { class: "nut-address-list-item__info-contact-name" };
const _hoisted_4 = { class: "nut-address-list-item__info-contact-tel" };
const _hoisted_5 = {
  key: 0,
  class: "nut-address-list-item__info-contact-default"
};
const _hoisted_6 = { class: "nut-address-list-item__info-handle" };
const _hoisted_7 = { class: "nut-address-list-item__addr" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Del = resolveComponent("Del");
  const _component_Edit = resolveComponent("Edit");
  return openBlock(), createElementBlock("div", {
    class: "nut-address-list-item",
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.contentsClick && _ctx.contentsClick(...args))
  }, [
    createElementVNode("div", _hoisted_1$2, [
      createElementVNode("div", _hoisted_2$1, [
        renderSlot(_ctx.$slots, "content-top", {}, () => [
          createElementVNode("div", _hoisted_3, toDisplayString(_ctx.item.addressName), 1),
          createElementVNode("div", _hoisted_4, toDisplayString(_ctx.item.phone), 1),
          _ctx.item.defaultAddress ? (openBlock(), createElementBlock("div", _hoisted_5, toDisplayString(_ctx.translate("default")), 1)) : createCommentVNode("", true)
        ])
      ]),
      createElementVNode("div", _hoisted_6, [
        renderSlot(_ctx.$slots, "content-icon", {}, () => [
          createVNode(_component_Del, {
            name: "del",
            class: "nut-address-list-item__info-handle-del",
            onClick: _ctx.delClick
          }, null, 8, ["onClick"]),
          createVNode(_component_Edit, {
            name: "edit",
            class: "nut-address-list-item__info-handle-edit",
            onClick: _ctx.editClick
          }, null, 8, ["onClick"])
        ])
      ])
    ]),
    createElementVNode("div", _hoisted_7, [
      renderSlot(_ctx.$slots, "content-addr", {}, () => [
        createTextVNode(toDisplayString(_ctx.item.fullAddress), 1)
      ])
    ])
  ]);
}
const ItemContents = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const { create: create$1 } = createComponent("address-list-general");
const _sfc_main$1 = create$1({
  props: {
    item: {
      type: Object,
      default: {}
    },
    longPress: {
      type: Boolean,
      default: false
    },
    swipeEdition: {
      type: Boolean,
      default: false
    }
  },
  emits: ["delIcon", "editIcon", "clickItem", "longDown", "longCopy", "longSet", "longDel", "swipeDel"],
  components: {
    ItemContents,
    NutButton: _sfc_main$3,
    NutSwipe: _sfc_main$4
  },
  setup(props, { emit }) {
    const renderCompontent = () => {
      return h(ItemContents, {
        item: props.item,
        onDelIcon(event) {
          delClick(event);
        },
        onEditIcon(event) {
          editClick(event);
        },
        onClickItem(event) {
          clickItem(event);
        }
      });
    };
    let loop = null;
    const moveRef = ref(false);
    const showMaskRef = ref(false);
    const delClick = (event) => {
      emit("delIcon", event, props.item);
      event.stopPropagation();
    };
    const editClick = (event) => {
      emit("editIcon", event, props.item);
      event.stopPropagation();
    };
    const clickItem = (event) => {
      if (moveRef.value) return;
      emit("clickItem", event, props.item);
      event.stopPropagation();
    };
    const delLongClick = (event) => {
      emit("longDel", event, props.item);
      event.stopPropagation();
    };
    const holdingFunc = (event) => {
      loop = 0;
      showMaskRef.value = true;
      emit("longDown", event, props.item);
    };
    const holddownstart = (event) => {
      loop = setTimeout(() => {
        holdingFunc(event);
      }, 300);
    };
    const holddownmove = () => {
      clearTimeout(loop);
    };
    const holddownend = () => {
      clearTimeout(loop);
    };
    const hideMaskClick = () => {
      showMaskRef.value = false;
    };
    const copyCLick = (event) => {
      emit("longCopy", event, props.item);
      event.stopPropagation();
    };
    const setDefault = (event) => {
      emit("longSet", event, props.item);
      event.stopPropagation();
    };
    const maskClick = (event) => {
      if (loop != 0) {
        showMaskRef.value = false;
      }
      event.stopPropagation();
      event.preventDefault();
    };
    const swipeDelClick = (event) => {
      emit("swipeDel", event, props.item);
      event.stopPropagation();
    };
    const swipestart = () => {
      moveRef.value = false;
    };
    const swipemove = () => {
      moveRef.value = true;
    };
    return {
      renderCompontent,
      showMaskRef,
      clickItem,
      editClick,
      delClick,
      delLongClick,
      holddownstart,
      holddownmove,
      holddownend,
      copyCLick,
      hideMaskClick,
      setDefault,
      maskClick,
      swipeDelClick,
      swipestart,
      swipemove
    };
  }
});
const _hoisted_1$1 = {
  key: 0,
  class: "nut-address-list-general"
};
const _hoisted_2 = { class: "nut-address-list-swipe" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_nut_button = resolveComponent("nut-button");
  const _component_nut_swipe = resolveComponent("nut-swipe");
  return !_ctx.swipeEdition ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
    (openBlock(), createBlock(resolveDynamicComponent(_ctx.renderCompontent()), {
      onTouchstart: _ctx.holddownstart,
      onTouchend: _ctx.holddownend,
      onTouchmove: _ctx.holddownmove
    }, {
      "content-top": withCtx(() => [
        renderSlot(_ctx.$slots, "content-info")
      ]),
      "content-icon": withCtx(() => [
        renderSlot(_ctx.$slots, "content-icons")
      ]),
      "content-addr": withCtx(() => [
        renderSlot(_ctx.$slots, "content-addrs")
      ]),
      _: 3
    }, 40, ["onTouchstart", "onTouchend", "onTouchmove"])),
    _ctx.longPress && _ctx.showMaskRef ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: "nut-address-list-general__mask",
      onClick: _cache[3] || (_cache[3] = (...args) => _ctx.maskClick && _ctx.maskClick(...args))
    }, [
      renderSlot(_ctx.$slots, "longpress-all", {}, () => [
        createElementVNode("div", {
          class: "nut-address-list-general__mask-copy",
          onClick: _cache[0] || (_cache[0] = (...args) => _ctx.copyCLick && _ctx.copyCLick(...args))
        }, " 复制地址 "),
        createElementVNode("div", {
          class: "nut-address-list-general__mask-set",
          onClick: _cache[1] || (_cache[1] = (...args) => _ctx.setDefault && _ctx.setDefault(...args))
        }, " 设置默认 "),
        createElementVNode("div", {
          class: "nut-address-list-general__mask-del",
          onClick: _cache[2] || (_cache[2] = (...args) => _ctx.delLongClick && _ctx.delLongClick(...args))
        }, " 删除地址 ")
      ])
    ])) : createCommentVNode("", true),
    _ctx.showMaskRef ? (openBlock(), createElementBlock("div", {
      key: 1,
      class: "nut-address-list__mask-bottom",
      onClick: _cache[4] || (_cache[4] = (...args) => _ctx.hideMaskClick && _ctx.hideMaskClick(...args))
    })) : createCommentVNode("", true)
  ])) : (openBlock(), createBlock(_component_nut_swipe, { key: 1 }, {
    right: withCtx(() => [
      renderSlot(_ctx.$slots, "swipe-right-btn", {}, () => [
        createVNode(_component_nut_button, {
          shape: "square",
          style: { "height": "100%" },
          type: "danger",
          onClick: _ctx.swipeDelClick
        }, {
          default: withCtx(() => [
            createTextVNode("删除")
          ]),
          _: 1
        }, 8, ["onClick"])
      ])
    ]),
    default: withCtx(() => [
      createElementVNode("div", _hoisted_2, [
        (openBlock(), createBlock(resolveDynamicComponent(_ctx.renderCompontent()), {
          onTouchmove: _ctx.swipemove,
          onTouchstart: _ctx.swipestart
        }, {
          "content-top": withCtx(() => [
            renderSlot(_ctx.$slots, "content-info")
          ]),
          "content-icon": withCtx(() => [
            renderSlot(_ctx.$slots, "content-icons")
          ]),
          "content-addr": withCtx(() => [
            renderSlot(_ctx.$slots, "content-addrs")
          ]),
          _: 3
        }, 40, ["onTouchmove", "onTouchstart"]))
      ])
    ]),
    _: 3
  }));
}
const GeneralShell = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const { create } = createComponent("address-list");
const cN = "NutAddressList";
const _sfc_main = create({
  props: {
    data: {
      type: Array,
      default: []
    },
    longPress: {
      type: Boolean,
      default: false
    },
    swipeEdition: {
      type: Boolean,
      default: false
    },
    showBottomButton: {
      type: Boolean,
      default: true
    },
    dataOptions: {
      type: Object,
      default: {}
    }
  },
  components: {
    GeneralShell,
    NutButton: _sfc_main$3
  },
  emits: ["delIcon", "editIcon", "clickItem", "longCopy", "longSet", "longDel", "swipeDel", "add"],
  setup(props, { emit }) {
    const translate = useLocale(cN);
    const dataArray = ref([]);
    const dataInfo = reactive({
      id: 2,
      addressName: "姓名",
      phone: "123****4567",
      defaultAddress: false,
      fullAddress: "北京市通州区测试测试测试测试测试测试测试测试测试"
    });
    const trowelData = () => {
      if (Object.keys(props.dataOptions).length > 0) {
        dataArray.value = props.data.map((item) => {
          return floatData(dataInfo, item, props.dataOptions);
        });
      }
    };
    watch(
      () => props.data,
      () => trowelData(),
      { deep: true }
    );
    const clickDelIcon = (event, item) => {
      emit("delIcon", event, item);
      event.stopPropagation();
    };
    const clickEditIcon = (event, item) => {
      emit("editIcon", event, item);
      event.stopPropagation();
    };
    const clickContentItem = (event, item) => {
      emit("clickItem", event, item);
      event.stopPropagation();
    };
    const clickLongCopy = (event, item) => {
      emit("longCopy", event, item);
      event.stopPropagation();
    };
    const clickLongSet = (event, item) => {
      emit("longSet", event, item);
      event.stopPropagation();
    };
    const clickLongDel = (event, item) => {
      emit("longDel", event, item);
      event.stopPropagation();
    };
    const clickSwipeDel = (event, item) => {
      emit("swipeDel", event, item);
      event.stopPropagation();
    };
    const addAddress = (event) => {
      emit("add", event);
      event.stopPropagation();
    };
    onMounted(() => {
      trowelData();
    });
    return {
      clickDelIcon,
      clickEditIcon,
      clickContentItem,
      clickLongCopy,
      clickLongSet,
      clickLongDel,
      clickSwipeDel,
      addAddress,
      dataArray,
      translate
    };
  }
});
const _hoisted_1 = { class: "nut-address-list" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_general_shell = resolveComponent("general-shell");
  const _component_nut_button = resolveComponent("nut-button");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.dataArray, (item, index2) => {
      return openBlock(), createBlock(_component_general_shell, {
        key: index2,
        item,
        "long-press": _ctx.longPress,
        "swipe-edition": _ctx.swipeEdition,
        onDelIcon: _ctx.clickDelIcon,
        onEditIcon: _ctx.clickEditIcon,
        onClickItem: _ctx.clickContentItem,
        onSwipeDel: _ctx.clickSwipeDel,
        onLongCopy: _ctx.clickLongCopy,
        onLongSet: _ctx.clickLongSet,
        onLongDel: _ctx.clickLongDel
      }, createSlots({
        "content-info": withCtx(() => [
          renderSlot(_ctx.$slots, "item-infos", { item })
        ]),
        "content-icons": withCtx(() => [
          renderSlot(_ctx.$slots, "item-icon", { item })
        ]),
        "content-addrs": withCtx(() => [
          renderSlot(_ctx.$slots, "item-addr", { item })
        ]),
        _: 2
      }, [
        _ctx.longPress ? {
          name: "longpress-all",
          fn: withCtx(() => [
            renderSlot(_ctx.$slots, "longpress-btns", { item })
          ]),
          key: "0"
        } : void 0,
        _ctx.swipeEdition ? {
          name: "swipe-right-btn",
          fn: withCtx(() => [
            renderSlot(_ctx.$slots, "swipe-right", { item })
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["item", "long-press", "swipe-edition", "onDelIcon", "onEditIcon", "onClickItem", "onSwipeDel", "onLongCopy", "onLongSet", "onLongDel"]);
    }), 128)),
    _ctx.showBottomButton ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: "nut-address-list__bottom",
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.addAddress && _ctx.addAddress(...args))
    }, [
      createVNode(_component_nut_button, {
        block: "",
        type: "danger"
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.translate("addAddress")), 1)
        ]),
        _: 1
      })
    ])) : createCommentVNode("", true)
  ]);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index as default
};
