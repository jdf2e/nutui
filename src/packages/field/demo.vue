<template>
  <div class="demo-list">
    <h4>标准样式</h4>

    <nut-field label="标题内容" placeholder="请输入内容" v-model="val" />

    <h4>文字左对齐，且不展示清除按钮 </h4>

    <nut-field :disableClear="true" v-model="val2" label="文本左对齐" textAlign="left" placeholder="请输入内容" />

    <h4>标题超出长度限制</h4>

    <nut-field v-model="val8" label="标题长度超出超出超出范围" textAlign="right" placeholder="请输入内容" />

    <h4>数字</h4>

    <nut-field v-model="val4" label="请输入数字" type="number" placeholder="请输入数字" />

    <h4>错误验证</h4>

    <nut-field v-model="val5" :state="state" :requireShow="true" label="手机号码" @input-func="checkVal5" />

    <h4>禁用输入框</h4>

    <nut-field v-model="val6" :readonly="true" label="标题内容" />

    <div class="filed-demo line">
      <nut-field v-model="val7" :disabled="true" label="标题内容" />

      <h4>文本域(不限制字数,高度自适应)</h4>

      <nut-field label="标题内容" placeholder="自我介绍" v-model="val3" :autosize="true" :limitShow="false" type="textarea" @errorFunc="error" />

      <h4>文本域(显示字数统计)</h4>

      <nut-field label="意见反馈" placeholder="自我介绍" v-model="val10" type="textarea" @errorFunc="error" maxLength="200" rows="4" />

      <h4>事件输入事件</h4>

      <nut-field label="标题内容：" placeholder="请输入内容" v-model="val" @input-func="fn" />

      <h4>右侧自定义DOM</h4>
      <nut-field label="验证码：" textAlign="left" placeholder="请输入内容" v-model="val9" @input-func="fn">
        <div class="get-code"> 获取验证码</div>
      </nut-field>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: '',
      val2: '',
      val3: '',
      val4: '',
      val5: '12345678985',
      val6: '输入框只读',
      val7: '输入框已禁用',
      val8: '',
      val9: '',
      val10: '',
      result: '尚未触发',
      state: 'error',
    };
  },

  mounted() {},
  methods: {
    onFocus() {
      this.result = 'focus事件触发！';
    },
    onBlur() {
      this.result = 'blur事件触发！';
    },
    fn(data) {
      console.log(data);
    },
    error(data) {
      // alert("文字超出限制了")
    },
    checkVal5(data) {
      if (!/^1[3456789]\d{9}$/.test(data)) {
        console.log(false);
        this.state = 'error';
      } else {
        console.log(true);
        this.state = '';
      }
    },
    submit() {
      this.$refs.myInput.blur();
    },
  },
};
</script>

<style lang="scss" scope>
.text-area {
  width: 100%;
  background: rgba(255, 255, 255, 1);
}

.wrapper-cell .nut-cell {
  margin: 0 0 0 20px;
}
.get-code {
  min-width: 80px;
  background-color: #07c160;
  border: 1px solid #07c160;
  color: #fff;
  margin: 10px 0;
  padding: 0 5px;
}
.line {
  border-top: 1px solid rgba(230, 230, 230, 1);
}
</style>
