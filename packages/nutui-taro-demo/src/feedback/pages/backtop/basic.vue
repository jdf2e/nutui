<template>
  <view class="backtop-demo">
    <nut-backtop height="calc(100vh - 100px)" @click="click">
      <template #content>
        <view v-for="index in 24" :key="index" class="item">{{ index }}</view>
      </template>
    </nut-backtop>
  </view>
</template>

<script setup lang="ts">
const click = () => {
  console.log('click');
};
</script>

<style>
.backtop-demo .item {
  height: 46px;
  background: #efefef;
  line-height: 46px;
  padding: 0px 20px;
  margin-bottom: 20px;
}
</style>
