<template>
  <view :class="classes">
    <view class="nut-uploader__slot" v-if="$slots.default">
      <slot></slot>
      <template v-if="maximum - fileList.length">
        <nut-button class="nut-uploader__input" @click="chooseImage" />
      </template>
    </view>

    <template v-else>
      <view class="nut-uploader__preview" v-for="(item, index) in fileList" :key="item.uid">
        <view class="nut-uploader__preview-img">
          <nut-icon
            v-if="isDeletable"
            color="rgba(0,0,0,0.6)"
            @click="onDelete(item, index)"
            class="close"
            name="circle-close"
          ></nut-icon>
          <image class="nut-uploader__preview-img__c" v-if="item.url" :src="item.url" />
          <view class="tips" v-if="item.status != 'success'">{{ item.status }}</view>
        </view>
      </view>
      <view class="nut-uploader__upload" v-if="maximum - fileList.length">
        <nut-icon :size="uploadIconSize" color="#808080" :name="uploadIcon"></nut-icon>
        <nut-button class="nut-uploader__input" @click="chooseImage" />
      </view>
    </template>
  </view>
</template>

<script lang="ts">
import { computed, PropType, reactive } from 'vue';
import { createComponent } from '../../utils/create';
import { Uploader, UploadOptions } from './uploader';
const { componentName, create } = createComponent('uploader');
import Taro from '@tarojs/taro';
export type FileItemStatus = 'ready' | 'uploading' | 'success' | 'error' | 'removed';
export class FileItem {
  status: FileItemStatus = 'ready';
  uid: string = new Date().getTime().toString();
  url?: string;
  path?: string;
  type?: string;
  formData: any = {};
}
export type SizeType = 'original' | 'compressed';
export type SourceType = 'album' | 'camera' | 'user' | 'environment';
export default create({
  props: {
    name: { type: String, default: 'file' },
    url: { type: String, default: '' },
    sizeType: {
      type: Array as PropType<SizeType[]>,
      default: () => ['original', 'compressed']
    },
    sourceType: {
      type: Array as PropType<SourceType[]>,
      default: () => ['album', 'camera']
    },
    timeout: { type: [Number, String], default: 1000 * 30 },
    // defaultFileList: { type: Array, default: () => new Array<FileItem>() },
    fileList: { type: Array, default: () => [] },
    isPreview: { type: Boolean, default: true },
    isDeletable: { type: Boolean, default: true },
    method: { type: String, default: 'post' },
    capture: { type: Boolean, default: false },
    maximize: { type: [Number, String], default: Number.MAX_VALUE },
    maximum: { type: [Number, String], default: 9 },
    clearInput: { type: Boolean, default: false },
    accept: { type: String, default: '*' },
    headers: { type: Object, default: {} },
    data: { type: Object, default: {} },
    uploadIcon: { type: String, default: 'photograph' },
    uploadIconSize: { type: [String, Number], default: '' },
    xhrState: { type: [Number, String], default: 200 },
    disabled: { type: Boolean, default: false },
    autoUpload: { type: Boolean, default: true },
    beforeDelete: {
      type: Function,
      default: (file: FileItem, files: FileItem[]) => {
        return true;
      }
    },
    onChange: { type: Function }
  },
  emits: ['start', 'progress', 'oversize', 'success', 'failure', 'change', 'delete', 'update:fileList'],
  setup(props, { emit }) {
    const fileList = reactive(props.fileList) as Array<FileItem>;
    let uploadQueue: Promise<Uploader>[] = [];

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });

    const chooseImage = () => {
      if (props.disabled) {
        return;
      }
      Taro.chooseImage({
        // 选择数量
        count: (props.maximize as number) * 1 - props.fileList.length,
        // 可以指定是原图还是压缩图，默认二者都有
        sizeType: props.sizeType,
        sourceType: props.sourceType,
        success: onChange
      });
    };

    const executeUpload = (fileItem: FileItem, index: number) => {
      const uploadOption = new UploadOptions();
      uploadOption.name = props.name;
      uploadOption.url = props.url;
      for (const [key, value] of Object.entries(props.data)) {
        fileItem.formData[key] = value;
      }
      uploadOption.formData = fileItem.formData;
      uploadOption.method = props.method;
      uploadOption.headers = props.headers;
      uploadOption.taroFilePath = fileItem.path;
      uploadOption.onStart = (option: UploadOptions) => {
        clearUploadQueue(index);
        fileItem.status = 'ready';
        emit('start', option);
      };
      uploadOption.onProgress = (e: any, option: UploadOptions) => {
        fileItem.status = 'uploading';
        emit('progress', { e, option });
      };

      uploadOption.onSuccess = (data: Taro.uploadFile.SuccessCallbackResult, option: UploadOptions) => {
        fileItem.status = 'success';
        emit('success', {
          data,
          option
        });
        emit('update:fileList', fileList);
      };
      uploadOption.onFailure = (data: Taro.uploadFile.SuccessCallbackResult, option: UploadOptions) => {
        fileItem.status = 'error';
        emit('failure', {
          data,
          option
        });
      };
      let task = new Uploader(uploadOption);
      if (props.autoUpload) {
        task.uploadTaro(Taro.uploadFile);
      } else {
        uploadQueue.push(
          new Promise((resolve, reject) => {
            resolve(task);
          })
        );
      }
    };

    const clearUploadQueue = (index = -1) => {
      if (index > -1) {
        uploadQueue.splice(index, 1);
      } else {
        uploadQueue = [];
      }
    };
    const submit = () => {
      Promise.all(uploadQueue).then((res) => {
        res.forEach((i) => i.uploadTaro(Taro.uploadFile));
      });
    };

    const readFile = (files: Taro.chooseImage.ImageFile[]) => {
      files.forEach((file: Taro.chooseImage.ImageFile, index: number) => {
        const fileItem = reactive(new FileItem());
        fileItem.path = file.path;
        fileItem.status = 'ready';
        fileItem.type = file.type;
        if (props.isPreview) {
          fileItem.url = file.path;
        }
        fileList.push(fileItem);
        executeUpload(fileItem, index);
      });
    };

    const filterFiles = (files: Taro.chooseImage.ImageFile[]) => {
      const maximum = (props.maximum as number) * 1;
      const maximize = (props.maximize as number) * 1;
      const oversizes = new Array<Taro.chooseImage.ImageFile>();
      files = files.filter((file: Taro.chooseImage.ImageFile) => {
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
      clearUploadQueue(index);
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

    const onChange = (res: Taro.chooseImage.SuccessCallbackResult) => {
      // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
      const { tempFilePaths, tempFiles } = res;
      const _files: Taro.chooseImage.ImageFile[] = filterFiles(tempFiles);
      readFile(_files);

      emit('change', {
        fileList
      });
    };

    return {
      onDelete,
      fileList,
      classes,
      chooseImage,
      clearUploadQueue,
      submit
    };
  }
});
</script>
