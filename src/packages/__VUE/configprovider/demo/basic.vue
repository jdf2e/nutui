<template>
  <nut-config-provider :theme="theme">
    <nut-cell title="Dark">
      <template #link>
        <nut-switch v-model="checked" @change="change" />
      </template>
    </nut-cell>
    <nut-cell title="Title" sub-title="Subtitle" desc="Description"></nut-cell>

    <nut-form>
      <nut-form-item label="Switch">
        <nut-switch v-model="formData.switch"></nut-switch>
      </nut-form-item>
      <nut-form-item label="Checkbox">
        <nut-checkbox v-model="formData.checkbox"> A </nut-checkbox>
      </nut-form-item>
      <nut-form-item label="Radio">
        <nut-radio-group v-model="formData.radio" direction="horizontal">
          <nut-radio label="1"> A </nut-radio>
          <nut-radio disabled label="2"> B </nut-radio>
          <nut-radio label="3"> C </nut-radio>
        </nut-radio-group>
      </nut-form-item>
      <nut-form-item label="Rate">
        <nut-rate v-model="formData.rate" />
      </nut-form-item>
      <nut-form-item label="InputNumber">
        <nut-input-number v-model="formData.number" />
      </nut-form-item>
      <nut-form-item label="Range">
        <nut-range v-model="formData.range" hidden-tag></nut-range>
      </nut-form-item>
      <nut-form-item label="Uploader">
        <nut-uploader v-model:file-list="formData.defaultFileList" url="http://apiurl" maximum="3" multiple>
        </nut-uploader>
      </nut-form-item>
    </nut-form>
  </nut-config-provider>
</template>

<script setup>
import { ref } from 'vue'
const theme = ref('')
const checked = ref(false)
const change = (v) => {
  theme.value = v ? 'dark' : ''
}
const formData = ref({
  switch: false,
  checkbox: false,
  radio: 0,
  number: 0,
  rate: 3,
  range: 30,
  defaultFileList: [
    {
      name: 'file 1.png',
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'success',
      message: 'Success',
      type: 'image'
    },
    {
      name: 'file 2.png',
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'uploading',
      message: 'Uploading',
      type: 'image'
    }
  ]
})
</script>
