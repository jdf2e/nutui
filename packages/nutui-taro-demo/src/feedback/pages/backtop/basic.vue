<template>
  <view class="demo-box">
    <nut-backtop @click="click">
      <template #content>
        <div v-for="index in 24" :key="index" class="test">{{ index }}</div>
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
.test {
  height: 46px;
  background: #efefef;
  line-height: 46px;
  padding: 0px 20px;
  margin-bottom: 20px;
}
</style>
