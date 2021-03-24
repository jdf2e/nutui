<template>
  <div class="nut-uploader">
    <slot></slot>
    <input
      v-if="multiple"
      type="file"
      :name="name"
      @click="preventMoreClick"
      @change="upload($event)"
      class="uploader"
      multiple
      :disabled="newdisabled"
      :accept="acceptType"
    />
    <input
      v-else
      type="file"
      :name="name"
      @click="preventMoreClick"
      @change="upload($event)"
      class="uploader"
      :disabled="newdisabled"
      :accept="acceptType"
    />
  </div>
</template>
<script>
import Uploader from '../../utils/uploader.js';
import locale from '../../mixins/locale';
export default {
  name: 'nut-uploader',
  mixins: [locale],
  props: {
    name: {
      type: String,
      default: 'file'
    },
    url: {
      type: String,
      default: ''
    },
    multiple: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    isPreview: {
      type: Boolean,
      default: false
    },
    maxSize: {
      type: Number,
      default: 5242880
    },
    acceptType: {
      type: Array,
      default() {
        return ['image/jpeg', 'image/png', 'image/gif', 'image/bmp'];
      }
    },
    selfData: {
      type: Object,
      default() {
        return {};
      }
    },
    attach: {
      type: Object,
      default() {
        return {};
      }
    },
    headers: {
      type: Object,
      default() {
        return {};
      }
    },
    beforeUpload: {
      type: Function
    },
    xhrState: {
      type: Number,
      default: 200
    },
    clearInput: {
      type: Boolean,
      default: true
    },
    xmlError: {
      type: String,
      default: ''
    },
    typeError: {
      type: String,
      default: '不支持上传该类型文件'
    },
    limitError: {
      type: String,
      default: '对不起，您的浏览器不支持本组件'
    },
    withCredentials: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      newdisabled: this.disabled
    };
  },
  methods: {
    createUploaderOpts() {
      const _this = this;
      return {
        $el: {},
        url: this.url, //图片上传地址
        formData: null,
        headers: {}, //自定义headers
        isPreview: this.isPreview, //是否开启本地预览
        previewData: null,
        maxSize: this.maxSize, //允许上传的文件最大字节
        acceptType: this.acceptType, //允许上传的文件类型
        xhrState: this.xhrState,
        clearInput: this.clearInput,
        withCredentials: this.withCredentials, //支持发送 cookie 凭证信息
        xmlError: this.xmlError || this.nutTranslate('lang.uploader.xmlError'),
        typeError: this.typeError || this.nutTranslate('lang.uploader.typeError'),
        limitError: this.limitError || this.nutTranslate('lang.uploader.limitError'),
        onStart() {
          _this.$emit('start');
        },
        onProgress(file, loaded, total) {
          _this.$emit('progress', file, loaded, total);
        },
        onPreview(previewFile) {
          _this.$emit('preview', previewFile);
        },
        onSuccess(file, responseTxt) {
          _this.$emit('success', file, responseTxt);
        },
        onFailure(file, responseTxt) {
          _this.$emit('failure', file, responseTxt);
        }
      };
    },
    preventMoreClick() {
      setTimeout(() => {
        this.newdisabled = true;
      }, 0);
      setTimeout(() => {
        this.newdisabled = false;
      }, 500);
    },
    uploadData($event, selfData = {}, fileBlob = undefined) {
      const tar = $event.target;
      if (!this.url) {
        this.$emit('showMsg', '请先配置上传url');
        this.$emit('afterChange', tar, $event);
        return;
      }
      const formData = new FormData();
      const opt = this.createUploaderOpts();
      opt.$el = tar;
      if (this.isPreview) {
        opt.previewData = tar.files;
      }
      let len = this.multiple ? tar.files.length : 1;
      if (fileBlob) {
        formData.append(tar.name, fileBlob);
      } else {
        formData.append(tar.name, tar.files[0]);
      }
      for (const key of Object.keys(this.attach)) {
        formData.append(key, this.attach[key]);
      }
      const finialyOutData = Object.assign(this.selfData, selfData);
      if (finialyOutData) {
        for (const key in finialyOutData) {
          formData.append(key, finialyOutData[key]);
        }
      }
      opt.formData = formData;
      opt.headers = this.headers || {};
      opt.showMsgFn = msg => {
        this.$emit('showMsg', msg);
      };
      new Uploader(opt);
      this.$emit('afterChange', tar, $event);
    },
    async upload($event) {
      console.log(2222);
      if (typeof this.beforeUpload === 'function') {
        const promise = new Promise((reslove, reject) => {
          reslove(this.beforeUpload($event));
        });
        const resData = await promise;
        if (typeof resData === 'object' && typeof resData.event === 'object') {
          this.uploadData(resData.event, resData.data, resData.fileBlob);
        } else {
          console.warn('resData： 必须包含 event字段且为input $event 的事件对象');
        }
      } else {
        this.uploadData($event);
      }
    }
  }
};
</script>
