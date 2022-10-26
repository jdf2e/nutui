<template>
  <div class="demo bg-w">
    <h2>基础用法</h2>
    <nut-uploader :url="uploadUrl"></nut-uploader>
    <h2>上传状态</h2>
    <nut-uploader :url="uploadUrl" v-model:file-list="defaultFileList" maximum="3" multiple @delete="onDelete">
    </nut-uploader>
    <h2>基础用法-上传列表展示</h2>
    <nut-uploader :url="uploadUrl" v-model:file-list="defaultFileList" maximum="10" multiple list-type="list">
      <nut-button type="success" size="small">上传文件</nut-button>
    </nut-uploader>
    <h2>自定义上传样式</h2>
    <nut-uploader :url="uploadUrl">
      <nut-button type="success" size="small">上传文件</nut-button>
    </nut-uploader>
    <h2>自定义上传使用默认进度条</h2>
    <nut-uploader :url="uploadUrl" @progress="onProgress">
      <nut-button type="success" size="small">上传文件</nut-button>
    </nut-uploader>
    <br />
    <nut-progress
      :percentage="progressPercentage"
      stroke-color="linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)"
      :status="progressPercentage == 100 ? '' : 'active'"
    >
    </nut-progress>
    <!-- 
      album 从相册选图
      camera 使用相机
      user 使用前置摄像头(仅H5纯浏览器使用)
      environment 使用后置摄像头(仅H5纯浏览器)
      -->
    <h2>直接调起摄像头 camera </h2>
    <nut-uploader :source-type="['camera']"></nut-uploader>
    <h2>上传状态</h2>
    <nut-uploader :url="uploadUrl" @delete="onDelete"></nut-uploader>
    <h2>限制上传数量5个</h2>
    <nut-uploader :url="uploadUrl" maximum="5"></nut-uploader>
    <h2>限制上传大小（每个文件最大不超过 50kb）</h2>
    <nut-uploader :url="uploadUrl" :maximize="1024 * 50" @oversize="onOversize"></nut-uploader>
    <h2>自定义数据 FormData 、 headers </h2>
    <nut-uploader :url="uploadUrl" :data="formData" :headers="formData" :with-credentials="true"></nut-uploader>
    <h2>自定义 Taro.uploadFile 上传方式(before-xhr-upload) </h2>
    <nut-uploader :url="uploadUrl" :before-xhr-upload="beforeXhrUpload"></nut-uploader>
    <h2>选中文件后，通过按钮手动执行上传 </h2>
    <nut-uploader :url="uploadUrl" maximum="5" :auto-upload="false" ref="uploadRef"></nut-uploader>
    <br />
    <nut-button type="success" size="small" @click="submitUpload">手动执行上传</nut-button>
    <nut-button type="danger" size="small" @click="clearUpload">手动清空上传</nut-button>
    <h2>禁用状态</h2>
    <nut-uploader disabled></nut-uploader>
  </div>
</template>

<script lang="ts">
import { ref, reactive } from 'vue';
export default {
  setup() {
    const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts';
    const progressPercentage = ref<string | number>(0);
    const formData = {
      custom: 'test'
    };
    const defaultFileList = reactive([
      {
        name: '文件1.png',
        url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
        status: 'success',
        message: '上传成功',
        type: 'image'
      },
      {
        name: '文件2.png',
        url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
        status: 'error',
        message: '上传失败',
        type: 'image'
      },
      {
        name: '文件3.png',
        url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
        status: 'uploading',
        message: '上传中...',
        type: 'image'
      }
    ]);
    const onOversize = (files: File[]) => {
      console.log('oversize 触发 文件大小不能超过 50kb', files);
    };
    const onDelete = (file: any, fileList: any[]) => {
      console.log('delete 事件触发', file, fileList);
    };
    const onProgress = ({ event, options, percentage }: any) => {
      progressPercentage.value = percentage;
      console.log('progress 事件触发', percentage);
    };
    const uploadRef = ref<any>(null);
    const submitUpload = () => {
      uploadRef.value.submit();
    };
    const clearUpload = () => {
      uploadRef.value.clearUploadQueue();
    };

    const beforeXhrUpload = (taroUploadFile: any, options: any) => {
      //taroUploadFile  是 Taro.uploadFile ， 你也可以自定义设置其它函数
      const uploadTask = taroUploadFile({
        url: options.url,
        filePath: options.taroFilePath,
        fileType: options.fileType,
        header: {
          'Content-Type': 'multipart/form-data',
          ...options.headers
        }, //
        formData: options.formData,
        name: options.name,
        success(response: { errMsg: any; statusCode: number; data: string }) {
          if (options.xhrState == response.statusCode) {
            options.onSuccess?.(response, options);
          } else {
            options.onFailure?.(response, options);
          }
        },
        fail(e: any) {
          options.onFailure?.(e, options);
        }
      });
      options.onStart?.(options);
      uploadTask.progress((res: { progress: any; totalBytesSent: any; totalBytesExpectedToSend: any }) => {
        options.onProgress?.(res, options);
        // console.log('上传进度', res.progress);
        // console.log('已经上传的数据长度', res.totalBytesSent);
        // console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend);
      });
      // uploadTask.abort(); // 取消上传任务
    };

    return {
      onOversize,
      onDelete,
      onProgress,
      progressPercentage,
      uploadUrl,
      defaultFileList,
      formData,
      uploadRef,
      submitUpload,
      clearUpload,
      beforeXhrUpload
    };
  }
};
</script>

<style lang="scss" scoped></style>
