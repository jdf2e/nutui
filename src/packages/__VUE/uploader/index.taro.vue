<template>
  <view :class="classes">
    <view class="nut-uploader__slot" v-if="$slots.default">
      <slot></slot>
      <template v-if="maximum - fileList.length">
        <nut-button class="nut-uploader__input" @click="chooseImage" />
      </template>
    </view>

    <view class="nut-uploader__preview" :class="[listType]" v-for="(item, index) in fileList" :key="item.uid">
      <view class="nut-uploader__preview-img" v-if="listType == 'picture' && !$slots.default">
        <view class="nut-uploader__preview__progress" v-if="item.status == 'ready'">
          <view class="nut-uploader__preview__progress__msg">{{ item.message }}</view>
        </view>
        <view class="nut-uploader__preview__progress" v-else-if="item.status != 'success'">
          <nut-icon color="#fff" :name="item.status == 'error' ? 'failure' : 'loading'"></nut-icon>
          <view class="nut-uploader__preview__progress__msg">{{ item.message }}</view>
        </view>
        <nut-icon
          v-if="isDeletable"
          color="rgba(0,0,0,0.6)"
          @click="onDelete(item, index)"
          class="close"
          name="failure"
        ></nut-icon>
        <img
          class="nut-uploader__preview-img__c"
          @click="fileItemClick(item)"
          v-if="item.type?.includes('image') && item.url"
          :src="item.url"
        />
        <view v-else class="nut-uploader__preview-img__file">
          <view class="nut-uploader__preview-img__file__name" @click="fileItemClick(item)">
            <nut-icon color="#808080" name="link"></nut-icon>&nbsp;{{ item.name }}
          </view>
        </view>
        <view class="tips">{{ item.name }}</view>
      </view>
      <view class="nut-uploader__preview-list" v-else-if="listType == 'list'">
        <view class="nut-uploader__preview-img__file__name" @click="fileItemClick(item)" :class="[item.status]">
          <nut-icon name="link" />&nbsp;{{ item.name }}
        </view>
        <nut-icon
          class="nut-uploader__preview-img__file__del"
          @click="onDelete(item, index)"
          color="#808080"
          name="del"
        />
        <nut-progress
          size="small"
          :percentage="item.percentage"
          v-if="item.status == 'uploading'"
          stroke-color="linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)"
          :show-text="false"
        >
        </nut-progress>
      </view>
    </view>
    <view
      class="nut-uploader__upload"
      :class="[listType]"
      v-if="listType == 'picture' && !$slots.default && maximum - fileList.length"
    >
      <nut-icon :size="uploadIconSize" color="#808080" :name="uploadIcon"></nut-icon>
      <nut-button class="nut-uploader__input" @click="chooseImage" />
    </view>
  </view>
</template>

<script lang="ts">
import { computed, PropType, reactive } from 'vue';
import { createComponent } from '../../utils/create';
import { Uploader, UploadOptions } from './uploader';
const { componentName, create } = createComponent('uploader');
import Taro from '@tarojs/taro';
export type FileItemStatus = 'ready' | 'uploading' | 'success' | 'error';
export class FileItem {
  status: FileItemStatus = 'ready';
  message: string = '准备完成';
  uid: string = new Date().getTime().toString();
  url?: string;
  path?: string;
  name?: string;
  type?: string;
  percentage: string | number = 0;
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
    // picture、list
    listType: { type: String, default: 'picture' },
    isDeletable: { type: Boolean, default: true },
    method: { type: String, default: 'post' },
    capture: { type: Boolean, default: false },
    maximize: { type: [Number, String], default: Number.MAX_VALUE },
    maximum: { type: [Number, String], default: 9 },
    clearInput: { type: Boolean, default: true },
    accept: { type: String, default: '*' },
    headers: { type: Object, default: {} },
    data: { type: Object, default: {} },
    uploadIcon: { type: String, default: 'photograph' },
    uploadIconSize: { type: [String, Number], default: '' },
    xhrState: { type: [Number, String], default: 200 },
    disabled: { type: Boolean, default: false },
    autoUpload: { type: Boolean, default: true },
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
  },
  emits: [
    'start',
    'progress',
    'oversize',
    'success',
    'failure',
    'change',
    'delete',
    'update:fileList',
    'file-item-click'
  ],
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
        count: (props.maximum as number) * 1 - props.fileList.length,
        // 可以指定是原图还是压缩图，默认二者都有
        sizeType: props.sizeType,
        sourceType: props.sourceType,
        success: onChange
      });
    };

    const fileItemClick = (fileItem: FileItem) => {
      emit('file-item-click', { fileItem });
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
        fileItem.status = 'ready';
        fileItem.message = '准备上传';
        clearUploadQueue(index);
        emit('start', option);
      };
      uploadOption.onProgress = (event: any, option: UploadOptions) => {
        fileItem.status = 'uploading';
        fileItem.message = '上传中';
        fileItem.percentage = event.progress;
        emit('progress', { event, option, percentage: fileItem.percentage });
      };

      uploadOption.onSuccess = (data: Taro.uploadFile.SuccessCallbackResult, option: UploadOptions) => {
        fileItem.status = 'success';
        fileItem.message = '上传成功';
        emit('success', {
          data,
          option,
          fileItem
        });
        emit('update:fileList', fileList);
      };
      uploadOption.onFailure = (data: Taro.uploadFile.SuccessCallbackResult, option: UploadOptions) => {
        fileItem.status = 'error';
        fileItem.message = '上传失败';
        emit('failure', {
          data,
          option,
          fileItem
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
      const imgReg = /\.(png|jpeg|jpg|webp|gif)$/i;
      files.forEach((file: Taro.chooseImage.ImageFile, index: number) => {
        let fileType = file.type;
        const fileItem = reactive(new FileItem());
        if (!fileType && imgReg.test(file.path)) {
          fileType = 'image';
        }
        fileItem.path = file.path;
        fileItem.name = file.path;
        fileItem.status = 'ready';
        fileItem.message = '等待上传';
        fileItem.type = fileType;
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
      let currentFileLength = files.length + fileList.length;
      if (currentFileLength > maximum) {
        files.splice(files.length - (currentFileLength - maximum));
      }
      return files;
    };
    const onDelete = (file: FileItem, index: number) => {
      clearUploadQueue(index);
      if (props.beforeDelete(file, fileList)) {
        fileList.splice(index, 1);
        emit('delete', {
          file,
          fileList,
          index
        });
      } else {
        console.log('用户阻止了删除！');
      }
    };

    const onChange = (res: Taro.chooseImage.SuccessCallbackResult) => {
      // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
      const { tempFilePaths, tempFiles } = res;

      if (props.beforeUpload) {
        props.beforeUpload(tempFiles).then((f: Array<Taro.chooseImage.ImageFile>) => {
          const _files: Taro.chooseImage.ImageFile[] = filterFiles(f);
          readFile(_files);
        });
      } else {
        const _files: Taro.chooseImage.ImageFile[] = filterFiles(tempFiles);
        readFile(_files);
      }

      emit('change', {
        fileList
      });
    };

    return {
      onDelete,
      fileList,
      classes,
      chooseImage,
      fileItemClick,
      clearUploadQueue,
      submit
    };
  }
});
</script>
