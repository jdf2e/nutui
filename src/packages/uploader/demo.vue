<template>
  <div class="demo bg-w">
    <h2>基础用法</h2>
    <nut-uploader :url="uploadUrl"></nut-uploader>
    <h2>上传状态</h2>
    <nut-uploader
      :url="uploadUrl"
      multiple
      @on-delete="onDelete"
    ></nut-uploader>
    <h2>限制上传数量5个</h2>
    <nut-uploader :url="uploadUrl" multiple max-count="5"></nut-uploader>
    <h2>限制上传大小（每个文件最大不超过 50kb）</h2>
    <nut-uploader
      :url="uploadUrl"
      multiple
      :max-size="1024 * 50"
      @oversize="onOversize"
    ></nut-uploader>
    <h2>自定义数据 FormData 、 headers </h2>
    <nut-uploader
      :url="uploadUrl"
      :form-data="formData"
      :headers="formData"
      :with-Credentials="true"
    ></nut-uploader>
    <h2>禁用状态</h2>
    <nut-uploader disabled></nut-uploader>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/utils/create';
import { FileItem } from './index.vue';
const { createDemo } = createComponent('uploader');
export default createDemo({
  setup() {
    const uploadUrl =
      'https://my-json-server.typicode.com/linrufeng/demo/posts';

    const formData = {
      custom: 'test'
    };
    const onOversize = (files: File[]) => {
      console.log('oversize 触发 文件大小不能超过 50kb', files);
    };
    const onDelete = (file: FileItem, fileList: FileItem[]) => {
      console.log('on-delete 事件触发', file, fileList);
    };
    return {
      onOversize,
      onDelete,
      uploadUrl,
      formData
    };
  }
});
</script>

<style lang="scss" scoped></style>
