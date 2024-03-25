<template>
  <nut-form>
    <nut-form-item label="姓名">
      <nut-input v-model="formData.name" placeholder="请输入姓名" type="text" />
    </nut-form-item>
    <nut-form-item label="年龄">
      <nut-input v-model="formData.age" placeholder="请输入年龄" type="text" />
    </nut-form-item>
    <nut-form-item label="联系电话">
      <nut-input v-model="formData.tel" placeholder="请输入联系电话" type="text" />
    </nut-form-item>
    <nut-form-item label="地址">
      <nut-input v-model="formData.addr" placeholder="请输入地址" type="text" />
    </nut-form-item>
    <nut-form-item label="备注">
      <nut-textarea v-model="formData.info" placeholder="请输入备注" type="text" />
    </nut-form-item>
  </nut-form>
</template>
<script setup>
import { ref } from 'vue'
const formData = ref({
  name: '',
  age: '',
  tel: '',
  addr: '',
  info: ''
})
</script>
