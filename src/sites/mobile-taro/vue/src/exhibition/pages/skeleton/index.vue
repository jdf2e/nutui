<template>
  <view class="demo">
    <h2>基础用法</h2>
    <nut-skeleton width="250px" height="15px" animated> </nut-skeleton>

    <h2>传入多行</h2>
    <nut-skeleton width="250px" height="15px" title animated row="3"> </nut-skeleton>

    <h2>显示头像</h2>
    <nut-skeleton width="250px" height="15px" title animated avatar row="3"> </nut-skeleton>

    <h2>标题段落圆角风格</h2>
    <nut-skeleton width="250px" height="15px" animated round></nut-skeleton>

    <h2>图片组合</h2>

    <div class="pic-compose">
      <nut-skeleton width="250px" height="15px" title animated row="3" class="item"> </nut-skeleton>
      <nut-skeleton width="250px" height="15px" title animated row="3" class="item"> </nut-skeleton>
    </div>

    <h2>显示子组件</h2>
    <view class="content">
      <nut-switch v-model="checked" size="15px" />
      <nut-skeleton width="250px" height="15px" title animated avatar row="3" :loading="!checked">
        <view class="container">
          <nut-avatar
            size="50"
            icon="https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png"
          />
          <view class="right-content">
            <view class="title">NutUI</view>
            <view class="desc"
              >一套京东风格的轻量级移动端Vue组库，提供丰富的基础组件和业务组件，帮助开发者快速搭建移动应用。</view
            >
          </view>
        </view>
      </nut-skeleton>
    </view>
  </view>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  setup() {
    const checked = ref(false);

    return {
      checked
    };
  }
};
</script>

<style lang="scss">
.content {
  .nut-switch {
    margin: 0 16px 8px 0;
  }
  .container {
    display: flex;
    .right-content {
      margin-left: 19px;
      font-family: PingFangSC;
      display: flex;
      flex-direction: column;
      .title {
        font-size: 14px;
        color: rgba(51, 51, 51, 1);
      }
      .desc {
        margin-top: 10px;
        font-size: 13px;
        color: rgba(154, 155, 157, 1);
      }
    }
  }
}
.pic-compose {
  display: flex;
  justify-content: space-between;
  .item {
    width: 47%;
  }
}
</style>
