<template>
  <div class="demo full">
    <nut-form v-model="formData" ref="ruleForm">
      <nut-form-item label="姓名" prop="name" required :rules="[{ required: true, message: '请填写姓名' }]">
        <input class="nut-input-text" v-model="formData.name" placeholder="请输入姓名" type="text" />
      </nut-form-item>
      <nut-form-item
        label="年龄"
        prop="age"
        :rules="[
          { required: true, message: '请填写年龄' },
          { validator: customValidator, message: '必须输入数字' }
        ]"
      >
        <input class="nut-input-text" v-model="formData.age" placeholder="请输入年龄" type="text" />
      </nut-form-item>
      <nut-form-item label="联系方式" prop="tel">
        <input class="nut-input-text" v-model="formData.tel" placeholder="请输入联系方式" type="text" />
      </nut-form-item>
      <nut-form-item label="地址" prop="address">
        <input class="nut-input-text" v-model="formData.address" placeholder="请输入地址" type="text" />
      </nut-form-item>
      <nut-cell>
        <nut-button type="primary" size="small" style="margin-right: 10px" @click="submit">提交</nut-button>
        <nut-button size="small" @click="reset">重置</nut-button>
      </nut-cell>
    </nut-form>
  </div>
</template>

<script lang="ts">
import { Toast } from '@/packages/nutui.vue';
import { reactive, ref } from 'vue';
import { createComponent } from '../../utils/create';
const { createDemo } = createComponent('form');
export default createDemo({
  props: {},
  setup() {
    const formData = reactive({
      name: '',
      age: null,
      tel: '',
      address: ''
    });
    const ruleForm = ref<any>(null);

    const submit = (formName: string) => {
      ruleForm.value.validate((valid: boolean, errors: []) => {
        if (valid) {
          console.log('success');
        } else {
          console.log('error submit!!', errors);
        }
      });
    };
    const reset = (formName: string) => {
      ruleForm.value.reset();
    };
    // 函数校验
    const customValidator = (val: string) => /1\d{10}/.test(val);
    // Promise 异步校验
    const asyncValidator = (val: string) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          Toast.clear();
          resolve(/\d{6}/.test(val));
        }, 1000);
      });
    };
    return { ruleForm, formData, customValidator, asyncValidator, submit, reset };
  }
});
</script>

<style lang="scss" scoped>
.demo {
}
</style>
