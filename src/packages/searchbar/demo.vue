<template>
  <div class="s-bar demo-list">
    <h4>基本用法</h4>
    <div class="demo1">
      <nut-searchbar v-model="value"></nut-searchbar>
    </div>
    <p>右侧搜索按钮可根据需要进行配置</p>
    <div class="demo1">
      <nut-searchbar v-model="value" placeText="" :hasSearchButton="false"></nut-searchbar>
    </div>
    <p>可配置输入框前面是否显示搜索图标、右侧是否显示文字按钮、显示文字、自定义 class</p>
    <div class="demo1">
      <nut-searchbar v-model="value" placeText="ERP/姓名/邮箱" :hasIcon="true" :hasTextButton="true" customClass="search_demo"></nut-searchbar>
    </div>
    <h4>事件</h4>
    <div class="demo1">
      <nut-searchbar
        v-model="value"
        placeText="请输入自定义文案"
        @focus="focusFun"
        @input="inputFun"
        @blur="blurFun"
        @submit="submitFun"
      ></nut-searchbar>
    </div>

    <h4>获取焦点与失去焦点</h4>
    <div class="demo1">
      <nut-searchbar v-model="value" placeText="请输入自定义文案" @submit="search" @focus="focusFun" ref="myInput"> </nut-searchbar>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: ''
    };
  },
  mounted() {
    const th = this;
    this.$nextTick(function() {
      setTimeout(function() {
        th.$refs.myInput.focus();
      }, 2000);
    });
  },
  methods: {
    focusFun() {
      console.log('获取焦点操作！');
    },
    inputFun(value) {
      console.log(value);
      console.log('您正在输入...');
    },
    blurFun(value) {
      console.log(value);
      console.log('您已失去焦点！');
    },
    submitFun(value) {
      console.log(value);
      console.log('默认提交操作！');
    },

    search(value) {
      this.$refs.myInput.blur();
      console.log('搜索');
    }
  }
};
</script>
<style lang="scss" scoped>
.demo1 {
  padding: 10px;
  background: #fff;
}
</style>
