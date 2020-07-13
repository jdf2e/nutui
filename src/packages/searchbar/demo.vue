<template>
  <div class="demo-list">
    <h4>基本用法</h4>
    <nut-searchbar v-model="value" :hasIcon="true" :hasSearchButton="false" :clearable="true"></nut-searchbar>

    <h4>搜索框对齐方式</h4>
    <nut-searchbar v-model="value" :hasIcon="true" :hasSearchButton="false" inputAlign="center"></nut-searchbar>

    <h4>自定义右侧按钮</h4>
    <nut-searchbar v-model="value" placeText="右侧默认图标" @submit="searchIcon"></nut-searchbar>

    <nut-searchbar v-model="value" placeText="右侧图标自定义" @submit="searchQR" :searchBtnIcon="require('../../assets/svg/qr.svg')"> </nut-searchbar>

    <nut-searchbar v-model="value" placeText="右侧默认文字" :hasTextButton="true" @submit="submitFun"></nut-searchbar>

    <nut-searchbar v-model="value" placeText="右侧文字自定义" :hasIcon="true" :hasTextButton="true" textInfo="取消" @submit="cancel"> </nut-searchbar>

    <h4>自定义搜索框右侧按钮</h4>
    <nut-searchbar v-model="value" :hasIcon="true" :hasSearchButton="false" :hasAction="true" @handle-action="handleAction"> </nut-searchbar>

    <nut-searchbar
      v-model="value"
      :hasIcon="true"
      :hasSearchButton="false"
      :hasAction="true"
      :actionIcon="require('../../assets/svg/rate-default-img.svg')"
      @handle-action="handleAction"
    ></nut-searchbar>

    <h4>事件</h4>
    <nut-searchbar v-model="value" @focus="focusFun" @input="inputFun" @blur="blurFun" @submit="submitFun"> </nut-searchbar>

    <h4>获取焦点与失去焦点</h4>
    <nut-searchbar v-model="value" @submit="search" @focus="focusFun" ref="myInput"></nut-searchbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: '',
    };
  },
  mounted() {
    const th = this;
    this.$nextTick(function () {
      setTimeout(function () {
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
      this.$toast.text('您点击了搜索按钮');
      console.log('您输入的内容为：' + value);
      console.log('您触发了右侧按钮的事件，默认提交操作！');
    },
    searchIcon(value) {
      this.$toast.text('您点击了搜索按钮');
      console.log('您输入的内容为：' + value);
    },
    searchQR(value) {
      this.$toast.text('您点击了二维码按钮');
      console.log('您输入的内容为：' + value);
    },
    cancel(value) {
      this.$toast.text('您点击了取消按钮');
      console.log('您输入的内容为：' + value);
    },
    search(value) {
      this.$refs.myInput.blur();
      console.log('搜索');
    },

    handleAction(value) {
      this.$toast.text('您点击了input搜索框右侧的图标');
      console.log('您输入的内容为：' + value);
      console.log('您点击了input搜索框右侧的图标');
    },
  },
};
</script>
<style lang="scss" scoped></style>
