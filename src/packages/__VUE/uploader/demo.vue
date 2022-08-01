<template>
  <div class="demo bg-w">
    <h2>{{ translate('basic') }}</h2>
    <nut-uploader :url="uploadUrl"></nut-uploader>
    <h2>{{ translate('title1') }}</h2>
    <nut-uploader :url="uploadUrl" v-model:file-list="defaultFileList" @delete="onDelete" maximum="3" multiple>
    </nut-uploader>
    <h2>{{ translate('title2') }}</h2>
    <nut-uploader :url="uploadUrl" v-model:file-list="defaultFileList" maximum="10" multiple list-type="list">
      <nut-button type="success" size="small">{{ translate('uploadfile') }}</nut-button>
    </nut-uploader>
    <h2>{{ translate('title3') }}</h2>
    <nut-uploader :url="uploadUrl">
      <nut-button type="success" size="small">{{ translate('uploadfile') }}</nut-button>
    </nut-uploader>
    <h2>{{ translate('title4') }}</h2>
    <nut-uploader :url="uploadUrl" @progress="onProgress">
      <nut-button type="success" size="small">{{ translate('uploadfile') }}</nut-button>
    </nut-uploader>
    <br />
    <nut-progress
      :percentage="progressPercentage"
      stroke-color="linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)"
      :status="progressPercentage == 100 ? '' : 'active'"
    >
    </nut-progress>
    <h2>{{ translate('title5') }}</h2>
    <nut-uploader :url="uploadUrl" capture></nut-uploader>
    <h2>{{ translate('title6') }}</h2>
    <nut-uploader :url="uploadUrl" multiple maximum="5"></nut-uploader>
    <h2>{{ translate('title7') }}</h2>
    <nut-uploader :url="uploadUrl" multiple :maximize="1024 * 50" @oversize="onOversize"></nut-uploader>
    <h2>{{ translate('title8') }}</h2>
    <nut-uploader :url="uploadUrl" multiple :before-upload="beforeUpload"> </nut-uploader>
    <h2>{{ translate('title9') }}</h2>
    <nut-uploader :url="uploadUrl" :data="formData" :headers="formData" :with-credentials="true"></nut-uploader>
    <h2>{{ translate('title13') }}</h2>
    <nut-uploader :url="uploadUrl" method="put" @before-xhr-upload="beforeXhrUpload"></nut-uploader>
    <h2>{{ translate('title10') }}</h2>
    <nut-uploader :url="uploadUrl" maximum="5" :auto-upload="false" ref="uploadRef"></nut-uploader>
    <br />
    <nut-button type="success" size="small" @click="submitUpload">{{ translate('title11') }}</nut-button>
    <h2>{{ translate('title12') }}</h2>
    <nut-uploader disabled></nut-uploader>
  </div>
</template>

<script lang="ts">
import { ref, computed } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { FileItem } from './index.vue';
const { createDemo, translate } = createComponent('uploader');
import { useTranslate } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基本用法',
      uploadfile: '上传文件',
      title1: '上传状态',
      title2: '基础用法-上传列表展示',
      title3: '自定义上传样式',
      title4: '自定义上传使用默认进度条',
      title5: '直接调起摄像头（移动端生效）',
      title6: '限制上传数量5个',
      title7: '限制上传大小（每个文件最大不超过 50kb）',
      title8: '图片压缩（在 beforeupload 钩子中处理）',
      title9: '自定义数据 FormData 、 headers ',
      title10: '选中文件后，通过按钮手动执行上传',
      title11: '执行上传',
      title12: '禁用状态',
      title13: '自定义 xhr 上传方式(before-xhr-upload)'
    },
    'en-US': {
      basic: 'Basic Usage',
      uploadfile: 'Upload files',
      title1: 'Upload status',
      title2: 'Basic usage - upload list display',
      title3: 'Custom upload style',
      title4: 'Custom upload uses default progress bar',
      title5: 'Directly activate the camera (effective on the mobile terminal)',
      title6: 'Limit the number of uploads to 5',
      title7: 'Limit upload size (up to 50kb per file)',
      title8: 'Image compression (handled in the beforeupload hook)',
      title9: 'Custom data FormData , headers',
      title10: 'Once the file is selected, manually perform the upload via the button',
      title11: 'Perform upload',
      title12: 'Disabled state',
      title13: 'Customize XHR upload (before-xhr-upload)'
    }
  });
export default createDemo({
  setup() {
    initTranslate();
    const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts';
    const progressPercentage = ref<string | number>(0);
    const formData = {
      custom: 'test'
    };

    const defaultFileList = computed(() => [
      {
        name: 'file 1.png',
        url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
        status: 'success',
        message: translate('success'),
        type: 'image'
      },
      {
        name: 'file 2.png',
        url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
        status: 'error',
        message: translate('error'),
        type: 'image'
      },
      {
        name: 'file 3.png',
        url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
        status: 'uploading',
        message: translate('uploading'),
        type: 'image'
      }
    ]);
    const fileToDataURL = (file: Blob): Promise<any> => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = (e) => resolve((e.target as FileReader).result);
        reader.readAsDataURL(file);
      });
    };
    const dataURLToImage = (dataURL: string): Promise<HTMLImageElement> => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.src = dataURL;
      });
    };
    const canvastoFile = (canvas: HTMLCanvasElement, type: string, quality: number): Promise<Blob | null> => {
      return new Promise((resolve) => canvas.toBlob((blob) => resolve(blob), type, quality));
    };
    const onOversize = (files: File[]) => {
      console.log('oversize 触发 文件大小不能超过 50kb', files);
    };
    const onDelete = (obj: any) => {
      console.log('delete 事件触发', obj);
    };
    const onProgress = ({ event, options, percentage }: any) => {
      progressPercentage.value = percentage;
      console.log('progress 事件触发', percentage);
    };
    const beforeUpload = async (file: File[]) => {
      let fileName = file[0].name;
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d') as CanvasRenderingContext2D;
      const base64 = await fileToDataURL(file[0]);
      const img = await dataURLToImage(base64);
      canvas.width = img.width;
      canvas.height = img.height;

      context.clearRect(0, 0, img.width, img.height);
      context.drawImage(img, 0, 0, img.width, img.height);

      let blob = (await canvastoFile(canvas, 'image/jpeg', 0.5)) as Blob; //quality:0.5可根据实际情况计算
      const f = await new File([blob], fileName);
      return [f];
    };
    const beforeXhrUpload = (xhr: XMLHttpRequest, options: any) => {
      if (options.method.toLowerCase() == 'put') {
        xhr.send(options.sourceFile);
      } else {
        xhr.send(options.formData);
      }
    };
    const uploadRef = ref<any>(null);
    const submitUpload = () => {
      uploadRef.value.submit();
    };
    return {
      onOversize,
      beforeUpload,
      beforeXhrUpload,
      onDelete,
      onProgress,
      progressPercentage,
      uploadUrl,
      defaultFileList,
      formData,
      uploadRef,
      submitUpload,
      translate
    };
  }
});
</script>

<style lang="scss" scoped></style>
