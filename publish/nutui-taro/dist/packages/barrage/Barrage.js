import { useSlots, ref, computed, onMounted, watch, reactive, openBlock, createElementBlock, normalizeClass, createElementVNode, Fragment, renderList, normalizeStyle, toDisplayString } from "vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import Taro from "@tarojs/taro";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
const { componentName, create } = createComponent("barrage");
const _sfc_main = create({
  props: {
    danmu: {
      type: Array,
      default: () => []
    },
    frequency: {
      type: Number,
      default: 500
    },
    speeds: {
      type: Number,
      default: 5e3
    },
    rows: {
      type: Number,
      default: 3
    },
    top: {
      type: Number,
      default: 10
    },
    loop: {
      type: Boolean,
      default: true
    }
  },
  emits: ["click"],
  setup(props) {
    const classTime = (/* @__PURE__ */ new Date()).getTime();
    const slotDefault = !!useSlots().default;
    const timeId = ref((/* @__PURE__ */ new Date()).getTime());
    const danmuList = ref(props.danmu);
    const danmuListSlots = ref([]);
    const rows = ref(props.rows);
    const top = ref(props.top);
    const speeds = props.speeds;
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        ["nut-barrage--dmBody" + timeId.value]: true
      };
    });
    onMounted(() => {
      var _a;
      if (slotDefault) {
        const list = document.getElementsByClassName("nut-barrage__slotBody" + classTime)[0].getElementsByClassName("nut-barrage__item");
        let childrens = ((_a = list == null ? void 0 : list[0]) == null ? void 0 : _a.children) || [];
        danmuList.value = childrens;
      }
      runStep();
    });
    watch(
      () => props.danmu,
      (newValue) => {
        danmuList.value = [...newValue];
      }
    );
    const add = (word) => {
      danmuList.value = [...danmuList.value, word];
      runStep();
    };
    const getNode = (index) => {
      const query = Taro.createSelectorQuery();
      setTimeout(() => {
        let width = 100;
        query.select(".nut-barrage--dmBody" + timeId.value).boundingClientRect((rec) => {
          width = (rec == null ? void 0 : rec.width) || 300;
        });
        query.select(".nut-barrage__item" + index).boundingClientRect((recs) => {
          let height = recs == null ? void 0 : recs.height;
          let nodeTop = index % rows.value * (height + top.value) + 20 + "px";
          styleInfo(index, nodeTop, width);
        }).exec();
      }, 500);
    };
    const runStep = () => {
      danmuList.value.forEach((item, index) => {
        getNode(index);
      });
    };
    let styleList = reactive([]);
    const styleInfo = (index, nodeTop, width) => {
      var _a;
      let timeIndex = index - rows.value > 0 ? index - rows.value : 0;
      let list = styleList;
      let time = list[timeIndex] ? Number(list[timeIndex]["--time"]) : 0;
      let obj = {
        top: nodeTop,
        "--time": `${props.frequency * index + time}`,
        animationDuration: `${speeds}ms`,
        animationIterationCount: `${props.loop ? "infinite" : 1}`,
        animationDelay: `${props.frequency * index + time}ms`,
        "--move-distance": `-${width}px`
      };
      if (slotDefault && ((_a = danmuList.value[index]) == null ? void 0 : _a.el)) {
        let orginalSty = danmuList.value[index].el.style;
        danmuList.value[index].el.style = Object.assign(orginalSty, obj);
      } else {
        styleList.push(obj);
      }
    };
    return { classTime, classes, danmuList, add, styleList, danmuListSlots };
  }
});
const _hoisted_1 = { ref: "dmContainer" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: normalizeClass(_ctx.classes)
  }, [
    createElementVNode("div", _hoisted_1, [
      createElementVNode("div", {
        class: normalizeClass(["nut-barrage__slotBody" + _ctx.classTime])
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.danmuList, (item, index) => {
          return openBlock(), createElementBlock("view", {
            key: "danmu" + index,
            class: normalizeClass(["nut-barrage__item", "nut-barrage__item" + index, "move"]),
            style: normalizeStyle(_ctx.styleList[index])
          }, toDisplayString(item.length > 8 ? item.substr(0, 8) + "..." : item), 7);
        }), 128))
      ], 2)
    ], 512)
  ], 2);
}
const index_taro = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index_taro as default
};
