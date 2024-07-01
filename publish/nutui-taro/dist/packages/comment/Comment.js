import { resolveComponent, openBlock, createElementBlock, createElementVNode, createCommentVNode, createTextVNode, normalizeClass, toDisplayString, renderSlot, createVNode, ref, watch, onMounted, Fragment, renderList, createBlock, computed, withCtx, normalizeStyle } from "vue";
import { Right, Fabulous, Comment, MoreX } from "@nutui/icons-vue-taro";
import { c as createComponent } from "../component-DQf3CENX.js";
import { Rate as _sfc_main$4 } from "../rate/Rate.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
import { u as useLocale } from "../index-IxPZmHlb.js";
const { create: create$3 } = createComponent("comment-header");
const _sfc_main$3 = create$3({
  components: {
    NutRate: _sfc_main$4
  },
  props: {
    type: {
      type: String,
      default: "default"
      // default，complex
    },
    info: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["handleClick"],
  setup(props, { emit }) {
    const handleClick = () => {
      emit("handleClick");
    };
    return { handleClick };
  }
});
const _hoisted_1$3 = { class: "nut-comment-header__user" };
const _hoisted_2$3 = { class: "nut-comment-header__user-avter" };
const _hoisted_3$3 = ["src"];
const _hoisted_4$3 = { class: "nut-comment-header__user-score" };
const _hoisted_5$1 = {
  key: 0,
  class: "nut-comment-header__time"
};
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_nut_rate = resolveComponent("nut-rate");
  return openBlock(), createElementBlock("view", null, [
    _ctx.info ? (openBlock(), createElementBlock("view", {
      key: 0,
      class: "nut-comment-header",
      onClick: _cache[1] || (_cache[1] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
    }, [
      createElementVNode("view", _hoisted_1$3, [
        createElementVNode("view", _hoisted_2$3, [
          _ctx.info.avatar ? (openBlock(), createElementBlock("img", {
            key: 0,
            src: _ctx.info.avatar
          }, null, 8, _hoisted_3$3)) : createCommentVNode("", true)
        ]),
        createTextVNode(),
        _ctx.type == "default" ? (openBlock(), createElementBlock("view", {
          key: 0,
          class: normalizeClass([`nut-comment-header__user-${_ctx.type}`])
        }, [
          createElementVNode("view", {
            class: normalizeClass([`nut-comment-header__user-${_ctx.type}-name`])
          }, [
            createElementVNode("span", null, toDisplayString(_ctx.info.nickName), 1),
            createTextVNode(),
            renderSlot(_ctx.$slots, "labels")
          ], 2),
          createTextVNode(),
          createElementVNode("view", _hoisted_4$3, [
            createVNode(_component_nut_rate, {
              modelValue: _ctx.info.score,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.info.score = $event),
              size: "12",
              spacing: "5",
              readonly: "",
              onChange: _ctx.handleClick
            }, null, 8, ["modelValue", "onChange"])
          ])
        ], 2)) : (openBlock(), createElementBlock("view", {
          key: 1,
          class: normalizeClass([`nut-comment-header__user-${_ctx.type}`])
        }, [
          createElementVNode("span", {
            class: normalizeClass([`nut-comment-header__user-${_ctx.type}-name`])
          }, toDisplayString(_ctx.info.nickName), 3),
          createTextVNode(),
          renderSlot(_ctx.$slots, "labels")
        ], 2))
      ]),
      createTextVNode(),
      _ctx.info.time ? (openBlock(), createElementBlock("view", _hoisted_5$1, toDisplayString(_ctx.info.time), 1)) : createCommentVNode("", true)
    ])) : createCommentVNode("", true),
    createTextVNode(),
    _ctx.type == "complex" ? (openBlock(), createElementBlock("view", {
      key: 1,
      class: normalizeClass([`nut-comment-header__${_ctx.type}-score`])
    }, [
      createVNode(_component_nut_rate, {
        modelValue: _ctx.info.score,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.info.score = $event),
        size: "12",
        spacing: "3",
        readonly: ""
      }, null, 8, ["modelValue"]),
      createTextVNode(),
      createElementVNode("i", {
        class: normalizeClass([`nut-comment-header__${_ctx.type}-score-i`])
      }, null, 2),
      createTextVNode(),
      createElementVNode("view", {
        class: normalizeClass([`nut-comment-header__${_ctx.type}-score-size`])
      }, toDisplayString(_ctx.info.size), 3)
    ], 2)) : createCommentVNode("", true)
  ]);
}
const CommentHeader = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
const { create: create$2 } = createComponent("comment-images");
const _sfc_main$2 = create$2({
  props: {
    type: {
      type: String,
      default: "one"
      // one multi
    },
    videos: {
      type: Array,
      default: () => []
    },
    images: {
      type: Array,
      default: () => []
    }
  },
  components: { Right },
  emits: ["click", "clickImages"],
  setup(props, { emit }) {
    const isShowImage = ref(false);
    const initIndex = ref(1);
    const totalImages = ref([]);
    watch(
      () => [props.videos, props.images],
      (value) => {
        if (value[0].length > 0) {
          value[0].forEach((el) => {
            el.type = "video";
          });
        }
        totalImages.value = value[0].concat(value[1]);
      },
      { deep: true }
    );
    onMounted(() => {
      if (props.videos.length > 0) {
        props.videos.forEach((el) => {
          el.type = "video";
        });
      }
      totalImages.value = props.videos.concat(props.images);
    });
    const showImages = (type, index) => {
      const { videos, images } = props;
      const i = type == "img" ? index - videos.length : index;
      emit("clickImages", {
        type,
        index: i,
        value: type == "img" ? images[i] : videos[i]
      });
    };
    return { isShowImage, initIndex, showImages, totalImages };
  }
});
const _hoisted_1$2 = ["onClick"];
const _hoisted_2$2 = ["src"];
const _hoisted_3$2 = /* @__PURE__ */ createElementVNode("view", { class: "nut-comment-images__play" }, null, -1);
const _hoisted_4$2 = ["onClick"];
const _hoisted_5 = ["src"];
const _hoisted_6 = {
  key: 0,
  class: "nut-comment-images__mask"
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Right = resolveComponent("Right");
  return openBlock(), createElementBlock("view", {
    class: normalizeClass(`nut-comment-images nut-comment-images--${_ctx.type}`)
  }, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.videos, (itV, index) => {
      return openBlock(), createElementBlock("view", {
        key: itV.id,
        class: "nut-comment-images__item nut-comment-images__item--video",
        onClick: ($event) => _ctx.showImages("video", index)
      }, [
        createElementVNode("img", {
          src: itV.mainUrl
        }, null, 8, _hoisted_2$2),
        createTextVNode(),
        _hoisted_3$2
      ], 8, _hoisted_1$2);
    }), 128)),
    createTextVNode(),
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.images, (itI, index) => {
      return openBlock(), createElementBlock(Fragment, {
        key: itI.id
      }, [
        _ctx.type == "multi" && _ctx.videos.length + index < 9 || _ctx.type != "multi" ? (openBlock(), createElementBlock("view", {
          key: 0,
          class: "nut-comment-images__item nut-comment-images__item--imgbox",
          onClick: ($event) => _ctx.showImages("img", index + _ctx.videos.length)
        }, [
          createElementVNode("img", {
            src: itI.smallImgUrl ? itI.smallImgUrl : itI.imgUrl
          }, null, 8, _hoisted_5),
          createTextVNode(),
          _ctx.type == "multi" && _ctx.totalImages.length > 9 && _ctx.videos.length + index > 7 ? (openBlock(), createElementBlock("view", _hoisted_6, [
            createElementVNode("span", null, "共 " + toDisplayString(_ctx.totalImages.length) + " 张", 1),
            createTextVNode(),
            createVNode(_component_Right, { size: "12px" })
          ])) : createCommentVNode("", true)
        ], 8, _hoisted_4$2)) : createCommentVNode("", true)
      ], 64);
    }), 128))
  ], 2);
}
const CommentImages = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const { create: create$1 } = createComponent("comment-bottom");
const cN$1 = "NutComment";
const _sfc_main$1 = create$1({
  props: {
    type: {
      type: String,
      default: "base"
      // simple，base，complex
    },
    info: {
      type: Object,
      default: () => ({})
    },
    operation: {
      type: Array,
      default: ["replay", "like", "more"]
    }
  },
  components: { Fabulous, Comment, MoreX },
  emits: ["clickOperate", "handleClick"],
  setup(props, { emit }) {
    const translate = useLocale(cN$1);
    const showPopver = ref(false);
    const mergeOp = ref([]);
    onMounted(() => {
      const deOp = ["replay", "like", "more"];
      if (props.operation) {
        props.operation.forEach((name) => {
          if (deOp.includes(name)) {
            mergeOp.value.push(name);
          }
        });
      }
    });
    const operate = (type) => {
      if (type == "more") {
        showPopver.value = !showPopver.value;
      }
      emit("clickOperate", type);
    };
    const handleClick = () => {
      emit("handleClick");
    };
    return { showPopver, operate, mergeOp, handleClick, translate };
  }
});
const _hoisted_1$1 = { class: "nut-comment-bottom" };
const _hoisted_2$1 = {
  key: 0,
  style: { "display": "inline" }
};
const _hoisted_3$1 = { class: "nut-comment-bottom__cpx" };
const _hoisted_4$1 = ["onClick"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Fabulous = resolveComponent("Fabulous");
  const _component_Comment = resolveComponent("Comment");
  const _component_MoreX = resolveComponent("MoreX");
  return openBlock(), createElementBlock("view", _hoisted_1$1, [
    createElementVNode("view", {
      class: "nut-comment-bottom__lable",
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
    }, [
      _ctx.type != "complex" ? (openBlock(), createElementBlock("span", _hoisted_2$1, toDisplayString(_ctx.info.size), 1)) : createCommentVNode("", true)
    ]),
    createTextVNode(),
    createElementVNode("view", _hoisted_3$1, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.mergeOp, (name, i) => {
        return openBlock(), createElementBlock("view", {
          key: i,
          class: normalizeClass(["nut-comment-bottom__cpx-item", `nut-comment-bottom__cpx-item--${name}`]),
          onClick: ($event) => _ctx.operate(name)
        }, [
          name != "more" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createElementVNode("span", null, toDisplayString(_ctx.info[name]), 1),
            createTextVNode(),
            name == "like" ? (openBlock(), createBlock(_component_Fabulous, { key: 0 })) : (openBlock(), createBlock(_component_Comment, { key: 1 }))
          ], 64)) : createCommentVNode("", true),
          createTextVNode(),
          name == "more" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createVNode(_component_MoreX),
            createTextVNode(),
            _ctx.showPopver ? (openBlock(), createElementBlock("view", {
              key: 0,
              class: "nut-comment-bottom__cpx-item-popover",
              onClick: _cache[1] || (_cache[1] = ($event) => _ctx.operate("popover"))
            }, toDisplayString(_ctx.translate("complaintsText")), 1)) : createCommentVNode("", true)
          ], 64)) : createCommentVNode("", true)
        ], 10, _hoisted_4$1);
      }), 128))
    ])
  ]);
}
const CommentBottom = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const { create } = createComponent("comment");
const cN = "NutComment";
const _sfc_main = create({
  props: {
    headerType: {
      type: String,
      default: "default"
      // 头部展示风格 default，complex
    },
    imagesRows: {
      type: String,
      default: "one"
      // 'one'  'multi'
    },
    ellipsis: {
      type: [String, Number, Boolean],
      default: false
    },
    videos: {
      type: Array,
      default: () => []
    },
    images: {
      type: Array,
      default: () => []
    },
    info: {
      type: Object,
      default: () => ({})
    },
    follow: {
      type: Object,
      default: () => ({})
    },
    labels: {
      type: Function,
      default: () => ""
    },
    operation: {
      type: Array,
      default: ["replay", "like", "more"]
    }
  },
  components: {
    CommentHeader,
    CommentImages,
    CommentBottom,
    Right
  },
  emits: ["click", "clickImages", "clickOperate"],
  setup(props, { emit }) {
    const translate = useLocale(cN);
    const conEllipsis = computed(() => {
      if (props.ellipsis) return props.ellipsis;
      return props.headerType == "complex" ? 6 : 2;
    });
    const clickOperate = (t) => {
      emit("clickOperate", t);
    };
    const handleClick = () => {
      emit("click", props.info);
    };
    const clickImages = (value) => {
      emit("clickImages", value);
    };
    return { conEllipsis, clickOperate, handleClick, clickImages, translate };
  }
});
const _hoisted_1 = {
  key: 0,
  class: "nut-comment"
};
const _hoisted_2 = ["innerHTML"];
const _hoisted_3 = { class: "nut-comment__follow-title" };
const _hoisted_4 = { class: "nut-comment__follow-com" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_comment_header = resolveComponent("comment-header");
  const _component_comment_images = resolveComponent("comment-images");
  const _component_Right = resolveComponent("Right");
  const _component_comment_bottom = resolveComponent("comment-bottom");
  return _ctx.info && Object.keys(_ctx.info) ? (openBlock(), createElementBlock("view", _hoisted_1, [
    createVNode(_component_comment_header, {
      type: _ctx.headerType,
      info: _ctx.info,
      labels: _ctx.labels,
      onHandleClick: _ctx.handleClick
    }, {
      labels: withCtx(() => [
        renderSlot(_ctx.$slots, "comment-labels")
      ]),
      _: 3
    }, 8, ["type", "info", "labels", "onHandleClick"]),
    createTextVNode(),
    renderSlot(_ctx.$slots, "feature"),
    createTextVNode(),
    createElementVNode("view", {
      class: "nut-comment__main",
      style: normalizeStyle(`-webkit-line-clamp:${_ctx.conEllipsis}`),
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args)),
      innerHTML: _ctx.info.content
    }, null, 12, _hoisted_2),
    createTextVNode(),
    createVNode(_component_comment_images, {
      images: _ctx.images,
      videos: _ctx.videos,
      type: _ctx.imagesRows,
      onClickImages: _ctx.clickImages
    }, null, 8, ["images", "videos", "type", "onClickImages"]),
    createTextVNode(),
    _ctx.follow && _ctx.follow.days > 0 ? (openBlock(), createElementBlock("view", {
      key: 0,
      class: "nut-comment__follow",
      onClick: _cache[2] || (_cache[2] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
    }, [
      createElementVNode("view", _hoisted_3, toDisplayString(_ctx.translate("additionalReview", _ctx.follow.days)), 1),
      createTextVNode(),
      createElementVNode("view", _hoisted_4, toDisplayString(_ctx.follow.content), 1),
      createTextVNode(),
      _ctx.follow.images && _ctx.follow.images.length > 0 ? (openBlock(), createElementBlock("view", {
        key: 0,
        class: "nut-comment__follow-img",
        onClick: _cache[1] || (_cache[1] = ($event) => _ctx.clickImages(_ctx.follow.images))
      }, [
        createTextVNode(toDisplayString(_ctx.translate("additionalImages", _ctx.follow.images.length)) + " ", 1),
        createVNode(_component_Right, { size: "12px" })
      ])) : createCommentVNode("", true)
    ])) : createCommentVNode("", true),
    createTextVNode(),
    createVNode(_component_comment_bottom, {
      type: _ctx.headerType,
      info: _ctx.info,
      operation: _ctx.operation,
      onClickOperate: _ctx.clickOperate,
      onHandleClick: _ctx.handleClick
    }, null, 8, ["type", "info", "operation", "onClickOperate", "onHandleClick"]),
    createTextVNode(),
    renderSlot(_ctx.$slots, "comment-shop-reply")
  ])) : createCommentVNode("", true);
}
const index_taro = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index_taro as default
};
