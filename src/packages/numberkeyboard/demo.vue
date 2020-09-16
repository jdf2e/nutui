<template>
  <div class="demo-list">
    <h4>基本用法</h4>
    <div class="show-demo">
      <nut-cell :isLink="true" @click.native="showKeyBoard" :showIcon="true" title="弹出默认键盘"></nut-cell>
      <nut-numberkeyboard :visible="visible" @input="input" @delete="onDelete" @close="close" @enter="enter" @leave="leave"> </nut-numberkeyboard>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      val: ''
    };
  },
  methods: {
    showKeyBoard() {
      this.visible = true;
    },
    input(number) {
      this.$toast.text(`输入：${number}`);
    },
    onDelete() {
      this.val = this.val.slice(0, this.val.length - 1);
    },
    close() {
      this.visible = false;
    },
    enter() {
      console.log('键盘抬起');
    },
    leave() {
      console.log('键盘收起');
    }
  }
};
</script>
