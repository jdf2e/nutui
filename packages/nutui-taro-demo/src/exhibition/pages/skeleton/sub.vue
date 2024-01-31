<template>
  <div class="demo-skeleton">
    <nut-switch v-model="checked" />
    <nut-skeleton width="250px" height="15px" title animated avatar row="3" :loading="!checked">
      <div class="container">
        <nut-avatar :size="50">
          <img
            src="https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png"
          />
        </nut-avatar>
        <div class="right-content">
          <div class="title">NutUI</div>
          <div class="desc">
            一套京东风格的轻量级移动端Vue组库，提供丰富的基础组件和业务组件，帮助开发者快速搭建移动应用。
          </div>
        </div>
      </div>
    </nut-skeleton>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const checked = ref(false);
</script>

<style>
.demo-skeleton .container {
  display: flex;
}
.demo-skeleton .right-content {
  margin-left: 19px;
  display: flex;
  flex-direction: column;
}
.demo-skeleton .title {
  font-size: 14px;
  color: rgba(51, 51, 51, 1);
}
.demo-skeleton .desc {
  margin-top: 10px;
  font-size: 13px;
  color: rgba(154, 155, 157, 1);
}
</style>
