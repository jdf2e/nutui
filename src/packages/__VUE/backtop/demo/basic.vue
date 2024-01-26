<template>
  <div id="elId1">
    <div v-for="index in 24" :key="index" class="test">{{ index }}</div>
    <nut-backtop el-id="elId1" @click="handleClick"></nut-backtop>
  </div>
</template>
<script setup>
const handleClick = () => {
  console.log('back to top');
};
</script>

<style scoped>
.test {
  height: 46px;
  background: #efefef;
  line-height: 46px;
  padding: 0px 20px;
  margin-bottom: 20px;
}
</style>
