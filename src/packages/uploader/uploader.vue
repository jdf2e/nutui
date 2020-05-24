<template>
  <div class="nut-uploader">
    <slot></slot>
    <input type="file" :name="name" @change="upload($event)" class="uploader" :multiple="multiple" />
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
      default: ''
    },
    url: {
      type: String,
      default: ''
    },
    multiple: {
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
    changeEvtCallback: {
      type: Function
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
      default: false
    },
    xmlError: {
      type: String,
      default: ''
    },
    typeError: {
      type: String,
      default: ''
    },
    limitError: {
      type: String,
      default: ''
    },
    withCredentials: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
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
    uploadData($event, selfData = {}) {
      const tar = $event.target;
      if (!this.url) {
        this.$emit('showMsg', '请先配置上传url');
        this.$emit('afterChange', tar, $event);
        return;
      }
      const formData = new FormData();
      for (let key of Object.keys(this.attach)) {
        formData.append(key, this.attach[key]);
      }
      let finialyOutData = Object.assign(this.selfData, selfData);
      if (finialyOutData) {
        for (let key in finialyOutData) {
          formData.append(key, finialyOutData[key]);
        }
      }
      const opt = this.createUploaderOpts();
      opt.$el = tar;
      if (this.isPreview) {
        opt.previewData = tar.files[0];
      }
      if (this.multiple) {
        for (let i = 0; i < tar.files.length; i++) {
          if (tar.files[i]) {
            if (this.acceptType.indexOf(tar.files[i].type) == -1) {
              this.$emit('showMsg', opt.typeError);
              return;
            }
          }
        }
      } else {
        if (tar.files[0]) {
          if (this.acceptType.indexOf(tar.files[0].type) == -1) {
            this.$emit('showMsg', opt.typeError);
            return;
          }
        }
      }
      formData.append(tar.name, tar.files[0]);
      opt.formData = formData;
      opt.headers = this.headers || {};
      opt.showMsgFn = msg => {
        this.$emit('showMsg', msg);
      };
      new Uploader(opt);
      this.$emit('afterChange', tar, $event);
    },
    async upload($event) {
      if (typeof this.beforeUpload === 'function') {
        let promise = new Promise((reslove, reject) => {
          reslove(this.beforeUpload($event));
        });
        let resData = await promise;
        if (typeof resData === 'object' && typeof resData.event === 'object') {
          this.uploadData(resData.event, resData.data);
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
