<template>
  <view :class="classes">
    <view class="nut-uploader__slot" v-if="$slots.default">
      <slot></slot>
      <template v-if="maximum - fileList.length">
        <input
          class="nut-uploader__input"
          v-if="capture"
          type="file"
          capture="camera"
          :accept="accept"
          :multiple="multiple"
          :name="name"
          :disabled="disabled"
          @change="onChange"
        />
        <input
          class="nut-uploader__input"
          v-else
          type="file"
          :accept="accept"
          :multiple="multiple"
          :name="name"
          :disabled="disabled"
          @change="onChange"
        />
      </template>
    </view>

    <template v-else>
      <view
        class="nut-uploader__preview"
        v-for="item in fileList"
        :key="item.uid"
      >
        <view class="nut-uploader__preview-img">
          <nut-icon
            v-if="isDeletable"
            color="rgba(0,0,0,0.6)"
            @click="onDelete(item, index)"
            class="close"
            name="mask-close"
          ></nut-icon>
          <img v-if="item.type.includes('image') && item.url" :src="item.url" />
          <view class="tips" v-if="item.status != 'success'">{{
            item.status
          }}</view>
        </view>
      </view>
      <view class="nut-uploader__upload" v-if="maximum - fileList.length">
        <nut-icon color="#808080" :name="uploadIcon"></nut-icon>
        <input
          class="nut-uploader__input"
          v-if="capture"
          type="file"
          capture="camera"
          :accept="accept"
          :multiple="multiple"
          :name="name"
          :disabled="disabled"
          @change="onChange"
        />
        <input
          class="nut-uploader__input"
          v-else
          type="file"
          :accept="accept"
          :multiple="multiple"
          :name="name"
          :disabled="disabled"
          @change="onChange"
        />
      </view>
    </template>
  </view>
</template>

<script lang="ts">
import { computed, reactive } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { Uploader, UploadOptions } from './uploader';
const { componentName, create } = createComponent('uploader');
export type FileItemStatus =
  | 'ready'
  | 'uploading'
  | 'success'
  | 'error'
  | 'removed';
export class FileItem {
  status: FileItemStatus = 'ready';
  uid: string = new Date().getTime().toString();
  name?: string;
  url?: string;
  type?: string;
  formData: FormData = new FormData();
}
export default create({
  props: {
    name: { type: String, default: 'file' },
    url: { type: String, default: '' },
    // defaultFileList: { type: Array, default: () => new Array<FileItem>() },
    fileList: { type: Array, default: () => [] },
    isPreview: { type: Boolean, default: true },
    isDeletable: { type: Boolean, default: true },
    method: { type: String, default: 'post' },
    capture: { type: Boolean, default: false },
    maximize: { type: [Number, String], default: Number.MAX_VALUE },
    maximum: { type: [Number, String], default: 1 },
    clearInput: { type: Boolean, default: false },
    accept: { type: String, default: '*' },
    headers: { type: Object, default: {} },
    data: { type: Object, default: {} },
    uploadIcon: { type: String, default: 'photograph' },
    xhrState: { type: [Number, String], default: 200 },
    withCredentials: { type: Boolean, default: false },
    multiple: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    beforeUpload: {
      type: Function,
      default: null
    },
    beforeDelete: {
      type: Function,
      default: (file: FileItem, files: FileItem[]) => {
        return true;
      }
    },
    onChange: { type: Function }
    // customRequest: { type: Function }
  },
  emits: [
    'start',
    'progress',
    'oversize',
    'success',
    'failure',
    'change',
    'delete',
    'update:fileList'
  ],
  setup(props, { emit }) {
    const fileList = reactive(props.fileList) as Array<FileItem>;
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });

    const clearInput = (el: HTMLInputElement) => {
      el.value = '';
    };

    const executeUpload = (fileItem: FileItem) => {
      const uploadOption = new UploadOptions();
      uploadOption.url = props.url;
      for (const [key, value] of Object.entries(props.data)) {
        fileItem.formData.append(key, value);
      }
      uploadOption.formData = fileItem.formData;
      uploadOption.method = props.method;
      uploadOption.xhrState = props.xhrState as number;
      uploadOption.headers = props.headers;
      uploadOption.withCredentials = props.withCredentials;
      uploadOption.onStart = (option: UploadOptions) => {
        fileItem.status = 'ready';
        emit('start', option);
      };
      uploadOption.onProgress = (
        e: ProgressEvent<XMLHttpRequestEventTarget>,
        option: UploadOptions
      ) => {
        fileItem.status = 'uploading';
        emit('progress', { e, option });
      };

      uploadOption.onSuccess = (
        responseText: XMLHttpRequest['responseText'],
        option: UploadOptions
      ) => {
        fileItem.status = 'success';
        emit('success', {
          responseText,
          option
        });
        emit('update:fileList', props.fileList);
      };
      uploadOption.onFailure = (
        responseText: XMLHttpRequest['responseText'],
        option: UploadOptions
      ) => {
        fileItem.status = 'error';
        emit('failure', {
          responseText,
          option
        });
      };
      new Uploader(uploadOption).upload();
    };

    const readFile = (files: File[]) => {
      files.forEach((file: File) => {
        const formData = new FormData();
        formData.append(props.name, file);

        const fileItem = new FileItem();
        fileItem.name = file.name;
        fileItem.status = 'uploading';
        fileItem.type = file.type;
        fileItem.formData = formData;
        executeUpload(fileItem);

        if (props.isPreview && file.type.includes('image')) {
          const reader = new FileReader();
          reader.onload = (event: ProgressEvent<FileReader>) => {
            fileItem.url = (event.target as FileReader).result as string;
            fileList.push(fileItem);
          };
          reader.readAsDataURL(file);
        } else {
          fileList.push(fileItem);
        }
      });
    };

    const filterFiles = (files: File[]) => {
      const maximum = (props.maximum as number) * 1;
      const maximize = (props.maximize as number) * 1;
      const oversizes = new Array<File>();
      files = files.filter((file: File) => {
        if (file.size > maximize) {
          oversizes.push(file);
          return false;
        } else {
          return true;
        }
      });
      if (oversizes.length) {
        emit('oversize', oversizes);
      }
      if (files.length > maximum) {
        files.splice(maximum - 1, files.length - maximum);
      }
      return files;
    };
    const onDelete = (file: FileItem, index: number) => {
      if (props.beforeDelete(file, fileList)) {
        fileList.splice(index, 1);
        emit('delete', {
          file,
          fileList
        });
      } else {
        console.log('用户阻止了删除！');
      }
    };

    const onChange = (event: InputEvent) => {
      if (props.disabled) {
        return;
      }
      const $el = event.target as HTMLInputElement;
      let { files } = $el;

      if (props.beforeUpload) {
        props.beforeUpload(files).then((f: Array<File>) => {
          const _files: File[] = filterFiles(new Array<File>().slice.call(f));
          readFile(_files);
        });
      } else {
        const _files: File[] = filterFiles(new Array<File>().slice.call(files));
        readFile(_files);
      }

      emit('change', {
        fileList,
        event
      });

      if (props.clearInput) {
        clearInput($el);
      }
    };

    return {
      onChange,
      onDelete,
      fileList,
      classes
    };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
