<template>
  <div id="elId3">
    <div v-for="index in 24" :key="index" class="test">{{ index }}</div>
    <nut-backtop el-id="elId3" :distance="200" :bottom="90"><div>no</div></nut-backtop>
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
