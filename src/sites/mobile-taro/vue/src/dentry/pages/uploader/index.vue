<template>
  <div class="demo bg-w">
    <h2>基础用法</h2>
    <nut-uploader :url="uploadUrl" @start="start"></nut-uploader>
    <h2>自定义上传样式</h2>
    <nut-uploader :url="uploadUrl">
      <nut-button type="primary" icon="uploader">上传文件</nut-button>
    </nut-uploader>
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
    <h2>手动上传 </h2>
    <nut-uploader :url="uploadUrl" maximum="5" :auto-upload="false" ref="uploadRef"></nut-uploader>
    <br />
    <nut-button type="success" size="small" @click="submitUpload">执行上传</nut-button>
    <h2>禁用状态</h2>
    <nut-uploader disabled></nut-uploader>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
export default {
  setup() {
    const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts';
    const formData = {
      custom: 'test'
    };
    const onOversize = (files: File[]) => {
      console.log('oversize 触发 文件大小不能超过 50kb', files);
    };
    const onDelete = (file: any, fileList: any[]) => {
      console.log('delete 事件触发', file, fileList);
    };
    const uploadRef = ref<any>(null);
    const submitUpload = () => {
      uploadRef.value.submit();
    };

    return {
      onOversize,
      onDelete,
      uploadUrl,
      formData,
      uploadRef,
      submitUpload
    };
  }
};
</script>

<style lang="scss" scoped></style>
