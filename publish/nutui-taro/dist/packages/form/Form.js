import { c as createComponent } from "../component-TCzwHGVq.js";
import { resolveComponent, openBlock, createElementBlock, withModifiers, createVNode, withCtx, renderSlot } from "vue";
import { c as component } from "../common-a7MQyVOH.js";
import NutCellGroup from "../cellgroup/CellGroup.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-yVxbj29m.js";
import "../util-iEg-WSfL.js";
import "../useChildren-GU_NVfD8.js";
import "../useParent-KIxqkovs.js";
import "../types-Ynmct7na.js";
const { create } = createComponent("form");
const _sfc_main = create(
  component({
    NutCellGroup
  })
);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_nut_cell_group = resolveComponent("nut-cell-group");
  return openBlock(), createElementBlock("form", {
    class: "nut-form",
    action: "#",
    onSubmit: withModifiers(() => false, ["prevent"])
  }, [
    createVNode(_component_nut_cell_group, null, {
      default: withCtx(() => [
        renderSlot(_ctx.$slots, "default")
      ]),
      _: 3
    })
  ], 32);
}
const NutForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  NutForm as default
};
