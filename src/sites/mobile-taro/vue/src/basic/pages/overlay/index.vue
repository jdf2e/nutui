<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nut-cell>
      <nut-button type="primary" @click="show = true">显示遮罩层</nut-button>
      <nut-overlay v-model:visible="show" :z-index="2000"></nut-overlay>
    </nut-cell>
    <h2>遮罩样式</h2>
    <nut-cell>
      <nut-button type="primary" @click="show3 = true">显示遮罩层</nut-button>
      <nut-overlay v-model:visible="show3" :z-index="2000" :overlay-style="overlayStyle"></nut-overlay>
    </nut-cell>
    <h2>设置动画时间</h2>
    <nut-cell>
      <nut-button type="primary" @click="show4 = true">设置动画时间</nut-button>
      <nut-overlay v-model:visible="show4" :duration="2.5"></nut-overlay>
    </nut-cell>
    <h2>锁定背景滚动</h2>
    <nut-cell>
      <nut-button type="primary" @click="show5 = true">锁定背景滚动</nut-button>
      <nut-overlay v-model:visible="show5" lock-scroll></nut-overlay>
    </nut-cell>
    <h2>嵌套内容</h2>
    <nut-cell>
      <nut-button type="success" @click="show2 = true">嵌套内容</nut-button>
      <nut-overlay v-model:visible="show2" :z-index="2000">
        <div class="wrapper">
          <div class="content">这里是正文</div>
        </div>
      </nut-overlay>
    </nut-cell>
    <h2>点击遮罩不关闭</h2>
    <nut-cell>
      <nut-button type="primary" @click="show6 = true">点击遮罩不关闭</nut-button>
      <nut-overlay v-model:visible="show6" lock-scroll :close-on-click-overlay="false">
        <div class="wrapper">
          <div class="content" @click.stop="show6 = false">close</div>
        </div>
      </nut-overlay>
    </nut-cell>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue';
export default {
  props: {},
  setup() {
    const state = reactive({
      show: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      overlayStyle: {
        backgroundColor: 'rgba(0, 0, 0, .2)'
      }
    });
    return {
      ...toRefs(state)
    };
  }
};
</script>

<style lang="scss">
.wrapper {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  .content {
    display: flex;
    width: 150px;
    height: 150px;
    background: #fff;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    color: red;
  }
}
</style>
