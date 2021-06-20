<template>
  <div class="index">
    <div class="index-header">
      <img src="../../assets/images/logo-red.png" alt="" srcset="" />
      <div class="info">
        <h1>NutUI-Taro</h1>
        <p>请使用微信扫描下方二维码查看效果</p>
      </div>
    </div>
    <div class="index-wxcode">
      <img
        src="https://img12.360buyimg.com/imagetools/jfs/t1/162421/39/13392/9425/6052ea60E592310a9/264bdff23ef5fe95.png"
        width="200"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'doc',
  setup() {
    return {};
  }
});
</script>
<style lang="scss" scoped>
.index {
  height: 100%;
  width: 100%;
  padding-top: 30px;

  &-header {
    display: flex;
    align-items: center;
    padding: 0 34px;
    height: 117px;
    > img {
      width: 67px;
      height: 67px;
      margin-right: 18px;
      flex-shrink: 0;
    }
    .info {
      display: flex;
      flex-direction: column;
      h1 {
        height: 48px;
        line-height: 48px;
        font-size: 34px;
        color: rgba(51, 51, 51, 1);
      }
      p {
        height: 18px;
        line-height: 18px;
        font-size: 12px;
        color: rgba(154, 155, 157, 1);
      }
    }
  }
  &-wxcode {
    display: flex;
    height: calc(100% - 117px);
    background: #f7f8fa;
    border-radius: 30px 30px 0 0;
    overflow: hidden;
    padding: 30px 25px;
    align-items: center;
    justify-content: center;
  }
}
</style>
