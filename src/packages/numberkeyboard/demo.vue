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
      <nut-numberkeyboard type="rightColumn" :visible="visible2" :custom-key="customKey1" @input="input" @close="close(2)"> </nut-numberkeyboard>
    </div>
    <h4>带标题栏键盘</h4>
    <div class="show-demo">
      <nut-cell :isLink="true" @click.native="showKeyBoard(3)" :showIcon="true" title="带标题栏键盘">22</nut-cell>
      <nut-numberkeyboard title="默认键盘" :visible="visible3" :custom-key="customKey2" @input="input" @close="close(3)"> </nut-numberkeyboard>
    </div>
    <h4>双向绑定的键盘</h4>
    <div class="show-demo">
      <div class="boardValue" @click="showKeyBoard(4)">
        <div class="value">
          <nut-textinput placeholder="请输入内容" :has-border="false" v-model="value" readonly label="双向绑定：" />
        </div>
      </div>
      <nut-numberkeyboard :visible="visible4" v-model="value" maxlength="8" @close="close(4)"> </nut-numberkeyboard>
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
      visible4: false,
      value: '',
      customKey1: ['.'],
      customKey2: ['.']
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

<style lang="scss" scoped>
.boardValue {
  padding: 2px 10px;
  font-size: 14px;
  background: #ffffff;
  input {
    border: none;
  }
  // .label,.value {
  //   width: 20%;
  //   display: inline-block;
  //   line-height: 1.5;
  //   font-size: 14px;
  //   color: #2d2d2d;
  // }
  // .value {
  //   width: 75%;
  // }
}
</style>
