<template>
  <nut-form
    ref="formRef"
    :model-value="formData"
    :rules="{
      name: [
        { required: true, message: '请填写姓名' },
        {
          message: 'name 至少两个字符',
          validator: nameLengthValidator
        }
      ]
    }"
  >
    <nut-form-item label="姓名" prop="name">
      <nut-input
        v-model="formData.name"
        placeholder="请输入姓名，blur 事件校验"
        type="text"
        @blur="customBlurValidate('name')"
      />
    </nut-form-item>
    <nut-form-item
      label="年龄"
      prop="age"
      required
      :rules="[
        { required: true, message: '请填写年龄' },
        { validator: customValidator, message: '必须输入数字' },
        { validator: customRulePropValidator, message: '必须输入数字', reg: /^\d+$/ },
        { regex: /^(\d{1,2}|1\d{2}|200)$/, message: '必须输入0-200区间' }
      ]"
    >
      <nut-input v-model="formData.age" placeholder="请输入年龄，必须数字且0-200区间" type="text" />
    </nut-form-item>
    <nut-form-item
      label="联系电话"
      prop="tel"
      required
      :rules="[
        { required: true, message: '请填写联系电话' },
        { validator: asyncValidator, message: '电话格式不正确' }
      ]"
    >
      <nut-input v-model="formData.tel" placeholder="请输入联系电话，异步校验电话格式" type="text" />
    </nut-form-item>
    <nut-form-item label="地址" prop="address" required :rules="[{ required: true, message: '请填写地址' }]">
      <nut-input v-model="formData.address" placeholder="请输入地址" type="text" />
    </nut-form-item>
    <nut-space style="margin: 10px">
      <nut-button type="primary" size="small" @click="submit">提交</nut-button>
      <nut-button size="small" @click="reset">重置提示状态</nut-button>
    </nut-space>
  </nut-form>
</template>
<script setup>
import { ref } from 'vue'
const formData = ref({
  name: '',
  age: '',
  tel: '',
  address: ''
})

const formRef = ref(null)

const reset = () => {
  formRef.value?.reset()
}

const submit = () => {
  formRef.value?.validate().then(({ valid, errors }) => {
    if (valid) {
      console.log('success:', formData.value)
    } else {
      console.warn('error:', errors)
    }
  })
}
// 失去焦点校验
const customBlurValidate = (prop) => {
  formRef.value?.validate(prop).then(({ valid, errors }) => {
    if (valid) {
      console.log('success:', formData.value)
    } else {
      console.warn('error:', errors)
    }
  })
}
// 函数校验
const customValidator = (val) => {
  if (/^\d+$/.test(val)) {
    return Promise.resolve()
  } else {
    return Promise.reject('必须输入数字')
  }
}
const customRulePropValidator = (val, rule) => {
  if (rule.reg.test(val)) {
    return Promise.resolve()
  } else {
    return Promise.reject('必须输入数字')
  }
}
const nameLengthValidator = (val) => {
  if (val.length > 2) {
    return Promise.resolve()
  } else {
    return Promise.reject('名称两个字以上')
  }
}
// Promise 异步校验
const asyncValidator = (val) => {
  const telReg = /^400(-?)[0-9]{7}$|^1\d{10}$|^0[0-9]{2,3}-[0-9]{7,8}$/
  return new Promise((resolve, reject) => {
    console.log('模拟异步验证中...')
    setTimeout(() => {
      if (!val) {
        reject('请输入联系电话')
      } else if (!telReg.test(val)) {
        reject('联系电话格式不正确')
      } else {
        resolve('')
      }
    }, 1000)
  })
}
</script>
