<template>
  <nut-form label-position="top" star-position="right">
    <nut-form-item label="姓名" required>
      <nut-input v-model="formData.name" placeholder="请输入姓名" type="text" />
    </nut-form-item>
    <nut-form-item label="年龄" required star-position="left">
      <nut-input v-model="formData.age" placeholder="请输入年龄" type="text" />
    </nut-form-item>
    <nut-form-item label="备注" label-position="left">
      <nut-textarea placeholder="请输入备注" type="text" />
    </nut-form-item>
  </nut-form>
</template>
<script setup>
import { ref } from 'vue';
const formData = ref({
  name: '',
  age: ''
});
</script>
