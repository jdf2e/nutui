var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { toRef, ref, watch, h, reactive, resolveComponent, openBlock, createElementBlock, renderSlot, createBlock, resolveDynamicComponent, createCommentVNode, Fragment, renderList, normalizeClass, createElementVNode, toDisplayString, createVNode, withModifiers } from "vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import { f as funInterceptor } from "../Interceptor-DlY2h6Y7.js";
import { Progress as _sfc_main$1 } from "../progress/Progress.js";
import { Photograph, Failure, Loading, Del, Link } from "@nutui/icons-vue";
import { u as useLocale } from "../index-CFigyH92.js";
import { u as useFormDisabled } from "../common-BH7uB7Cn.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
class UploadOptions {
  constructor() {
    __publicField(this, "url", "");
    __publicField(this, "name", "file");
    __publicField(this, "fileType", "image");
    __publicField(this, "formData");
    __publicField(this, "sourceFile");
    __publicField(this, "method", "post");
    __publicField(this, "xhrState", 200);
    __publicField(this, "timeout", 30 * 1e3);
    __publicField(this, "headers", {});
    __publicField(this, "withCredentials", false);
    __publicField(this, "onStart");
    __publicField(this, "taroFilePath");
    __publicField(this, "onProgress");
    __publicField(this, "onSuccess");
    __publicField(this, "onFailure");
    __publicField(this, "beforeXhrUpload");
  }
}
class Uploader {
  constructor(options) {
    __publicField(this, "options");
    this.options = options;
  }
  upload() {
    var _a;
    const options = this.options;
    const xhr = new XMLHttpRequest();
    xhr.timeout = options.timeout;
    if (xhr.upload) {
      xhr.upload.addEventListener(
        "progress",
        (e) => {
          var _a2;
          (_a2 = options.onProgress) == null ? void 0 : _a2.call(options, e, options);
        },
        false
      );
      xhr.onreadystatechange = () => {
        var _a2, _b;
        if (xhr.readyState === 4) {
          if (xhr.status == options.xhrState) {
            (_a2 = options.onSuccess) == null ? void 0 : _a2.call(options, xhr.responseText, options);
          } else {
            (_b = options.onFailure) == null ? void 0 : _b.call(options, xhr.responseText, options);
          }
        }
      };
      xhr.withCredentials = options.withCredentials;
      xhr.open(options.method, options.url, true);
      for (const [key, value] of Object.entries(options.headers)) {
        xhr.setRequestHeader(key, value);
      }
      (_a = options.onStart) == null ? void 0 : _a.call(options, options);
      if (options.beforeXhrUpload) {
        options.beforeXhrUpload(xhr, options);
      } else {
        xhr.send(options.formData);
      }
    } else {
      console.warn("浏览器不支持 XMLHttpRequest");
    }
  }
}
class FileItem {
  constructor() {
    __publicField(this, "status", "ready");
    __publicField(this, "message", "");
    __publicField(this, "uid", (/* @__PURE__ */ new Date()).getTime().toString());
    __publicField(this, "name");
    __publicField(this, "url");
    __publicField(this, "type");
    __publicField(this, "path");
    __publicField(this, "percentage", 0);
    __publicField(this, "formData", {});
  }
}
const { create } = createComponent("uploader");
const cN = "NutUploader";
const _sfc_main = create({
  components: {
    NutProgress: _sfc_main$1,
    Photograph,
    Failure,
    Loading,
    Del,
    Link
  },
  props: {
    name: { type: String, default: "file" },
    url: { type: String, default: "" },
    // defaultFileList: { type: Array, default: () => new Array<FileItem>() },
    timeout: { type: [Number, String], default: 1e3 * 30 },
    fileList: { type: Array, default: () => [] },
    isPreview: { type: Boolean, default: true },
    // picture、list
    listType: { type: String, default: "picture" },
    isDeletable: { type: Boolean, default: true },
    method: { type: String, default: "post" },
    capture: { type: Boolean, default: false },
    maximize: { type: [Number, String], default: Number.MAX_VALUE },
    maximum: { type: [Number, String], default: 1 },
    clearInput: { type: Boolean, default: true },
    accept: { type: String, default: "*" },
    headers: { type: Object, default: {} },
    data: { type: Object, default: {} },
    xhrState: { type: [Number, String], default: 200 },
    withCredentials: { type: Boolean, default: false },
    multiple: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    autoUpload: { type: Boolean, default: true },
    beforeUpload: {
      type: Function,
      default: null
    },
    beforeXhrUpload: {
      type: Function,
      default: null
    },
    beforeDelete: {
      type: Function,
      default: () => {
        return true;
      }
    },
    onChange: { type: Function }
  },
  emits: [
    "start",
    "progress",
    "oversize",
    "success",
    "failure",
    "change",
    "delete",
    "update:fileList",
    "fileItemClick"
  ],
  setup(props, { emit }) {
    const disabled = useFormDisabled(toRef(props, "disabled"));
    const translate = useLocale(cN);
    const fileList = ref(props.fileList);
    const uploadQueue = ref([]);
    watch(
      () => props.fileList,
      () => {
        fileList.value = props.fileList;
      }
    );
    const renderInput = () => {
      let params = {
        class: `nut-uploader__input`,
        type: "file",
        accept: props.accept,
        multiple: props.multiple,
        name: props.name,
        disabled: disabled.value
      };
      if (props.capture) {
        params.capture = "camera";
        if (!params.accept) {
          params.accept = "image/*";
        }
      }
      return h("input", params);
    };
    const clearInput = (el) => {
      el.value = "";
    };
    const fileItemClick = (fileItem) => {
      emit("fileItemClick", { fileItem });
    };
    const executeUpload = (fileItem, index2) => {
      const uploadOption = new UploadOptions();
      uploadOption.url = props.url;
      uploadOption.formData = fileItem.formData;
      uploadOption.timeout = props.timeout * 1;
      uploadOption.method = props.method;
      uploadOption.xhrState = props.xhrState;
      uploadOption.headers = props.headers;
      uploadOption.withCredentials = props.withCredentials;
      uploadOption.beforeXhrUpload = props.beforeXhrUpload;
      try {
        uploadOption.sourceFile = fileItem.formData.get(props.name);
      } catch (error) {
        console.warn("[NutUI] <Uploader> formData.get(name)", error);
      }
      uploadOption.onStart = (option) => {
        fileItem.status = "ready";
        fileItem.message = translate("readyUpload");
        clearUploadQueue(index2);
        emit("start", option);
      };
      uploadOption.onProgress = (event, option) => {
        fileItem.status = "uploading";
        fileItem.message = translate("uploading");
        fileItem.percentage = (event.loaded / event.total * 100).toFixed(0);
        emit("progress", { event, option, percentage: fileItem.percentage });
      };
      uploadOption.onSuccess = (responseText, option) => {
        fileItem.status = "success";
        fileItem.message = translate("success");
        emit("success", {
          responseText,
          option,
          fileItem
        });
        emit("update:fileList", fileList.value);
      };
      uploadOption.onFailure = (responseText, option) => {
        fileItem.status = "error";
        fileItem.message = translate("error");
        emit("failure", {
          responseText,
          option,
          fileItem
        });
      };
      let task = new Uploader(uploadOption);
      if (props.autoUpload) {
        task.upload();
      } else {
        uploadQueue.value.push(
          new Promise((resolve) => {
            resolve(task);
          })
        );
      }
    };
    const clearUploadQueue = (index2 = -1) => {
      if (index2 > -1) {
        uploadQueue.value.splice(index2, 1);
      } else {
        uploadQueue.value = [];
        fileList.value = [];
        emit("update:fileList", fileList.value);
      }
    };
    const submit = () => {
      Promise.all(uploadQueue.value).then((res) => {
        res.forEach((i) => i.upload());
      });
    };
    const readFile = (files) => {
      files.forEach((file, index2) => {
        const formData = new FormData();
        for (const [key, value] of Object.entries(props.data)) {
          formData.append(key, value);
        }
        formData.append(props.name, file);
        const fileItem = reactive(new FileItem());
        fileItem.name = file.name;
        fileItem.status = "ready";
        fileItem.type = file.type;
        fileItem.formData = formData;
        fileItem.message = translate("waitingUpload");
        executeUpload(fileItem, index2);
        if (props.isPreview && file.type.includes("image")) {
          const reader = new FileReader();
          reader.onload = (event) => {
            fileItem.url = event.target.result;
            fileList.value.push(fileItem);
          };
          reader.readAsDataURL(file);
        } else {
          fileList.value.push(fileItem);
        }
      });
    };
    const filterFiles = (files) => {
      const maximum = props.maximum * 1;
      const maximize = props.maximize * 1;
      const oversizes = new Array();
      files = files.filter((file) => {
        if (file.size > maximize) {
          oversizes.push(file);
          return false;
        } else {
          return true;
        }
      });
      if (oversizes.length) {
        emit("oversize", oversizes);
      }
      let currentFileLength = files.length + fileList.value.length;
      if (currentFileLength > maximum) {
        files.splice(files.length - (currentFileLength - maximum));
      }
      return files;
    };
    const deleted = (file, index2) => {
      fileList.value.splice(index2, 1);
      emit("delete", {
        file,
        fileList: fileList.value,
        index: index2
      });
    };
    const onDelete = (file, index2) => {
      if (disabled.value)
        return;
      clearUploadQueue(index2);
      funInterceptor(props.beforeDelete, {
        args: [file, fileList.value],
        done: () => deleted(file, index2)
      });
    };
    const onChange = (event) => {
      if (props.disabled || disabled.value) {
        return;
      }
      const $el = event.target;
      let { files } = $el;
      if (props.beforeUpload) {
        props.beforeUpload(files).then((f) => changeReadFile(f));
      } else {
        changeReadFile(files);
      }
      emit("change", {
        fileList: fileList.value,
        event
      });
      if (props.clearInput) {
        clearInput($el);
      }
    };
    const changeReadFile = (f) => {
      const _files = filterFiles(new Array().slice.call(f));
      readFile(_files);
    };
    return {
      onChange,
      onDelete,
      fileList,
      fileItemClick,
      clearUploadQueue,
      submit,
      renderInput
    };
  }
});
const _hoisted_1 = { class: "nut-uploader" };
const _hoisted_2 = {
  key: 0,
  class: "nut-uploader__slot"
};
const _hoisted_3 = {
  key: 0,
  class: "nut-uploader__preview-img"
};
const _hoisted_4 = {
  key: 0,
  class: "nut-uploader__preview__progress"
};
const _hoisted_5 = { class: "nut-uploader__preview__progress__msg" };
const _hoisted_6 = ["onClick"];
const _hoisted_7 = ["src", "onClick"];
const _hoisted_8 = {
  key: 3,
  class: "nut-uploader__preview-img__file"
};
const _hoisted_9 = ["onClick"];
const _hoisted_10 = { class: "file__name_tips" };
const _hoisted_11 = { class: "tips" };
const _hoisted_12 = {
  key: 1,
  class: "nut-uploader__preview-list"
};
const _hoisted_13 = ["onClick"];
const _hoisted_14 = { class: "file__name_tips" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Failure = resolveComponent("Failure");
  const _component_Loading = resolveComponent("Loading");
  const _component_Link = resolveComponent("Link");
  const _component_Del = resolveComponent("Del");
  const _component_nut_progress = resolveComponent("nut-progress");
  const _component_Photograph = resolveComponent("Photograph");
  return openBlock(), createElementBlock("view", _hoisted_1, [
    _ctx.$slots.default ? (openBlock(), createElementBlock("view", _hoisted_2, [
      renderSlot(_ctx.$slots, "default"),
      Number(_ctx.maximum) - _ctx.fileList.length ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.renderInput), {
        key: 0,
        onChange: _ctx.onChange
      }, null, 40, ["onChange"])) : createCommentVNode("", true)
    ])) : createCommentVNode("", true),
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.fileList, (item, index2) => {
      var _a;
      return openBlock(), createElementBlock("view", {
        key: item.uid,
        class: normalizeClass(["nut-uploader__preview", [_ctx.listType]])
      }, [
        _ctx.listType == "picture" && !_ctx.$slots.default ? (openBlock(), createElementBlock("view", _hoisted_3, [
          item.status != "success" ? (openBlock(), createElementBlock("view", _hoisted_4, [
            item.status != "ready" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              item.status == "error" ? (openBlock(), createBlock(_component_Failure, {
                key: 0,
                color: "#fff"
              })) : (openBlock(), createBlock(_component_Loading, {
                key: 1,
                name: "loading",
                color: "#fff"
              }))
            ], 64)) : createCommentVNode("", true),
            createElementVNode("view", _hoisted_5, toDisplayString(item.message), 1)
          ])) : createCommentVNode("", true),
          _ctx.isDeletable ? (openBlock(), createElementBlock("view", {
            key: 1,
            class: "close",
            onClick: ($event) => _ctx.onDelete(item, index2)
          }, [
            renderSlot(_ctx.$slots, "delete-icon", {}, () => [
              createVNode(_component_Failure)
            ])
          ], 8, _hoisted_6)) : createCommentVNode("", true),
          ((_a = item == null ? void 0 : item.type) == null ? void 0 : _a.includes("image")) && item.url ? (openBlock(), createElementBlock("img", {
            key: 2,
            class: "nut-uploader__preview-img__c",
            src: item.url,
            onClick: ($event) => _ctx.fileItemClick(item)
          }, null, 8, _hoisted_7)) : (openBlock(), createElementBlock("view", _hoisted_8, [
            createElementVNode("view", {
              class: "nut-uploader__preview-img__file__name",
              onClick: ($event) => _ctx.fileItemClick(item)
            }, [
              createElementVNode("view", _hoisted_10, toDisplayString(item.name), 1)
            ], 8, _hoisted_9)
          ])),
          createElementVNode("view", _hoisted_11, toDisplayString(item.name), 1)
        ])) : _ctx.listType == "list" ? (openBlock(), createElementBlock("view", _hoisted_12, [
          createElementVNode("view", {
            class: normalizeClass(["nut-uploader__preview-img__file__name", [item.status]]),
            onClick: ($event) => _ctx.fileItemClick(item)
          }, [
            createVNode(_component_Link, { class: "nut-uploader__preview-img__file__link" }),
            createElementVNode("view", _hoisted_14, toDisplayString(item.name), 1),
            _ctx.isDeletable ? (openBlock(), createBlock(_component_Del, {
              key: 0,
              color: "#808080",
              class: "nut-uploader__preview-img__file__del",
              onClick: withModifiers(($event) => _ctx.onDelete(item, index2), ["stop"])
            }, null, 8, ["onClick"])) : createCommentVNode("", true)
          ], 10, _hoisted_13),
          item.status == "uploading" ? (openBlock(), createBlock(_component_nut_progress, {
            key: 0,
            size: "small",
            percentage: item.percentage,
            "stroke-color": "linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)",
            "show-text": false
          }, null, 8, ["percentage"])) : createCommentVNode("", true)
        ])) : createCommentVNode("", true)
      ], 2);
    }), 128)),
    _ctx.listType == "picture" && !_ctx.$slots.default && Number(_ctx.maximum) - _ctx.fileList.length ? (openBlock(), createElementBlock("view", {
      key: 1,
      class: normalizeClass(["nut-uploader__upload", [_ctx.listType]])
    }, [
      renderSlot(_ctx.$slots, "upload-icon", {}, () => [
        createVNode(_component_Photograph, { color: "#808080" })
      ]),
      (openBlock(), createBlock(resolveDynamicComponent(_ctx.renderInput), { onChange: _ctx.onChange }, null, 40, ["onChange"]))
    ], 2)) : createCommentVNode("", true)
  ]);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index as default
};
