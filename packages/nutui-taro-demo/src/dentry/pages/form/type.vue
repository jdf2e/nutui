<template>
  <nut-form>
    <nut-form-item label="开关">
      <nut-switch v-model="formData.switch"></nut-switch>
    </nut-form-item>
    <nut-form-item label="复选框">
      <nut-checkbox v-model="formData.checkbox">复选框</nut-checkbox>
    </nut-form-item>
    <nut-form-item label="单选按钮">
      <nut-radio-group v-model="formData.radio" direction="horizontal">
        <nut-radio label="1">选项1</nut-radio>
        <nut-radio disabled label="2">选项2</nut-radio>
        <nut-radio label="3">选项3</nut-radio>
      </nut-radio-group>
    </nut-form-item>
    <nut-form-item label="评分">
      <nut-rate v-model="formData.rate" />
    </nut-form-item>
    <nut-form-item label="步进器">
      <nut-input-number v-model="formData.number" />
    </nut-form-item>
    <nut-form-item label="滑块">
      <nut-range v-model="formData.range" hidden-tag></nut-range>
    </nut-form-item>
    <nut-form-item label="文件上传">
      <nut-uploader
        v-model:file-list="formData.defaultFileList"
        url="http://服务地址"
        accept="image/*"
        maximum="3"
        multiple
      >
      </nut-uploader>
    </nut-form-item>
  </nut-form>
</template>
<script setup>
import { ref } from 'vue'
const formData = ref({
  switch: false,
  checkbox: false,
  radio: 0,
  number: 0,
  rate: 3,
  range: 30,
  defaultFileList: [
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
      status: 'uploading',
      message: '上传中...',
      type: 'image'
    }
  ]
})
</script>
