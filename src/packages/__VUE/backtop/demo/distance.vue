<template>
  <div id="elId2">
    <div v-for="index in 24" :key="index" class="test">{{ index }}</div>
    <nut-backtop el-id="elId2" :distance="100" :bottom="90"></nut-backtop>
  </div>
</template>

<style scoped>
.test {
  height: 46px;
  background: #efefef;
  line-height: 46px;
  padding: 0px 20px;
  margin-bottom: 20px;
}
</style>
