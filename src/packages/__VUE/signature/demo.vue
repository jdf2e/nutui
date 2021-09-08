<template>
  <div class="demo">
    <h2>基础用法</h2>
    <div>
      <nut-signature @confirm="confirm" @clear="clear"></nut-signature>
      <p class="demo-tips demo1">Tips: 点击确认按钮,下方显示签名图片</p>
    </div>
    <h2>修改颜色和签字粗细</h2>
    <div>
      <nut-signature
        :lineWidth="lineWidth"
        :strokeStyle="strokeStyle"
      ></nut-signature>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue';
import { createComponent } from '../../utils/create';
const { createDemo } = createComponent('signature');
export default createDemo({
  props: {},
  setup() {
    const state = reactive({
      lineWidth: 4,
      strokeStyle: 'green'
    });

    const confirm = (canvas: any, data: any) => {
      let img = document.createElement('img');
      img.src = data;
      document.querySelector('.demo1').appendChild(img);
    };
    return { ...state, confirm };
  }
});
</script>

<style lang="scss" scoped>
.demo {
  display: flex;
  flex-direction: column;
  .demo-tips {
    font-size: 12px;
    color: #666;
  }
}
</style>
