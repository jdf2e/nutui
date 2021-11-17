<template>
  <div class="demo full">
    <nut-form>
      <nut-form-item label="姓名">
        <input class="nut-input-text" placeholder="请输入姓名" type="text" />
      </nut-form-item>
      <nut-form-item label="年龄">
        <input class="nut-input-text" placeholder="请输入年龄" type="text" />
      </nut-form-item>
      <nut-form-item label="联系电话">
        <input class="nut-input-text" placeholder="请输入联系电话" type="text" />
      </nut-form-item>
      <nut-form-item label="地址">
        <input class="nut-input-text" placeholder="请输入地址" type="text" />
      </nut-form-item>
    </nut-form>
    <nut-form :model-value="formData" ref="ruleForm">
      <nut-form-item label="姓名" prop="name" required :rules="[{ required: true, message: '请填写姓名' }]">
        <input class="nut-input-text" v-model="formData.name" placeholder="请输入姓名" type="text" />
      </nut-form-item>
      <nut-form-item
        label="年龄"
        prop="age"
        required
        :rules="[
          { required: true, message: '请填写年龄' },
          { validator: customValidator, message: '必须输入数字' }
        ]"
      >
        <input class="nut-input-text" v-model="formData.age" placeholder="请输入年龄" type="text" />
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
        <input
          class="nut-input-text"
          v-model="formData.tel"
          placeholder="请输入联系电话，异步校验电话格式"
          type="text"
        />
      </nut-form-item>
      <nut-form-item label="地址" prop="address" required :rules="[{ required: true, message: '请填写地址' }]">
        <input class="nut-input-text" v-model="formData.address" placeholder="请输入地址" type="text" />
      </nut-form-item>
      <nut-cell>
        <nut-button type="primary" size="small" style="margin-right: 10px" @click="submit">提交</nut-button>
        <nut-button size="small" @click="reset">重置提示状态</nut-button>
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
      age: '',
      tel: '',
      address: ''
    });
    const ruleForm = ref<any>(null);

    const submit = (formName: string) => {
      ruleForm.value.validate().then((valid: boolean) => {
        debugger;
        if (valid) {
          console.log('success');
        } else {
          console.log('error submit!!');
        }
      });
    };
    const reset = (formName: string) => {
      ruleForm.value.reset();
    };
    // 函数校验
    const customValidator = (val: string) => /^\d+$/.test(val);
    // Promise 异步校验
    const asyncValidator = (val: string) => {
      return new Promise((resolve) => {
        Toast.loading('模拟异步验证中...');
        setTimeout(() => {
          Toast.hide();
          resolve(/^400(-?)[0-9]{7}$|^1\d{10}$|^0[0-9]{2,3}-[0-9]{7,8}$/.test(val));
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
