<template>
  <div class="demo-list">
    <!-- <h4>示例</h4> -->
    <h4>默认用法 支持异步回显数据</h4>
    <nut-textbox v-model="val"></nut-textbox>
    <h4>禁用</h4>
    <nut-textbox disabled v-model="val"></nut-textbox>
    <h4>自定义高度:100px</h4>
    <nut-textbox :txtAreaH="100" :max-num="300" v-model="val"></nut-textbox>

    <h4>自定义提示语</h4>
    <nut-textbox :place-text="'请填写详细情况请填写详细情况'" v-model="val1"></nut-textbox>

    <h4>自定义字数限制</h4>
    <nut-textbox :max-num="100" v-model="val2"></nut-textbox>

    <h4>限制字数不可超出</h4>
    <nut-textbox :switch-max="true" :max-num="10" :txt-areaH="100" text-bgColor="#efefef" v-model="val3"></nut-textbox>

    <h4>字数超出报错</h4>
    <nut-textbox :max-num="10" :txt-areaH="100" @errorFunc="overLength" v-model="val1"></nut-textbox>

    <h4>自定义文本框背景色</h4>
    <nut-textbox :switch-max="true" :max-num="10" :txt-areaH="100" text-bgColor="#feefef" v-model="val1"></nut-textbox>

    <h4>不显示字数限制</h4>
    <nut-textbox :limit-show="false" :max-num="10" v-model="val1"></nut-textbox>

    <h4>输入回调返回文字</h4>
    <nut-textbox :max-num="10" txt-areaH="100" @inputFunc="inputText"></nut-textbox>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: '',
      val1: '',
      val2: '自定义数据',
      val3: 'ceshi'
    };
  },
  methods: {
    overLength() {
      alert('字数超出');
    },
    inputText(val) {
      alert(val);
    }
  },
  mounted() {
    var that = this;
    this.val = '初始测试数据';
    setTimeout(function() {
      that.val = '异步测试数据123';
      that.val3 = '这是一段文字，非常长，非常长，非常长长长';
    }, 2000);
  }
};
</script>
