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
        <view class="nut-uploader__preview__progress" v-if="item.status != 'success'">
          <nut-icon
            color="#fff"
            :name="item.status == 'error' ? 'failure' : 'loading'"
            v-if="item.status != 'ready'"
          ></nut-icon>
          <view class="nut-uploader__preview__progress__msg">{{ item.message }}</view>
        </view>

        <nut-icon
          v-if="isDeletable"
          v-bind="$attrs"
          @click="onDelete(item, index)"
          class="close"
          :name="deleteIcon"
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
      <nut-icon v-bind="$attrs" :size="uploadIconSize" color="#808080" :name="uploadIcon"></nut-icon>
      <nut-button class="nut-uploader__input" @click="chooseImage" />
    </view>
  </view>
</template>

<script lang="ts">
import { computed, onMounted, PropType, reactive } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { UploaderTaro, UploadOptions } from './uploader';
import { FileItem } from './type';
import { funInterceptor, Interceptor } from '@/packages/utils/util';
const { componentName, create, translate } = createComponent('uploader');
import Taro from '@tarojs/taro';
import { isPromise } from '@/packages/utils/util';
export default create({
  props: {
    name: { type: String, default: 'file' },
    url: { type: String, default: '' },
    sizeType: {
      type: Array as PropType<import('./type').SizeType[]>,
      default: () => ['original', 'compressed']
    },
    sourceType: {
      type: Array as PropType<import('./type').SourceType[]>,
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
    multiple: { type: Boolean, default: true },
    disabled: { type: Boolean, default: false },
    autoUpload: { type: Boolean, default: true },
    deleteIcon: { type: String, default: 'failure' },
    beforeUpload: {
      type: Function,
      default: null
    },
    beforeXhrUpload: {
      type: Function,
      default: null
    },
    beforeDelete: {
      type: Function as PropType<Interceptor>,
      default: (file: import('./type').FileItem, files: import('./type').FileItem[]) => {
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
    const fileList = reactive(props.fileList) as Array<import('./type').FileItem>;
    let uploadQueue: Promise<UploaderTaro>[] = [];

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

      if (Taro.getEnv() == 'WEB') {
        let el = document.getElementById('taroChooseImage');
        if (el) {
          el?.setAttribute('accept', props.accept);
        } else {
          const obj = document.createElement('input');
          obj.setAttribute('type', 'file');
          obj.setAttribute('id', 'taroChooseImage');
          obj.setAttribute('accept', props.accept);
          obj.setAttribute('style', 'position: fixed; top: -4000px; left: -3000px; z-index: -300;');
          document.body.appendChild(obj);
        }
      }

      Taro.chooseImage({
        // 选择数量
        count: props.multiple ? (props.maximum as number) * 1 - props.fileList.length : 1,
        // 可以指定是原图还是压缩图，默认二者都有
        sizeType: props.sizeType,
        sourceType: props.sourceType,
        success: onChange
      });
    };

    const fileItemClick = (fileItem: import('./type').FileItem) => {
      emit('file-item-click', { fileItem });
    };

    const executeUpload = (fileItem: import('./type').FileItem, index: number) => {
      const uploadOption = new UploadOptions();
      uploadOption.name = props.name;
      uploadOption.url = props.url;
      uploadOption.fileType = fileItem.type;
      uploadOption.formData = fileItem.formData;
      uploadOption.timeout = (props.timeout as number) * 1;
      uploadOption.method = props.method;
      uploadOption.xhrState = props.xhrState as number;
      uploadOption.method = props.method;
      uploadOption.headers = props.headers;
      uploadOption.taroFilePath = fileItem.path;
      uploadOption.beforeXhrUpload = props.beforeXhrUpload;
      uploadOption.onStart = (option: UploadOptions) => {
        fileItem.status = 'ready';
        fileItem.message = translate('readyUpload');
        clearUploadQueue(index);
        emit('start', option);
      };
      uploadOption.onProgress = (event: any, option: UploadOptions) => {
        fileItem.status = 'uploading';
        fileItem.message = translate('uploading');
        fileItem.percentage = event.progress;
        emit('progress', { event, option, percentage: fileItem.percentage });
      };

      uploadOption.onSuccess = (data: Taro.uploadFile.SuccessCallbackResult, option: UploadOptions) => {
        fileItem.status = 'success';
        fileItem.message = translate('success');
        emit('success', {
          data,
          responseText: data,
          option,
          fileItem
        });
        emit('update:fileList', fileList);
      };
      uploadOption.onFailure = (data: Taro.uploadFile.SuccessCallbackResult, option: UploadOptions) => {
        fileItem.status = 'error';
        fileItem.message = translate('error');
        emit('failure', {
          data,
          responseText: data,
          option,
          fileItem
        });
      };
      let task = new UploaderTaro(uploadOption);
      if (props.autoUpload) {
        task.uploadTaro(Taro.uploadFile, Taro.getEnv());
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
        fileList.splice(0, fileList.length);
      }
    };
    const submit = () => {
      Promise.all(uploadQueue).then((res) => {
        res.forEach((i) => i.uploadTaro(Taro.uploadFile, Taro.getEnv()));
      });
    };

    const readFile = (files: Taro.chooseImage.ImageFile[]) => {
      const imgReg = /\.(png|jpeg|jpg|webp|gif)$/i;
      files.forEach((file: Taro.chooseImage.ImageFile, index: number) => {
        let fileType = file.type;
        const fileItem = reactive(new FileItem());
        if (!fileType && (imgReg.test(file.path) || file.path.includes('data:image'))) {
          fileType = 'image';
        }
        fileItem.path = file.path;
        fileItem.name = file.path;
        fileItem.status = 'ready';
        fileItem.message = translate('waitingUpload');
        fileItem.type = fileType;
        if (Taro.getEnv() == 'WEB') {
          const formData = new FormData();
          for (const [key, value] of Object.entries(props.data)) {
            formData.append(key, value);
          }
          formData.append(props.name, file.originalFileObj as Blob);
          fileItem.name = file.originalFileObj?.name;
          fileItem.type = file.originalFileObj?.type;
          fileItem.formData = formData;
        } else {
          fileItem.formData = props.data;
        }
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

    const deleted = (file: import('./type').FileItem, index: number) => {
      fileList.splice(index, 1);
      emit('delete', {
        file,
        fileList,
        index
      });
    };

    const onDelete = (file: import('./type').FileItem, index: number) => {
      clearUploadQueue(index);
      funInterceptor(props.beforeDelete, {
        args: [file, fileList],
        done: () => deleted(file, index)
      });
    };

    const onChange = (res: Taro.chooseImage.SuccessCallbackResult) => {
      // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
      const { tempFilePaths, tempFiles } = res;

      if (props.beforeUpload) {
        props.beforeUpload(tempFiles).then((f: Array<Taro.chooseImage.ImageFile>) => changeReadFile(f));
      } else {
        changeReadFile(tempFiles);
      }

      emit('change', {
        fileList
      });
    };

    const changeReadFile = (f: any) => {
      const _files: Taro.chooseImage.ImageFile[] = filterFiles(f);
      readFile(_files);
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
