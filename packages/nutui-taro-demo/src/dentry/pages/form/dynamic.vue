<template>
  <nut-form ref="formRef" :model-value="formData">
    <nut-form-item label="姓名" prop="name" required :rules="[{ required: true, message: '请填写姓名' }]">
      <nut-input v-model="formData.name" class="nut-input-text" placeholder="请输入姓名" type="text" />
    </nut-form-item>
    <nut-form-item
      v-for="(item, index) in formData.tels"
      :key="item.key"
      :label="'字段 ' + index"
      :prop="'tels.' + index + '.value'"
      required
      :rules="[{ required: true, message: '请填写字段 ' + index }]"
    >
      <nut-input v-model="item.value" class="nut-input-text" :placeholder="'请输入字段 ' + index" type="text" />
    </nut-form-item>
    <nut-space style="margin: 10px">
      <nut-button size="small" @click="add">添加</nut-button>
      <nut-button size="small" @click="remove">删除</nut-button>
      <nut-button size="small" type="primary" @click="submit">提交</nut-button>
      <nut-button size="small" @click="reset">重置提示状态</nut-button>
    </nut-space>
  </nut-form>
</template>

<script setup>
import { ref } from 'vue';
const formData = ref({
  name: '',
  tels: []
});
const formRef = ref(null);

const add = () => {
  formData.value.tels.push({
    key: Date.now(),
    value: ''
  });
};

const remove = () => {
  formData.value.tels.pop();
};

const submit = () => {
  formRef.value?.validate().then(({ valid, errors }) => {
    if (valid) {
      console.log('success:', formData.value);
    } else {
      console.warn('error:', errors);
    }
  });
};

const reset = () => {
  formRef.value?.reset();
};
</script>
