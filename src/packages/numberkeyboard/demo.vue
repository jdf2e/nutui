<template>
  <div class="demo-list">
    <h4>基本用法</h4>
    <div class="show-demo">
      <nut-cell :isLink="true" @click.native="showKeyBoard(1)" :showIcon="true" title="默认键盘"></nut-cell>
      <nut-numberkeyboard :visible="visible1" @input="input" @delete="onDelete" @close="close(1)" @enter="enter" @leave="leave"> </nut-numberkeyboard>
    </div>
    <h4>带右侧栏键盘</h4>
    <div class="show-demo">
      <nut-cell :isLink="true" @click.native="showKeyBoard(2)" :showIcon="true" title="带右侧栏键盘"></nut-cell>
      <nut-numberkeyboard type="rightColumn" :visible="visible2" :custom-key="customKey" @input="input" @close="close(2)"> </nut-numberkeyboard>
    </div>
    <h4>带标题栏键盘</h4>
    <div class="show-demo">
      <nut-cell :isLink="true" @click.native="showKeyBoard(3)" :showIcon="true" title="带标题栏键盘"></nut-cell>
      <nut-numberkeyboard title="默认键盘" :visible="visible3" :custom-key="customKey" @input="input" @close="close(3)"> </nut-numberkeyboard>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: '默认键盘',
      visible1: false,
      visible2: false,
      visible3: false,
      val: '',
      customKey: ['.']
    };
  },
  methods: {
    showKeyBoard(index) {
      this[`visible${index}`] = true;
    },
    input(number) {
      this.$toast.text(`输入：${number}`);
    },
    onDelete() {
      this.val = this.val.slice(0, this.val.length - 1);
    },
    close(index) {
      this[`visible${index}`] = false;
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
