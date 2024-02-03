<template>
  <div id="elId2" class="backtop-demo" style="height: 100%; overflow: auto">
    <div v-for="index in 24" :key="index" class="item">{{ index }}</div>
    <nut-backtop el-id="elId2" :distance="100" :bottom="90"></nut-backtop>
  </div>
</template>

<style>
.backtop-demo .item {
  height: 46px;
  background: #efefef;
  line-height: 46px;
  padding: 0px 20px;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
